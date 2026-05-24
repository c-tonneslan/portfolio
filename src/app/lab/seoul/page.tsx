"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Artist = {
  name: string;
  origin: string;
  day: 1 | 2 | 3;
  set: string;
  tag: "headline" | "main" | "open";
};

const artists: Artist[] = [
  { name: "NEON FAUNA", origin: "Seoul", day: 1, set: "23:30 — 01:00", tag: "headline" },
  { name: "Yumi Tak", origin: "Berlin / Seoul", day: 1, set: "22:00 — 23:30", tag: "main" },
  { name: "404.zero", origin: "Moscow", day: 1, set: "20:30 — 22:00", tag: "main" },
  { name: "POMEGRANATE.exe", origin: "Tokyo", day: 1, set: "19:00 — 20:30", tag: "open" },
  { name: "MINTLINE", origin: "Hong Kong", day: 1, set: "17:30 — 19:00", tag: "open" },

  { name: "Eunji & The Glow", origin: "Seoul", day: 2, set: "23:30 — 01:00", tag: "headline" },
  { name: "Vapor Seoul", origin: "Seoul", day: 2, set: "22:00 — 23:30", tag: "main" },
  { name: "DJ Ji-hoon", origin: "Busan", day: 2, set: "20:30 — 22:00", tag: "main" },
  { name: "GLASS PRINCE", origin: "Singapore", day: 2, set: "19:00 — 20:30", tag: "open" },
  { name: "Solène Park", origin: "Paris / Seoul", day: 2, set: "17:30 — 19:00", tag: "open" },

  { name: "HYPERLIME", origin: "Taipei", day: 3, set: "23:30 — 01:00", tag: "headline" },
  { name: "moon.exe", origin: "Seoul", day: 3, set: "22:00 — 23:30", tag: "main" },
  { name: "Akira Voss", origin: "Tokyo", day: 3, set: "20:30 — 22:00", tag: "main" },
  { name: "PIA / SOFT BRUTE", origin: "Bangkok", day: 3, set: "19:00 — 20:30", tag: "open" },
  { name: "RIN", origin: "Seoul", day: 3, set: "17:30 — 19:00", tag: "open" },
];

const days = [
  { d: 1, date: "14·08", title: "OPENING", color: "from-fuchsia-400 via-pink-300 to-violet-400" },
  { d: 2, date: "15·08", title: "PEAK", color: "from-cyan-300 via-sky-400 to-indigo-400" },
  { d: 3, date: "16·08", title: "CLOSING", color: "from-lime-300 via-emerald-300 to-teal-400" },
];

