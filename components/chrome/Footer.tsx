"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const social = [
  {
    href: site.linkedin,
    label: "LinkedIn",
    path: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24zM8.34 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V24h-4.52v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24H8.34z",
  },
  {
    href: site.instagram,
    label: "Instagram",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 3.12.14 4.59 1.64 4.73 4.73.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.14 3.09-1.6 4.59-4.73 4.73-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.12-.14-4.59-1.64-4.73-4.73C2.17 15.4 2.16 15.02 2.16 11.8s.01-3.58.07-4.85C2.37 3.87 3.83 2.37 6.96 2.23 8.23 2.17 8.6 2.16 11.8 2.16H12zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.3.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z",
  },
  {
    href: site.facebook,
    label: "Facebook",
    path: "M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.5v-9.29H9.69V11.1h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.77v2.32h3.59l-.47 3.61h-3.12V24h6.12A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0z",
  },
  {
    href: site.twitter,
    label: "X",
    path: "M18.9 1.15h3.67l-8.02 9.17L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.48l8.58-9.81L0 1.15h7.59l5.24 6.93zM17.61 20.7h2.03L6.48 3.2H4.3z",
  },
];

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#companies", label: "Companies" },
  { href: "/achievements", label: "Achievements" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative z-[2] mt-8 overflow-hidden">
      <div className="footer-shell">
        <div className="footer-particles" aria-hidden />
        <div className="shell relative py-14 lg:py-16">
          <div className="footer-divider mb-10" />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/images/logos/ruhil-holdings.png"
                  alt="Ruhil Holdings"
                  width={160}
                  height={104}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-[1.75] text-white/70">{site.tagline}</p>
            </div>
            <div>
              <p className="text-[12px] font-bold tracking-[0.16em] text-[#c4b5fd]">NAVIGATION</p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/80 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-bold tracking-[0.16em] text-[#c4b5fd]">SOCIAL</p>
              <div className="mt-4 flex gap-3">
                {social.map((item) => (
                  <a key={item.label} href={item.href} className="social" aria-label={item.label} target="_blank" rel="noreferrer">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
                      <path d={item.path} />
                    </svg>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-[13px] text-white/55">© {new Date().getFullYear()} Anshul Ruhil</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
