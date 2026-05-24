"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Phone({
  rotate,
  z,
  delay,
  children,
}: {
  rotate: number;
  z: number;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.7, delay, type: "spring", bounce: 0.2 }}
      style={{ zIndex: z }}
      className="relative"
    >
      <div className="w-[280px] h-[580px] rounded-[44px] bg-black p-2 shadow-2xl shadow-black/60 border border-white/10">
        <div className="w-full h-full rounded-[36px] overflow-hidden relative">
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-20" />
          {/* Status bar time */}
          <div className="absolute top-3 left-5 text-[11px] font-semibold text-white z-30">
            9:41
          </div>
          <div className="absolute top-3 right-5 z-30 flex gap-1 items-center">
            <div className="w-3 h-2 bg-white rounded-sm" />
            <div className="w-4 h-2 border border-white rounded-sm" />
          </div>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function HandheldDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#161024] to-[#0a0a14] text-white pt-24 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <header className="mb-14 text-center">
          <p className="text-xs text-white/50 font-mono mb-2">/lab / handheld</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Three screens, one app
          </h1>
          <p className="text-sm md:text-base text-white/60 mt-3 max-w-xl mx-auto">
            Mobile patterns lifted from the apps people actually use every day
            — feed, messaging, profile. Pure CSS, no images.
          </p>
        </header>

        <div className="flex items-center justify-center gap-[-40px] flex-wrap md:flex-nowrap min-h-[640px]">
          {/* Phone 1 — Feed */}
          <div className="md:-mr-12">
            <Phone rotate={-8} z={1} delay={0.1}>
              <div className="w-full h-full bg-gradient-to-b from-amber-50 to-rose-50 text-zinc-900 pt-10 px-4 pb-6 overflow-hidden">
                <div className="flex items-center justify-between mb-4 mt-2">
                  <h2 className="text-2xl font-bold tracking-tight">Today</h2>
                  <div className="w-8 h-8 rounded-full bg-zinc-900" />
                </div>
                <div className="space-y-3">
                  {[
                    {
                      who: "Mira P.",
                      where: "Brooklyn",
                      body: "morning run, fog still hanging over the bridge",
                      heart: 24,
                    },
                    {
                      who: "Diego O.",
                      where: "CDMX",
                      body: "found a tiny taqueria in Roma Norte, life changed",
                      heart: 81,
                    },
                    {
                      who: "Anders L.",
                      where: "Oslo",
                      body: "ski season is over, time to think about boats",
                      heart: 12,
                    },
                  ].map((p) => (
                    <div
                      key={p.who}
                      className="bg-white rounded-2xl p-3 shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-orange-400" />
                        <div>
                          <p className="text-xs font-semibold">{p.who}</p>
                          <p className="text-[10px] text-zinc-500">{p.where}</p>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-700">
                        {p.body}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-[10px] text-zinc-500">
                        <span>♡ {p.heart}</span>
                        <span>↺ share</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Tab bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 flex items-center justify-around shadow-lg">
                  {["◉", "◔", "✚", "♡", "○"].map((g, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
                        i === 0 ? "bg-zinc-900 text-white" : "text-zinc-500"
                      }`}
                    >
                      {g}
                    </div>
                  ))}
                </div>
              </div>
            </Phone>
          </div>

          {/* Phone 2 — Chat (center, elevated) */}
          <div className="md:-mt-12 md:z-10">
            <Phone rotate={0} z={3} delay={0.25}>
              <div className="w-full h-full bg-[#0e0e14] text-white pt-10 px-3 pb-3 flex flex-col">
                <div className="flex items-center gap-3 px-2 py-3 border-b border-white/10">
                  <button className="text-white/60 text-lg">‹</button>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Lena Müller</p>
                    <p className="text-[10px] text-emerald-400">
                      online · typing…
                    </p>
                  </div>
                  <span className="text-white/40 text-lg">⋯</span>
                </div>
                <div className="flex-1 flex flex-col gap-2 py-3 px-1 overflow-hidden">
                  <p className="text-[10px] text-white/40 text-center my-1">
                    Yesterday
                  </p>
                  <div className="self-start max-w-[80%] bg-white/10 px-3 py-2 rounded-2xl rounded-bl-md text-xs">
                    did you ever push the figma file to the team
                  </div>
                  <div className="self-end max-w-[80%] bg-gradient-to-br from-violet-500 to-fuchsia-500 px-3 py-2 rounded-2xl rounded-br-md text-xs">
                    yeah this morning, look in the shared folder
                  </div>
                  <div className="self-end max-w-[80%] bg-gradient-to-br from-violet-500 to-fuchsia-500 px-3 py-2 rounded-2xl rounded-br-md text-xs">
                    let me know if the export looks weird, the gradients keep
                    banding
                  </div>
                  <p className="text-[10px] text-white/40 text-center my-1">
                    Today · 9:38
                  </p>
                  <div className="self-start max-w-[80%] bg-white/10 px-3 py-2 rounded-2xl rounded-bl-md text-xs">
                    looks great, going to use it in the deck
                  </div>
                  <div className="self-start flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse-soft" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse-soft" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse-soft" />
                  </div>
                </div>
                <div className="flex items-center gap-2 px-1">
                  <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base">
                    +
                  </button>
                  <div className="flex-1 bg-white/10 rounded-full px-4 py-2 text-xs text-white/40">
                    Message…
                  </div>
                  <button className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-sm">
                    ↑
                  </button>
                </div>
              </div>
            </Phone>
          </div>

          {/* Phone 3 — Profile */}
          <div className="md:-ml-12">
            <Phone rotate={8} z={1} delay={0.4}>
              <div className="w-full h-full bg-emerald-50 text-emerald-950 pt-10 px-4 pb-6 overflow-hidden">
                <div className="flex justify-between items-center my-2">
                  <button className="text-base">‹</button>
                  <p className="text-sm font-semibold">Profile</p>
                  <button className="text-base">⋯</button>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 ring-4 ring-white" />
                  <h2 className="text-xl font-bold mt-3">Eyrún H.</h2>
                  <p className="text-xs text-emerald-700">
                    Reykjavík · running, slowly
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button className="px-4 py-1.5 rounded-full bg-emerald-700 text-white text-xs font-semibold">
                      Follow
                    </button>
                    <button className="px-4 py-1.5 rounded-full border border-emerald-700/40 text-xs font-semibold">
                      Message
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mt-5 text-center">
                  {[
                    ["Runs", "42"],
                    ["km", "318"],
                    ["Friends", "61"],
                  ].map(([l, n]) => (
                    <div key={l} className="bg-white rounded-xl py-2">
                      <p className="text-base font-bold">{n}</p>
                      <p className="text-[10px] text-emerald-700">{l}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-white rounded-2xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold">May weekly</p>
                    <p className="text-[10px] text-emerald-700">+8%</p>
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-600 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Phone>
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
    </main>
  );
}
