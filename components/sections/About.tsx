"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { site } from "@/data/site";
import { fadeUp } from "@/lib/motion";

function highlight(text: string, words: readonly string[]) {
  const pattern = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    const match = words.some((w) => w.toLowerCase() === part.toLowerCase());
    return match ? (
      <span key={i} className="font-semibold text-[#5b2fe0]">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    );
  });
}

export function About() {
  const [open, setOpen] = useState(false);
  const { about } = site;

  return (
    <section id="about" className="relative z-[2] py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <motion.div {...fadeUp} className="relative mx-auto w-full max-w-[32rem]">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.35),transparent_62%)] blur-2xl" />
          <div className="about-frame relative overflow-hidden rounded-[2.25rem] p-[1px]">
            <div className="relative overflow-hidden rounded-[2.2rem] bg-white/70 shadow-[0_30px_80px_rgba(40,24,90,0.14)] backdrop-blur-xl">
              <Image
                src={about.photo}
                alt={about.photoAlt}
                width={894}
                height={792}
                className="h-auto w-full object-cover object-top"
                sizes="(min-width: 1024px) 38vw, 90vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a1658]/25 via-transparent to-white/10" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/80 bg-white/75 px-5 py-4 shadow-[0_18px_40px_rgba(80,60,140,0.12)] backdrop-blur-xl sm:left-10 sm:right-auto sm:max-w-[16rem]"
          >
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#7c4dff]">CO-FOUNDER</p>
            <p className="mt-1 text-[15px] font-semibold text-ink">Ruhil Holdings · USD 550M+</p>
          </motion.div>
        </motion.div>

        <div className="lg:pt-4">
          <motion.div {...fadeUp}>
            <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">{about.eyebrow}</p>
            <div className="mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink">
              {about.title}
            </h2>
            <p className="mt-6 text-[1.08rem] leading-[1.85] text-[#2d3140]">{about.intro}</p>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.85] text-muted">
              {about.body.map((para) => (
                <p key={para}>{highlight(para, about.highlights)}</p>
              ))}
            </div>
            <button type="button" onClick={() => setOpen(true)} className="connect-btn mt-8 inline-flex">
              Read Full Story
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-[#101018]/45 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="full-story-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="lead-card max-h-[min(86vh,44rem)] w-full max-w-2xl overflow-y-auto rounded-[2rem] px-7 py-8 sm:px-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-bold tracking-[0.16em] text-[#7c4dff]">THE FULL STORY</p>
                  <h3 id="full-story-title" className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                    A life of learning, leadership, and legacy
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#f3edff] text-ink"
                  aria-label="Close story"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-[1.85] text-muted">
                {about.story.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
