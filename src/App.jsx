import RootLayout from './layout/RootLayout';
import LearnStateAndEffects from './pages/LearnStateAndEffects';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="App">
      <RootLayout>
        <LearnStateAndEffects />
        <ProductList />
      </RootLayout>
    </div>
  );
}

export default App;
