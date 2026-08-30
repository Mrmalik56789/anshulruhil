"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutPage } from "@/data/aboutPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export function CareerJourney() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="PROFESSIONAL JOURNEY"
          title="From IBM at 22 to Technology Head."
          copy="A career built on shipping at scale — enterprise software, market infrastructure, research platforms, and legal technology."
        />

        {/* Desktop horizontal */}
        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-0 right-0 top-[4.6rem] h-px bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent" />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-5 gap-4"
          >
            {aboutPage.career.map((step, index) => (
              <motion.li key={step.company} variants={item} className="relative pt-2">
                <div className="mx-auto mb-6 grid h-4 w-4 place-items-center rounded-full bg-[#7c4dff] shadow-[0_0_0_6px_rgba(124,77,255,0.16),0_0_20px_rgba(109,58,242,0.4)]" />
                <motion.article
                  whileHover={{ y: -8 }}
                  className="venture-card rounded-[1.6rem] p-[1px]"
                >
                  <div className="rounded-[1.55rem] bg-white/85 p-5 backdrop-blur-xl">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f6f2ff]">
                      <Image
                        src={step.logo}
                        alt=""
                        width={36}
                        height={36}
                        className="max-h-8 max-w-8 object-contain"
                      />
                    </span>
                    <p className="mt-4 text-[11px] font-bold tracking-[0.14em] text-[#7c4dff]">
                      {step.years}
                    </p>
                    <h3 className="mt-1.5 text-[1.05rem] font-extrabold tracking-[-0.03em] text-ink">
                      {step.company}
                    </h3>
                    <p className="mt-2 text-[13px] leading-snug text-muted">{step.role}</p>
                  </div>
                </motion.article>
                {index < aboutPage.career.length - 1 ? (
                  <span className="pointer-events-none absolute -right-2 top-[4.35rem] text-[#c4b5fd]">→</span>
                ) : null}
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* Mobile / tablet vertical */}
        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-2 left-[1.15rem] top-2 w-px bg-gradient-to-b from-[#7c4dff] via-[#c4b5fd] to-transparent" />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-5"
          >
            {aboutPage.career.map((step) => (
              <motion.li key={step.company} variants={item} className="relative pl-12">
                <span className="absolute left-0 top-5 h-6 w-6 rounded-full border-4 border-white bg-[#7c4dff] shadow-[0_0_0_6px_rgba(124,77,255,0.16)]" />
                <article className="glass-card rounded-[1.5rem] p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f6f2ff]">
                      <Image
                        src={step.logo}
                        alt=""
                        width={32}
                        height={32}
                        className="max-h-7 max-w-7 object-contain"
                      />
                    </span>
                    <p className="text-[11px] font-bold tracking-[0.14em] text-[#7c4dff]">
                      {step.years}
                    </p>
                  </div>
                  <h3 className="mt-3 text-[1.15rem] font-extrabold text-ink">{step.company}</h3>
                  <p className="mt-1 text-[0.95rem] text-muted">{step.role}</p>
                </article>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
