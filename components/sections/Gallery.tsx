"use client";

import { memo, useState } from "react";
import { galleryPhotos } from "@/data/gallery";
import { GalleryTile } from "@/components/gallery/GalleryTile";
import { PhotoLightbox } from "@/components/gallery/PhotoLightbox";

const particles = [
  { top: "18%", left: "8%", size: 5, delay: 0 },
  { top: "32%", right: "12%", size: 7, delay: 0.6 },
  { top: "58%", left: "16%", size: 4, delay: 1.1 },
  { top: "72%", right: "22%", size: 6, delay: 0.3 },
  { top: "44%", left: "48%", size: 3, delay: 0.9 },
];

export const Gallery = memo(function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative z-[2] overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[30rem] w-[min(92vw,52rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,77,255,0.12),transparent_68%)] blur-2xl" />
        <div className="absolute -left-16 bottom-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.12),transparent_70%)] blur-3xl" />
        <div className="absolute -right-10 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.08),transparent_70%)] blur-3xl" />
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#a78bfa]/45"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              width: p.size,
              height: p.size,
              animation: `floaty ${5 + i * 0.4}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="shell relative">
        <header className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-4 text-[12px] font-bold tracking-[0.24em] text-[#7c4dff]">
            GALLERY
          </p>
          <h2 className="text-balance text-[1.65rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1a1428] sm:text-[2rem] lg:text-[2.35rem]">
            Moments Across Innovation,
            <br className="hidden sm:block" /> Leadership & Global Impact
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5b6170] sm:text-[16px]">
            A visual journey through global leadership, entrepreneurship, technology,
            innovation, strategic partnerships, awards, and meaningful milestones.
          </p>
        </header>

        <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 xl:columns-4">
          {galleryPhotos.map((photo, index) => (
            <GalleryTile
              key={photo.id}
              photo={photo}
              index={index}
              onOpen={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      <PhotoLightbox
        photos={galleryPhotos}
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />

      <style jsx global>{`
        .gallery-tile:hover > span:first-child {
          transform: translate3d(0, -6px, 0);
          box-shadow:
            0 22px 48px rgba(109, 58, 242, 0.2),
            0 0 0 1px rgba(124, 77, 255, 0.16);
        }
      `}</style>
    </section>
  );
});
