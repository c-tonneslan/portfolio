# Portfolio

Personal developer portfolio. Lives at **[c-tonneslan-portfolio.vercel.app](https://c-tonneslan-portfolio.vercel.app)**.

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Deployment | Vercel |

## Featured projects

| Project | Stack | What it is |
|---|---|---|
| [fretwise](https://github.com/c-tonneslan/fretwise) | TypeScript, Web Audio | Interactive fretboard with Karplus-Strong audio synthesis |
| [littledb](https://github.com/c-tonneslan/littledb) | Go | Embedded KV store with a copy-on-write B+tree |
| [pr-pulse](https://github.com/c-tonneslan/pr-pulse) | Python, DuckDB | Data analysis on 4,750 OSS pull requests |
| [agent-eval](https://github.com/c-tonneslan/agent-eval) | TypeScript, Anthropic SDK | From-scratch LLM eval harness |

## Run locally

```bash
git clone https://github.com/c-tonneslan/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Adding a project

Edit `src/data/projects.ts` and add an entry to the `projects` array. To also feature it on the home page, add it to `src/components/Featured.tsx`.

MIT.
