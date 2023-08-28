import { create } from 'zustand';

// store (define state & action)
const listStore = () => {
  // return store's state & actions
  return {
    // state
    list: [
      {
        id: crypto.randomUUID(),
        title: 'Zustand는 츄~스탄트로 발음합니다.',
      },
    ],
    // actions
  };
};

// hook (bind component) ← store (define state & action)
export const useListStore = create(listStore);
