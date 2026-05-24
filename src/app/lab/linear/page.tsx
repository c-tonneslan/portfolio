"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status =
  | "backlog"
  | "todo"
  | "in_progress"
  | "in_review"
  | "done"
  | "canceled";

type Issue = {
  id: string;
  title: string;
  status: Status;
  assignee: string;
  priority?: "urgent" | "high" | "med" | "low";
  cycle?: string;
};

const initialIssues: Issue[] = [
  { id: "ENG-2841", title: "Crash on session expiry during file upload", status: "in_progress", assignee: "MP", priority: "urgent", cycle: "Cycle 38" },
  { id: "ENG-2840", title: "Add keyboard shortcut for inline reply", status: "in_review", assignee: "DO", priority: "med", cycle: "Cycle 38" },
  { id: "ENG-2839", title: "Cycle planning view: filter by assignee", status: "in_progress", assignee: "AL", priority: "high", cycle: "Cycle 38" },
  { id: "ENG-2838", title: "Migrate to PostgreSQL 16 in staging", status: "todo", assignee: "YS", priority: "high", cycle: "Cycle 38" },
  { id: "ENG-2837", title: "Optimistic update on status change", status: "done", assignee: "MP", priority: "med", cycle: "Cycle 37" },
  { id: "ENG-2836", title: "Search: fuzzy match on issue titles", status: "done", assignee: "DO", priority: "med", cycle: "Cycle 37" },
  { id: "ENG-2835", title: "Onboarding: persist invite link across reloads", status: "backlog", assignee: "—", priority: "low" },
];

const statusDot: Record<Status, React.ReactNode> = {
  backlog: <div className="w-3.5 h-3.5 rounded-full border border-[#62656e]" />,
  todo: (
    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#9296a3]" />
  ),
  in_progress: (
    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#f2c94c] relative">
      <div className="absolute inset-[2px] rounded-full bg-[#f2c94c]" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }} />
    </div>
  ),
  in_review: (
    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#5e6ad2] relative">
      <div className="absolute inset-[2px] rounded-full bg-[#5e6ad2]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 50% 0, 0 0)" }} />
    </div>
  ),
  done: (
    <div className="w-3.5 h-3.5 rounded-full bg-[#5e6ad2] flex items-center justify-center">
      <svg viewBox="0 0 12 12" className="w-2 h-2 text-white">
        <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </div>
  ),
  canceled: (
    <div className="w-3.5 h-3.5 rounded-full bg-[#62656e] flex items-center justify-center">
      <div className="w-2 h-px bg-[#1a1c20]" />
    </div>
  ),
};

