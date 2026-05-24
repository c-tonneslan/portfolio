"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Cardish = {
  title: string;
  meta: string;
  body: string;
  accent: string;
  rotate: number;
  offset: { x: number; y: number };
  size: { w: number; h: number };
};

const cards: Cardish[] = [
  {
    title: "Reykjavík",
    meta: "Now · cloudy",
    body: "3°C feels like -1°C. North wind, 14 km/h. Aurora forecast: KP 5, viewable after 22:30 local.",
    accent: "from-sky-400/40 to-indigo-500/30",
    rotate: -6,
    offset: { x: -120, y: -40 },
    size: { w: 280, h: 180 },
  },
  {
    title: "Mail",
    meta: "12 new",
    body: "Anders Lie · re: trail map — let's ship the redacted version first, the audit can wait until June.",
    accent: "from-emerald-400/30 to-teal-500/30",
    rotate: 4,
    offset: { x: 140, y: -30 },
    size: { w: 320, h: 200 },
  },
  {
    title: "Now playing",
    meta: "Kelly Lee Owens",
    body: "Sunshine — 3:42 / 5:18.  Driving home through the fjord.",
    accent: "from-rose-400/40 to-orange-500/30",
    rotate: -3,
    offset: { x: -80, y: 130 },
    size: { w: 260, h: 160 },
  },
  {
    title: "Calendar",
    meta: "Tomorrow",
    body: "09:00  Design review — Aurora.  11:00  1:1 with Mira.  14:00  Hike, Esja.",
    accent: "from-violet-400/30 to-fuchsia-500/30",
    rotate: 7,
    offset: { x: 170, y: 150 },
    size: { w: 300, h: 180 },
  },
];

export default function SpatialDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0b1029] via-[#1a1140] to-[#0a0a1f] text-white">
      {/* Backdrop landscape */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-gradient-to-b from-orange-300/40 via-pink-400/20 to-transparent blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#04060d] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
        <svg
          viewBox="0 0 1200 200"
          className="absolute inset-x-0 bottom-0 w-full h-40 opacity-70"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 L0,120 L120,80 L220,140 L340,60 L460,130 L580,90 L700,150 L820,70 L940,120 L1080,80 L1200,140 L1200,200 Z"
            fill="#04060d"
          />
        </svg>
      </div>

      <div className="relative pt-28 pb-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 text-center">
            <p className="text-xs text-white/50 font-mono mb-2">/lab / spatial</p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Glass at depth
            </h1>
            <p className="text-sm md:text-base text-white/60 mt-3 max-w-xl mx-auto">
              Move your cursor. Each surface drifts at its own rate. No 3D
              library — just CSS transforms riding a single mouse signal.
            </p>
          </header>

          <div
            ref={ref}
            className="relative h-[540px] perspective-[1500px]"
            style={{ perspective: "1500px" }}
          >
            {cards.map((c, i) => {
              const depth = (i + 1) * 6;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30, rotate: c.rotate }}
                  animate={{ opacity: 1, y: 0, rotate: c.rotate }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.1,
                    type: "spring",
                  }}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    width: c.size.w,
                    height: c.size.h,
                    transform: `translate(calc(-50% + ${
                      c.offset.x + mouse.x * depth * 4
                    }px), calc(-50% + ${
                      c.offset.y + mouse.y * depth * 4
                    }px)) rotate(${c.rotate + mouse.x * 2}deg)`,
                    transition: "transform 0.18s ease-out",
                  }}
                >
                  <div
                    className={`relative w-full h-full rounded-3xl border border-white/25 bg-gradient-to-br ${c.accent} backdrop-blur-2xl shadow-2xl shadow-black/40 p-5 overflow-hidden`}
                  >
                    <div className="absolute inset-x-3 top-2 h-px bg-white/40" />
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-base font-semibold tracking-tight">
                        {c.title}
                      </p>
                      <span className="text-[11px] font-mono text-white/70">
                        {c.meta}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/85">
                      {c.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer dock */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-1 p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              {["Aa", "✦", "♪", "✉", "◷"].map((g) => (
                <div
                  key={g}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/30 to-white/5 border border-white/20 flex items-center justify-center text-base hover:scale-110 transition cursor-pointer"
                >
                  {g}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10 text-center">
            <Link
              href="/lab"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              ← all demos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
