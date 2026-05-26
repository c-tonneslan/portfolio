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
  category: "ai" | "fullstack" | "backend" | "devtool" | "data";
}

export const projects: Project[] = [
  {
    id: "contestlab",
    title: "contestlab",
    description:
      "LeetCode-style coding contests in the browser. Each contest pulls four problems (easy through hard) from Codeforces and from Claude (for novel AI-generated problems), runs them in a Monaco editor with a 90-minute timer, and judges in-browser via Pyodide (Python compiled to WebAssembly). Scoring decays with elapsed time and adds 5-minute penalties per wrong submission, mirroring LeetCode's weekly contest formula. Built to drill technical interview pacing without rate limits or backend judges.",
    longDescription:
      "I wanted a tool to drill technical interview pacing on the kind of problem mix that shows up in real onsite loops, so I built one. A contest is four problems pulled by difficulty tier (easy, easy-medium, medium, hard). The default mix is three Codeforces problems plus one Claude-generated problem in the hardest slot, so every round has at least one problem you can't have seen before. The Codeforces side uses their public problemset API (no auth, ~9000 rated problems with tags) and biases by pattern if you pick one. The generated side prompts Claude to write a novel problem with a markdown statement, examples, hidden test cases, and a reference Python solution; the reference solution is what the test cases get validated against before they're committed. Code execution runs entirely in the browser via Pyodide — Python compiled to WebAssembly. I started with Piston (free public judge) and Judge0 (free tier with API key) but Piston went whitelist-only in February 2026 and Judge0 rate-limits hard, so the browser-side approach is both simpler and has no caps. The tradeoff is a 10MB one-time Pyodide download, cached after first load. Scoring approximates LeetCode's weekly contest formula: full credit if solved within 10 minutes, linear decay to 30% credit at contest end, 5-minute penalty added to the effective solve time for every wrong submission before the AC. The Monaco editor is Microsoft's VS Code editor as a React component, configured for Python. Contests persist to localStorage so reloading mid-round doesn't lose progress. Stack: Next.js 16, TypeScript, Tailwind, Anthropic SDK for problem generation, Pyodide for execution.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Pyodide", "Anthropic Claude", "Monaco"],
    github: "https://github.com/c-tonneslan/contestlab",
    live: "https://contestlab.vercel.app",
    status: "live",
    category: "devtool",
  },
  {
    id: "scour",
    title: "scour",
    description:
      "A fast, parallel, gitignore-aware recursive grep written from scratch in Rust. A worker pool walks the directory tree across every core, an atomic counter handles termination, .gitignore patterns compile to per-rule regexes, and matching runs on raw bytes so non-UTF-8 files don't crash the search. Smart-case, colored output, stdin, grep-style exit codes. Six modules, ~900 lines, 29 tests.",
    longDescription:
      "scour is a from-scratch take on the ripgrep idea, kept small enough to read in one sitting. The interesting part is the walk: a pool of worker threads shares one queue of directories, each worker pops a directory, reads it, hands files to the search code, and pushes subdirectories back onto the queue. Termination is the subtle bit, an atomic counter is incremented before a subdirectory is queued and decremented after a directory is fully processed, so whichever worker drops it to zero knows the whole tree is done and signals the rest to shut down. Gitignore handling parses each rule into a regex once (a single star becomes a no-slash wildcard, a double star crosses directory boundaries, a bracket class stays a class) and matches paths relative to the directory each .gitignore lives in; the walker keeps a stack of the .gitignore files above the current directory and the deepest one with an opinion wins, so a nested negation rule can re-include something a parent excluded. Matching runs on raw bytes through the regex crate's byte API, and files with a NUL byte near the start are treated as binary and skipped. Smart-case mirrors ripgrep: an all-lowercase pattern searches case-insensitively, a capital letter flips it to sensitive, and escapes don't count. Flags cover ignore-case, case-sensitive, fixed-strings, word-boundary, files-with-matches, per-file counts, hidden files, no-ignore, and a configurable thread count. Built on Rust with regex, clap, and crossbeam-channel; the matcher, the gitignore translation, the line search, and the output formatting each have their own unit tests.",
    tech: ["Rust", "regex", "crossbeam-channel", "clap"],
    github: "https://github.com/c-tonneslan/scour",
    status: "live",
    category: "devtool",
  },
  {
    id: "soda",
    title: "soda",
    description:
      "A Go CLI for Socrata-based open data portals. 49 government portals preconfigured (NYC, Chicago, Seattle, LA, the CDC, plus 44 others). Nine commands: search across every portal, list/pull/info on one, stats/open utilities, watch for new rows on an interval, diff two snapshots row-by-row. Outputs JSON, NDJSON, CSV, or directly into a SQLite database with auto-pagination for million-row datasets. Single static binary, no Python interpreter required.",
    longDescription:
      "Most major US municipal and state governments publish open data through Socrata. The API is solid but the dev experience around it is rough: the web UI is slow, the existing Python clients (sodapy) require writing a script for every one-off pull, and there's no go-to terminal tool. soda fills that gap. Nine commands: portals (list known), ls (datasets in a portal), info (metadata + column schema), stats (row count + date range without downloading), search (Discovery API across every portal or one), pull (download rows with full SoQL filter support — --where / --order / --select — plus --all auto-pagination for datasets that span millions of rows), watch (poll a dataset on an interval, emit only rows whose :updated_at exceeds a stored high-watermark; state persists in ~/.cache/soda so cron runs pick up where they left off; --once for cron use), diff (row-level compare two JSON snapshots keyed on :id with field-level old/new for changed rows), and open (browser shortcut). Four output sinks: pretty JSON (default), NDJSON (one record per line, for jq), CSV, and SQLite (one table per dataset, columns typed from the SODA schema, upserts on :id, unknown columns added on the fly). --cache stores GET responses under ~/.cache/soda for iterative work. --verbose logs every URL hit. 49 portals preconfigured and smoke-tested: every major US city (NYC, Chicago, LA, Seattle, SF, DC, Boston, Baltimore, Philly, Austin, Dallas, Houston, Denver, Phoenix, Honolulu, Nashville, Miami, plus more), state portals (NY, CT, MD, WA, IL, TX, OR, HI, IA, VT), federal (CDC, HealthData.gov, Medicare, Energy, Transportation), and international (Edmonton, Australia). Adding a new portal is a one-line entry. Built on Go 1.25 + cobra + stdlib net/http; SQLite via pure-Go modernc.org/sqlite so cross-compilation needs no CGO. Tests cover diff, sqlitesink, cache, socrata, and portals packages using httptest with custom RoundTrippers that rewrite hostnames so the real URL builder runs unchanged. Race-flagged in CI. Release workflow on tag push cross-compiles to 5 platform/arch combos, bundles each as a tar.gz, computes SHA256SUMS, and generates a Homebrew formula that's auto-pushed to a tap repo. Full mkdocs-material docs site at c-tonneslan.github.io/soda with quick-start, per-command pages, SoQL reference, SQLite recipe, and change-detection recipe. Pairs with convene for civic-tech work: convene gets meeting data from Legistar/Granicus, soda gets every other dataset cities publish through Socrata.",
    tech: ["Go 1.25+", "cobra", "modernc.org/sqlite", "Socrata SODA + Discovery API"],
    github: "https://github.com/c-tonneslan/soda",
    status: "live",
    category: "devtool",
  },
  {
    id: "convene",
    title: "convene",
    description:
      "Pull municipal meeting data from 24 US city portals into one normalized JSON or SQLite shape. Hits the official Legistar Web API plus an HTML scraper for Granicus's older ViewPublisher pages. Adding a new city is a one-line registry entry. Full coverage of events, agenda items, roll-call votes, legislation, sponsors, action history, councils, committees, council members, and committee memberships. Incremental sync via --since-modified, on-disk cache, one-command SQLite output, ndjson streaming, reusable GitHub Action for daily snapshots, and a full mkdocs site.",
    longDescription:
      "Two-platform municipal-data tool. LegistarAdapter hits Legistar's official REST/OData API at webapi.legistar.com that almost nobody uses (the existing python-legistar-scraper goes after HTML pages, brittle, and pupa drags in Django+Mongo for what should be a request-and-normalize job). GranicusAdapter scrapes Granicus's ViewPublisher archive pages, which have a consistent DOM across tenants but no API at all. CLI: convene events / matters / bodies / people / memberships. Date filters on --since (EventDate / MatterIntroDate) and --since-modified (LastModifiedUtc, for incremental sync). Optional deep fetches: --include-items (agenda lines, learned that Legistar's bulk events endpoint returns empty EventItems arrays so you have to ask per-event), --include-votes (roll-call votes, EventItemRollCallFlag is unreliable so when the user opts in we just ask the /votes endpoint), --include-sponsors (bill sponsors per matter), --include-history (the full MatterAction trail with each action carrying a joinable event_id that maps back to the originating meeting). Output shapes loosely model Open Civic Data so Councilmatic and friends can ingest with minimal remapping. Vote values normalize across cities ('In Favor'/'Yea'/'Aye'→yes, 'Against'/'Nay'→no, 'Excused'/'Not Present'→absent) and the platform's verbatim label is preserved in raw_value. Output sinks: pretty JSON, ndjson for piping to jq, or --to FILE.db for a normalized SQLite database (9 tables, upserts on OCD ID so reruns refresh rather than duplicate). On-disk HTTP cache for iterative work. 24 cities preconfigured and individually smoke-tested against live portals: 20 Legistar (Philly, Chicago, Seattle, Boston, Pittsburgh, Detroit, Phoenix, Denver, Nashville, Miami-Dade, Charlotte, Sacramento, San Jose, Minneapolis, KC, Louisville, Oakland, Baltimore, SF with /events skipped due to tenant misconfig, NYC behind a free token) plus 4 Granicus (St Paul, New Orleans, Scranton, Duluth). Error messages are first-class: 400s carry Legistar's body text, 401/403 hints at the token flag, 5xx explains it's usually per-tenant config, Granicus 404s suggest checking the view_id. Reusable composite action at .github/actions/snapshot pulls one or more cities and writes JSON into a directory, designed to commit nightly to a git-versioned civic-data archive repo. Full mkdocs-material docs site with getting started, recipes (SQLite, sync, GitHub Action), CLI/API reference, and an adapter-authoring guide. PyPI release workflow on tag push via trusted publishing. 34 tests, all using frozen real-API fixtures through an httpx MockTransport so CI never hits the network. GitHub Actions runs ruff + pytest on Python 3.11, 3.12, 3.13.",
    tech: ["Python 3.11+", "Pydantic 2", "httpx", "Typer", "BeautifulSoup", "SQLite", "Legistar Web API", "Granicus", "Open Civic Data"],
    github: "https://github.com/c-tonneslan/convene",
    status: "live",
    category: "devtool",
  },
  {
    id: "personnel",
    title: "personnel",
    description:
      "Trace who played on what record. Search any musician, walk their discography, click any collaborator on any track to land on their page. The whole point: see how the room moves between records, and how every musician you love is connected to every other one. Built on MusicBrainz, which is open + free.",
    longDescription:
      "Six-degrees-of-separation for music personnel, built on MusicBrainz (the open, free music encyclopedia). Server-side fetch through Next.js API routes that respect the 1-req-per-sec anonymous rate limit with a serialized fetch + 1.1s gap between calls, and a 1-hour edge revalidate so the same artist page doesn't keep hitting upstream. Each artist page renders bio + life span + external links (Discogs / Wikipedia / official site / streaming) + a year-grouped discography of every release-group + a sidebar of related artists pulled from MusicBrainz's artist-rel relationships (band membership, marriages, mentor links, etc.). Each release-group page renders the track list with per-track artist credits (so a guest player on one track is a clickable link straight to their page), the full personnel pulled from those credits sorted by track count, MusicBrainz-supplied external links, and constructed-URL listen links for Spotify / YouTube / Apple Music since those aren't in MusicBrainz directly. The whole app is navigation: every artist name and every release title is a link, every page loads fast (edge-cached after first fetch), and you can spend an hour walking the connections.",
    tech: ["TypeScript", "Next.js 16", "Tailwind v4", "MusicBrainz"],
    github: "https://github.com/c-tonneslan/personnel",
    live: "https://personnel-iota.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "septa-live",
    title: "septa-live",
    description:
      "Live map of every SEPTA mode that publishes realtime data: Regional Rail, BSL, MFL, NHSL, all five subway-surface trolleys (T1-T5), Girard Avenue (G/Route 15), Media (D1), Sharon Hill (D2). Color-coded with SEPTA Metro's brand palette, line shapes drawn between every station, RR trains and surface vehicles polled separately and overlaid on the map. ~140 stations pinned accurately along Market, Broad, Front, and Kensington. Click a station for the next 10 arrivals, click a train or trolley for its current stop and delay. Alerts and elevator outages roll up into a banner.",
    longDescription:
      "Built because the official SEPTA app is a list of departures and the agency's website is a static schedule PDF, and neither one lets you see the system actually move. Hits five SEPTA endpoints. TrainView for RR positions (15s). TransitViewAll for every in-service trolley and NHSL car (15s). Arrivals for the next N departures from a station on click (20s). Alerts for system service events (60s). Elevator for accessibility outages (5min). Every call is fronted by a Next.js API route so Vercel's edge cache absorbs the load and the client never sees an upstream shape change. SEPTA's feeds are inconsistent (Arrivals spells Chestnut Hill East three different ways across one response, TransitViewAll uses Metro letters like T2 while Alerts uses the long name Market-Frankford), so src/data/lines.ts carries an apiNames array per line that canonicalizes every variant onto one Line entry with one color. Leaflet on the canvas renderer over a dark CARTO basemap. Polylines for every line draw through stationOrder in SEPTA Metro brand colors (orange B, blue L, purple M, green T, yellow G, teal D), and each RR line uses its individual published color. Train and vehicle markers are reused across polls so they slide instead of flicker. The station list (~140 entries) has BSL coords pinned to the Broad Street centerline, MFL pinned to Market then up Front then bent into Kensington and Frankford for the El, the full NHSL run from 69th to Norristown, the shared subway-surface tunnel, and every trolley terminus + key intermediate stop. Sidebar groups lines by mode (RR / Subway & Light Rail / Trolley) with per-group hide/show, a most-delayed leaderboard pulling from both feeds, a type-ahead station picker, and detail panels for trains, vehicles, and stations.",
    tech: ["TypeScript", "Next.js 16", "Leaflet", "SEPTA APIs", "Tailwind v4"],
    github: "https://github.com/c-tonneslan/septa-live",
    live: "https://septa-live.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "pulse-drillholes",
    title: "3D Drillhole Viewer (Pulse Intelligence challenge)",
    description:
      "Completion of Pulse Intelligence's Product Engineer take-home: an interactive Next.js + Three.js scene rendering 31 drillholes + 14 mineralised intercepts from an ASX gold drilling announcement. Click any collar or intercept to inspect the hole and deep-link into the source PDF page.",
    longDescription:
      "Pulse Intelligence's brief asks for a proof-of-concept that turns the data in an ASX drilling announcement (a 1.4 MB PDF + two CSVs covering 31 holes and 14 mineralised intercepts) into something a mining-investor client could walk through. The hard part is the geometry: each hole has a collar (lat/lon/rl), a dip angle below horizontal, and an azimuth clockwise from north, and the intercept rows are downhole-depth ranges along that path. I work in MGA51 projected metres (the CSV ships east/north/rl in that frame) and recentre the scene at the mean collar position so the camera deals with hundreds-of-metres offsets instead of MGA-zone-scale absolutes. Each hole renders as a thin grey collar-to-TD trace plus a colored cylinder per mineralised interval, with grade mapped to a yellow→orange→red ramp clamped at 20 g/t Au. Click any collar or intercept and the sidebar pops out: prospect, hole type, total depth, dip/azimuth, lat/lon + MGA51 coords, the full intercept list, plus a deep-link to the source PDF page that called out the intercept (`/data/source.pdf#page=N`). OrbitControls drives orbit/zoom/pan; clicking empty canvas deselects. Z is up so vertical reads vertical despite Three.js's Y-up default. NOTES.md walks the actual time spent (~2h), the geometry math, the trade-offs, and the stretch deploy I'd add with more time. Stack: Next.js 16, react-three-fiber, drei, Tailwind v4.",
    tech: ["Next.js", "TypeScript", "react-three-fiber", "Three.js", "Tailwind"],
    github: "https://github.com/c-tonneslan/pulse-drillholes",
    status: "live",
    category: "fullstack",
  },
  {
    id: "propeller-grabdata",
    title: "NOAA CORS RINEX Downloader (Propeller hardware challenge)",
    description:
      "Completion of Propeller Aero's public Go take-home: a CLI that pulls hourly RINEX GNSS observation files from NOAA's CORS network across an arbitrary ISO 8601 time range and merges them into one .obs file. Standard library only. Verified end-to-end against the real NOAA server.",
    longDescription:
      "Propeller's drone-surveying platform uses GNSS observation data from NOAA's CORS reference stations to post-process AeroPoint positions to centimetre accuracy. Their challenge: write a CLI that takes a base-station ID + ISO 8601 start/end times, downloads every hourly RINEX block whose hour intersects the range, and merges them into one observation file. Go 1.22, stdlib only. Three small packages: timewindow enumerates the blocks (hour-letter mapping 0-23 to a-x, day-of-year + year rollovers, end-exclusive semantics, the brief's exact example call pinned down by a test), fetcher does the HTTP GET + gzip decompression (404 surfaces as ErrNotFound so the CLI can warn-and-continue when older logs have been rotated off, 5xx stays as a regular error), merger takes a chronological list of RINEX 2.x bodies and concatenates them keeping the first file's header plus a 'merged N hourly RINEX blocks' COMMENT inside the header. Downloads run in parallel into ordered slots so the merge sees blocks in chronological order regardless of which one finishes first. Verified end-to-end against the real NOAA server: a 3-hour pull on station nybp produces a ~44 MB merged file with exactly one header and three epoch streams in order, matching the shape of the reference example.obs in the upstream repo. The README walks the design trade-offs, especially why the merge is pragmatic rather than a TEQC reimplementation.",
    tech: ["Go", "net/http", "compress/gzip", "bufio"],
    github: "https://github.com/c-tonneslan/hardware-backend-challenge",
    status: "live",
    category: "backend",
  },
  {
    id: "gigs-notifications",
    title: "Notifications-to-Svix Bridge (Gigs challenge)",
    description:
      "Completion of Gigs's public Go take-home: a small service that ingests CloudEvents-shaped Pub/Sub notifications and forwards each one to Svix as a webhook message, with end-to-end idempotency and retry/backoff against Svix rate limits. Standard library only.",
    longDescription:
      "Gigs's challenge wants a small bridge between their Pub/Sub event firehose and Svix (their webhooks-as-a-service vendor): accept POST /notifications, validate, dedup, forward. Three layers, each a tight interface. internal/dedup is an in-memory store with a 24h TTL and opportunistic GC, ready to swap for Redis when a real deployment needs cross-replica state. internal/svix wraps the upstream HTTP API with capped exponential backoff + jitter on 429/5xx, honoring Retry-After, with a Fake client for tests and demo. internal/server is the HTTP handler. The subtle correctness call is dedup ordering: mark before send, roll back on Svix failure, so a parallel duplicate POST loses fairly but a Pub/Sub retry of a failed delivery still flows through. On Svix rate limit, propagate 429 upstream so Pub/Sub backs off rather than holding the HTTP connection open through the entire retry budget. Demo mode boots with the FakeClient when SVIX_BASE_URL/SVIX_APP_ID aren't set, so the brief's test/run.sh works locally — all 50 sample events accept cleanly, a replay returns 'duplicate'. NOTES.md walks the production list: Redis dedup, OIDC token verification on the Pub/Sub push, OpenTelemetry tracing, dead-letter queue, a customer-facing replay UI + endpoint health dashboard. Standard library only.",
    tech: ["Go", "net/http", "encoding/json", "log/slog"],
    github: "https://github.com/c-tonneslan/backend-challenge",
    status: "live",
    category: "backend",
  },
  {
    id: "stone-authorizer",
    title: "Card Transaction Authorizer (Stone Payments challenge)",
    description:
      "Completion of Stone Payments's three-phase Go take-home: build a card transaction authorizer, layer fraud detection rules, then scale it behind a worker pool with bounded queue and metrics. Standard library + uuid/testify (already in the starter), Go 1.23.",
    longDescription:
      "Stone's challenge is staged across three phases that map cleanly onto a real payments stack. Phase 1 is the authorizer: parse a card transaction payload, validate the RFC 3339 timestamp (reject parseable-but-future and unparseable separately with the documented error strings), persist to a repo, return a status + UUID. Phase 2 adds fraud detection: amount over $10,000 flags 'high amount', more than 5 transactions per card in the last minute flags 'not standard'. Flagged transactions still approve but emit approved_with_warning with the reason. Phase 3 is the scale layer: AuthorizerRepository becomes a fixed-capacity circular buffer (default 10k entries, oldest overwritten), the synchronous use case gets wrapped in a worker pool with a bounded job queue (WORKER_COUNT and QUEUE_SIZE from env), queue-full submits return 'Too many requests' / HTTP 429, and a GET /metrics endpoint reports processed/rejected/queue_usage/active_workers. The rate-rule's window uses wall-clock receivedAt rather than payload timestamp so a backdated payload can't dodge it. The pool implements the same interface the controller depends on, so the controller treats sync UC and pool identically. Standard library only for the HTTP layer (Go 1.22 pattern-aware ServeMux). 10 tests: 7 from the starter (which I had to update to use a 2099 future date because the original 2026 date had passed) plus 3 new pool tests for the round-trip, queue-full rejection, and metrics snapshot.",
    tech: ["Go", "net/http", "google/uuid", "stretchr/testify"],
    github: "https://github.com/c-tonneslan/card-interview",
    status: "live",
    category: "backend",
  },
  {
    id: "congestion-tax",
    title: "Congestion Tax Calculator (Volvo Cars challenge)",
    description:
      "Completion of Volvo Cars's public Go take-home: rewrite the half-finished calculator, fix the bugs, add an HTTP entry point, and move city tax rules to JSON config so multiple cities can be served from one binary. Go stdlib only.",
    longDescription:
      "Volvo's starter shipped with a calculator package that had real bugs and no entry point. The single-charge accumulator only added a fee in the 'gap > 60 min' branch so two passes inside the same hour returned 0 SEK. intervalStart was set once at dates[0] and never moved. The midday 8 SEK band only fired at minute 30-59 within hours 8-14, so 9:00-9:29 incorrectly returned 0. The Motorbike struct's getVehicleType returned 'Motorbike' but the exempt check matched 'Motorcycle', so motorbikes were never tax-exempt despite the spec. GetTax panicked on an empty slice. I rewrote calculator/ as a pure function with sort + per-day bucketing, moved every parameter into JSON config (toll-free dates, exempt vehicles, fee brackets, single-charge window, daily cap), and wrote a cmd/server that mounts each city at POST /tax/{city}. The new pattern-aware net/http.ServeMux from Go 1.22 handles routing without chi or gorilla. Ships with a gothenburg.json and a stockholm.json so the bonus 'works in other cities' scenario is real, not theoretical. About 18 tests across the calculator math, the JSON loader, and bracket boundary cases, plus a full reproduction of the assignment's post-it scenario. questions.md flags the ambiguities I'd confirm with the team.",
    tech: ["Go", "net/http", "encoding/json", "log/slog"],
    github: "https://github.com/c-tonneslan/congestion-tax-calculator",
    status: "live",
    category: "backend",
  },
  {
    id: "origin-uam",
    title: "User Access Management Service (Origin Financial challenge)",
    description:
      "Completion of Origin Financial's public backend take-home: a Go service that mediates signup and a streaming eligibility-CSV processor for employer rosters. Standard library only — net/http for routing, encoding/csv for streaming. Honors the brief's 50MB-file-in-256MB-RAM constraint by reading one record at a time and keeping only the per-employer seen-emails set in memory.",
    longDescription:
      "Origin's take-home asks you to build the user access management service for a fintech where users arrive two ways: self-signup (DTC) or pre-loaded by an employer via a roster CSV. I built it in Go using only the standard library: net/http for two endpoints, encoding/csv for streaming, log/slog for structured logs. The trickiest bit is shape: both account paths need to live in the same User Service record, distinguished by access_type + activated. Eligibility uploads create employer-typed users with activated=false; signup looks them up and either activates the preloaded record (PATCH password + flip activated) or creates a new DTC user. Existing activated emails get a clean 409. The streaming path reads CSV one record at a time and keeps a single per-employer set of seen emails (used only for the off-boarding diff at the end of the upload), so a 50MB file with ~50k rows stays well inside the 256MB cap. Re-uploads are idempotent, returning users get un-terminated automatically, and the per-row report file (CSV with line + email + status + reason) flushes after every row so partial runs leave usable artifacts. The User Service and Employer Service are Go interfaces with in-memory fakes for the demo and tests; a real deployment swaps in HTTP clients. About 30 tests across password rules, signup flow, CSV processing, and HTTP handlers.",
    tech: ["Go", "net/http", "encoding/csv", "log/slog"],
    github: "https://github.com/c-tonneslan/origin-backend-take-home-assignment",
    status: "live",
    category: "backend",
  },
  {
    id: "datamade-challenge",
    title: "Chicago Restaurant Permits Map (DataMade challenge)",
    description:
      "Django + React-Leaflet choropleth of Chicago restaurant permit issuance by community area, by year. Completion of DataMade's public code challenge. Single aggregate query in the view, AbortController-cancelled fetches, color legend keyed to that year's max, hover popups with raw counts, top-5 sidebar.",
    longDescription:
      "DataMade is a Chicago civic-tech shop and their public code-challenge-v2 repo is the work sample they screen candidates with. I did it as a portfolio piece because civic data tools are the kind of thing I want to build. The skeleton ships with stubs in serializers.py, RestaurantPermitMap.js, and tests/test_views.py; my job was to fill them in. On the backend, get_num_permits reads counts from a context dict built once in MapDataView so the serializer is a pure projection and the year filter is a single GROUP BY query instead of 77 per-area SELECTs. On the frontend, the React component fetches with AbortController so changing the year mid-flight doesn't race, memoizes counts and totals, builds the choropleth from a quartile scale relative to that year's max, and renders a small legend that spells out the bucket ranges so the colors mean a concrete number. Hover toggles popup + thicker border, mouseout resets. I also added a top-5 areas sidebar to give the page a takeaway beyond the map itself. Tests went from one stubbed case to three (correct counts, no-year handling, areas with zero permits), all passing against the project's real PostGIS container.",
    tech: ["Django", "Django REST Framework", "React", "react-leaflet", "PostGIS", "Docker"],
    github: "https://github.com/c-tonneslan/code-challenge-v2",
    status: "live",
    category: "fullstack",
  },
  {
    id: "vouch",
    title: "vouch",
    description:
      "Go CLI tuned for the failure modes of AI-generated code. v1 ships a hallucination detector that runs go build, classifies the errors into four patterns the model tends to produce (undefined symbol, undefined method, arity mismatch, type mismatch), and optionally scopes the report to PR-touched lines via --diff. Roadmap covers gopls-backed signature checks, an over-mock detector for tests that would pass against a no-op implementation, refactor-residue detection, and an eval harness measuring precision/recall against a corpus of real AI-authored merged PRs.",
    longDescription:
      "Generic linters flag what's broken in any code; vouch flags what AI specifically gets wrong. The hallucination detector shells out to go build, parses the compiler error output, and classifies each error into one of four AI-failure patterns: undefined identifiers (called the wrong constructor name), undefined methods (invented a method on a real type), arity mismatches (off-by-one on argument lists), and type mismatches (passed the wrong type at a call site). Errors that don't match a pattern are dropped, so the output is signal not noise. The --diff <ref> flag reads `git diff <ref>...HEAD --unified=0` and only reports findings that touch lines changed in the PR, which is what you actually want during review. Text format for terminals, JSON for piping; exit 0 clean, 1 findings, 2 tool error. The interesting next step is the eval harness: a corpus of 50+ labeled real-world AI-authored PRs sourced from `Generated with Claude Code` / `Co-Authored-By: Claude` trailer searches plus Devin / Cursor / Sweep merges, with precision and recall measured against off-the-shelf linters. That's the credibility differentiator; without it vouch is just another AI linter.",
    tech: ["Go", "go/build", "git"],
    github: "https://github.com/c-tonneslan/vouch",
    status: "in-progress",
    category: "devtool",
  },
  {
    id: "sideman",
    title: "sideman",
    description:
      "Play a keyboard in your browser, hit a button, Claude composes a 4-bar drum + bass accompaniment to fit what you just played, and it plays back layered with your performance. Raw Web Audio synthesis (no Tone.js, no samples), Next.js, Anthropic Haiku.",
    longDescription:
      "Browser-based MIDI keyboard with two octaves, playable by mouse or QWERTY (Z-row + S/D/G/H/J for lower octave, Q-row + 2/3/5/6/7 for upper). The synth is all raw Web Audio: lead is a sawtooth through a lowpass with an ADSR-ish envelope, bass is a detuned sine + square mix through a 400 Hz lowpass, drums are synthesized (kick is a pitched sine, snare is filtered noise + a triangle body, hihat is high-passed noise with a short decay). White noise generated once into a shared AudioBuffer. Recording starts on the first note and captures midi + start ms + duration + velocity for every keypress. The accompany button POSTs the recording to a Next.js API route that hits Anthropic's Messages API with Claude Haiku, asks for a JSON spec of a 4-bar drum + bass groove that fits the performance, and validates the response. Without an API key, a deterministic fallback generates a straight-eighths kick-snare with a root-fifth-octave walking bass keyed to the most-played pitch class. Playback layers your original notes (scheduled against AudioContext.currentTime, sample-accurate) with the generated accompaniment. About 700 lines of TypeScript across the synth, keyboard layout, route, and page.",
    tech: ["TypeScript", "Next.js 16", "Web Audio API", "Anthropic", "Tailwind v4"],
    github: "https://github.com/c-tonneslan/sideman",
    live: "https://sideman-97ix.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "strata",
    title: "strata",
    description:
      "Go CLI that maps how a codebase's architecture drifts over its git history. Samples N commits across the timeline, extracts the package import graph at each, diffs consecutive snapshots, and renders one self-contained HTML report showing packages born, packages died, edges added, edges severed, plus a drift score per commit.",
    longDescription:
      "Code review tools show you what changed in a diff, tag pages show you what shipped in a release. Neither answers 'how did the shape of this codebase evolve?' strata does. Point it at a Go repo, pick a sample size, and it walks the timeline in temp git worktrees, runs `go list -json -deps ./...` at each sample point (shelling out instead of using go/packages directly so historical commits with stale module caches don't blow up), and computes a structural diff between consecutive snapshots. The drift score is symmetric difference of nodes-plus-edges over their union, bounded 0 to 1, so spikes immediately flag architectural events: big refactors, module path renames, accidental new dependencies. The output is one HTML file you can open in any browser, with a sidebar of commits ranked by drift, a Cytoscape force-directed graph of whatever commit you select, and a structural-changes panel listing exactly what came and went. No build step on the consumer side, Cytoscape loaded from a CDN, everything else embedded. About 700 lines of Go across four internal packages (git, graph, diff, report). Tested against the lipgloss v1→v2 module rename, which it correctly flags as 100% drift on the rename commit.",
    tech: ["Go", "Cytoscape.js", "html/template", "go list"],
    github: "https://github.com/c-tonneslan/strata",
    status: "live",
    category: "devtool",
  },
  {
    id: "agentstack",
    title: "agentstack",
    description:
      "Q&A board where every answerer is an AI agent. Worker pool fans questions out in parallel, the judge ranks answers, reputation accrues on a Stack Overflow-style leaderboard. Single Go binary with embedded SQLite, templates, and CSS.",
    longDescription:
      "Self-hosted board with a chi router, html/template UI, and an embedded SQLite store. Posting a question lands it in a bounded worker pool that fans out to every registered agent in parallel, each call deadline-cancellable. The judge runs once the fan-in completes (or the timeout fires) and persists scores, ranks, and rationale, then adjusts agent reputation (+10 for first place, +1 for participating). Two pluggable interfaces: Answerer (one method) has a Mock implementation for offline demos and an Anthropic Messages-API implementation for real answers, with four personas in the default roster (skeptic, theorist, pragmatist, hacker). Judge (one method) has a heuristic judge that scores on length and keyword overlap, and an LLM judge that asks Claude Haiku to rate each answer 0-10 with a rationale, with automatic fallback to the heuristic if the API call fails. SQLite runs in WAL mode with foreign keys on, single open connection so writes serialize cleanly without busy retries. End-to-end test runs the full pipeline against a temp database with three mock agents and verifies reputation gets distributed correctly. About 1,400 lines of Go across six internal packages.",
    tech: ["Go", "SQLite", "chi", "html/template", "Anthropic"],
    github: "https://github.com/c-tonneslan/agentstack",
    status: "live",
    category: "backend",
  },
  {
    id: "fourth-down-audit",
    title: "fourth-down-audit",
    description:
      "NFL 4th-down decision audit. Scores every 4th down in 2018-2024 against a fresh XGBoost win-probability model (log-loss 0.465 vs nflfastR's 0.463 on held-out 2024) and reports 90% bootstrap CIs on each coach's total.",
    longDescription:
      "Trained a new XGBoost win-probability classifier on 300k plays of nflverse pbp. Held out 2024 entirely; landed at log-loss 0.465, within 0.3% of nflfastR's bundled WP model on the same plays. Added a logistic conversion model, a logistic FG-make model, and an empirical punt-net lookup, then computed E[WP|go], E[WP|punt], E[WP|FG] for every 4th down in 2018-2024 with 1,500-iter bootstrap CIs per coach-season. Python pipeline runs locally against a DuckDB store (~50 MB on disk for seven seasons of play-by-play), then dumps every endpoint's response to JSON for a fully static Next.js export on Vercel. The dashboard ranks coaches by WP lost with confidence-interval bars, filters by season, situation (red zone, two-minute, own territory, FG range), and decision type, and on click pops a play drawer with the model's three-option breakdown and an animated WP curve over the surrounding plays. Coaches and the model agree about 57% of the time in 2024; the model says go-for-it on 900+ plays where the coach punted instead. The README is explicit about what the model can't see (opponent strength, weather, personnel) and treats decision quality as separate from outcome quality.",
    tech: ["Python", "XGBoost", "DuckDB", "Next.js", "TypeScript", "Recharts", "Tailwind"],
    github: "https://github.com/c-tonneslan/fourth-down-audit",
    live: "https://fourth-down-audit.vercel.app",
    status: "live",
    category: "data",
  },
  {
    id: "gigledger",
    title: "gigledger",
    description:
      "Personal finance dashboard for 1099 freelancers. Self-employment tax, Section 179, quarterly estimates, and income-volatility runway, all in one place. Built while filing my own 2025 1099 return.",
    longDescription:
      "Next.js + FastAPI app for the four problems Mint and YNAB don't solve when you're self-employed: SE tax sneaks up on people who only budget for income tax, quarterly 1040-ES needs an honest YTD projection, platform fees eat the effective hourly rate, and one slow month is normal but three in a row is an emergency. Tax engine handles SE tax with the SS wage-base cap and Additional Medicare 0.9%, simplified QBI, federal brackets, and per-state math (PA flat 3.07% by default; lookup table for the rest). Section 179 is modeled per-transaction so a laptop purchase reduces this year's tax instead of depreciating. The transaction classifier is two-tier: a learned MerchantRule table handles repeat merchants deterministically, Anthropic Claude Haiku only runs on novel merchants, and every user correction creates a rule so the LLM cost trends to zero. Plaid sandbox for bank connections with a clean demo-data fallback so the app demos without keys. 11 passing tests pin the tax math.",
    tech: ["TypeScript", "Next.js", "Python", "FastAPI", "Postgres", "Plaid", "Anthropic"],
    github: "https://github.com/c-tonneslan/gigledger",
    live: "https://gigledger-lovat.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "act-pacing-coach",
    title: "act-pacing-coach",
    description:
      "Timed ACT math practice that finds where you bled minutes, not just what you got wrong. 20-question ramped half-session with a per-question pace target, then a report with accuracy buckets, difficulty bands, and coach-notes pulled from your data.",
    longDescription:
      "Built while tutoring high schoolers for the ACT. Every kid I've worked with has the same problem: they know the math, they just can't do it fast enough, and Khan Academy doesn't surface that. The app runs a 20-question half-session that ramps in difficulty (D1 pre-algebra up to D6 trig/log) the same way the real ACT math section does, gives every question a pace target (30s for the easy ones, 90-120s for the back-end trig problems), and tracks per-question time even across skips and revisits. End-of-session report has a time-per-question bar chart with the target overlaid as a dashed line, accuracy bucketed by how long you spent (`<30s`, `30-60s`, `60-120s`, `120s+`), difficulty band breakdown so you can see where the wheels come off, topic breakdown across the six ACT math strands, and a coach-notes section that turns the raw data into one-liners a tutor would actually say (\"you spent 2.1x on Q14 and still got it wrong, mark and move next time\", \"3 questions left blank, on the real test guess on everything\"). Skip queue lets you mark and return without losing the per-question timer state. Pure static export, no backend, sessionStorage holds the result. Question bank is a plain TS file so adding sections (English, Reading, Science) is the same pattern. Recommendation engine is six pure functions in `src/lib/analytics.ts`.",
    tech: ["TypeScript", "Next.js 16", "Tailwind v4"],
    github: "https://github.com/c-tonneslan/act-pacing-coach",
    live: "https://act-pacing-coach.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "playcaller",
    title: "playcaller",
    description:
      "Full-stack NFL 4th down decision audit. Scores every 4th-down call from 2018-2023 against an analytical optimum, ranks coaches by win probability left on the field.",
    longDescription:
      "Python pipeline trains three models on six seasons of nflfastR play-by-play: an XGBoost win-probability model (log loss 0.485, AUC 0.841), an XGBoost 4th-down conversion model, and a logistic FG make probability model. Combines them with an empirical punt outcome lookup to compute WP(go) vs WP(punt) vs WP(field goal) for every 4th down. The Next.js dashboard renders the coach leaderboard, lets you sort and filter by season, drops you into a coach-season detail page with every decision sorted by WP cost, and pops a modal play viewer with a WP bar chart for the three options. The top of the leaderboard matches reputational reality: Dan Campbell, Doug Pederson, Brian Flores. Bottom: Pete Carroll, Mike Vrabel, Belichick 2023.",
    tech: ["TypeScript", "Next.js", "Python", "XGBoost", "DuckDB", "Tailwind"],
    github: "https://github.com/c-tonneslan/playcaller",
    live: "https://playcaller-mu.vercel.app",
    status: "live",
    category: "data",
  },
  {
    id: "nflwin",
    title: "nflwin",
    description:
      "NFL in-game win probability model on 225k plays from six seasons of nflfastR. XGBoost hits log-loss 0.485 and AUC 0.841 on held-out 2023.",
    longDescription:
      "Trains a logistic regression and an XGBoost classifier on the standard game-state features (down, distance, field position, score margin, clock, timeouts) and benchmarks them against a score-only baseline. duckdb pulls the modeling table out of 580 MB of CSVs in under a minute. Charts include a calibration curve, feature importance (score_diff carries 67% of the gain), an avg-WP-vs-margin grid broken out by quarter, and a play-by-play replay of Super Bowl LVIII.",
    tech: ["Python", "XGBoost", "DuckDB", "Pandas", "Matplotlib"],
    github: "https://github.com/c-tonneslan/nflwin",
    status: "live",
    category: "data",
  },
  {
    id: "xba-statcast",
    title: "xba-statcast",
    description:
      "Expected batting average from Statcast batted-ball physics. Random Forest and XGBoost on 230k balls in play; xgboost hits AUC 0.904 with four features.",
    longDescription:
      "Same idea as Baseball Savant's published xBA, trained from scratch on the open Statcast mirror. Inputs are launch speed, launch angle, spray angle, and batter handedness. Outputs are per-batter xBA, with a luck leaderboard (BA - xBA, min 200 BIP) that correctly flags Stanton as the unluckiest hitter in the test season (his hardest hits get tracked down because he runs like a tank).",
    tech: ["Python", "XGBoost", "Random Forest", "Pandas", "Matplotlib"],
    github: "https://github.com/c-tonneslan/xba-statcast",
    status: "live",
    category: "data",
  },
  {
    id: "hoopvision",
    title: "hoopvision",
    description:
      "NBA shot quality model on three seasons of pbp. XGBoost hits AUC 0.683 from court coordinates and shot type. Includes a regression test guarding against an outcome leak that the first pass had.",
    longDescription:
      "Trains an xFG% model from 672k field goal attempts. Features are distance, angle, shot-type bucket, is_three flag, and game state. The first version of this hit AUC 0.89, which was suspicious; turned out is_three was derived from score_value, which is zero on every miss. The leak fix dropped AUC to a realistic 0.68 and tests/test_no_score_value_leak.py guards it. Court xFG% heatmap is the headline chart.",
    tech: ["Python", "XGBoost", "Pandas", "Matplotlib"],
    github: "https://github.com/c-tonneslan/hoopvision",
    status: "live",
    category: "data",
  },
  {
    id: "bracketology",
    title: "bracketology",
    description:
      "College basketball head-to-head game predictor with a Monte Carlo bracket simulator. AUC 0.65 on 233 held-out 2023-24 tournament games.",
    longDescription:
      "Aggregates five seasons of ESPN team-box data into team-season efficiency stats (Dean Oliver possessions), then trains on game-level diff features. The Monte Carlo simulator takes any 16/32/64-team list, pairs them in order, and reports each team's probability of reaching each round across 10k random tournaments. The model overrates 80-95% favorites by 10-15 points (March Madness regression to the mean is real).",
    tech: ["Python", "XGBoost", "Monte Carlo", "Pandas", "Matplotlib"],
    github: "https://github.com/c-tonneslan/bracketology",
    status: "live",
    category: "data",
  },
  {
    id: "groundwork",
    title: "groundwork",
    description:
      "Interactive map of 6,500+ affordable-housing projects across six U.S. cities. Layered with census-tract rent burden, a supply-demand gap analysis, and the elected representative for every project's district.",
    longDescription:
      "Pulls live open data from NYC, SF, LA, DC, Chicago, and Philly (Socrata + ArcGIS feature services) and normalizes ~6,500 projects into a single Postgres + PostGIS schema. Every project is a GEOGRAPHY point so the map can do bbox-bound queries via GIST index. A second layer pulls ACS 5-year tract demographics + TIGERweb polygons and computes a per-tract supply-demand gap (rent-burdened households per affordable unit within 1 km) as a pure PostGIS spatial join — surfaces underserved neighborhoods in seconds. A third layer scrapes 85 council members / supervisors so clicking any project surfaces the elected rep, district totals, and sibling projects they're stewarding. Frontend is Leaflet + canvas markercluster (pivoted from MapLibre after a CSP eval issue) with a side-by-side city comparison view.",
    tech: ["TypeScript", "Next.js", "Postgres", "PostGIS", "Leaflet", "Census ACS"],
    github: "https://github.com/c-tonneslan/groundwork",
    live: "https://groundwork-tan.vercel.app",
    status: "live",
    category: "data",
  },
  {
    id: "airwaves",
    title: "airwaves",
    description:
      "Tune into about 5,000 live internet radio stations from a spinning 3D globe. Pick a country, click a glowing marker, hit play.",
    longDescription:
      "Globe.gl + Three.js for the 3D scene, Radio Browser's public API for the station catalog, and a plain <audio> element for streaming. About 2,500 markers are projected onto the globe at any one time with size and brightness scaled by lifetime click count. The sidebar lets you search and filter the full ~5,000-station list. No backend, all of it runs in the browser; the station catalog is cached in localStorage for 24 hours.",
    tech: ["TypeScript", "Next.js", "Three.js", "globe.gl", "Tailwind"],
    github: "https://github.com/c-tonneslan/airwaves",
    live: "https://airwaves-steel.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "fretwise",
    title: "fretwise",
    description:
      "Interactive fretboard editor for guitar and bass with Karplus-Strong audio synthesis. 40+ scales, modes, arpeggios, and bebop vocabulary, all playable in the browser.",
    longDescription:
      "Every note plays through a Karplus-Strong plucked-string synth running in the browser, no samples and no Tone.js. Pre-renders pluck buffers in ~100 lines and caches them per pitch. Ships with 10 tunings, URL-shareable state, keyboard shortcuts, a draw mode for sketching voicings, and a mobile-responsive layout.",
    tech: ["TypeScript", "Next.js", "Web Audio API", "Karplus-Strong", "Tailwind"],
    github: "https://github.com/c-tonneslan/fretwise",
    live: "https://fretwise-neon.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "littledb",
    title: "littledb",
    description:
      "Tiny embedded key/value store in Go. Single-file ACID with a copy-on-write B+tree and MVCC-style snapshot reads. Around 1,500 lines of code.",
    longDescription:
      "Same family of designs as LMDB and BoltDB: 4KB pages, two meta pages with alternating commits for crash safety, copy-on-write B+tree, freelist with pending-release tracking so readers never see torn writes. Benchmarks within 5% of bbolt on writes; ~6x slower on point reads because there's deliberately no mmap.",
    tech: ["Go", "B+tree", "Copy-on-Write", "ACID", "CRC32C"],
    github: "https://github.com/c-tonneslan/littledb",
    status: "live",
    category: "backend",
  },
  {
    id: "flamectl",
    title: "flamectl",
    description:
      "Render a pprof profile as a single-file interactive SVG flamegraph. Takes input from a file, an HTTP URL, or stdin. About 600 lines of Go.",
    longDescription:
      "Parses pprof profiles using the official Google pprof library, aggregates samples into a call tree, and lays the tree out as a self-contained SVG with embedded CSS and an inline hover script. Colors are a deterministic FNV hash of the function name, so the same function gets the same color across runs (useful for diffing flamegraphs by eye).",
    tech: ["Go", "pprof", "SVG"],
    github: "https://github.com/c-tonneslan/flamectl",
    status: "live",
    category: "devtool",
  },
  {
    id: "tcppulse",
    title: "tcppulse",
    description:
      "Multi-target TCP latency monitor with a live TUI. Probes hosts in parallel, draws sparklines per target, reports p50/p90/p99 + loss rate. About 400 lines of Rust.",
    longDescription:
      "Each target gets its own async Tokio task that opens fresh TCP connections on a configurable interval. Latency samples flow over an mpsc channel into a Ratatui-based UI that redraws at 10fps independent of probe rate. Solves the 'is it wifi, ISP, or the service?' question in one process instead of three terminals running ping/curl/mtr.",
    tech: ["Rust", "Tokio", "Ratatui", "Crossterm", "Clap"],
    github: "https://github.com/c-tonneslan/tcppulse",
    status: "live",
    category: "devtool",
  },
  {
    id: "pr-pulse",
    title: "pr-pulse",
    description:
      "Data analysis on 4,750 pull requests from 24 popular open source repos. What predicts merging? Headline: author association is the entire signal.",
    longDescription:
      "Pulled PRs from a mix of Go, Rust, TypeScript, Python, and C/C++ repos via the GitHub GraphQL API, loaded the data into DuckDB, and ran the analyses end-to-end with Pandas and Matplotlib. The README is the actual writeup, with five charted findings. Headline: org members merge at 87%, prior contributors at 69%, drive-by strangers at 2%.",
    tech: ["Python", "DuckDB", "Pandas", "Matplotlib", "GitHub API"],
    github: "https://github.com/c-tonneslan/pr-pulse",
    status: "live",
    category: "data",
  },
  {
    id: "agent-eval",
    title: "agent-eval",
    description:
      "From-scratch LLM agent evaluation framework. 28 tasks across web, code, multistep, and reasoning, with ReAct loop, LLM-as-judge scoring, and confidence intervals on every result.",
    longDescription:
      "An eval harness built from scratch with the Anthropic SDK. Runs an agent through a fixed task suite using a ReAct loop with tool calls, scores results with a mix of exact-match, regex, code-test, and LLM-as-judge rubrics, and reports per-category pass rates with 95% confidence intervals. Logs full trajectories for failure analysis. The point isn't the headline number, it's finding where the agent breaks.",
    tech: ["TypeScript", "Anthropic SDK", "ReAct", "Statistical CI", "LLM-as-Judge"],
    github: "https://github.com/c-tonneslan/agent-eval",
    status: "live",
    category: "ai",
  },
];

export const categories = {
  all: "All Projects",
  ai: "AI / ML",
  fullstack: "Full Stack",
  backend: "Backend",
  data: "Data",
  devtool: "Dev Tools",
} as const;
