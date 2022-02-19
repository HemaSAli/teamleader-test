import React from 'react';
import { useAppSelector } from './redux/hooks';

function App() {
  const stateX = useAppSelector((state) => state.OrdersReducer);
  console.log(stateX, 'stateX');
  return (
    <div className="teamleader-container">
      <p>Simple Home Page =)</p>
    </div>
  );
}

export default App;
