import { create } from 'zustand';

const initialCount = 0;

export const useCountStore = create((set) => ({
  count: initialCount,

  increment: (by) =>
    set((state) => ({
      count: state.count + by,
    })),
  decrement: (by) =>
    set((state) => ({
      count: state.count - by,
    })),
  reset: () =>
    set(() => ({
      count: initialCount,
    })),
}));
