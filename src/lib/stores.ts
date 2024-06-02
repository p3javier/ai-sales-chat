import { create } from "zustand";
import { ChatMessageProps } from "./types";
// import { persist, createJSONStorage } from 'zustand/middleware'
// TODO: Add a middleware to persist the store in the local storage

type ChatState = {
  messages: ChatMessageProps[];
  addMessage: (message: ChatMessageProps) => void;
  removeAllMessages: () => void;
  removeLastMessage: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  removeAllMessages: () => set({ messages: [] }),
  removeLastMessage: () =>
    set((state) => {
      state.messages.pop();
      return { messages: state.messages };
    }),
}));

/*
export const useVideoStore = create((set) => ({
  videoUrl: "",
  setVideoUrl: (url: string) => set({ videoUrl: url }),
}));
*/
