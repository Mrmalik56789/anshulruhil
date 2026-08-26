"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { ConnectButton } from "@/components/ui/ConnectButton";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const ids = site.nav.map((item) => item.href.slice(1));
      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl shadow-[0_10px_36px_rgba(80,60,140,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[4.75rem] items-center justify-between gap-8 lg:h-[5.5rem]">
        <a href="#home" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/logos/ruhil-mark.png"
            alt=""
            width={42}
            height={42}
            className="h-10 w-10 object-contain lg:h-11 lg:w-11"
            priority
          />
          <span className="text-[12px] font-extrabold tracking-[0.14em] text-ink sm:text-[13px] lg:text-[14px]">
            RUHIL HOLDINGS
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:gap-10 lg:flex">
          {site.nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-[14px] font-medium xl:text-[15px] ${
                  isActive ? "is-active text-[#7c4dff]" : "text-[#4b5160]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ConnectButton className="inline-flex" />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-sm lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="shell flex flex-col py-3">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-1 py-3.5 text-[16px] font-medium text-[#4b5160]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
