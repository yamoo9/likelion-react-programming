import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useSideMenuStore = create(
  devtools((set) => ({
    displaySideMenu: false,
    toggleSideMenu: () =>
      set(
        (state) => ({
          displaySideMenu: !state.displaySideMenu,
        }),
        false,
        'sidemenu/toggler'
      ),
  }))
);
