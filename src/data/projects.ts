export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  status: "live" | "in-progress" | "planned";
  category: "civic" | "transit" | "data";
}

export const projects: Project[] = [
  {
    id: "civic-philly",
    title: "civic-philly",
    description:
      "A real-asset civic tool for Philadelphia. 5,000+ housing developments, zoning permits, transit projects, and capital investments joined against census tracts, council districts, RCOs, council-member contacts, OPA owners, and L&I displacement signals. Full-text search, public API, RSS, equity overlay, and a mobile bottom-sheet for organizers at meetings.",
    longDescription:
      "civic-philly stitches Philadelphia's public records into one queryable map. 5,000+ housing developments, zoning permits, transit projects, and capital infrastructure investments are joined against 408 ACS census tracts, 10 council-district polygons, 239 Registered Community Organizations, every council member's contact, 4,212 OPA owners, and 6,400+ L&I displacement signals. The frontend is MapLibre GL over a PostGIS backend; every project is a GEOGRAPHY point so the map runs bbox-bound queries against a GIST index. An equity overlay shades tracts by displacement pressure, full-text search spans every record type, and each council district exposes its own RSS feed and Open Graph card. The mobile layout collapses to a bottom-sheet so organizers can pull up a development's stakeholders and history live in a community meeting. A public JSON API exposes the same data for other civic tools to build on.",
    tech: ["TypeScript", "Next.js 16", "MapLibre GL", "PostGIS", "Census ACS"],
    github: "https://github.com/charlestonneslan/civic-philly",
    live: "https://civic-philly.vercel.app",
    status: "live",
    category: "civic",
  },
  {
    id: "septa-live",
    title: "septa-live",
    description:
      "Live map of every SEPTA mode that publishes realtime data: Regional Rail, BSL, MFL, NHSL, all five subway-surface trolleys, Girard, Media, and Sharon Hill. Click a station for the next 10 arrivals, click a train or trolley for its current stop and delay. Alerts and elevator outages roll up into a banner.",
    longDescription:
      "Built because the official SEPTA app is a list of departures and the agency's website is a static schedule PDF, and neither lets you see the system actually move. Hits five SEPTA endpoints: TrainView for RR positions (15s), TransitViewAll for every in-service trolley and NHSL car (15s), Arrivals for the next N departures from a station on click (20s), Alerts for service events (60s), and Elevator for accessibility outages (5min). Every call is fronted by a Next.js API route so Vercel's edge cache absorbs the load and the client never sees an upstream shape change. SEPTA's feeds are inconsistent (Arrivals spells Chestnut Hill East three ways in one response; TransitViewAll uses Metro letters like T2 while Alerts uses the long name), so a per-line apiNames array canonicalizes every variant onto one Line entry with one color. Leaflet on the canvas renderer over a dark CARTO basemap, polylines for every line in SEPTA Metro brand colors, ~140 stations pinned along Market, Broad, Front, and Kensington, and markers reused across polls so they slide instead of flicker.",
    tech: ["TypeScript", "Next.js 16", "Leaflet", "SEPTA APIs", "Tailwind v4"],
    github: "https://github.com/charlestonneslan/septa-live",
    live: "https://septa-live.vercel.app",
    status: "live",
    category: "transit",
  },
  {
    id: "groundwork",
    title: "groundwork",
    description:
      "Interactive map of 6,500+ affordable-housing projects across six U.S. cities. Layered with census-tract rent burden, a supply-demand gap analysis, and the elected representative for every project's district.",
    longDescription:
      "Pulls live open data from NYC, SF, LA, DC, Chicago, and Philly (Socrata + ArcGIS feature services) and normalizes ~6,500 projects into a single Postgres + PostGIS schema. Every project is a GEOGRAPHY point so the map can do bbox-bound queries via GIST index. A second layer pulls ACS 5-year tract demographics + TIGERweb polygons and computes a per-tract supply-demand gap (rent-burdened households per affordable unit within 1 km) as a pure PostGIS spatial join, surfacing underserved neighborhoods in seconds. A third layer scrapes 85 council members / supervisors so clicking any project surfaces the elected rep, district totals, and sibling projects they're stewarding. Frontend is Leaflet + canvas markercluster with a side-by-side city comparison view.",
    tech: ["TypeScript", "Next.js", "Postgres", "PostGIS", "Leaflet", "Census ACS"],
    github: "https://github.com/charlestonneslan/groundwork",
    live: "https://groundwork-tan.vercel.app",
    status: "live",
    category: "civic",
  },
  {
    id: "civic-rag",
    title: "civic-rag",
    description:
      "Ask plain-English questions about city council legislation. Hybrid retrieval (BM25 + dense embeddings, fused with Reciprocal Rank Fusion) over Legistar matters and events, cited answers from Claude. Whole index sits in a single SQLite file via sqlite-vec and FTS5, no vector DB to run.",
    longDescription:
      "civic-rag is a small but honest RAG pipeline over real municipal data, built to test whether retrieval and citation handling hold up on something messier than synthetic PDFs. The input is convene's NDJSON output (bill numbers, titles, status, sponsor lists, full action trails, plus meeting agendas with per-item votes). Each matter or event is flattened into a single text body, chunked with paragraph-aware overlap, and stored three places at once: a regular chunks table, an FTS5 virtual table for BM25, and a vec0 virtual table for dense embeddings, all sharing one rowid so a chunk lookup hits both rankers. Retrieval runs BM25 and dense kNN in parallel, then fuses with RRF (k=60). Default embeddings are local sentence-transformers (all-MiniLM-L6-v2, CPU, no API key) so the project runs offline; setting VOYAGE_API_KEY swaps in voyage-3 with no code change. Answer generation passes the top-k chunks to Claude as a numbered source list and parses the [n] citation markers back out so the CLI prints source URLs alongside. 17 unit tests covering ingest, chunking, RRF math, store roundtrips, and the answer prompt assembly.",
    tech: ["Python", "Anthropic Claude", "sqlite-vec", "sentence-transformers", "RAG", "BM25"],
    github: "https://github.com/charlestonneslan/civic-rag",
    status: "live",
    category: "civic",
  },
  {
    id: "convene",
    title: "convene",
    description:
      "Pull municipal meeting data from 24 US city portals into one normalized JSON or SQLite shape. Hits the official Legistar Web API plus an HTML scraper for Granicus's older ViewPublisher pages. Full coverage of events, agenda items, roll-call votes, legislation, sponsors, action history, councils, and committees.",
    longDescription:
      "Two-platform municipal-data tool. LegistarAdapter hits Legistar's official REST/OData API that almost nobody uses (the existing python-legistar-scraper goes after brittle HTML; pupa drags in Django+Mongo for what should be a request-and-normalize job). GranicusAdapter scrapes Granicus's ViewPublisher archive pages, which have a consistent DOM across tenants but no API at all. CLI: convene events / matters / bodies / people / memberships, with --since and --since-modified date filters for incremental sync, and optional deep fetches for agenda items, roll-call votes, sponsors, and the full action trail. Output shapes loosely model Open Civic Data so Councilmatic and friends can ingest with minimal remapping; vote values normalize across cities while preserving each platform's verbatim label. Output sinks: pretty JSON, ndjson for jq, or a normalized 9-table SQLite database (upserts on OCD ID so reruns refresh rather than duplicate). 24 cities preconfigured and individually smoke-tested (20 Legistar + 4 Granicus). 34 tests, all using frozen real-API fixtures through an httpx MockTransport so CI never hits the network.",
    tech: ["Python 3.11+", "Pydantic 2", "httpx", "Typer", "BeautifulSoup", "SQLite", "Legistar Web API", "Open Civic Data"],
    github: "https://github.com/charlestonneslan/convene",
    status: "live",
    category: "civic",
  },
  {
    id: "soda",
    title: "soda",
    description:
      "A Go CLI for Socrata-based open data portals. 49 government portals preconfigured (NYC, Chicago, Seattle, LA, the CDC, plus 44 others). Nine commands: search across every portal, list/pull/info on one, stats/open utilities, watch for new rows, diff two snapshots. Outputs JSON, NDJSON, CSV, or directly into SQLite. Single static binary, no Python interpreter required.",
    longDescription:
      "Most major US municipal and state governments publish open data through Socrata. The API is solid but the dev experience is rough: the web UI is slow and the existing Python clients require a script for every one-off pull. soda fills that gap with nine commands: portals, ls, info, stats (row count + date range without downloading), search (Discovery API across every portal or one), pull (full SoQL filter support plus --all auto-pagination for million-row datasets), watch (poll on an interval, emit only rows past a stored high-watermark; state persists so cron runs pick up where they left off), diff (row-level compare keyed on :id), and open. Four output sinks: pretty JSON, NDJSON for jq, CSV, and SQLite (one table per dataset, columns typed from the SODA schema, upserts on :id). 49 portals preconfigured and smoke-tested across cities, states, federal, and international. Built on Go 1.25 + cobra + pure-Go modernc.org/sqlite so cross-compilation needs no CGO. Release workflow cross-compiles to 5 platform/arch combos and generates a Homebrew formula. Pairs with convene for civic-tech work: convene gets meeting data from Legistar/Granicus, soda gets every other dataset cities publish through Socrata.",
    tech: ["Go 1.25+", "cobra", "modernc.org/sqlite", "Socrata SODA + Discovery API"],
    github: "https://github.com/charlestonneslan/soda",
    status: "live",
    category: "data",
  },
  {
    id: "datamade-challenge",
    title: "Chicago Restaurant Permits Map (DataMade challenge)",
    description:
      "Django + React-Leaflet choropleth of Chicago restaurant permit issuance by community area, by year. Completion of DataMade's public code challenge. Single aggregate query in the view, AbortController-cancelled fetches, color legend keyed to that year's max, hover popups with raw counts, top-5 sidebar.",
    longDescription:
      "DataMade is a Chicago civic-tech shop and their public code-challenge-v2 repo is the work sample they screen candidates with. I did it as a portfolio piece because civic data tools are the kind of thing I want to build. The skeleton ships with stubs in serializers.py, RestaurantPermitMap.js, and tests/test_views.py; my job was to fill them in. On the backend, get_num_permits reads counts from a context dict built once in MapDataView so the serializer is a pure projection and the year filter is a single GROUP BY query instead of 77 per-area SELECTs. On the frontend, the React component fetches with AbortController so changing the year mid-flight doesn't race, memoizes counts and totals, builds the choropleth from a quartile scale relative to that year's max, and renders a legend that spells out the bucket ranges so the colors mean a concrete number. Hover toggles popup + thicker border. I also added a top-5 areas sidebar to give the page a takeaway beyond the map itself. Tests went from one stubbed case to three (correct counts, no-year handling, areas with zero permits), all passing against the project's real PostGIS container.",
    tech: ["Django", "Django REST Framework", "React", "react-leaflet", "PostGIS", "Docker"],
    github: "https://github.com/charlestonneslan/code-challenge-v2",
    status: "live",
    category: "civic",
  },
  {
    id: "bandstand",
    title: "bandstand",
    description:
      "Philadelphia jazz, tonight. Twenty-one rooms across the city: live jazz clubs, jam sessions, listening rooms, vinyl bars, DJ nights, and the bistros that play real jazz on the system. Per-venue scrapers re-pull nightly, the rest hand-curated with confidence tags and verify-on-source links. Repertory-style editorial layout with a city map at /map.",
    longDescription:
      "Built because the Philly jazz calendar lives in twelve places at once. bandstand stitches them together, then extends out past the stages to vinyl bars, DJ rooms, and the restaurants whose music someone actually picked. Six tag categories, color-coded everywhere from the venue cards to the map markers. Per-venue scrapers run via npm run refresh and ship as part of the prebuild step on Vercel, so every deploy bakes in current data; a failed scraper keeps the previous batch instead of taking the build down. Chris' Jazz Cafe pulls upcoming shows from the events page (cheerio against .event-list-item blocks); South Jazz Kitchen reads the JSON-LD Event block off each event page. The schedule resolver walks any date range in America/New_York, merges scraped + hand-curated, dedupes by id, and applies overrides for cancellations. Map page is MapLibre GL JS with openfreemap positron (no API key), markers colored by primary tag. Vercel Cron triggers a Deploy Hook nightly. Stack: Next.js 16, React 19, TypeScript, Tailwind v4, maplibre-gl, cheerio.",
    tech: ["TypeScript", "Next.js 16", "Tailwind v4", "React 19", "MapLibre GL", "cheerio"],
    github: "https://github.com/charlestonneslan/bandstand",
    live: "https://bandstand-bay.vercel.app",
    status: "live",
    category: "civic",
  },
];

export const categories = {
  all: "All Projects",
  civic: "Civic",
  transit: "Transit",
  data: "Open Data",
} as const;
