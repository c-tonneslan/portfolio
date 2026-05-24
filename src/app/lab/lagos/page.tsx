"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const program = [
  { time: "12:00", title: "Opening — Drummers of Ìbàdàn", stage: "PINK", color: "#ed4e8d" },
  { time: "14:30", title: "Print workshop · Saki Mafundikwa", stage: "OCHRE", color: "#e9a93a" },
  { time: "16:00", title: "Talk · Yinka Ilori on joy as a method", stage: "PINK", color: "#ed4e8d" },
  { time: "18:00", title: "Sade Adu · in conversation", stage: "CYAN", color: "#2eb4c1" },
  { time: "20:30", title: "Asa, live with the EDO ensemble", stage: "PINK", color: "#ed4e8d" },
  { time: "22:00", title: "DJ Cuppy · open-air set", stage: "LIME", color: "#b4d943" },
  { time: "23:30", title: "Burna Boy · headliner", stage: "PINK", color: "#ed4e8d" },
  { time: "01:30", title: "After hours — Show Dem Camp", stage: "PURPLE", color: "#5b2d8b" },
];

const days = [
  { d: 1, date: "21 / 11", name: "ÌBẸ̀RẸ̀", en: "Beginnings", color: "from-[#ed4e8d] to-[#e9a93a]" },
  { d: 2, date: "22 / 11", name: "OWÉ", en: "Proverbs", color: "from-[#2eb4c1] to-[#5b2d8b]" },
  { d: 3, date: "23 / 11", name: "IRÒYÌN", en: "News, & telling it", color: "from-[#b4d943] to-[#2eb4c1]" },
];

