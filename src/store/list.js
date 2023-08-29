import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useListStore = create(
  devtools((set) => ({
    list: [
      {
        id: crypto.randomUUID(),
        title: 'Zustand는 츄~슈탄트로 발음합니다.',
      },
    ],

    addItem: (newItemTitle) =>
      set(
        (state) => ({
          list: [
            ...state.list,
            {
              id: crypto.randomUUID(),
              title: newItemTitle,
            },
          ],
        }),
        false,
        'list/addItem'
      ),
    deleteItem: (deleteId) =>
      set(
        (state) => ({
          list: state.list.filter((item) => item.id !== deleteId),
        }),
        false,
        'list/removeItem'
      ),
  }))
);
