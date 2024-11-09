'use client';

import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react";
import { Restaurant } from "../types";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  favorites: Restaurant[];
  mustTry: Restaurant[];
}

export function FavoritesDrawer({ isOpen, onClose, favorites, mustTry }: Props) {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="lg"
      scrollBehavior="inside"
      classNames={{
        base: "bg-background/95 backdrop-blur-md",
        header: "border-b border-primary/20",
        body: "p-0",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="text-2xl font-bold text-primary">Your Matches</ModalHeader>
            <ModalBody className="p-4">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground/80 mb-4">Must Try ({mustTry.length})</h3>
                <div className="space-y-4">
                  {mustTry.map((restaurant) => (
                    <div key={restaurant.id} className="flex gap-4 items-center p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={restaurant.image}
                          alt={restaurant.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{restaurant.name}</h4>
                        <p className="text-sm text-foreground/60">{restaurant.cuisine} • {restaurant.priceRange}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground/80 mb-4">Liked ({favorites.length})</h3>
                <div className="space-y-4">
                  {favorites.map((restaurant) => (
                    <div key={restaurant.id} className="flex gap-4 items-center p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={restaurant.image}
                          alt={restaurant.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{restaurant.name}</h4>
                        <p className="text-sm text-foreground/60">{restaurant.cuisine} • {restaurant.priceRange}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

