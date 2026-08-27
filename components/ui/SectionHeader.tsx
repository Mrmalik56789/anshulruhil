"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      {...fadeUp}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff] lg:text-[13px]">
        {eyebrow}
      </p>
      <div
        className={`mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-[1.05rem] leading-[1.8] text-muted">{copy}</p>
      ) : null}
    </motion.div>
  );
}
