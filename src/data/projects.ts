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
      "Interactive map of every affordable-housing project in NYC's HPD pipeline. Filter by borough, construction type, and project size; click a marker for the full income-tier and bedroom mix.",
    longDescription:
      "Aggregates 8,983 building-level rows from NYC's Open Data Socrata API into 3,707 projects, computes centroid coordinates per project, and plots them on a MapLibre GL map with cluster-on-zoom. Sidebar list and map stay in sync; the detail panel shows income-tier breakdown (extremely-low through middle income), bedroom mix, council district, community board, prevailing-wage and extended-affordability flags. Data is fetched at build time and shipped as a 2.2 MB JSON in /public, so the page renders with no backend.",
    tech: ["TypeScript", "Next.js", "MapLibre GL", "Socrata", "Tailwind"],
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
