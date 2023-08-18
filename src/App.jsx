import { useState } from 'react';
import RootLayout from './layout/RootLayout';
import LearnStateAndEffects from './pages/LearnStateAndEffects';
import ProductList from './pages/ProductList';

function App() {
  const [isVisible] = useState(true);

  return (
    <div className="App">
      <RootLayout>
        <LearnStateAndEffects />
        {isVisible && <ProductList />}
      </RootLayout>
    </div>
  );
}

export default App;
