import Heading from '@/components/Heading';
import Nav from './Nav';

function HeaderBar() {
  return (
    <header className="flex justify-between items-center p-5 bg-black text-indigo-50 dark:border-b dark:border-b-zinc-50/20">
      <Heading />
      <Nav />
    </header>
  );
}

export default HeaderBar;
