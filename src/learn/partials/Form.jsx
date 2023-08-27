import { useContext } from 'react';
import { DemoAppContext } from '../11-context-problem';
import Button from './Button';
import Input from './Input';

function Form() {
  const { list, count, itemRef } = useContext(DemoAppContext);

  const handleAddItem = (e) => {
    e.preventDefault();

    const newItem = itemRef.current.value;

    if (!newItem.trim()) {
      alert('추가할 항목을 입력해야 합니다.');
      return itemRef.current.select();
    }

    list.addItem(itemRef.current.value);
    count.incrementCount(1);

    itemRef.current.value = '';
  };

  return (
    <form className="form" onSubmit={handleAddItem}>
      <Input />
      <Button />
    </form>
  );
}

export default Form;
