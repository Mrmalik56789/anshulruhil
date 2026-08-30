"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ConnectButton } from "@/components/ui/ConnectButton";

const navItems = [
  { href: "/", label: "Home", hash: "home" },
  { href: "/about", label: "About", hash: "about" },
  { href: "/#leadership", label: "Leadership", hash: "leadership" },
  { href: "/#companies", label: "Companies", hash: "companies" },
  { href: "/#achievements", label: "Achievements", hash: "achievements" },
  { href: "/#gallery", label: "Gallery", hash: "gallery" },
  { href: "/#contact", label: "Contact", hash: "contact" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (pathname === "/about") {
        setActive("about");
        return;
      }
      if (pathname !== "/") return;
      const hashes = navItems.map((item) => item.hash);
      let current = "home";
      for (const id of hashes) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl shadow-[0_10px_36px_rgba(80,60,140,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[4.75rem] items-center justify-between gap-8 lg:h-[5.5rem]">
        <Link href="/" className="flex shrink-0 items-center gap-3">
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
        </Link>

        <nav className="hidden items-center gap-5 xl:flex xl:gap-8">
          {navItems.map((item) => {
            const isActive =
              pathname === "/about"
                ? item.hash === "about"
                : active === item.hash || (item.hash === "home" && active === "home" && pathname === "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-[14px] font-medium xl:text-[15px] ${
                  isActive ? "is-active text-[#7c4dff]" : "text-[#4b5160]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ConnectButton className="inline-flex" />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-sm xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-white/95 backdrop-blur-xl xl:hidden">
          <div className="shell flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-1 py-3.5 text-[16px] font-medium text-[#4b5160]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
