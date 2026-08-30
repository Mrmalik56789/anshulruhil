"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { networkingGallery } from "@/data/gallery";
import { item, stagger } from "@/lib/motion";

export function NetworkingGallery({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <div>
      <div className="max-w-2xl">
        <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">NETWORKING GALLERY</p>
        <div className="mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
        <h3 className="mt-5 text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold tracking-[-0.04em] text-ink">
          Conversations with leaders.
        </h3>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {networkingGallery.map((shot) => (
          <motion.button
            key={shot.title}
            type="button"
            variants={item}
            whileHover={{ y: -8 }}
            onClick={() => onOpen(shot.src)}
            className="group relative overflow-hidden rounded-[24px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff]/40"
          >
            <span className="absolute -inset-1 rounded-[26px] bg-[radial-gradient(circle,rgba(124,77,255,0.35),transparent_65%)] opacity-0 blur-md transition group-hover:opacity-100" />
            <span className="relative block overflow-hidden rounded-[24px] border border-white/80 bg-white/70 shadow-[0_20px_44px_rgba(40,24,90,0.12)] backdrop-blur-xl">
              <span className="relative block aspect-square overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw"
                />
              </span>
              <span className="flex items-center justify-between gap-2 px-4 py-3.5">
                <span>
                  <span className="block text-[0.95rem] font-extrabold text-ink">{shot.title}</span>
                  <span className="mt-0.5 block text-[12px] text-muted">{shot.location}</span>
                </span>
                <span className="text-lg" aria-hidden>
                  {shot.flag}
                </span>
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
