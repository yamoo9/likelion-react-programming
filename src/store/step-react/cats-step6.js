import { create } from 'zustand';

export const useCatsStore = create((set) => ({
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

  removeCat: (removeCatName) =>
    set((state) => ({
      cats: state.cats.filter((cat) => cat.name !== removeCatName),
    })),
}));
