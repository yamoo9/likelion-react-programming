import { useState } from 'react';

function PropsDrillingIssue() {
  // 상태
  const [color, setColor] = useState({
    fg: 'text-rose-600',
    bg: '#93c5fe',
  });
  // 상태 업데이트 이벤트 핸들러
  const handleChangeBgColor = (newBgColor) =>
    setColor((color) => ({
      ...color,
      bg: newBgColor,
    }));

  return (
    <div className="PassingProps" style={{ backgroundColor: color.bg }}>
      <GrandParent color={color} onChangeColor={handleChangeBgColor} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export function GrandParent({ color, onChangeColor }) {
  return (
    <div className="GrandParent">
      <Parent color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function Parent({ color, onChangeColor }) {
  return (
    <div className="Parent">
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function Child({ color, onChangeColor }) {
  return (
    <div className="Child">
      <GrandChild color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function GrandChild({ color, onChangeColor }) {
  return (
    <div className="GrandChild">
      <p className={color.fg}>상태 데이터를 제게 주세요!</p>
      <input
        type="color"
        aria-label="배경 색상"
        onChange={(e) => {
          onChangeColor(e.target.value);
        }}
      />
    </div>
  );
}

export default PropsDrillingIssue;
