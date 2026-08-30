"use client";

import { motion } from "framer-motion";
import { Award, Compass, Cpu, Rocket, Sparkles, Users } from "lucide-react";
import { leadershipStrip } from "@/data/gallery";
import { item, stagger } from "@/lib/motion";

const icons = {
  compass: Compass,
  sparkles: Sparkles,
  award: Award,
  cpu: Cpu,
  rocket: Rocket,
  users: Users,
} as const;

export function LeadershipTimelineStrip() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#efe8ff] via-[#ddd4ff] to-[#efe8ff] px-4 py-6 sm:px-8">
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6"
      >
        {leadershipStrip.map((entry) => {
          const Icon = icons[entry.icon];
          return (
            <motion.li key={entry.key} variants={item} className="min-w-[9.5rem] sm:min-w-0">
              <article className="flex h-full items-center gap-3 rounded-[1.25rem] border border-white/70 bg-white/55 px-4 py-3.5 shadow-[0_12px_28px_rgba(88,70,160,0.08)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(109,58,242,0.14)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#8b67ff] to-[#5b2fe0] text-white">
                  <Icon size={16} />
                </span>
                <span className="text-[13px] font-extrabold tracking-[-0.02em] text-ink">{entry.key}</span>
              </article>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