export default function SeoulDemo() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [now, setNow] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // simulate a "now playing" cycle
  useEffect(() => {
    const t = setInterval(() => setNow((n) => (n + 1) % artists.length), 4000);
    return () => clearInterval(t);
  }, []);
  const playing = artists[now];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Top bar */}
      <nav className="relative z-30 px-6 md:px-10 py-5 flex items-center justify-between text-sm">
        <Link href="/lab" className="font-bold tracking-[-0.02em] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse-soft" />
          PULSE<span className="text-fuchsia-400">/</span>26
        </Link>
        <div className="hidden md:flex items-center gap-7 text-white/80">
          {["Lineup", "Schedule", "Venue", "Travel", "Press"].map((l) => (
            <a key={l} className="hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </div>
        <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90">
          Tickets ↗
        </button>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative px-6 md:px-10 pt-12 pb-28 overflow-hidden min-h-[80vh] flex flex-col justify-between"
      >
        {/* Holographic background */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-1/4 left-0 w-[100%] h-[80%] rounded-full blur-[100px] opacity-60"
            style={{
              background:
                "conic-gradient(from 90deg, #ff6bd6, #6bd1ff, #b8ff6b, #ff6bd6)",
              transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
              transition: "transform 0.4s ease-out",
            }}
          />
          <div
            className="absolute -bottom-1/4 right-0 w-[80%] h-[80%] rounded-full blur-[100px] opacity-50"
            style={{
              background:
                "conic-gradient(from 270deg, #b8ff6b, #ff6bd6, #6bd1ff, #b8ff6b)",
              transform: `translate(${-mouse.x * 30}px, ${-mouse.y * 30}px)`,
              transition: "transform 0.4s ease-out",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* Top meta strip */}
        <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.3em]">
          <span>SEOUL · KOR</span>
          <span>14 · 15 · 16 / 08 / 2026</span>
          <span>JAMSIL OLYMPIC PARK</span>
        </div>

        {/* Hero name — chrome with cursor reflection */}
        <div className="relative my-auto py-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative text-[28vw] md:text-[22vw] leading-[0.78] tracking-[-0.06em] font-black select-none"
            style={{
              background: `linear-gradient(${135 + mouse.x * 30}deg, #ffb6f0 0%, #b6d6ff 25%, #f0ffb6 50%, #ffb6f0 75%, #b6d6ff 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "background 0.3s ease-out",
              filter: "drop-shadow(0 0 30px rgba(255,182,240,0.35))",
            }}
          >
            PULSE
          </motion.h1>
          {/* Outline overlay */}
          <h1
            aria-hidden
            className="absolute inset-0 text-[28vw] md:text-[22vw] leading-[0.78] tracking-[-0.06em] font-black select-none pointer-events-none"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.15)",
              color: "transparent",
              transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            PULSE
          </h1>
        </div>

        {/* Hero footer */}
        <div className="relative grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-6">
            <p className="text-2xl md:text-3xl tracking-[-0.02em] leading-tight font-medium max-w-md">
              Three nights of electronic music, light, and a kind of weather
              that only happens in Jamsil in August.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-8 text-sm uppercase tracking-[0.25em] space-y-1 text-white/80">
            <p>42 artists</p>
            <p>3 stages</p>
            <p>Until sunrise</p>
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <button className="px-5 py-3 rounded-full bg-white text-black font-bold hover:scale-[1.03] transition">
              Get tickets ↗
            </button>
          </div>
        </div>
      </section>

      {/* Now playing strip */}
      <section className="relative border-y border-white/15 bg-black/60 backdrop-blur">
        <div className="px-6 md:px-10 py-5 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-fuchsia-300">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse-soft" />
              Now on the main stage
            </span>
          </div>
          <div className="flex-1 min-w-[200px]">
            <motion.p
              key={playing.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl font-bold tracking-tight"
            >
              {playing.name}
            </motion.p>
            <p className="text-xs text-white/60">
              {playing.origin} · {playing.set}
            </p>
          </div>
          {/* fake waveform */}
          <div className="flex items-end gap-0.5 h-8">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="w-0.5 bg-gradient-to-t from-fuchsia-400 to-cyan-400 rounded-full"
                style={{
                  height: `${20 + Math.sin((i + now) / 1.4) * 50 + 25}%`,
                  animation: `wave 1.${i % 9}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes wave { from { transform: scaleY(0.4); } to { transform: scaleY(1); } }
        `}</style>
      </section>

      {/* Day cards */}
      <section className="px-6 md:px-10 py-24">
        <div className="flex items-end justify-between mb-10 border-b border-white/15 pb-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">
            Three days.{" "}
            <span className="text-white/40">Three weathers.</span>
          </h2>
          <span className="text-xs uppercase tracking-widest text-white/50">
            ↓ Scroll the lineup
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {days.map((d) => (
            <motion.article
              key={d.d}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden p-7 min-h-[280px] flex flex-col cursor-pointer group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${d.color} opacity-90 group-hover:opacity-100 transition`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.4),transparent_60%)]" />
              <div className="relative z-10 text-black">
                <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-80">
                  Day 0{d.d} · {d.date}
                </p>
                <p className="text-6xl md:text-7xl font-black tracking-[-0.04em] mt-3 leading-none">
                  {d.title}
                </p>
                <p className="text-sm mt-auto pt-8 max-w-xs leading-relaxed">
                  {artists.filter((a) => a.day === d.d).length} artists ·{" "}
                  {artists.find((a) => a.day === d.d && a.tag === "headline")
                    ?.name}{" "}
                  closes the night.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Lineup */}
      <section className="px-6 md:px-10 pb-24">
        <div className="flex items-end justify-between mb-10 border-b border-white/15 pb-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">
            Lineup<span className="text-fuchsia-400">.</span>
          </h2>
          <span className="text-xs uppercase tracking-widest text-white/50">
            42 artists · 3 nights
          </span>
        </div>

        <div className="space-y-1.5">
          {artists.map((a, i) => (
            <motion.div
              key={a.name + i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.02 }}
              className="grid grid-cols-12 gap-4 items-baseline py-3 px-3 rounded-xl border border-white/10 hover:border-white/40 hover:bg-white/[0.04] transition group cursor-pointer"
            >
              <span className="col-span-1 font-mono text-xs text-white/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`col-span-5 md:col-span-5 ${
                  a.tag === "headline"
                    ? "text-3xl md:text-4xl font-black tracking-[-0.03em]"
                    : a.tag === "main"
                      ? "text-xl md:text-2xl font-bold tracking-tight"
                      : "text-base md:text-lg font-medium"
                } group-hover:text-fuchsia-300 transition-colors truncate`}
              >
                {a.name}
              </span>
              <span className="hidden md:block col-span-3 text-xs text-white/55 uppercase tracking-wider">
                {a.origin}
              </span>
              <span className="col-span-3 md:col-span-2 text-right md:text-left font-mono text-xs text-cyan-300">
                {a.set}
              </span>
              <span className="col-span-3 md:col-span-1 text-right text-[10px] uppercase tracking-widest text-white/50">
                D 0{a.day}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tickets */}
      <section className="px-6 md:px-10 pb-24">
        <div className="rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.06] to-transparent backdrop-blur p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300 mb-5">
            Tickets · on sale now
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Single", price: "₩ 165,000", note: "One day of your choice. Pick at the gate.", main: false },
              { name: "Three-day", price: "₩ 380,000", note: "All three nights. The way it's meant to be.", main: true },
              { name: "Patron", price: "₩ 920,000", note: "Three days, near-stage standing, plus the after-after.", main: false },
            ].map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-6 ${
                  t.main
                    ? "bg-white text-black shadow-2xl shadow-fuchsia-500/30"
                    : "bg-white/[0.04] border border-white/12"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-widest ${
                    t.main ? "text-fuchsia-600" : "text-white/60"
                  }`}
                >
                  {t.name}
                </p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter mt-3">
                  {t.price}
                </p>
                <p
                  className={`text-sm mt-3 leading-relaxed max-w-xs ${
                    t.main ? "text-black/70" : "text-white/65"
                  }`}
                >
                  {t.note}
                </p>
                <button
                  className={`mt-6 w-full py-3 rounded-full font-bold text-sm ${
                    t.main
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {t.main ? "Buy 3-day ↗" : "Get this →"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue map (faked) */}
      <section className="px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-3">
              Venue
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[0.95]">
              Jamsil
              <br />
              <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Olympic Park.
              </span>
            </h2>
            <p className="mt-6 text-white/75 leading-relaxed max-w-md">
              Three stages set into the park. The Main Bowl is the 1988
              gymnastics arena, gutted and rebuilt for sound. Sub-stages are
              outdoor and run until sunrise.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-[16/10] rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 border border-white/12 relative overflow-hidden">
              <svg viewBox="0 0 400 250" className="w-full h-full">
                <defs>
                  <pattern
                    id="dots"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="2"
                      cy="2"
                      r="1"
                      fill="rgba(255,255,255,0.15)"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="250" fill="url(#dots)" />
                {/* Paths */}
                <path
                  d="M 30 220 Q 100 180 180 200 T 350 130"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                <path
                  d="M 30 130 Q 110 80 200 90 T 370 50"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                />
                {/* Stages */}
                {[
                  { x: 100, y: 120, label: "MAIN", c: "#ff6bd6" },
                  { x: 250, y: 80, label: "SUB / KINETIC", c: "#6bd1ff" },
                  { x: 310, y: 180, label: "GARDEN", c: "#b8ff6b" },
                ].map((s) => (
                  <g key={s.label}>
                    <circle
                      cx={s.x}
                      cy={s.y}
                      r="22"
                      fill={s.c}
                      opacity="0.7"
                    />
                    <circle
                      cx={s.x}
                      cy={s.y}
                      r="10"
                      fill={s.c}
                    />
                    <text
                      x={s.x}
                      y={s.y + 38}
                      fontSize="9"
                      fontFamily="ui-monospace, monospace"
                      fill="white"
                      textAnchor="middle"
                      letterSpacing="2"
                    >
                      {s.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-10 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2">
          <p className="text-2xl font-black tracking-tight mb-3">
            PULSE<span className="text-fuchsia-400">/</span>26
          </p>
          <p className="text-white/65 max-w-xs leading-relaxed">
            서울 · 14·15·16 / 08 / 2026 · 잠실 올림픽 공원
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
            Find us
          </p>
          <p>pulse@seoul.kr</p>
          <p>Instagram · @pulse.seoul</p>
        </div>
        <div className="md:text-right">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
            Site
          </p>
          <Link href="/lab" className="hover:text-fuchsia-300">
            ← back to /lab
          </Link>
        </div>
      </footer>
    </main>
  );
}
