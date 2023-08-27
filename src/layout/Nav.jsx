import { useAuth } from '@/contexts/Auth';
import { node, string } from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';

function Nav() {
  const { isAuth, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav>
      <ul className="flex gap-5 p-5 items-center font-extralight">
        {!isAuth && (
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <Link href="/product/new">NEW</Link>
          </li>
        )}
        <li>
          <Link href="/products">Products</Link>
        </li>
        {isAuth && (
          <button
            type="button"
            className="py-0.5 pb-1 px-2 text-zinc-400 border border-white/40 rounded hover:border-sky-400/70 hover:text-sky-400"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Nav;

function Link({ href, children }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => {
        const baseClassName = 'font-suit font-normal uppercase';
        return isActive
          ? `${baseClassName} text-sky-400 cursor-default`
          : `${baseClassName} text-zinc-400 hover:text-slate-50`;
      }}
    >
      {children}
    </NavLink>
  );
}

Link.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
};
