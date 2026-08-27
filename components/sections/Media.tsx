"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export function Media() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="MEDIA & PUBLIC PRESENCE"
          title="Essays, briefings, and public thinking."
          copy="Selected writing from the previous site — leadership, networking, multi-domain building, and the role of technology in strategy."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {site.media.map((piece) => (
            <motion.a
              key={piece.title}
              href={piece.href}
              target="_blank"
              rel="noreferrer"
              variants={item}
              whileHover={{ y: -8 }}
              className="glass-card group flex h-full flex-col rounded-[1.7rem] p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#efe8ff] px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-[#7c4dff]">
                  {piece.kind}
                </span>
                <span className="text-[12px] text-muted">{piece.date}</span>
              </div>
              <h3 className="mt-5 text-[1.2rem] font-extrabold leading-snug tracking-[-0.03em] text-ink">
                {piece.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-[1.7] text-muted">{piece.copy}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#7c4dff]">
                Read essay <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
