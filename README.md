# charlietonneslan.dev

My developer portfolio — a central hub showcasing AI-powered applications, full-stack platforms, backend microservices, and developer tools I've built.

## Live Site

**[portfolio-one-fawn-81.vercel.app](https://portfolio-one-fawn-81.vercel.app)**

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Deployment | Vercel |

## Features

- **Project showcase** with category filtering (AI/ML, Full Stack, Backend, Dev Tools)
- **Smooth scroll-triggered animations** via Framer Motion
- **Dark theme** with custom color system
- **Responsive** across all breakpoints
- **Static generation** for fast page loads
- **SEO optimized** with Open Graph metadata

## Projects Showcased

| Project | Stack | Description |
|---------|-------|-------------|
| RAG Knowledge Base | Python, FastAPI, Pinecone | Production RAG pipeline with vector search and streaming responses |
| Real-Time Collab Board | Next.js, Y.js, WebSockets | Collaborative whiteboard with CRDTs and offline sync |
| AI SaaS Platform | Next.js, Prisma, Stripe | Full-stack SaaS with auth, payments, and AI document analysis |
| DevFlow CLI | Rust, Tokio, SQLite | Developer productivity CLI for PR reviews and changelog generation |
| Auth Microservice | Go, Gin, Redis, Docker | Standalone auth with JWT, RBAC, rate limiting, and observability |
| AI Agent Workflow | Python, LangGraph, Claude API | Autonomous agent for GitHub issue triage and multi-step workflows |

## Getting Started

```bash
# Clone
git clone https://github.com/ctonneslan/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page composition
├── components/
│   ├── Navbar.tsx       # Fixed nav with scroll detection
│   ├── Hero.tsx         # Landing section with CTA
│   ├── About.tsx        # Bio + tech overview
│   ├── Projects.tsx     # Filterable project grid
│   ├── ProjectCard.tsx  # Individual project card
│   ├── Skills.tsx       # Categorized skills display
│   ├── Contact.tsx      # Contact links
│   └── Footer.tsx       # Footer
└── data/
    └── projects.ts      # Project definitions + types
```

## Adding a New Project

Edit `src/data/projects.ts` and add an entry to the `projects` array:

```ts
{
  id: "my-project",
  title: "My Project",
  description: "One-line description.",
  longDescription: "Detailed description for project page.",
  tech: ["TypeScript", "React"],
  github: "https://github.com/ctonneslan/my-project",
  live: "https://my-project.vercel.app",
  status: "live",       // "live" | "in-progress" | "planned"
  category: "fullstack", // "ai" | "fullstack" | "backend" | "devtool"
}
```

## License

MIT
