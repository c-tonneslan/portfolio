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
  {
    slug: "archive",
    title: "studio archive",
    tag: "type-driven index",
    blurb: "A small studio's complete catalogue of work, in reverse chronological order. No images, no marketing — only the record.",
    swatch: "from-[#7a4a32]/20 via-[#7a4a32]/5 to-transparent",
    preview: (
      <div className="h-full bg-[#f3eee4] text-[#0c0c0c] p-2 flex flex-col font-mono text-[8px] leading-[1.5]">
        <div className="flex justify-between mb-1 opacity-60">
          <span>№</span><span>YEAR</span><span>WORK</span><span>CITY</span>
        </div>
        {["047 · 2026 · Catalogue Raisonné · RVK", "046 · 2026 · A Field of Salt · RVK", "045 · 2026 · Programme · RVK", "044 · 2025 · Brutus · TYO", "043 · 2025 · Lögberg · RVK"].map((row) => (
          <div key={row} className="border-t border-[#0c0c0c]/20 py-px truncate">{row}</div>
        ))}
      </div>
    ),
  },
  {
    slug: "menu",
    title: "saltey, a kitchen",
    tag: "restaurant menu",
    blurb: "Cream, oxblood, italic serif. A small restaurant's nightly menu set the way a printed card would set it.",
    swatch: "from-[#5b1a1a]/25 via-[#f3e6d0]/20 to-transparent",
    preview: (
      <div className="h-full bg-[#f3e6d0] text-[#5b1a1a] p-2 flex flex-col items-center justify-center">
        <p className="text-[7px] uppercase tracking-[0.3em] opacity-70">est. MMXIX</p>
        <p className="font-serif italic text-2xl leading-none mt-1">Saltey</p>
        <div className="w-full mt-2 space-y-0.5 text-[7px]">
          {["Sourdough · cultured butter ……… 9", "Cod · brown crab · kelp ……………… 44", "Reindeer · sour cherry ……………… 58"].map((r) => (
            <p key={r}>{r}</p>
          ))}
        </div>
      </div>
    ),
  },
  {
    slug: "repertory",
    title: "the repertory",
    tag: "cinema programme",
    blurb: "An independent cinema's week. Seven columns of showtimes, a centerpiece restoration, members' notes. Print logic, on a web page.",
    swatch: "from-[#c41e1e]/20 via-[#efe6d2]/15 to-transparent",
    preview: (
      <div className="h-full bg-[#efe6d2] text-[#0c0c0c] p-2 flex flex-col">
        <p className="font-serif italic text-base leading-none">The Repertory.</p>
        <div className="grid grid-cols-7 gap-px mt-2 flex-1 text-[6px]">
          {["Sat","Sun","Mon","Tue","Wed","Thu","Fri"].map((d) => (
            <div key={d} className="bg-[#efe6d2] border-t border-[#0c0c0c]/40 pt-0.5">
              <p className="uppercase tracking-wider opacity-60">{d}</p>
              <p className="text-[#c41e1e] mt-0.5">1:00</p>
              <p className="text-[#c41e1e]">6:15</p>
              <p className="text-[#c41e1e]">9:00</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    slug: "letter",
    title: "a letter to shareholders",
    tag: "annual report",
    blurb: "A founder's letter, set like a printed document. Marginal year navigation, drop caps, footnotes, signature in script.",
    swatch: "from-[#a23427]/15 via-[#faf6ed]/20 to-transparent",
    preview: (
      <div className="h-full bg-[#faf6ed] text-[#0d1e3a] p-2 flex flex-col">
        <p className="text-[6px] uppercase tracking-[0.25em] opacity-70 flex justify-between">
          <span>Nordmark & Co.</span><span>№ 09</span>
        </p>
        <p className="font-serif italic text-[10px] leading-tight mt-1">
          A letter to<br />shareholders,<br />for the year 2026.
        </p>
        <div className="mt-auto flex items-end justify-between">
          <p className="font-serif italic text-[#a23427] text-[10px] leading-none">Eyvind N.</p>
          <p className="font-mono text-[5px] opacity-60">24·V·MMXXVI</p>
        </div>
      </div>
    ),
  },
  {
    slug: "linear",
    title: "linear.app, studied",
    tag: "saas marketing",
    blurb: "The canonical product page, rebuilt: mesh-gradient hero, animated issue list with status transitions, feature triptych, customer quote, logo wall.",
    swatch: "from-[#5e6ad2]/30 via-[#7e5fff]/10 to-transparent",
    preview: (
      <div className="h-full bg-[#08090a] text-[#f7f8f8] rounded-md relative overflow-hidden p-1.5">
        <div className="absolute inset-0">
          <div className="absolute -top-4 left-1/3 w-20 h-20 rounded-full bg-[#5e6ad2] opacity-50 blur-2xl" />
          <div className="absolute top-4 -right-4 w-16 h-16 rounded-full bg-[#26b5ce] opacity-40 blur-2xl" />
        </div>
        <div className="relative flex flex-col h-full">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-sm bg-gradient-to-br from-[#9aa1ff] to-[#5e6ad2]" />
            <span className="text-[5px] font-semibold">Linear</span>
          </div>
          <p className="text-[7px] font-semibold mt-1 leading-tight tracking-tight">
            The system for modern
            <br />
            <span className="bg-gradient-to-r from-[#c1c6ff] to-[#7da9ff] bg-clip-text text-transparent">software dev.</span>
          </p>
          <div className="mt-1 flex gap-0.5">
            <div className="px-1 h-1 bg-white rounded-sm" />
            <div className="px-1 h-1 bg-white/15 rounded-sm" />
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "readcv",
    title: "read.cv, studied",
    tag: "professional network",
    blurb: "Inter Display on warm off-white, profile grid with skill tags, an editorial 'what is read.cv' essay block, two-tier pricing.",
    swatch: "from-[#1c1c1a]/15 via-[#faf9f5]/15 to-transparent",
    preview: (
      <div className="h-full bg-[#faf9f5] text-[#1c1c1a] rounded-md p-1.5 flex flex-col">
        <p className="text-[6px] font-semibold tracking-tighter">read.cv<span className="opacity-30">.</span></p>
        <p className="text-[8px] leading-tight mt-1 tracking-tight">
          A quieter home for <span className="font-serif italic">your work.</span>
        </p>
        <div className="mt-1 grid grid-cols-2 gap-px bg-[#1c1c1a]/15 rounded overflow-hidden flex-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-[#faf9f5] p-0.5 flex items-center gap-0.5">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-rose-300 to-orange-400" />
              <div className="flex-1">
                <div className="h-0.5 bg-[#1c1c1a]/80 w-3/4 mb-px" />
                <div className="h-px bg-[#1c1c1a]/30 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    slug: "anthropic",
    title: "anthropic.com, studied",
    tag: "editorial product",
    blurb: "Cream paper, serif italic accents, a Claude-coral mesh, three product cards, three principles, a research index, careers callout in deep ink.",
    swatch: "from-[#d97757]/25 via-[#f4a261]/10 to-transparent",
    preview: (
      <div className="h-full bg-[#faf9f5] text-[#181818] rounded-md p-1.5 flex flex-col">
        <div className="flex items-center gap-0.5">
          <svg viewBox="0 0 24 24" className="w-1.5 h-1.5">
            <path d="M7 4 L17 4 L21 20 L15 20 L13.5 14 L10.5 14 L9 20 L3 20 Z M11 9.5 L13 9.5 L12 6 Z" fill="#d97757" />
          </svg>
          <span className="text-[5px] font-medium">Anthropic</span>
        </div>
        <p className="text-[7px] font-medium mt-1 leading-tight tracking-tight">
          Making AI systems
          <br />you can <span className="font-serif italic text-[#a14d2f]">rely on.</span>
        </p>
        <div className="mt-1 flex-1 rounded-sm relative overflow-hidden bg-[#f3ede0]">
          <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-[#d97757] opacity-50 blur-md" />
          <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#f4a261] opacity-60 blur-md" />
        </div>
      </div>
    ),
  },
  {
    slug: "zurich",
    title: "volt instruments",
    tag: "swiss precision",
    blurb: "A Zürich modular-synth maker. Strict grid, signal red, vertical type, live filter response, hand-bound catalogue 1968 — present.",
    swatch: "from-[#E30613]/25 via-white/10 to-transparent",
    preview: (
      <div className="h-full bg-white text-black rounded-sm p-1 flex flex-col font-bold">
        <div className="flex justify-between text-[4px] uppercase tracking-wider">
          <span className="flex items-center gap-0.5"><span className="w-0.5 h-0.5 bg-[#E30613]" />VOLT</span>
          <span>04 · MMXXVI</span>
        </div>
        <p className="text-[18px] leading-[0.78] tracking-[-0.05em] mt-1">VOLT</p>
        <div className="mt-auto grid grid-cols-3 gap-px text-[3px] uppercase">
          <span className="bg-black text-white text-center">M-21</span>
          <span className="bg-black text-white text-center">540.—</span>
          <span className="bg-[#E30613] text-white text-center">●</span>
        </div>
      </div>
    ),
  },
  {
    slug: "bossa",
    title: "18ª bienal de design",
    tag: "tropical modernism",
    blurb: "São Paulo design biennial. Sunset palette, Niemeyer curves, animated marquee, eight program days as colored circles, hibiscus and ocean.",
    swatch: "from-[#E8763A]/30 via-[#D34A4A]/15 to-transparent",
    preview: (
      <div className="h-full bg-[#fff4e3] text-[#1b1410] rounded-sm relative overflow-hidden p-1">
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#E8763A]" />
        <div className="absolute -bottom-2 -left-2 w-7 h-7 rounded-full bg-[#3B5BA5] opacity-80" />
        <p className="relative text-[14px] font-black leading-[0.78] tracking-[-0.04em]">
          18<sup className="text-[8px]">a</sup>
          <br/><span className="italic font-serif font-normal text-[#D34A4A]">Bienal</span>
        </p>
        <p className="absolute bottom-1 right-1 text-[4px] uppercase tracking-widest font-bold">SP · MMXXVI</p>
      </div>
    ),
  },
  {
    slug: "kyoto",
    title: "蓬莱堂 · hōrai-dō",
    tag: "ma, negative space",
    blurb: "A Kyoto paper shop, est. 1841. Sumi black on bone, vertical kana, 75% whitespace, a single object on a vast page, seasonal closures in four kanji.",
    swatch: "from-[#c8412f]/15 via-[#f5f1e6]/30 to-transparent",
    preview: (
      <div className="h-full bg-[#f5f1e6] text-[#1a1612] rounded-sm p-1.5 flex">
        <div className="flex-1">
          <p style={{ fontFamily: "serif" }} className="text-[14px] leading-none">蓬莱堂</p>
          <p className="font-serif italic text-[7px] mt-0.5">Hōrai-dō</p>
          <p className="text-[4px] uppercase tracking-[0.3em] mt-1 opacity-70">1841 —</p>
        </div>
        <div style={{ writingMode: "vertical-rl" }} className="text-[4px] tracking-[0.4em] opacity-50">
          京 都
        </div>
      </div>
    ),
  },
  {
    slug: "seoul",
    title: "pulse / 26",
    tag: "kinetic chrome",
    blurb: "A 3-night Seoul electronic festival. Holographic conic gradients, chrome-text hero that tracks the cursor, live now-playing waveform, day cards in three weathers.",
    swatch: "from-fuchsia-500/25 via-cyan-500/15 to-transparent",
    preview: (
      <div className="h-full bg-black rounded-sm relative overflow-hidden p-1.5">
        <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full opacity-60 blur-lg" style={{ background: "conic-gradient(from 90deg, #ff6bd6, #6bd1ff, #b8ff6b, #ff6bd6)" }} />
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full opacity-50 blur-lg" style={{ background: "conic-gradient(from 270deg, #b8ff6b, #ff6bd6, #6bd1ff)" }} />
        <p className="relative text-[18px] font-black leading-none tracking-[-0.06em]" style={{ background: "linear-gradient(135deg, #ffb6f0, #b6d6ff, #f0ffb6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PULSE</p>
        <p className="absolute bottom-1 left-1 right-1 text-[4px] text-white/80 uppercase tracking-[0.25em] flex justify-between">
          <span>SEOUL</span><span>14·15·16</span>
        </p>
      </div>
    ),
  },
  {
    slug: "buenos",
    title: "revista bandoneón",
    tag: "argentine literary",
    blurb: "A Buenos Aires literary quarterly. Navy ink, cadmium yellow, italic serif, drop-cap editorial, sumario set as a table of contents, Spanish copy throughout.",
    swatch: "from-[#19234a]/25 via-[#f5c344]/15 to-transparent",
    preview: (
      <div className="h-full bg-[#f2ecd8] text-[#19234a] rounded-sm relative overflow-hidden p-1.5">
        <div className="absolute top-2 right-2 w-10 h-10 bg-[#f5c344]" />
        <div className="absolute top-3 right-3 w-10 h-10 border border-[#19234a]" />
        <p className="text-[5px] uppercase tracking-[0.25em] opacity-70">№ 14 · Otoño</p>
        <p className="relative font-serif italic text-2xl leading-[0.85] mt-1">Bandoneón.</p>
        <p className="absolute bottom-1 left-1.5 text-[4px] uppercase tracking-[0.25em] text-[#c1273a] font-bold">★ Buenos Aires</p>
      </div>
    ),
  },
  {
    slug: "mumbai",
    title: "maya, monsoon issue",
    tag: "indian editorial",
    blurb: "A Bombay design quarterly. Saffron, indigo, maroon. Devanagari accents, dingbats between rules, side-by-side English/Hindi poems, gradient-mosaic photo essay.",
    swatch: "from-[#ef9c2b]/30 via-[#2c2467]/15 to-transparent",
    preview: (
      <div className="h-full bg-[#f3eedc] text-[#2c2467] rounded-sm p-1.5 flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-[#6b1f3a] text-[6px]">✦</span>
          <div className="flex-1 h-px bg-[#2c2467]/40" />
          <span className="text-[4px] uppercase tracking-[0.3em]">№ 22</span>
          <div className="flex-1 h-px bg-[#2c2467]/40" />
          <span className="text-[#6b1f3a] text-[6px]">✦</span>
        </div>
        <p className="font-serif text-2xl leading-[0.85] mt-2">Maya<span className="text-[#6b1f3a]">.</span></p>
        <p className="font-serif italic text-[5px] text-[#6b1f3a] mt-0.5">On living slowly.</p>
        <p style={{ fontFamily: "serif" }} className="text-[#ef9c2b] text-[14px] mt-auto self-end">२२</p>
      </div>
    ),
  },
  {
    slug: "casasol",
    title: "casa sol",
    tag: "barragán architecture",
    blurb: "A six-room hotel in Coyoacán. Pink walls, cobalt, terra cotta, ochre. Each room gets its own architectural color band. Reservations in Spanish, with cast shadows.",
    swatch: "from-[#ed8b8b]/30 via-[#3551a8]/15 to-transparent",
    preview: (
      <div className="h-full rounded-sm overflow-hidden flex">
        <div className="flex-[7] bg-[#ed8b8b] relative flex flex-col justify-between p-1">
          <p className="text-[3px] uppercase tracking-[0.3em] text-[#1a1410]/70">Coyoacán</p>
          <p className="font-serif italic text-base leading-[0.85] text-[#1a1410]">Casa<br/>Sol.</p>
          <p className="text-[3px] uppercase tracking-[0.3em] text-[#1a1410]/70">6 habitaciones</p>
        </div>
        <div className="flex-[3] flex flex-col">
          <div className="flex-1 bg-[#3551a8]" />
          <div className="flex-1 bg-[#dba74e]" />
        </div>
        <div className="flex-[2] bg-[#b35147]" />
      </div>
    ),
  },
  {
    slug: "kowloon",
    title: "王氏百貨 · wong's",
    tag: "hong kong catalogue",
    blurb: "A Kowloon department store, est. 1985. Jade, ginger, cinnabar, sky. Mixed Chinese + English type, neon arc, marquee, nine product cards each with a giant carved kanji.",
    swatch: "from-[#b81d23]/25 via-[#d97c39]/15 to-transparent",
    preview: (
      <div className="h-full bg-[#f5ecd8] text-[#1c1816] rounded-sm relative overflow-hidden p-1">
        <p className="text-[4px] uppercase tracking-[0.3em] text-[#b81d23] font-bold">★ 自一九八五</p>
        <p style={{ fontFamily: "serif" }} className="font-black text-lg leading-[0.78] mt-0.5">王氏百貨</p>
        <p className="text-[6px] font-bold tracking-tight">Wong's <span className="italic font-serif font-normal">general goods.</span></p>
        <div className="absolute bottom-0 left-0 right-0 bg-[#b81d23] text-[#f5ecd8] py-0.5 text-[4px] uppercase tracking-widest font-bold text-center">
          ★ SPRING CATALOGUE
        </div>
      </div>
    ),
  },
  {
    slug: "stockholm",
    title: "ärla upplagor",
    tag: "scandinavian quiet",
    blurb: "A Stockholm editions house. One designer a year, one chair this year. Warm bone paper, oat, sage, caramel accent. Furniture as careful catalogue.",
    swatch: "from-[#c08350]/20 via-[#8aa185]/10 to-transparent",
    preview: (
      <div className="h-full bg-[#f4ede0] text-[#1a1a1a] rounded-sm p-1.5 flex flex-col">
        <p className="text-[4px] uppercase tracking-[0.3em] opacity-70">№ 07 · 2026</p>
        <p className="text-base leading-[0.85] mt-1 font-medium">Ärla<br/><span className="font-serif italic font-normal text-[#c08350]">upplagor.</span></p>
        <div className="mt-auto flex items-end gap-1">
          <div className="w-2 h-3 bg-[#c08350]" />
          <div className="w-3 h-4 bg-[#8aa185]" />
          <div className="w-2 h-2 bg-[#9b6438]" />
        </div>
      </div>
    ),
  },
  {
    slug: "beirut",
    title: "bait · بيت",
    tag: "levantine quarterly",
    blurb: "A Beirut arts quarterly, set in Arabic and English. Indigo and terracotta, Mediterranean blue, zellij geometry. Bilingual TOC, bidirectional layout.",
    swatch: "from-[#1f3a68]/25 via-[#b6612d]/15 to-transparent",
    preview: (
      <div className="h-full bg-[#f3e8d4] text-[#0d1e3a] rounded-sm p-1.5 flex flex-col relative overflow-hidden">
        <div className="absolute top-1 right-1 w-6 h-6 opacity-50">
          <svg viewBox="0 0 20 20"><polygon points="10,2 18,10 10,18 2,10" fill="none" stroke="#2b6d8e" strokeWidth="1" /><circle cx="10" cy="10" r="2" fill="#b6612d" /></svg>
        </div>
        <p className="text-[12px] leading-none font-medium">BAIT<span className="text-[#b6612d]">.</span></p>
        <p dir="rtl" className="text-[10px] mt-0.5 text-[#2b6d8e]" style={{ fontFamily: "serif" }}>بيت</p>
        <p className="text-[5px] mt-auto uppercase tracking-[0.25em] opacity-70">Issue 09 · Spring</p>
      </div>
    ),
  },
  {
    slug: "lagos",
    title: "ayò festival",
    tag: "yorùbá kinetic",
    blurb: "A Lagos festival of music & joy. Yinka Ilori palette (hot pink, ochre, cyan, lime, deep purple), zigzag separators, ÌBẸ̀RẸ̀ day cards, bilingual marquee.",
    swatch: "from-[#ed4e8d]/30 via-[#e9a93a]/20 to-transparent",
    preview: (
      <div className="h-full bg-[#f4ecd8] text-[#1a1410] rounded-sm relative overflow-hidden p-1.5">
        <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#e9a93a]" />
        <div className="absolute bottom-3 right-3 w-3 h-3 bg-[#2eb4c1]" />
        <p className="text-[4px] uppercase tracking-[0.3em] font-black">⸺ Third edition</p>
        <p className="text-[20px] font-black leading-[0.78] tracking-[-0.05em] mt-0.5">AYÒ.</p>
        <p className="font-serif italic text-[6px] mt-0.5 text-[#5b2d8b]">joy, in three days.</p>
      </div>
    ),
  },
  {
    slug: "marrakech",
    title: "riad aïn · رياض عين",
    tag: "moroccan zellij",
    blurb: "A four-room riad in Marrakech medina. Majorelle blue, saffron, earth red, bone. SVG zellij tile motifs, trilingual (FR/AR/EN), four chambres each a coloured band.",
    swatch: "from-[#c25831]/25 via-[#2c4d9b]/15 to-transparent",
    preview: (
      <div className="h-full bg-[#f1e8d4] text-[#1f1410] rounded-sm overflow-hidden flex">
        <div className="flex-[5] p-1.5">
          <p className="text-[4px] uppercase tracking-[0.3em] text-[#c25831] font-bold">⸺ Quatre chambres</p>
          <p className="font-serif italic text-base leading-[0.85] mt-1">Riad<br/>Aïn.</p>
        </div>
        <div className="flex-[2] overflow-hidden relative">
          <svg viewBox="0 0 40 60" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="zp" patternUnits="userSpaceOnUse" width="10" height="10">
                <polygon points="5,1 9,5 5,9 1,5" fill="#2c4d9b" opacity="0.8" />
                <polygon points="5,3 7,5 5,7 3,5" fill="#f1e8d4" />
              </pattern>
            </defs>
            <rect width="40" height="60" fill="url(#zp)" />
          </svg>
        </div>
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
