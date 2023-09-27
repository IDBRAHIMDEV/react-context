
import { useState } from 'react';
import './App.css';

import AppContext from './AppContext';
import Project from './components/Project';


function App() {

  return (
    
    <AppContext.Provider value={{}}>
      <Project />
    </AppContext.Provider>
  );
}

export default App;
