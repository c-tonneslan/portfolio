"use client";

import { motion } from "framer-motion";

const contributions = [
  {
    repo: "tailscale/tailscale",
    name: "Tailscale",
    stars: "29K+",
    prs: [
      { title: "Wrap ACME errors with more context for cert timeouts", number: 19688 },
      { title: "Require /etc/synoinfo.conf for Synology distro detection", number: 19689 },
      { title: "Don't emit broken hint for invalid legacy tcp serve args", number: 19690 },
    ],
    url: "https://github.com/tailscale/tailscale",
  },
  {
    repo: "livekit/server-sdk-go",
    name: "LiveKit Server SDK Go",
    stars: "500+",
    prs: [
      { title: "cloudagents: increase scanner buffer to avoid token too long errors", number: 903 },
    ],
    url: "https://github.com/livekit/server-sdk-go",
  },
  {
    repo: "livekit/livekit-cli",
    name: "LiveKit CLI",
    stars: "1K+",
    prs: [
      { title: "Add --id flag to agent deploy command", number: 839 },
      { title: "install: create GOBIN directory if it doesn't exist", number: 840 },
      { title: "token create: don't show default localhost URL in output", number: 841 },
      { title: "agentfs: use forward slashes in Dockerfile entrypoint paths on Windows", number: 842 },
    ],
    url: "https://github.com/livekit/livekit-cli",
  },
  {
    repo: "hashicorp/go-retryablehttp",
    name: "go-retryablehttp",
    stars: "2K+",
    prs: [
      { title: "Don't start backoff timer if it would exceed context deadline", number: 284 },
    ],
    url: "https://github.com/hashicorp/go-retryablehttp",
  },
  {
    repo: "jackc/pgx",
    name: "pgx",
    stars: "13K+",
    prs: [
      { title: "pgconn: use fresh context for fallback connection in connectPreferred", number: 2554 },
    ],
    url: "https://github.com/jackc/pgx",
  },
];

export default function OpenSource() {
  const totalPRs = contributions.reduce((sum, c) => sum + c.prs.length, 0);

  return (
    <section id="opensource" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Open Source</h2>
          <div className="w-12 h-1 bg-accent rounded mb-4" />
          <p className="text-muted mb-8 max-w-xl">
            {totalPRs} pull request{totalPRs !== 1 ? "s" : ""} across {contributions.length} {contributions.length !== 1 ? "repositories" : "repository"}.
            Bug fixes, performance patches, and security hardening across Go, Rust, TypeScript, C, and C++.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributions.map((contrib, i) => (
              <motion.a
                key={contrib.repo}
                href={contrib.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-card-bg border border-card-border rounded-xl p-5 hover:border-accent/30 transition-all block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold group-hover:text-accent transition-colors">
                    {contrib.name}
                  </span>
                  <span className="text-xs text-muted font-mono">
                    {contrib.stars}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {contrib.prs.map((pr) => (
                    <div key={pr.number} className="flex items-start gap-2">
                      <span className="text-green-500 text-xs mt-0.5">PR</span>
                      <span className="text-xs text-muted leading-relaxed">
                        {pr.title}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted/50 font-mono mt-3">
                  {contrib.repo}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
