import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

import { type ChatCompletionResponseMessage } from "openai";
import {
  ControllerPool,
  conversationHandler,
  loginStausHandler,
  messageHandler,
  requestChatStream,
  requestWithPrompt,
} from "../requests";
import { formatDate, isMobileScreen, trimTopic } from "../utils";

import Locale from "../locales";
import { showToast } from "../components/ui-lib";
import { ConversationResponse } from "../types/conversation";
import { DIALOG_MAX_COUNT, MAX_MIL_SECOUND_SENDMESSGE } from "../constant";

export type Message = ChatCompletionResponseMessage & {
  date: string;
  streaming?: boolean;
  isError?: boolean;
  id?: string;
};

export function createMessage(override: Partial<Message>): Message {
  return {
    id: uuidv4(),
    date: new Date().toLocaleString(),
    role: "user",
    content: "",
    ...override,
  };
}

export enum SubmitKey {
  Enter = "Enter",
  CtrlEnter = "Ctrl + Enter",
  ShiftEnter = "Shift + Enter",
  AltEnter = "Alt + Enter",
  MetaEnter = "Meta + Enter",
}

export enum Theme {
  Auto = "auto",
  Dark = "dark",
  Light = "light",
}

export interface ChatConfig {
  historyMessageCount: number; // -1 means all
  compressMessageLengthThreshold: number;
  sendBotMessages: boolean; // send bot's message or not
  submitKey: SubmitKey;
  avatar: string;
  fontSize: number;
  theme: Theme;
  tightBorder: boolean;
  sendPreviewBubble: boolean;

  disablePromptHint: boolean;

  modelConfig: {
    model: string;
    temperature: number;
    max_tokens: number;
    presence_penalty: number;
  };
}

export type ModelConfig = ChatConfig["modelConfig"];

export const ROLES: Message["role"][] = ["system", "user", "assistant"];

const ENABLE_GPT4 = true;

export const ALL_MODELS = [
  {
    name: "gpt-4",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-4-0314",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-4-32k",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-4-32k-0314",
    available: ENABLE_GPT4,
  },
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0301",
    available: true,
  },
];

export function limitNumber(
  x: number,
  min: number,
  max: number,
  defaultValue: number,
) {
  if (typeof x !== "number" || isNaN(x)) {
    return defaultValue;
  }

  return Math.min(max, Math.max(min, x));
}

export function limitModel(name: string) {
  return ALL_MODELS.some((m) => m.name === name && m.available)
    ? name
    : ALL_MODELS[4].name;
}

export const ModalConfigValidator = {
  model(x: string) {
    return limitModel(x);
  },
  max_tokens(x: number) {
    return limitNumber(x, 0, 32000, 2000);
  },
  presence_penalty(x: number) {
    return limitNumber(x, -2, 2, 0);
  },
  temperature(x: number) {
    return limitNumber(x, 0, 2, 1);
  },
};

const DEFAULT_CONFIG: ChatConfig = {
  historyMessageCount: 2,
  compressMessageLengthThreshold: 1000,
  sendBotMessages: true as boolean,
  submitKey: SubmitKey.CtrlEnter as SubmitKey,
  avatar: "1f603",
  fontSize: 14,
  theme: Theme.Light as Theme,
  tightBorder: true,
  sendPreviewBubble: true,

  disablePromptHint: true,

  modelConfig: {
    model: "gpt-3.5-turbo",
    temperature: 1,
    max_tokens: 2000,
    presence_penalty: 0,
  },
};

export interface ChatStat {
  tokenCount: number;
  wordCount: number;
  charCount: number;
}

export interface ChatSession {
  id: number;
  conversationId: string;
  topic: string;
  sendMemory: boolean;
  memoryPrompt: string;
  context: Message[];
  messages: Message[];
  stat: ChatStat;
  lastUpdate: string;
  lastSummarizeIndex: number;
}

const DEFAULT_TOPIC = Locale.Store.DefaultTopic;
export const BOT_HELLO: Message = createMessage({
  role: "assistant",
  content: Locale.Store.BotHello,
});

