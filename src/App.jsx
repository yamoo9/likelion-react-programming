import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const Home = () => <div>Home</div>;
const Products = () => <div>Products</div>;
const Contact = () => <div>Contact</div>;

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
