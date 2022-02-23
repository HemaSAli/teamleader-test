import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/components/HomePage';
import Orders from '@/components/Orders';
import SingleOrder from './components/SingleOrder';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id" element={<SingleOrder />} />
    </Routes>
  );
}

export default App;
