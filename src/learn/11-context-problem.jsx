import { createContext, useCallback, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './partials/Header';
import Main from './partials/Main';

function ReactContextIssue() {
  return (
    <>
      <Helmet>
        <title>React Context Issue - Learn</title>
      </Helmet>
      <DemoApp />
    </>
  );
}

export default ReactContextIssue;

/* -------------------------------------------------------------------------- */

export const DemoAppContext = createContext();

function DemoApp() {
  // -----------------------------------------------------------------

  const itemRef = useRef(null);

  // -----------------------------------------------------------------

  const [list, setList] = useState([]);

  const addItem = useCallback((newItem) => {
    setList((list) => [
      ...list,
      {
        id: crypto.randomUUID(),
        title: newItem,
      },
    ]);
  }, []);

  const deleteItem = useCallback((deleteId) => {
    setList((list) => list.filter((item) => item.id !== deleteId));
  }, []);

  const listValue = useMemo(
    () => ({
      data: list,
      addItem,
      deleteItem,
    }),
    [list, addItem, deleteItem]
  );

  // -----------------------------------------------------------------

  const [count, setCount] = useState(list.length);

  const incrementCount = useCallback((by) => {
    setCount((count) => count + by);
  }, []);

  const decrementCount = useCallback((by) => {
    setCount((count) => count - by);
  }, []);

  const countValue = useMemo(
    () => ({
      data: count,
      incrementCount,
      decrementCount,
    }),
    [count, decrementCount, incrementCount]
  );

  const value = useMemo(() => {
    return {
      itemRef,
      list: listValue,
      count: countValue,
    };
  }, [listValue, countValue]);

  // -----------------------------------------------------------------

  return (
    <DemoAppContext.Provider value={value}>
      <Header />
      <Main />
    </DemoAppContext.Provider>
  );
}
