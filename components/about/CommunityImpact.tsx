"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  GraduationCap,
  Handshake,
  MessagesSquare,
  UsersRound,
} from "lucide-react";
import { aboutPage } from "@/data/aboutPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { item, stagger } from "@/lib/motion";

const icons = [Building2, Globe2, UsersRound, GraduationCap, Handshake, MessagesSquare];

export function CommunityImpact() {
  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="COMMUNITY & GLOBAL CONTRIBUTIONS"
          title="Making an Impact Beyond Business"
          copy="Boards, councils, campuses, and founder communities — where technology leadership becomes public good."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {aboutPage.community.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={card.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="venture-card rounded-[1.8rem] p-[1px]"
              >
                <div className="h-full rounded-[1.75rem] bg-white/85 p-7 backdrop-blur-xl">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#8b67ff] to-[#5b2fe0] text-white shadow-[0_12px_24px_rgba(109,58,242,0.28)]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-[1.2rem] font-extrabold tracking-[-0.03em] text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{card.copy}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
