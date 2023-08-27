import Logo from './Logo';
import Output from './Output';

function Header() {
  return (
    <header className="header">
      <h1>
        <Logo />
      </h1>
      <Output />
    </header>
  );
}

export default Header;
