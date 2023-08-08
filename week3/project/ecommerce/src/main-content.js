import React from 'react';
import ProductList from './product-list';
import Categories from './category';
import useProductData from './product-data';

export default function Main() {
  const {
    categories,
    activeCategory,
    setActiveCategory,
    products,
    loading,
    error,
  } = useProductData();

  return (
    <div>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        onActiveCategoryChange={setActiveCategory}
      />
      <ProductList products={products} loading={loading} error={error} />
    </div>
  );
}
