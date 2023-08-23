import debounce from '@/utils/debounce';
import { useState } from 'react';
import GrandParent from './partials/GrandParent';

function ReactContextAPI() {
  const [color, setColor] = useState({
    fg: 'text-blue-50',
    bg: '#1170a3',
  });

  const handleChangeBgColor = debounce(
    (newBgColor) =>
      setColor((color) => ({
        ...color,
        bg: newBgColor,
      })),
    600
  );

  return (
    <div
      className="PassingProps p-5 rounded-md"
      style={{ backgroundColor: color.bg }}
    >
      <GrandParent color={color} onChangeColor={handleChangeBgColor} />
    </div>
  );
}

export default ReactContextAPI;
