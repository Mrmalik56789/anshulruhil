"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export function Awards() {
  return (
    <section id="impact" className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="AWARDS & RECOGNITION"
          title="Honors that follow the work."
          copy="Not trophies for their own sake — markers that the platforms, culture, and community work are landing."
          align="center"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {site.awards.map((award) => (
            <motion.article
              key={award.title}
              variants={item}
              whileHover={{ y: -10, rotate: -0.4 }}
              className="award-plaque relative overflow-hidden rounded-[1.8rem] px-7 py-8"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#c4b5fd] to-[#7c4dff] text-white shadow-[0_12px_28px_rgba(109,58,242,0.3)]">
                <Award size={20} />
              </div>
              <p className="mt-5 text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">
                {award.year === "—" ? "CAREER" : award.year}
              </p>
              <h3 className="mt-2 text-[1.4rem] font-extrabold leading-snug tracking-[-0.03em] text-ink">
                {award.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{award.copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
