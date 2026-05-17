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
