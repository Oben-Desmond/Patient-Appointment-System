import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNavigation from './components/MainNavigation.component';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
    </BrowserRouter>
  );
}

export default App;
