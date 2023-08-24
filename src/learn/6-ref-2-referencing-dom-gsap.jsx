import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

function RefExampleReferencingDOM() {
  return (
    <>
      <h2 className="mb-10">컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <div className="flex gap-10">
        <Circle />
        <Circle />
        <Circle />
      </div>
    </>
  );
}

// React 컴포넌트는 순수해야 한다. (렌더링 프로세스 순수해야 하기 때문에)
// Web Animation, GSAP, jQuery와 같은 API는 명령형 프로그래밍이다.
// 그러므로 컴포넌트 내부에 직접 사용할 수 없다.
// 명령형 프로그래밍을 작성할 수 있는 구간은 2군데이다.
// 1. useLayoutEffect 훅 (브라우저 페인팅 이전에 실행)
// 2. Event Handler(Listener)
//
// React 요소(가상)가 실제 DOM에 렌더링 된 후 요소를 참조하려면?
// 기존의 document.getElementById, document.querySelector 사용하는 것이 권장되지 않는다.
// 그럼 어떻게 하는게 좋냐? 공식문서 피셜 useRef 훅을 사용해 Refs 객체 생성하여 활용하라.
// const anyRef = useRef(null);

// React 컴포넌트에서 명령형 방식으로 애니메이션 하는 절차(순서)
// 1. useRef 훅을 사용해서 Refs 객체 생성 (`{ current: null }`)
// 2. JSX 요소 `ref` 속성(prop)에 Refs 객체 참조 연결
// 3-1. useLayoutEffect 훅 안에서 Refs 현재(current) 값으로 명령형 프로그래밍
// 3-2. 사용자와 상호작용하는 이벤트 핸들러 내부에서 명령형 프로그래밍

function Circle() {
  // (1) DOM 요소를 참조하기 위한 Refs 생성
  const circleRef = useRef(null);

  // 이펙트 영역
  useLayoutEffect(() => {
    // (3-1) 사이드 이펙트 처리가 가능한 구간에서 
    // Refs 객체의 current 속성에 할당된 DOM 요소 ( = JSX 요소 → 실제 DOM 마운트된 요소)
    const { current: circleElement } = circleRef;

    gsap.set(circleElement, { scale: 0.5 });

    const handleScale = () => {
      gsap.to(circleElement, { scale: 2, opacity: 0.7 });
    };

    circleElement.addEventListener('click', handleScale);

    return () => {
      circleElement.removeEventListener('click', handleScale);
    };
  }, []);

  // (3-2) 이벤트 핸들러
  const handleEnter = () => {
    gsap.to(circleRef.current, { opacity: 0.5, scale: 4 });
  };

  const handleLeave = () => {
    gsap.to(circleRef.current, { opacity: 1, scale: 1 });
  };

  return (
    <figure
      role="none"
      // (2) Refs 객체를 JSX 요소의 ref 속성(prop)에 연결
      ref={circleRef}
      // ref={(domElement) => {
      //   circleRef.current = domElement
      // }}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className="w-16 h-16 rounded-full bg-yellow-400"
    />
  );
}

export default RefExampleReferencingDOM;
