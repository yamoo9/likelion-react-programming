import { useContext } from 'react';
import { DemoAppContext } from '../11-context-problem';

function Output() {
  const { count } = useContext(DemoAppContext);

  return <output className="output">{count.data}</output>;
}

export default Output;
