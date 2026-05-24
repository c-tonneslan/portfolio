"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Demo = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  swatch: string;
  preview: React.ReactNode;
};

const demos: Demo[] = [
  {
    slug: "bento",
    title: "bento dashboard",
    tag: "asymmetric grid",
    blurb: "Editorial product dashboard built from a 12-column bento grid with sparkline cards, live tickers, and a hero metric.",
    swatch: "from-emerald-400/30 via-emerald-500/10 to-transparent",
    preview: (
      <div className="grid grid-cols-4 grid-rows-3 gap-2 h-full">
        <div className="col-span-2 row-span-2 rounded-lg bg-emerald-400/20 border border-emerald-300/20" />
        <div className="col-span-2 rounded-lg bg-white/5 border border-white/10" />
        <div className="rounded-lg bg-white/5 border border-white/10" />
        <div className="rounded-lg bg-white/5 border border-white/10" />
        <div className="col-span-2 rounded-lg bg-emerald-300/10 border border-white/10" />
        <div className="col-span-2 rounded-lg bg-white/5 border border-white/10" />
      </div>
    ),
  },
  {
    slug: "aurora",
    title: "aurora command",
    tag: "ai interface",
    blurb: "An AI workspace with a floating command palette, streaming answer with citations, and slash-command suggestions.",
    swatch: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
    preview: (
      <div className="flex flex-col gap-2 h-full">
        <div className="h-7 rounded-md bg-white/5 border border-white/10" />
        <div className="flex-1 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 border border-violet-300/20" />
        <div className="h-10 rounded-full bg-white/10 border border-white/15" />
      </div>
    ),
  },
  {
    slug: "spatial",
    title: "spatial cards",
    tag: "glass + depth",
    blurb: "Layered frosted-glass surfaces that respond to cursor parallax, in the lineage of Vision OS and macOS Tahoe.",
    swatch: "from-sky-400/30 via-blue-500/10 to-transparent",
    preview: (
      <div className="relative h-full">
        <div className="absolute inset-x-6 top-3 bottom-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 rotate-[-4deg]" />
        <div className="absolute inset-x-3 top-5 bottom-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 rotate-[3deg]" />
        <div className="absolute inset-x-4 top-7 bottom-7 rounded-xl bg-gradient-to-br from-sky-400/30 to-indigo-500/20 border border-white/20" />
      </div>
    ),
  },
  {
    slug: "brutalist",
    title: "brutalist press",
    tag: "anti-design",
    blurb: "Mono type, raw borders, no rounded corners. An editorial layout that leans into the brutalist revival.",
    swatch: "from-yellow-300/20 via-yellow-500/5 to-transparent",
    preview: (
      <div className="h-full bg-[#fef9e7] text-black p-2 border border-black flex flex-col gap-1">
        <div className="h-2 bg-black w-1/2" />
        <div className="h-1 bg-black w-3/4" />
        <div className="h-1 bg-black w-2/3" />
        <div className="mt-1 flex-1 border border-black" />
      </div>
    ),
  },
  {
    slug: "clay",
    title: "clay finance",
    tag: "soft 3d",
    blurb: "Claymorphism is back — soft inset shadows, candy palette, tactile buttons. A finance dashboard that feels touchable.",
    swatch: "from-rose-400/30 via-orange-400/10 to-transparent",
    preview: (
      <div className="h-full rounded-xl bg-rose-100 p-2 flex flex-col gap-2">
        <div className="h-5 rounded-lg bg-white shadow-inner" />
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="rounded-lg bg-white shadow-inner" />
          <div className="rounded-lg bg-rose-300/70 shadow-inner" />
        </div>
        <div className="h-6 rounded-full bg-orange-400/80" />
      </div>
    ),
  },
  {
    slug: "cinema",
    title: "cinema landing",
    tag: "kinetic + mesh",
    blurb: "Oversized kinetic typography over an animated mesh gradient. The big-type editorial trend hitting SaaS landing pages.",
    swatch: "from-cyan-400/30 via-indigo-500/10 to-transparent",
    preview: (
      <div className="relative h-full overflow-hidden rounded-md">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-bl from-amber-400 via-transparent to-transparent opacity-40 mix-blend-overlay" />
        <div className="relative h-full flex items-center justify-center">
          <span className="text-2xl font-bold tracking-tighter text-white">Aa</span>
        </div>
      </div>
    ),
  },
  {
    slug: "handheld",
    title: "handheld",
    tag: "mobile patterns",
    blurb: "Three phones in a fan: a feed, a chat, a profile. Real-world mobile patterns assembled in pure CSS — no screenshots.",
    swatch: "from-violet-500/30 via-indigo-500/10 to-transparent",
    preview: (
      <div className="relative h-full flex items-center justify-center gap-1">
        <div className="w-7 h-20 rounded-md bg-amber-100 border border-white/20 -rotate-6" />
        <div className="w-7 h-24 rounded-md bg-zinc-900 border border-white/20" />
        <div className="w-7 h-20 rounded-md bg-emerald-100 border border-white/20 rotate-6" />
      </div>
    ),
  },
  {
    slug: "pricing",
    title: "pricing",
    tag: "saas landing",
    blurb: "Three-tier pricing with a monthly/annual toggle, comparison logos, and an FAQ accordion. The Lapa-Ninja pattern, done well.",
    swatch: "from-zinc-100/20 via-zinc-300/5 to-transparent",
    preview: (
      <div className="grid grid-cols-3 gap-2 h-full">
        <div className="rounded-md bg-white/5 border border-white/10" />
        <div className="rounded-md bg-white border border-white/20" />
        <div className="rounded-md bg-white/5 border border-white/10" />
      </div>
    ),
  },
  {
    slug: "minimal",
    title: "minimal essay",
    tag: "editorial whitespace",
    blurb: "A single-column long read set in serif italics with a drop cap. Quiet design, the Seesaw / Cosmos lineage.",
    swatch: "from-stone-300/15 via-stone-500/5 to-transparent",
    preview: (
      <div className="bg-[#f7f5f1] h-full p-2 flex flex-col gap-1.5">
        <div className="h-3 bg-zinc-900 w-2/3" />
        <div className="h-1 bg-zinc-400 w-1/3" />
        <div className="flex-1 mt-1">
          <div className="h-1 bg-zinc-300 w-full mb-1" />
          <div className="h-1 bg-zinc-300 w-5/6 mb-1" />
          <div className="h-1 bg-zinc-300 w-4/6 mb-1" />
          <div className="h-1 bg-zinc-300 w-full mb-1" />
          <div className="h-1 bg-zinc-300 w-3/5" />
        </div>
      </div>
    ),
  },
  {
    slug: "kit",
    title: "components kit",
    tag: "primitives",
    blurb: "Buttons, inputs, switches, badges, alerts, avatars — every primitive a real product page needs, on one designed page.",
    swatch: "from-emerald-400/20 via-teal-500/5 to-transparent",
    preview: (
      <div className="h-full grid grid-cols-3 gap-1.5">
        <div className="rounded bg-white" />
        <div className="rounded bg-white/10 border border-white/15" />
        <div className="rounded bg-gradient-to-br from-violet-500 to-fuchsia-500" />
        <div className="rounded bg-emerald-400/30 border border-emerald-300/30" />
        <div className="rounded bg-rose-400/30 border border-rose-300/30" />
        <div className="rounded bg-amber-400/30 border border-amber-300/30" />
      </div>
    ),
  },
];

export default function LabIndex() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm text-muted mb-3 font-mono">/lab</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">
            ui experiments, 2026 edition
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            Six self-contained pages exploring the design directions worth
            stealing this year. Each is built fresh — no template, no shared
            shell. Click in.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            >
              <Link
                href={`/lab/${demo.slug}`}
                className="group block rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden hover:border-[#2a2a2a] transition-colors"
              >
                <div
                  className={`relative h-44 p-5 bg-gradient-to-br ${demo.swatch}`}
                >
                  <div className="absolute inset-5">{demo.preview}</div>
                </div>
                <div className="p-6 border-t border-[#1e1e1e]">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold">{demo.title}</h2>
                    <span className="text-[11px] uppercase tracking-wider text-muted font-mono">
                      {demo.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {demo.blurb}
                  </p>
                  <div className="mt-4 text-sm text-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    open demo
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-[#1e1e1e]">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            ← back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
