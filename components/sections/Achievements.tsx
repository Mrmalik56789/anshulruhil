"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, item, stagger } from "@/lib/motion";

export function Achievements() {
  return (
    <section id="achievements" className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="ACHIEVEMENTS"
          title="Milestones that compound."
          copy="From unicorn-scale enterprise building to culture that registers 0% attrition — a record written in teams, products, and places."
        />

        <motion.div
          {...fadeUp}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {site.achievementStats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-[1.5rem] px-6 py-7 text-center">
              <Counter
                value={stat.value}
                className="block text-[2.2rem] font-extrabold tracking-tight text-[#6d3af2]"
              />
              <p className="mt-2 text-[13px] font-medium text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-5 lg:grid-cols-2"
        >
          {site.achievements.map((itemData, index) => (
            <motion.li key={itemData.title} variants={item} className="glass-card relative overflow-hidden rounded-[1.75rem] p-7">
              <span className="text-[12px] font-bold tracking-[0.16em] text-[#7c4dff]">
                {String(index + 1).padStart(2, "0")} · {itemData.year}
              </span>
              <h3 className="mt-3 text-[1.35rem] font-extrabold tracking-[-0.03em] text-ink">
                {itemData.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.75] text-muted">{itemData.copy}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
