"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export const AchievementsAwards = memo(function AchievementsAwards() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="AWARDS & RECOGNITION"
          title="Honors earned through sustained impact"
          copy="National and North American recognition for leadership, community contribution, and AI product excellence."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievementsPage.awards.map((award) => (
            <motion.article
              key={`${award.year}-${award.title}`}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="award-plaque group overflow-hidden rounded-[1.8rem] will-change-transform"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={award.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f38]/55 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-[#6d3af2]">
                  {award.year}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-[1.2rem] font-extrabold tracking-[-0.03em] text-ink">
                  {award.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{award.copy}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
