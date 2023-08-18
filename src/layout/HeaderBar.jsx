import Heading from '@/components/Heading';
import Nav from './Nav';

function HeaderBar() {
  return (
    <header className="flex justify-between items-center p-5 bg-indigo-950 text-indigo-50">
      <Heading />
      <Nav />
    </header>
  );
}

export default HeaderBar;
