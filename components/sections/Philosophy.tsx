"use client";

import { motion } from "framer-motion";
import { Brain, Compass, Cpu, Lightbulb, Rocket, Users } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

const icons = [Compass, Lightbulb, Users, Brain, Rocket, Cpu];

export function Philosophy() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="LEADERSHIP PHILOSOPHY"
          title="A system of values, not a slogan."
          copy="The same principles that moved a village-raised engineer to Wall Street and LexisNexis now shape a family of AI-powered enterprises."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {site.philosophy.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={card.key}
                variants={item}
                whileHover={{ y: -8 }}
                className="glass-card group relative overflow-hidden rounded-[1.75rem] p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#8b67ff] to-[#5b2fe0] text-white shadow-[0_12px_24px_rgba(109,58,242,0.28)]">
                  <Icon size={20} />
                </div>
                <p className="mt-5 text-[12px] font-bold tracking-[0.16em] text-[#7c4dff]">{card.key}</p>
                <h3 className="mt-2 text-[1.35rem] font-extrabold tracking-[-0.03em] text-ink">{card.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-[1.75] text-muted">{card.copy}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
