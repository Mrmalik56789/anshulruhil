"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
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
  const open = index !== null;
  const photo = open ? photos[index] : null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + photos.length) % photos.length);
  }, [index, onChange, photos.length]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % photos.length);
  }, [index, onChange, photos.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  if (!open || !photo || index === null) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.92)] p-3 sm:p-8"
      style={{ animation: "gallery-lb-fade 280ms ease-out" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/18 sm:right-6 sm:top-6"
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
        className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/18 sm:left-6"
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
        className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/18 sm:right-6"
      >
        <ChevronRight size={22} />
      </button>

      <div
        key={photo.id}
        className="relative flex max-h-[90vh] w-full max-w-[min(92vw,1100px)] flex-col items-center"
        style={{ animation: "gallery-lb-in 320ms cubic-bezier(0.22, 0.61, 0.36, 1)" }}
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
          alt={photo.title || ""}
          width={photo.width}
          height={photo.height}
          className="max-h-[78vh] w-auto rounded-[1.25rem] object-contain select-none"
          sizes="(min-width:1280px) 1100px, 92vw"
          priority
          quality={95}
          draggable={false}
        />

        <div className="mt-5 max-w-xl px-4 text-center">
          <p className="text-[12px] font-medium tracking-[0.16em] text-white/45">
            {index + 1} / {photos.length}
          </p>
          {photo.title ? (
            <p className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-white">
              {photo.title}
            </p>
          ) : null}
          {photo.location ? (
            <p className="mt-1 text-[13px] text-white/55">{photo.location}</p>
          ) : null}
          {photo.caption ? (
            <p className="mt-2 text-[14px] leading-relaxed text-white/65">{photo.caption}</p>
          ) : null}
        </div>
      </div>

      <style jsx global>{`
        @keyframes gallery-lb-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes gallery-lb-in {
          from {
            opacity: 0;
            transform: translate3d(0, 12px, 0) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
