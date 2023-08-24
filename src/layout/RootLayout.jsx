import { Outlet, Link } from 'react-router-dom';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout({ displaySideMenu = false }) {
  return (
    <>
      <HeaderBar />
      <main className="flex gap-4 p-5">
        {displaySideMenu && (
          <nav className="bg-slate-100 py-3 px-4 min-w-[100px]">
            <h3 className="sr-only">학습 내비게이션 메뉴</h3>
            <ul>
              <li>
                <Link to="/learn/01">Props 전달</Link>
              </li>
              <li>
                <Link to="/learn/02">상태 끌어올리기</Link>
              </li>
              <li>
                <Link to="/learn/03">속성(props) 드릴링 이슈</Link>
              </li>
              <li>
                <Link to="/learn/04/01">
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
                <Link to="/learn/04/02">Context 분리 관리</Link>
              </li>
              <li>
                <Link to="/learn/05">값을 기억하기 위한 Refs</Link>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
