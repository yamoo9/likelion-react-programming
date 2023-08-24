import AuthProvider from '@/contexts/Auth';
import ThemeProvider from '@/contexts/Theme';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </AuthProvider>
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;
