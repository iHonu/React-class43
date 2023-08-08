import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './product-detail';
import Main from './main-content';
import { FavoritesProvider } from './FavoritesContext';
import FavoritesPage from './FavoritesPage';
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <NavBar />
        <div className="mx-2">
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/" element={<Main />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}
