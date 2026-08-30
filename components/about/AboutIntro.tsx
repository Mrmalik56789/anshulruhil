"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Globe, Rocket, TrendingUp, Users } from "lucide-react";
import { aboutPage } from "@/data/aboutPage";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, item, stagger } from "@/lib/motion";
import { GradientHighlight } from "@/components/about/utils";

const icons = {
  rocket: Rocket,
  trending: TrendingUp,
  users: Users,
  globe: Globe,
} as const;

export function AboutIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(sy, [-40, 40], [6, -6]);
  const rotateY = useTransform(sx, [-40, 40], [-6, 6]);
  const floatY = useTransform(sy, [-40, 40], [8, -8]);
  const shadow = useMotionTemplate`drop-shadow(${useTransform(sx, [-40, 40], [12, -12])}px 28px 40px rgba(76,40,160,0.22))`;

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 80);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 80);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative z-[2] overflow-visible pb-16 pt-10 lg:pb-24 lg:pt-14">
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-16 xl:gap-20">
        <motion.div
          {...fadeUp}
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative mx-auto w-full max-w-[28rem] perspective-[1200px] lg:max-w-none"
          style={{ perspective: 1200 }}
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_35%_20%,rgba(139,92,246,0.42),transparent_62%)] blur-2xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ rotateX, rotateY, y: floatY, filter: shadow, transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.02 }}
            className="about-frame relative rounded-[32px] p-[1px]"
          >
            <div className="overflow-hidden rounded-[31px] bg-white/75 shadow-[0_30px_80px_rgba(40,24,90,0.14)] backdrop-blur-xl">
              <Image
                src={aboutPage.photo}
                alt={aboutPage.photoAlt}
                width={894}
                height={792}
                priority
                className="h-auto w-full object-cover object-top"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a1658]/20 via-transparent to-white/10" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/80 bg-white/75 px-5 py-4 shadow-[0_18px_40px_rgba(80,60,140,0.12)] backdrop-blur-xl sm:left-8 sm:right-auto sm:max-w-[15.5rem]"
          >
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#7c4dff]">CO-FOUNDER</p>
            <p className="mt-1 text-[15px] font-semibold text-ink">Ruhil Holdings · USD 550M+</p>
          </motion.div>
        </motion.div>

        <div className="lg:pt-2">
          <motion.div {...fadeUp}>
            <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">ABOUT</p>
            <div className="mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
            <h1 className="mt-5 text-[clamp(2.4rem,5vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink">
              Anshul Ruhil
            </h1>
            <div className="mt-7 space-y-4 text-[1.02rem] leading-[1.85] text-muted lg:text-[1.05rem]">
              {aboutPage.paragraphs.map((para) => (
                <p key={para}>
                  <GradientHighlight text={para} words={aboutPage.highlights} />
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {aboutPage.stats.map((stat) => {
              const Icon = icons[stat.icon];
              return (
                <motion.article
                  key={stat.label}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="glass-card group rounded-[1.5rem] p-5 transition shadow-[0_18px_44px_rgba(76,40,160,0.08)] hover:shadow-[0_22px_50px_rgba(109,58,242,0.18)] sm:p-6"
                >
                  <div className="stat-icon text-[#7c4dff]">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <Counter
                    value={stat.value}
                    className="mt-3.5 block text-[1.85rem] font-extrabold leading-none tracking-tight text-[#6d3af2] sm:text-[2.05rem]"
                  />
                  <p className="mt-2 text-[12px] font-medium leading-snug text-[#6b7280] sm:text-[13px]">
                    {stat.label}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
