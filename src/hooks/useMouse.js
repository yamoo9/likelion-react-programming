import { useEffect, useState } from 'react';

const initialMousePosition = { x: 0, y: 0 };

export default function useMouse() {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    // 구독(subscription)
    globalThis.addEventListener('mousemove', handleMouseMove);

    // 구독 해지(unsubscription)
    // 클린업
    return () => {
      globalThis.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition; // { x, y }
}
