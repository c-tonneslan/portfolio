"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Item = { name: string; note?: string; price: string };

const snacks: Item[] = [
  { name: "Sourdough, cultured butter", note: "buckwheat, sea salt", price: "9" },
  { name: "Smoked trout roe, brown butter, rye", price: "18" },
  { name: "Beef tartare, fermented blueberry, ash", price: "22" },
  { name: "Lamb tongue, pickled spruce, mustard", price: "19" },
  { name: "Skyr, dill oil, cucumber, lovage", price: "14" },
];

const mains: Item[] = [
  { name: "Cod, brown crab, kelp dashi", note: "first of the season", price: "44" },
  { name: "Reindeer, sour cherry, juniper, beets", price: "58" },
  { name: "Halibut, fennel, capers, browned cream", price: "46" },
  { name: "Lamb shoulder, hay-roasted, garlic", note: "for two, 90 minutes", price: "110" },
  { name: "Beets, sheep yoghurt, walnut, sumac", note: "for the table", price: "28" },
];

const sweets: Item[] = [
  { name: "Rhubarb, almond cream, sorrel", price: "14" },
  { name: "Chocolate, smoked salt, olive oil", price: "13" },
  { name: "Skyr, honey, oats, last year's preserves", price: "12" },
];

const wines: Item[] = [
  { name: "Domaine Marcillet, Bourgogne Aligoté '22", price: "16 / 70" },
  { name: "Foradori, Teroldego '21 — Trentino", price: "18 / 84" },
  { name: "Movia, Lunar Ribolla Gialla '19", price: "22 / 102" },
  { name: "Yann Durieux, Love & Pif '21 — Côte d'Or", price: "24 / 118" },
];

function Section({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: Item[];
}) {
  return (
    <section className="mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-xs tracking-[0.2em] text-[#5b1a1a]/60">
          {number}
        </span>
        <h2 className="font-serif italic text-3xl md:text-4xl tracking-tight">
          {title}
        </h2>
        <span className="flex-1 border-t border-dotted border-[#5b1a1a]/30 mt-2" />
      </div>
      <ul className="space-y-5">
        {items.map((it) => (
          <li key={it.name} className="grid grid-cols-[1fr_auto] gap-3 items-baseline">
            <div>
              <p className="text-base md:text-lg leading-snug">{it.name}</p>
              {it.note && (
                <p className="font-serif italic text-sm text-[#5b1a1a]/70 mt-0.5">
                  {it.note}
                </p>
              )}
            </div>
            <p className="font-mono text-sm text-[#5b1a1a]/80 tabular-nums">
              {it.price}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function MenuDemo() {
  return (
    <main className="min-h-screen bg-[#f7e3d0] text-[#5b1a1a] relative">
      {/* Vignette */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(91,26,26,0.07) 100%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="px-6 md:px-10 py-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] border-b border-[#5b1a1a]/30">
          <Link href="/lab" className="hover:underline underline-offset-4">
            /lab
          </Link>
          <span>The 24th of May, MMXXVI</span>
          <span className="hidden md:block">Saturday Service</span>
        </div>

        {/* Masthead */}
        <header className="text-center px-6 pt-24 md:pt-32 pb-20 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.5em] mb-8 text-[#5b1a1a]/70"
          >
            Established · MMXIX · Reykjavík
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif italic text-7xl md:text-[10rem] leading-[0.85] tracking-[-0.04em]"
          >
            Saltey
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <span className="w-12 h-px bg-[#5b1a1a]/40" />
            <span className="text-[11px] uppercase tracking-[0.4em]">
              A small kitchen
            </span>
            <span className="w-12 h-px bg-[#5b1a1a]/40" />
          </motion.div>
          <p className="font-serif italic text-base md:text-lg mt-10 leading-relaxed text-[#5b1a1a]/85 max-w-lg mx-auto">
            We serve what arrived this morning. The menu is short on purpose
            and the wine list is shorter. There is no choice of side dish.
          </p>
        </header>

        {/* Menu */}
        <div className="px-6 md:px-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16">
          <div>
            <Section number="i." title="To begin" items={snacks} />
            <Section number="iii." title="To finish" items={sweets} />
          </div>
          <div>
            <Section number="ii." title="From the kitchen" items={mains} />
            <Section number="iv." title="By the glass / bottle" items={wines} />
          </div>
        </div>

        {/* Tasting note */}
        <div className="px-6 md:px-10 max-w-3xl mx-auto py-20">
          <div className="border-y border-[#5b1a1a]/30 py-10 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] mb-4 text-[#5b1a1a]/70">
              Or, if you would prefer
            </p>
            <p className="font-serif italic text-3xl md:text-4xl leading-snug">
              The chef's menu —
              <br />
              eight courses, two and a half hours.
            </p>
            <p className="font-mono text-base mt-6 tabular-nums">
              kr 16 800 per guest · the whole table
            </p>
            <p className="text-xs text-[#5b1a1a]/70 mt-3 max-w-md mx-auto leading-relaxed">
              Please tell us at booking. Wine pairings, kr 9 600. We're happy
              to cook around what you don't eat — we'd just like to know in
              advance.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-6 md:px-10 max-w-3xl mx-auto pb-20 text-center text-xs leading-[1.9] text-[#5b1a1a]/85">
          <p className="uppercase tracking-[0.3em] mb-4">Saltey, the small kitchen</p>
          <p>Vesturgata 3a · 101 Reykjavík</p>
          <p>Tuesday — Saturday, from six o'clock</p>
          <p className="mt-4 font-serif italic">
            We do not take walk-ins on weekends, with apologies.
          </p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em]">
            <Link href="/lab" className="hover:underline underline-offset-4">
              ← All demos
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
