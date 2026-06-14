"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  kind: string;
  year: string;
  description: string;
  metrics: string[];
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "civic-philly",
    kind: "Civic data · Philadelphia",
    year: "2026",
    description:
      "A real-asset civic tool. 5,000+ housing developments, zoning permits, transit projects, and capital infrastructure investments in Philadelphia, joined against 408 ACS census tracts, 10 council district polygons, 239 RCOs, every council member's contact, 4,212 OPA owners, and 6,400+ L&I displacement signals. Full-text search, public API, RSS, OG, equity overlay, mobile bottom-sheet for organizers at meetings.",
    metrics: ["5,000+ projects", "Public JSON API", "Per-district RSS"],
    tech: ["TypeScript", "Next.js 16", "MapLibre GL", "PostGIS", "Census ACS"],
    github: "https://github.com/charlestonneslan/civic-philly",
    live: "https://civic-philly.vercel.app",
    featured: true,
  },
  {
    title: "septa-live",
    kind: "Transit · Realtime",
    year: "2026",
    description:
      "Live map of every SEPTA mode that publishes realtime data: Regional Rail, BSL, MFL, NHSL, five subway-surface trolleys, Girard, and the suburban trolleys. Hits five SEPTA endpoints through Next.js routes that proxy through Vercel's edge cache. Trains and trolleys reused across polls so they slide instead of flicker.",
    metrics: ["25 lines", "~140 stations", "15s poll, edge-cached"],
    tech: ["TypeScript", "Next.js 16", "Leaflet", "SEPTA APIs"],
    github: "https://github.com/charlestonneslan/septa-live",
    live: "https://septa-live.vercel.app",
  },
  {
    title: "groundwork",
    kind: "Housing · Six cities",
    year: "2026",
    description:
      "Interactive map of 6,500+ affordable-housing projects across NYC, SF, LA, DC, Chicago, and Philly, unified into one Postgres + PostGIS schema. Census-tract rent-burden choropleth, supply-demand gap analysis (PostGIS spatial join), and a stakeholders panel that surfaces the elected representative for any clicked development.",
    metrics: ["6 cities", "6,500+ projects", "PostGIS spatial joins"],
    tech: ["TypeScript", "Next.js", "Postgres", "PostGIS", "Leaflet"],
    github: "https://github.com/charlestonneslan/groundwork",
    live: "https://groundwork-tan.vercel.app",
  },
  {
    title: "civic-rag",
    kind: "RAG · Legistar",
    year: "2026",
    description:
      "Ask plain-English questions about city council legislation, get cited answers. Hybrid retrieval (BM25 + dense embeddings, fused with RRF) over Legistar matters and events, indexed in a single SQLite file via sqlite-vec and FTS5 with no vector DB to run. Local sentence-transformers by default, Voyage AI behind a flag. Claude generates the answer and the CLI parses the citation markers back out and prints the source URLs alongside.",
    metrics: ["Hybrid retrieval", "Single SQLite file", "Cited answers"],
    tech: ["Python", "Anthropic Claude", "sqlite-vec", "sentence-transformers"],
    github: "https://github.com/charlestonneslan/civic-rag",
  },
  {
    title: "convene",
    kind: "Python · Municipal data",
    year: "2026",
    description:
      "Two-platform municipal-data tool: hits Legistar's REST API and HTML-scrapes Granicus's ViewPublisher pages, with 24 US cities preconfigured. Streams events, agenda items, votes, legislation, sponsors, and action history as OCD-shaped JSON, ndjson for jq, or into a 9-table SQLite database.",
    metrics: ["24 cities", "Legistar + Granicus", "OCD-shaped JSON"],
    tech: ["Python 3.11+", "Pydantic 2", "httpx", "SQLite"],
    github: "https://github.com/charlestonneslan/convene",
  },
  {
    title: "soda",
    kind: "Go · Open-data CLI",
    year: "2026",
    description:
      "A Go CLI for Socrata-based open data portals. 49 government portals preconfigured. Nine commands including watch for new rows and diff between snapshots. Outputs JSON, NDJSON, CSV, or directly into SQLite — pull --all auto-paginates million-row datasets, upserts on :id.",
    metrics: ["49 portals", "9 commands", "JSON / CSV / SQLite"],
    tech: ["Go 1.25+", "cobra", "modernc.org/sqlite"],
    github: "https://github.com/charlestonneslan/soda",
  },
  {
    title: "datamade-challenge",
    kind: "Civic · DataMade work sample",
    year: "2026",
    description:
      "Django + React-Leaflet choropleth of Chicago restaurant-permit issuance by community area and year, a completion of DataMade's public code challenge. A single aggregate GROUP BY in the view feeds the serializer, AbortController-cancelled fetches keep year changes from racing, the color legend is keyed to each year's max, hover popups show raw counts, and a top-5 sidebar gives the page a takeaway beyond the map.",
    metrics: ["77 community areas", "Single aggregate query", "PostGIS + Docker"],
    tech: ["Django", "DRF", "react-leaflet", "PostGIS", "Docker"],
    github: "https://github.com/charlestonneslan/code-challenge-v2",
  },
  {
    title: "bandstand",
    kind: "Philly · Jazz tonight",
    year: "2026",
    description:
      "Philadelphia jazz, tonight. Twenty-one rooms across the city: live clubs, jam sessions, listening rooms, vinyl bars, DJ nights, and the bistros that play real jazz on the system. Per-venue scrapers pull Chris' Jazz Cafe and South Jazz Kitchen nightly, the rest hand-curated with confidence tags. Repertory-style editorial layout, Source Serif italic mastheads, paper-grain texture. City map at /map with tag-colored markers and filter chips.",
    metrics: ["21 rooms", "City map by tag", "Two nightly scrapers"],
    tech: ["TypeScript", "Next.js 16", "Tailwind v4", "MapLibre GL", "cheerio"],
    github: "https://github.com/charlestonneslan/bandstand",
    live: "https://bandstand-bay.vercel.app",
  },
];

