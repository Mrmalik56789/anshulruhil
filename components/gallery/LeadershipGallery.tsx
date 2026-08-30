"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { item, stagger } from "@/lib/motion";

const leadership = galleryItems.filter((g) => g.category === "Leadership");

export function LeadershipGallery({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <div>
      <div className="max-w-2xl">
        <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">LEADERSHIP GALLERY</p>
        <div className="mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
        <h3 className="mt-5 text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold tracking-[-0.04em] text-ink">
          Presence that leads rooms.
        </h3>
        <p className="mt-4 text-[1.02rem] leading-[1.8] text-muted">
          Executive portraits and moments that reflect clarity, warmth, and servant leadership.
        </p>
      </div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {leadership.map((shot) => (
          <motion.button
            key={shot.id}
            type="button"
            variants={item}
            whileHover={{ y: -8 }}
            onClick={() => onOpen(shot.src)}
            className="group overflow-hidden rounded-[24px] text-left shadow-[0_22px_48px_rgba(40,24,90,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff]/40"
          >
            <span className="relative block aspect-[4/5] overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                loading="lazy"
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width:1024px) 28vw, (min-width:640px) 45vw, 90vw"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#1a0f38]/75 via-transparent to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="block text-[1.05rem] font-extrabold">{shot.title}</span>
                <span className="mt-1 block text-[13px] text-white/75">
                  {[shot.location, shot.year].filter(Boolean).join(" • ")}
                </span>
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
