
import { useState } from 'react';
import './App.css';

import AppContext from './AppContext';
import Comp1 from './components/Comp1';


function App() {

  const [name, setName] = useState('Mohamed')
  const [age, setAge] = useState(12)

  return (
    
    <AppContext.Provider value={{name, setName, age}}>
      <Comp1 />
    </AppContext.Provider>
  );
}

export default App;
