"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function Section({
  label,
  hint,
  children,
  id,
}: {
  label: string;
  hint?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-[#1e1e1e] pt-12 mt-12 first:border-t-0 first:pt-0 first:mt-0 scroll-mt-24"
    >
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        <div className="md:sticky md:top-24 self-start">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono">
            {label}
          </p>
          {hint && (
            <p className="text-[11px] text-muted/70 mt-2 leading-relaxed">
              {hint}
            </p>
          )}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

function Demo({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-6">
      {children}
    </div>
  );
}

export default function KitDemo() {
  const [switchOn, setSwitchOn] = useState(true);
  const [slider, setSlider] = useState(62);
  const [check, setCheck] = useState(true);
  const [radio, setRadio] = useState("monthly");
  const [tab, setTab] = useState("overview");
  const [segment, setSegment] = useState("week");
  const [num, setNum] = useState(3);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showPw, setShowPw] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [toasts, setToasts] = useState<
    { id: number; title: string; body: string; tone: "ok" | "warn" | "err" }[]
  >([]);
  const [accordion, setAccordion] = useState<string | null>("billing");
  const [progress, setProgress] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Animate progress on mount, loop slowly
  useEffect(() => {
    let raf: number;
    let start = performance.now();
    const tick = (t: number) => {
      const elapsed = (t - start) / 1000;
      const v = Math.min(100, Math.floor((elapsed / 3.5) * 100));
      setProgress(v);
      if (v >= 100) {
        start = t + 600;
        setTimeout(() => setProgress(0), 600);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ⌘K opens the command palette, ESC closes the dialog/palette
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setPaletteOpen(false);
        setDialogOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [dropdownOpen]);

  function pushToast(tone: "ok" | "warn" | "err") {
    const id = Date.now();
    const msg = {
      ok: {
        title: "Saved",
        body: "Changes written to your workspace.",
      },
      warn: {
        title: "Heads up",
        body: "Your trial ends in 4 days.",
      },
      err: {
        title: "Sync failed",
        body: "Couldn't reach upstream. Retrying.",
      },
    }[tone];
    setToasts((t) => [...t, { id, tone, ...msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }

  const paletteItems = useMemo(
    () => [
      { group: "Navigate", icon: "→", label: "Go to dashboard", hint: "G then D" },
      { group: "Navigate", icon: "→", label: "Go to billing", hint: "G then B" },
      { group: "Navigate", icon: "→", label: "Go to team", hint: "G then T" },
      { group: "Actions", icon: "+", label: "New project", hint: "⌘ N" },
      { group: "Actions", icon: "⤴", label: "Invite teammate", hint: "⌘ I" },
      { group: "Actions", icon: "⌘", label: "Run command", hint: "⌘ ⇧ P" },
      { group: "Account", icon: "○", label: "Toggle dark mode" },
      { group: "Account", icon: "○", label: "Sign out" },
    ],
    []
  );
  const filteredPalette = paletteItems.filter((p) =>
    p.label.toLowerCase().includes(paletteQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#08090a] pt-24 pb-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20">
          <p className="text-xs text-muted font-mono mb-2">/lab / kit</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            A small system, all on one page
          </h1>
          <p className="text-base text-muted mt-5 max-w-2xl leading-relaxed">
            Every primitive a real product page needs — buttons, inputs,
            dialogs, a command palette, a toast stack — designed once and
            shown together. Each one&rsquo;s interactive. Press{" "}
            <kbd className="px-1.5 py-0.5 text-[11px] font-mono rounded border border-[#2a2a2a] bg-[#1a1a1a]">
              ⌘ K
            </kbd>{" "}
            to open the palette.
          </p>
        </header>

        <Section
          label="Foundations"
          hint="The type scale and palette these components draw from."
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Demo>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono mb-5">
                Type scale
              </p>
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-3xl tracking-tight font-semibold">
                    Display
                  </span>
                  <span className="text-[11px] font-mono text-muted">
                    30 / 600
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-xl font-semibold">Heading</span>
                  <span className="text-[11px] font-mono text-muted">
                    20 / 600
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-base">Body</span>
                  <span className="text-[11px] font-mono text-muted">
                    16 / 400
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-muted">Muted body</span>
                  <span className="text-[11px] font-mono text-muted">
                    14 / 400
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
                    Caption
                  </span>
                  <span className="text-[11px] font-mono text-muted">
                    11 / 400
                  </span>
                </div>
              </div>
            </Demo>

            <Demo>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-mono mb-5">
                Color tokens
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "bg", hex: "#08090a", cls: "bg-[#08090a] border-[#1e1e1e]" },
                  { name: "fg", hex: "#f7f8f8", cls: "bg-[#f7f8f8]" },
                  { name: "accent", hex: "#6bd1ff", cls: "bg-[#6bd1ff]" },
                  { name: "muted", hex: "#8a8f98", cls: "bg-[#8a8f98]" },
                  { name: "ok", hex: "#34d399", cls: "bg-emerald-400" },
                  { name: "warn", hex: "#fbbf24", cls: "bg-amber-400" },
                  { name: "err", hex: "#fb7185", cls: "bg-rose-400" },
                  { name: "card", hex: "#101114", cls: "bg-[#101114] border-[#1e1e1e]" },
                  { name: "border", hex: "#1e1e1e", cls: "bg-[#1e1e1e]" },
                ].map((c) => (
                  <div key={c.name}>
                    <div
                      className={`h-12 rounded-lg ${c.cls} border border-white/5`}
                    />
                    <p className="text-[11px] font-mono mt-1.5">{c.name}</p>
                    <p className="text-[10px] font-mono text-muted">{c.hex}</p>
                  </div>
                ))}
              </div>
            </Demo>
          </div>
        </Section>

        <Section label="Buttons" hint="Five variants across three sizes, plus loading and icon-only.">
          <Demo>
            <div className="space-y-5">
              {[
                { size: "sm", py: "py-1.5", px: "px-3", text: "text-xs" },
                { size: "md", py: "py-2", px: "px-4", text: "text-sm" },
                { size: "lg", py: "py-2.5", px: "px-5", text: "text-base" },
              ].map((s) => (
                <div key={s.size} className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[10px] font-mono text-muted w-6">
                    {s.size}
                  </span>
                  <button
                    className={`${s.px} ${s.py} rounded-lg bg-white text-zinc-900 ${s.text} font-medium hover:bg-zinc-100 transition`}
                  >
                    Primary
                  </button>
                  <button
                    className={`${s.px} ${s.py} rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] ${s.text} font-medium hover:bg-[#222] transition`}
                  >
                    Secondary
                  </button>
                  <button
                    className={`${s.px} ${s.py} rounded-lg ${s.text} font-medium text-muted hover:text-foreground hover:bg-white/5 transition`}
                  >
                    Ghost
                  </button>
                  <button
                    className={`${s.px} ${s.py} rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white ${s.text} font-medium hover:opacity-90 transition`}
                  >
                    Gradient
                  </button>
                  <button
                    className={`${s.px} ${s.py} rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 ${s.text} font-medium hover:bg-rose-500/20 transition`}
                  >
                    Destructive
                  </button>
                </div>
              ))}

              <div className="pt-2 border-t border-[#1e1e1e] flex flex-wrap items-center gap-2.5">
                <span className="text-[10px] font-mono text-muted w-6">i/o</span>
                <button className="px-4 py-2 rounded-lg bg-white text-zinc-900 text-sm font-medium inline-flex items-center gap-2 hover:bg-zinc-100 transition">
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                  New project
                </button>
                <button
                  disabled
                  className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-sm font-medium inline-flex items-center gap-2 opacity-60 cursor-not-allowed"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 animate-spin" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 3a9 9 0 0 1 9 9" strokeLinecap="round" />
                  </svg>
                  Saving…
                </button>
                <button
                  disabled
                  className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-sm font-medium opacity-40 cursor-not-allowed"
                >
                  Disabled
                </button>
                <button className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] inline-flex items-center justify-center hover:bg-[#222] transition" aria-label="Settings">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="8" r="2" />
                    <path d="M8 2v2m0 8v2M2 8h2m8 0h2M4 4l1.4 1.4M10.6 10.6L12 12M4 12l1.4-1.4M10.6 5.4L12 4" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="inline-flex rounded-lg border border-[#2a2a2a] overflow-hidden">
                  <button className="px-3 py-2 text-sm bg-[#1a1a1a] hover:bg-[#222] transition">Day</button>
                  <button className="px-3 py-2 text-sm bg-white text-zinc-900 font-medium">Week</button>
                  <button className="px-3 py-2 text-sm bg-[#1a1a1a] hover:bg-[#222] transition">Month</button>
                </div>
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Inputs" hint="Text fields, search with shortcut, password reveal, textareas, number stepper, OTP.">
          <Demo>
            <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
              <label className="block">
                <span className="text-xs text-muted mb-1.5 block">Email</span>
                <input
                  placeholder="you@domain.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#0a0a0a] border border-[#1e1e1e] text-sm outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 placeholder:text-muted/60 transition"
                />
              </label>

              <label className="block">
                <span className="text-xs text-muted mb-1.5 block">Search</span>
                <div className="relative">
                  <svg viewBox="0 0 16 16" className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="7" cy="7" r="4.5" />
                    <path d="M11 11l3 3" strokeLinecap="round" />
                  </svg>
                  <input
                    placeholder="Find anything…"
                    className="w-full pl-9 pr-12 py-2 rounded-lg bg-[#0a0a0a] border border-[#1e1e1e] text-sm outline-none focus:border-accent/60 placeholder:text-muted/60"
                  />
                  <kbd className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono rounded border border-[#2a2a2a] bg-[#1a1a1a] text-muted">
                    ⌘K
                  </kbd>
                </div>
              </label>

              <label className="block">
                <span className="text-xs text-muted mb-1.5 block">Password</span>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    defaultValue="hunter2-but-better"
                    className="w-full pl-3 pr-10 py-2 rounded-lg bg-[#0a0a0a] border border-[#1e1e1e] text-sm outline-none focus:border-accent/60 placeholder:text-muted/60 font-mono"
                  />
                  <button
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-muted hover:text-foreground transition"
                    aria-label={showPw ? "Hide" : "Show"}
                  >
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {showPw ? (
                        <>
                          <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
                          <circle cx="8" cy="8" r="2" />
                        </>
                      ) : (
                        <>
                          <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
                          <path d="M2 2l12 12" strokeLinecap="round" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </label>

              <label className="block">
                <span className="text-xs text-muted mb-1.5 block">Quantity</span>
                <div className="inline-flex items-stretch rounded-lg border border-[#1e1e1e] bg-[#0a0a0a] overflow-hidden">
                  <button
                    onClick={() => setNum((n) => Math.max(0, n - 1))}
                    className="px-3 hover:bg-white/5 transition text-muted"
                  >
                    −
                  </button>
                  <div className="px-4 py-2 text-sm font-mono border-x border-[#1e1e1e] min-w-[3rem] text-center">
                    {num}
                  </div>
                  <button
                    onClick={() => setNum((n) => n + 1)}
                    className="px-3 hover:bg-white/5 transition text-muted"
                  >
                    +
                  </button>
                </div>
              </label>

              <label className="block md:col-span-2">
                <span className="text-xs text-muted mb-1.5 block">Notes</span>
                <textarea
                  rows={3}
                  placeholder="What are you working on?"
                  className="w-full px-3 py-2 rounded-lg bg-[#0a0a0a] border border-[#1e1e1e] text-sm outline-none focus:border-accent/60 placeholder:text-muted/60 resize-none"
                />
              </label>

              <div className="md:col-span-2">
                <span className="text-xs text-muted mb-1.5 block">
                  Verification code
                </span>
                <div className="flex gap-2">
                  {otp.map((v, i) => (
                    <input
                      key={i}
                      value={v}
                      onChange={(e) => {
                        const next = [...otp];
                        next[i] = e.target.value.slice(-1).toUpperCase();
                        setOtp(next);
                        if (next[i] && i < 5) {
                          (
                            e.currentTarget
                              .nextElementSibling as HTMLInputElement | null
                          )?.focus();
                        }
                      }}
                      maxLength={1}
                      className="w-11 h-12 text-center text-lg font-mono rounded-lg bg-[#0a0a0a] border border-[#1e1e1e] outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Selection" hint="Checkbox, radio, switch, slider.">
          <Demo>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm">Send weekly digest</span>
                  <button
                    onClick={() => setSwitchOn(!switchOn)}
                    className={`w-11 h-6 rounded-full transition relative ${
                      switchOn ? "bg-accent" : "bg-[#2a2a2a]"
                    }`}
                    aria-pressed={switchOn}
                  >
                    <span
                      className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all shadow-sm ${
                        switchOn ? "left-[22px]" : "left-0.5"
                      }`}
                    />
                  </button>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <button
                    onClick={() => setCheck(!check)}
                    className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                      check
                        ? "bg-accent border-accent"
                        : "border-[#2a2a2a] bg-transparent hover:border-[#3a3a3a]"
                    }`}
                  >
                    {check && (
                      <svg
                        viewBox="0 0 16 16"
                        className="w-3 h-3 text-zinc-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8l3 3 7-7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-sm">I've read the terms</span>
                </label>

                <fieldset className="space-y-2.5">
                  <legend className="text-xs text-muted mb-1">
                    Billing cycle
                  </legend>
                  {[
                    ["monthly", "Monthly", "$24 / mo"],
                    ["annual", "Annual", "$240 / yr · 2 mo free"],
                  ].map(([val, label, hint]) => (
                    <label
                      key={val}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <button
                        onClick={() => setRadio(val)}
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                          radio === val
                            ? "border-accent"
                            : "border-[#2a2a2a] hover:border-[#3a3a3a]"
                        }`}
                      >
                        {radio === val && (
                          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                        )}
                      </button>
                      <span className="text-sm">{label}</span>
                      <span className="text-xs text-muted">{hint}</span>
                    </label>
                  ))}
                </fieldset>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Budget cap</span>
                    <span className="font-mono text-muted">
                      ${slider * 4}/mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={slider}
                    onChange={(e) => setSlider(Number(e.target.value))}
                    className="w-full accent-accent"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-muted mt-1">
                    <span>$0</span>
                    <span>$400</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1e1e1e]">
                  <p className="text-xs text-muted mb-2">Roles</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["admin", "editor", "viewer", "billing"].map((r, i) => (
                      <button
                        key={r}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                          i === 1
                            ? "bg-accent/15 text-accent border border-accent/30"
                            : "bg-[#1a1a1a] border border-[#2a2a2a] text-muted hover:text-foreground"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Tabs & segmented" hint="Underline tabs for navigation, segmented for filters.">
          <Demo>
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
                    <span className="absolute -bottom-px left-0 right-0 h-px bg-accent" />
                  )}
                </button>
              ))}
            </div>
            <p className="mt-5 mb-6 text-sm text-muted">
              Showing{" "}
              <span className="text-foreground font-medium capitalize">
                {tab}
              </span>{" "}
              — content swaps with no layout shift.
            </p>

            <div className="inline-flex rounded-lg bg-[#0a0a0a] border border-[#1e1e1e] p-1">
              {["day", "week", "month", "year"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSegment(s)}
                  className={`px-3 py-1 text-xs capitalize rounded-md transition ${
                    segment === s
                      ? "bg-[#1e1e1e] text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </Demo>
        </Section>

        <Section label="Badges" hint="Status and metadata, kept small.">
          <Demo>
            <div className="space-y-4">
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

              <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[#1e1e1e]">
                {[
                  ["operational", "bg-emerald-400"],
                  ["degraded", "bg-amber-400"],
                  ["outage", "bg-rose-400"],
                  ["maintenance", "bg-zinc-400"],
                ].map(([label, dot]) => (
                  <span key={label} className="inline-flex items-center gap-2 text-xs text-muted">
                    <span className="relative flex">
                      <span className={`w-2 h-2 rounded-full ${dot}`} />
                      {label === "operational" && (
                        <span className={`absolute inset-0 rounded-full ${dot} animate-ping opacity-60`} />
                      )}
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Avatars" hint="Solo, stacks, and presence dots.">
          <Demo>
            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0d0d0d]" />
                </div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-sm font-medium text-muted">
                    CT
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-amber-400 border-2 border-[#0d0d0d]" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                  <svg viewBox="0 0 16 16" className="w-5 h-5 text-muted" fill="currentColor">
                    <circle cx="8" cy="6" r="3" />
                    <path d="M2 14a6 6 0 0 1 12 0" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-[#1e1e1e]">
                <div className="flex -space-x-2">
                  {[
                    "from-violet-400 to-fuchsia-500",
                    "from-sky-400 to-indigo-500",
                    "from-emerald-400 to-teal-500",
                    "from-amber-400 to-orange-500",
                  ].map((g, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-[#0d0d0d]`}
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border-2 border-[#0d0d0d] text-[11px] font-mono flex items-center justify-center text-muted">
                    +6
                  </div>
                </div>
                <div className="text-sm text-muted">
                  Mira, Diego, Anders, Yui +6 others editing
                </div>
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Progress" hint="Determinate, indeterminate, and circular.">
          <Demo>
            <div className="space-y-6 max-w-md">
              <div>
                <div className="flex justify-between text-xs text-muted mb-2">
                  <span>Uploading assets</span>
                  <span className="font-mono">{progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#1e1e1e] overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div>
                <p className="text-xs text-muted mb-2">Indeterminate</p>
                <div className="h-1.5 rounded-full bg-[#1e1e1e] overflow-hidden relative">
                  <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent animate-[slide_1.4s_ease-in-out_infinite]" />
                </div>
              </div>

              <div className="flex items-center gap-5 pt-3 border-t border-[#1e1e1e]">
                <div className="relative w-14 h-14">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#1e1e1e" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#6bd1ff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 14}
                      strokeDashoffset={2 * Math.PI * 14 * (1 - progress / 100)}
                      className="transition-all duration-150"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[11px] font-mono">
                    {progress}%
                  </span>
                </div>
                <div className="text-sm">
                  <p>Building site</p>
                  <p className="text-xs text-muted mt-0.5">
                    main · {progress < 100 ? "in progress" : "done"}
                  </p>
                </div>
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Skeleton" hint="Loading placeholders, matched to real content shape.">
          <Demo>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#1e1e1e] bg-[#0a0a0a] p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#1a1a1a] animate-pulse-soft" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2.5 bg-[#1a1a1a] rounded animate-pulse-soft w-1/2" />
                    <div className="h-2 bg-[#1a1a1a] rounded animate-pulse-soft w-1/3" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-[#1a1a1a] rounded animate-pulse-soft" />
                  <div className="h-2 bg-[#1a1a1a] rounded animate-pulse-soft w-5/6" />
                  <div className="h-2 bg-[#1a1a1a] rounded animate-pulse-soft w-3/4" />
                </div>
              </div>
              <div className="rounded-xl border border-[#1e1e1e] bg-[#0a0a0a] p-4">
                <div className="h-2 bg-[#1a1a1a] rounded animate-pulse-soft w-24 mb-4" />
                <div className="h-8 bg-[#1a1a1a] rounded animate-pulse-soft w-32 mb-2" />
                <div className="h-2 bg-[#1a1a1a] rounded animate-pulse-soft w-2/3" />
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Tooltip & dropdown" hint="Hover reveals; click reveals.">
          <Demo>
            <div className="flex flex-wrap items-center gap-8">
              <div className="group relative inline-block">
                <button className="px-3 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-sm hover:bg-[#222] transition">
                  Hover me
                </button>
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full opacity-0 group-hover:opacity-100 transition">
                  <div className="px-2.5 py-1.5 rounded-md bg-white text-zinc-900 text-xs whitespace-nowrap shadow-lg">
                    A tooltip, in a kit
                  </div>
                  <div className="w-2 h-2 bg-white rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1" />
                </div>
              </div>

              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="px-3 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-sm inline-flex items-center gap-2 hover:bg-[#222] transition"
                >
                  Sort
                  <svg viewBox="0 0 16 16" className="w-3 h-3 opacity-60" fill="currentColor">
                    <path d="M4 6l4 4 4-4z" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 left-0 top-full mt-1.5 w-44 rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] shadow-xl py-1 overflow-hidden">
                    {[
                      ["Newest first", "↑"],
                      ["Oldest first", "↓"],
                      ["Alphabetical", "A"],
                      ["Most starred", "★"],
                    ].map(([label, icon]) => (
                      <button
                        key={label}
                        onClick={() => setDropdownOpen(false)}
                        className="w-full px-3 py-1.5 text-sm text-left hover:bg-white/5 inline-flex items-center justify-between"
                      >
                        <span>{label}</span>
                        <span className="text-xs font-mono text-muted">{icon}</span>
                      </button>
                    ))}
                    <div className="border-t border-[#1e1e1e] my-1" />
                    <button
                      onClick={() => setDropdownOpen(false)}
                      className="w-full px-3 py-1.5 text-sm text-left text-rose-300 hover:bg-rose-500/10"
                    >
                      Reset sort
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Cards" hint="Project, billing, stat.">
          <Demo>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a] p-5">
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

              <div className="rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a] p-5">
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

              <div className="rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a] p-5">
                <p className="text-xs text-muted">Active users</p>
                <p className="text-3xl font-semibold tracking-tighter mt-1">
                  12,847
                </p>
                <p className="text-xs text-emerald-300 mt-2 inline-flex items-center gap-1">
                  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="currentColor">
                    <path d="M6 2l5 6H1z" />
                  </svg>
                  +18.4% from last week
                </p>
                <svg viewBox="0 0 100 30" className="w-full h-10 mt-3" preserveAspectRatio="none">
                  <path
                    d="M0 22 L12 18 L25 20 L38 12 L52 14 L65 7 L78 10 L100 4"
                    fill="none"
                    stroke="#6bd1ff"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0 22 L12 18 L25 20 L38 12 L52 14 L65 7 L78 10 L100 4 L100 30 L0 30 Z"
                    fill="url(#g)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6bd1ff" />
                      <stop offset="100%" stopColor="#6bd1ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Alerts" hint="Inline status messages with icons and a clear next step.">
          <Demo>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-emerald-200">
                    Deployment succeeded
                  </p>
                  <p className="text-xs text-emerald-200/70 mt-0.5">
                    main · 1m 14s · live at glide.app
                  </p>
                </div>
                <button className="text-xs text-emerald-200 hover:underline">
                  View build
                </button>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                <span className="text-amber-400 mt-0.5">!</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-amber-200">
                    Your card expires next month
                  </p>
                  <p className="text-xs text-amber-200/70 mt-0.5">
                    Update it before May 31 to avoid a billing pause.
                  </p>
                </div>
                <button className="text-xs text-amber-200 hover:underline">
                  Update
                </button>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
                <span className="text-rose-400 mt-0.5">×</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-rose-200">Sync failed</p>
                  <p className="text-xs text-rose-200/70 mt-0.5">
                    Couldn't reach the upstream. We'll retry in 5 minutes.
                  </p>
                </div>
                <button className="text-xs text-rose-200 hover:underline">
                  Retry now
                </button>
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Dialog" hint="Modal with backdrop, ESC to close.">
          <Demo>
            <button
              onClick={() => setDialogOpen(true)}
              className="px-4 py-2 rounded-lg bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition"
            >
              Delete project…
            </button>
            {dialogOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  onClick={() => setDialogOpen(false)}
                />
                <div className="relative w-full max-w-md rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] shadow-2xl">
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-full bg-rose-500/15 flex items-center justify-center mb-4">
                      <svg viewBox="0 0 16 16" className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8 4v5M8 12v.01" strokeLinecap="round" />
                        <circle cx="8" cy="8" r="6.5" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold">Delete &lsquo;portfolio&rsquo;?</h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                      This removes the workspace, all 24 deployments, and
                      revokes every team invite. It can&rsquo;t be undone.
                    </p>
                  </div>
                  <div className="border-t border-[#1e1e1e] px-6 py-4 flex justify-end gap-2">
                    <button
                      onClick={() => setDialogOpen(false)}
                      className="px-3 py-1.5 rounded-lg text-sm hover:bg-white/5 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setDialogOpen(false);
                        pushToast("ok");
                      }}
                      className="px-3 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-200 text-sm font-medium hover:bg-rose-500/30 transition"
                    >
                      Delete project
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Demo>
        </Section>

        <Section label="Command palette" hint="Press ⌘K anywhere on this page.">
          <Demo>
            <button
              onClick={() => setPaletteOpen(true)}
              className="inline-flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0a0a0a] border border-[#1e1e1e] text-sm text-muted hover:text-foreground hover:border-[#2a2a2a] transition"
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="7" cy="7" r="4.5" />
                <path d="M11 11l3 3" strokeLinecap="round" />
              </svg>
              <span>Search or jump to…</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded border border-[#2a2a2a] bg-[#1a1a1a]">
                ⌘K
              </kbd>
            </button>
          </Demo>
          {paletteOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24">
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setPaletteOpen(false)}
              />
              <div className="relative w-full max-w-lg rounded-xl border border-[#2a2a2a] bg-[#0d0d0d] shadow-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1e1e1e]">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="7" cy="7" r="4.5" />
                    <path d="M11 11l3 3" strokeLinecap="round" />
                  </svg>
                  <input
                    autoFocus
                    value={paletteQuery}
                    onChange={(e) => setPaletteQuery(e.target.value)}
                    placeholder="Type to search…"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted/60"
                  />
                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded border border-[#2a2a2a] bg-[#1a1a1a] text-muted">
                    ESC
                  </kbd>
                </div>
                <div className="max-h-80 overflow-y-auto py-2">
                  {filteredPalette.length === 0 ? (
                    <div className="px-4 py-8 text-center text-sm text-muted">
                      No matches for &lsquo;{paletteQuery}&rsquo;
                    </div>
                  ) : (
                    Object.entries(
                      filteredPalette.reduce<
                        Record<string, typeof filteredPalette>
                      >((acc, item) => {
                        (acc[item.group] = acc[item.group] || []).push(item);
                        return acc;
                      }, {})
                    ).map(([group, items]) => (
                      <div key={group}>
                        <p className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-[0.2em] font-mono text-muted">
                          {group}
                        </p>
                        {items.map((it) => (
                          <button
                            key={it.label}
                            onClick={() => {
                              setPaletteOpen(false);
                              setPaletteQuery("");
                              pushToast("ok");
                            }}
                            className="w-full px-4 py-2 inline-flex items-center gap-3 text-left hover:bg-white/5"
                          >
                            <span className="w-5 h-5 inline-flex items-center justify-center text-muted font-mono text-xs">
                              {it.icon}
                            </span>
                            <span className="flex-1 text-sm">{it.label}</span>
                            {it.hint && (
                              <span className="text-[10px] font-mono text-muted">
                                {it.hint}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </Section>

        <Section label="Toast" hint="Fired from button clicks, auto-dismissing.">
          <Demo>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => pushToast("ok")}
                className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm hover:bg-emerald-500/20 transition"
              >
                Success
              </button>
              <button
                onClick={() => pushToast("warn")}
                className="px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-sm hover:bg-amber-500/20 transition"
              >
                Warning
              </button>
              <button
                onClick={() => pushToast("err")}
                className="px-3 py-1.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm hover:bg-rose-500/20 transition"
              >
                Error
              </button>
            </div>
          </Demo>
        </Section>

        <Section label="Accordion" hint="Single-open, smooth, no jank.">
          <Demo>
            <div className="rounded-xl border border-[#1e1e1e] bg-[#0a0a0a] divide-y divide-[#1e1e1e]">
              {[
                {
                  id: "billing",
                  q: "How does billing work?",
                  a: "We charge monthly on the day you signed up. Annual gets two months free. Cancel anytime — your seats stay active until the period ends.",
                },
                {
                  id: "team",
                  q: "Can I invite my team?",
                  a: "Yes. Up to 10 seats on Pro, unlimited on Team. Invites send a one-time email link, no account needed to start.",
                },
                {
                  id: "data",
                  q: "Where does my data live?",
                  a: "Primary in us-east-1, replicated to eu-west-1 within 60 seconds. You can choose EU-only on Team and Enterprise.",
                },
                {
                  id: "export",
                  q: "Can I export everything?",
                  a: "One click in Settings → Data → Export. You get a tarball: JSON for records, original files for assets, and a SHA256 manifest.",
                },
              ].map((item) => {
                const open = accordion === item.id;
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => setAccordion(open ? null : item.id)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-white/[0.02] transition"
                    >
                      <span className="text-sm font-medium">{item.q}</span>
                      <span
                        className={`text-muted text-lg transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-200 ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 text-sm text-muted leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Demo>
        </Section>

        <Section label="Empty state" hint="When there's nothing yet, give the user one obvious action.">
          <Demo>
            <div className="rounded-2xl border border-dashed border-[#2a2a2a] bg-[#0a0a0a] py-14 px-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 7l8-4 8 4-8 4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4" />
                </svg>
              </div>
              <p className="text-base font-medium">No projects yet</p>
              <p className="text-sm text-muted mt-1.5 max-w-sm mx-auto">
                Projects are how you group deployments and team access. Start
                with a template, or import from GitHub.
              </p>
              <div className="mt-5 inline-flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition">
                  New project
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-sm hover:bg-[#222] transition">
                  Import from GitHub
                </button>
              </div>
            </div>
          </Demo>
        </Section>

        <Section label="Table" hint="Small data table with row hover and a status column.">
          <Demo>
            <div className="rounded-xl border border-[#1e1e1e] bg-[#0a0a0a] overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#0d0d0d]">
                  <tr className="text-left text-[11px] uppercase tracking-[0.15em] font-mono text-muted">
                    <th className="px-4 py-2.5 font-normal">Build</th>
                    <th className="px-4 py-2.5 font-normal">Branch</th>
                    <th className="px-4 py-2.5 font-normal">Author</th>
                    <th className="px-4 py-2.5 font-normal">Status</th>
                    <th className="px-4 py-2.5 font-normal text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e1e1e]">
                  {[
                    ["a1f3c20", "main", "charlie", "ok", "1m 14s"],
                    ["b88c7e5", "kit/expand", "charlie", "running", "—"],
                    ["c2410aa", "fix/escape", "mira", "ok", "0m 58s"],
                    ["d910bd2", "docs/readme", "anders", "warn", "2m 03s"],
                    ["e4421f7", "feat/auth", "diego", "err", "0m 41s"],
                  ].map(([sha, branch, author, status, time]) => (
                    <tr key={sha} className="hover:bg-white/[0.02] transition">
                      <td className="px-4 py-2.5 font-mono text-xs">{sha}</td>
                      <td className="px-4 py-2.5 font-mono text-xs text-muted">
                        {branch}
                      </td>
                      <td className="px-4 py-2.5">{author}</td>
                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs ${
                            status === "ok"
                              ? "text-emerald-300"
                              : status === "running"
                              ? "text-accent"
                              : status === "warn"
                              ? "text-amber-300"
                              : "text-rose-300"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              status === "ok"
                                ? "bg-emerald-400"
                                : status === "running"
                                ? "bg-accent animate-pulse-soft"
                                : status === "warn"
                                ? "bg-amber-400"
                                : "bg-rose-400"
                            }`}
                          />
                          {status === "ok" ? "passed" : status}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-xs text-muted">
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Demo>
        </Section>

        <div className="mt-24 pt-6 border-t border-[#1e1e1e]">
          <Link
            href="/lab"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            ← all demos
          </Link>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto rounded-xl border px-4 py-3 shadow-2xl backdrop-blur-md min-w-[260px] animate-[slideIn_0.2s_ease-out] ${
              t.tone === "ok"
                ? "border-emerald-500/30 bg-emerald-500/10"
                : t.tone === "warn"
                ? "border-amber-500/30 bg-amber-500/10"
                : "border-rose-500/30 bg-rose-500/10"
            }`}
          >
            <p
              className={`text-sm font-medium ${
                t.tone === "ok"
                  ? "text-emerald-200"
                  : t.tone === "warn"
                  ? "text-amber-200"
                  : "text-rose-200"
              }`}
            >
              {t.title}
            </p>
            <p
              className={`text-xs mt-0.5 ${
                t.tone === "ok"
                  ? "text-emerald-200/70"
                  : t.tone === "warn"
                  ? "text-amber-200/70"
                  : "text-rose-200/70"
              }`}
            >
              {t.body}
            </p>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slide {
          0% {
            left: -33%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </main>
  );
}
