import React, { useState } from 'react';
import ProductList from './product-list';
import Categories from './category';
import { products } from './fake-data/all-products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <div className="mx-2">
      <h1 className="text-3xl font-semibold my-4">Products</h1>
      <Categories
        activeCategory={activeCategory}
        onActiveCategory={setActiveCategory}
      />
      <ProductList products={products} activeCategory={activeCategory} />;
    </div>
  );
}
