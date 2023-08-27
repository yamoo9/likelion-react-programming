import debounce from '@/utils/debounce';
import { func, string } from 'prop-types';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function PassingProps() {
  return (
    <div className="PassingProps">
      <Parent />
    </div>
  );
}

export default PassingProps;

/* -------------------------------------------------------------------------- */

export function Parent() {
  const [color, setColor] = useState('#999');
  const handleChangeBgColor = (newColor) => setColor(newColor);

  return (
    <div className="Parent">
      <Child color={color} onChangeColor={handleChangeBgColor} />
    </div>
  );
}

export function Child({ color, onChangeColor }) {
  return (
    <>
      <Helmet>
        <title>Passing Props - Learn</title>
      </Helmet>
      <div className="Child flex items-center justify-center gap-8">
        <p className="text-4xl font-extralight uppercase" style={{ color }}>
          Child
        </p>
        <input
          type="color"
          aria-label="글자 색상 변경"
          defaultValue={color}
          onChange={debounce((e) => onChangeColor(e.target.value), 500)}
        />
      </div>
    </>
  );
}

Child.propTypes = {
  color: string,
  onChangeColor: func,
};
