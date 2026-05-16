"use client";

import { motion } from "framer-motion";
import { notable, other, type Contribution } from "@/data/contributions";

function ContribCard({ contrib, index }: { contrib: Contribution; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      className="group bg-card-bg border border-card-border rounded-xl p-5 hover:border-accent/30 transition-all"
    >
      <a
        href={contrib.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between mb-3"
      >
        <span className="text-sm font-semibold group-hover:text-accent transition-colors">
          {contrib.name}
        </span>
        <span className="text-xs text-muted font-mono">{contrib.stars}</span>
      </a>
      <div className="space-y-1.5">
        {contrib.prs.map((pr) => (
          <a
            key={pr.number}
            href={`${contrib.url}/pull/${pr.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 group/pr"
          >
            <span className="text-accent text-xs font-mono mt-0.5 shrink-0">
              #{pr.number}
            </span>
            <span className="text-xs text-muted leading-relaxed group-hover/pr:text-foreground transition-colors">
              {pr.title}
              {pr.status === "merged" && (
                <span className="ml-1.5 inline-block text-[10px] font-mono uppercase tracking-wider text-emerald-400 align-middle">
                  merged
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted/50 font-mono mt-3">{contrib.repo}</p>
    </motion.div>
  );
}

export default function OpenSource() {
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
          <p className="text-muted mb-10 max-w-xl">
            Bug fixes, race conditions, and edge cases I&apos;ve run into in
            the wild. Mostly Go and Rust.
          </p>

          <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
            Notable
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {notable.map((contrib, i) => (
              <ContribCard key={contrib.repo} contrib={contrib} index={i} />
            ))}
          </div>

          <h3 className="text-sm font-mono text-muted uppercase tracking-wider mb-4">
            Other contributions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {other.map((contrib, i) => (
              <ContribCard key={contrib.repo} contrib={contrib} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
