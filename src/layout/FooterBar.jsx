import { useState, memo } from 'react';
import { motion } from 'framer-motion';

// React.memo(Component)
// Component === function
// 고차 컴포넌트 래핑(감싸기)
function FooterBar() {
  // 현재(오늘) 년도를 화면에 출력하는 상태를 설정
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="p-5 grid place-content-center bg-black dark:border-t dark:border-t-zinc-50/20">
      <motion.small
        drag="x"
        dragConstraints={{
          left: -2,
          right: 2,
        }}
        className="text-base text-sky-500/90 hover:text-sky-500"
      >
        Copyright 2020-{currentYear} &copy; <strong>EUID</strong>
      </motion.small>
    </footer>
  );
}

// Component 함수
// React.memo(Componet) 고차 함수
// MemoizedComponent 고차 컴포넌트
// (향상된 컴포넌트: props가 변경되지 앟은 경우 이전에 기억한 함수컴포넌트 반환)

export default memo(FooterBar);
