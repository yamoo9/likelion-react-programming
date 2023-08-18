import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

const Nav = () => (
  <nav>
    <ul className='flex gap-4 p-5 font-extralight bg-slate-50/50 shadow-lg'>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'font-semibold text-rose-600' : ''
          }
        >
          Home
        </NavLink>
      </li>
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
    </ul>
  </nav>
);

const Home = () => (
  <div>
    <Nav />
    <h1 className="text-emerald-500">Home</h1>
  </div>
);
const Products = () => (
  <div>
    <Nav />
    <h1 className="text-emerald-500">Products</h1>
  </div>
);
const Contact = () => (
  <div>
    <Nav />
    <h1 className="text-emerald-500">Contact</h1>
  </div>
);

const router = createBrowserRouter([
  // Router Object
  // 경로(path), 요소(element ← <Component />)
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/contact', element: <Contact /> },
]);

console.log(router);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
