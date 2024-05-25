import { create } from "zustand";
import { ChatMessageProps } from "./types";

type ChatState = {
  messages: ChatMessageProps[];
  addMessage: (message: ChatMessageProps) => void;
  removeAllMessages: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  removeAllMessages: () => set({ messages: [] }),
}));
