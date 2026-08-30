"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { csrGallery } from "@/data/gallery";
import { item, stagger } from "@/lib/motion";

export function CSRGallery({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <div className="rounded-[2rem] bg-gradient-to-br from-[#f7f4ff] via-white to-[#efe8ff] px-5 py-10 sm:px-8 lg:px-10">
      <div className="max-w-2xl">
        <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">CSR & COMMUNITY</p>
        <div className="mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
        <h3 className="mt-5 text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold tracking-[-0.04em] text-ink">
          Impact beyond the boardroom.
        </h3>
        <p className="mt-4 text-[1.02rem] leading-[1.8] text-muted">
          Softer moments of community partnership — where technology leadership meets civic responsibility.
        </p>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-5 lg:grid-cols-2"
      >
        {csrGallery.map((shot) => (
          <motion.button
            key={shot.title}
            type="button"
            variants={item}
            whileHover={{ y: -6 }}
            onClick={() => onOpen(shot.src)}
            className="glass-card group grid overflow-hidden rounded-[24px] text-left sm:grid-cols-[0.9fr_1.1fr] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff]/40"
          >
            <span className="relative min-h-[14rem] overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.title}
                fill
                loading="lazy"
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width:1024px) 22vw, 90vw"
              />
            </span>
            <span className="flex flex-col justify-center p-6 sm:p-7">
              <span className="text-[1.15rem] font-extrabold tracking-[-0.02em] text-ink">{shot.title}</span>
              <span className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{shot.copy}</span>
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
