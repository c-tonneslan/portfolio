"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const txns = [
  { who: "Hverdagsbakeriet", cat: "Coffee", amt: -6.5, ago: "9:14 am" },
  { who: "Salary · Glide", cat: "Income", amt: 4280, ago: "Yesterday" },
  { who: "Strætó · pass", cat: "Transit", amt: -42, ago: "Yesterday" },
  { who: "Tjarnarbíó", cat: "Friends", amt: -28, ago: "Thu" },
  { who: "Bónus", cat: "Groceries", amt: -71.2, ago: "Wed" },
];

const claySoft =
  "shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7),inset_-3px_-3px_8px_rgba(244,114,182,0.25),6px_6px_14px_rgba(244,114,182,0.35)]";
const claySolid =
  "shadow-[6px_6px_14px_rgba(244,114,182,0.35),-3px_-3px_10px_rgba(255,255,255,0.9)]";

export default function ClayDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-amber-50 to-rose-200 text-rose-950 pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs text-rose-700/70 font-medium mb-1">
              /lab / clay
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Tofu — your money, gently
            </h1>
            <p className="text-sm text-rose-700/80 mt-1">
              Good morning, Eyrún. Here's your week.
            </p>
          </div>
          <div
            className={`w-12 h-12 rounded-2xl bg-white ${claySolid} flex items-center justify-center text-base font-bold`}
          >
            E
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Big balance */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:col-span-2 rounded-[28px] bg-gradient-to-br from-rose-300 to-rose-400 text-white p-7 ${claySolid} relative overflow-hidden`}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl" />
            <p className="text-xs uppercase tracking-widest opacity-80 mb-2">
              Total balance
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight">
                kr 184,210
              </span>
            </div>
            <p className="text-sm opacity-90 mt-1">
              Across 3 accounts · updated 4 min ago
            </p>

            <div className="mt-6 flex gap-2">
              {["Send", "Request", "Split", "Stash"].map((b) => (
                <button
                  key={b}
                  className={`px-4 py-2 rounded-2xl bg-white/90 text-rose-700 text-sm font-semibold ${claySolid} hover:scale-[1.03] transition`}
                >
                  {b}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Goal */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className={`rounded-[28px] bg-amber-200/80 p-6 ${claySolid}`}
          >
            <p className="text-xs uppercase tracking-widest text-amber-800/80 mb-2">
              Iceland → Tokyo
            </p>
            <p className="text-2xl font-bold mb-3">kr 32,400 / 60,000</p>
            <div
              className={`h-3 rounded-full bg-white ${claySoft} overflow-hidden`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-rose-500"
                style={{ width: "54%" }}
              />
            </div>
            <p className="text-xs text-amber-900/70 mt-3">
              54% there. At your current pace, ready by mid-July.
            </p>
          </motion.div>

          {/* Spend by category */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`md:col-span-2 rounded-[28px] bg-white p-6 ${claySolid}`}
          >
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm font-semibold">Where it went · May</p>
              <span className="text-xs text-rose-700/70">kr 9,820 spent</span>
            </div>
            <div className="space-y-4">
              {[
                ["Groceries", 42, "from-rose-400 to-rose-500"],
                ["Eating out", 28, "from-orange-400 to-amber-500"],
                ["Transit", 14, "from-violet-400 to-fuchsia-500"],
                ["Friends", 9, "from-sky-400 to-indigo-500"],
                ["Other", 7, "from-emerald-400 to-teal-500"],
              ].map(([name, pct, grad]) => (
                <div key={name as string} className="flex items-center gap-3">
                  <span className="text-sm w-24 font-medium">{name}</span>
                  <div
                    className={`flex-1 h-3 rounded-full bg-rose-100 ${claySoft} overflow-hidden`}
                  >
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${grad}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono text-rose-700/70 w-10 text-right">
                    {pct}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className={`rounded-[28px] bg-gradient-to-br from-emerald-200 to-teal-300 text-emerald-950 p-6 ${claySolid} relative overflow-hidden`}
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/30 blur-2xl" />
            <p className="text-xs uppercase tracking-widest opacity-80 mb-2">
              Under budget
            </p>
            <p className="text-5xl font-bold">12 days</p>
            <p className="text-sm mt-2 opacity-90">
              Longest stretch this year. Keep going.
            </p>
            <div className="mt-4 flex gap-1.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-emerald-700/80"
                />
              ))}
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-white/60 border border-emerald-700/30"
                />
              ))}
            </div>
          </motion.div>

          {/* Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`md:col-span-3 rounded-[28px] bg-white p-6 ${claySolid}`}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold">Recent</p>
              <button className="text-xs text-rose-700/70 hover:text-rose-900">
                See all →
              </button>
            </div>
            <ul className="divide-y divide-rose-100">
              {txns.map((t) => (
                <li
                  key={t.who + t.ago}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-2xl bg-rose-100 ${claySoft} flex items-center justify-center text-sm font-bold text-rose-600`}
                    >
                      {t.who[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.who}</p>
                      <p className="text-xs text-rose-700/60">
                        {t.cat} · {t.ago}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      t.amt > 0 ? "text-emerald-600" : "text-rose-900"
                    }`}
                  >
                    {t.amt > 0 ? "+" : ""}kr {Math.abs(t.amt).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 pt-6 border-t border-rose-200">
          <Link
            href="/lab"
            className="text-sm text-rose-700/80 hover:text-rose-900 transition-colors"
          >
            ← all demos
          </Link>
        </div>
      </div>
    </main>
  );
}
