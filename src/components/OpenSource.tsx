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

function ContribBlock({ contrib, index }: { contrib: Contribution; index: number }) {
  const mergedHere = contrib.prs.filter((p) => p.status === "merged").length;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.2) }}
      className="border-b border-[#1a1612]/15 py-6"
    >
      <div className="grid grid-cols-12 gap-3 mb-3 items-baseline">
        <a
          href={contrib.url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-8 md:col-span-7 font-serif italic text-lg md:text-xl tracking-tight hover:text-[#a83232] transition-colors"
        >
          {contrib.name}
        </a>
        <span className="col-span-4 md:col-span-3 text-[10px] uppercase tracking-[0.22em] text-[#6b5e54] font-mono">
          {contrib.stars} stars
        </span>
        <span className="col-span-12 md:col-span-2 text-[10px] uppercase tracking-[0.22em] text-[#a83232] md:text-right">
          {mergedHere > 0 ? `${mergedHere} merged` : "—"}
        </span>
      </div>
      <ul className="space-y-1.5">
        {contrib.prs.map((pr) => (
          <li key={pr.number} className="grid grid-cols-12 gap-3 items-baseline">
            <a
              href={`${contrib.url}/pull/${pr.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 font-mono text-[11px] text-[#6b5e54] hover:text-[#1a1612]"
            >
              #{pr.number}
            </a>
            <a
              href={`${contrib.url}/pull/${pr.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-9 md:col-span-9 text-sm leading-[1.65] text-[#1a1612] hover:text-[#a83232] transition-colors"
            >
              {pr.title}
            </a>
            <span
              className={`col-span-2 md:col-span-2 text-right text-[10px] font-mono uppercase tracking-widest ${
                pr.status === "merged"
                  ? "text-[#a83232]"
                  : "text-[#6b5e54]/70"
              }`}
            >
              {pr.status === "merged" ? "● merged" : "○ open"}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-[10px] font-mono text-[#6b5e54]/70 mt-3 uppercase tracking-[0.18em]">
        {contrib.repo}
      </p>
    </motion.div>
  );
}

export default function OpenSource() {
  const all = mergedFirst(notable);
  const allOther = mergedFirst(other);
  const totalMerged = [...all, ...allOther].reduce((s, c) => s + mergedCount(c), 0);
  const totalRepos = all.length + allOther.length;

  return (
    <section
      id="contributions"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/30 bg-[#ebe2d0]/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#a83232]">
              § iii — Contributions
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]"
            >
              Small
              <br />
              fixes,
              <br />
              big repos.
            </motion.h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:col-start-6 text-base md:text-lg leading-[1.85] self-end font-serif italic text-[#1a1612]/85">
            Bug fixes, race conditions, and edge cases I&apos;ve run into in
            the wild. Mostly Go and Rust, occasionally Python and Java. Each
            row links to the PR.
          </p>
        </div>

        {/* Stat block */}
        <div className="grid grid-cols-3 gap-px bg-[#1a1612]/25 mb-16 border border-[#1a1612]/25">
          {[
            ["Repositories", totalRepos.toString()],
            ["Merged PRs", totalMerged.toString()],
            ["Languages", "Go · Rust · Python · TS · Java"],
          ].map(([k, v], i) => (
            <div
              key={k}
              className="bg-[#f4ede0] p-5 md:p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#6b5e54] mb-2">
                {k}
              </p>
              <p
                className={`font-serif italic ${i === 2 ? "text-base md:text-lg" : "text-3xl md:text-4xl"} text-[#1a1612] leading-tight tracking-tight`}
              >
                {v}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[11px] uppercase tracking-[0.3em] text-[#a83232] mb-4">
          ⸺ Notable
        </p>
        <div className="border-t border-[#1a1612]/25">
          {all.map((c, i) => (
            <ContribBlock key={c.repo} contrib={c} index={i} />
          ))}
        </div>

        <p className="text-[11px] uppercase tracking-[0.3em] text-[#a83232] mt-16 mb-4">
          ⸺ Other
        </p>
        <div className="border-t border-[#1a1612]/25">
          {allOther.map((c, i) => (
            <ContribBlock key={c.repo} contrib={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
