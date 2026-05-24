"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Item = {
  num: string;
  cn: string;
  en: string;
  sub: string;
  price: number;
  origin: string;
  tone: "jade" | "ginger" | "red" | "sky";
};

const goods: Item[] = [
  { num: "01", cn: "保溫瓶", en: "Thermos, enamel", sub: "Two cups of warm tea, all afternoon.", price: 188, origin: "Made in Shanghai, 1988 design", tone: "jade" },
  { num: "02", cn: "膠拖鞋", en: "Plastic slippers, classic blue", sub: "The pair on every grandmother's balcony.", price: 38, origin: "Made in Guangdong, since 1976", tone: "sky" },
  { num: "03", cn: "搪瓷杯", en: "Enamel mug, peony pattern", sub: "Best paired with strong milk tea.", price: 68, origin: "Hand-painted in Hangzhou", tone: "red" },
  { num: "04", cn: "麻雀牌", en: "Mahjong set, bone & bamboo", sub: "Four players, one cushion, an afternoon gone.", price: 980, origin: "Carved by hand · Mong Kok", tone: "ginger" },
  { num: "05", cn: "繡花鞋", en: "Embroidered slippers, lotus", sub: "Indoor-only. They were never meant for the street.", price: 320, origin: "Embroidered by Ms. Lam, Sham Shui Po", tone: "red" },
  { num: "06", cn: "膠凳", en: "Plastic stool, red", sub: "The stool that has held up Hong Kong since 1972.", price: 28, origin: "Made in Hong Kong", tone: "red" },
  { num: "07", cn: "茶包", en: "Hong Kong milk-tea pack", sub: "Ceylon, Assam, and one secret leaf. Twenty bags.", price: 88, origin: "Blended in Tai Po", tone: "ginger" },
  { num: "08", cn: "編織袋", en: "Striped market bag", sub: "Carries six oranges or one entire dinner.", price: 58, origin: "Made in Kowloon", tone: "sky" },
  { num: "09", cn: "醬油瓶", en: "Soy-sauce cruet, glass", sub: "The one with the small chip in the lid. We sell only those.", price: 48, origin: "Old stock, Yau Ma Tei", tone: "jade" },
];

const toneStyles: Record<Item["tone"], { bg: string; ring: string }> = {
  jade: { bg: "bg-[#4a8b6f]", ring: "ring-[#4a8b6f]" },
  ginger: { bg: "bg-[#d97c39]", ring: "ring-[#d97c39]" },
  red: { bg: "bg-[#b81d23]", ring: "ring-[#b81d23]" },
  sky: { bg: "bg-[#7fb6cb]", ring: "ring-[#7fb6cb]" },
};