const Zigzag = ({ color = "#1a1410", className = "" }: { color?: string; className?: string }) => (
  <svg viewBox="0 0 200 16" className={className} preserveAspectRatio="none">
    <polyline
      points="0,12 20,4 40,12 60,4 80,12 100,4 120,12 140,4 160,12 180,4 200,12"
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

export default function LagosDemo() {
  return (
    <main className="min-h-screen bg-[#f4ecd8] text-[#1a1410] relative overflow-x-hidden">
      {/* Marquee */}
      <div className="bg-[#1a1410] text-[#f4ecd8] py-3 overflow-hidden border-b-4 border-[#ed4e8d]">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap text-base md:text-lg font-black tracking-tight">
          {Array.from({ length: 4 }).map((_, k) => (
            <div key={k} className="flex items-center gap-6 px-6">
              {[
                "★ AYÒ FESTIVAL ★",
                "LAGOS · NIGERIA",
                "21 · 22 · 23 NOVEMBER 2026",
                "★ ÌBÀDÀN STAGE · LEKKI",
                "84 ARTISTS · 12 COUNTRIES",
                "★ ÒRÌRÌRỌ̀ ★",
              ].map((t, i) => (
                <span key={k + "-" + i}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      {/* Top nav */}
      <header className="px-6 md:px-10 py-5 flex items-center justify-between text-sm font-bold">
        <Link
          href="/lab"
          className="font-black text-xl tracking-tighter flex items-center gap-2"
        >
          <span className="w-3 h-3 rounded-full bg-[#ed4e8d]" />
          AYÒ <span className="font-serif italic font-normal">'26</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {["Programme", "Artists", "Tickets", "About", "Contact"].map((l) => (
            <a key={l} className="hover:text-[#ed4e8d]">
              {l}
            </a>
          ))}
        </div>
        <button className="px-4 py-2 bg-[#ed4e8d] text-[#f4ecd8] rounded-full font-black">
          Tickets ↗
        </button>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-12 pb-32 grid grid-cols-12 gap-6">
        {/* Geometric decorations */}
        <div aria-hidden className="absolute top-6 right-1/4 w-24 h-24 rounded-full bg-[#e9a93a]" />
        <div aria-hidden className="absolute top-32 right-12 w-36 h-36 bg-[#2eb4c1] rotate-12" />
        <div aria-hidden className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#5b2d8b]" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />

        <div className="col-span-12 md:col-span-9 relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] mb-6 font-black"
          >
            ⸺ Third edition · Lekki, Lagos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[22vw] md:text-[16vw] font-black leading-[0.78] tracking-[-0.045em]"
          >
            AYÒ.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif italic text-3xl md:text-5xl mt-3 text-[#5b2d8b] tracking-tight"
          >
            joy, in three days.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="col-span-12 md:col-span-3 self-end space-y-2 text-sm"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-black">
            21 — 23 / 11 / 2026
          </p>
          <p>Tafawa Balewa Square</p>
          <p>Lekki, Lagos</p>
          <p className="mt-3 opacity-75 text-xs">
            Five stages, two markets, one river.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="col-span-12 mt-10 max-w-3xl"
        >
          <p className="text-lg md:text-xl leading-[1.6]">
            <span className="bg-[#ed4e8d] text-[#f4ecd8] px-2 font-black">AYÒ</span>
            {" "}is the Yorùbá word for joy. The festival takes its name
            seriously. Three days, eighty-four artists, two food markets, a
            sunrise drumming circle. Bring shoes you can dance in.
          </p>
        </motion.div>
      </section>

      {/* Zig-zag separator */}
      <Zigzag className="w-full h-3 text-[#1a1410]" />

      {/* Days */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-10 border-b-4 border-[#1a1410] pb-3">
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em]">
            Three days.
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] hidden md:block">
            Each with its own weather.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {days.map((d, i) => (
            <motion.article
              key={d.d}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative aspect-[4/5] bg-gradient-to-br ${d.color} p-6 flex flex-col justify-between text-[#1a1410] cursor-pointer overflow-hidden group`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-10 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='1.4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] font-black opacity-90">
                  Day 0{d.d}
                </p>
                <p className="font-mono text-base mt-1">{d.date}</p>
              </div>
              <div className="relative">
                <p className="text-6xl md:text-7xl font-black tracking-[-0.04em] leading-[0.85]">
                  {d.name}
                </p>
                <p className="font-serif italic text-xl md:text-2xl mt-3">
                  {d.en}.
                </p>
              </div>
              {/* zig zag bottom */}
              <Zigzag className="absolute bottom-0 left-0 right-0 h-3" color="#1a1410" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* Programme — day one */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-[#1a1410] text-[#f4ecd8] relative overflow-hidden">
        <div aria-hidden className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#ed4e8d] opacity-20 blur-2xl" />
        <div aria-hidden className="absolute bottom-10 right-1/4 w-32 h-32 bg-[#b4d943] opacity-20 blur-2xl" />

        <div className="flex items-end justify-between mb-10 border-b border-[#f4ecd8]/30 pb-3 relative">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-3 text-[#ed4e8d] font-black">
              ★ Day 01 · ÌBẸ̀RẸ̀
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.025em]">
              Saturday, 21 November.
            </h2>
          </div>
          <p className="hidden md:block text-xs uppercase tracking-[0.3em] opacity-70">
            12:00 — 04:00
          </p>
        </div>

        <ul className="relative">
          {program.map((p, i) => (
            <motion.li
              key={p.time}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-3 border-b border-[#f4ecd8]/20 py-4 items-baseline hover:bg-[#f4ecd8]/5 cursor-pointer group"
            >
              <span className="col-span-2 font-mono text-base text-[#e9a93a]">
                {p.time}
              </span>
              <div className="col-span-7 md:col-span-7">
                <p className="text-lg md:text-2xl font-bold tracking-tight group-hover:italic group-hover:font-serif group-hover:font-normal transition-all">
                  {p.title}
                </p>
              </div>
              <span
                className="col-span-3 text-right font-black text-xs uppercase tracking-[0.2em] py-1 px-2 rounded-full self-center"
                style={{ backgroundColor: p.color, color: "#1a1410" }}
              >
                {p.stage}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Featured artists */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-10 border-b-4 border-[#1a1410] pb-3">
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em]">
            On stage<span className="text-[#ed4e8d]">.</span>
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] hidden md:block">
            Eighty-four artists · twelve countries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1410]/30 border border-[#1a1410]">
          {[
            { name: "Burna Boy", origin: "Port Harcourt", tone: "#ed4e8d" },
            { name: "Asa", origin: "Lagos / Paris", tone: "#e9a93a" },
            { name: "Sade", origin: "Ibadan / London", tone: "#2eb4c1" },
            { name: "DJ Cuppy", origin: "Lagos", tone: "#b4d943" },
            { name: "Show Dem Camp", origin: "Lagos", tone: "#5b2d8b" },
            { name: "Tems", origin: "Lagos", tone: "#ed4e8d" },
            { name: "Femi Kuti", origin: "Lagos", tone: "#e9a93a" },
            { name: "Wizkid", origin: "Lagos", tone: "#2eb4c1" },
            { name: "Kelechi", origin: "Enugu", tone: "#b4d943" },
            { name: "Mr. Eazi", origin: "Lagos", tone: "#5b2d8b" },
            { name: "Tiwa Savage", origin: "Lagos", tone: "#ed4e8d" },
            { name: "+ 73 more", origin: "Across the continent", tone: "#1a1410" },
          ].map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="p-5 hover:bg-[#1a1410] hover:text-[#f4ecd8] transition-colors cursor-pointer relative overflow-hidden group"
              style={{ backgroundColor: i === 11 ? "#1a1410" : "#f4ecd8", color: i === 11 ? "#f4ecd8" : "#1a1410" }}
            >
              <p
                className="absolute top-3 right-3 w-3 h-3 rounded-full"
                style={{ backgroundColor: a.tone }}
              />
              <p className="font-black text-xl md:text-2xl tracking-tight mt-4">
                {a.name}
              </p>
              <p className="text-xs mt-1 opacity-75">{a.origin}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tickets */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-[#ed4e8d] text-[#1a1410] relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#e9a93a]" />
        <div aria-hidden className="absolute top-10 left-1/4 w-32 h-32 bg-[#2eb4c1] rounded-full" />
        <div aria-hidden className="absolute bottom-10 left-10 w-24 h-24 bg-[#1a1410]" />
        <div className="relative grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] mb-4 font-black">
              ⸺ Tickets
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.03em] leading-[0.95]">
              Pay what
              <br />
              <span className="font-serif italic font-normal">you can,</span>
              <br />
              if you can.
            </h2>
            <p className="font-serif italic text-lg md:text-xl mt-6 max-w-md leading-relaxed">
              Day passes start at ₦ 8 000 because we believe that's the cost
              of a meal at a good place. The festival is partly funded by
              the patron tier. If you can pay more, please do.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
            {[
              { name: "Day", price: "₦ 8,000", note: "one day, your choice" },
              { name: "Weekend", price: "₦ 18,000", note: "all three days" },
              { name: "Student", price: "₦ 4,000", note: "with valid ID" },
              { name: "Patron", price: "₦ 80,000", note: "supports two students" },
            ].map((t) => (
              <div
                key={t.name}
                className="border-2 border-[#1a1410] p-4 bg-[#f4ecd8] hover:bg-[#1a1410] hover:text-[#f4ecd8] cursor-pointer transition"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] font-black mb-1">
                  {t.name}
                </p>
                <p className="font-mono text-xl font-bold">{t.price}</p>
                <p className="text-[10px] mt-1 opacity-70">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-12 grid grid-cols-12 gap-6 text-sm bg-[#1a1410] text-[#f4ecd8]">
        <div className="col-span-12 md:col-span-4">
          <p className="text-3xl font-black tracking-tighter mb-2">
            AYÒ <span className="font-serif italic font-normal text-[#ed4e8d]">'26</span>
          </p>
          <p className="opacity-70 max-w-xs">
            A festival of music, design, & joy. Third edition. Curated by
            Olabisi Adeyemi and the AYÒ team.
          </p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.3em] text-[10px] mb-2 font-black">
            Venue
          </p>
          <p>Tafawa Balewa Square</p>
          <p>Lekki Phase 1, Lagos</p>
          <p>Nigeria</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.3em] text-[10px] mb-2 font-black">
            Contact
          </p>
          <p>jọwọ@ayọfest.ng</p>
          <p>+234 80 33 12 14 18</p>
        </div>
        <div className="col-span-12 md:col-span-2 md:text-right">
          <Link
            href="/lab"
            className="text-[10px] uppercase tracking-[0.3em] hover:text-[#ed4e8d]"
          >
            ← all demos
          </Link>
        </div>
      </footer>
    </main>
  );
}
