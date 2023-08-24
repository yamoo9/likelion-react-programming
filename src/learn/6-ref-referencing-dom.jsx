import { useLayoutEffect, useRef } from 'react';

function RefExampleReferencingDOM() {
  return (
    <>
      <h2>컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <p className="mb-4">원에 클릭한 후, 애니메이션을 재생/정지해보세요.</p>
      <Circle />
    </>
  );
}

function Circle() {
  const circleRef = useRef(null);
  const animationRef = useRef(null);

  // useEffect 콜백 보다 먼저 실행
  // 리액트 렌더링 프로세스
  // 1. 렌더 트리거
  // 2. 컴포넌트 렌더링
  // 3. DOM 커밋
  // - useLayoutEffect() 콜백 (GSAP 문서 참고)
  // 브라우저 렌더링 프로세스
  // 4. 브라우저 페인팅
  // - useEffect() 콜백

  const settingAnimation = () =>
    (animationRef.current = circleRef.current.animate(
      /* keyframes: keyframe[]*/
      [
        /* keyframe {} */
        { transform: 'translateX(0)' }, // from | initial
        { transform: 'translateX(360px)' }, // to | animate
      ],
      /* options */
      {
        duration: 2000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'cubic-bezier(0.72,-0.28,0.16,1.23)',
        fill: 'forwards',
      }
    ));

  useLayoutEffect(() => {
    // Web Animation API
    // 참고:
    //   https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
    //   https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
    //   https://easings.co

    // figure 요소가 단 하나만 존재할 것이다. (보장 못함)
    // .circle 단 하나만 존재할 것이다. (보장 못함)
    // #circle은 단 하나만 존재할 것이다. (보장?!)

    const handleMoveX = () => {
      settingAnimation();
    };

    const circleElement = circleRef.current;

    // 이벤트 연결
    circleElement.addEventListener('click', handleMoveX);

    // 연결된 이벤트 정리
    return () => {
      circleElement.removeEventListener('click', handleMoveX);
    };
  }, []);

  const handlePlayAnimation = () => {
    if(!animationRef.current) {
      settingAnimation();
    } else {
      animationRef.current.play();
    }
  };

  const handlePauseAnimation = () => {
    animationRef.current.pause();
  };

  return (
    <>
      <div className="flex gap-2 mb-5">
        <button
          type="button"
          className="py-1.5 px-2.5 border border-slate-300 rounded-md shadow-lg"
          onClick={handlePlayAnimation}
        >
          PLAY
        </button>
        <button
          type="button"
          className="py-1.5 px-2.5 border border-slate-300 rounded-md shadow-lg"
          onClick={handlePauseAnimation}
        >
          PAUSE
        </button>
      </div>
      <figure
        role="none"
        ref={circleRef}
        className="w-16 h-16 rounded-full bg-yellow-400"
      />
    </>
  );
}

export default RefExampleReferencingDOM;