export default function KowloonDemo() {
  return (
    <main className="min-h-screen bg-[#f5ecd8] text-[#1c1816] relative overflow-x-hidden">
      {/* Vertical Chinese strip, right */}
      <div
        aria-hidden
        className="fixed right-3 top-0 bottom-0 hidden md:flex items-center justify-center text-[#b81d23] text-2xl opacity-90 z-10"
        style={{ fontFamily: "serif", writingMode: "vertical-rl" }}
      >
        王 氏 百 貨
      </div>

      {/* Top bar */}
      <header className="px-6 md:px-12 py-4 flex items-center justify-between border-b-2 border-[#1c1816] text-[11px] uppercase tracking-[0.3em]">
        <Link href="/lab" className="hover:underline underline-offset-4">
          /lab
        </Link>
        <span className="hidden md:inline">
          Catalogue No. 41 · Spring MMXXVI
        </span>
        <span className="text-[#b81d23]">★ 41 years</span>
      </header>

      {/* Neon-style hero */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 grid grid-cols-12 gap-6">
        {/* Decorative neon arc */}
        <div aria-hidden className="absolute -top-10 left-1/4 w-[600px] h-[200px] opacity-90 hidden md:block">
          <svg viewBox="0 0 600 200" className="w-full h-full">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 20 180 Q 300 -20 580 180"
              fill="none"
              stroke="#b81d23"
              strokeWidth="3"
              filter="url(#glow)"
            />
            <path
              d="M 60 180 Q 300 30 540 180"
              fill="none"
              stroke="#7fb6cb"
              strokeWidth="2"
              filter="url(#glow)"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="col-span-12 md:col-span-9 relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.35em] mb-4 text-[#b81d23] font-bold"
          >
            ★ 九龍 · Kowloon · 自一九八五
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[18vw] md:text-[14vw] font-black leading-[0.78] tracking-[-0.04em]"
            style={{ fontFamily: "serif" }}
          >
            王氏百貨
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mt-3"
          >
            Wong's <span className="italic font-serif font-normal">general goods.</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-12 md:col-span-3 self-end mt-6 md:mt-0"
        >
          <p className="text-sm leading-[1.6] max-w-xs">
            A small department store on Reclamation Street, Yau Ma Tei. Since
            1985. The catalogue is for goods we keep — the kind that should
            still be made, and still are.
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] mt-4 text-[#b81d23]">
            ★ Open seven days · 10 — 21
          </p>
        </motion.div>
      </section>

      {/* Sale strip */}
      <section className="bg-[#b81d23] text-[#f5ecd8] py-4 overflow-hidden border-y-2 border-[#1c1816]">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap text-lg font-bold tracking-tight">
          {Array.from({ length: 4 }).map((_, k) => (
            <div key={k} className="flex items-center gap-6 px-6">
              {[
                "★ SPRING CATALOGUE · MAY 2026",
                "九件好物",
                "★ NINE THINGS WE STAND BEHIND",
                "全部現貨",
                "★ FREE DELIVERY OVER HK$ 600",
                "九龍 · 港島",
              ].map((t, i) => (
                <span key={k + "-" + i}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      {/* Catalogue grid */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10 border-b-2 border-[#1c1816] pb-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b81d23] mb-2 font-bold">
              ★ Spring catalogue
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.02em]">
              九件好物{" "}
              <span className="italic font-serif font-normal">
                · Nine items we stand behind.
              </span>
            </h3>
          </div>
          <p className="hidden md:block text-[11px] uppercase tracking-[0.3em] opacity-70">
            Catalogue No. 41
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {goods.map((g, i) => (
            <motion.article
              key={g.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              {/* Product visual — tone block with the CN character */}
              <div
                className={`${toneStyles[g.tone].bg} aspect-square relative overflow-hidden flex items-center justify-center border-2 border-[#1c1816]`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='1.4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />
                <span
                  className="text-[9rem] font-black leading-none text-[#f5ecd8] select-none group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "serif" }}
                >
                  {g.cn[0]}
                </span>
                <span className="absolute top-2 left-2 text-[10px] uppercase tracking-widest font-mono text-[#f5ecd8]/85">
                  № {g.num}
                </span>
                <span className="absolute bottom-2 right-2 text-[10px] uppercase tracking-widest font-mono text-[#f5ecd8]/85">
                  {g.tone.toUpperCase()}
                </span>
              </div>

              {/* Caption */}
              <div className="mt-4 grid grid-cols-12 gap-2">
                <p
                  className="col-span-3 text-2xl font-bold"
                  style={{ fontFamily: "serif" }}
                >
                  {g.cn}
                </p>
                <div className="col-span-9">
                  <p className="text-lg font-bold tracking-tight leading-tight">
                    {g.en}
                  </p>
                  <p className="text-xs italic font-serif mt-1 text-[#1c1816]/75 leading-relaxed">
                    {g.sub}
                  </p>
                </div>
                <div className="col-span-12 mt-2 flex items-baseline justify-between border-t border-[#1c1816]/20 pt-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] opacity-70">
                    {g.origin}
                  </p>
                  <p className="font-mono text-base">
                    HK$ {g.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Master Wong */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#1c1816] text-[#f5ecd8] relative overflow-hidden">
        <div aria-hidden className="absolute top-10 left-1/3 text-9xl opacity-10" style={{ fontFamily: "serif" }}>
          ★ ★ ★
        </div>
        <div className="relative grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-5">
            {/* faux portrait — a single circle */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
              <div className="absolute inset-0 rounded-full bg-[#d97c39]" />
              <div className="absolute inset-4 rounded-full bg-[#b81d23]" />
              <div className="absolute inset-10 rounded-full bg-[#1c1816]" />
              <div
                className="absolute inset-0 flex items-center justify-center text-7xl font-black text-[#f5ecd8]"
                style={{ fontFamily: "serif" }}
              >
                王
              </div>
              <p
                className="absolute -bottom-2 left-0 right-0 text-center text-[10px] uppercase tracking-[0.3em] text-[#f5ecd8]/70"
              >
                ★ Master Wong, 1962 ★
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-[#d97c39] font-bold">
              ★ A note from the shop
            </p>
            <p className="font-serif italic text-2xl md:text-4xl leading-[1.45] tracking-[-0.005em]">
              "My father opened this shop in 1985. We only ever sold things
              that someone in our family used at home. We still do. If you
              find a thermos you like, it is because my mother liked one just
              like it."
            </p>
            <p className="text-sm uppercase tracking-[0.3em] mt-6 opacity-70">
              — Wong Ka-Ming, second generation · 王家明
            </p>
          </div>
        </div>
      </section>

      {/* Hours, address, etc. */}
      <section className="px-6 md:px-12 py-20 grid grid-cols-12 gap-6 border-y-2 border-[#1c1816]">
        <div className="col-span-12 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#b81d23] font-bold">
            ★ Hours · 營業時間
          </p>
          <p className="text-base leading-[1.7]">Mon — Sun</p>
          <p className="text-base leading-[1.7]">10:00 — 21:00</p>
          <p
            className="text-base leading-[1.7] mt-2"
            style={{ fontFamily: "serif" }}
          >
            星期一至日 · 早十至晚九
          </p>
        </div>
        <div className="col-span-12 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#b81d23] font-bold">
            ★ Address · 地址
          </p>
          <p className="text-base leading-[1.7]">182 Reclamation Street</p>
          <p className="text-base leading-[1.7]">Yau Ma Tei, Kowloon</p>
          <p className="text-base leading-[1.7]">Hong Kong</p>
          <p
            className="text-base leading-[1.7] mt-2"
            style={{ fontFamily: "serif" }}
          >
            九龍油麻地新填地街一八二號
          </p>
        </div>
        <div className="col-span-12 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#b81d23] font-bold">
            ★ Delivery · 送貨
          </p>
          <p className="text-base leading-[1.7]">Free over HK$ 600</p>
          <p className="text-base leading-[1.7]">Next-day · KLN & HK Island</p>
          <p className="text-base leading-[1.7]">2 days · NT</p>
          <p className="text-base leading-[1.7] opacity-70 mt-2">
            International by request only.
          </p>
        </div>
        <div className="col-span-12 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#b81d23] font-bold">
            ★ Newsletter
          </p>
          <input
            placeholder="your.email@dom"
            className="w-full bg-transparent border-b-2 border-[#1c1816] py-2 font-mono text-sm focus:outline-none focus:border-[#b81d23]"
          />
          <button className="mt-3 w-full bg-[#b81d23] text-[#f5ecd8] py-3 font-bold uppercase tracking-[0.25em] text-xs">
            訂閱 · Subscribe
          </button>
          <p className="text-[10px] uppercase tracking-[0.3em] mt-3 opacity-70">
            Four times a year. In Cantonese & English.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-10 grid grid-cols-12 gap-6 text-sm">
        <div className="col-span-6 md:col-span-3">
          <p
            className="text-3xl font-bold mb-1"
            style={{ fontFamily: "serif" }}
          >
            王氏百貨
          </p>
          <p className="text-base font-bold">Wong's</p>
          <p className="opacity-70 text-xs mt-2">est. 1985, Kowloon · ★★★</p>
        </div>
        <div className="col-span-6 md:col-span-6 text-center text-xs uppercase tracking-[0.3em] opacity-70 self-center">
          ★ A small department store ★
          <br />
          Nine things at a time, no more.
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right">
          <Link
            href="/lab"
            className="text-[10px] uppercase tracking-[0.3em] hover:underline underline-offset-4"
          >
            ← all demos
          </Link>
          <p className="text-[10px] mt-2 opacity-70">© MMXXVI</p>
        </div>
      </footer>
    </main>
  );
}
