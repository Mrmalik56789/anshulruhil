"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { ease } from "@/lib/motion";

export const AchievementsHero = memo(function AchievementsHero() {
  const { hero } = achievementsPage;

  return (
    <section className="relative z-[2] pb-10 pt-12 lg:pb-14 lg:pt-20">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-ink">
            {hero.title}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease }}
            className="mt-5 text-[clamp(1.05rem,2vw,1.35rem)] font-semibold tracking-[-0.02em] text-[#6d3af2]"
          >
            {hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, ease }}
            className="mx-auto mt-5 max-w-2xl text-[1.02rem] leading-[1.75] text-muted"
          >
            {hero.copy}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
});
