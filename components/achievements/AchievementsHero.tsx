"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { ease, fadeUp } from "@/lib/motion";

export const AchievementsHero = memo(function AchievementsHero() {
  const { hero } = achievementsPage;

  return (
    <section className="relative z-[2] overflow-hidden pb-16 pt-10 lg:pb-24 lg:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[8%] top-[12%] h-[42vmin] w-[42vmin] rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.16),transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[6%] top-[28%] h-[34vmin] w-[34vmin] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.14),transparent_68%)]"
      />

      <div className="shell relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[12px] font-bold tracking-[0.22em] text-[#7c4dff] lg:text-[13px]">
            {hero.eyebrow}
          </p>
          <div className="mx-auto mt-3 h-px max-w-[200px] bg-gradient-to-r from-transparent via-[#7c4dff] to-transparent" />
          <h1 className="mt-6 text-[clamp(2.8rem,8vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-ink">
            {hero.title}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75, ease }}
            className="mt-5 text-[clamp(1.15rem,2.4vw,1.55rem)] font-semibold tracking-[-0.02em] text-[#6d3af2]"
          >
            {hero.subtitle}
          </motion.p>
          <motion.p
            {...fadeUp}
            className="mx-auto mt-7 max-w-2xl text-[1.05rem] leading-[1.8] text-muted sm:text-[1.1rem]"
          >
            {hero.copy}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
});
