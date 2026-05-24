"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const research = [
  {
    date: "May 14, 2026",
    title: "On the discoverability of latent capabilities",
    blurb: "How small changes to fine-tuning surface abilities that pre-training already had.",
    tag: "Paper",
  },
  {
    date: "April 02, 2026",
    title: "Faithful chains of reasoning",
    blurb: "An honest model's chain of thought should reflect what the model actually computed.",
    tag: "Paper",
  },
  {
    date: "March 18, 2026",
    title: "Anthropic's responsible scaling policy, v2.4",
    blurb: "Updated commitments on deployment, evaluation, and the conditions under which we slow down.",
    tag: "Policy",
  },
  {
    date: "February 27, 2026",
    title: "Specifying what Claude is for",
    blurb: "A note on character, tone, and the long work of writing a model's values down.",
    tag: "Note",
  },
];

const principles = [
  {
    num: "01",
    title: "Safety as science.",
    body: "We treat the question of how to build safe AI as an empirical one. We hire researchers who would publish their results regardless of where they worked.",
  },
  {
    num: "02",
    title: "A small number of bets.",
    body: "We do a small number of things. One model family, one product, one research agenda. The pace of progress in AI rewards focus.",
  },
  {
    num: "03",
    title: "Honest about uncertainty.",
    body: "Our public communication about model capabilities should be calibrated to what we actually know. Overclaiming, in either direction, is its own failure mode.",
  },
];

