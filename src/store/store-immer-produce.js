import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

const initialTheme = {
  currentMode: 'light',
  light: {
    fg: 'black',
    bg: 'white',
  },
  dark: {
    fg: 'white',
    bg: 'black',
  },
};

export const useStore = create(
  devtools((set) => ({
    // --------------------------------------------

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

    // --------------------------------------------

    theme: initialTheme,

    // changeLightTheme: () =>
    //   set(
    //     (state) => ({
    //       theme: {
    //         ...state.theme,
    //         currentTheme: 'light',
    //       },
    //     }),
    //     false,
    //     'theme/changeLight'
    //   ),
    // changeDarkTheme: () =>
    //   set(
    //     (state) => ({
    //       theme: {
    //         ...state.theme,
    //         currentTheme: 'dark',
    //       },
    //     }),
    //     false,
    //     'theme/changeDark'
    //   ),
    // swtichMode: () =>
    //   set(
    //     (state) => ({
    //       theme: {
    //         ...state.theme,
    //         currentMode: state.theme.currentMode.includes('light')
    //           ? 'dark'
    //           : 'light',
    //       },
    //     }),
    //     false,
    //     'theme/switchMode'
    //   ),
    // _resetTheme() {
    //   return set(() => {
    //     return {
    //       theme: initialTheme
    //     }
    //   });
    // },

    changeLightTheme: () =>
      set(
        produce((state) => {
          state.theme.currentMode = 'light';
          // state.a.b.c.d.e.f.j = false;
        }),
        false,
        'theme/changeLight'
      ),
    changeDarkTheme: () =>
      set(
        produce((state) => {
          state.theme.currentMode = 'dark';
        }),
        false,
        'theme/changeDark'
      ),
    swtichMode: () =>
      set(
        produce((state) => {
          const mode = state.theme.currentMode;
          state.theme.currentMode = mode.includes('light') ? 'dark' : 'light';
        }),
        false,
        'theme/switchMode'
      ),
    resetTheme: () =>
      set(
        () => ({
          theme: initialTheme,
        }),
        false,
        'theme/reset'
      ),
  }))
);
