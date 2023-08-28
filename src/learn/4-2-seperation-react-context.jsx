import debounce from '@/utils/debounce';
import { useState } from 'react';
import GrandParent from './partials/GrandParent';
import { Helmet } from 'react-helmet-async';

// Props Drilling (Performance Issue)
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
    <>
      <Helmet>
        <title>Seperation React Context - Learn</title>
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

export default ReactContextAPI;
