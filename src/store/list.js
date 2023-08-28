import { create } from 'zustand';

export const useListStore = create((set) => ({
  // Query
  list: [
    {
      id: crypto.randomUUID(),
      title: 'Zustand는 츄~스탄트로 발음합니다.',
    },
  ],

  // Mutation
  addItem: (newItemTitle) =>
    set((state) => ({
      list: [
        ...state.list,
        {
          id: crypto.randomUUID(),
          title: newItemTitle,
        },
      ],
    })),
  deleteItem: (deleteId) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== deleteId),
    })),
}));
