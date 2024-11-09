import { useState } from 'react';
import { Restaurant, SwipeDirection } from '../types';

// Mock data for initial development
const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Cyber Sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    cuisine: 'Japanese',
    priceRange: '€€',
    rating: 4.5,
    distance: 0.8,
    address: '123 Neo Tokyo St'
  },
  {
    id: '2',
    name: 'Neon Noodles',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de',
    cuisine: 'Asian Fusion',
    priceRange: '€€€',
    rating: 4.8,
    distance: 1.2,
    address: '456 Digital Drive'
  },
  {
    id: '3',
    name: 'Matrix Bistro',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
    cuisine: 'Modern European',
    priceRange: '€€€€',
    rating: 4.7,
    distance: 1.5,
    address: '789 Virtual Ave'
  }
];

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants);
  const [favorites, setFavorites] = useState<Restaurant[]>([]);
  const [mustTry, setMustTry] = useState<Restaurant[]>([]);

  const handleSwipe = (direction: SwipeDirection) => {
    if (!restaurants.length) return;
    
    const [current, ...rest] = restaurants;
    setRestaurants(rest);

    switch (direction) {
      case 'right':
        setFavorites([...favorites, current]);
        break;
      case 'up':
        setMustTry([...mustTry, current]);
        break;
      default:
        break;
    }
  };

  const resetSuggestions = () => {
    setRestaurants(mockRestaurants);
  };

  return {
    currentRestaurant: restaurants[0],
    remainingCount: restaurants.length,
    favorites,
    mustTry,
    handleSwipe,
    resetSuggestions
  };
}

