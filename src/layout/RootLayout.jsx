import AnimatedOutlet from '@/components/AnimateOutlet';
import AnimateTransition from '@/components/AnimateTransition';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout({ displaySideMenu = false }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBar />
      <main className="flex gap-4 p-5 flex-1 dark:bg-black">
        {displaySideMenu && <SideMenu />}
        <div className="flex-1">
          <AnimateTransition>
            <AnimatedOutlet />
          </AnimateTransition>
        </div>
      </main>
      <FooterBar />
    </div>
  );
}

RootLayout.propTypes = {
  displaySideMenu: bool,
};

export default RootLayout;

function SideMenu() {
  return (
    <nav className="bg-slate-100 py-3 px-4 min-w-[100px]">
      <h3 className="sr-only">학습 내비게이션 메뉴</h3>
      <ul className="flex flex-col gap-2 text-sm p-2 text-slate-500">
        <li>
          <Link to="/learn/01" className="hover:text-slate-950">
            속성(props) 전달
          </Link>
        </li>
        <li>
          <Link to="/learn/02" className="hover:text-slate-950">
            상태 끌어올리기
          </Link>
        </li>
        <li>
          <Link to="/learn/03" className="hover:text-slate-950">
            속성(props) 드릴링 이슈
          </Link>
        </li>
        <li>
          <Link to="/learn/04/01" className="hover:text-slate-950">
            상태 공유 Context{' '}
            <abbr
              title="Application Programming Interface"
              className="cursor-help no-underline"
            >
              API
            </abbr>
          </Link>
        </li>
        <li>
          <Link to="/learn/04/02" className="hover:text-slate-950">
            Context 분리 관리
          </Link>
        </li>
        <li>
          <Link to="/learn/05" className="hover:text-slate-950">
            값을 기억하기 위한 Refs
          </Link>
        </li>
        <li>
          <Link to="/learn/06" className="hover:text-slate-950">
            DOM 요소를 참조하는 Refs
          </Link>
        </li>
        <li>
          <Link to="/learn/07/01" className="hover:text-slate-950">
            GSAP 애니메이션
          </Link>
        </li>
        <li>
          <Link to="/learn/07/02" className="hover:text-slate-950">
            GSAP 컨텍스트
          </Link>
        </li>
        <li>
          <Link to="/learn/08" className="hover:text-slate-950">
            Framer Motion 애니메이션
          </Link>
        </li>
        <li>
          <Link to="/learn/09" className="hover:text-slate-950">
            Prop Types 유효성 검사
          </Link>
        </li>
        <li>
          <Link to="/learn/10" className="hover:text-slate-950">
            로컬 스토리지 활용
          </Link>
        </li>
        <li>
          <Link to="/learn/11" className="hover:text-slate-950">
            React 컨텍스트 이슈
          </Link>
        </li>
        <li>
          <Link to="/learn/12" className="hover:text-slate-950">
            Zustand 라이브러리
          </Link>
        </li>
      </ul>
    </nav>
  );
}
