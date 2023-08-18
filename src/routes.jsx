import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

// 구버전 처럼 사용할 사용자를 위한 최신 방법
// 배열 → JSX 
const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

export default router;

// 최신 방법(기본 방법)
// 배열 → 객체 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     // 중첩된 라우트
//     children: [
//       // '/'
//       { index: true, element: <Home /> },
//       // '/products'
//       { path: 'products', element: <Products /> },
//       // '/contact'
//       { path: 'contact', element: <Contact /> },
//     ],
//   },
// ]);