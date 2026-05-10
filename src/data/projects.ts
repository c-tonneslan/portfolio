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
  category: "ai" | "fullstack" | "backend" | "devtool";
}

export const projects: Project[] = [
  {
    id: "rag-chatbot",
    title: "RAG Knowledge Base",
    description:
      "Retrieval-augmented generation chatbot that answers questions from private document corpora with sub-2s latency.",
    longDescription:
      "A production RAG pipeline with vector search, intelligent chunking, query routing, and hallucination detection. Handles PDF, Markdown, and HTML ingestion with real-time streaming responses.",
    tech: ["Python", "FastAPI", "OpenAI", "ChromaDB", "Next.js", "SSE"],
    live: "https://rag-knowledge-base-sandy.vercel.app",
    status: "live",
    category: "ai",
  },
  {
    id: "collab-board",
    title: "Real-Time Collab Board",
    description:
      "Collaborative whiteboard with live cursors, conflict resolution, and offline sync for distributed teams.",
    longDescription:
      "Built on CRDTs for conflict-free real-time editing. Supports drawing, sticky notes, and diagrams with presence indicators and automatic reconnection.",
    tech: ["TypeScript", "Next.js", "Y.js", "WebSockets", "Canvas API", "CRDTs"],
    live: "https://collab-board-gules.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "saas-platform",
    title: "AI SaaS Platform",
    description:
      "Full-stack SaaS with auth, Stripe payments, and AI-powered document analysis. Login latency under 200ms.",
    longDescription:
      "Production-ready SaaS boilerplate with JWT auth, role-based access control, Stripe subscriptions, and an AI document summarization feature. Includes CI/CD pipeline and 85%+ test coverage.",
    tech: ["Next.js", "Prisma", "SQLite", "Stripe", "OpenAI", "NextAuth"],
    live: "https://ai-saas-platform-iota.vercel.app/demo",
    status: "live",
    category: "fullstack",
  },
  {
    id: "cli-tool",
    title: "DevFlow CLI",
    description:
      "Developer productivity CLI that automates PR reviews, generates changelogs, and manages local environments.",
    longDescription:
      "Processes a 1GB log file in under 18 seconds. Features include automated changelog generation from commits, environment setup scripting, and AI-assisted code review summaries.",
    tech: ["Rust", "Clap", "Regex", "WalkDir", "Serde"],
    live: "/demo/devflow",
    status: "live",
    category: "devtool",
  },
  {
    id: "auth-service",
    title: "Auth Microservice",
    description:
      "Standalone authentication service with JWT, RBAC, rate limiting, and full observability pipeline.",
    longDescription:
      "Production auth microservice with refresh token rotation, brute-force protection, structured logging, health checks, and Prometheus metrics. Deployed with Docker and GitHub Actions CI/CD.",
    tech: ["Go", "Gin", "JWT", "bcrypt", "Docker", "Rate Limiting"],
    live: "/demo/auth",
    status: "live",
    category: "backend",
  },
  {
    id: "ai-agent",
    title: "AI Agent Workflow",
    description:
      "Autonomous AI agent that triages GitHub issues, drafts responses, and executes multi-step workflows.",
    longDescription:
      "An agentic system with tool-calling, persistent memory, and multi-step reasoning. Monitors repos, classifies issues by priority, suggests fixes, and can execute predefined remediation workflows.",
    tech: ["TypeScript", "Next.js", "Async Generators", "Tool Calling", "AI Agents"],
    live: "https://ai-agent-workflows-two.vercel.app",
    status: "live",
    category: "ai",
  },
  {
    id: "system-monitor",
    title: "System Monitor",
    description:
      "Real-time monitoring dashboard with live-updating charts, service health tracking, and 7 streaming metrics.",
    longDescription:
      "Dashboard with Recharts area charts updating at 1-second intervals, mean-reverting random walk simulator, color-coded status thresholds, and a service health panel tracking 6 services.",
    tech: ["TypeScript", "Next.js", "Recharts", "Tailwind CSS", "Data Viz"],
    live: "https://system-monitor-ruddy.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description:
      "URL shortener with per-link click analytics, referrer tracking, device breakdown, and geographic distribution.",
    longDescription:
      "Classic system design problem fully implemented. Features custom aliases, daily click charts, referrer/device/country analytics, and link management.",
    tech: ["TypeScript", "Next.js", "Analytics", "Tailwind CSS"],
    live: "https://url-shortener-tau-three.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "minirag",
    title: "MiniRAG",
    description:
      "RAG in 3 lines of code. One class, three methods. No bloat, no abstractions, just retrieval-augmented generation.",
    longDescription:
      "Open source Python library for RAG. Ingest files, ask questions, get grounded answers. Supports PDF/MD/TXT/code, streaming, persistent storage, and semantic search.",
    tech: ["Python", "OpenAI", "ChromaDB", "PyPI", "RAG"],
    status: "live",
    category: "ai",
  },
  {
    id: "mcpx",
    title: "mcpwire",
    description:
      "The simplest way to connect to MCP servers. Two lines to connect, one line to call tools. OpenAI/Anthropic format built-in.",
    longDescription:
      "Open source TypeScript library wrapping the official MCP SDK with a clean API. Auto transport detection, server discovery, and provider-specific tool formatting.",
    tech: ["TypeScript", "MCP", "OpenAI", "Anthropic", "npm"],
    live: "https://www.npmjs.com/package/mcpwire",
    status: "live",
    category: "devtool",
  },
  {
    id: "create-mcpx",
    title: "create-mcpx",
    description:
      "Scaffold a new MCP server in seconds. TypeScript, Python, or Go with auto transport detection and IDE config generation.",
    longDescription:
      "CLI scaffolding tool for MCP servers. Pick your language and transport, get a fully configured project with client configs auto-generated for Claude Desktop, Cursor, VS Code, and Windsurf.",
    tech: ["TypeScript", "MCP", "CLI", "Python", "Go"],
    status: "live",
    category: "devtool",
  },
  {
    id: "ai-code-reviewer",
    title: "CodeLens AI",
    description:
      "AI-powered code review bot that analyzes PRs using Claude and GPT-4 to catch bugs, security issues, and performance problems.",
    longDescription:
      "GitHub App that automatically reviews pull requests with inline comments. Catches security vulnerabilities, N+1 queries, error handling gaps, and logic bugs. Posts severity-tagged comments with suggested fixes directly on the PR.",
    tech: ["TypeScript", "Next.js", "Claude API", "GitHub API", "Webhooks"],
    live: "https://ai-code-reviewer-one-ruddy.vercel.app",
    status: "live",
    category: "ai",
  },
  {
    id: "finance-dashboard",
    title: "SpendLens",
    description:
      "Personal finance dashboard with D3.js charts, budget tracking, and ML-powered spending predictions.",
    longDescription:
      "Track spending across categories with interactive D3.js donut and bar charts. 500+ realistic transactions, budget progress bars with over-limit alerts, and linear regression to predict next 2 months of spending.",
    tech: ["TypeScript", "Next.js", "D3.js", "Tailwind CSS", "ML"],
    live: "https://finance-dashboard-iota-lake.vercel.app",
    status: "live",
    category: "fullstack",
  },
  {
    id: "taskqueue",
    title: "TaskQueue",
    description:
      "Distributed task queue in Go with priority scheduling, automatic retries with backoff, concurrent worker pools, and a REST API.",
    longDescription:
      "Production-grade task queue with blocking dequeue (no polling), priority-based scheduling, exponential backoff retries, dead letter handling, task deadlines, and graceful shutdown. 14 tests covering concurrency, priority ordering, and API endpoints.",
    tech: ["Go", "Concurrency", "Goroutines", "HTTP API", "slog"],
    status: "live",
    category: "backend",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    description:
      "Real-time distributed task queue dashboard. Monitor jobs, workers, retry logic, and dead letter queues with live updates every second.",
    longDescription:
      "Simulates a distributed job queue with 5 queues, 6 workers, retry logic, and dead letter routing. Live dashboard with throughput metrics, error rates, job explorer, and worker status cards.",
    tech: ["TypeScript", "Next.js", "Real-Time", "Distributed Systems"],
    live: "https://taskflow-wheat-seven.vercel.app",
    status: "live",
    category: "backend",
  },
];

export const categories = {
  all: "All Projects",
  ai: "AI / ML",
  fullstack: "Full Stack",
  backend: "Backend",
  devtool: "Dev Tools",
} as const;
