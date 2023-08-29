import createStore from './createStore';

const bearsStore = (set) => ({
  bears: [{ id: 'bear-1', name: '베어원' }],

  addBear: (newBearName) =>
    set(
      (state) => {
        state.bears.push({
          id: `bear-${state.bears.length + 1}`,
          name: newBearName,
        });
      },
      false,
      'bears/add'
    ),
});

export const useBearsStore = createStore(bearsStore);
