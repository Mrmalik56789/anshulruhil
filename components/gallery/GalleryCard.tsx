"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
import { ease } from "@/lib/motion";

export function GalleryCard({
  item,
  index,
  onOpen,
  featured = false,
}: {
  item: GalleryItem;
  index: number;
  onOpen: () => void;
  featured?: boolean;
}) {
  const reduce = useReducedMotion();
  const meta = [item.location, item.year].filter(Boolean).join(" • ");

  return (
    <motion.button
      type="button"
      layout
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97, filter: "blur(8px)" }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: Math.min(index, 8) * 0.15, ease }}
      whileHover={reduce ? undefined : { y: -8, scale: 1.04 }}
      onClick={onOpen}
      className={`gallery-card group relative w-full overflow-hidden rounded-[24px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff]/45 ${
        featured
          ? "min-h-[22rem] sm:min-h-[26rem] lg:col-span-2 lg:min-h-[28rem]"
          : item.span === "tall"
            ? "min-h-[22rem] sm:min-h-[26rem]"
            : item.span === "wide"
              ? "min-h-[16rem] sm:min-h-[18rem] lg:col-span-2"
              : "min-h-[16rem] sm:min-h-[18rem]"
      }`}
      aria-label={`Open ${item.title}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        loading="lazy"
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes={featured || item.span === "wide" ? "(min-width:1024px) 55vw, 90vw" : "(min-width:1280px) 24vw, (min-width:640px) 45vw, 90vw"}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-[#1a0f38]/80 via-[#1a0f38]/15 to-transparent opacity-90 transition group-hover:opacity-100" />
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,77,255,0.35),transparent_55%)] opacity-0 transition group-hover:opacity-100" />

      {(featured || item.badge) && (
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-white backdrop-blur-md">
          {item.badge ?? "Featured Moment"}
        </span>
      )}

      <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
        <ZoomIn size={16} />
      </span>

      <span className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-[#ddd4ff] backdrop-blur-md">
          {item.category.toUpperCase()}
        </span>
        <span className="mt-2.5 block text-[1.1rem] font-extrabold tracking-[-0.02em] sm:text-[1.2rem]">
          {item.title}
        </span>
        {meta ? <span className="mt-1 block text-[13px] text-white/75">{meta}</span> : null}
      </span>
    </motion.button>
  );
}
