"use client";

import { motion } from "framer-motion";

const featured = [
  {
    title: "scour",
    description:
      "A fast, parallel, gitignore-aware recursive grep written from scratch in Rust. A worker pool walks the directory tree across every core, and termination is handled by an atomic counter incremented before a subdirectory is queued and decremented after a directory is done, so whichever worker drops it to zero knows the walk is finished. .gitignore patterns compile to per-rule regexes, matched against paths relative to each .gitignore's own directory, with the deepest opinion winning so a nested negation rule can re-include. Matching runs on raw bytes so a non-UTF-8 file doesn't crash the search, smart-case mirrors ripgrep, and there's match-highlighted color output, stdin support, and grep-style exit codes. Six modules, around 900 lines, 29 tests.",
    metrics: ["~900 LOC, 6 modules", "parallel worker-pool walk", "gitignore-aware, 29 tests"],
    tech: ["Rust", "regex", "crossbeam-channel", "clap"],
    github: "https://github.com/c-tonneslan/scour",
  },
  {
    title: "soda",
    description:
      "A Go CLI for Socrata-based open data portals. 49 government portals preconfigured (NYC, Chicago, Seattle, LA, the CDC, plus 44 others). Nine commands: search across every portal at once, list / info / pull / stats on one, watch a dataset for new rows on an interval, diff two snapshots row-by-row with field-level old/new for changed rows. Outputs JSON, NDJSON, CSV, or directly into a SQLite database — pull --all auto-paginates million-row datasets, upserts on :id, schema typed from SODA metadata. Single static binary, no Python required. SoQL filter support pass-through (--where / --order / --select). Full mkdocs site, Homebrew tap formula auto-generated on tag push. Pairs with convene for civic-tech work.",
    metrics: ["49 portals · 9 commands", "JSON / NDJSON / CSV / SQLite sinks", "watch + diff for change detection"],
    tech: ["Go 1.25+", "cobra", "modernc.org/sqlite"],
    github: "https://github.com/c-tonneslan/soda",
  },
  {
    title: "convene",
    description:
      "Two-platform municipal-data tool: hits Legistar's official REST API and HTML-scrapes Granicus's ViewPublisher pages, with 24 US cities preconfigured. Streams events, agenda items, roll-call votes, legislation, sponsors, and action history as OCD-shaped JSON, ndjson for jq, or directly into a normalized 9-table SQLite database. Incremental sync via --since-modified, on-disk cache for iterative work, joinable matter→event IDs so bill actions link back to the meeting that took them. Distinct from python-legistar-scraper (HTML scraping, brittle) and pupa (heavy Django/Mongo orchestrator). Full mkdocs site, reusable GitHub Action for daily snapshots, PyPI trusted-publishing release workflow. Aims to be the modern alternative civic-tech shops can drop into a Councilmatic-style ingest pipeline.",
    metrics: ["24 cities · Legistar + Granicus", "Events / matters / votes / sponsors / history", "JSON / ndjson / SQLite output"],
    tech: ["Python 3.11+", "Pydantic 2", "httpx", "BeautifulSoup", "SQLite"],
    github: "https://github.com/c-tonneslan/convene",
  },
  {
    title: "littledb",
    description:
      "Tiny embedded key/value store in Go. Single-file ACID with a copy-on-write B+tree, two-meta-page commits, and MVCC-style snapshot reads. Around 1,500 lines. Benchmarks within 5% of bbolt on writes (both bottleneck on fsync); ~6x slower on reads because there's deliberately no mmap.",
    metrics: ["~1.5k LOC", "ACID + COW", "Tied with bbolt on writes"],
    tech: ["Go", "B+tree", "Copy-on-Write", "CRC32C"],
    github: "https://github.com/c-tonneslan/littledb",
  },
  {
    title: "septa-live",
    description:
      "Live map of every SEPTA mode that publishes realtime data: Regional Rail, BSL, MFL, NHSL, all five subway-surface trolleys (T1-T5), Girard (G/Route 15), and the suburban trolleys to Media and Sharon Hill (D1, D2). Color-coded with SEPTA Metro's brand palette, polylines drawn through every line's stations in order, ~140 stations pinned accurately along Market, Broad, Front, and Kensington. Hits five SEPTA endpoints (TrainView, TransitViewAll, Arrivals, Alerts, elevator) through Next.js API routes that proxy through Vercel's edge cache so upstream shape changes never reach the client. SEPTA's feeds are inconsistent (one line spelled three ways across one Arrivals response, TransitViewAll uses Metro letters while Alerts uses long names), so the line registry carries an apiNames array per line that canonicalizes every variant. Trains and trolley vehicles are reused across polls so they slide instead of flicker. Sidebar groups lines by mode with per-group hide/show, a most-delayed leaderboard across every feed, type-ahead station picker, and detail panels for trains, vehicles, and stations. Elevator outages roll into the alerts banner.",
    metrics: ["5 SEPTA APIs · 25 lines · ~140 stations", "15s poll, edge-cached proxy", "RR + subway + trolley + NHSL"],
    tech: ["TypeScript", "Next.js 16", "Leaflet", "SEPTA APIs"],
    github: "https://github.com/c-tonneslan/septa-live",
    live: "https://septa-live.vercel.app",
  },
  {
    title: "civic-philly",
    description:
      "A real-asset civic tool, not a data viz. 5,000+ housing developments, zoning permits, transit projects, and capital infrastructure investments in Philadelphia, joined against 408 ACS census tracts, 10 council district polygons, 239 Registered Community Organizations, every city council member's contact info, 4,212 OPA property owners (the shell-LLC pattern catcher), and 6,400+ L&I displacement signals (demolition permits + housing-code violations). Postgres tsvector full-text search. Top-applicants and top-owners leaderboards. Per-district briefing pages with year-by-year activity charts. Status-history accountability tracker for stalled projects. Equity overlay choropleth on the map. Mobile bottom-sheet for organizers at meetings. /this-week content homepage with weekly aggregations. RSS feeds per district. Dynamic next/og preview cards for every project and district. Sitemap.xml so project pages are Google-indexable. /embed iframe for blogs and CDC sites. Public JSON API at /api/v1. Cited methodology page. Email alerts and weekly per-district digests via Resend. Built for council aides, organizers, and reporters.",
    metrics: ["5,000+ projects · 4,200+ owners · 6,400+ signals", "Full-text search · public API · RSS · OG", "Equity + accountability + displacement layers"],
    tech: ["TypeScript", "Next.js 16", "MapLibre GL", "PostGIS", "Census ACS", "next/og"],
    github: "https://github.com/c-tonneslan/civic-philly",
    live: "https://civic-philly.vercel.app",
  },
  {
    title: "groundwork",
    description:
      "Interactive map of 6,500+ affordable-housing projects across six U.S. cities (NYC, SF, LA, DC, Chicago, Philly), unified into one Postgres + PostGIS schema. Adds a census-tract rent-burden choropleth, a supply-demand gap analysis (burdened households per nearby affordable unit, pure PostGIS spatial join), and a stakeholders panel that surfaces the elected representative for any clicked development.",
    metrics: ["6 cities, 6,500+ projects", "PostGIS spatial joins", "85 elected reps scraped"],
    tech: ["TypeScript", "Next.js", "Postgres", "PostGIS", "Leaflet", "Census ACS"],
    github: "https://github.com/c-tonneslan/groundwork",
    live: "https://groundwork-tan.vercel.app",
  },
  {
    title: "fourth-down-audit",
    description:
      "NFL 4th-down decision audit. Trained a new XGBoost win-probability model on 300k plays of nflverse pbp; held out 2024 and landed at log-loss 0.465, within 0.3% of nflfastR's bundled WP model on the same plays. Added a conversion logit, an FG-make logit, and an empirical punt-net lookup, then scored every 4th down in 2018-2024 with 1,500-iter bootstrap CIs per coach-season. The dashboard ranks coaches by WP lost with confidence-interval bars, filters by situation (red zone, two-minute, own territory, FG range) and decision type, and on click pops a play drawer with the three-option E[WP] breakdown and an animated WP curve over the surrounding plays.",
    metrics: ["300k plays · 7 seasons", "Log-loss 0.465", "1,500-iter bootstrap CIs"],
    tech: ["Python", "XGBoost", "DuckDB", "Next.js"],
    github: "https://github.com/c-tonneslan/fourth-down-audit",
    live: "https://fourth-down-audit.vercel.app",
  },
  {
    title: "flamectl",
    description:
      "Render a pprof profile as a single-file interactive SVG flamegraph. Takes input from a file, an HTTP URL, or stdin; emits one SVG you can open in any browser. About 600 lines of Go with hand-rolled tree aggregation and SVG layout.",
    metrics: ["~600 LOC", "Single-file SVG", "Hover-to-inspect"],
    tech: ["Go", "pprof", "SVG"],
    github: "https://github.com/c-tonneslan/flamectl",
  },
  {
    title: "agent-eval",
    description:
      "Evaluation framework for agentic LLMs, built from scratch with the Anthropic SDK. 28 tasks across web, code, multistep, and reasoning, scored with a mix of deterministic checks and LLM-as-judge rubrics. Reports per-category pass rates with 95% confidence intervals because n=28 means real uncertainty.",
    metrics: ["28-task suite", "ReAct loop", "95% CI on results"],
    tech: ["TypeScript", "Anthropic SDK", "LLM-as-Judge"],
    github: "https://github.com/c-tonneslan/agent-eval",
  },
  {
    title: "airwaves",
    description:
      "Tune into about 5,000 live internet radio stations from a spinning 3D globe. Pick a country, click any glowing marker, hit play. Built on Next.js, Three.js (via globe.gl), and the volunteer-run Radio Browser API. The whole thing runs in the browser, no backend.",
    metrics: ["3D globe", "5,000 stations", "Zero backend"],
    tech: ["TypeScript", "Next.js", "Three.js", "Tailwind"],
    github: "https://github.com/c-tonneslan/airwaves",
    live: "https://airwaves-steel.vercel.app",
  },
];

export default function Featured() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-card-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono text-muted uppercase tracking-widest mb-10">
          § projects
        </p>

        <div className="divide-y divide-card-border">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2) }}
              className="py-10 first:pt-0 last:pb-0"
            >
              <div className="flex items-baseline justify-between mb-3 gap-4 flex-wrap">
                <h3 className="text-xl font-mono">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/40 hover:border-emerald-400/60 text-emerald-300 rounded-md transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                      live demo →
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors border-b border-muted/40 hover:border-foreground pb-0.5"
                  >
                    code →
                  </a>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-muted/70">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
