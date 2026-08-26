"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Companies() {
  return (
    <motion.div
      id="companies"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mt-10 lg:mt-8"
    >
      <div className="mb-5 flex items-center gap-3">
        <p className="text-[12px] font-bold tracking-[0.16em] text-[#7c4dff] lg:text-[13px]">
          COMPANIES & INITIATIVES
        </p>
        <span className="h-1.5 w-1.5 rounded-full bg-[#7c4dff]" />
        <span className="h-px max-w-[220px] flex-1 bg-gradient-to-r from-[#c4b5fd] to-transparent" />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-3 lg:flex-wrap lg:overflow-visible lg:pb-0 xl:gap-5">
        {site.companies.map((company) => (
          <a
            key={company.name}
            href={company.href}
            target="_blank"
            rel="noreferrer"
            className="company-card shrink-0"
          >
            <span className="relative flex h-12 w-14 items-center justify-center">
              <Image
                src={company.src}
                alt=""
                width={56}
                height={48}
                className="max-h-12 max-w-14 object-contain"
              />
            </span>
            <span className="whitespace-pre-line text-center text-[12px] font-semibold leading-[1.25] text-[#1f2430]">
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
