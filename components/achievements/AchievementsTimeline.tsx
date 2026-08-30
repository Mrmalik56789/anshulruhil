"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ease } from "@/lib/motion";

export const AchievementsTimeline = memo(function AchievementsTimeline() {
  return (
    <section className="relative z-[2] py-14 lg:py-20">
      <div className="shell">
        <SectionHeader
          eyebrow="CAREER JOURNEY"
          title="A timeline of leadership and ventures"
          copy="Alternating milestones — enterprise craft, unicorn companies, AI platforms, and national recognition — told as one continuous story."
          align="center"
        />

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#7c4dff]/45 via-[#c4b5fd]/55 to-[#7c4dff]/20 md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-6 md:space-y-7">
            {achievementsPage.journey.map((entry, index) => {
              const left = index % 2 === 0;
              return (
                <motion.li
                  key={`${entry.year}-${entry.title}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease }}
                  className="relative grid md:grid-cols-2 md:gap-8"
                >
                  <span
                    aria-hidden
                    className="absolute left-4 top-7 z-[1] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#7c4dff] shadow-[0_0_0_5px_rgba(124,77,255,0.15)] md:left-1/2"
                  />

                  <div
                    className={`pl-10 md:pl-0 ${
                      left ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"
                    }`}
                  >
                    <article className="glass-card group overflow-hidden rounded-[1.35rem] text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(109,58,242,0.12)]">
                      <div className="flex gap-4 p-4 sm:p-5">
                        {entry.image ? (
                          <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[0.9rem] bg-[#f7f5fc] shadow-[0_10px_24px_rgba(40,24,90,0.1)] sm:h-[100px] sm:w-[100px]">
                            <Image
                              src={entry.image}
                              alt=""
                              fill
                              sizes="100px"
                              className="object-contain p-2.5"
                              loading="lazy"
                            />
                          </div>
                        ) : null}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-bold tracking-[0.14em] text-[#7c4dff]">
                              {entry.year}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3edff] px-2 py-0.5 text-[10px] font-semibold text-[#6d3af2]">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={entry.logo}
                                alt=""
                                width={14}
                                height={14}
                                className="h-3.5 w-3.5 object-contain"
                                loading="lazy"
                              />
                              {entry.org}
                            </span>
                          </div>
                          <h3 className="mt-2 text-[1.05rem] font-extrabold tracking-[-0.03em] text-ink sm:text-[1.15rem]">
                            {entry.title}
                          </h3>
                          <p className="mt-2 text-[0.9rem] leading-[1.65] text-muted">{entry.copy}</p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className={`hidden md:block ${left ? "" : "md:col-start-1 md:row-start-1"}`} />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
});
