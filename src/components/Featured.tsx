"use client";

import { motion } from "framer-motion";

const featured = [
  {
    title: "littledb",
    description:
      "Tiny embedded key/value store in Go. Single-file ACID with a copy-on-write B+tree, two-meta-page commits, and MVCC-style snapshot reads. Around 1,500 lines. Benchmarks within 5% of bbolt on writes (both bottleneck on fsync); ~6x slower on reads because there's deliberately no mmap.",
    metrics: ["~1.5k LOC", "ACID + COW", "Tied with bbolt on writes"],
    tech: ["Go", "B+tree", "Copy-on-Write", "CRC32C"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderGlow: "hover:shadow-emerald-500/10",
    github: "https://github.com/c-tonneslan/littledb",
  },
  {
    title: "civic-philly",
    description:
      "A real-asset civic tool, not a data viz. 5,000+ housing developments, zoning permits, transit projects, and capital infrastructure investments in Philadelphia, joined against 408 ACS census tracts, 10 council district polygons, 239 Registered Community Organizations, every city council member's contact info, 4,212 OPA property owners (the shell-LLC pattern catcher), and 6,400+ L&I displacement signals (demolition permits + housing-code violations). Postgres tsvector full-text search. Top-applicants and top-owners leaderboards. Per-district briefing pages with year-by-year activity charts. Status-history accountability tracker for stalled projects. Equity overlay choropleth on the map. Mobile bottom-sheet for organizers at meetings. /this-week content homepage with weekly aggregations. RSS feeds per district. Dynamic next/og preview cards for every project and district. Sitemap.xml so project pages are Google-indexable. /embed iframe for blogs and CDC sites. Public JSON API at /api/v1. Cited methodology page. Email alerts and weekly per-district digests via Resend. Built for council aides, organizers, and reporters.",
    metrics: ["5,000+ projects · 4,200+ owners · 6,400+ signals", "Full-text search · public API · RSS · OG", "Equity + accountability + displacement layers"],
    tech: ["TypeScript", "Next.js 16", "MapLibre GL", "PostGIS", "Census ACS", "next/og"],
    gradient: "from-sky-500/15 to-teal-500/10",
    borderGlow: "hover:shadow-sky-500/15",
    github: "https://github.com/c-tonneslan/civic-philly",
    live: "https://civic-philly.vercel.app",
  },
  {
    title: "groundwork",
    description:
      "Interactive map of 6,500+ affordable-housing projects across six U.S. cities (NYC, SF, LA, DC, Chicago, Philly), unified into one Postgres + PostGIS schema. Adds a census-tract rent-burden choropleth, a supply-demand gap analysis (burdened households per nearby affordable unit, pure PostGIS spatial join), and a stakeholders panel that surfaces the elected representative for any clicked development.",
    metrics: ["6 cities, 6,500+ projects", "PostGIS spatial joins", "85 elected reps scraped"],
    tech: ["TypeScript", "Next.js", "Postgres", "PostGIS", "Leaflet", "Census ACS"],
    gradient: "from-emerald-500/15 to-teal-500/10",
    borderGlow: "hover:shadow-emerald-500/15",
    github: "https://github.com/c-tonneslan/groundwork",
    live: "https://groundwork-tan.vercel.app",
  },
  {
    title: "fourth-down-audit",
    description:
      "NFL 4th-down decision audit. Trained a new XGBoost win-probability model on 300k plays of nflverse pbp; held out 2024 and landed at log-loss 0.465, within 0.3% of nflfastR's bundled WP model on the same plays. Added a conversion logit, an FG-make logit, and an empirical punt-net lookup, then scored every 4th down in 2018-2024 with 1,500-iter bootstrap CIs per coach-season. The dashboard ranks coaches by WP lost with confidence-interval bars, filters by situation (red zone, two-minute, own territory, FG range) and decision type, and on click pops a play drawer with the three-option E[WP] breakdown and an animated WP curve over the surrounding plays.",
    metrics: ["300k plays · 7 seasons", "Log-loss 0.465", "1,500-iter bootstrap CIs"],
    tech: ["Python", "XGBoost", "DuckDB", "Next.js"],
    gradient: "from-amber-500/15 to-orange-500/10",
    borderGlow: "hover:shadow-amber-500/15",
    github: "https://github.com/c-tonneslan/fourth-down-audit",
    live: "https://fourth-down-audit.vercel.app",
  },
  {
    title: "flamectl",
    description:
      "Render a pprof profile as a single-file interactive SVG flamegraph. Takes input from a file, an HTTP URL, or stdin; emits one SVG you can open in any browser. About 600 lines of Go with hand-rolled tree aggregation and SVG layout.",
    metrics: ["~600 LOC", "Single-file SVG", "Hover-to-inspect"],
    tech: ["Go", "pprof", "SVG"],
    gradient: "from-red-500/10 to-amber-500/10",
    borderGlow: "hover:shadow-red-500/10",
    github: "https://github.com/c-tonneslan/flamectl",
  },
  {
    title: "agent-eval",
    description:
      "Evaluation framework for agentic LLMs, built from scratch with the Anthropic SDK. 28 tasks across web, code, multistep, and reasoning, scored with a mix of deterministic checks and LLM-as-judge rubrics. Reports per-category pass rates with 95% confidence intervals because n=28 means real uncertainty.",
    metrics: ["28-task suite", "ReAct loop", "95% CI on results"],
    tech: ["TypeScript", "Anthropic SDK", "LLM-as-Judge"],
    gradient: "from-blue-500/10 to-purple-500/10",
    borderGlow: "hover:shadow-blue-500/10",
    github: "https://github.com/c-tonneslan/agent-eval",
  },
  {
    title: "airwaves",
    description:
      "Tune into about 5,000 live internet radio stations from a spinning 3D globe. Pick a country, click any glowing marker, hit play. Built on Next.js, Three.js (via globe.gl), and the volunteer-run Radio Browser API. The whole thing runs in the browser, no backend.",
    metrics: ["3D globe", "5,000 stations", "Zero backend"],
    tech: ["TypeScript", "Next.js", "Three.js", "Tailwind"],
    gradient: "from-amber-500/15 to-yellow-500/10",
    borderGlow: "hover:shadow-amber-500/15",
    github: "https://github.com/c-tonneslan/airwaves",
    live: "https://airwaves-steel.vercel.app",
  },
];

export default function Featured() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Featured Work</h2>
          <div className="w-12 h-1 bg-accent rounded mb-8" />

          <div className="space-y-6">
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative bg-gradient-to-br ${project.gradient} border border-card-border rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 ${project.borderGlow} hover:shadow-2xl`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-xs font-mono px-3 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 bg-card-bg rounded text-muted font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-5 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-all hover:-translate-y-0.5"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-5 py-2 border border-[#333] hover:border-[#555] rounded-lg font-medium transition-all hover:-translate-y-0.5"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
