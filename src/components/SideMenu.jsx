import { Link } from 'react-router-dom';

const menu = [
  { id: crypto.randomUUID(), title: '속성(props) 전달', href: '/learn/01' },
  { id: crypto.randomUUID(), title: '상태 끌어올리기', href: '/learn/02' },
  {
    id: crypto.randomUUID(),
    title: '속성(props) 드릴링 이슈',
    href: '/learn/03',
  },
  {
    id: crypto.randomUUID(),
    title: (
      <>
        상태 공유 Context{' '}
        <abbr
          title="Application Programming Interface"
          className="cursor-help no-underline"
        >
          API
        </abbr>
      </>
    ),
    href: '/learn/04/01',
  },
  { id: crypto.randomUUID(), title: 'Context 분리 관리', href: '/learn/04/02' },
  {
    id: crypto.randomUUID(),
    title: '값을 기억하기 위한 Refs',
    href: '/learn/05',
  },
  {
    id: crypto.randomUUID(),
    title: 'DOM 요소를 참조하는 Refs',
    href: '/learn/06',
  },
  { id: crypto.randomUUID(), title: 'GSAP 애니메이션', href: '/learn/07/01' },
  { id: crypto.randomUUID(), title: 'GSAP 컨텍스트', href: '/learn/07/02' },
  {
    id: crypto.randomUUID(),
    title: 'Framer Motion 애니메이션',
    href: '/learn/08',
  },
  {
    id: crypto.randomUUID(),
    title: 'Prop Types 유효성 검사',
    href: '/learn/09',
  },
  {
    id: crypto.randomUUID(),
    title: '로컬 스토리지 활용',
    href: '/learn/10',
  },
  {
    id: crypto.randomUUID(),
    title: 'React 컨텍스트 이슈',
    href: '/learn/11',
  },
  {
    id: crypto.randomUUID(),
    title: '앱 상태 공유 (with Zustand)',
    href: '/learn/12',
  },
  {
    id: crypto.randomUUID(),
    title: '데이터 가져오기 & 사용자 경험',
    href: '/learn/13',
  },
  {
    id: crypto.randomUUID(),
    title: 'Tanstack Query 활용 (UX ↑)',
    href: '/learn/14',
  },
  {
    id: crypto.randomUUID(),
    title: '페이지네이션 쿼리',
    href: '/learn/15',
  },
  {
    id: crypto.randomUUID(),
    title: '인피니트 쿼리',
    href: '/learn/16',
  },
];

function SideMenu() {
  return (
    <nav className="bg-slate-100 py-3 px-4 min-w-[100px]">
      <h3 className="sr-only">학습 내비게이션 메뉴</h3>
      <ul className="flex flex-col gap-2 text-sm p-2 text-slate-500">
        {menu.map((item) => (
          <li key={item.id}>
            <Link to={item.href} className="hover:text-slate-950">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideMenu;
