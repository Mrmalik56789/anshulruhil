"use client";

import { memo, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { achievementsPage } from "@/data/achievementsPage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ease, item, stagger } from "@/lib/motion";

export const AchievementsMedia = memo(function AchievementsMedia() {
  const [active, setActive] = useState<number | null>(null);
  const featured =
    achievementsPage.media.find((m) => "featured" in m && m.featured) ??
    achievementsPage.media[0];
  const rest = achievementsPage.media.filter((m) => m !== featured);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  return (
    <section className="relative z-[2] py-16 lg:py-24">
      <div className="shell">
        <SectionHeader
          eyebrow="MEDIA & HIGHLIGHTS"
          title="Moments from the journey"
          copy="A curated gallery of recognition, leadership, and community — open any image for a closer look."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <motion.button
            type="button"
            {...{ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.75, ease } }}
            onClick={() => setActive(achievementsPage.media.indexOf(featured))}
            className="group relative aspect-[16/11] overflow-hidden rounded-[1.9rem] text-left shadow-[0_22px_48px_rgba(40,24,90,0.12)]"
          >
            <Image
              src={featured.src}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 55vw, 92vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              priority={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120a28]/75 via-[#120a28]/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[12px] font-bold tracking-[0.16em] text-[#c4b5fd]">FEATURED</p>
              <h3 className="mt-2 text-[1.4rem] font-extrabold tracking-[-0.03em] text-white sm:text-[1.6rem]">
                {featured.title}
              </h3>
              <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-white/75">{featured.copy}</p>
            </div>
          </motion.button>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="grid grid-cols-2 gap-4"
          >
            {rest.slice(0, 6).map((itemMedia) => {
              const index = achievementsPage.media.indexOf(itemMedia);
              return (
                <motion.button
                  key={itemMedia.src}
                  type="button"
                  variants={item}
                  onClick={() => setActive(index)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[1.4rem] text-left shadow-[0_16px_36px_rgba(40,24,90,0.1)]"
                >
                  <Image
                    src={itemMedia.src}
                    alt={itemMedia.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, 45vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a28]/65 to-transparent opacity-90" />
                  <p className="absolute inset-x-0 bottom-0 p-3 text-[13px] font-semibold text-white sm:p-4 sm:text-[14px]">
                    {itemMedia.title}
                  </p>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#120a28]/72 p-4 backdrop-blur-md"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_80px_rgba(20,10,50,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-md"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-[16/10] w-full bg-[#f3edff]">
                <Image
                  src={achievementsPage.media[active].src}
                  alt={achievementsPage.media[active].title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="px-6 py-5 sm:px-8">
                <h3 className="text-[1.25rem] font-extrabold text-ink">
                  {achievementsPage.media[active].title}
                </h3>
                <p className="mt-2 text-[0.98rem] text-muted">{achievementsPage.media[active].copy}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
});
