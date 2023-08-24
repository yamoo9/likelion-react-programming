// Refs 참조 객체 생성
// [only class] React.createRef

// 훅!!
// [only function] React.useRef

import { useState, useRef } from "react";


function RefExampleMemoValues() {
  // 상태
  // 상태가 변경되면 필연적으로 렌더링이 진행
  const [, renderTrigger] = useState(0);

  // 값 참조 (렌더링 될 때 마다 값을 초기화하지 않고 기억하기 위해서)
  // 렌더링에 전혀~ 영향을 미치지 않음
  const stepRef = useRef(900); // Refs (참조 객체) 생성 → { current: 900 }
  console.log('stepRef\n', stepRef);

  // 지역 변수
  let num = 100;

  console.log('[렌더링 or 리-렌더링] 컴포넌트 내부에서의 num 지역 변수 값:', num);

  return (
    <>
      <h2>값을 기억하기 위한 Refs</h2>

      <p>
        Refs란? React 컴포넌트 렌더링 프로세스에 영향을 주지 않으면서 다음
        렌더링에도 값을 기억하기 위한 수단
      </p>

      <hr className="my-4" />

      {/* 로컬 뮤테이션 */}
      <button
        type="button"
        onClick={() => {
          console.log('button 요소 이벤트 핸들러 실행\n', (num += 10));
        }}
        className="mr-5"
      >
        지역 변수 수정
      </button>
      {/* 참조(Refs) 뮤테이션 */}
      <button
        type="button"
        onClick={() => {
          console.log('stepRef 값 변경(mutation)\n', stepRef.current += 100);
        }}
        className="mr-5"
      >
        참조 변경
      </button>
      {/* 상태 업데이트 */}
      <button
        type="button"
        onClick={() => {
          renderTrigger((state) => state + 1)
        }}
      >
        렌더 트리거
      </button>

      <div>
        <h3>참조 현재 값: stepRef.current</h3>
        <output>{stepRef.current}</output>
        <h3>지역 변수: num</h3>
        <output>{num}</output>
      </div>
    </>
  );
}

export default RefExampleMemoValues;
