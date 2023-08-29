import { create } from 'zustand';

const catsStore = (set) => {
  return {
    cats: [
      { id: crypto.randomUUID(), name: '찐빵', age: 2, gender: 'male' },
      { id: crypto.randomUUID(), name: '뭉치', age: 2, gender: 'male' },
    ],

    addCat: (catInfo) =>
      set((state) => ({
        cats: [
          ...state.cats,
          {
            id: crypto.randomUUID(),
            ...catInfo,
          },
        ],
      })),

    removeCat(removeCatName) {
      return set((state) => {
        return {
          cats: state.cats.filter((cat) => cat.name !== removeCatName),
        };
      });
    },
  };
};

export const useCatsStore = create(catsStore);
