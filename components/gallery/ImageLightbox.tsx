"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

export function ImageLightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const touchX = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);
  const current = index !== null ? items[index] : null;

  useEffect(() => {
    setVisible(index !== null);
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, items.length, onChange, onClose]);

  if (!current || index === null) return null;

  const meta = [current.location, current.year].filter(Boolean).join(" • ");

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#101018]/72 p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} lightbox`}
        >
          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[1.75rem] bg-[#0b0718] shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
            onTouchStart={(e) => {
              touchX.current = e.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (touchX.current == null) return;
              const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
              if (dx > 60) onChange((index - 1 + items.length) % items.length);
              if (dx < -60) onChange((index + 1) % items.length);
              touchX.current = null;
            }}
          >
            <div className="relative max-h-[78vh] min-h-[40vh] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                width={1600}
                height={1200}
                className="max-h-[78vh] w-full object-contain select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <figcaption className="flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent px-5 py-5 text-white sm:px-7">
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] text-[#c4b5fd]">
                  {current.category.toUpperCase()}
                </p>
                <p className="mt-1 text-lg font-extrabold tracking-[-0.02em]">{current.title}</p>
                {meta ? <p className="mt-1 text-sm text-white/70">{meta}</p> : null}
              </div>
              <p className="shrink-0 text-sm font-medium text-white/70">
                {index + 1} / {items.length}
              </p>
            </figcaption>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition hover:scale-105"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
            <button
              type="button"
              onClick={() => onChange((index - 1 + items.length) % items.length)}
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink shadow-lg transition hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => onChange((index + 1) % items.length)}
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink shadow-lg transition hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
