"use client";

import { motion } from "framer-motion";
import { galleryFilters, type GalleryFilter } from "@/data/gallery";

export function GalleryFilters({
  active,
  onChange,
}: {
  active: GalleryFilter;
  onChange: (filter: GalleryFilter) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5" role="tablist" aria-label="Gallery categories">
      {galleryFilters.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff]/40 sm:px-5 sm:text-[14px] ${
              isActive ? "text-white" : "text-[#4b5160] hover:text-[#5b2fe0]"
            }`}
          >
            {isActive ? (
              <motion.span
                layoutId="gallery-filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b67ff] to-[#5b2fe0] shadow-[0_12px_28px_rgba(109,58,242,0.28)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : (
              <span className="absolute inset-0 rounded-full border border-[#eceaf6] bg-white/70 backdrop-blur-md" />
            )}
            <span className="relative z-[1]">{filter}</span>
          </button>
        );
      })}
    </div>
  );
}
