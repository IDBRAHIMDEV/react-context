import './App.css';

import  { ProductProvider } from './AppContext';
import Project from './components/Project';


function App() {
 
  return (
    
    <ProductProvider>
      <div className="container">
        <Project />
      </div>
    </ProductProvider>
  );
}

export default App;
