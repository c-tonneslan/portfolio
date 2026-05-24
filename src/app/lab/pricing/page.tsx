"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tier = {
  name: string;
  blurb: string;
  monthly: number;
  yearly: number;
  highlight?: boolean;
  cta: string;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter",
    blurb: "For side projects and the curious.",
    monthly: 0,
    yearly: 0,
    cta: "Start free",
    features: [
      "1 workspace",
      "Up to 3 collaborators",
      "Community support",
      "Public projects only",
    ],
  },
  {
    name: "Studio",
    blurb: "For teams shipping every week.",
    monthly: 24,
    yearly: 19,
    highlight: true,
    cta: "Start 14-day trial",
    features: [
      "Unlimited workspaces",
      "Up to 25 collaborators",
      "Private projects",
      "Priority email support",
      "Custom domains",
      "Audit log",
    ],
  },
  {
    name: "Scale",
    blurb: "For companies past product–market fit.",
    monthly: 88,
    yearly: 72,
    cta: "Talk to sales",
    features: [
      "Everything in Studio",
      "SAML SSO",
      "Role-based access",
      "Dedicated support",
      "99.95% uptime SLA",
      "Annual security review",
    ],
  },
];

const faqs = [
  {
    q: "Can I change plans later?",
    a: "Up or down, any time. Pro-rates automatically. Downgrades take effect at the start of the next cycle.",
  },
  {
    q: "What counts as a collaborator?",
    a: "Anyone with read or write access to a private workspace. Viewers on public projects don't count.",
  },
  {
    q: "Do you offer an open-source discount?",
    a: "Yes — if your project has a public repo with an OSI-approved license, Studio is free. Drop us a line.",
  },
  {
    q: "How does billing work for annual?",
    a: "Charged once a year, refundable pro-rated within the first 30 days. We accept card, ACH, and wire.",
  },
];

export default function PricingDemo() {
  const [annual, setAnnual] = useState(true);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#fafaf7] text-zinc-900 pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-xs text-zinc-500 font-mono mb-2">/lab / pricing</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Simple pricing.{" "}
            <span className="text-zinc-400 italic font-serif">
              Pay for what you use.
            </span>
          </h1>
          <p className="text-base md:text-lg text-zinc-600 mt-4 max-w-xl mx-auto">
            One product, three tiers. No seat traps, no minimums, no calls
            unless you want one.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full bg-white border border-zinc-200">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 text-sm rounded-full transition ${
                !annual
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 text-sm rounded-full transition flex items-center gap-2 ${
                annual
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Annual
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  annual
                    ? "bg-emerald-400/20 text-emerald-300"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                save 20%
              </span>
            </button>
          </div>
        </header>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl p-7 ${
                t.highlight
                  ? "bg-zinc-900 text-white border border-zinc-900 shadow-2xl shadow-zinc-900/20"
                  : "bg-white text-zinc-900 border border-zinc-200"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest bg-emerald-400 text-emerald-950 px-3 py-1 rounded-full font-semibold">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p
                className={`text-sm mt-1 ${
                  t.highlight ? "text-white/70" : "text-zinc-500"
                }`}
              >
                {t.blurb}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tighter">
                  ${annual ? t.yearly : t.monthly}
                </span>
                <span
                  className={`text-sm ${
                    t.highlight ? "text-white/60" : "text-zinc-500"
                  }`}
                >
                  /user/mo
                </span>
              </div>
              <p
                className={`text-xs mt-1 ${
                  t.highlight ? "text-white/50" : "text-zinc-400"
                }`}
              >
                {annual ? "billed annually" : "billed monthly"}
              </p>

              <button
                className={`mt-6 w-full py-3 rounded-2xl text-sm font-semibold transition ${
                  t.highlight
                    ? "bg-white text-zinc-900 hover:bg-zinc-100"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                {t.cta}
              </button>

              <ul className="mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-0.5 ${
                        t.highlight ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={t.highlight ? "text-white/85" : ""}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Logos strip */}
        <section className="text-center mb-24">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-zinc-400 font-serif italic text-xl">
            {["Linear", "Vercel", "Lattice", "Hex", "Arc", "Northbeam"].map(
              (n) => (
                <span key={n}>{n}</span>
              ),
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">
            Common questions
          </h2>
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-base font-medium">{f.q}</span>
                  <span
                    className={`text-zinc-400 text-xl transition-transform ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-zinc-600 leading-relaxed max-w-xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-6 border-t border-zinc-200 text-center">
          <Link
            href="/lab"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            ← all demos
          </Link>
        </div>
      </div>
    </main>
  );
}
