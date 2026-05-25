"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 md:pt-44 md:pb-36 px-6 lg:px-8 overflow-hidden">
      {/* Mesh gradient backdrop */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[900px] pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] rounded-full bg-[#6bd1ff] opacity-25 blur-[150px]" />
        <div className="absolute top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#3b82f6] opacity-25 blur-[150px]" />
        <div className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[#7c5fff] opacity-20 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#08090a]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Pill announcement */}
        <motion.a
          href="/lab"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur text-xs text-muted hover:bg-white/8 transition mb-10"
        >
          <span className="text-accent font-medium">New</span>
          29 UI experiments now live in the lab
          <span className="text-muted">→</span>
        </motion.a>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.035em] leading-[1.02] max-w-5xl"
        >
          Software for cities,
          <br />
          <span className="bg-gradient-to-r from-[#b6e6ff] via-[#6bd1ff] to-[#7da9ff] bg-clip-text text-transparent">
            transit, and developer tools.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
        >
          I&apos;m Charlie, a software engineer in Philadelphia. I build civic
          and urban tools — housing data, transit maps, council infrastructure
          — and contribute to the open-source projects they&apos;re built on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center gap-3 flex-wrap"
        >
          <a
            href="#work"
            className="px-5 py-2.5 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition"
          >
            See the work →
          </a>
          <a
            href="#open-source"
            className="px-5 py-2.5 rounded-lg bg-white/8 border border-white/12 backdrop-blur text-sm hover:bg-white/12 transition"
          >
            Open-source contributions
          </a>
          <a
            href="mailto:cst0520@gmail.com"
            className="px-5 py-2.5 rounded-lg text-sm text-muted hover:text-foreground transition"
          >
            cst0520@gmail.com
          </a>
        </motion.div>

        {/* Status row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex items-center gap-x-8 gap-y-3 text-sm text-muted flex-wrap"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            <span className="text-foreground/85">Open for work</span>
          </span>
          <span className="hidden md:inline text-white/15">·</span>
          <span>Philadelphia, PA</span>
          <span className="hidden md:inline text-white/15">·</span>
          <span>Go · TypeScript · Rust · Python</span>
        </motion.div>
      </div>
    </section>
  );
}
