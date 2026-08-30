"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { GalleryPhoto } from "@/data/gallery";

const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

type Props = {
  photo: GalleryPhoto;
  index: number;
  onOpen: () => void;
};

export function GalleryTile({ photo, index, onOpen }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const hasMeta = Boolean(photo.title || photo.caption || photo.location);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      aria-label={photo.title ? `Open ${photo.title}` : "Open photograph"}
      className="gallery-tile group mb-4 block w-full break-inside-avoid border-0 bg-transparent p-0 text-left md:mb-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : "translate3d(0,40px,0)",
        transition: `opacity 700ms ${EASE} ${Math.min(index, 10) * 80}ms, transform 700ms ${EASE} ${Math.min(index, 10) * 80}ms`,
        willChange: "opacity, transform",
      }}
    >
      <span
        className="relative block overflow-hidden rounded-[24px] bg-white shadow-[0_12px_32px_rgba(80,60,140,0.1)] ring-1 ring-[#7c4dff]/10 transition-[transform,box-shadow] duration-[350ms] will-change-transform"
        style={{
          aspectRatio: `${photo.width} / ${photo.height}`,
          transitionTimingFunction: EASE,
        }}
      >
        <Image
          src={photo.src}
          alt={photo.title || ""}
          fill
          loading={index < 4 ? "eager" : "lazy"}
          priority={index < 2}
          sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover object-[center_20%] transition-transform duration-[350ms] will-change-transform group-hover:scale-[1.05]"
          style={{ transitionTimingFunction: EASE }}
          quality={90}
        />

        {/* Hover overlay */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12081f]/88 via-[#12081f]/25 to-transparent opacity-0 transition-opacity duration-[350ms] group-hover:opacity-100"
          style={{ transitionTimingFunction: EASE }}
        />

        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-3 p-5 opacity-0 transition-[opacity,transform] duration-[350ms] group-hover:translate-y-0 group-hover:opacity-100"
          style={{ transitionTimingFunction: EASE }}
        >
          <span className="min-w-0">
            {photo.title ? (
              <span className="block text-[18px] font-semibold leading-snug tracking-[-0.02em] text-white">
                {photo.title}
              </span>
            ) : null}
            {photo.location ? (
              <span className="mt-1 block text-[13px] font-medium text-white/75">
                {photo.location}
              </span>
            ) : null}
            {photo.caption ? (
              <span className="mt-1.5 block text-[14px] leading-snug text-white/70">
                {photo.caption}
              </span>
            ) : null}
            {!hasMeta ? (
              <span className="block text-[14px] font-medium text-white/80">View</span>
            ) : null}
          </span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </span>
        </span>
      </span>
    </button>
  );
}
