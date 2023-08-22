import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 p-5 font-extralight">
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'font-semibold text-rose-600' : ''}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;