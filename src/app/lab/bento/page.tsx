"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sparkline = [12, 18, 14, 22, 19, 28, 24, 33, 31, 42, 38, 47];

function Spark({ data, stroke = "#10b981" }: { data: number[]; stroke?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 200;
  const h = 60;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.4" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={`0,${h} ${points} ${w},${h}`}
        fill="url(#sparkfill)"
        stroke="none"
      />
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
});

export default function BentoDemo() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs text-muted font-mono mb-2">/lab / bento</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Glide — weekly snapshot
            </h1>
            <p className="text-sm text-muted mt-2">
              May 18 — May 24 · all workspaces · live
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            <button className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              7d
            </button>
            <button className="px-3 py-1.5 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-300">
              30d
            </button>
            <button className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              90d
            </button>
          </div>
        </header>

        <div className="grid grid-cols-12 grid-rows-[auto_auto_auto] gap-4 auto-rows-fr">
          {/* Hero metric */}
          <motion.div
            {...fade(0)}
            className="col-span-12 md:col-span-7 row-span-2 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-[#0d0d0d] to-[#0d0d0d] p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
            <div className="relative">
              <p className="text-xs text-muted font-mono uppercase tracking-wider mb-3">
                weekly active users
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl md:text-7xl font-semibold tracking-tighter">
                  84,209
                </span>
                <span className="text-sm text-emerald-300 font-mono">
                  +12.4%
                </span>
              </div>
              <p className="text-sm text-muted mt-2 max-w-md">
                Strongest week since launch. The new onboarding deflection
                landed Thursday and pulled D1 retention up about three points.
              </p>
              <div className="h-32 mt-8 -mx-2">
                <Spark data={sparkline} />
              </div>
            </div>
          </motion.div>

          {/* Side metrics */}
          <motion.div
            {...fade(0.05)}
            className="col-span-6 md:col-span-5 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-5"
          >
            <p className="text-xs text-muted font-mono uppercase tracking-wider mb-3">
              revenue
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">$48.2k</span>
              <span className="text-xs text-emerald-300 font-mono">+8.1%</span>
            </div>
            <div className="h-14 mt-3 -mx-1">
              <Spark
                data={[5, 8, 6, 9, 7, 11, 9, 12, 10, 14, 13, 15]}
                stroke="#a78bfa"
              />
            </div>
          </motion.div>

          <motion.div
            {...fade(0.1)}
            className="col-span-6 md:col-span-5 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-5"
          >
            <p className="text-xs text-muted font-mono uppercase tracking-wider mb-3">
              churn
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">2.3%</span>
              <span className="text-xs text-rose-400 font-mono">+0.4pp</span>
            </div>
            <div className="h-14 mt-3 -mx-1">
              <Spark
                data={[3, 2, 3, 2, 2, 2, 1, 2, 3, 2, 3, 2]}
                stroke="#f43f5e"
              />
            </div>
          </motion.div>

          {/* Activity feed */}
          <motion.div
            {...fade(0.15)}
            className="col-span-12 md:col-span-5 row-span-2 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-muted font-mono uppercase tracking-wider">
                live signups
              </p>
              <span className="flex items-center gap-1.5 text-xs text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                live
              </span>
            </div>
            <ul className="space-y-3">
              {[
                ["Lena Müller", "acme.io", "Berlin, DE", "Pro"],
                ["Diego Ortega", "northbeam", "Mexico City", "Team"],
                ["Mira Patel", "lattice", "Bengaluru", "Pro"],
                ["Tom Wexler", "hex", "Brooklyn", "Free"],
                ["Yui Sato", "vercel", "Tokyo", "Team"],
                ["Anders Lie", "linear", "Oslo", "Pro"],
              ].map(([name, org, where, plan]) => (
                <li
                  key={name}
                  className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0"
                >
                  <div>
                    <p className="text-foreground">{name}</p>
                    <p className="text-xs text-muted">
                      {org} · {where}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      plan === "Pro"
                        ? "bg-emerald-400/15 text-emerald-300"
                        : plan === "Team"
                          ? "bg-violet-400/15 text-violet-300"
                          : "bg-white/5 text-muted"
                    }`}
                  >
                    {plan}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Top regions */}
          <motion.div
            {...fade(0.2)}
            className="col-span-12 md:col-span-7 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-5"
          >
            <p className="text-xs text-muted font-mono uppercase tracking-wider mb-4">
              top regions
            </p>
            <div className="space-y-3">
              {[
                ["United States", 38, "#10b981"],
                ["Germany", 17, "#a78bfa"],
                ["United Kingdom", 12, "#60a5fa"],
                ["Japan", 9, "#f59e0b"],
                ["Brazil", 7, "#f43f5e"],
              ].map(([name, pct, color]) => (
                <div key={name as string} className="flex items-center gap-3">
                  <span className="text-sm w-32 truncate">{name}</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: color as string,
                      }}
                    />
                  </div>
                  <span className="text-xs font-mono text-muted w-10 text-right">
                    {pct}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Latest release */}
          <motion.div
            {...fade(0.25)}
            className="col-span-12 md:col-span-4 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-5"
          >
            <p className="text-xs text-muted font-mono uppercase tracking-wider mb-3">
              latest release
            </p>
            <p className="text-sm text-muted font-mono">v2.14.0</p>
            <p className="text-base font-medium mt-1">Workspace insights</p>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              Per-workspace activity rollups, exportable as CSV. Closed three
              long-standing requests.
            </p>
            <p className="text-xs text-muted mt-4 font-mono">2h ago · Mira P.</p>
          </motion.div>

          <motion.div
            {...fade(0.3)}
            className="col-span-6 md:col-span-4 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-5"
          >
            <p className="text-xs text-muted font-mono uppercase tracking-wider mb-3">
              p95 latency
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">112ms</span>
              <span className="text-xs text-emerald-300 font-mono">-9ms</span>
            </div>
            <p className="text-xs text-muted mt-2">api.glide.app · all routes</p>
          </motion.div>

          <motion.div
            {...fade(0.35)}
            className="col-span-6 md:col-span-4 rounded-2xl border border-[#1e1e1e] bg-gradient-to-br from-violet-500/10 to-transparent p-5"
          >
            <p className="text-xs text-muted font-mono uppercase tracking-wider mb-3">
              nps
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">62</span>
              <span className="text-xs text-emerald-300 font-mono">+4</span>
            </div>
            <p className="text-xs text-muted mt-2">412 responses, May</p>
          </motion.div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#1e1e1e]">
          <Link
            href="/lab"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            ← all demos
          </Link>
        </div>
      </div>
    </main>
  );
}
