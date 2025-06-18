import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from './shop';
import Checkout from './checkout';
import Payment from './payment';
import Receipt from './receipt';
import Login from './login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
       <Route path="/payment" element={<Payment />} />
       <Route path="/receipt" element={<Receipt />} />
       <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
