import { create } from "zustand";

const useBookStore = create((set) => ({
  username: "",
  setUsername: (newusername: string) => set({ username: newusername }),
}));

export { useBookStore };