function CTAs({ p }: { p: Project }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/15 transition"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
          Live →
        </a>
      )}
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted hover:text-foreground transition border-b border-muted/30 hover:border-foreground pb-0.5"
      >
        Code ↗
      </a>
    </div>
  );
}

export default function Featured() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="px-6 lg:px-8 py-24 md:py-32 border-t border-white/6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-6 mb-16"
        >
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Work
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.025em] leading-[1]">
              Civic
              <br />
              <span className="text-muted">tools.</span>
            </h2>
          </div>
          <p className="md:col-span-5 self-end text-base md:text-lg text-muted leading-relaxed">
            Maps, data pipelines, and APIs for cities, transit, and public
            records. Click anything for code; live demos are marked.
          </p>
        </motion.div>

        {/* Featured project — big card */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl border border-white/8 bg-card-bg p-6 md:p-10 mb-8 overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#6bd1ff] opacity-15 blur-[120px]" />
            <div className="relative grid md:grid-cols-12 gap-8 md:gap-10 items-start">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4 flex-wrap text-xs">
                  <span className="px-2 py-1 rounded-md bg-accent/15 border border-accent/30 text-accent uppercase tracking-widest font-medium">
                    Featured
                  </span>
                  <span className="text-muted uppercase tracking-widest">
                    {featured.kind}
                  </span>
                  <span className="text-muted font-mono">{featured.year}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-semibold tracking-[-0.025em] leading-tight mb-4">
                  {featured.title}
                </h3>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                  {featured.description}
                </p>
              </div>
              <div className="md:col-span-5 space-y-5">
                <div className="grid grid-cols-3 gap-px bg-white/8 rounded-lg overflow-hidden border border-white/8">
                  {featured.metrics.map((m) => (
                    <div key={m} className="bg-card-bg p-3">
                      <p className="text-xs text-foreground/90 leading-tight">
                        {m}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-2">
                    Stack
                  </p>
                  <p className="text-sm font-mono text-foreground/85">
                    {featured.tech.join(" · ")}
                  </p>
                </div>
                <CTAs p={featured} />
              </div>
            </div>
          </motion.article>
        )}

        {/* Rest — two-column grid of compact project cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-xl border border-white/8 bg-card-bg p-6 hover:border-white/15 hover:bg-[#13141a] transition group"
            >
              <div className="flex items-baseline justify-between mb-3 gap-3 flex-wrap">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted uppercase tracking-widest mt-1">
                    {p.kind} · {p.year}
                  </p>
                </div>
                <CTAs p={p} />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-muted/80 pt-3 border-t border-white/6">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
