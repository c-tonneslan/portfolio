"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type Film = {
  title: string;
  director: string;
  year: number;
  country: string;
  runtime: string;
  lang: string;
  rating?: string;
  print: string;
  blurb: string;
};

const featured: Film = {
  title: "The Apricot Year",
  director: "Hadži Stojić",
  year: 1984,
  country: "Yugoslavia",
  runtime: "118 min",
  lang: "Serbo-Croatian with English subtitles",
  rating: "Not Rated",
  print: "New 4K restoration",
  blurb:
    "A widowed clockmaker in Sarajevo spends one long summer building a watch for his daughter's wedding. Stojić's only feature — lost for thirty years — was located in a Belgrade attic in 2024 and restored from a single 35mm working print. Print courtesy of the Yugoslav Film Archive.",
};

type Show = { time: string; title: string; meta: string; tag?: string };
type Day = { date: string; weekday: string; shows: Show[] };

const week: Day[] = [
  {
    date: "May 24",
    weekday: "Sat",
    shows: [
      { time: "1:00", title: "The Apricot Year", meta: "Hadži Stojić · 1984", tag: "4K" },
      { time: "3:30", title: "Daughters of the Dust", meta: "Julie Dash · 1991" },
      { time: "6:15", title: "The Apricot Year", meta: "Hadži Stojić · 1984", tag: "4K" },
      { time: "9:00", title: "Stalker", meta: "Andrei Tarkovsky · 1979", tag: "70mm" },
    ],
  },
  {
    date: "May 25",
    weekday: "Sun",
    shows: [
      { time: "12:30", title: "Cléo from 5 to 7", meta: "Agnès Varda · 1962" },
      { time: "3:00", title: "The Apricot Year", meta: "Hadži Stojić · 1984", tag: "4K" },
      { time: "6:00", title: "In the Mood for Love", meta: "Wong Kar-wai · 2000", tag: "35mm" },
      { time: "9:00", title: "Eden Lake", meta: "James Watkins · 2008" },
    ],
  },
  {
    date: "May 26",
    weekday: "Mon",
    shows: [
      { time: "7:00", title: "The Long Goodbye", meta: "Robert Altman · 1973", tag: "35mm" },
      { time: "9:30", title: "Punch-Drunk Love", meta: "P.T. Anderson · 2002" },
    ],
  },
  {
    date: "May 27",
    weekday: "Tue",
    shows: [
      { time: "6:30", title: "Sátántangó", meta: "Béla Tarr · 1994 · 439 min", tag: "marathon" },
    ],
  },
  {
    date: "May 28",
    weekday: "Wed",
    shows: [
      { time: "7:00", title: "Beau Travail", meta: "Claire Denis · 1999", tag: "intro by N. Þórðar" },
      { time: "9:15", title: "Memories of Murder", meta: "Bong Joon-ho · 2003" },
    ],
  },
  {
    date: "May 29",
    weekday: "Thu",
    shows: [
      { time: "6:45", title: "Notes on a Triangle", meta: "Réjeanne Taillon · 1966 · short" },
      { time: "7:30", title: "Vagabond", meta: "Agnès Varda · 1985" },
      { time: "10:00", title: "Possession", meta: "Andrzej Żuławski · 1981" },
    ],
  },
  {
    date: "May 30",
    weekday: "Fri",
    shows: [
      { time: "5:30", title: "The Apricot Year", meta: "Hadži Stojić · 1984", tag: "Q&A" },
      { time: "8:30", title: "Phantom Thread", meta: "P.T. Anderson · 2017", tag: "70mm" },
      { time: "11:30", title: "Suspiria", meta: "Dario Argento · 1977", tag: "midnight" },
    ],
  },
];

const series = [
  { title: "Varda, in three keys", run: "May 24 — Jun 2", note: "Five features and the late short films." },
  { title: "Anderson on celluloid", run: "May 26 — Jun 8", note: "All eight features, projected on 35mm or 70mm." },
  { title: "Restored: Stojić & after", run: "May 24 — Jun 14", note: "A retrospective from the Yugoslav Film Archive." },
  { title: "Midnights", run: "ongoing", note: "Cult and horror, Fridays at half eleven." },
];

