import { motion } from 'framer-motion';
import { useState } from 'react';

function FramerMotion_Animation() {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount((c) => c + 10);
  };

  const [key1, setKey1] = useState(Math.random());
  const [key2, setKey2] = useState(Math.random());
  const [key3, setKey3] = useState(Math.random());

  const [keys, setKeys] = useState(
    Array(3)
      .fill(null)
      .map(() => Math.random())
  );

  const handleResetAnimation = () => {
    setKey1(Math.random());
    setKey2(Math.random());
    setKey3(Math.random());
    setKeys(keys.map(() => Math.random()));
  };

  return (
    <>
      <h2>컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <div className="flex gap-2 mb-5">
        <button
          type="button"
          className="my-6 py-1.5 px-2.5 border border-slate-200 rounded-md shadow-lg"
          onClick={handleCountUp}
        >
          {count}
        </button>
        <button
          type="button"
          className="my-6 py-1.5 px-2.5 border border-slate-200 rounded-md shadow-lg"
          onClick={handleResetAnimation}
        >
          <svg
            className="w-4 h-4 text-gray-800 dark:text-white"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-[700px]">
        <Circle key={key1} />
        <Circle key={key2} />
        <Circle key={key3} />
        {keys.map((key) => (
          <Circle key={key} />
        ))}
      </div>
    </>
  );
}

function Circle() {
  return (
    <motion.figure
      role="none"
      className="grid place-content-center w-16 h-16 rounded-full bg-yellow-300"
      initial={{ y: -150, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1.6,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 4,
        type: 'spring',
        stiffness: 400,
        damping: 5,
      }}
    >
      <motion.img
        // 초기 상태(initial)
        initial={{ scale: 0 }}
        // 애니메이션 상태(animate)
        animate={{ rotate: 180, scale: 1 }}
        // 트랜지션 상태(transition)
        transition={{
          type: 'spring',
          stiffness: 260, // 뻣뻣함 (팽팽함)
          damping: 20, // 마찰(제동)
        }}
        src="/react.png"
        alt="React"
        className="w-10 h-10"
      />
    </motion.figure>
  );
}

export default FramerMotion_Animation;
