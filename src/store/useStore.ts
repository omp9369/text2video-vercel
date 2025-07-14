import { create } from 'zustand';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

interface Store {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useStore = create<Store>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));