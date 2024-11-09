import { useEffect } from 'react';

interface Props {
  onSwipe: (direction: 'left' | 'right' | 'up') => void;
  onToggleFavorites: () => void;
}

export function useKeyboardControls({ onSwipe, onToggleFavorites }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          onSwipe('left');
          break;
        case 'ArrowRight':
          onSwipe('right');
          break;
        case 'ArrowUp':
          onSwipe('up');
          break;
        case 'f':
        case 'F':
          onToggleFavorites();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSwipe, onToggleFavorites]);
}

