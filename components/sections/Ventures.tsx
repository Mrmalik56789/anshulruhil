"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

export function Ventures() {
  return (
    <section id="companies" className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="COMPANIES & VENTURES"
          title="A constellation of AI-powered enterprises."
          copy="Each company is a distinct craft — hospitality, education, land, wellness, alumni, and software — held by one operating philosophy."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {site.ventures.map((company) => (
            <motion.a
              key={company.name}
              href={company.href}
              target={company.href.startsWith("http") ? "_blank" : undefined}
              rel={company.href.startsWith("http") ? "noreferrer" : undefined}
              variants={item}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.985 }}
              className="venture-card group block rounded-[1.8rem] p-[1px]"
            >
              <article className="h-full rounded-[1.75rem] bg-white/80 p-7 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#f6f2ff]">
                    <Image src={company.src} alt="" width={44} height={44} className="max-h-10 max-w-10 object-contain" />
                  </span>
                  <ArrowUpRight className="text-[#7c4dff] opacity-0 transition group-hover:opacity-100" size={18} />
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-[#7c4dff]">
                  <span>{company.industry}</span>
                  <span className="h-1 w-1 rounded-full bg-[#c4b5fd]" />
                  <span>{company.year}</span>
                </div>
                <h3 className="mt-2 text-[1.35rem] font-extrabold tracking-[-0.03em] text-ink">{company.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{company.copy}</p>
              </article>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
