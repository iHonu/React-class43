import React from 'react';
import Product from './product';

export default function ProductList({ loading, error, products }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="flex flex-wrap list-none">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
