"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type Work = {
  num: string;
  year: string;
  title: string;
  client: string;
  disciplines: string[];
  city: string;
  note?: string;
};

const works: Work[] = [
  { num: "047", year: "2026", title: "Catalogue Raisonné", client: "Ásgrímur Jónsson Museum", disciplines: ["Identity", "Editorial"], city: "Reykjavík", note: "Set in a single revived face." },
  { num: "046", year: "2026", title: "A Field of Salt", client: "Saltverk", disciplines: ["Packaging"], city: "Reykjanes", note: "A 14-SKU range, printed letterpress." },
  { num: "045", year: "2026", title: "Programme", client: "Tjarnarbíó", disciplines: ["Identity", "Wayfinding"], city: "Reykjavík" },
  { num: "044", year: "2025", title: "Brutus, a journal", client: "Brutus", disciplines: ["Editorial", "Web"], city: "Tokyo" },
  { num: "043", year: "2025", title: "Lögberg, season one", client: "RÚV", disciplines: ["Title Sequence"], city: "Reykjavík" },
  { num: "042", year: "2025", title: "Furniture, room one", client: "Vogue Studio", disciplines: ["Art Direction"], city: "Copenhagen", note: "Photographed by Joakim Eskildsen." },
  { num: "041", year: "2025", title: "Marketplace", client: "Kolaportið", disciplines: ["Identity"], city: "Reykjavík" },
  { num: "040", year: "2024", title: "Concrete, no.4", client: "Concrete Press", disciplines: ["Editorial"], city: "Berlin" },
  { num: "039", year: "2024", title: "A new sans", client: "Self-initiated", disciplines: ["Type Design"], city: "—", note: "Released as a single weight, free for use." },
  { num: "038", year: "2024", title: "Sundlaug, identity", client: "Reykjavík City", disciplines: ["Identity", "Wayfinding"], city: "Reykjavík" },
  { num: "037", year: "2024", title: "Letters from a Lighthouse", client: "Forlagið", disciplines: ["Book"], city: "Reykjavík" },
  { num: "036", year: "2023", title: "Aalto Glass, monograph", client: "Iittala", disciplines: ["Editorial"], city: "Helsinki", note: "Three volumes, 924 pages." },
  { num: "035", year: "2023", title: "Cinemateket", client: "Norsk Filminstitutt", disciplines: ["Identity", "Web"], city: "Oslo" },
  { num: "034", year: "2023", title: "On Quiet Towns", client: "Mörk", disciplines: ["Exhibition"], city: "Akureyri" },
  { num: "033", year: "2023", title: "Spring kit", client: "Snæbjörnsdóttir Studio", disciplines: ["Identity"], city: "Reykjavík" },
];

