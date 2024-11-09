'use client';

import { Button } from "@nextui-org/react";
import { RestaurantCard } from "./components/RestaurantCard";
import { Navbar } from "./components/Navbar";
import { SwipeInstructions } from "./components/SwipeInstructions";
import { FavoritesDrawer } from "./components/FavoritesDrawer";
import { useRestaurants } from "./hooks/useRestaurants";
import { useKeyboardControls } from "./hooks/useKeyboardControls";
import { useEffect, useState } from "react";

export default function Home() {
  const { currentRestaurant, handleSwipe, favorites, mustTry, resetSuggestions } = useRestaurants();
  const [showInstructions, setShowInstructions] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorites = () => setShowFavorites(!showFavorites);

  useKeyboardControls({
    onSwipe: handleSwipe,
    onToggleFavorites: toggleFavorites
  });

  useEffect(() => {
    const instructionsShown = localStorage.getItem('instructionsShown');
    if (!instructionsShown) {
      setShowInstructions(true);
    }
  }, []);

  if (!currentRestaurant) {
    return (
      <>
        <Navbar onOpenFavorites={toggleFavorites} />
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 bg-background text-foreground">
          <h1 className="text-4xl font-bold mb-4 text-primary">No More Restaurants</h1>
          <p className="text-lg text-foreground/60 mb-8">Check out your matches or try different filters</p>
          <Button 
            color="primary" 
            variant="shadow"
            onClick={resetSuggestions}
          >
            Reset Suggestions
          </Button>
        </div>
        <FavoritesDrawer 
          isOpen={showFavorites}
          onClose={() => setShowFavorites(false)}
          favorites={favorites}
          mustTry={mustTry}
        />
      </>
    );
  }

  return (
    <>
      <Navbar onOpenFavorites={toggleFavorites} />
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center p-4 bg-background">
        <div className="w-full max-w-md relative h-[calc(80vh-64px)]">
          <RestaurantCard 
            restaurant={currentRestaurant} 
            onSwipe={handleSwipe}
          />
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            <Button
              className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/30 text-red-500 hover:bg-red-500/30"
              onClick={() => handleSwipe('left')}
            >
              ✕
            </Button>
            <Button
              className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30"
              onClick={() => handleSwipe('up')}
            >
              ⭐
            </Button>
            <Button
              className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 text-green-500 hover:bg-green-500/30"
              onClick={() => handleSwipe('right')}
            >
              ♥
            </Button>
          </div>
        </div>
      </main>
      {showInstructions && (
        <SwipeInstructions onClose={() => setShowInstructions(false)} />
      )}
      <FavoritesDrawer 
        isOpen={showFavorites}
        onClose={() => setShowFavorites(false)}
        favorites={favorites}
        mustTry={mustTry}
      />
    </>
  );
}

