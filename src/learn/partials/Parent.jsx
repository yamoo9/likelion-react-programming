import Child from './Child';
import { shape, string, func } from 'prop-types';

export default function Parent({ color, onChangeColor }) {
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

Parent.propTypes = {
  color: shape({
    fg: string,
    bg: string,
  }).isRequired,
  onChangeColor: func,
};
