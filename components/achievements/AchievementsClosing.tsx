"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { ConnectButton } from "@/components/ui/ConnectButton";
import { fadeUp } from "@/lib/motion";

export const AchievementsClosing = memo(function AchievementsClosing() {
  const { closing } = achievementsPage;

  return (
    <section className="relative z-[2] pb-20 pt-8 lg:pb-28 lg:pt-10">
      <div className="shell">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[2.5rem] px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b1d86] via-[#5b2fe0] to-[#7c4dff]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_40%)]" />
          <div className="absolute inset-[1px] rounded-[calc(2.5rem-1px)] border border-white/15 bg-white/5 backdrop-blur-xl" />

          <div className="relative mx-auto max-w-3xl text-center text-white">
            <p className="text-[13px] font-semibold italic leading-relaxed text-white/80 sm:text-[15px]">
              “{closing.quote}”
            </p>
            <h2 className="mt-6 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.04em]">
              {closing.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-[1.8] text-white/80">
              {closing.copy}
            </p>
            <div className="mt-9 flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
