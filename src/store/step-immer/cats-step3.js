import { create } from 'zustand';
import { produce } from 'immer';

export const useCatsStore = create((set) => ({
  cats: [
    { id: crypto.randomUUID(), name: '찐빵', age: 2, gender: 'male' },
    { id: crypto.randomUUID(), name: '뭉치', age: 2, gender: 'male' },
  ],

  addCat: (catInfo) =>
    set(
      produce((state) => {
        state.cats.push({
          id: crypto.randomUUID(),
          ...catInfo,
        });
      })
    ),

  removeCat(removeCatName) {
    return set(
      produce((state) => {
        const removeCatIndex = state.cats.findIndex(
          (cat) => cat.name === removeCatName
        );
        if (removeCatIndex > 0) {
          state.cats.splice(removeCatIndex, 1);
        }
      })
    );
  },
}));
