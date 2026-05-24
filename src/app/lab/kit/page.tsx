"use client";

import Link from "next/link";
import { useState } from "react";

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#1e1e1e] pt-10 mt-10 first:border-t-0 first:pt-0 first:mt-0">
      <div className="grid md:grid-cols-[180px_1fr] gap-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono">
            {label}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function KitDemo() {
  const [switchOn, setSwitchOn] = useState(true);
  const [slider, setSlider] = useState(62);
  const [check, setCheck] = useState(true);
  const [tab, setTab] = useState("overview");

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <p className="text-xs text-muted font-mono mb-2">/lab / kit</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Primitives, in one place
          </h1>
          <p className="text-base text-muted mt-4 max-w-xl">
            The components every product page needs, designed and labeled like
            a real kit reference. Lift, fork, or just read.
          </p>
        </header>

        <Section label="Buttons">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition">
              Primary
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-sm font-medium hover:bg-[#222] transition">
              Secondary
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-foreground transition">
              Ghost
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white text-sm font-medium hover:opacity-90 transition">
              Gradient
            </button>
            <button className="px-4 py-2 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm font-medium hover:bg-rose-500/20 transition">
              Destructive
            </button>
            <button className="px-4 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-medium hover:bg-emerald-500/20 transition">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                Live
              </span>
            </button>
          </div>
        </Section>

        <Section label="Inputs">
          <div className="space-y-3 max-w-md">
            <input
              placeholder="you@domain.com"
              className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#1e1e1e] text-sm outline-none focus:border-[#2a2a2a] placeholder:text-muted/60"
            />
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm">
                ⌘
              </span>
              <input
                placeholder="Search…"
                className="w-full pl-8 pr-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#1e1e1e] text-sm outline-none focus:border-[#2a2a2a] placeholder:text-muted/60"
              />
            </div>
            <textarea
              rows={3}
              placeholder="What are you working on?"
              className="w-full px-3 py-2 rounded-lg bg-[#0d0d0d] border border-[#1e1e1e] text-sm outline-none focus:border-[#2a2a2a] placeholder:text-muted/60 resize-none"
            />
          </div>
        </Section>

        <Section label="Toggles">
          <div className="space-y-5 max-w-md">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm">Send weekly digest</span>
              <button
                onClick={() => setSwitchOn(!switchOn)}
                className={`w-11 h-6 rounded-full transition relative ${
                  switchOn ? "bg-accent" : "bg-[#2a2a2a]"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${
                    switchOn ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <button
                onClick={() => setCheck(!check)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${
                  check
                    ? "bg-accent border-accent"
                    : "border-[#2a2a2a] bg-transparent"
                }`}
              >
                {check && (
                  <svg
                    viewBox="0 0 16 16"
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M3 8l3 3 7-7" />
                  </svg>
                )}
              </button>
              <span className="text-sm">I've read the terms</span>
            </label>

            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Budget cap</span>
                <span className="font-mono text-muted">${slider * 4}/mo</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={slider}
                onChange={(e) => setSlider(Number(e.target.value))}
                className="w-full accent-accent"
              />
            </div>
          </div>
        </Section>

        <Section label="Badges">
          <div className="flex flex-wrap gap-2">
            {[
              ["new", "bg-emerald-400/15 text-emerald-300"],
              ["beta", "bg-violet-400/15 text-violet-300"],
              ["pro", "bg-amber-400/15 text-amber-300"],
              ["sunset", "bg-rose-400/15 text-rose-300"],
              ["1.4.0", "bg-white/5 text-muted"],
            ].map(([label, cls]) => (
              <span
                key={label}
                className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${cls}`}
              >
                {label}
              </span>
            ))}
          </div>
        </Section>

        <Section label="Tabs">
          <div className="border-b border-[#1e1e1e] flex gap-6">
            {["overview", "activity", "settings", "billing"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative pb-3 text-sm capitalize transition ${
                  tab === t
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {t}
                {tab === t && (
                  <span className="absolute -bottom-px left-0 right-0 h-px bg-foreground" />
                )}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Showing{" "}
            <span className="text-foreground font-medium capitalize">
              {tab}
            </span>{" "}
            — content swaps with no layout shift.
          </p>
        </Section>

        <Section label="Cards">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <div>
                  <p className="text-sm font-medium">New project</p>
                  <p className="text-xs text-muted">3 templates</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Spin up a workspace, invite teammates, ship by Friday.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium">May invoice</p>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300">
                  paid
                </span>
              </div>
              <p className="text-3xl font-semibold tracking-tighter">
                $1,284.00
              </p>
              <p className="text-xs text-muted mt-2">
                Visa · 4242 · auto-renews June 1
              </p>
            </div>
          </div>
        </Section>

        <Section label="Alerts">
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <div>
                <p className="text-sm font-medium text-emerald-200">
                  Deployment succeeded
                </p>
                <p className="text-xs text-emerald-200/70 mt-0.5">
                  main · 1m 14s · live at glide.app
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <span className="text-amber-400 mt-0.5">!</span>
              <div>
                <p className="text-sm font-medium text-amber-200">
                  Your card expires next month
                </p>
                <p className="text-xs text-amber-200/70 mt-0.5">
                  Update it before May 31 to avoid a billing pause.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
              <span className="text-rose-400 mt-0.5">×</span>
              <div>
                <p className="text-sm font-medium text-rose-200">
                  Sync failed
                </p>
                <p className="text-xs text-rose-200/70 mt-0.5">
                  Couldn't reach the upstream. We'll retry in 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section label="Avatars">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[
                "from-violet-400 to-fuchsia-500",
                "from-sky-400 to-indigo-500",
                "from-emerald-400 to-teal-500",
                "from-amber-400 to-orange-500",
              ].map((g, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-[#0a0a0a]`}
                />
              ))}
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border-2 border-[#0a0a0a] text-[10px] font-mono flex items-center justify-center text-muted">
                +6
              </div>
            </div>
            <div className="text-sm text-muted">
              Mira, Diego, Anders, Yui +6 others editing
            </div>
          </div>
        </Section>

        <div className="mt-20 pt-6 border-t border-[#1e1e1e]">
          <Link
            href="/lab"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            ← all demos
          </Link>
        </div>
      </div>
    </main>
  );
}
