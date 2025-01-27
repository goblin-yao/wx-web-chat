import axios from "axios";
import type { ChatRequest, ChatReponse } from "./api/openai/typing";
import { Message, ModelConfig, useAccessStore, useChatStore } from "./store";
import { showToast } from "./components/ui-lib";
import { setCookie } from "./utils";
import { AIResponseType } from "./types/openai";
import { ChatConversation } from "./types/conversation";

const TIME_OUT_MS = 60000;

//设置cookie，测试环境方便测试
(() => {
  //只有测试环境猜有这个，其他的等接入平台后使用
  if (process.env.NODE_ENV === "development") {
    //只是用来测试的openid
    // setCookie("openid", "oBxdH6DqDTaAqb7k49UgBG3et9EM");
    // setCookie("unionid", "ob-vI5p5P9MOmSr4tIc1fH5yetCQ");
  }
})();

const makeRequestParam = (
  messages: Message[],
  options?: {
    filterBot?: boolean;
    stream?: boolean;
  },
): ChatRequest => {
  let sendMessages = messages.map((v) => ({
    role: v.role,
    content: v.content,
  }));

  if (options?.filterBot) {
    sendMessages = sendMessages.filter((m) => m.role !== "assistant");
  }

  const modelConfig = { ...useChatStore.getState().config.modelConfig };

  // @yidadaa: wont send max_tokens, because it is nonsense for Muggles
  // @ts-expect-error
  delete modelConfig.max_tokens;

  return {
    messages: sendMessages,
    stream: options?.stream,
    ...modelConfig,
  };
};

function getHeaders() {
  const accessStore = useAccessStore.getState();
  let headers: Record<string, string> = {};

  if (accessStore.enabledAccessControl()) {
    headers["access-code"] = accessStore.accessCode;
  }

  if (accessStore.token && accessStore.token.length > 0) {
    headers["token"] = accessStore.token;
  }

  return headers;
}

export function requestOpenaiClient(path: string) {
  return (body: any, method = "POST") =>
    fetch("/api/openai?_vercel_no_cache=1", {
      method,
      headers: {
        "Content-Type": "application/json",
        path,
        ...getHeaders(),
      },
      body: body && JSON.stringify(body),
    });
}

export async function requestChat(messages: Message[]) {
  const req: ChatRequest = makeRequestParam(messages, { filterBot: true });

  const res = await requestOpenaiClient("v1/chat/completions")(req);

  try {
    const response = (await res.json()) as ChatReponse;
    return response;
  } catch (error) {
    console.error("[Request Chat] ", error, res.body);
  }
}

export async function requestUsage() {
  const formatDate = (d: Date) =>
    `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d
      .getDate()
      .toString()
      .padStart(2, "0")}`;
  const ONE_DAY = 2 * 24 * 60 * 60 * 1000;
  const now = new Date(Date.now() + ONE_DAY);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startDate = formatDate(startOfMonth);
  const endDate = formatDate(now);

  const [used, subs] = await Promise.all([
    requestOpenaiClient(
      `dashboard/billing/usage?start_date=${startDate}&end_date=${endDate}`,
    )(null, "GET"),
    requestOpenaiClient("dashboard/billing/subscription")(null, "GET"),
  ]);

  const response = (await used.json()) as {
    total_usage?: number;
    error?: {
      type: string;
      message: string;
    };
  };

  const total = (await subs.json()) as {
    hard_limit_usd?: number;
  };

  if (response.error && response.error.type) {
    showToast(response.error.message);
    return;
  }

  if (response.total_usage) {
    response.total_usage = Math.round(response.total_usage) / 100;
  }

  return {
    used: response.total_usage,
    subscription: total.hard_limit_usd,
  };
}

