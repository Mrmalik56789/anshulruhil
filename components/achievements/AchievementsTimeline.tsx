"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ease } from "@/lib/motion";

export const AchievementsTimeline = memo(function AchievementsTimeline() {
  return (
    <section className="relative z-[2] overflow-hidden py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="FEATURED TIMELINE"
          title="Milestones that shaped the work"
          copy="A vertical record of enterprise leadership, unicorn ventures, and AI platforms — each step grounded in servant leadership."
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#7c4dff]/50 via-[#c4b5fd]/60 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10 md:space-y-16">
            {achievementsPage.timeline.map((entry, index) => {
              const left = index % 2 === 0;
              return (
                <motion.li
                  key={`${entry.year}-${entry.title}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, ease }}
                  className="relative grid gap-6 md:grid-cols-2 md:gap-12"
                >
                  <span
                    aria-hidden
                    className="absolute left-4 top-8 z-[1] h-3 w-3 -translate-x-1/2 rounded-full bg-[#7c4dff] shadow-[0_0_0_6px_rgba(124,77,255,0.16)] md:left-1/2"
                  />

                  <div className={`${left ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"} pl-12 md:pl-0`}>
                    <article className="glass-card overflow-hidden rounded-[1.75rem] text-left transition hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(109,58,242,0.14)]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={entry.image}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 40vw, 90vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f38]/35 to-transparent" />
                      </div>
                      <div className="p-6 sm:p-7">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[12px] font-bold tracking-[0.16em] text-[#7c4dff]">
                            {entry.year}
                          </span>
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#f3edff] px-2.5 py-1 text-[11px] font-semibold text-[#6d3af2]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={entry.logo}
                              alt=""
                              width={16}
                              height={16}
                              className="h-4 w-4 object-contain"
                              loading="lazy"
                            />
                            {entry.org}
                          </span>
                        </div>
                        <h3 className="mt-3 text-[1.25rem] font-extrabold tracking-[-0.03em] text-ink sm:text-[1.35rem]">
                          {entry.title}
                        </h3>
                        <p className="mt-3 text-[0.98rem] leading-[1.75] text-muted">{entry.copy}</p>
                      </div>
                    </article>
                  </div>

                  <div className={`hidden md:block ${left ? "" : "md:order-1"}`} aria-hidden />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
});
