//   role: "assistant",
//   id: "chatcmpl-75yj48j7iLtaAvRKRl9bDF0d0RGUb",
//   parentMessageId: "35a2cf4c-3064-403f-aa43-0d22be47c133",
//   conversationId: "ba74e57c-9f8f-4afa-8ba7-5d0f0220c87d",
//   text: "The answer to 1+2 is 3!",
//   detail: { model: "1030-obrut-5.3-tpg" },

export type Role = "user" | "assistant";

export interface AIResponseType {
  text: string;
  role: Role;
  id: string;
  parentMessageId: string;
  conversationId: string;
  detail?: { model: string };
}
