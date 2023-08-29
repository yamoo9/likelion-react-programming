import { immer } from '@/middlewares/immer';
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
      swtichMode: () =>
        set(
          (state) => {
            const mode = state.theme.currentMode;
            state.theme.currentMode = mode.includes('light') ? 'dark' : 'light';
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
    }))
  )
);
