"use client";

import Link from "next/link";
import { useState } from "react";

const TABS = [
  { id: "changelog", label: "Changelog" },
  { id: "stats", label: "Project Stats" },
  { id: "logs", label: "Log Analysis" },
];

const OUTPUT: Record<string, string> = {
  changelog: `$ devflow changelog --count 8

\x1b[1m# Changelog\x1b[0m

\x1b[1m## Features\x1b[0m

- a3f2c1e (auth) Add refresh token rotation with one-time use (Sarah K, 2026-03-12)
- 8b1d4f2 (api) Implement rate limiting middleware per IP (Mike L, 2026-03-10)
- c7e9a03 (ws) Add WebSocket presence indicators (Alex M, 2026-03-08)

\x1b[1m## Bug Fixes\x1b[0m

- d4f6b21 (auth) Fix JWT expiry not checking refresh window (Sarah K, 2026-03-14)
- 1a2b3c4 (api) Handle null body in POST requests (Mike L, 2026-03-11)

\x1b[1m## Refactoring\x1b[0m

- e5d6c7b Migrate database queries to repository pattern (Alex M, 2026-03-09)

\x1b[1m## Chores\x1b[0m

- f8a9b0c Update dependencies and fix audit warnings (CI Bot, 2026-03-13)
- 2c3d4e5 Add Docker health check endpoint (Mike L, 2026-03-07)

Generated from 8 commits`,

  stats: `$ devflow stats --dir ~/projects/web-app

\x1b[1m\x1b[4mProject Statistics\x1b[0m

\x1b[1mTotal:\x1b[0m  \x1b[36m147\x1b[0m files, \x1b[36m12,430\x1b[0m lines, \x1b[36m892.3 KB\x1b[0m
\x1b[1mScan time:\x1b[0m  6 ms

\x1b[1mLanguage Breakdown:\x1b[0m
  Language          Files      Lines       Size      %
  ────────────────────────────────────────────────────────
  \x1b[1mTypeScript\x1b[0m           48      5,210   180.2 KB  41.9% ████████████
  \x1b[1mPython\x1b[0m               23      3,100   102.1 KB  24.9% ███████
  \x1b[1mRust\x1b[0m                 12      2,340    89.4 KB  18.8% █████
  \x1b[1mGo\x1b[0m                    8      1,200    45.6 KB   9.7% ██
  \x1b[1mYAML\x1b[0m                  6        580    15.0 KB   4.7% █
  \x1b[1mJSON\x1b[0m                 24      6,420   312.8 KB   ---  (config)
  \x1b[1mMarkdown\x1b[0m             14        890    28.4 KB   ---  (docs)
  \x1b[1mDockerfile\x1b[0m            3         67     2.1 KB   ---
  \x1b[1mShell\x1b[0m                 5        203     6.8 KB   ---
  \x1b[1mSQL\x1b[0m                   4        420    12.0 KB   ---`,

  logs: `$ devflow logs --path /var/log/api-gateway.log --top 5

\x1b[1m\x1b[4mLog Analysis Report\x1b[0m

\x1b[1mTotal lines:\x1b[0m  \x1b[36m248,391\x1b[0m
\x1b[1mParse speed:\x1b[0m  524,000 lines/sec (474 ms)

\x1b[1mLevel Breakdown:\x1b[0m
  \x1b[31m\x1b[1m   ERROR\x1b[0m     1,247 (  0.5%)  ██
  \x1b[33m    WARN\x1b[0m     3,891 (  1.6%)  ██████
  \x1b[32m    INFO\x1b[0m   198,442 ( 79.9%)  ████████████████████████████████
  \x1b[34m   DEBUG\x1b[0m    44,811 ( 18.0%)  ███████

\x1b[1mTop Error Messages:\x1b[0m
  1. Connection refused to postgres-primary:5432 (847x)
  2. Request timeout after 30000ms on /api/search (203x)
  3. JWT signature verification failed (89x)
  4. Rate limit exceeded for IP 203.0.113.42 (62x)
  5. File not found: /uploads/tmp_expired_session (46x)`,
};

export default function DevFlowDemo() {
  const [activeTab, setActiveTab] = useState("changelog");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <nav className="border-b border-[#1e1e1e] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold">
            DevFlow<span className="text-blue-500"> CLI</span>
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/c-tonneslan/devflow-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-sm text-[#888]">
            Fast developer productivity CLI built in Rust. Generates changelogs,
            analyzes log files at 500K+ lines/sec, and reports project stats.
          </p>
        </div>

        <div className="flex gap-2 mb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-[#111] border border-[#1e1e1e] text-[#888] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-xl p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap overflow-x-auto">
          {OUTPUT[activeTab]}
        </div>

        <div className="mt-6 text-xs text-[#555]">
          Built with Rust, Clap, Regex, WalkDir, and Serde. Install: cargo build
          --release
        </div>
      </div>
    </div>
  );
}
