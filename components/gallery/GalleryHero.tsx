"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryHero } from "@/data/gallery";
import { ease } from "@/lib/motion";

export function GalleryHero() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
      <div className="absolute inset-0">
        <Image
          src={galleryHero.src}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#120a28]/68" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120a28]/80 via-transparent to-[#3b1d86]/25" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease }}
        className="relative flex min-h-[18rem] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[22rem] lg:min-h-[26rem]"
      >
        <p className="text-[12px] font-bold tracking-[0.22em] text-[#c4b5fd]">GLOBAL PRESENCE</p>
        <h2 className="mt-4 text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-white">
          {galleryHero.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[1.02rem] leading-[1.8] text-white/80 sm:text-[1.08rem]">
          {galleryHero.subtitle}
        </p>
      </motion.div>
    </div>
  );
}
