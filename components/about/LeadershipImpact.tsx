"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutPage } from "@/data/aboutPage";
import { fadeUp, item, stagger } from "@/lib/motion";

export function LeadershipImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.35"],
  });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const height = useTransform(line, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell grid items-start gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
        <motion.div {...fadeUp} className="lg:sticky lg:top-32">
          <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">LEADERSHIP</p>
          <div className="mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink">
            {aboutPage.leadership.title}
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-[1.85] text-muted">
            {aboutPage.leadership.copy}
          </p>
        </motion.div>

        <div ref={ref} className="relative pl-2 sm:pl-4">
          <div className="absolute bottom-3 left-[1.35rem] top-3 w-px bg-[#eceaf6] sm:left-[1.55rem]" />
          <motion.div
            style={{ height }}
            className="absolute left-[1.35rem] top-3 w-px origin-top bg-gradient-to-b from-[#8b67ff] via-[#6d3af2] to-[#5b2fe0] sm:left-[1.55rem]"
          />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {aboutPage.leadership.timeline.map((step, index) => (
              <motion.li key={step.role} variants={item} className="relative pl-12 sm:pl-14">
                <span className="absolute left-0 top-6 grid h-7 w-7 place-items-center rounded-full border-4 border-white bg-[#7c4dff] shadow-[0_0_0_6px_rgba(124,77,255,0.16),0_0_24px_rgba(109,58,242,0.45)] sm:left-1">
                  <span className="text-[10px] font-bold text-white">{index + 1}</span>
                </span>
                <article className="glass-card rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(109,58,242,0.14)]">
                  <p className="text-[12px] font-bold tracking-[0.14em] text-[#7c4dff]">{step.role}</p>
                  <h3 className="mt-2 text-[1.2rem] font-extrabold tracking-[-0.03em] text-ink">
                    {step.org}
                  </h3>
                </article>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
