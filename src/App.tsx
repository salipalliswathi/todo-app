import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
