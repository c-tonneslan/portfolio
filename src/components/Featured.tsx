"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  num: string;
  year: string;
  title: string;
  kind: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    num: "01",
    year: "2026",
    title: "civic-philly",
    kind: "Web · Civic data",
    description:
      "A real-asset civic tool, not a data viz. 5,000+ housing developments, zoning permits, transit projects, and capital infrastructure investments in Philadelphia, joined against 408 ACS census tracts, 10 council district polygons, 239 RCOs, every council member's contact, 4,212 OPA property owners, and 6,400+ L&I displacement signals. Full-text search, public API, RSS, OG, equity overlay, mobile bottom-sheet for organizers at meetings. Built for council aides, organizers, and reporters.",
    tech: ["TypeScript", "Next.js 16", "MapLibre GL", "PostGIS", "Census ACS", "next/og"],
    github: "https://github.com/c-tonneslan/civic-philly",
    live: "https://civic-philly.vercel.app",
    featured: true,
  },
  {
    num: "02",
    year: "2026",
    title: "septa-live",
    kind: "Web · Transit",
    description:
      "Live map of every SEPTA mode that publishes realtime data: Regional Rail, BSL, MFL, NHSL, five subway-surface trolleys, Girard, and the suburban trolleys to Media and Sharon Hill. Color-coded with SEPTA Metro's brand palette, polylines drawn through every line's stations in order, ~140 stations pinned accurately. Hits five SEPTA endpoints through Next.js API routes that proxy through Vercel's edge cache. Trains and trolley vehicles reused across polls so they slide instead of flicker.",
    tech: ["TypeScript", "Next.js 16", "Leaflet", "SEPTA APIs"],
    github: "https://github.com/c-tonneslan/septa-live",
    live: "https://septa-live.vercel.app",
  },
  {
    num: "03",
    year: "2026",
    title: "groundwork",
    kind: "Web · Housing",
    description:
      "Interactive map of 6,500+ affordable-housing projects across six U.S. cities (NYC, SF, LA, DC, Chicago, Philly), unified into one Postgres + PostGIS schema. Adds a census-tract rent-burden choropleth, a supply-demand gap analysis (burdened households per nearby affordable unit, pure PostGIS spatial join), and a stakeholders panel that surfaces the elected representative for any clicked development.",
    tech: ["TypeScript", "Next.js", "Postgres", "PostGIS", "Leaflet", "Census ACS"],
    github: "https://github.com/c-tonneslan/groundwork",
    live: "https://groundwork-tan.vercel.app",
  },
  {
    num: "04",
    year: "2026",
    title: "scour",
    kind: "CLI · Rust",
    description:
      "A fast, parallel, gitignore-aware recursive grep written from scratch in Rust. A worker pool walks the directory tree across every core. Termination is handled by an atomic counter incremented before a subdirectory is queued and decremented after a directory is done, so whichever worker drops it to zero knows the walk is finished. .gitignore patterns compile to per-rule regexes, matched against paths relative to each .gitignore's own directory, with the deepest opinion winning. Matching runs on raw bytes so a non-UTF-8 file doesn't crash the search. Six modules, around 900 lines, 29 tests.",
    tech: ["Rust", "regex", "crossbeam-channel", "clap"],
    github: "https://github.com/c-tonneslan/scour",
  },
  {
    num: "05",
    year: "2026",
    title: "soda",
    kind: "CLI · Go",
    description:
      "A Go CLI for Socrata-based open data portals. 49 government portals preconfigured (NYC, Chicago, Seattle, LA, the CDC, plus 44 others). Nine commands: search across every portal at once; list / info / pull / stats on one; watch a dataset for new rows on an interval; diff two snapshots row-by-row with field-level old/new for changed rows. Outputs JSON, NDJSON, CSV, or directly into SQLite — pull --all auto-paginates million-row datasets, upserts on :id, schema typed from SODA metadata. Single static binary, no Python.",
    tech: ["Go 1.25+", "cobra", "modernc.org/sqlite"],
    github: "https://github.com/c-tonneslan/soda",
  },
  {
    num: "06",
    year: "2026",
    title: "convene",
    kind: "Library · Python",
    description:
      "Two-platform municipal-data tool: hits Legistar's official REST API and HTML-scrapes Granicus's ViewPublisher pages, with 24 US cities preconfigured. Streams events, agenda items, roll-call votes, legislation, sponsors, and action history as OCD-shaped JSON, ndjson for jq, or directly into a normalized 9-table SQLite database. Incremental sync via --since-modified, on-disk cache for iterative work, joinable matter→event IDs so bill actions link back to the meeting that took them.",
    tech: ["Python 3.11+", "Pydantic 2", "httpx", "BeautifulSoup", "SQLite"],
    github: "https://github.com/c-tonneslan/convene",
  },
  {
    num: "07",
    year: "2026",
    title: "littledb",
    kind: "Library · Go",
    description:
      "Tiny embedded key/value store in Go. Single-file ACID with a copy-on-write B+tree, two-meta-page commits, and MVCC-style snapshot reads. Around 1,500 lines. Benchmarks within 5% of bbolt on writes (both bottleneck on fsync); ~6x slower on reads because there's deliberately no mmap.",
    tech: ["Go", "B+tree", "Copy-on-Write", "CRC32C"],
    github: "https://github.com/c-tonneslan/littledb",
  },
  {
    num: "08",
    year: "2026",
    title: "vouch",
    kind: "CLI · Go",
    description:
      "A Go CLI for catching AI-code failure modes — silent test deletions, mass test skips, accidental .gitignore additions, fabricated APIs, and other common shortcuts. Runs as a pre-commit hook or in CI. Twelve checks at v1, with a structured exit code so it composes with existing tooling.",
    tech: ["Go", "AST", "git plumbing"],
    github: "https://github.com/c-tonneslan/vouch",
  },
  {
    num: "09",
    year: "2025",
    title: "fourth-down-audit",
    kind: "Web · Sports ML",
    description:
      "NFL 4th-down decision audit. Trained a new XGBoost win-probability model on 300k plays of nflverse pbp; held out 2024 and landed at log-loss 0.465, within 0.3% of nflfastR's bundled WP model. Added a conversion logit, an FG-make logit, and an empirical punt-net lookup, then scored every 4th down in 2018–2024 with 1,500-iter bootstrap CIs per coach-season.",
    tech: ["Python", "XGBoost", "DuckDB", "Next.js"],
    github: "https://github.com/c-tonneslan/fourth-down-audit",
    live: "https://fourth-down-audit.vercel.app",
  },
  {
    num: "10",
    year: "2025",
    title: "flamectl",
    kind: "CLI · Go",
    description:
      "Render a pprof profile as a single-file interactive SVG flamegraph. Takes input from a file, an HTTP URL, or stdin; emits one SVG you can open in any browser. About 600 lines of Go with hand-rolled tree aggregation and SVG layout.",
    tech: ["Go", "pprof", "SVG"],
    github: "https://github.com/c-tonneslan/flamectl",
  },
  {
    num: "11",
    year: "2025",
    title: "agent-eval",
    kind: "Eval · TypeScript",
    description:
      "Evaluation framework for agentic LLMs, built from scratch with the Anthropic SDK. 28 tasks across web, code, multistep, and reasoning, scored with a mix of deterministic checks and LLM-as-judge rubrics. Reports per-category pass rates with 95% confidence intervals because n=28 means real uncertainty.",
    tech: ["TypeScript", "Anthropic SDK", "LLM-as-Judge"],
    github: "https://github.com/c-tonneslan/agent-eval",
  },
  {
    num: "12",
    year: "2025",
    title: "airwaves",
    kind: "Web · 3D",
    description:
      "Tune into about 5,000 live internet radio stations from a spinning 3D globe. Pick a country, click any glowing marker, hit play. Built on Next.js, Three.js (via globe.gl), and the volunteer-run Radio Browser API. The whole thing runs in the browser, no backend.",
    tech: ["TypeScript", "Next.js", "Three.js", "Tailwind"],
    github: "https://github.com/c-tonneslan/airwaves",
    live: "https://airwaves-steel.vercel.app",
  },
];

