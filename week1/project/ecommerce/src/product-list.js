import React from 'react';
import { products } from './fake-data/all-products.js';
import Product from './product.js';

export default function ProductList({ activeCategory }) {
  const productList = products.filter(
    (product) =>
      !activeCategory || `FAKE: ${product.category}` === activeCategory,
  );

  return (
    <ul className="flex flex-wrap list-none">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
