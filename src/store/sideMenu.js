import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useSideMenuStore = create(
  devtools((set) => ({
    displaySideMenu: false,
    toggleSideMenu: () =>
      // set(callback, replace, labelForReduxDevtools)
      // set(() => {}, false, 'label')
      set(
        (state) => ({
          displaySideMenu: !state.displaySideMenu,
        }),
        // 상태 덮어쓰기 유무
        // Zustand의 상태 처리 방법: 얕은 합성(false)
        false,
        // Redux 개발 도구 레이블(label)
        'sidemenu/toggler'
      ),
  }))
);
