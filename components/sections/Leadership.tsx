"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, TrendingUp, User, Users } from "lucide-react";
import { site } from "@/data/site";
import { Counter } from "@/components/ui/Counter";

const icons = {
  trending: TrendingUp,
  users: Users,
  globe: Globe,
  rocket: Rocket,
} as const;

export function Leadership() {
  return (
    <section id="leadership" className="relative z-[2] pb-12 pt-4 lg:-mt-4 lg:pb-16">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lead-card grid gap-10 rounded-[2.25rem] px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14 lg:rounded-[3rem] lg:px-14 lg:py-14"
        >
          <div className="flex gap-5 sm:gap-6">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#8b67ff] to-[#5b2fe0] text-white shadow-[0_14px_28px_rgba(109,58,242,0.34)]">
              <User size={28} strokeWidth={2.1} />
            </div>
            <div>
              <h2 className="text-[16px] font-extrabold tracking-[0.14em] text-[#7c4dff]">
                LEADERSHIP OVERVIEW
              </h2>
              <div className="mt-2.5 h-px max-w-[300px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
              <p className="mt-4 max-w-[40rem] text-[1.02rem] leading-[1.8] text-[#4b5160]">
                {site.leadership}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-0">
            {site.stats.map((stat, index) => {
              const Icon = icons[stat.icon];
              return (
                <div
                  key={stat.value}
                  className={`flex flex-col items-center px-2 text-center sm:px-4 ${
                    index > 0 ? "sm:border-l sm:border-[#eceaf6]" : ""
                  }`}
                >
                  <div className="stat-icon text-[#7c4dff]">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <Counter
                    value={stat.value}
                    className="mt-3.5 block text-[2.15rem] font-extrabold leading-none tracking-tight text-[#6d3af2] lg:text-[2.35rem]"
                  />
                  <p className="mt-2.5 whitespace-pre-line text-[13px] font-medium leading-[1.4] text-[#6b7280]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