export default function Featured() {
  const [open, setOpen] = useState<string | null>("01");
  const featured = projects.find((p) => p.featured);

  return (
    <section
      id="work"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#a83232]">
              § ii — The work
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]"
            >
              Twelve
              <br />
              things,
              <br />
              made carefully.
            </motion.h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:col-start-6 text-base md:text-lg leading-[1.85] self-end font-serif italic text-[#1a1612]/85">
            What I&apos;ve built for myself and shipped, in reverse order. Most
            of them are civic or transit work — a few are developer tooling
            for my own use. Click any row to read it.
          </p>
        </div>

        {/* Featured project, taller block */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#ebe2d0] border border-[#1a1612]/20 p-7 md:p-10 mb-12"
          >
            <div className="flex items-start justify-between mb-5 flex-wrap gap-3">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#6b5e54]">
                  № {featured.num} · {featured.year}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] bg-[#a83232] text-[#f4ede0] px-2 py-1">
                  ★ Featured
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em]">
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#a83232] hover:underline underline-offset-4"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a83232] animate-pulse-soft" />
                    Live →
                  </a>
                )}
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6b5e54] hover:text-[#1a1612] hover:underline underline-offset-4"
                >
                  Code ↗
                </a>
              </div>
            </div>
            <h3 className="font-serif italic text-5xl md:text-7xl tracking-[-0.025em] leading-[0.95] mb-3">
              {featured.title}.
            </h3>
            <p className="text-[11px] uppercase tracking-[0.25em] mb-6 text-[#6b5e54]">
              {featured.kind}
            </p>
            <p className="text-base md:text-lg leading-[1.85] max-w-3xl">
              {featured.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#6b5e54]">
              {featured.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </motion.article>
        )}

        {/* Archive table — the rest */}
        <div className="border-t border-[#1a1612]/25">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[60px_70px_1fr_180px_140px] gap-6 text-[10px] uppercase tracking-[0.25em] text-[#6b5e54] py-3 border-b border-[#1a1612]/25">
            <span>№</span>
            <span>Year</span>
            <span>Project</span>
            <span>Kind</span>
            <span className="text-right">Links</span>
          </div>

          {projects
            .filter((p) => !p.featured)
            .map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="border-b border-[#1a1612]/15 group"
              >
                <button
                  onClick={() => setOpen(open === p.num ? null : p.num)}
                  className="w-full text-left grid grid-cols-12 md:grid-cols-[60px_70px_1fr_180px_140px] gap-x-4 md:gap-6 py-5 items-baseline hover:bg-[#ebe2d0]/60 transition-colors cursor-pointer"
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-[#6b5e54] order-1">
                    № {p.num}
                  </span>
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-[#6b5e54] order-2">
                    {p.year}
                  </span>
                  <span className="col-span-8 md:col-span-1 text-xl md:text-2xl font-medium tracking-tight order-3 group-hover:italic group-hover:font-serif group-hover:font-normal group-hover:text-[#a83232] transition-all">
                    {p.title}
                  </span>
                  <span className="col-span-12 md:col-span-1 text-[11px] uppercase tracking-[0.22em] text-[#6b5e54] order-5 md:order-4 self-center">
                    {p.kind}
                  </span>
                  <span className="col-span-12 md:col-span-1 text-right text-[11px] uppercase tracking-[0.22em] order-6 md:order-5 self-center text-[#6b5e54]">
                    {p.live ? (
                      <span className="text-[#a83232]">live · code</span>
                    ) : (
                      <span>code</span>
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {open === p.num && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 px-0 md:pl-[136px] pr-0 grid md:grid-cols-12 gap-6">
                        <p className="md:col-span-8 font-serif text-base md:text-lg leading-[1.85] text-[#1a1612]">
                          {p.description}
                        </p>
                        <div className="md:col-span-4 space-y-3">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6b5e54] mb-1">
                              Tech
                            </p>
                            <p className="text-sm font-mono text-[#1a1612]/85 leading-relaxed">
                              {p.tech.join(" · ")}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 pt-2 text-[11px] uppercase tracking-[0.25em]">
                            {p.live && (
                              <a
                                href={p.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[#a83232] hover:underline underline-offset-4"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#a83232] animate-pulse-soft" />
                                Live →
                              </a>
                            )}
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#6b5e54] hover:text-[#1a1612] hover:underline underline-offset-4"
                            >
                              Code ↗
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
