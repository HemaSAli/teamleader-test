import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/components/HomePage';
import Orders from '@/components/Orders';

function App() {
  return (
    <div className="teamleader-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
