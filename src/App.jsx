import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@/contexts/Theme';
import router from './routes';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
