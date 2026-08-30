"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { awardsHighlight } from "@/data/gallery";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, item, stagger } from "@/lib/motion";

export function AwardsGallery() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
      <motion.div {...fadeUp} className="relative">
        <div className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.35),transparent_60%)] blur-2xl" />
        <div className="relative overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(40,24,90,0.16)]">
          <Image
            src={awardsHighlight.image}
            alt={awardsHighlight.imageAlt}
            width={1600}
            height={1200}
            className="h-auto w-full object-cover"
            sizes="(min-width:1024px) 48vw, 92vw"
            loading="lazy"
          />
        </div>
      </motion.div>

      <div>
        <motion.div {...fadeUp}>
          <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">AWARDS GALLERY</p>
          <div className="mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
          <h3 className="mt-5 text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink">
            {awardsHighlight.title}
          </h3>
          <p className="mt-5 text-[1.02rem] leading-[1.85] text-muted">{awardsHighlight.copy}</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 grid grid-cols-2 gap-3"
        >
          {awardsHighlight.stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={item}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[1.4rem] p-4 sm:p-5"
            >
              <Counter
                value={stat.value}
                className="block text-[1.55rem] font-extrabold tracking-tight text-[#6d3af2] sm:text-[1.75rem]"
              />
              <p className="mt-1.5 text-[12px] font-medium text-[#6b7280] sm:text-[13px]">{stat.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
