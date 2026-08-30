"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Counter } from "@/components/ui/Counter";
import { item, stagger } from "@/lib/motion";

export const AchievementsImpact = memo(function AchievementsImpact() {
  const { impact } = achievementsPage;

  return (
    <section className="relative z-[2] overflow-hidden py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="GLOBAL IMPACT"
          title={impact.title}
          copy={impact.copy}
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="relative mx-auto aspect-[16/10] w-full max-w-xl">
              <Image
                src="/images/world-dots.svg"
                alt=""
                fill
                className="object-contain opacity-80"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {impact.regions.map((region) => (
                <div
                  key={region.name}
                  className="rounded-2xl bg-[#f6f2ff] px-4 py-4"
                >
                  <p className="text-[13px] font-extrabold tracking-[-0.02em] text-[#6d3af2]">
                    {region.name}
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">{region.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {impact.metrics.map((metric) => (
              <motion.article
                key={metric.label}
                variants={item}
                whileHover={{ y: -3 }}
                className="glass-card rounded-[1.5rem] px-5 py-6 text-center will-change-transform"
              >
                <Counter
                  value={metric.value}
                  className="block text-[2rem] font-extrabold tracking-tight text-[#6d3af2] sm:text-[2.2rem]"
                />
                <p className="mt-2 text-[13px] font-semibold text-ink">{metric.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});
