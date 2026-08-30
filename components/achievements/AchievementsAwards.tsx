"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export const AchievementsAwards = memo(function AchievementsAwards() {
  return (
    <section className="relative z-[2] py-14 lg:py-20">
      <div className="shell">
        <SectionHeader
          eyebrow="AWARDS & RECOGNITION"
          title="Honors earned through sustained impact"
          copy="National and North American recognition for leadership, community, and AI product excellence."
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
        >
          {achievementsPage.awards.map((award) => (
            <motion.article
              key={`${award.year}-${award.title}`}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="award-plaque group w-[min(82vw,320px)] shrink-0 overflow-hidden rounded-[1.4rem] will-change-transform sm:w-auto"
            >
              <div className="relative flex h-[160px] items-center justify-center overflow-hidden bg-[#f7f5fc] sm:h-[170px]">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 320px"
                  quality={95}
                  className="object-contain p-4 transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.12em] text-[#6d3af2] shadow-sm">
                  {award.year}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[1.05rem] font-extrabold tracking-[-0.03em] text-ink">
                  {award.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-[1.65] text-muted">{award.copy}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
