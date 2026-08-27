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
    <section className="relative z-[1] overflow-visible pt-4 pb-6 lg:pt-6 lg:pb-4">
      <div className="shell grid items-start gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-8 xl:gap-12 lg:min-h-[min(46rem,calc(100svh-16rem))]">
        <div className="relative z-[2] pt-4 lg:pt-8 lg:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="flex w-fit max-w-full items-center gap-2 rounded-full bg-[#efe8ff] px-3.5 py-2 text-[10px] font-semibold tracking-[0.06em] text-[#7c4dff] sm:text-[12px] sm:tracking-[0.08em]"
          >
            <Star size={13} fill="#7c4dff" strokeWidth={0} className="shrink-0" />
            <span className="min-w-0 whitespace-normal leading-tight">{site.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 text-[clamp(2.75rem,6vw,5.25rem)] leading-[0.96] font-extrabold tracking-[-0.045em] text-ink"
          >
            {site.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease }}
            className="mt-6 max-w-[38rem] text-[clamp(1.05rem,1.5vw,1.4rem)] font-semibold leading-snug tracking-[-0.02em] text-pretty text-[#2d3140]"
          >
            Building <span className="text-[#7c4dff]">AI-Powered</span> Enterprises. Creating{" "}
            <span className="text-[#7c4dff]">Global Impact.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap gap-3"
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-8 max-w-[36rem] text-[1.05rem] leading-[1.8] text-muted"
          >
            {site.bio}
          </motion.p>
        </div>

        <Portrait />
      </div>

      <div className="shell relative z-10 lg:-mt-6">
        <Companies />
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto flex w-full max-w-[39.5rem] items-start justify-center overflow-visible sm:min-h-[34rem] lg:h-full lg:min-h-[36rem] lg:max-w-none">
      <div
        className="glow-orb left-1/2 top-[30%] h-[min(86vw,38rem)] w-[min(86vw,38rem)] -translate-x-1/2 -translate-y-1/2 lg:h-[min(50vw,44rem)] lg:w-[min(50vw,44rem)]"
        style={{ animation: "pulse-glow 7s ease-in-out infinite" }}
      />
      <div className="ring left-1/2 top-[30%] h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 lg:h-[56%] lg:w-[56%]" />
      <div className="ring left-1/2 top-[30%] h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="ring left-1/2 top-[30%] h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 opacity-40" />

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
        className="pointer-events-none absolute bottom-[7%] left-1/2 z-[1] h-16 w-[58%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(48,28,96,0.22)_0%,rgba(48,28,96,0.08)_42%,transparent_72%)] blur-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.18, ease }}
        className="relative z-[2] w-full overflow-visible px-[2%] pt-3 sm:px-[3%] sm:pt-5 lg:px-[4%] lg:pt-6"
      >
        <Image
          src="/images/anshul-portrait.png"
          alt="Anshul Ruhil, founder of Ruhil Holdings"
          width={1912}
          height={2661}
          priority
          quality={100}
          unoptimized
          sizes="(min-width: 1024px) 42vw, 90vw"
          className="portrait-img h-auto w-full origin-top object-contain object-top"
        />
      </motion.div>
    </div>
  );
}
