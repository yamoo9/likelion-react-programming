import { node, string } from 'prop-types';
import { createContext, useContext, useState } from 'react';

// Context 생성
const ThemeContext = createContext();

// 상태 초깃값
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

// 컨텍스트 프로바이더 래퍼 컴포넌트
function ThemeProvider({ displayName = 'ThemeContext.Provider', children }) {
  const [theme, setTheme] = useState(initialTheme);

  const resetTheme = () => setTheme(initialTheme);

  const changeLightTheme = (newLightTheme) =>
    setTheme({
      ...theme,
      light: newLightTheme,
    });

  const changeDarkTheme = (newDarkTheme) =>
    setTheme({
      ...theme,
      dark: newDarkTheme,
    });

  const switchMode = () =>
    setTheme((theme) => ({
      ...theme,
      currentMode: theme.currentMode.includes('light') ? 'dark' : 'light',
    }));

  const value = {
    theme,
    resetTheme,
    changeLightTheme,
    changeDarkTheme,
    switchMode,
  };

  return (
    <ThemeContext.Provider value={value} displayName={displayName}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  displayName: string,
  children: node,
};

export default ThemeProvider;

// 커스텀 훅
export function useTheme() {
  const contextValue = useContext(ThemeContext);
  if (!contextValue) {
    throw new Error('useTheme은 ThemeProvider 내부에서만 사용 가능합니다.');
  }
  return contextValue;
}
