import React from 'react';

export default function Product({ product }) {
  return (
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
  );
}
