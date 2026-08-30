"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { galleryCta } from "@/data/gallery";
import { fadeUp } from "@/lib/motion";

export function GalleryFooterCTA() {
  return (
    <motion.div
      {...fadeUp}
      className="relative overflow-hidden rounded-[2rem] px-7 py-12 text-center sm:px-12 lg:py-14"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#efe8ff] via-[#ddd4ff] to-[#c4b5fd]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.22),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl">
        <h3 className="text-[clamp(1.6rem,3.4vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-ink">
          {galleryCta.title}
        </h3>
        <Link href={galleryCta.href} className="connect-btn mt-8 inline-flex">
          {galleryCta.button}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