function createEmptySession(opt?: {
  isClearAll?: boolean;
  needBEStore?: boolean;
}): ChatSession {
  const createDate = new Date().toLocaleString();
  const tempID = uuidv4();
  const session = {
    id: Date.now(),
    conversationId: tempID,
    topic: DEFAULT_TOPIC + tempID.substring(0, 4),
    sendMemory: true,
    memoryPrompt: null,
    context: [],
    messages: [],
    stat: {
      tokenCount: 0,
      wordCount: 0,
      charCount: 0,
    },
    lastUpdate: createDate,
    lastSummarizeIndex: 0,
  };
  if (!opt) {
    opt = {};
  }
  //如果第一次进入页面没有本地存储的内容
  if (!localStorage.getItem(LOCAL_KEY)) {
    opt.needBEStore = true;
  }

  if (opt.isClearAll) {
    // 删除全部，并且创建一条新的
    conversationHandler("deleteallandcreateone", session);
  } else if (opt.needBEStore) {
    // 后台创建session
    conversationHandler("create", session, {
      onFinish: (message: any) => {
        if (message?.code != 200) {
          alert(Locale.Session.MaxCountServerError(DIALOG_MAX_COUNT));
        }
        console.log("message=>", message);
      },
      onError: (error: Error, statusCode?: number) => {
        alert(Locale.Session.MaxCountServerError(DIALOG_MAX_COUNT));
        console.log("Error=>", statusCode, error);
      },
    });
  }
  return session;
}

interface ChatStore {
  config: ChatConfig;
  sessions: ChatSession[];
  chatLeftNums: number;
  currentSessionIndex: number;
  lastChatWithBotTime: number;
  getLastChatWithBotTime: () => number;
  setLastChatWithBotTime: (time: number) => void;
  initDateFromServer: () => Promise<any>;
  clearSessions: () => void;
  removeSession: (index: number) => void;
  moveSession: (from: number, to: number) => void;
  selectSession: (index: number) => void;
  newSession: () => void;
  deleteSession: () => void;
  currentSession: () => ChatSession;
  onNewMessage: (message: Message) => void;
  onUserInput: (content: string) => Promise<void>;
  summarizeSession: () => void;
  updateStat: (message: Message) => void;
  updateCurrentSession: (updater: (session: ChatSession) => void) => void;
  updateMessage: (
    sessionIndex: number,
    messageIndex: number,
    updater: (message?: Message) => void,
  ) => void;
  resetSession: () => void;
  getMessagesWithMemory: () => Message[];
  getMemoryPrompt: () => Message;

  getConfig: () => ChatConfig;
  resetConfig: () => void;
  updateConfig: (updater: (config: ChatConfig) => void) => void;
}

function countMessages(msgs: Message[]) {
  return msgs.reduce((pre, cur) => pre + cur.content.length, 0);
}

function getParentMessageId(msgs: Message[]) {
  let messageId = "";
  try {
    messageId = msgs[msgs.length - 2]["id"];
  } catch (error) {}

  return messageId;
}

