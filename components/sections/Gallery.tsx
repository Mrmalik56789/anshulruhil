"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? site.gallery[active] : null;

  return (
    <section id="gallery" className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="GLOBAL GALLERY"
          title="Rooms where leadership becomes visible."
          copy="A curated set of events, conversations, and public moments — not a dump of photographs."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 columns-1 gap-5 sm:columns-2 xl:columns-3"
        >
          {site.gallery.map((shot, index) => (
            <motion.button
              key={shot.src}
              type="button"
              variants={item}
              onClick={() => setActive(index)}
              className={`gallery-card group mb-5 w-full break-inside-avoid overflow-hidden rounded-[1.6rem] text-left ${
                shot.span === "tall" ? "min-h-[22rem]" : "min-h-[16rem]"
              }`}
            >
              <span className="relative block h-full min-h-[16rem]">
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#1a0f38]/70 via-transparent to-transparent opacity-80" />
                <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="block text-[1.05rem] font-extrabold">{shot.title}</span>
                  <span className="mt-1 block text-[13px] text-white/80">{shot.copy}</span>
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {current ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-[#101018]/70 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.figure
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-[1.75rem] bg-black"
            >
              <Image
                src={current.src}
                alt={current.title}
                width={1600}
                height={1200}
                className="max-h-[88vh] w-full object-contain"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="font-extrabold">{current.title}</p>
                <p className="mt-1 text-sm text-white/80">{current.copy}</p>
              </figcaption>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
