import debounce from '@/utils/debounce';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { string, func } from 'prop-types';

function PropsDrillingIssue() {
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

  return (
    <>
      <Helmet>
        <title>Props Drilling Issue - Learn</title>
      </Helmet>
      <div
        className="PassingProps p-5 rounded-md"
        style={{ backgroundColor: color.bg }}
      >
        <GrandParent color={color} onChangeColor={handleChangeBgColor} />
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */

export function GrandParent({ color, onChangeColor }) {
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

GrandParent.propTypes = {
  color: string,
  onChangeColor: func,
};

export function Parent({ color, onChangeColor }) {
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

Parent.propTypes = GrandParent.propTypes;

export function Child({ color, onChangeColor }) {
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

Child.propTypes = GrandParent.propTypes;

export function GrandChild({ color, onChangeColor }) {
  return (
    <div
      className="GrandChild p-4 rounded-md flex flex-col justify-center items-center "
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 80%)`,
      }}
    >
      <p className={`${color.fg} mb-2`}>상태 데이터를 제게 주세요!</p>
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

GrandChild.propTypes = GrandParent.propTypes;

export default PropsDrillingIssue;
