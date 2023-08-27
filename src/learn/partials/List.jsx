import { useContext } from 'react';
import { DemoAppContext } from '../11-context-problem';
import ListItem from './ListItem';

function List() {
  const { list } = useContext(DemoAppContext);

  const length = list.data?.length ?? 0;

  return (
    <ul className={`list ${length === 0 ? 'empty' : ''}`}>
      {length > 0 ? (
        list.data?.map((item) => <ListItem key={item.id} item={item} />)
      ) : (
        <li>표시할 항목이 없습니다.</li>
      )}
    </ul>
  );
}

export default List;