const LOCAL_KEY = "chat-next-web-store";

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      initDateFromServer: async () => {
        const _promise = () => {
          return new Promise((resolve, reject) => {
            conversationHandler(
              "list",
              {},
              {
                onFinish: (message: any) => {
                  resolve(message?.data || {});
                },
                onError: (error: Error, statusCode?: number) => {
                  reject(error);
                },
              },
            );
          });
        };
        const _loginCheckerPromise = () => {
          return new Promise((resolve, reject) => {
            loginStausHandler({
              onFinish: (message: any) => {
                resolve(message || {});
              },
              onError: (error: Error, statusCode?: number) => {
                reject(error);
              },
            });
          });
        };
        try {
          try {
            const loginResult = await _loginCheckerPromise();
            set({
              chatLeftNums: loginResult.chatLeftNums,
            });
          } catch (error) {
            //本地开发环境不校验登陆态
            if (process.env.NODE_ENV !== "development") {
              window.location.href = "/wxopenapi/login";
            }
          }
          //如果本地有数据就不从后台更新
          if (get().sessions.length) {
            set({
              sessions: get().sessions,
            });
            return;
          }

          //本地没有sessions就从后台获取
          const response = await _promise();
          //初始化数据，回填到本地存储中，如果出错就创建一个本地的
          console.log("[conversation list responeeee]", response);
          set({
            sessions: createSessionsFromServer(
              response as ConversationResponse,
            ),
            currentSessionIndex: 0,
          });
        } catch (error) {
          console.log("[eerrrr", error);
          //如果长度为0，需要新建一个
          set({
            sessions: [createEmptySession({ needBEStore: true })],
            currentSessionIndex: 0,
          });
        }
      },
      sessions: [],
      chatLeftNums: 0,
      currentSessionIndex: 0,
      lastChatWithBotTime: 0,
      config: {
        ...DEFAULT_CONFIG,
      },
      getLastChatWithBotTime() {
        return get().lastChatWithBotTime;
      },
      setLastChatWithBotTime(_time: number) {
        set({ lastChatWithBotTime: _time });
      },

      clearSessions() {
        set(() => ({
          sessions: [createEmptySession({ isClearAll: true })],
          currentSessionIndex: 0,
        }));
      },
      resetConfig() {
        set(() => ({ config: { ...DEFAULT_CONFIG } }));
      },

      getConfig() {
        return get().config;
      },

      updateConfig(updater) {
        const config = get().config;
        updater(config);
        set(() => ({ config }));
      },

      selectSession(index: number) {
        set({
          currentSessionIndex: index,
        });
        //如果这个session的message数量为0就获取这条session下面的历史聊天记录

        const curSesion = get().currentSession();
        console.log("[curSesion]", curSesion);
        if (!curSesion.messages.length) {
          messageHandler("list", curSesion.conversationId, {
            onFinish(data) {
              let _msgs = [];
              for (const mm of data) {
                _msgs.push({
                  id: mm.id,
                  date: formatDate(new Date(mm.createdAt).getTime()),
                  role: mm.msgType === 1 ? "user" : "assistant",
                  content: mm.content,
                });
              }
              get().updateCurrentSession((session) => {
                session.messages = _msgs;
              });
            },
            onError() {},
          });
        }
      },

      removeSession(index: number) {
        set((state) => {
          let nextIndex = state.currentSessionIndex;
          const sessions = state.sessions;
          const curSesion = get().currentSession();
          const tobeDeletedConversationId = curSesion.conversationId;

          if (sessions.length === 1) {
            return {
              currentSessionIndex: 0,
              sessions: [createEmptySession()],
            };
          }

          sessions.splice(index, 1);

          // 后台delete session
          conversationHandler("delete", {
            conversationId: tobeDeletedConversationId,
          });

          if (nextIndex === index) {
            nextIndex -= 1;
          }

          return {
            currentSessionIndex: nextIndex,
            sessions,
          };
        });
      },

      moveSession(from: number, to: number) {
        set((state) => {
          const { sessions, currentSessionIndex: oldIndex } = state;

          // move the session
          const newSessions = [...sessions];
          const session = newSessions[from];
          newSessions.splice(from, 1);
          newSessions.splice(to, 0, session);

          // modify current session id
          let newIndex = oldIndex === from ? to : oldIndex;
          if (oldIndex > from && oldIndex <= to) {
            newIndex -= 1;
          } else if (oldIndex < from && oldIndex >= to) {
            newIndex += 1;
          }

          return {
            currentSessionIndex: newIndex,
            sessions: newSessions,
          };
        });
      },

      newSession() {
        if (get().sessions.length >= DIALOG_MAX_COUNT) {
          alert(Locale.Session.MaxCount(DIALOG_MAX_COUNT));
          return;
        }
        set((state) => ({
          currentSessionIndex: 0,
          sessions: [createEmptySession({ needBEStore: true })].concat(
            state.sessions,
          ),
        }));
      },

      deleteSession() {
        const deletedSession = get().currentSession();
        const index = get().currentSessionIndex;
        const isLastSession = get().sessions.length === 1;

        if (confirm(Locale.Home.DeleteChat)) {
          get().removeSession(index);

          showToast(Locale.Home.DeleteToast, {
            text: Locale.Home.Revert,
            onClick() {
              set((state) => ({
                sessions: state.sessions
                  .slice(0, index)
                  .concat([deletedSession])
                  .concat(state.sessions.slice(index + Number(isLastSession))),
              }));
            },
          });
        }
      },

      currentSession() {
        let index = get().currentSessionIndex;
        const sessions = get().sessions;

        if (index < 0 || index >= sessions.length) {
          index = Math.min(sessions.length - 1, Math.max(0, index));
          set(() => ({ currentSessionIndex: index }));
        }

        const session = sessions[index];

        return session;
      },

      onNewMessage(message) {
        get().updateCurrentSession((session) => {
          session.lastUpdate = new Date().toLocaleString();
        });
        get().updateStat(message);
        get().summarizeSession();
      },

      async onUserInput(content) {
        const userMessage: Message = createMessage({
          role: "user",
          content,
        });

        const botMessage: Message = createMessage({
          role: "assistant",
          streaming: true,
        });

        // get recent messages
        const recentMessages = get().getMessagesWithMemory();
        const sendMessages = recentMessages.concat(userMessage);
        const sessionIndex = get().currentSessionIndex;
        const messageIndex = get().currentSession().messages.length + 1;

        // save user's and bot's message
        get().updateCurrentSession((session) => {
          session.messages.push(userMessage);
          session.messages.push(botMessage);
        });

        // make request
        console.log("[User Input] ", content);

        // 获取当前sessionid currentSession
        requestChatStream(sendMessages, {
          conversationId: get().currentSession().conversationId,
          parentMessageId: getParentMessageId(sendMessages),
          messageId: userMessage.id,
          onFinish(_mesResponse) {
            botMessage.streaming = false;
            botMessage.content = _mesResponse.text;
            botMessage.id = _mesResponse.id;
            let chatLeftNums = _mesResponse.chatLeftNums;
            set({ chatLeftNums });
            get().onNewMessage(botMessage);
          },
          onError(error, statusCode) {
            botMessage.content += "\n\n" + Locale.Store.Error;
            botMessage.streaming = false;
            userMessage.isError = true;
            botMessage.isError = true;
            set(() => ({}));
          },
        });
      },

      getMemoryPrompt() {
        const session = get().currentSession();

        return {
          role: "system",
          content: Locale.Store.Prompt.History(session.memoryPrompt),
          date: "",
        } as Message;
      },

      getMessagesWithMemory() {
        const session = get().currentSession();
        const config = get().config;
        const messages = session.messages.filter((msg) => !msg.isError);
        const n = messages.length;

        const context = session.context.slice();

        if (session.sendMemory && session.memoryPrompt) {
          const memoryPrompt = get().getMemoryPrompt();
          context.push(memoryPrompt);
        }

        const recentMessages = context.concat(
          messages.slice(Math.max(0, n - config.historyMessageCount)),
        );

        return recentMessages;
      },

      updateMessage(
        sessionIndex: number,
        messageIndex: number,
        updater: (message?: Message) => void,
      ) {
        const sessions = get().sessions;
        const session = sessions.at(sessionIndex);
        const messages = session?.messages;
        updater(messages?.at(messageIndex));
        set(() => ({ sessions }));
      },

      resetSession() {
        get().updateCurrentSession((session) => {
          session.messages = [];
          session.memoryPrompt = "";
        });
      },

      summarizeSession() {
        const session = get().currentSession();

        // should summarize topic after chating more than 50 words
        const SUMMARIZE_MIN_LEN = 50;
        if (
          session.topic === DEFAULT_TOPIC &&
          countMessages(session.messages) >= SUMMARIZE_MIN_LEN
        ) {
          requestWithPrompt(session.messages, Locale.Store.Prompt.Topic).then(
            (res) => {
              get().updateCurrentSession(
                (session) =>
                  (session.topic = res ? trimTopic(res) : DEFAULT_TOPIC),
              );
            },
          );
        }

        const config = get().config;
        let toBeSummarizedMsgs = session.messages.slice(
          session.lastSummarizeIndex,
        );

        const historyMsgLength = countMessages(toBeSummarizedMsgs);

        if (historyMsgLength > get().config?.modelConfig?.max_tokens ?? 4000) {
          const n = toBeSummarizedMsgs.length;
          toBeSummarizedMsgs = toBeSummarizedMsgs.slice(
            Math.max(0, n - config.historyMessageCount),
          );
        }

        // add memory prompt
        toBeSummarizedMsgs.unshift(get().getMemoryPrompt());

        const lastSummarizeIndex = session.messages.length;

        console.log(
          "[Chat History] ",
          toBeSummarizedMsgs,
          historyMsgLength,
          config.compressMessageLengthThreshold,
        );

        if (historyMsgLength > config.compressMessageLengthThreshold) {
          requestChatStream(
            toBeSummarizedMsgs.concat({
              role: "system",
              content: Locale.Store.Prompt.Summarize,
              date: "",
            }),
            {
              filterBot: false,
              onMessage(message, done) {
                session.memoryPrompt = message;
                if (done) {
                  console.log("[Memory] ", session.memoryPrompt);
                  session.lastSummarizeIndex = lastSummarizeIndex;
                }
              },
              onError(error) {
                console.error("[Summarize] ", error);
              },
            },
          );
        }
      },

      updateStat(message) {
        get().updateCurrentSession((session) => {
          session.stat.charCount += message.content.length;
          // TODO: should update chat count and word count
        });
      },

      updateCurrentSession(updater) {
        const sessions = get().sessions;
        const index = get().currentSessionIndex;
        updater(sessions[index]);
        set(() => ({ sessions }));
      },

      // clearAllData() {
      //   if (confirm(Locale.Store.ConfirmClearAll)) {
      //     localStorage.clear();
      //     location.reload();
      //   }
      // },
    }),
    {
      name: LOCAL_KEY,
      version: 1.2,
      migrate(persistedState, version) {
        const state = persistedState as ChatStore;

        if (version === 1) {
          state.sessions.forEach((s) => (s.context = []));
        }

        if (version < 1.2) {
          state.sessions.forEach((s) => (s.sendMemory = true));
        }

        return state;
      },
    },
  ),
);

