import Spinner from '@/components/Spinner';
import { useEffect, useState } from 'react';

function LearnStateAndEffects() {
  // 1. data
  const [data, setData] = useState([]);
  // 2. isLoading
  const [isLoading, setIsLoading] = useState(false);
  // 3. error
  const [error, setError] = useState(null);

  // side effect
  // request data
  useEffect(() => {
    setIsLoading(true);

    // async await
    async function fetchTodos() {
      // fetch api
      const response = await fetch(
        'http://127.0.0.1:8090/api/collections/todos/records'
      );

      // error?
      if (!response.ok) {
        // error handling
      }

      const data = await response.json();

      setData(data);
      setIsLoading(false);
    }

    fetchTodos();
  }, []);

  if (isLoading) {
    return (
      <Spinner
        size={120}
        className="absolute z-[10000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    );
  }

  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className="text-indigo-600 font-suit text-2xl">
        상태 및 이펙트 학습하기
      </h2>
      {
        data && data.items?.map(item => (
          <div key={item.id} className="todo">
            <strong>{item.doit}</strong>
          </div>
        ))
      }
    </div>
  );
}

export default LearnStateAndEffects;
