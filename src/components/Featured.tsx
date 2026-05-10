"use client";

import { motion } from "framer-motion";

const featured = [
  {
    title: "RAG Knowledge Base",
    description:
      "Full RAG pipeline with vector search, streaming AI responses, and source citations. Upload PDFs, Markdown, or text files and ask questions grounded in your data.",
    metrics: ["Sub-2s query latency", "5-source citations", "Streaming SSE"],
    tech: ["Python", "FastAPI", "ChromaDB", "OpenAI", "Next.js"],
    gradient: "from-blue-500/10 to-purple-500/10",
    borderGlow: "hover:shadow-blue-500/10",
    github: "https://github.com/c-tonneslan/rag-knowledge-base",
    live: "https://rag-knowledge-base-sandy.vercel.app",
  },
  {
    title: "Real-Time Collab Board",
    description:
      "Collaborative whiteboard built on CRDTs for conflict-free editing. Multiple users draw, add sticky notes, and see live cursors simultaneously with zero merge conflicts.",
    metrics: ["CRDT sync", "Live cursors", "Zero conflicts"],
    tech: ["TypeScript", "Y.js", "WebSockets", "Canvas API"],
    gradient: "from-green-500/10 to-emerald-500/10",
    borderGlow: "hover:shadow-green-500/10",
    github: "https://github.com/c-tonneslan/collab-board",
    live: "https://collab-board-gules.vercel.app",
  },
  {
    title: "mcpwire",
    description:
      "Open source npm library for connecting to MCP servers in two lines of code. Auto transport detection, server discovery from Claude/Cursor configs, and built-in tool formatting for OpenAI, Anthropic, and Gemini.",
    metrics: ["Published on npm", "14 tests", "CLI included"],
    tech: ["TypeScript", "MCP", "OpenAI", "Anthropic", "npm"],
    gradient: "from-orange-500/10 to-amber-500/10",
    borderGlow: "hover:shadow-orange-500/10",
    github: "https://github.com/c-tonneslan/mcpwire",
    live: "https://www.npmjs.com/package/mcpwire",
  },
];

export default function Featured() {
  return (
    <section className="py-20 px-6">
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
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-5 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-all hover:-translate-y-0.5"
                      >
                        Live Demo
                      </a>
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
