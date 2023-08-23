import debounce from '@/utils/debounce';
import { useState, createContext, useContext } from 'react';

/* Context ------------------------------------------------------------------ */

// Context ( Modern (Hooks) / Legacy (Context.Consumer + Render Props or HOC Pattern) )

// JSX
// React.createElement

// Context 생성
// React.createContext(초깃값) <- 읽기 전용
// const [get] = useState(initialValue)

// Context 공급자(Provider)
// 값(value) <- 읽기/쓰기
// const [get, set] = useState(initialValue)

// Context 값 꺼내기(가져오기)
// React.useContext

/* -------------------------------------------------------------------------- */

// 1. Context 생성
// StateManagementContext
const SM_Context = createContext();

/* Component ---------------------------------------------------------------- */

function ReactContextAPI() {
  // 상태
  const [color, setColor] = useState({
    fg: 'text-blue-50',
    bg: '#1170a3',
  });

  // 상태 업데이트 이벤트 핸들러
  const handleChangeBgColor = debounce(
    (newBgColor) =>
      setColor((color) => ({
        ...color,
        bg: newBgColor,
      })),
    600
  );

  // 컨텍스트 값으로 공급
  // 렌더 트리거 2가지


  // 1. React.useState
  // const [theme, setTheme] = useState({
  //   light: {
  //     fg: 'black',
  //     bg: 'white',
  //   },
  //   dark: {
  //     fg: 'white',
  //     bg: 'black',
  //   },
  // });

  // const usingStateValue = {
  //   theme,
  //   setTheme
  // };


  // 2. React.useReducer (like Redux)

  return (
    <SM_Context.Provider
      displayName="SM_ContextProvider"
      // value={usingStateValue}
    >
      <div
        className="PassingProps p-5 rounded-md"
        style={{ backgroundColor: color.bg }}
      >
        <GrandParent color={color} onChangeColor={handleChangeBgColor} />
      </div>
    </SM_Context.Provider>
  );
}

export default ReactContextAPI;

/* -------------------------------------------------------------------------- */

function GrandParent({ color, onChangeColor }) {
  return (
    <div
      className="GrandParent p-4 rounded-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 20%)`,
      }}
    >
      <Parent color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

function Parent({ color, onChangeColor }) {
  return (
    <div
      className="Parent p-4 rounded-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 40%)`,
      }}
    >
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

function Child({ color, onChangeColor }) {
  return (
    <div
      className="Child p-4 rounded-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 60%)`,
      }}
    >
      <GrandChild color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

function GrandChild({ color, onChangeColor }) {
  // 2. 컨텍스트 값을 주입(Injection)
  const contextValue = useContext(SM_Context);

  console.log(contextValue);

  return (
    <div
      className="GrandChild p-4 rounded-md flex flex-col justify-center items-center "
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 80%)`,
      }}
    >
      <p
        className={`${color.fg} mb-2 font-extrabold text-center drop-shadow-md`}
      >
        컨텍스트 공급자(Context Provider)를 사용해
        <br />
        데이터를 공급(provide)해주세요!
      </p>
      <input
        type="color"
        aria-label="배경 색상"
        defaultValue={color.bg}
        onChange={(e) => {
          onChangeColor(e.target.value);
        }}
      />
    </div>
  );
}
