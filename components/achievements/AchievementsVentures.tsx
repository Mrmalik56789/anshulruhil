"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export const AchievementsVentures = memo(function AchievementsVentures() {
  return (
    <section className="relative z-[2] py-14 lg:py-20">
      <div className="shell">
        <SectionHeader
          eyebrow="VENTURES SHOWCASE"
          title="Companies built to scale with care"
          copy="Every venture from the portfolio — achievement-focused cards only. No external website links."
          align="center"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {achievementsPage.ventures.map((venture) => (
            <motion.article
              key={venture.name}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="venture-card group rounded-[1.5rem] p-[1px] will-change-transform"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[1.45rem] bg-white/95">
                <div className="relative h-[180px] overflow-hidden bg-[#f7f6fb] sm:h-[200px]">
                  <Image
                    src={venture.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className={
                      venture.image === venture.logo
                        ? "object-contain p-10 transition duration-500 group-hover:scale-[1.03]"
                        : "object-cover transition duration-500 group-hover:scale-[1.03]"
                    }
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-xl bg-white/95 shadow-[0_8px_20px_rgba(40,24,90,0.12)]">
                    <Image
                      src={venture.logo}
                      alt={`${venture.name} logo`}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] font-bold tracking-[0.14em] text-[#7c4dff]">
                      {venture.category}
                    </p>
                    <span className="text-[11px] font-semibold text-muted">{venture.year}</span>
                  </div>
                  <h3 className="mt-1.5 text-[1.2rem] font-extrabold tracking-[-0.03em] text-ink">
                    {venture.name}
                  </h3>
                  <p className="mt-2.5 text-[0.92rem] leading-[1.65] text-muted">{venture.copy}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
