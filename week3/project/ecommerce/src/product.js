import React from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from './HeartIcon';

export default function Product({ product }) {
  return (
    <li
      key={product.id}
      className="w-1/4 p-4 flex flex-col justify-between h-auto max-lg:w-1/3 max-sm:w-full relative"
    >
      <HeartIcon id={product.id} className="w-5 h-5 absolute top-10 right-0" />
      <Link to={`/product/${product.id}`} className="flex flex-col">
        <img
          src={product.image}
          alt={product.title}
          className="mb-auto mt-auto object-contain w-full h-72"
        />
        <span className="text-blue-500 underline hover:text-blue-700 visited:text-purple-600 truncate">
          {product.title}
        </span>
      </Link>
    </li>
  );
}