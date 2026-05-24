"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 overflow-hidden">
      {/* Vertical edition strip, left */}
      <div
        aria-hidden
        className="fixed left-3 top-0 bottom-0 hidden md:flex flex-col items-center justify-between text-[10px] uppercase tracking-[0.35em] py-6 opacity-50 z-10"
      >
        <span style={{ writingMode: "vertical-rl" }}>
          Portfolio · Philadelphia · MMXXVI
        </span>
        <span style={{ writingMode: "vertical-rl" }}>
          Volume IV
        </span>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] mb-12 md:mb-20 border-b border-[#1a1612]/30 pb-3"
        >
          <span className="flex items-center gap-2">
            <span className="text-[#a83232]">✦</span>
            Volume IV · No. 41
          </span>
          <span className="hidden md:inline">
            Filed Saturday, 24 May MMXXVI
          </span>
          <span className="flex items-center gap-2 text-[#a83232]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a83232] animate-pulse-soft" />
            Open for work
          </span>
        </motion.div>

        {/* Masthead */}
        <div className="grid grid-cols-12 gap-6 items-end mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-[15vw] md:text-[10vw] leading-[0.85] tracking-[-0.035em] font-medium"
            >
              Charlie
              <br />
              <span className="font-serif italic font-normal text-[#a83232]">
                Tonneslan.
              </span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 md:col-span-3 space-y-1 text-[11px] uppercase tracking-[0.25em] mt-6 md:mt-0"
          >
            <p>Software engineer</p>
            <p>Philadelphia, PA</p>
            <p className="mt-3 text-[#a83232]">
              ↗ <a href="https://github.com/c-tonneslan" className="hover:underline underline-offset-4">github</a>
            </p>
            <p className="text-[#a83232]">
              ↗ <a href="mailto:cst0520@gmail.com" className="hover:underline underline-offset-4">email</a>
            </p>
          </motion.div>
        </div>

        {/* Subhead — a one-paragraph statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-12 gap-6 mb-8"
        >
          <p className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.3em] opacity-70">
            ⸺ At a glance
          </p>
          <p className="col-span-12 md:col-span-9 font-serif italic text-2xl md:text-4xl leading-[1.35] tracking-[-0.005em]">
            I make software for cities — housing data, transit maps, civic
            tooling — and ship small fixes into the open-source projects that
            hold all of it up.{" "}
            <span className="text-[#a83232] not-italic font-sans font-medium">
              Mostly Go and TypeScript.
            </span>
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-12 gap-6 pt-10 border-t border-[#1a1612]/15 text-[11px] uppercase tracking-[0.25em]"
        >
          <a
            href="#work"
            className="col-span-6 md:col-span-3 hover:text-[#a83232] transition-colors"
          >
            ↓ ii. The work
          </a>
          <a
            href="#contributions"
            className="col-span-6 md:col-span-3 hover:text-[#a83232] transition-colors"
          >
            ↓ iii. Contributions
          </a>
          <a
            href="/lab"
            className="col-span-6 md:col-span-3 hover:text-[#a83232] transition-colors"
          >
            ↗ vi. The lab
          </a>
          <a
            href="#reach"
            className="col-span-6 md:col-span-3 hover:text-[#a83232] transition-colors"
          >
            ↓ vii. Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
