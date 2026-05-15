"use client";

import { motion } from "framer-motion";

const featured = [
  {
    title: "groundwork",
    description:
      "Interactive map of every affordable-housing project in NYC's HPD pipeline. 3,707 projects aggregated from 8,983 building-level rows of NYC Open Data, plotted with MapLibre and Carto basemaps. Click any marker for the income-tier breakdown, bedroom mix, council district, and a contact link. Filter by borough, construction type, year, and project size, the map and list stay in sync.",
    metrics: ["3,707 NYC projects", "MapLibre + clustering", "Real civic data"],
    tech: ["TypeScript", "Next.js", "MapLibre GL", "Socrata", "Tailwind"],
    gradient: "from-emerald-500/15 to-teal-500/10",
    borderGlow: "hover:shadow-emerald-500/15",
    github: "https://github.com/c-tonneslan/groundwork",
    live: "https://groundwork-tan.vercel.app",
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
  {
    title: "fretwise",
    description:
      "Interactive fretboard editor for guitar and bass. 40+ scales, modes, arpeggios, and bebop vocabulary, with Karplus-Strong plucked-string synthesis running entirely in the browser. No samples, no Tone.js, just the algorithm.",
    metrics: ["10 tunings", "Karplus-Strong synth", "URL-shareable state"],
    tech: ["TypeScript", "Next.js", "Web Audio API", "Tailwind"],
    gradient: "from-amber-500/10 to-orange-500/10",
    borderGlow: "hover:shadow-amber-500/10",
    github: "https://github.com/c-tonneslan/fretwise",
    live: "https://fretwise-neon.vercel.app",
  },
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
    title: "tcppulse",
    description:
      "Multi-target TCP latency monitor with a live TUI. Probes hosts in parallel, draws sparklines per target, and reports p50/p90/p99 + loss rate. About 400 lines of Rust across four files (CLI, async probes, metrics, TUI). Tokio + Ratatui, no unsafe.",
    metrics: ["Tokio + Ratatui", "~400 LOC", "Async probes"],
    tech: ["Rust", "Tokio", "Ratatui", "Crossterm"],
    gradient: "from-cyan-500/10 to-sky-500/10",
    borderGlow: "hover:shadow-cyan-500/10",
    github: "https://github.com/c-tonneslan/tcppulse",
  },
  {
    title: "pr-pulse",
    description:
      "What actually predicts whether an OSS pull request gets merged? Pulled 4,750 PRs from 24 popular repos (Go, Rust, TypeScript, Python, C/C++), analyzed with DuckDB. Surprising headline: author association is the entire signal. Members merge at 87%, prior contributors at 69%, drive-by strangers at 2%.",
    metrics: ["4,750 PRs", "24 repos", "5 findings, all charted"],
    tech: ["Python", "DuckDB", "Pandas", "Matplotlib", "GraphQL"],
    gradient: "from-rose-500/10 to-pink-500/10",
    borderGlow: "hover:shadow-rose-500/10",
    github: "https://github.com/c-tonneslan/pr-pulse",
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
