import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from './shop';
import Checkout from './checkout';
import Payment from './payment';
import Receipt from './receipt';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
       <Route path="/payment" element={<Payment />} />
       <Route path="/receipt" element={<Receipt />} />
    </Routes>
  );
}

export default App;
