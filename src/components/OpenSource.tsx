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
  const mergedHere = mergedCount(contrib);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.2) }}
      className="rounded-xl border border-white/8 bg-card-bg p-5 hover:border-white/15 hover:bg-[#13141a] transition"
    >
      <a
        href={contrib.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between mb-4 group"
      >
        <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
          {contrib.name}
        </span>
        <span className="text-xs text-muted font-mono">
          {contrib.stars} · {mergedHere}m
        </span>
      </a>
      <div className="space-y-2">
        {contrib.prs.map((pr) => (
          <a
            key={pr.number}
            href={`${contrib.url}/pull/${pr.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 group/pr"
          >
            <span className="text-muted text-xs font-mono mt-0.5 shrink-0 w-12">
              #{pr.number}
            </span>
            <span className="text-xs text-foreground/85 leading-relaxed group-hover/pr:text-foreground transition-colors flex-1">
              {pr.title}
            </span>
            {pr.status === "merged" && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 mt-0.5 shrink-0">
                merged
              </span>
            )}
          </a>
        ))}
      </div>
      <p className="text-[10px] font-mono text-muted/60 mt-4 truncate">
        {contrib.repo}
      </p>
    </motion.div>
  );
}

export default function OpenSource() {
  const notableSorted = mergedFirst(notable);
  const otherSorted = mergedFirst(other);
  const totalMerged = [...notableSorted, ...otherSorted].reduce(
    (s, c) => s + mergedCount(c),
    0,
  );
  const totalRepos = notableSorted.length + otherSorted.length;
  const totalPRs = [...notableSorted, ...otherSorted].reduce(
    (s, c) => s + c.prs.length,
    0,
  );

  return (
    <section
      id="open-source"
      className="px-6 lg:px-8 py-24 md:py-32 border-t border-white/6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-6 mb-12"
        >
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Open source
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.025em] leading-[1]">
              Open-source
              <br />
              <span className="text-muted">contributions.</span>
            </h2>
          </div>
          <p className="md:col-span-5 self-end text-base md:text-lg text-muted leading-relaxed">
            Bug fixes, race conditions, and edge cases from other people&apos;s
            projects. Mostly Go and Rust, plus some Python and Java. Every row
            links to the PR.
          </p>
        </motion.div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-xl overflow-hidden border border-white/8 mb-14">
          {[
            ["Repos", totalRepos.toString()],
            ["PRs", totalPRs.toString()],
            ["Merged", totalMerged.toString()],
            ["Languages", "5"],
          ].map(([k, v]) => (
            <div key={k} className="bg-card-bg p-5">
              <p className="text-xs text-muted uppercase tracking-widest mb-2">
                {k}
              </p>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                {v}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs uppercase tracking-widest text-muted mb-4">
          Notable
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {notableSorted.map((c, i) => (
            <ContribCard key={c.repo} contrib={c} index={i} />
          ))}
        </div>

        <p className="text-xs uppercase tracking-widest text-muted mb-4">
          Other
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherSorted.map((c, i) => (
            <ContribCard key={c.repo} contrib={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
