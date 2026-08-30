"use client";

import { memo, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryPhotos } from "@/data/gallery";
import { PhotoLightbox } from "@/components/gallery/PhotoLightbox";
import { ease } from "@/lib/motion";

function tileClass(index: number, ratio: number) {
  // Balanced mosaic: mix landscape / portrait spans without oversized portrait walls
  if (ratio > 1.25) {
    return index % 5 === 0
      ? "md:col-span-2 md:row-span-1 aspect-[16/10]"
      : "aspect-[16/11]";
  }
  if (ratio < 0.85) {
    return "aspect-[4/5] md:row-span-2";
  }
  return "aspect-[5/4]";
}

export const Gallery = memo(function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const tiles = useMemo(
    () =>
      galleryPhotos.map((photo, index) => ({
        ...photo,
        ratio: photo.width / photo.height,
        className: tileClass(index, photo.width / photo.height),
      })),
    [],
  );

  return (
    <section id="gallery" className="relative z-[2] overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,77,255,0.12),transparent_70%)]"
      />

      <div className="shell relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="mb-8 text-center text-[12px] font-bold tracking-[0.22em] text-[#7c4dff] lg:mb-10"
        >
          GALLERY
        </motion.p>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-3.5 xl:grid-cols-5 2xl:grid-cols-6">
          {tiles.map((photo, index) => (
            <motion.button
              key={photo.id}
              type="button"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index % 10, 9) * 0.04,
                ease,
              }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setActive(index)}
              className={`group relative overflow-hidden rounded-[1.1rem] bg-[#f3edff] shadow-[0_8px_24px_rgba(80,60,140,0.08)] ring-1 ring-[#7c4dff]/08 transition-[box-shadow] duration-300 will-change-transform hover:shadow-[0_18px_40px_rgba(109,58,242,0.18)] hover:ring-[#7c4dff]/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff]/50 lg:rounded-[1.25rem] ${photo.className}`}
              aria-label="Open photograph"
            >
              <Image
                src={photo.src}
                alt=""
                fill
                loading={index < 8 ? "eager" : "lazy"}
                priority={index < 4}
                sizes="(min-width:1536px) 15vw, (min-width:1280px) 18vw, (min-width:1024px) 22vw, (min-width:768px) 30vw, 46vw"
                className="object-cover object-[center_20%] transition-transform duration-500 ease-out group-hover:scale-[1.045]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5b2fe0]/10 via-transparent to-white/10 opacity-0 transition duration-300 group-hover:opacity-100"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <PhotoLightbox
        photos={galleryPhotos}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
    </section>
  );
});
