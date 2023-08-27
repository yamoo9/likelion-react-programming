import { useContext } from 'react';
import { DemoAppContext } from '../11-context-problem';

function Input() {
  const { itemRef } = useContext(DemoAppContext);

  return (
    <div>
      <label htmlFor="newItem" className="sr-only">
        수행 항목
      </label>
      <input
        ref={itemRef}
        type="text"
        name="newItem"
        id="newItem"
        placeholder="예) Zustand가 필요할까?"
      />
    </div>
  );
}

export default Input;
