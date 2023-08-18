// 리액트 렌더링과 상관 없이 외적으로 처리가 요구되는 일 (side effect)
// 서버에 데이터 가져오기 요청
// 대기 시간.... (사용자가 어떤 정보를 제공할 것인가?)
// 서버에서 응답(성공 또는 실패)
// 성공한 경우: 배열(객체) 리스트 렌더링 -> 화면에 표시
// 실패한 경우: 오류 메시지를 화면에 출력

// 컴포넌트 상태 (최소한의 갯수로 관리가 요구)
// 1. data : 데이터 가져오기
// 2-1. isLoading : 대기 시간 상태
// 2-2. isSuccess : 데이터 가져오기 성공한 상태
// 2-3. isError : 데이터 가져오기 실패한 상태
// 2. status : 진행 상황 'pending' | 'loading' | 'success' | 'error'

import { useEffect, useState } from 'react';

function LearnStateAndEffects() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');

  // side effect
  // server request (endpoint)
  useEffect(() => {
    
    // 상태 변경
    // 대기 → 로딩 중...
    setStatus('loading'); // 상태 업데이트 일괄(batch) 처리

    // Promise API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      // 성공
      .then((response) => response.json())
      .then((responseData) => {
        // 상태 업데이트 일괄(batch) 처리
        setData(responseData);
        setStatus('success');
      })
      // 실패
      .catch((error) => {
        // 상태 업데이트 일괄(batch) 처리
        setStatus('error');
        setError(error);
      });
  }, []);

  // 데이터 가져오는 중(로딩)일 때 표시할 화면
  if (status === 'loading') {
    return (
      <div
        role="alert"
        className="flex h-[calc(100vh_-_70px)] w-auto justify-center items-center"
      >
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXM1MHd1cmZid2plZmF4OW9xbGxyZm5tdXZ2Y2E1czRwZGZ6dDIwaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/200.gif"
          className='h-20'
          alt="데이터 가져오는 중입니다."
        />
      </div>
    );
  }

  // 데이터 가져오기 실패한 경우 표시할 화면
  if (status === 'error') {
    return (
      <div
        role="alert"
        className="flex flex-col text-red-100 bg-red-900 h-[calc(100vh_-_70px)] w-auto justify-center items-center"
      >
        <p>{error.toString()}</p>
        <p className='text-xs'>알 수 없는 오류가 발생했습니다.</p>
      </div>
    );
  }

  // 데이터 가져오기 성공했을 때 표시할 화면
  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className="text-indigo-600 font-suit text-2xl">
        상태 및 이펙트 학습하기
      </h2>

      {data && (
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LearnStateAndEffects;
