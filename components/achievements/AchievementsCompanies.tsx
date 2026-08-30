"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export const AchievementsCompanies = memo(function AchievementsCompanies() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="COMPANIES & VENTURES"
          title="Every venture is a chapter of impact"
          copy="Companies from anshulruhil.com — unicorn holdings, hospitality, and AI platforms. Achievement-focused cards only — no external website links."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.06 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {achievementsPage.companies.map((company) => (
            <motion.article
              key={company.id}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="venture-card group rounded-[1.8rem] p-[1px] will-change-transform"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white/92">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={company.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-2xl bg-white/95 shadow-[0_10px_28px_rgba(40,24,90,0.12)]">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={40}
                      height={40}
                      className="h-9 w-9 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[11px] font-bold tracking-[0.16em] text-[#7c4dff]">
                    {company.industry}
                  </p>
                  <h3 className="mt-2 text-[1.35rem] font-extrabold tracking-[-0.03em] text-ink">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-[#6d3af2]">{company.role}</p>
                  <p className="mt-4 text-[0.95rem] leading-[1.7] text-muted">{company.copy}</p>
                  <p className="mt-5 border-t border-[#eceaf6] pt-4 text-[13px] font-semibold leading-relaxed text-ink">
                    {company.achievement}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
