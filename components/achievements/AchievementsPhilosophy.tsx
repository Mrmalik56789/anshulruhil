"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { fadeUp } from "@/lib/motion";

export const AchievementsPhilosophy = memo(function AchievementsPhilosophy() {
  const { philosophy } = achievementsPage;

  return (
    <section className="relative z-[2] py-14 lg:py-20">
      <div className="shell">
        <motion.div
          {...fadeUp}
          className="glass-card mx-auto grid max-w-4xl items-center gap-8 rounded-[1.75rem] p-6 sm:grid-cols-[160px_1fr] sm:gap-10 sm:p-8 lg:p-10"
        >
          <div className="relative mx-auto h-[160px] w-[160px] overflow-hidden rounded-[1.25rem] shadow-[0_16px_36px_rgba(40,24,90,0.12)]">
            <Image
              src={philosophy.portrait}
              alt={philosophy.portraitAlt}
              fill
              sizes="160px"
              className="object-cover object-top"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">
              LEADERSHIP PHILOSOPHY
            </p>
            <blockquote className="mt-4 text-[1.15rem] font-semibold leading-[1.55] tracking-[-0.02em] text-ink sm:text-[1.25rem]">
              “{philosophy.quote}”
            </blockquote>
            <p className="mt-4 text-[0.98rem] leading-[1.75] text-muted">{philosophy.copy}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
