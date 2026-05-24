"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fullAnswer =
  "Cohort retention dipped in the Berlin region the week of May 12. The drop is concentrated in trial users coming from the Hetzner colo. Looking at session-replay clusters, most stalled on the workspace-import step — Hetzner egress to S3 is timing out around 8 seconds, which is past the upload retry threshold. Two paths worth considering: bump the client retry to 30s, or move imports to a regional bucket.";

const sources = [
  { tag: "metrics", title: "retention.cohorts.berlin", line: "rows 142–168" },
  { tag: "logs", title: "ingest.upload.timeouts", line: "May 12 14:02 UTC" },
  { tag: "docs", title: "S3 cross-region throughput", line: "§ Hetzner" },
];

const suggestions = [
  { cmd: "/explain", hint: "this drop in one paragraph" },
  { cmd: "/plot", hint: "Berlin trial retention vs. global, 30d" },
  { cmd: "/draft", hint: "incident note for #releases" },
  { cmd: "/repro", hint: "minimal upload-timeout repro" },
];

export default function AuroraDemo() {
  const [streamed, setStreamed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 3;
      if (i >= fullAnswer.length) {
        setStreamed(fullAnswer);
        setDone(true);
        clearInterval(t);
      } else {
        setStreamed(fullAnswer.slice(0, i));
      }
    }, 30);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen bg-[#06060a] text-foreground relative overflow-hidden">
      {/* Animated aurora background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-600/30 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="relative pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <p className="text-xs text-muted font-mono mb-2">/lab / aurora</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Aurora — ask the workspace
            </h1>
            <p className="text-sm text-muted mt-2">
              ⌘K from anywhere · cited answers · running on your data
            </p>
          </header>

          {/* Query */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 mb-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-violet-300 font-mono text-xs">you</span>
              <p className="text-foreground/90">
                why did retention dip in berlin last week?
              </p>
            </div>
          </div>

          {/* Answer card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-6 md:p-8 mb-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center text-[10px] font-semibold">
                A
              </div>
              <span className="text-xs font-mono text-muted">aurora · 1.4s</span>
              {done && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-auto text-[10px] font-mono text-emerald-300 px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20"
                >
                  verified · 3 sources
                </motion.span>
              )}
            </div>

            <p className="text-[15px] leading-relaxed text-foreground/90 min-h-[7rem]">
              {streamed}
              {!done && (
                <span className="inline-block w-1.5 h-4 bg-violet-300 align-middle ml-0.5 animate-pulse-soft" />
              )}
            </p>

            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 pt-5 border-t border-white/10"
                >
                  <p className="text-[11px] uppercase tracking-wider text-muted font-mono mb-3">
                    sources
                  </p>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {sources.map((s) => (
                      <div
                        key={s.title}
                        className="rounded-lg border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.06] transition cursor-pointer"
                      >
                        <p className="text-[10px] uppercase font-mono text-violet-300 mb-1">
                          {s.tag}
                        </p>
                        <p className="text-sm truncate">{s.title}</p>
                        <p className="text-xs text-muted mt-1">{s.line}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Suggestions */}
          <p className="text-xs text-muted font-mono mb-3">try next</p>
          <div className="grid sm:grid-cols-2 gap-2 mb-10">
            {suggestions.map((s) => (
              <button
                key={s.cmd}
                className="text-left rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-3 hover:bg-white/[0.07] hover:border-white/20 transition group"
              >
                <span className="text-violet-300 font-mono text-xs">
                  {s.cmd}
                </span>
                <span className="text-foreground/80 text-sm ml-2">
                  {s.hint}
                </span>
              </button>
            ))}
          </div>

          {/* Command input */}
          <div className="sticky bottom-6">
            <div className="rounded-2xl border border-white/15 bg-[#0a0a12]/80 backdrop-blur-2xl shadow-2xl shadow-violet-900/30 p-2 flex items-center gap-2">
              <span className="px-3 text-xs font-mono text-muted">⌘K</span>
              <input
                className="flex-1 bg-transparent outline-none text-sm py-2 placeholder:text-white/30"
                placeholder="ask anything, or type / for commands…"
                defaultValue=""
              />
              <button className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition">
                send ↵
              </button>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10">
            <Link
              href="/lab"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              ← all demos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
