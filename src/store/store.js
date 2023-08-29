import { create } from 'zustand';
import { immer } from '@/middlewares/immer';
import { devtools, persist } from 'zustand/middleware';

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
  persist(
    immer(
      devtools((set) => ({
        theme: initialTheme,

        changeLightTheme: () =>
          set(
            (state) => {
              state.theme.currentMode = 'light';
            },
            false,
            'theme/changeLight'
          ),
        changeDarkTheme: () =>
          set(
            (state) => {
              state.theme.currentMode = 'dark';
            },
            false,
            'theme/changeDark'
          ),
        switchMode: () =>
          set(
            (state) => {
              const mode = state.theme.currentMode;
              state.theme.currentMode = mode.includes('light')
                ? 'dark'
                : 'light';
            },
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
    ),
    {
      name: 'appStore',
    }
  )
);
