"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { item, stagger } from "@/lib/motion";

export function Speaking() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2.5rem] min-h-[34rem]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/gallery/event-03.jpeg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f38]/78 via-[#3b1d86]/62 to-[#7c4dff]/45" />
          <div className="relative grid gap-8 px-7 py-12 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-14 lg:py-16">
            <div className="text-white">
              <p className="text-[12px] font-bold tracking-[0.18em] text-[#ddd4ff]">SPEAKING & THOUGHT LEADERSHIP</p>
              <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.3rem)] font-extrabold leading-[1.08] tracking-[-0.04em]">
                Embrace the entrepreneurial mindset.
              </h2>
              <p className="mt-5 max-w-md text-[1.05rem] leading-[1.8] text-white/80">
                A seasoned speaker and business luminary — bridging boardrooms, universities, and founder communities across continents.
              </p>
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {site.speaking.map((role) => (
                <motion.article
                  key={role.title}
                  variants={item}
                  className="rounded-2xl border border-white/25 bg-white/12 p-5 shadow-[0_16px_40px_rgba(16,10,40,0.2)] backdrop-blur-xl"
                >
                  <h3 className="text-[1.05rem] font-extrabold text-white">{role.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-[1.65] text-white/78">{role.copy}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
