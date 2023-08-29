import { create } from 'zustand';
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
  devtools(
    (set) => ({
      theme: initialTheme,

      changeLightTheme: () =>
        set((state) => ({
          theme: {
            ...state.theme,
            currentTheme: 'light',
          },
        })),
      changeDarkTheme: () =>
        set((state) => ({
          theme: {
            ...state.theme,
            currentTheme: 'dark',
          },
        })),
      swtichMode: () =>
        set((state) => ({
          theme: {
            ...state.theme,
            currentMode: state.theme.currentMode.includes('light')
              ? 'dark'
              : 'light',
          },
        })),
      resetTheme: () =>
        set(() => ({
          theme: initialTheme,
        })),
    }),
    false,
    'theme'
  )
);
