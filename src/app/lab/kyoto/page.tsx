"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    kana: "和紙",
    name: "Wagami envelopes",
    sub: "Kurotani washi, ten-pack",
    note: "Set with a single black thread.",
    yen: "¥ 1,800",
  },
  {
    kana: "墨",
    name: "Sumi ink stick",
    sub: "Hashimoto, pine soot",
    note: "Aged three winters before sale.",
    yen: "¥ 4,200",
  },
  {
    kana: "筆",
    name: "Calligraphy brush, fox tail",
    sub: "Made by Watanabe, Nara",
    note: "For the steady hand, only.",
    yen: "¥ 6,800",
  },
];

const seasons = [
  { kanji: "春", romaji: "Haru", season: "Spring", closed: "Mar 21 — closed for the equinox" },
  { kanji: "夏", romaji: "Natsu", season: "Summer", closed: "Aug 13 — 16 closed, Obon" },
  { kanji: "秋", romaji: "Aki", season: "Autumn", closed: "Sep 23 — closed for the equinox" },
  { kanji: "冬", romaji: "Fuyu", season: "Winter", closed: "Dec 28 — Jan 4 closed for the new year" },
];

export default function KyotoDemo() {
  return (
    <main className="min-h-screen bg-[#f5f1e6] text-[#1a1612] relative">
      {/* Vertical kana, very subtle, right edge */}
      <div
        aria-hidden
        className="fixed right-6 top-0 bottom-0 hidden md:flex flex-col items-center justify-center text-[10px] tracking-[0.4em] opacity-30"
        style={{ writingMode: "vertical-rl" }}
      >
        蓬 莱 堂 · 京 都 · 紙 と 墨
      </div>

      {/* Masthead */}
      <header className="px-6 md:px-16 pt-12 pb-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.35em] mb-8 opacity-70">
            天 保 一 二 年 · MDCCCXLI
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <p
              className="text-5xl md:text-7xl mb-2"
              style={{ fontFamily: "serif" }}
            >
              蓬莱堂
            </p>
            <h1 className="font-serif italic text-3xl md:text-5xl tracking-[-0.01em]">
              Hōrai-dō
            </h1>
          </motion.div>
          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] opacity-70">
            Paper, ink, and incense — Higashiyama, Kyoto.
            <br />A small shop, open since the year of the rat.
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-10 self-end text-right text-[11px] uppercase tracking-[0.25em] space-y-1 opacity-70">
          <Link href="/lab" className="hover:underline underline-offset-4">
            /lab
          </Link>
          <p>—</p>
          <p>184 years</p>
          <p>Open six days a week</p>
        </div>
      </header>

      {/* A single sentence */}
      <section className="px-6 md:px-16 pb-32 md:pb-48">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.2 }}
          className="font-serif italic text-3xl md:text-5xl leading-[1.4] tracking-[-0.01em] max-w-3xl"
        >
          We sell paper that is meant to be touched, ink that is meant to dry
          slowly,{" "}
          <span className="text-[#c8412f]">and not very much else.</span>
        </motion.p>
      </section>

      {/* A single featured object */}
      <section className="px-6 md:px-16 pb-32 md:pb-48 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 md:col-start-2">
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-70">
            This month
            <br />⸺ from the kiln
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.9 }}
          className="col-span-12 md:col-span-7 md:col-start-5"
        >
          {/* faux object: a single circle on vast field */}
          <div className="aspect-[5/4] bg-[#ece4d2] flex items-center justify-center relative">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,0,0,0.06), transparent)",
              }}
            />
            {/* The tea bowl as a single shape */}
            <svg viewBox="0 0 200 160" className="w-2/3 h-2/3 relative">
              <ellipse cx="100" cy="135" rx="65" ry="6" fill="#1a1612" opacity="0.15" />
              <path
                d="M 35 60 Q 35 130 100 130 Q 165 130 165 60 Q 100 78 35 60 Z"
                fill="#1a1612"
              />
              <ellipse cx="100" cy="60" rx="65" ry="10" fill="#3a2a20" />
              <ellipse cx="100" cy="60" rx="55" ry="5" fill="#5a4434" />
            </svg>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm leading-relaxed">
            <p className="text-[11px] uppercase tracking-[0.25em] opacity-70 col-span-2 mb-2">
              Wood-fired tea bowl, № 03
            </p>
            <p>
              <span className="opacity-60">Maker — </span>Sato Ren · Shigaraki
            </p>
            <p>
              <span className="opacity-60">Clay — </span>Local, with kohiki slip
            </p>
            <p>
              <span className="opacity-60">Diameter — </span>113 mm
            </p>
            <p>
              <span className="opacity-60">Edition — </span>One only
            </p>
            <p className="col-span-2 mt-4 font-serif italic text-base">
              Held in the hand twice before listing. Yours by reservation,
              shipped after the first cool morning.
            </p>
            <p className="col-span-2 mt-2 font-mono">¥ 24,000 — inquire</p>
          </div>
        </motion.div>
      </section>

      {/* Three goods, sparsely set */}
      <section className="px-6 md:px-16 pb-32 md:pb-48">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <p className="col-span-12 md:col-span-2 md:col-start-2 text-[11px] uppercase tracking-[0.3em] opacity-70">
            For the shelf
            <br />⸺ three things
          </p>
          <h2 className="col-span-12 md:col-span-7 md:col-start-5 font-serif italic text-3xl md:text-4xl tracking-[-0.01em]">
            What we keep, year-round.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="col-span-12 md:col-span-7 md:col-start-5 grid grid-cols-12 gap-3 border-t border-[#1a1612]/30 pt-8 pb-8 last:border-b last:border-[#1a1612]/30"
            >
              <p
                className="col-span-2 text-3xl md:text-4xl"
                style={{ fontFamily: "serif" }}
              >
                {it.kana}
              </p>
              <div className="col-span-7">
                <p className="font-serif italic text-xl md:text-2xl tracking-tight">
                  {it.name}
                </p>
                <p className="text-sm opacity-70 mt-1">{it.sub}</p>
                <p className="text-sm mt-3 max-w-md font-serif italic">
                  {it.note}
                </p>
              </div>
              <p className="col-span-3 text-right font-mono text-sm">
                {it.yen}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Note from the master */}
      <section className="px-6 md:px-16 pb-32 md:pb-48">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 md:col-start-2 text-[11px] uppercase tracking-[0.3em] opacity-70">
            ⸺ A note
            <br />from the shop
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="col-span-12 md:col-span-7 md:col-start-5 font-serif italic text-xl md:text-2xl leading-[1.7]"
          >
            <p>
              A short rain this morning. The vermilion paper from Echizen
              arrived dry; the long roll for the back room is still in
              transit, expected on Thursday.
            </p>
            <p className="mt-6">
              The shop will close early on the twenty-eighth — a tea
              gathering. We will reopen at the usual hour on the day after.
            </p>
            <p className="mt-10 font-sans not-italic text-[11px] uppercase tracking-[0.3em] opacity-70">
              — Iyo Tanaka, master · 二〇二六年五月二十四日
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seasonal closures */}
      <section className="px-6 md:px-16 pb-32 md:pb-48">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <p className="col-span-12 md:col-span-2 md:col-start-2 text-[11px] uppercase tracking-[0.3em] opacity-70">
            Calendar
            <br />⸺ four seasons
          </p>
          <h2 className="col-span-12 md:col-span-7 md:col-start-5 font-serif italic text-3xl md:text-4xl tracking-[-0.01em]">
            When the shop is closed.
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 md:col-start-5 grid grid-cols-4 gap-6 border-t border-[#1a1612]/30 pt-8">
            {seasons.map((s, i) => (
              <motion.div
                key={s.kanji}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-r border-[#1a1612]/15 last:border-r-0 pr-4"
              >
                <p
                  className="text-5xl mb-3"
                  style={{ fontFamily: "serif" }}
                >
                  {s.kanji}
                </p>
                <p className="font-serif italic text-base">{s.season}</p>
                <p className="text-xs opacity-70 mt-1">{s.romaji}</p>
                <p className="text-xs mt-4 leading-relaxed opacity-80">
                  {s.closed}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer: address bilingual */}
      <footer className="px-6 md:px-16 pb-12 border-t border-[#1a1612]/30 pt-10 grid grid-cols-12 gap-6 text-[11px] uppercase tracking-[0.25em]">
        <div className="col-span-12 md:col-span-3">
          <p
            className="text-2xl mb-2 normal-case tracking-normal"
            style={{ fontFamily: "serif" }}
          >
            蓬莱堂
          </p>
          <p className="opacity-70">Hōrai-dō, since 1841</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="opacity-70 mb-2">In English</p>
          <p className="normal-case tracking-normal leading-relaxed">
            12 Yasaka-no-michi
            <br />
            Higashiyama-ku, Kyoto
            <br />
            605-0825 Japan
          </p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="opacity-70 mb-2">日本語で</p>
          <p
            className="normal-case tracking-normal leading-relaxed"
            style={{ fontFamily: "serif" }}
          >
            京都府京都市東山区
            <br />
            八坂の道一二
            <br />
            六〇五ノ〇八二五
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 text-right space-y-1 opacity-70">
          <p>Tu — Sun · 10 — 18</p>
          <p>Mondays closed</p>
          <p className="mt-4">
            <Link href="/lab" className="hover:underline underline-offset-4">
              ← all demos
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
