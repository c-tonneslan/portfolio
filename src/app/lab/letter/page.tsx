"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];

const numbers = [
  { label: "Customers", value: "142,800", note: "across 71 countries" },
  { label: "Net revenue", value: "$184.2M", note: "up 41% YoY" },
  { label: "Gross margin", value: "78%", note: "stable since 2023" },
  { label: "Headcount", value: "612", note: "added 84 this year" },
];

export default function LetterDemo() {
  const [year, setYear] = useState("2026");

  return (
    <main className="min-h-screen bg-[#f4e6e6] text-[#0d1e3a] relative">
      {/* Paper texture */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top bar */}
      <div className="border-b border-[#0d1e3a]/25 px-6 md:px-12 py-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
        <Link href="/lab" className="hover:underline underline-offset-4">
          /lab
        </Link>
        <span className="hidden md:block">Filed with the office, 24 May MMXXVI</span>
        <span>Helsinki & Stockholm</span>
      </div>

      <div className="relative grid grid-cols-12 gap-6 px-6 md:px-12 pt-14 pb-32 max-w-7xl mx-auto">
        {/* Sticky side nav */}
        <aside className="hidden md:block md:col-span-2 sticky top-24 self-start">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#0d1e3a]/60 mb-4">
            Letters,
            <br />
            by year
          </p>
          <ul className="space-y-1">
            {years.slice().reverse().map((y) => (
              <li key={y}>
                <button
                  onClick={() => setYear(y)}
                  className={`font-mono text-sm tabular-nums w-full text-left py-0.5 transition-colors ${
                    year === y
                      ? "text-[#0d1e3a] font-medium"
                      : "text-[#0d1e3a]/40 hover:text-[#0d1e3a]/80"
                  }`}
                >
                  {y}
                  {year === y && <span className="ml-2 text-[#a23427]">←</span>}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-[#0d1e3a]/20 text-[10px] uppercase tracking-[0.2em] text-[#0d1e3a]/60 leading-relaxed">
            <p>9 years on the record.</p>
            <p className="mt-1">All letters &nbsp;&nbsp;archived in full.</p>
          </div>
        </aside>

        {/* Body */}
        <article className="col-span-12 md:col-span-8 md:col-start-3">
          {/* Letterhead */}
          <header className="mb-20 border-b border-[#0d1e3a]/25 pb-10">
            <div className="flex items-baseline justify-between mb-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0d1e3a]/70">
                Nordmark & Co. · Founded MCMXCVIII
              </p>
              <p className="font-mono text-[11px] tabular-nums">№ 09</p>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-serif italic text-5xl md:text-7xl leading-[0.95] tracking-tight"
            >
              A letter to
              <br />
              shareholders,
              <br />
              for the year {year}.
            </motion.h1>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[#0d1e3a]/70">
              From Eyvind Nordmark, chair · 24 May, MMXXVI
            </p>
          </header>

          {/* Pull numbers */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {numbers.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-t border-[#0d1e3a] pt-4"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#0d1e3a]/70 mb-2">
                  {n.label}
                </p>
                <p className="font-serif italic text-4xl md:text-5xl leading-none tracking-tight">
                  {n.value}
                </p>
                <p className="text-xs text-[#0d1e3a]/75 mt-3 leading-relaxed">
                  {n.note}
                </p>
              </motion.div>
            ))}
          </section>

          {/* Body copy */}
          <div className="text-[17px] md:text-[18px] leading-[1.85] space-y-7">
            <p>
              <span className="float-left font-serif italic text-[6rem] md:text-[8rem] leading-[0.78] mr-3 mt-1 text-[#a23427]">
                T
              </span>
              his is the ninth time I have written to you under this masthead,
              and the first that has not begun with an apology. The year went
              well. The product is held by more people than it was last May,
              the work is paid for, and the team has stayed largely the same.
              For a small company that does one thing, this is unglamorous and
              entirely the point.
            </p>

            <p>
              When we started Nordmark in 1998 the working theory was that
              software could be made the way the better Scandinavian
              furniture-makers worked at mid-century: one room, one master,
              one apprentice or two, and a long enough horizon to refuse work
              that didn't fit. We have failed to live up to this theory more
              often than we have honored it. But the theory still holds, and
              the years we honored it best{" "}
              <sup className="text-[#a23427] font-mono text-xs">1</sup> are the
              ones I remember.
            </p>

            <h2 className="font-serif italic text-3xl md:text-4xl tracking-tight mt-14 mb-2 leading-tight">
              I. The product, the only thing we sell.
            </h2>
            <p>
              We released seven major changes this year and removed three
              features outright. I want to flag the removals because they cost
              us about 2,400 customers, most of whom told us so loudly. The
              features were not used enough to justify their maintenance
              burden, but the loud minority was right that they relied on us,
              and we relied on them for whatever signal kept the feature in
              the product to begin with.
            </p>
            <p>
              We are getting better at this trade-off but we are not good at
              it yet. If you bought the company expecting growth at any cost
              this letter will continue to disappoint you, and you should
              probably sell.
            </p>

            <h2 className="font-serif italic text-3xl md:text-4xl tracking-tight mt-14 mb-2 leading-tight">
              II. The team, and why it stayed.
            </h2>
            <p>
              Eighty-four people joined in the last twelve months. Six left.
              Of those six, two retired and three started something of their
              own, which I count as our work continuing under another roof.
              The sixth left for reasons I respect and would not write about
              here.
            </p>
            <p>
              We do not pay top of market. We pay above the median, in cash,
              with no leveraged equity, and we have not changed this formula
              since 2014. It is not the right answer for every company. It is
              the right answer for ours because it filters for the
              practitioners we want to work with — the ones whose first
              question is whether the work is interesting and whose second is
              whether the chair is good.
              <sup className="text-[#a23427] font-mono text-xs">2</sup>
            </p>

            <h2 className="font-serif italic text-3xl md:text-4xl tracking-tight mt-14 mb-2 leading-tight">
              III. What I worry about.
            </h2>
            <p>
              The thing I worry about, plainly, is that we will misread our
              own steadiness as virtue. The companies we admired in 1998 are,
              almost without exception, either gone or unrecognizable. They
              were all, in their time, the kind of place we are now. None of
              them thought a slow shape of decline was happening to them; it
              happened anyway.
            </p>
            <p>
              I do not have a strategy here, only a habit. I read our oldest
              customer letters every quarter and I ask the team what we have
              stopped doing that we used to do well. The answers are never
              flattering, and they are the only diagnostic I trust.
            </p>

            <h2 className="font-serif italic text-3xl md:text-4xl tracking-tight mt-14 mb-2 leading-tight">
              IV. Thank you.
            </h2>
            <p>
              To the customers, for the patience. To the team, for the work.
              To the small group of you who have held the stock since the
              first issue and have never asked me to optimise it — you know
              who you are, and your patience has shaped this company more than
              any choice I have made.
            </p>
            <p>I expect to write to you again next May.</p>
          </div>

          {/* Signature */}
          <div className="mt-20 pt-8 border-t border-[#0d1e3a]/30 flex items-end justify-between">
            <div>
              <p className="font-serif italic text-5xl tracking-tight leading-none mb-4 text-[#a23427]">
                Eyvind Nordmark
              </p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#0d1e3a]/75">
                Chair & Founder, Nordmark & Co.
              </p>
            </div>
            <div className="hidden md:block text-right text-[11px] uppercase tracking-[0.22em] text-[#0d1e3a]/60 leading-relaxed">
              <p>Helsinki</p>
              <p>24 . V . MMXXVI</p>
            </div>
          </div>

          {/* Footnotes */}
          <footer className="mt-16 pt-8 border-t border-dotted border-[#0d1e3a]/40 text-sm leading-[1.8] text-[#0d1e3a]/80 space-y-3">
            <p>
              <sup className="text-[#a23427] font-mono mr-1">1</sup>
              By "honored" I mean the years we said no to the right things. I
              cannot prove this in financials and I will not try.
            </p>
            <p>
              <sup className="text-[#a23427] font-mono mr-1">2</sup>
              The reference is to Hans Wegner, who is said to have answered
              "the chair" when asked, at eighty, what his life's work had been.
              I think about this every time I run a planning meeting.
            </p>
          </footer>

          <div className="mt-16 text-[11px] uppercase tracking-[0.22em]">
            <Link href="/lab" className="hover:underline underline-offset-4">
              ← All demos
            </Link>
          </div>
        </article>

        {/* Right rail: contents */}
        <aside className="hidden lg:block lg:col-span-2 lg:col-start-11 sticky top-24 self-start">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#0d1e3a]/60 mb-4">
            Contents
          </p>
          <ol className="space-y-2 text-xs leading-tight">
            <li className="font-serif italic">i. The product</li>
            <li className="font-serif italic">ii. The team</li>
            <li className="font-serif italic">iii. What I worry about</li>
            <li className="font-serif italic">iv. Thank you</li>
            <li className="font-mono text-[10px] text-[#0d1e3a]/60 pt-2 border-t border-[#0d1e3a]/20 mt-3">
              2 footnotes
            </li>
          </ol>
        </aside>
      </div>
    </main>
  );
}
