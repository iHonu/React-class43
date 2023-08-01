import React from 'react';
import useProductData from './product-data';

export default function Categories({ onActiveCategoryChange, activeCategory }) {
  const { categories } = useProductData();
  return (
    <div className="flex cursor-pointer">
      {categories.map((category) => (
        <div
          key={category}
          className={`m-1 p-2 font-medium bg-zinc-200 hover:bg-zinc-300 ${
            activeCategory === category ? 'bg-zinc-400' : ''
          }`}
          onClick={() => onActiveCategoryChange(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
