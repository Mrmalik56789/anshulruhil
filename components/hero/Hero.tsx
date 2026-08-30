"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Mail, Phone, Star } from "lucide-react";
import { site } from "@/data/site";
import { Companies } from "@/components/sections/Companies";

const ease = [0.22, 1, 0.36, 1] as const;

const particles: Array<{
  top: string;
  left?: string;
  right?: string;
  size: number;
  delay: number;
}> = [
  { top: "10%", left: "6%", size: 9, delay: 0 },
  { top: "18%", left: "22%", size: 6, delay: 0.4 },
  { top: "34%", left: "4%", size: 11, delay: 0.2 },
  { top: "12%", right: "16%", size: 8, delay: 0.8 },
  { top: "42%", right: "6%", size: 10, delay: 0.1 },
  { top: "58%", left: "14%", size: 5, delay: 0.6 },
  { top: "6%", right: "28%", size: 5, delay: 1.1 },
  { top: "68%", right: "18%", size: 7, delay: 0.3 },
  { top: "26%", right: "38%", size: 4, delay: 0.9 },
];

export function Hero() {
  return (
    <section className="relative z-[1] w-full overflow-visible pt-6 pb-[50px] lg:min-h-[calc(100svh-5.5rem)] lg:flex lg:flex-col lg:justify-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_78%_18%,rgba(124,77,255,0.12),transparent_62%)]" />
        <div className="absolute -left-24 bottom-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.14),transparent_70%)] blur-3xl" />
        <div className="absolute right-[8%] top-[28%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.08),transparent_72%)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-6 xl:gap-10">
          {/* LEFT 55% */}
          <div className="relative z-[2] min-w-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="mx-auto flex w-fit max-w-full items-center gap-2 rounded-full bg-[#efe8ff] px-3.5 py-2 text-[10px] font-semibold tracking-[0.06em] text-[#7c4dff] sm:text-[12px] sm:tracking-[0.08em] lg:mx-0"
            >
              <Star size={13} fill="#7c4dff" strokeWidth={0} className="shrink-0" />
              <span className="min-w-0 whitespace-normal leading-tight">{site.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="mx-auto mt-5 max-w-[700px] text-[clamp(2.75rem,5.6vw,5rem)] leading-[0.96] font-extrabold tracking-[-0.045em] text-ink lg:mx-0"
            >
              {site.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="mx-auto mt-5 max-w-[700px] text-[clamp(1.08rem,1.45vw,1.4rem)] font-semibold leading-snug tracking-[-0.02em] text-pretty text-[#2d3140] lg:mx-0"
            >
              Building <span className="text-[#7c4dff]">AI-Powered</span> Enterprises. Creating{" "}
              <span className="text-[#7c4dff]">Global Impact.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease }}
              className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a href={site.phoneHref} className="contact-pill">
                <Phone size={15} className="shrink-0 text-[#7c4dff]" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="contact-pill max-w-full">
                <Mail size={15} className="shrink-0 text-[#7c4dff]" />
                <span className="truncate">{site.email}</span>
              </a>
              <a
                href={site.websiteHref}
                target="_blank"
                rel="noreferrer"
                className="contact-pill"
              >
                <Globe size={15} className="text-[#7c4dff]" />
                {site.websiteLabel}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease }}
              className="mx-auto mt-8 max-w-[650px] text-[1.05rem] leading-[1.75] text-muted lg:mx-0"
            >
              {site.bio}
            </motion.p>
          </div>

          {/* RIGHT 45% — large portrait */}
          <Portrait />
        </div>

        {/* Logos: full content width, one row */}
        <div className="mt-9">
          <Companies />
        </div>
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto flex w-full max-w-[42rem] items-center justify-center overflow-visible lg:max-w-none">
      <div
        className="glow-orb left-1/2 top-[46%] h-[min(90vw,38rem)] w-[min(90vw,38rem)] -translate-x-1/2 -translate-y-1/2 lg:h-[min(50vw,42rem)] lg:w-[min(50vw,42rem)]"
        style={{ animation: "pulse-glow 7s ease-in-out infinite" }}
      />
      <div className="ring left-1/2 top-[46%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 lg:h-[52%] lg:w-[52%]" />
      <div className="ring left-1/2 top-[46%] h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="ring left-1/2 top-[46%] h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.size,
            height: p.size,
            opacity: 0.55,
            animation: `floaty ${4.6 + i * 0.35}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[4%] left-1/2 z-[1] h-16 w-[64%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(48,28,96,0.2)_0%,rgba(48,28,96,0.07)_42%,transparent_72%)] blur-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.12, ease }}
        className="relative z-[2] flex w-full items-end justify-center overflow-visible will-change-transform"
      >
        <Image
          src="/images/anshul-portrait.png"
          alt="Anshul Ruhil, founder of Ruhil Holdings"
          width={1912}
          height={2661}
          priority
          quality={100}
          unoptimized
          sizes="(min-width: 1024px) 45vw, 92vw"
          className="portrait-img h-auto w-auto max-w-full object-contain object-bottom [height:clamp(30rem,70vh,48.75rem)] lg:[height:clamp(43.75rem,72vh,50rem)]"
        />
      </motion.div>
    </div>
  );
}
