"use client";

import { motion } from "framer-motion";
import { aboutPage } from "@/data/aboutPage";
import { SoftParticles } from "@/components/about/utils";
import { fadeUp } from "@/lib/motion";

export function VisionBand() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[2.5rem] px-7 py-14 sm:px-12 lg:px-16 lg:py-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#efe8ff] via-[#ddd4ff] to-[#c4b5fd]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.28),transparent_50%),radial-gradient(circle_at_85%_70%,rgba(91,47,224,0.18),transparent_45%)]" />
          <div className="absolute inset-0 bg-white/25 backdrop-blur-[2px]" />
          <SoftParticles count={14} />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-[12px] font-bold tracking-[0.18em] text-[#5b2fe0]">VISION</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink">
              {aboutPage.vision.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-[1.85] text-[#4b5160]">
              {aboutPage.vision.copy}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
