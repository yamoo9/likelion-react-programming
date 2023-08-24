import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@/contexts/Theme';
import AuthProvider from '@/contexts/Auth';
import router from './routes';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
