"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export function Timeline() {
  return (
    <section id="journey" className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="JOURNEY TIMELINE"
          title="A vertical of rooms, roles, and resolve."
          copy="IBM at 22. Canada in 2003. Wall Street. LexisNexis. A family holding company. Each chapter made the next one possible."
        />
        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[1.15rem] top-2 w-px bg-gradient-to-b from-[#7c4dff] via-[#c4b5fd] to-transparent lg:left-1/2" />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {site.timeline.map((step, index) => (
              <motion.li
                key={step.title}
                variants={item}
                className={`relative grid gap-4 pl-12 lg:grid-cols-2 lg:gap-16 lg:pl-0 ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                <span className="absolute left-0 top-3 h-6 w-6 rounded-full border-4 border-white bg-[#7c4dff] shadow-[0_0_0_6px_rgba(124,77,255,0.16)] lg:left-1/2 lg:-translate-x-1/2" />
                <div className={index % 2 === 1 ? "lg:col-start-2" : "lg:col-start-1 lg:pr-14"}>
                  <article className="glass-card rounded-[1.6rem] p-6 lg:p-7">
                    <div className={`flex items-center gap-3 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                      {"logo" in step && step.logo ? (
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white">
                          <Image src={step.logo} alt="" width={36} height={36} className="max-h-8 max-w-8 object-contain" />
                        </span>
                      ) : null}
                      <p className="text-[12px] font-bold tracking-[0.16em] text-[#7c4dff]">{step.year}</p>
                    </div>
                    <h3 className="mt-3 text-[1.2rem] font-extrabold tracking-[-0.03em] text-ink">{step.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-[1.7] text-muted">{step.copy}</p>
                  </article>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
