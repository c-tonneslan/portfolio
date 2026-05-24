"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Profile = {
  name: string;
  handle: string;
  role: string;
  org: string;
  city: string;
  tags: string[];
  bio: string;
  initials: string;
  avatar: string;
};

const featured: Profile[] = [
  {
    name: "Mira Patel",
    handle: "mpatel",
    role: "Senior Product Designer",
    org: "Linear",
    city: "Brooklyn, NY",
    tags: ["Product design", "Type", "Brand"],
    bio: "Designing the cycles experience. Previously at Stripe, ten years self-employed before that.",
    initials: "MP",
    avatar: "from-rose-300 to-orange-400",
  },
  {
    name: "Diego Ortega",
    handle: "ortega",
    role: "Engineer",
    org: "Northbeam",
    city: "Mexico City",
    tags: ["Go", "Distributed systems", "DX"],
    bio: "I write servers that don't fall over. Maintainer of two small Go libraries that you've probably used by accident.",
    initials: "DO",
    avatar: "from-emerald-300 to-teal-500",
  },
  {
    name: "Anders Lie",
    handle: "anderslie",
    role: "Studio Lead",
    org: "Færøes & Co.",
    city: "Reykjavík",
    tags: ["Identity", "Editorial", "Type design"],
    bio: "Co-founded a six-person studio in 2018. We make books and identities for institutions that don't want to look like everyone else.",
    initials: "AL",
    avatar: "from-amber-300 to-rose-400",
  },
  {
    name: "Yui Sato",
    handle: "yuisato",
    role: "Founding Engineer",
    org: "Aurora",
    city: "Tokyo",
    tags: ["Rust", "Compilers", "WebGPU"],
    bio: "Building the runtime. I left Google to do something where I could read the whole codebase in a weekend.",
    initials: "YS",
    avatar: "from-violet-300 to-indigo-500",
  },
  {
    name: "Lena Müller",
    handle: "lenam",
    role: "Director, Brand",
    org: "Mute Records",
    city: "Berlin",
    tags: ["Brand", "Music", "Print"],
    bio: "I run brand at a record label that's older than I am. We still print things, and we still get them wrong sometimes.",
    initials: "LM",
    avatar: "from-sky-300 to-blue-500",
  },
  {
    name: "Tom Wexler",
    handle: "wexler",
    role: "Writer, Editor",
    org: "Self-employed",
    city: "Brooklyn, NY",
    tags: ["Long-form", "Profile", "Tech"],
    bio: "I write profiles, mostly about people who make software. Bylines: The New Yorker, n+1, MIT Tech Review, Are.na.",
    initials: "TW",
    avatar: "from-orange-300 to-amber-500",
  },
];

const updates = [
  { who: "Mira Patel", what: "started at Linear as Senior Product Designer", when: "2 days ago" },
  { who: "Diego Ortega", what: "published a new project: A small Go library for retrying things badly", when: "5 days ago" },
  { who: "Anders Lie", what: "added 12 works to their archive", when: "a week ago" },
  { who: "Yui Sato", what: "is open to advisor roles in compiler tooling", when: "two weeks ago" },
];

