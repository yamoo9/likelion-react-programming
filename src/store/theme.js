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

export const useThemeStore = create(
  devtools((set) => ({
    theme: initialTheme,

    changeLightTheme: () =>
      set(
        (state) => ({
          theme: {
            ...state.theme,
            currentTheme: 'light',
          },
        }),
        false,
        'theme/changeLight'
      ),
    changeDarkTheme: () =>
      set(
        (state) => ({
          theme: {
            ...state.theme,
            currentTheme: 'dark',
          },
        }),
        false,
        'theme/changeDark'
      ),
    swtichMode: () =>
      set(
        (state) => ({
          theme: {
            ...state.theme,
            currentMode: state.theme.currentMode.includes('light')
              ? 'dark'
              : 'light',
          },
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
