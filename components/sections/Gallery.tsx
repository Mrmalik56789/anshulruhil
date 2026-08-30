"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { galleryItems, type GalleryFilter } from "@/data/gallery";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { FeaturedGallery } from "@/components/gallery/FeaturedGallery";
import { LeadershipTimelineStrip } from "@/components/gallery/LeadershipTimelineStrip";
import { AwardsGallery } from "@/components/gallery/AwardsGallery";
import { LeadershipGallery } from "@/components/gallery/LeadershipGallery";
import { EventsCarousel } from "@/components/gallery/EventsCarousel";
import { NetworkingGallery } from "@/components/gallery/NetworkingGallery";
import { CSRGallery } from "@/components/gallery/CSRGallery";
import { ImageLightbox } from "@/components/gallery/ImageLightbox";
import { GalleryFooterCTA } from "@/components/gallery/GalleryFooterCTA";
import { fadeUp } from "@/lib/motion";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const list =
      filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);
    return [...list].sort((a, b) => {
      if (a.span === "featured" && b.span !== "featured") return -1;
      if (b.span === "featured" && a.span !== "featured") return 1;
      return 0;
    });
  }, [filter]);

  const activeIndex = activeId ? galleryItems.findIndex((item) => item.id === activeId) : null;

  const openFiltered = (index: number) => {
    const item = filtered[index];
    if (item) setActiveId(item.id);
  };

  const openBySrc = (src: string) => {
    const item = galleryItems.find((entry) => entry.src === src);
    if (item) setActiveId(item.id);
  };

  return (
    <section id="gallery" className="relative z-[2] py-16 lg:py-24">
      <div className="shell space-y-14 lg:space-y-20">
        <GalleryHero />

        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">FEATURED IMAGES</p>
          <div className="mx-auto mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-transparent via-[#7c4dff] to-transparent" />
          <h3 className="mt-5 text-[clamp(1.85rem,3.8vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink">
            A curated leadership gallery
          </h3>
          <p className="mt-4 text-[1.05rem] leading-[1.8] text-muted">
            Milestones across awards, boards, stages, and rooms where strategy becomes presence.
          </p>
        </motion.div>

        <GalleryFilters active={filter} onChange={setFilter} />

        <FeaturedGallery items={filtered} onOpen={openFiltered} />

        <LeadershipTimelineStrip />

        <AwardsGallery />

        <LeadershipGallery onOpen={openBySrc} />

        <EventsCarousel />

        <NetworkingGallery onOpen={openBySrc} />

        <CSRGallery onOpen={openBySrc} />

        <GalleryFooterCTA />
      </div>

      <ImageLightbox
        items={galleryItems}
        index={activeIndex !== null && activeIndex >= 0 ? activeIndex : null}
        onClose={() => setActiveId(null)}
        onChange={(index) => setActiveId(galleryItems[index]?.id ?? null)}
      />
    </section>
  );
}
