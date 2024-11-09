export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  priceRange: '€' | '€€' | '€€€' | '€€€€';
  rating: number;
  distance: number;
  address: string;
}

export type SwipeDirection = 'left' | 'right' | 'up' | null;

