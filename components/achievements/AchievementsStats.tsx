"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { Counter } from "@/components/ui/Counter";
import { item, stagger } from "@/lib/motion";

export const AchievementsStats = memo(function AchievementsStats() {
  return (
    <section className="relative z-[2] pb-14 pt-2 lg:pb-18">
      <div className="shell">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {achievementsPage.stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={item}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-[1.15rem] px-3 py-5 text-center will-change-transform sm:px-4 sm:py-6"
            >
              <Counter
                value={stat.value}
                className="block text-[1.55rem] font-extrabold tracking-tight text-[#6d3af2] sm:text-[1.75rem]"
              />
              <p className="mt-1.5 text-[11px] font-semibold leading-snug text-ink sm:text-[12px]">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