export default function ArchiveDemo() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f3eee4] text-[#0c0c0c]">
      {/* Subtle paper grain */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative">
        {/* Top meta strip */}
        <div className="border-b border-[#0c0c0c]/20 px-6 md:px-12 py-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em]">
          <span>Studio Færøes · est. 2011</span>
          <span className="hidden sm:inline">Index of work, 2023 — 2026</span>
          <Link href="/lab" className="underline-offset-4 hover:underline">
            /lab
          </Link>
        </div>

        {/* Masthead */}
        <header className="px-6 md:px-12 pt-20 md:pt-32 pb-16 md:pb-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[13vw] md:text-[10vw] leading-[0.82] tracking-[-0.04em] font-medium"
            >
              Færøes
              <br />
              <span className="font-serif italic font-normal text-[#7a4a32]">
                & Co.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 max-w-md text-base md:text-lg leading-[1.55]"
            >
              A small studio in Reykjavík. We design identities, books, and
              exhibitions for institutions that take the long view. Work shown
              below, in reverse order. Earlier projects on request.
            </motion.p>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right text-[11px] uppercase tracking-[0.18em] space-y-1 self-end mt-6 md:mt-0">
            <p>Forty-seven works</p>
            <p>Five disciplines</p>
            <p>Eleven cities</p>
          </div>
        </header>

        {/* Filter row */}
        <div className="px-6 md:px-12 mb-2 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.16em] border-b border-[#0c0c0c]/20 pb-3">
          <span className="font-medium">Filter ·</span>
          {["All", "Identity", "Editorial", "Web", "Type", "Exhibition"].map(
            (f, i) => (
              <button
                key={f}
                className={`hover:text-[#7a4a32] transition-colors ${
                  i === 0 ? "underline underline-offset-[6px]" : ""
                }`}
              >
                {f}
              </button>
            ),
          )}
          <span className="ml-auto text-[#0c0c0c]/60 normal-case tracking-normal text-xs">
            ↓ scroll
          </span>
        </div>

        {/* Index table */}
        <section className="px-6 md:px-12 pb-32">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[60px_70px_1fr_1fr_180px_60px] gap-6 text-[10px] uppercase tracking-[0.2em] text-[#0c0c0c]/60 py-3 border-b border-[#0c0c0c]/20">
            <span>№</span>
            <span>Year</span>
            <span>Work</span>
            <span>For</span>
            <span>Discipline</span>
            <span className="text-right">City</span>
          </div>

          {works.map((w, i) => (
            <motion.div
              key={w.num}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              onMouseEnter={() => setHover(w.num)}
              onMouseLeave={() => setHover(null)}
              className="group border-b border-[#0c0c0c]/15"
            >
              <div className="grid grid-cols-2 md:grid-cols-[60px_70px_1fr_1fr_180px_60px] gap-x-6 gap-y-1 py-5 cursor-pointer">
                <span className="font-mono text-xs text-[#0c0c0c]/50 md:text-[#0c0c0c]/70 md:tracking-wider order-1">
                  {w.num}
                </span>
                <span className="font-mono text-xs text-[#0c0c0c]/60 md:text-[#0c0c0c]/80 text-right md:text-left order-2 md:order-2">
                  {w.year}
                </span>
                <span className="col-span-2 md:col-span-1 text-xl md:text-2xl tracking-tight font-medium leading-tight order-3 md:order-3 group-hover:italic group-hover:font-serif group-hover:font-normal group-hover:text-[#7a4a32] transition-all">
                  {w.title}
                </span>
                <span className="col-span-2 md:col-span-1 text-sm md:text-base text-[#0c0c0c]/75 leading-snug order-5 md:order-4">
                  {w.client}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#0c0c0c]/70 order-6 md:order-5 self-center">
                  {w.disciplines.join(" · ")}
                </span>
                <span className="font-mono text-xs text-[#0c0c0c]/60 text-right order-7 md:order-6 self-center">
                  {w.city}
                </span>
              </div>
              {hover === w.num && w.note && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="font-serif italic text-[#0c0c0c]/75 pb-5 pl-0 md:pl-[136px] text-base leading-relaxed max-w-xl"
                >
                  — {w.note}
                </motion.p>
              )}
            </motion.div>
          ))}
        </section>

        {/* Colophon */}
        <footer className="px-6 md:px-12 pb-20 grid md:grid-cols-3 gap-8 border-t border-[#0c0c0c]/30 pt-10 text-[12px] leading-[1.7]">
          <div>
            <p className="uppercase tracking-[0.18em] mb-2">Studio</p>
            <p>Hverfisgata 32</p>
            <p>101 Reykjavík</p>
            <p>Open by appointment</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.18em] mb-2">Correspondence</p>
            <p>hello@faeroes.studio</p>
            <p>+354 555 0119</p>
            <p className="mt-2 italic font-serif">
              Selected for the Nordic Type Biennial, 2026.
            </p>
          </div>
          <div>
            <p className="uppercase tracking-[0.18em] mb-2">Colophon</p>
            <p>
              Set in a private cut of Færøes Display & Færøes Mono, 2024 —
              forthcoming.
            </p>
            <p className="mt-2">© MMXXVI — All rights reserved.</p>
          </div>
        </footer>

        <div className="px-6 md:px-12 pb-10 text-[11px] uppercase tracking-[0.18em]">
          <Link href="/lab" className="underline-offset-4 hover:underline">
            ← All demos
          </Link>
        </div>
      </div>
    </main>
  );
}
