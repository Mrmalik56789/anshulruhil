"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Companies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mt-6 lg:mt-4"
    >
      <div className="mb-3 flex items-center gap-3">
        <p className="text-[12px] font-bold tracking-[0.16em] text-[#7c4dff] lg:text-[13px]">
          COMPANIES & INITIATIVES
        </p>
        <span className="h-1.5 w-1.5 rounded-full bg-[#7c4dff]" />
        <span className="h-px max-w-[220px] flex-1 bg-gradient-to-r from-[#c4b5fd] to-transparent" />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-wrap lg:gap-2.5 lg:overflow-visible lg:pb-0">
        {site.companies.map((company) => (
          <a
            key={company.name}
            href={company.href}
            target="_blank"
            rel="noreferrer"
            className="company-card shrink-0"
          >
            <span className="relative flex h-10 w-14 items-center justify-center">
              <Image
                src={company.src}
                alt=""
                width={56}
                height={40}
                className="max-h-10 max-w-14 object-contain"
              />
            </span>
            <span className="whitespace-pre-line text-center text-[11px] font-semibold leading-[1.2] text-[#1f2430]">
              {"sub" in company ? (
                <>
                  {company.name}
                  <br />
                  <span className="text-[10px] font-medium tracking-[0.08em] text-[#6b7280]">
                    {company.sub}
                  </span>
                </>
              ) : (
                company.name
              )}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
