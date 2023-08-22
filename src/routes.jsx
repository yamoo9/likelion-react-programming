import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductEdit from './pages/ProductEdit';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="products" element={<Products />} />
      <Route path="product/edit/:productId" element={<ProductEdit />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default router;