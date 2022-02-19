import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';

function App() {
  return (
    <div className="teamleader-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
