"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { ConnectButton } from "@/components/ui/ConnectButton";
import { fadeUp } from "@/lib/motion";

export const AchievementsVision = memo(function AchievementsVision() {
  const { vision } = achievementsPage;

  return (
    <section className="relative z-[2] pb-20 pt-6 lg:pb-28 lg:pt-8">
      <div className="shell">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[2rem] px-7 py-12 text-center sm:px-12 lg:px-16 lg:py-14"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b1d86] via-[#5b2fe0] to-[#7c4dff]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.18),transparent_42%)]" />
          <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/15 bg-white/5 backdrop-blur-xl" />

          <div className="relative mx-auto max-w-2xl text-white">
            <p className="text-[12px] font-bold tracking-[0.18em] text-white/70">
              VISION FOR THE FUTURE
            </p>
            <h2 className="mt-4 text-[clamp(1.85rem,3.8vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.04em]">
              {vision.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-[1.75] text-white/80">
              {vision.copy}
            </p>
            <div className="mt-8 flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
