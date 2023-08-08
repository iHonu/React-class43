import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-col">
      <div className="flex">
        <h2 className="text-3xl font-semibold my-4">{product.title}</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-14">
        <p className="flex-1">{product.description}</p>
        <div className="w-full px-6 sm:w-2/3 md:w-1/2 lg:w-1/3">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
