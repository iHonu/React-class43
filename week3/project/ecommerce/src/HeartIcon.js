import React from 'react';
import { useFavorites } from './FavoritesContext';
import heartRegular from './assets/heart-regular.svg';
import heartSolid from './assets/heart-solid.svg';

export default function HeartIcon({ id, className }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const handleFavoriteToggle = () => {
    isFavorite(id) ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <div onClick={handleFavoriteToggle} className={className}>
      <img src={isFavorite(id) ? heartSolid : heartRegular} alt="heart" />
    </div>
  );
}
