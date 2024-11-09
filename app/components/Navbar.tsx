'use client';

import { Button, Navbar as NextUINavbar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

interface Props {
  onOpenFavorites: () => void;
}

export function Navbar({ onOpenFavorites }: Props) {
  return (
    <NextUINavbar className="bg-background/60 backdrop-blur-md border-b border-primary/20">
      <div className="flex items-center justify-between w-full px-4">
        <h1 className="text-2xl font-bold text-primary">FoodSwipe</h1>
        <div className="flex gap-4">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="border-primary/50">
                Cuisine
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Cuisine types">
              <DropdownItem key="all">All</DropdownItem>
              <DropdownItem key="japanese">Japanese</DropdownItem>
              <DropdownItem key="italian">Italian</DropdownItem>
              <DropdownItem key="asian">Asian Fusion</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="border-primary/50">
                Price
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Price ranges">
              <DropdownItem key="all">All</DropdownItem>
              <DropdownItem key="1">€</DropdownItem>
              <DropdownItem key="2">€€</DropdownItem>
              <DropdownItem key="3">€€€</DropdownItem>
              <DropdownItem key="4">€€€€</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button 
            variant="flat" 
            className="bg-primary/20 text-primary"
            onClick={onOpenFavorites}
            endContent={<span className="text-xs opacity-60">Press F</span>}
          >
            Matches
          </Button>
        </div>
      </div>
    </NextUINavbar>
  );
}

