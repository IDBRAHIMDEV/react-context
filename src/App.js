
import { useState } from 'react';
import './App.css';

import AppContext from './AppContext';
import Project from './components/Project';
import { getProducts } from './services/ProductService'

function App() {
  
  const [products, setProducts] = useState([])
  console.log('products on the app :',products)
  return (
    
    <AppContext.Provider value={{getProducts, products, setProducts}}>
      <div className="container">
        <Project /> 
      </div>
    </AppContext.Provider>
  );
}

export default App;