export default function AnthropicStudy() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#181818] relative">
      {/* Nav */}
      <nav className="px-6 md:px-12 py-5 max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/lab"
          className="flex items-center gap-2 font-medium tracking-[-0.01em] text-base"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
              d="M7 4 L17 4 L21 20 L15 20 L13.5 14 L10.5 14 L9 20 L3 20 Z M11 9.5 L13 9.5 L12 6 Z"
              fill="#d97757"
            />
          </svg>
          <span>Anthropic</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-[#181818]/75">
          {["Claude", "API", "Research", "Company", "Careers", "News"].map(
            (l) => (
              <a key={l} className="hover:text-[#181818] transition-colors">
                {l}
              </a>
            ),
          )}
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a className="hidden sm:block text-[#181818]/75 hover:text-[#181818]">
            Try Claude
          </a>
          <button className="px-4 py-1.5 rounded-full bg-[#181818] text-[#faf9f5] hover:bg-[#181818]/85 transition">
            API access
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 md:pt-28 pb-32 max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-[#181818]/65 mb-7"
          >
            An AI safety company
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[7vw] md:text-[5.5vw] leading-[1] tracking-[-0.025em] font-medium"
          >
            Making AI systems
            <br />
            you can{" "}
            <span className="italic font-serif font-normal text-[#a14d2f]">
              rely on.
            </span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 text-base leading-relaxed text-[#181818]/85"
        >
          <p>
            Anthropic is an AI safety company. We build Claude — a family of
            large language models — and we do research on how to make them
            interpretable, steerable, and worth trusting at the scale they
            will be used.
          </p>
          <a className="inline-flex items-center gap-1 mt-6 text-sm font-medium hover:gap-2 transition-all">
            Read about our approach <span>→</span>
          </a>
        </motion.div>
      </section>

      {/* Big visual block (soft gradient orbs) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="relative aspect-[16/8] md:aspect-[16/6] rounded-3xl overflow-hidden bg-[#f3ede0] border border-[#181818]/8">
          <div className="absolute inset-0">
            <div className="absolute top-[20%] left-[15%] w-[55%] h-[120%] rounded-full bg-[#d97757] opacity-40 blur-[100px]" />
            <div className="absolute top-[40%] right-[10%] w-[40%] h-[140%] rounded-full bg-[#f4a261] opacity-50 blur-[100px]" />
            <div className="absolute -top-[20%] left-[40%] w-[35%] h-[80%] rounded-full bg-[#e76f51] opacity-30 blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
          </div>
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#181818]/75 mb-2">
                Claude 4.7 · Now available
              </p>
              <p className="font-serif italic text-3xl md:text-5xl leading-tight tracking-tight max-w-xl">
                The most capable model we've shipped, with the most careful
                evaluation work behind it.
              </p>
            </div>
            <a className="hidden md:inline-flex shrink-0 items-center gap-1 px-4 py-2 rounded-full bg-[#181818] text-[#faf9f5] text-sm hover:bg-[#181818]/85 transition">
              Read the system card <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex items-end justify-between mb-10 border-b border-[#181818]/15 pb-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#181818]/65">
            Products
          </p>
          <a className="text-sm hover:underline underline-offset-4">All →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Claude",
              tag: "For everyone",
              body: "A thoughtful, capable AI assistant. Available on the web, on macOS and Windows, and on phones.",
              cta: "Try Claude",
              tint: "bg-[#f3ede0]",
            },
            {
              title: "Claude API",
              tag: "For developers",
              body: "Build with the same model family that powers Claude. Tool use, prompt caching, batch, and the model context protocol.",
              cta: "Read the docs",
              tint: "bg-[#ede8db]",
            },
            {
              title: "Claude Code",
              tag: "For engineers",
              body: "A coding agent that lives in the terminal and your IDE. It reads, writes, and ships.",
              cta: "Install",
              tint: "bg-[#e8e2d3]",
            },
          ].map((p) => (
            <article
              key={p.title}
              className={`rounded-3xl ${p.tint} border border-[#181818]/8 p-7 flex flex-col min-h-[280px] hover:border-[#181818]/20 transition-colors cursor-pointer`}
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#181818]/65 mb-4">
                {p.tag}
              </p>
              <h3 className="font-serif italic text-4xl tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#181818]/85 max-w-xs">
                {p.body}
              </p>
              <p className="mt-auto pt-8 text-sm font-medium inline-flex items-center gap-1">
                {p.cta} <span>→</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Editorial split: principles */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#181818]/65 mb-5">
            How we work
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Three things that don't change.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-12">
          {principles.map((p) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-[60px_1fr] gap-6 border-t border-[#181818]/15 pt-7"
            >
              <span className="font-mono text-sm text-[#a14d2f]">{p.num}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.01em] mb-3">
                  {p.title}
                </h3>
                <p className="text-base leading-[1.75] text-[#181818]/85 max-w-xl">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex items-end justify-between mb-8 border-b border-[#181818]/15 pb-3">
          <h2 className="text-base font-medium">Recent research</h2>
          <a className="text-sm hover:underline underline-offset-4">
            All research →
          </a>
        </div>
        <ul className="divide-y divide-[#181818]/15 border-b border-[#181818]/15">
          {research.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid md:grid-cols-[140px_100px_1fr_30px] gap-6 py-6 hover:bg-[#f3ede0] -mx-4 px-4 transition cursor-pointer items-center"
            >
              <span className="text-xs uppercase tracking-widest text-[#181818]/60 font-mono">
                {r.date}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#a14d2f]">
                {r.tag}
              </span>
              <div>
                <p className="text-lg md:text-xl font-medium tracking-[-0.01em] mb-1 group-hover:italic">
                  {r.title}
                </p>
                <p className="text-sm text-[#181818]/75 leading-relaxed max-w-2xl">
                  {r.blurb}
                </p>
              </div>
              <span className="hidden md:block text-[#181818]/50 text-right">
                →
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Big quote / mission */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="border-y border-[#181818]/30 py-20 md:py-28 text-center max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a14d2f] mb-8">
            Our mission, in one sentence
          </p>
          <p className="font-serif italic text-3xl md:text-5xl leading-[1.2] tracking-tight">
            We want the long-term effects of advanced AI to be safe and
            beneficial.{" "}
            <span className="text-[#181818]/55">
              Saying it is the easy part.
            </span>
          </p>
        </div>
      </section>

      {/* Careers callout */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="rounded-3xl bg-[#181818] text-[#faf9f5] p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#faf9f5]/65 mb-5">
              Working at Anthropic
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
              We're hiring researchers,
              <br />
              engineers, and a few{" "}
              <span className="italic font-serif font-normal text-[#f4a261]">
                generalists.
              </span>
            </h2>
          </div>
          <div className="space-y-4 text-sm text-[#faf9f5]/85">
            <p className="leading-relaxed">
              About 612 people across San Francisco, London, Zürich, and remote.
              We hire slowly. Engineering offers expect a take-home and three
              technical interviews; research offers expect a published record
              you'd be proud to defend.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "Research Scientist",
                "Software Engineer, Inference",
                "Policy Lead",
                "Safety Engineer",
              ].map((r) => (
                <span
                  key={r}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#faf9f5]/10 border border-[#faf9f5]/20"
                >
                  {r}
                </span>
              ))}
            </div>
            <a className="inline-flex items-center gap-1 pt-5 font-medium hover:gap-2 transition-all">
              All 87 roles <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 max-w-7xl mx-auto pt-12 pb-10 border-t border-[#181818]/15 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-2 font-medium mb-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                d="M7 4 L17 4 L21 20 L15 20 L13.5 14 L10.5 14 L9 20 L3 20 Z M11 9.5 L13 9.5 L12 6 Z"
                fill="#d97757"
              />
            </svg>
            Anthropic
          </div>
          <p className="text-xs text-[#181818]/65 leading-relaxed max-w-xs">
            A studied recreation. The real Anthropic is at anthropic.com.
          </p>
          <p className="text-xs text-[#181818]/65 mt-4">
            San Francisco · London · Zürich
          </p>
        </div>
        {[
          ["Claude", ["Claude.ai", "Claude Code", "Pricing", "Enterprise"]],
          ["Research", ["Overview", "Papers", "Index", "Constitutional AI"]],
          ["Company", ["About", "Team", "Careers", "Press", "Customer stories"]],
          ["Resources", ["Help center", "Status", "Trust center", "DPA"]],
        ].map(([cat, items]) => (
          <div key={cat as string}>
            <p className="text-xs uppercase tracking-widest text-[#181818]/65 mb-3">
              {cat as string}
            </p>
            <ul className="space-y-2 text-[#181818]/80">
              {(items as string[]).map((it) => (
                <li
                  key={it}
                  className="hover:text-[#181818] cursor-pointer transition-colors"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      <div className="px-6 md:px-12 max-w-7xl mx-auto pb-10 pt-4 border-t border-[#181818]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#181818]/60">
        <p>© 2026 — Anthropic PBC</p>
        <Link
          href="/lab"
          className="hover:text-[#181818] transition-colors"
        >
          ← all demos
        </Link>
      </div>
    </main>
  );
}
