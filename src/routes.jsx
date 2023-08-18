import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // 중첩된 라우트
    children: [
      // '/'
      { index: true, element: <Home /> },
      // '/products'
      { path: 'products', element: <Products /> },
      // '/contact'
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;