/**
 * 根据后台存储的内容构造初始化内容
 * @param response
 * @returns
 */
function createSessionsFromServer(
  response: ConversationResponse,
): ChatSession[] {
  const _coverstaionFromBE = response?.result || [];
  const firstConversationMessages = response?.firstConversationMessages || [];
  const _temp = []; //用来返回的初始化数据

  for (let index = 0; index < _coverstaionFromBE.length; index++) {
    const _item = _coverstaionFromBE[index];
    const _msgs = [];
    if (index === 0) {
      for (const mm of firstConversationMessages) {
        _msgs.push({
          id: mm.id,
          date: formatDate(new Date(mm.createdAt).getTime()),
          role: mm.msgType === 1 ? "user" : "assistant",
          content: mm.content,
        });
      }
    }
    const tempSess: ChatSession = {
      id: new Date(_item.createdAt).getTime(),
      conversationId: _item.conversationId,
      topic: _item.topic,
      sendMemory: true,
      memoryPrompt: String(_item.memoryPrompt),
      context: [],
      messages: _msgs,
      stat: {
        tokenCount: 0,
        wordCount: 0,
        charCount: 0,
      },
      lastUpdate: formatDate(new Date(_item.updatedAt).getTime()),
      lastSummarizeIndex: 0,
    };
    _temp.push(tempSess);
  }
  //如果长度为0，需要新建一个
  if (_temp.length === 0) {
    _temp.push(createEmptySession({ needBEStore: true }));
  }
  return _temp;
}
