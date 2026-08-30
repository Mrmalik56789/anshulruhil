"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutPage } from "@/data/aboutPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export function AboutAwards() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="AWARDS & RECOGNITION"
          title="Honors that follow the work."
          copy="Markers of culture, product craft, and global contribution — not trophies for their own sake."
          align="center"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {aboutPage.awards.map((award) => (
            <motion.article
              key={award.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="award-plaque group relative overflow-hidden rounded-[1.8rem]"
            >
              <div className="relative flex h-[148px] items-center justify-center bg-[#f7f5fc] sm:h-[158px]">
                <Image
                  src={award.logo}
                  alt={award.title}
                  fill
                  sizes="(min-width:1280px) 28vw, (min-width:640px) 42vw, 90vw"
                  quality={95}
                  className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="px-6 pb-7 pt-5">
                <h3 className="text-[1.25rem] font-extrabold leading-snug tracking-[-0.03em] text-ink">
                  {award.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{award.copy}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
