import { useState } from 'react';
import { motion } from 'framer-motion';

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

export default FooterBar;
