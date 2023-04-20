export interface ChatConversation {
  conversationId: string;
  topic?: string;
  memoryPrompt?: number;
}
export type ConversationFromServer = {
  id: number;
  createdBy: string;
  conversationId: string;
  topic: string;
  memoryPrompt: number;
  createdAt: string; //"2023-04-18T14:56:40.000Z",
  updatedAt: string;
};
export type ChatMessageFromServer = {
  id: number;
  openid: string;
  content: string;
  msgType: number;
  conversationId: string;
  messageId: string;
  parentMessageId: string;
  createdAt: string; //"2023-04-18T14:56:40.000Z",
  updatedAt: string;
};
export type ConversationResponse = {
  result: ConversationFromServer[];
  firstConversationMessages: ChatMessageFromServer[];
};
