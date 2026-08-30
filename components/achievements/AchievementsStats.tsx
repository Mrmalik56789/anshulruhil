"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Counter } from "@/components/ui/Counter";
import { item, stagger } from "@/lib/motion";

export const AchievementsStats = memo(function AchievementsStats() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="IMPACT METRICS"
          title="Numbers that define the journey"
          copy="Documented outcomes across leadership, ventures, recognition, and global reach."
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievementsPage.stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card group rounded-[1.6rem] px-6 py-7 text-center will-change-transform"
            >
              <Counter
                value={stat.value}
                className="block text-[2.15rem] font-extrabold tracking-tight text-[#6d3af2] sm:text-[2.4rem]"
              />
              <p className="mt-2 text-[15px] font-semibold text-ink">{stat.label}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{stat.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
