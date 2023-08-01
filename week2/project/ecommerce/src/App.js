import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './product-detail';
import Main from './main-content';

export default function App() {
  return (
    <Router>
      <div className="mx-2">
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}
