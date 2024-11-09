'use client';

import { Card, CardBody, Image } from "@nextui-org/react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Restaurant } from "../types";
import { useState } from "react";
import { RestaurantCardSkeleton } from "./RestaurantCardSkeleton";

interface Props {
  restaurant: Restaurant;
  onSwipe: (direction: 'left' | 'right' | 'up') => void;
}

export function RestaurantCard({ restaurant, onSwipe }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset;
    if (Math.abs(offset.x) > 100) {
      onSwipe(offset.x > 0 ? 'right' : 'left');
    } else if (offset.y < -100) {
      onSwipe('up');
    }
  };

  return (
    <motion.div
      style={{ x, y, rotate, opacity }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      className="absolute w-full"
    >
      {!imageLoaded && <RestaurantCardSkeleton />}
      <Card className={`w-full h-[70vh] bg-background/60 backdrop-blur-md border border-primary/20 ${!imageLoaded ? 'hidden' : ''}`}>
        <CardBody className="p-0 overflow-hidden">
          <Image
            removeWrapper
            alt={restaurant.name}
            className="w-full h-full object-cover"
            src={restaurant.image}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h2 className="text-2xl font-bold text-white mb-2">{restaurant.name}</h2>
            <div className="flex items-center gap-2 text-white/80">
              <span>{restaurant.cuisine}</span>
              <span>•</span>
              <span>{restaurant.priceRange}</span>
              <span>•</span>
              <span>{restaurant.rating}★</span>
            </div>
            <p className="text-white/60 mt-1">{restaurant.distance}km away</p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

