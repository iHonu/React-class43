import React from 'react';
import { products } from './fake-data/all-products.js';

export default function Products({ activeCategory }) {
  return (
    <ul className="flex flex-wrap list-none">
      {products
        .filter(
          (product) =>
            !activeCategory || `FAKE: ${product.category}` === activeCategory,
        )
        .map((product) => (
          <li
            key={product.id}
            className="w-1/4 p-4 flex flex-col justify-between h-auto max-lg:w-1/3 max-sm:w-full"
          >
            <div className="flex flex-col">
              <img
                src={product.image}
                alt={product.title}
                className="mb-auto mt-auto object-contain w-full h-72"
              />
              <span className="truncate">{product.title}</span>
            </div>
          </li>
        ))}
    </ul>
  );
}