const priorityIcon = (p?: Issue["priority"]) => {
  if (!p) return null;
  const heights = { low: [2, 4, 6], med: [3, 5, 7], high: [4, 6, 8], urgent: [4, 6, 8] };
  const colors = { low: "#62656e", med: "#62656e", high: "#62656e", urgent: "#eb5757" };
  return (
    <div className="flex items-end gap-[2px] h-3">
      {heights[p].map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}px`, backgroundColor: colors[p] }}
          className="w-[3px] rounded-sm"
        />
      ))}
    </div>
  );
};

const initials = (n: string) =>
  n === "—" ? "?" : n;
const avatarColor = (n: string) => {
  const map: Record<string, string> = {
    MP: "#5e6ad2",
    DO: "#26b5ce",
    AL: "#f2c94c",
    YS: "#eb5757",
  };
  return map[n] || "#62656e";
};

export default function LinearStudy() {
  const [issues, setIssues] = useState(initialIssues);

  // Cycle one in-progress to in-review every few seconds to feel alive
  useEffect(() => {
    const order: Status[] = ["todo", "in_progress", "in_review", "done"];
    const t = setInterval(() => {
      setIssues((prev) => {
        const idx = prev.findIndex((i) => i.status === "in_progress");
        if (idx === -1) return prev;
        const cur = prev[idx];
        const nextStatus = order[(order.indexOf(cur.status) + 1) % order.length];
        if (nextStatus === "done") return prev; // freeze
        const next = [...prev];
        next[idx] = { ...cur, status: nextStatus };
        return next;
      });
    }, 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen bg-[#08090a] text-[#f7f8f8] relative overflow-x-hidden">
      {/* Mesh gradient — single canvas, multiple blurred orbs */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[900px] pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] rounded-full bg-[#5e6ad2] opacity-40 blur-[140px]" />
        <div className="absolute top-32 -right-40 w-[600px] h-[600px] rounded-full bg-[#26b5ce] opacity-30 blur-[140px]" />
        <div className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[#7e5fff] opacity-30 blur-[140px]" />
        <div className="absolute top-80 left-1/4 w-[400px] h-[400px] rounded-full bg-[#ff8a65] opacity-20 blur-[120px]" />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#08090a]" />
      </div>

      {/* Nav */}
      <nav className="relative z-20 px-6 lg:px-8 py-5 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href="/lab"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="w-5 h-5 rounded-[5px] bg-gradient-to-br from-[#9aa1ff] to-[#5e6ad2]" />
            <span>Linear</span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-[#b4bcd0]">
            {["Features", "Method", "Customers", "Changelog", "Pricing", "Company"].map(
              (l) => (
                <a key={l} className="hover:text-white transition-colors">
                  {l}
                </a>
              ),
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a className="hidden sm:block text-[#b4bcd0] hover:text-white">
            Log in
          </a>
          <button className="px-3 py-1.5 rounded-lg bg-white text-[#08090a] font-medium hover:bg-zinc-100 transition flex items-center gap-1">
            Sign up <span className="text-zinc-400">→</span>
          </button>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-12 px-6">
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/10 backdrop-blur text-xs text-[#d3d8e3] hover:bg-white/12 transition"
        >
          <span className="text-[#9aa1ff] font-medium">New</span>
          Cycles 2.0 is here — see what's faster →
        </Link>
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.02] max-w-4xl mx-auto"
        >
          The system for modern
          <br />
          <span className="bg-gradient-to-r from-[#c1c6ff] via-[#9aa1ff] to-[#7da9ff] bg-clip-text text-transparent">
            software development.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 text-lg md:text-xl text-[#b4bcd0] max-w-2xl mx-auto leading-relaxed"
        >
          Linear is a purpose-built tool for planning and building products.
          Meet the next-generation issue tracker your team won't fight.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <button className="px-5 py-2.5 rounded-lg bg-white text-[#08090a] font-medium text-sm hover:bg-zinc-100 transition">
            Start building →
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-white/8 border border-white/12 backdrop-blur text-sm hover:bg-white/12 transition">
            Introducing Linear
          </button>
        </motion.div>
      </section>

      {/* Product preview */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl bg-[#101114] border border-white/8 shadow-[0_30px_120px_-30px_rgba(94,106,210,0.5)] overflow-hidden"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-[#0d0e10]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/8" />
              <div className="w-3 h-3 rounded-full bg-white/8" />
              <div className="w-3 h-3 rounded-full bg-white/8" />
            </div>
            <div className="flex-1 text-center text-xs text-[#62656e]">
              linear.app · Acme · Active issues
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <aside className="hidden md:block w-56 border-r border-white/6 px-3 py-4 text-sm text-[#9296a3]">
              <div className="flex items-center gap-2 px-2 py-1.5 mb-3">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-[#5e6ad2] to-[#7e5fff]" />
                <span className="text-[#f7f8f8] font-medium">Acme</span>
              </div>
              <ul className="space-y-0.5">
                {[
                  ["Inbox", "12"],
                  ["My issues", "4"],
                ].map(([l, n]) => (
                  <li
                    key={l}
                    className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/4"
                  >
                    <span>{l}</span>
                    <span className="text-xs text-[#62656e]">{n}</span>
                  </li>
                ))}
              </ul>
              <p className="px-2 mt-5 mb-2 text-[10px] uppercase tracking-wider text-[#62656e]">
                Your teams
              </p>
              <ul className="space-y-0.5">
                <li className="px-2 py-1 rounded bg-white/6 text-[#f7f8f8] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[#5e6ad2]/40 border border-[#5e6ad2]" />
                  Engineering
                </li>
                {["Design", "Marketing", "Product"].map((t) => (
                  <li
                    key={t}
                    className="px-2 py-1 rounded hover:bg-white/4 flex items-center gap-2"
                  >
                    <div className="w-4 h-4 rounded-sm bg-white/10" />
                    {t}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Issue list */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">All issues</span>
                  <span className="text-xs text-[#62656e]">7</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9296a3]">
                  <button className="px-2 py-1 rounded hover:bg-white/6">
                    Filter
                  </button>
                  <button className="px-2 py-1 rounded hover:bg-white/6">
                    Group by
                  </button>
                  <button className="px-2 py-1 rounded hover:bg-white/6">
                    ⌘K
                  </button>
                </div>
              </div>

              {/* Section: in progress */}
              <div className="px-4 py-2 bg-[#0d0e10] text-xs text-[#9296a3] flex items-center gap-2 border-b border-white/4">
                {statusDot.in_progress}
                In Progress
                <span className="text-[#62656e]">
                  {issues.filter((i) => i.status === "in_progress").length}
                </span>
              </div>
              <AnimatePresence>
                {issues
                  .filter((i) => i.status === "in_progress")
                  .map((i) => (
                    <IssueRow key={i.id} issue={i} />
                  ))}
              </AnimatePresence>

              <div className="px-4 py-2 bg-[#0d0e10] text-xs text-[#9296a3] flex items-center gap-2 border-b border-white/4">
                {statusDot.in_review}
                In Review
                <span className="text-[#62656e]">
                  {issues.filter((i) => i.status === "in_review").length}
                </span>
              </div>
              {issues
                .filter((i) => i.status === "in_review")
                .map((i) => (
                  <IssueRow key={i.id} issue={i} />
                ))}

              <div className="px-4 py-2 bg-[#0d0e10] text-xs text-[#9296a3] flex items-center gap-2 border-b border-white/4">
                {statusDot.todo}
                Todo
                <span className="text-[#62656e]">
                  {issues.filter((i) => i.status === "todo").length}
                </span>
              </div>
              {issues
                .filter((i) => i.status === "todo")
                .map((i) => (
                  <IssueRow key={i.id} issue={i} />
                ))}

              <div className="px-4 py-2 bg-[#0d0e10] text-xs text-[#9296a3] flex items-center gap-2 border-b border-white/4">
                {statusDot.done}
                Done
                <span className="text-[#62656e]">
                  {issues.filter((i) => i.status === "done").length}
                </span>
              </div>
              {issues
                .filter((i) => i.status === "done")
                .map((i) => (
                  <IssueRow key={i.id} issue={i} dimmed />
                ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features triptych */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <p className="text-xs uppercase tracking-widest text-[#9aa1ff] mb-4 text-center">
          Built for speed
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-center max-w-3xl mx-auto mb-20">
          The features your team will{" "}
          <span className="text-[#9296a3]">actually use.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {[
            {
              title: "Issues",
              desc: "Built for keyboard-first work. Open, edit, and triage faster than you can click.",
              k: "issues",
            },
            {
              title: "Cycles",
              desc: "Short, lightweight sprints that keep momentum without the planning theatre.",
              k: "cycles",
            },
            {
              title: "Roadmaps",
              desc: "Strategy and execution in one place. Track multi-quarter work next to next-week tickets.",
              k: "roadmaps",
            },
          ].map((f) => (
            <div
              key={f.k}
              className="bg-[#0d0e10] p-7 hover:bg-[#10121a] transition-colors"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-3 text-sm text-[#9296a3] leading-relaxed">
                {f.desc}
              </p>
              <p className="mt-6 text-sm text-[#9aa1ff] inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <span>→</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-32 text-center">
        <p className="font-serif italic text-3xl md:text-5xl leading-[1.15] tracking-tight">
          "Linear is the first tool I've used where the speed of the software
          actually changes how my team works."
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#9aa1ff] to-[#5e6ad2]" />
          <div className="text-left">
            <p className="text-sm font-medium">Mira Patel</p>
            <p className="text-xs text-[#9296a3]">Head of Engineering, Northbeam</p>
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <p className="text-xs uppercase tracking-widest text-[#62656e] text-center mb-10">
          Powering the world's best product teams
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-8 items-center justify-items-center text-[#9296a3] font-medium tracking-tight">
          {["Vercel", "Cash App", "Ramp", "Loom", "Mercury", "Arc", "Raycast", "Brex", "Pitch", "Watershed", "Retool", "Perplexity"].map(
            (l) => (
              <span key={l} className="text-base md:text-lg">
                {l}
              </span>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-32">
        <div className="relative rounded-3xl border border-white/8 bg-[#0d0e10] p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#5e6ad2] opacity-30 blur-[120px]" />
            <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7e5fff] opacity-30 blur-[120px]" />
          </div>
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em]">
              Plan the present.
              <br />
              <span className="text-[#9296a3]">Build the future.</span>
            </h2>
            <div className="mt-10 flex items-center justify-center gap-3">
              <button className="px-5 py-2.5 rounded-lg bg-white text-[#08090a] font-medium text-sm hover:bg-zinc-100 transition">
                Get started →
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-white/8 border border-white/12 text-sm hover:bg-white/12 transition">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/6 max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-semibold mb-3">
            <span className="w-5 h-5 rounded-[5px] bg-gradient-to-br from-[#9aa1ff] to-[#5e6ad2]" />
            Linear
          </div>
          <p className="text-xs text-[#62656e] leading-relaxed max-w-xs">
            A studied recreation. The real Linear is at linear.app.
          </p>
        </div>
        {[
          ["Product", ["Features", "Method", "Integrations", "Pricing", "Changelog", "Download"]],
          ["Resources", ["Customers", "Docs", "Academy", "API", "Status", "Brand"]],
          ["Company", ["About", "Customers", "Careers", "Blog", "Contact", "DPA"]],
          ["Developers", ["API", "Webhooks", "SDKs", "Issue importer", "OAuth"]],
        ].map(([cat, items]) => (
          <div key={cat as string}>
            <p className="text-xs uppercase tracking-wider text-[#62656e] mb-3">
              {cat as string}
            </p>
            <ul className="space-y-2 text-[#9296a3]">
              {(items as string[]).map((it) => (
                <li key={it} className="hover:text-white transition-colors cursor-pointer">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      <div className="border-t border-white/6 max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#62656e]">
        <p>© 2026 — a study, not the real thing.</p>
        <Link href="/lab" className="hover:text-white transition-colors">
          ← all demos
        </Link>
      </div>
    </main>
  );
}

function IssueRow({ issue, dimmed }: { issue: Issue; dimmed?: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className={`grid grid-cols-[20px_70px_20px_1fr_auto_auto] items-center gap-3 px-4 py-2 border-b border-white/4 hover:bg-white/4 cursor-pointer ${
        dimmed ? "opacity-60" : ""
      }`}
    >
      {priorityIcon(issue.priority)}
      <span className="text-xs font-mono text-[#62656e]">{issue.id}</span>
      <div className="flex items-center justify-center">
        {statusDot[issue.status]}
      </div>
      <span className={`text-sm truncate ${dimmed ? "line-through" : ""}`}>
        {issue.title}
      </span>
      {issue.cycle && (
        <span className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded bg-white/6 text-[#9296a3]">
          {issue.cycle}
        </span>
      )}
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium text-white"
        style={{ backgroundColor: avatarColor(issue.assignee) }}
      >
        {initials(issue.assignee)}
      </div>
    </motion.div>
  );
}
