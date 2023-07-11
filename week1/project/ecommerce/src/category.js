import React from 'react';
import { categories } from './fake-data/all-categories.js';

export default function Categories({ onActiveCategory, activeCategory }) {
  return (
    <div className="flex cursor-pointer">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`m-1 p-2 font-medium bg-zinc-200 hover:bg-zinc-300 ${
            activeCategory === category ? 'bg-zinc-400' : ''
          }`}
          onClick={() => onActiveCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
