"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { eventsCarousel } from "@/data/gallery";
import { fadeUp } from "@/lib/motion";

export function EventsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let frame = 0;
    const tick = () => {
      if (!paused) {
        el.scrollLeft += 0.45;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
          el.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <div>
      <motion.div {...fadeUp} className="max-w-2xl">
        <p className="text-[12px] font-bold tracking-[0.18em] text-[#7c4dff]">EVENTS GALLERY</p>
        <div className="mt-2.5 h-px max-w-[220px] bg-gradient-to-r from-[#7c4dff] to-transparent" />
        <h3 className="mt-5 text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold tracking-[-0.04em] text-ink">
          Rooms that move markets and minds.
        </h3>
      </motion.div>

      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        className="mt-8 flex gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Events carousel"
      >
        {[...eventsCarousel, ...eventsCarousel].map((event, i) => (
          <article
            key={`${event.title}-${i}`}
            className="venture-card w-[min(78vw,22rem)] shrink-0 rounded-[1.7rem] p-[1px]"
          >
            <div className="overflow-hidden rounded-[1.65rem] bg-white/90 backdrop-blur-xl">
              <div className="relative aspect-[16/11]">
                <Image
                  src={event.src}
                  alt={event.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="352px"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold tracking-[0.14em] text-[#7c4dff]">
                  {event.year} · {event.location}
                </p>
                <h4 className="mt-1.5 text-[1.1rem] font-extrabold tracking-[-0.02em] text-ink">
                  {event.title}
                </h4>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
