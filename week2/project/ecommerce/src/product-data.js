import { useState, useEffect, useCallback } from 'react';

export default function useProductData() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    let categoryURL = 'https://fakestoreapi.com/products/categories';
    try {
      const response = await fetch(categoryURL);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError('Error fetching categories');
    }
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    let productURL = 'https://fakestoreapi.com/products';
    if (activeCategory) {
      productURL = `https://fakestoreapi.com/products/category/${activeCategory}`;
    }
    try {
      const response = await fetch(productURL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError('Error fetching products');
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    categories,
    activeCategory,
    setActiveCategory,
    products,
    loading,
    error,
  };
}