export async function requestChatStream(
  messages: Message[],
  options?: {
    conversationId: string;
    parentMessageId?: string;
    messageId: string;
    onProgress: (message: AIResponseType) => void;
    onFinish: (message: AIResponseType) => void;
    onError: (error: Error, statusCode?: number) => void;
  },
) {
  console.log("[Request] ", messages);

  let controller = new AbortController();

  try {
    const response = await fetch("/web/baidu/chatstream", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        messages,
        options: {
          conversationId: options.conversationId,
          parentMessageId: options.parentMessageId,
          messageId: options.messageId,
          promptType: 1,
        },
      }),
      signal: controller.signal,
    });

    const reader = (response as any).body.getReader();
    let data = {} as AIResponseType;
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        // console.log("[data done]", data);
        options?.onFinish(data);
        break;
      }

      let decodedValue = new TextDecoder().decode(value);
      //一次可能接受多次数据
      const tempDate = decodedValue.split("$@@$");
      tempDate.map((_data) => {
        if (_data) {
          try {
            options?.onProgress((data = JSON.parse(_data)));
          } catch (error) {
            console.error("[error]", error);
          }
        }
      });
    }
  } catch (err) {
    console.error("NetWork Error", err);
    alert(err);
    options?.onError(err as Error);
  }
}

export async function requestWithPrompt(messages: Message[], prompt: string) {
  messages = messages.concat([
    {
      role: "user",
      content: prompt,
      date: new Date().toLocaleString(),
    },
  ]);

  const res = await requestChat(messages);

  return res?.choices?.at(0)?.message?.content ?? "";
}

// To store message streaming controller
export const ControllerPool = {
  controllers: {} as Record<string, AbortController>,

  addController(
    sessionIndex: number,
    messageId: number,
    controller: AbortController,
  ) {
    const key = this.key(sessionIndex, messageId);
    this.controllers[key] = controller;
    return key;
  },

  stop(sessionIndex: number, messageId: number) {
    const key = this.key(sessionIndex, messageId);
    const controller = this.controllers[key];
    controller?.abort();
  },

  remove(sessionIndex: number, messageId: number) {
    const key = this.key(sessionIndex, messageId);
    delete this.controllers[key];
  },

  key(sessionIndex: number, messageIndex: number) {
    return `${sessionIndex},${messageIndex}`;
  },
};

export async function conversationHandler(
  action: "create" | "update" | "delete" | "deleteallandcreateone" | "list", // 增删改查，删除全部
  _conversation?: ChatConversation,
  options?: {
    onFinish: (message: any) => void;
    onError: (error: Error, statusCode?: number) => void;
  },
) {
  //挑选部分属性传到Server
  const sendToServer = {
    conversationId: _conversation.conversationId,
    topic: _conversation.topic,
    memoryPrompt: _conversation.memoryPrompt,
  };
  console.log(`[conversationHandler Request]:${action} `, sendToServer);

  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const _response = await axios.post(
      `/web/conversation/${action}`,
      {
        conversation: sendToServer,
      },
      {
        headers,
        timeout: TIME_OUT_MS,
      },
    );
    console.log("[conversationHandler Response] ", _response);
    if (200 === _response.status) {
      options?.onFinish(_response?.data);
    } else {
      console.error("Response Error", _response);
      options?.onError(new Error("Response Error"), _response.status);
    }
  } catch (err) {
    console.error("NetWork Error", err);
    options?.onError(err as Error);
  }
}

export async function messageHandler(
  action: "list", // 查询
  conversationId: string,
  options?: {
    onFinish: (message: any) => void;
    onError: (error: Error, statusCode?: number) => void;
  },
) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const _response = await axios.post(
      `/web/messages/${action}`,
      {
        conversationId,
      },
      {
        headers,
        timeout: TIME_OUT_MS,
      },
    );
    console.log("[messageHandler Response] ", _response);
    if (200 === _response.status) {
      options?.onFinish(_response?.data?.data);
    } else {
      console.error("Response Error", _response);
      options?.onError(new Error("Response Error"), _response.status);
    }
  } catch (err) {
    console.error("NetWork Error", err);
    options?.onError(err as Error);
  }
}

export async function loginStausHandler(options: {
  onFinish: (message: any) => void;
  onError: (error: Error, statusCode?: number) => void;
}) {
  try {
    const _response = await axios.get(`/web/checklogin`);
    console.log("[loginStausHandler Response] ", _response);
    if (200 === _response.status) {
      options?.onFinish(_response?.data?.data);
    } else {
      console.error("Response Error", _response);
      options?.onError(new Error("Response Error"), _response.status);
    }
  } catch (err) {
    console.error("NetWork Error", err);
    options?.onError(err as Error);
  }
}
