import React, { useState } from 'react';
import Products from './products';
import Categories from './category';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <div className="mx-2">
      <h1 className="text-3xl font-semibold my-4">Products</h1>
      <Categories
        activeCategory={activeCategory}
        onActiveCategory={setActiveCategory}
      />
      <Products activeCategory={activeCategory} />;
    </div>
  );
}
