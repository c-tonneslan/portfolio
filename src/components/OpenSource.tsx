"use client";

import { motion } from "framer-motion";
import { notable, other, type Contribution } from "@/data/contributions";

function mergedCount(c: Contribution): number {
  return c.prs.filter((pr) => pr.status === "merged").length;
}

function mergedFirst(list: Contribution[]): Contribution[] {
  return [...list]
    .map((c) => ({
      ...c,
      prs: [...c.prs].sort((a, b) => {
        const am = a.status === "merged" ? 0 : 1;
        const bm = b.status === "merged" ? 0 : 1;
        return am - bm;
      }),
    }))
    .sort((a, b) => mergedCount(b) - mergedCount(a));
}

function ContribCard({ contrib, index }: { contrib: Contribution; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
      className="group bg-card-bg border border-card-border rounded-md p-5 hover:border-muted/50 transition-colors"
    >
      <a
        href={contrib.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between mb-3"
      >
        <span className="text-sm font-mono group-hover:text-foreground text-foreground transition-colors">
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
            <span className="text-muted text-xs font-mono mt-0.5 shrink-0">
              #{pr.number}
            </span>
            <span className="text-xs text-muted leading-relaxed group-hover/pr:text-foreground transition-colors">
              {pr.title}
              {pr.status === "merged" && (
                <span className="ml-1.5 inline-block text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 align-middle">
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
    <section id="opensource" className="py-24 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-muted uppercase tracking-widest mb-6">
          § open source
        </p>
        <p className="text-muted mb-10 max-w-xl">
          Bug fixes, race conditions, and edge cases I&apos;ve run into in
          the wild. Mostly Go and Rust.
        </p>

        <p className="text-xs font-mono text-muted/70 mb-4">notable</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {mergedFirst(notable).map((contrib, i) => (
            <ContribCard key={contrib.repo} contrib={contrib} index={i} />
          ))}
        </div>

        <p className="text-xs font-mono text-muted/70 mb-4">other</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {mergedFirst(other).map((contrib, i) => (
            <ContribCard key={contrib.repo} contrib={contrib} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