export default function RepertoryDemo() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <main className="min-h-screen bg-[#efe6d2] text-[#0c0c0c] relative overflow-hidden">
      {/* Grain */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative">
        {/* Top bar */}
        <div className="border-b border-[#0c0c0c]/25 px-6 md:px-10 py-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
          <Link href="/lab" className="hover:underline underline-offset-4">
            /lab
          </Link>
          <span className="text-[#c41e1e] font-medium">
            ★ The Hverfisgata · Reykjavík
          </span>
          <span className="hidden md:block">Issue 014 · May / June 2026</span>
        </div>

        {/* Masthead */}
        <header className="px-6 md:px-10 py-10 md:py-14 grid grid-cols-12 gap-6 border-b-2 border-[#0c0c0c]">
          <div className="col-span-12 md:col-span-9">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-3">
              Week of May 24
            </p>
            <h1 className="font-serif italic text-[15vw] md:text-[9vw] leading-[0.85] tracking-tight">
              The Repertory.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-3 self-end text-[12px] leading-[1.7] uppercase tracking-[0.16em]">
            <p>Seven days,</p>
            <p>twenty-three screenings,</p>
            <p>one new restoration.</p>
          </div>
        </header>

        {/* Featured film */}
        <section className="px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10 border-b border-[#0c0c0c]/30">
          <div className="md:col-span-5">
            {/* Faux poster */}
            <div className="aspect-[3/4] bg-[#c41e1e] text-[#efe6d2] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-90">
                  Centerpiece · Restored
                </p>
                <p className="mt-auto font-serif italic text-5xl md:text-6xl leading-[0.9] tracking-tight">
                  The
                  <br />
                  Apricot
                  <br />
                  Year.
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] mt-6 opacity-90">
                  Hadži Stojić · 1984 · 4K
                </p>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[#efe6d2]/70 flex items-center justify-center text-xs uppercase tracking-widest">
                ★
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-[#c41e1e]">
              The Apricot Year — a note from the booker
            </p>
            <h2 className="font-serif italic text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              "An object lesson in patience. We held a print for a year so you
              could see it in this room."
            </h2>
            <p className="text-base leading-[1.75] mb-6 max-w-xl">
              {featured.blurb}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 text-[12px] uppercase tracking-[0.16em] border-t border-[#0c0c0c]/30 pt-6 max-w-xl">
              <div>
                <p className="text-[#0c0c0c]/60">Director</p>
                <p>{featured.director}</p>
              </div>
              <div>
                <p className="text-[#0c0c0c]/60">Year · Country</p>
                <p>
                  {featured.year} · {featured.country}
                </p>
              </div>
              <div>
                <p className="text-[#0c0c0c]/60">Runtime</p>
                <p>{featured.runtime}</p>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <p className="text-[#0c0c0c]/60">Language</p>
                <p className="normal-case tracking-normal text-sm">
                  {featured.lang}
                </p>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <p className="text-[#0c0c0c]/60">Print</p>
                <p className="normal-case tracking-normal text-sm">
                  {featured.print}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="px-6 md:px-10 py-16">
          <div className="flex items-end justify-between mb-8 border-b border-[#0c0c0c]/30 pb-3">
            <h3 className="font-serif italic text-3xl md:text-4xl tracking-tight">
              Schedule
            </h3>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#0c0c0c]/60">
              All shows at The Hverfisgata
            </span>
          </div>

          {/* Day tabs (mobile) */}
          <div className="md:hidden flex gap-1 mb-6 overflow-x-auto pb-1">
            {week.map((d, i) => (
              <button
                key={d.date}
                onClick={() => setActiveDay(i)}
                className={`px-3 py-2 text-xs uppercase tracking-widest shrink-0 ${
                  activeDay === i
                    ? "bg-[#0c0c0c] text-[#efe6d2]"
                    : "border border-[#0c0c0c]/30"
                }`}
              >
                {d.weekday} {d.date.split(" ")[1]}
              </button>
            ))}
          </div>

          {/* Day columns (desktop) */}
          <div className="hidden md:grid grid-cols-7 gap-px bg-[#0c0c0c]/20">
            {week.map((d, di) => (
              <div key={d.date} className="bg-[#efe6d2] p-3 min-h-[420px]">
                <div className="border-b border-[#0c0c0c]/30 pb-2 mb-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#0c0c0c]/60">
                    {d.weekday}
                  </p>
                  <p className="font-serif italic text-xl leading-none mt-1">
                    {d.date.split(" ")[1]}
                  </p>
                </div>
                <ul className="space-y-3">
                  {d.shows.map((s, si) => (
                    <motion.li
                      key={s.title + s.time}
                      initial={{ opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: di * 0.04 + si * 0.02 }}
                      className="border-b border-dotted border-[#0c0c0c]/25 pb-2 last:border-0 cursor-pointer group"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[11px] tabular-nums text-[#c41e1e]">
                          {s.time}
                        </span>
                        {s.tag && (
                          <span className="text-[9px] uppercase tracking-wider bg-[#0c0c0c] text-[#efe6d2] px-1 py-px">
                            {s.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-tight mt-1 group-hover:italic group-hover:font-serif group-hover:font-normal">
                        {s.title}
                      </p>
                      <p className="text-[10px] text-[#0c0c0c]/65 mt-0.5 leading-tight">
                        {s.meta}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Active day list (mobile) */}
          <div className="md:hidden">
            <ul className="space-y-4">
              {week[activeDay].shows.map((s) => (
                <li key={s.title + s.time} className="border-b border-[#0c0c0c]/20 pb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-sm text-[#c41e1e]">
                      {s.time}
                    </span>
                    {s.tag && (
                      <span className="text-[10px] uppercase tracking-wider bg-[#0c0c0c] text-[#efe6d2] px-1.5 py-px">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-lg font-serif italic mt-1">{s.title}</p>
                  <p className="text-xs text-[#0c0c0c]/65 mt-0.5">{s.meta}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Series */}
        <section className="px-6 md:px-10 py-16 border-t border-[#0c0c0c]/30">
          <div className="flex items-end justify-between mb-8">
            <h3 className="font-serif italic text-3xl md:text-4xl tracking-tight">
              On now
            </h3>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#0c0c0c]/60">
              Series & retrospectives
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {series.map((s, i) => (
              <div
                key={s.title}
                className="grid grid-cols-[40px_1fr] gap-4 border-t border-[#0c0c0c]/20 pt-5"
              >
                <span className="font-mono text-xs text-[#0c0c0c]/60">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-serif italic text-2xl leading-tight mb-1">
                    {s.title}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#c41e1e]">
                    {s.run}
                  </p>
                  <p className="text-sm text-[#0c0c0c]/75 mt-2 leading-relaxed">
                    {s.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-10 py-12 border-t-2 border-[#0c0c0c] grid md:grid-cols-3 gap-8 text-[12px] leading-[1.8]">
          <div>
            <p className="uppercase tracking-[0.2em] mb-2">The cinema</p>
            <p>Hverfisgata 71, 101 Reykjavík</p>
            <p>Doors thirty minutes before</p>
            <p className="italic font-serif text-[#0c0c0c]/80 mt-2">
              The lobby bar opens at five.
            </p>
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] mb-2">Tickets</p>
            <p>kr 2 200 · regular</p>
            <p>kr 1 600 · members & students</p>
            <p>kr 1 200 · matinées before three</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] mb-2">Members</p>
            <p className="font-serif italic">
              Discounted seats, free programmes, the occasional letter.
            </p>
            <p className="mt-2">kr 14 000 a year · join at the box.</p>
          </div>
        </footer>

        <div className="px-6 md:px-10 pb-10 text-[11px] uppercase tracking-[0.22em]">
          <Link href="/lab" className="hover:underline underline-offset-4">
            ← All demos
          </Link>
        </div>
      </div>
    </main>
  );
}
