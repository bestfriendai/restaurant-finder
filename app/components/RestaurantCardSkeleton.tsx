'use client';

import { Card, CardBody, Skeleton } from "@nextui-org/react";

export function RestaurantCardSkeleton() {
  return (
    <Card className="w-full h-[70vh] bg-background/60 backdrop-blur-md border border-primary/20">
      <CardBody className="p-0 overflow-hidden">
        <Skeleton className="w-full h-full rounded-none">
          <div className="h-full w-full bg-default-300"></div>
        </Skeleton>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent p-4">
          <Skeleton className="w-3/4 h-8 mb-2 rounded-lg">
            <div className="h-full w-full bg-default-300"></div>
          </Skeleton>
          <div className="flex items-center gap-2">
            <Skeleton className="w-20 h-4 rounded-lg">
              <div className="h-full w-full bg-default-300"></div>
            </Skeleton>
            <Skeleton className="w-16 h-4 rounded-lg">
              <div className="h-full w-full bg-default-300"></div>
            </Skeleton>
            <Skeleton className="w-12 h-4 rounded-lg">
              <div className="h-full w-full bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
