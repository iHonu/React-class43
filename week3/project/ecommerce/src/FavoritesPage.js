import React, { useState, useEffect } from 'react';
import { useFavorites } from './FavoritesContext';
import Product from './product';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const products = await Promise.all(
          favorites.map((id) =>
            fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
              res.json(),
            ),
          ),
        );
        console.log(products);
        setFavoriteProducts(products);
      } catch (err) {
        setError('Error fetching product details');
        setLoading(false);
      }
      setLoading(false);
    };

    fetchFavorites();
  }, [favorites]);
  console.log(favorites);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="flex flex-wrap list-none">
      {favoriteProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
