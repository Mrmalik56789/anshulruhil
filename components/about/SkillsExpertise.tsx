"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Cloud,
  Compass,
  Cpu,
  Layers,
  Lightbulb,
  Network,
  Package,
  Rocket,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { aboutPage } from "@/data/aboutPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

const icons = [
  Compass,
  Workflow,
  Layers,
  Brain,
  Sparkles,
  Lightbulb,
  Cloud,
  Users,
  Rocket,
  Package,
  Cpu,
  Network,
];

function SkillRing({ value, id }: { value: number; id: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [progress, setProgress] = useState(0);
  const r = 34;
  const c = 2 * Math.PI * r;
  const gradId = `skillGrad-${id}`;

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(value);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1200);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div className="relative grid h-[88px] w-[88px] place-items-center">
      <svg ref={ref} width="88" height="88" viewBox="0 0 88 88" className="-rotate-90">
        <circle cx="44" cy="44" r={r} fill="none" stroke="#efe8ff" strokeWidth="7" />
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (progress / 100) * c}
        />
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b67ff" />
            <stop offset="55%" stopColor="#6d3af2" />
            <stop offset="100%" stopColor="#5b2fe0" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-[15px] font-extrabold text-[#6d3af2]">{progress}%</span>
    </div>
  );
}

export function SkillsExpertise() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="SKILLS & EXPERTISE"
          title="Craft measured in outcomes."
          copy="Leadership, architecture, and AI platforms — practiced across enterprises, startups, and public-interest systems."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {aboutPage.skills.map((skill, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={skill.name}
                variants={item}
                whileHover={{ y: -6 }}
                className="glass-card flex items-center gap-5 rounded-[1.6rem] p-5 transition hover:shadow-[0_22px_48px_rgba(109,58,242,0.14)] sm:p-6"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#8b67ff] to-[#5b2fe0] text-white shadow-[0_12px_24px_rgba(109,58,242,0.28)]">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.05rem] font-extrabold tracking-[-0.02em] text-ink">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-[12px] font-medium text-muted">Executive proficiency</p>
                </div>
                <SkillRing value={skill.value} id={String(i)} />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
