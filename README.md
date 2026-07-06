# Portfolio

Personal developer portfolio. Lives at **[charlestonneslan-portfolio.vercel.app](https://charlestonneslan-portfolio.vercel.app)**.

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
| [civic-philly](https://github.com/c-tonneslan/civic-philly) | TypeScript, PostGIS, MapLibre | 5,000+ Philadelphia civic records joined against census tracts and council districts |
| [septa-live](https://github.com/c-tonneslan/septa-live) | TypeScript, Leaflet, SEPTA APIs | Live map of every SEPTA mode that publishes realtime data |
| [groundwork](https://github.com/c-tonneslan/groundwork) | TypeScript, Postgres, PostGIS | 6,500+ affordable-housing projects across six cities with rent-burden overlays |
| [convene](https://github.com/c-tonneslan/convene) | Python, Legistar | Municipal meeting data from 24 cities into normalized JSON/SQLite |

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