export default function ReadCVStudy() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#1c1c1a] relative">
      {/* Top nav */}
      <nav className="px-6 md:px-10 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/lab" className="font-semibold tracking-[-0.02em]">
          read.cv<span className="text-[#1c1c1a]/30">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-[#1c1c1a]/70">
          {["Discover", "Jobs", "Journal", "Pricing"].map((l) => (
            <a key={l} className="hover:text-[#1c1c1a] transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a className="hidden sm:block text-[#1c1c1a]/70 hover:text-[#1c1c1a]">
            Log in
          </a>
          <button className="px-3.5 py-1.5 rounded-full bg-[#1c1c1a] text-[#faf9f5] hover:bg-[#1c1c1a]/85 transition">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-10 pt-24 md:pt-36 pb-24 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-[#1c1c1a]/60 mb-7"
        >
          The professional network, redrawn
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl md:text-[5.5rem] font-medium leading-[0.98] tracking-[-0.035em]"
        >
          A quieter home for{" "}
          <span className="italic font-serif font-normal">your work,</span>
          <br />
          and the people who do it well.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 text-lg text-[#1c1c1a]/75 max-w-xl mx-auto leading-relaxed"
        >
          read.cv is a place to share what you've done, see what others are
          doing, and quietly read each other's work. Free, ad-free, owned by
          the team that builds it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <button className="px-5 py-2.5 rounded-full bg-[#1c1c1a] text-[#faf9f5] text-sm font-medium hover:bg-[#1c1c1a]/85 transition">
            Create your read
          </button>
          <button className="px-5 py-2.5 rounded-full bg-white border border-[#1c1c1a]/15 text-sm hover:border-[#1c1c1a]/30 transition">
            See who's on it
          </button>
        </motion.div>
      </section>

      {/* Featured grid */}
      <section className="px-6 md:px-10 pb-32 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 border-b border-[#1c1c1e]/15 pb-3">
          <h2 className="text-base font-medium">Featured this week</h2>
          <a className="text-xs text-[#1c1c1a]/60 hover:text-[#1c1c1a]">
            View all →
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1c1c1a]/10 border border-[#1c1c1a]/10 rounded-2xl overflow-hidden">
          {featured.map((p, i) => (
            <motion.article
              key={p.handle}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-[#faf9f5] p-7 hover:bg-white transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${p.avatar} flex items-center justify-center text-xs font-semibold text-white shadow-sm`}
                >
                  {p.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-medium truncate">{p.name}</p>
                  <p className="text-xs text-[#1c1c1a]/60 truncate">
                    @{p.handle}
                  </p>
                </div>
                <button className="text-xs px-2.5 py-1 rounded-full border border-[#1c1c1a]/15 text-[#1c1c1a]/80 hover:border-[#1c1c1a]/40 transition opacity-0 group-hover:opacity-100">
                  Follow
                </button>
              </div>
              <p className="text-sm leading-relaxed mb-3">
                <span className="font-medium">{p.role}</span> ·{" "}
                <span className="text-[#1c1c1a]/70">{p.org}</span>
              </p>
              <p className="text-xs text-[#1c1c1a]/60 mb-4">{p.city}</p>
              <p className="text-sm text-[#1c1c1a]/80 leading-relaxed font-serif italic">
                {p.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider text-[#1c1c1a]/65 px-2 py-0.5 rounded-full border border-[#1c1c1a]/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* What is read.cv */}
      <section className="px-6 md:px-10 pb-32 max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#1c1c1a]/60 mb-4">
            What it is
          </p>
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.05] tracking-[-0.02em]">
            Not a network.{" "}
            <span className="italic font-serif font-normal">
              A standing record.
            </span>
          </h2>
        </div>
        <div className="md:col-span-8 space-y-7 text-base md:text-lg leading-[1.75] text-[#1c1c1a]/85">
          <p className="first-letter:font-serif first-letter:italic first-letter:text-6xl first-letter:float-left first-letter:mr-2 first-letter:leading-[0.85]">
            Most of the internet is in a hurry. Posts vanish, feeds reset, a
            year of work disappears under the next thing. read.cv is the
            opposite. A profile is meant to be revisited — by a future
            collaborator, a hiring manager, you, in five years.
          </p>
          <p>
            You write your work the way it deserves to be read. Long form when
            it needs it, short form when it doesn't. Projects are presented
            like cases, not bullets. The feed is gentle. Updates come once a
            week, on Sunday.
          </p>
          <p className="font-serif italic text-[#1c1c1a]/70">
            We charge nothing for the basics, and a little for the things only
            some people need. We will not sell ads against your face. We will
            not change this.
          </p>
        </div>
      </section>

      {/* Updates feed */}
      <section className="px-6 md:px-10 pb-32 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#1c1c1a]/60 mb-6">
          This week, on read.cv
        </p>
        <ul className="divide-y divide-[#1c1c1a]/15 border-t border-b border-[#1c1c1a]/15">
          {updates.map((u, i) => (
            <li
              key={i}
              className="py-5 flex items-baseline gap-4 hover:bg-white px-4 -mx-4 transition"
            >
              <span className="text-xs font-mono text-[#1c1c1a]/50 w-20 shrink-0">
                {u.when}
              </span>
              <p className="text-base leading-relaxed">
                <span className="font-medium">{u.who}</span>{" "}
                <span className="text-[#1c1c1a]/75">{u.what}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="px-6 md:px-10 pb-32 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#1c1c1a]/60 mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.02em]">
            Free, mostly.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[#1c1c1a]/15 bg-white p-8">
            <p className="text-xs uppercase tracking-widest text-[#1c1c1a]/60 mb-2">
              Free
            </p>
            <p className="text-5xl font-medium tracking-tighter">$0</p>
            <p className="text-xs text-[#1c1c1a]/60 mt-1">forever</p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Your profile, your projects, your read",
                "A handle you keep",
                "Following, mentions, the weekly digest",
                "Export everything, any time",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-[#1c1c1a]/60 mt-0.5">·</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#1c1c1a] bg-[#1c1c1a] text-[#faf9f5] p-8 relative">
            <p className="text-xs uppercase tracking-widest text-[#faf9f5]/70 mb-2">
              Member
            </p>
            <p className="text-5xl font-medium tracking-tighter">
              $5<span className="text-base text-[#faf9f5]/60 ml-1">/mo</span>
            </p>
            <p className="text-xs text-[#faf9f5]/60 mt-1">or $48 a year</p>
            <ul className="mt-6 space-y-3 text-sm text-[#faf9f5]/90">
              {[
                "A custom domain",
                "Private drafts and unlisted projects",
                "An archive of your weekly read",
                "A small badge, if you want it",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-[#faf9f5]/60 mt-0.5">·</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs italic font-serif text-[#faf9f5]/70 leading-relaxed">
              Members keep the lights on. We don't take advertising and we
              don't sell data. You're the customer, and we'd like to keep it
              that way.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Colophon */}
      <footer className="px-6 md:px-10 py-16 max-w-6xl mx-auto border-t border-[#1c1c1a]/15">
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          <div className="md:col-span-2">
            <p className="font-semibold text-base tracking-[-0.02em] mb-3">
              read.cv<span className="text-[#1c1c1a]/30">.</span>
            </p>
            <p className="text-[#1c1c1a]/70 leading-relaxed max-w-sm">
              Made by a small team in Toronto, London, and the bay. A studied
              recreation — the real read.cv is at read.cv.
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs text-[#1c1c1a]/60">
              <span>↗ Twitter</span>
              <span>↗ are.na</span>
              <span>↗ RSS</span>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1c1c1a]/60 mb-3">
              Product
            </p>
            <ul className="space-y-2 text-[#1c1c1a]/80">
              {["Profiles", "Projects", "Jobs", "Pricing", "Brand"].map((l) => (
                <li key={l} className="hover:text-[#1c1c1a] cursor-pointer">
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1c1c1a]/60 mb-3">
              The team
            </p>
            <ul className="space-y-2 text-[#1c1c1a]/80 font-serif italic">
              {[
                "Roxane Hilbert",
                "Otis Aldis",
                "Jin Ahn",
                "Linnea Søfting",
                "Tobias Knox",
              ].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1c1c1a]/15 flex flex-wrap items-center justify-between gap-3 text-xs text-[#1c1c1a]/60">
          <p>© MMXXVI · A small team's small product.</p>
          <Link href="/lab" className="hover:text-[#1c1c1a] transition-colors">
            ← all demos
          </Link>
        </div>
      </footer>
    </main>
  );
}
