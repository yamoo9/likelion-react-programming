import { useAuth } from '@/contexts/Auth';
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
      <ul className="flex gap-4 p-5 items-center font-extralight">
        {!isAuth && (
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? 'font-semibold text-rose-600' : ''
              }
            >
              Sign In
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-rose-600' : ''
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-rose-600' : ''
            }
          >
            Contact
          </NavLink>
        </li>
        {isAuth && (
          <button
            type="button"
            className="py-0.5 px-2 border-2 border-white/40 rounded-md hover:border-white"
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
