"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto } from "@/data/gallery";

export function PhotoLightbox({
  photos,
  index,
  onClose,
  onChange,
}: {
  photos: GalleryPhoto[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const touchX = useRef<number | null>(null);
  const photo = index !== null ? photos[index] : null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + photos.length) % photos.length);
  }, [index, onChange, photos.length]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % photos.length);
  }, [index, onChange, photos.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {photo && index !== null ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f0a1c]/78 p-3 backdrop-blur-xl sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[88vh] max-w-[min(92vw,1200px)]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchX.current = e.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (touchX.current == null) return;
              const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
              if (dx > 56) goPrev();
              if (dx < -56) goNext();
              touchX.current = null;
            }}
          >
            <Image
              src={photo.src}
              alt=""
              width={photo.width}
              height={photo.height}
              className="max-h-[88vh] w-auto rounded-[1.25rem] object-contain shadow-[0_40px_100px_rgba(0,0,0,0.45)] select-none"
              sizes="(min-width:1280px) 1200px, 92vw"
              priority
              draggable={false}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
