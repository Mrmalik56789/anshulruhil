"use client";

import { AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/data/gallery";
import { GalleryCard } from "@/components/gallery/GalleryCard";

export function FeaturedGallery({
  items,
  onOpen,
}: {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={index}
            featured={item.span === "featured" || index === 0}
            onOpen={() => onOpen(index)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export function GalleryGrid({
  items,
  onOpen,
}: {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}) {
  return <FeaturedGallery items={items} onOpen={onOpen} />;
}
