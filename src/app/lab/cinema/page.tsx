"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CinemaDemo() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated mesh */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-cyan-500 opacity-60 mix-blend-screen blur-[120px] animate-[blob1_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-fuchsia-500 opacity-60 mix-blend-screen blur-[120px] animate-[blob2_22s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 w-[650px] h-[650px] rounded-full bg-amber-400 opacity-50 mix-blend-screen blur-[120px] animate-[blob3_20s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.9)_100%)]" />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(80px, 60px) scale(1.15); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-60px, 40px) scale(1.1); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(50px, -80px) scale(1.2); }
        }
      `}</style>

      <div className="relative">
        {/* Top bar */}
        <div className="px-6 py-5 flex items-center justify-between text-sm">
          <Link
            href="/lab"
            className="font-mono text-white/70 hover:text-white"
          >
            ← lab
          </Link>
          <span className="font-mono text-white/50 tracking-wider">
            HORIZON ° 2026
          </span>
          <button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition">
            Get early access
          </button>
        </div>

        {/* Hero */}
        <section className="px-6 pt-20 md:pt-32 pb-32 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/70 mb-8"
          >
            Built in Reykjavík · Shipping Q3 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16vw] md:text-[12vw] leading-[0.82] font-semibold tracking-[-0.04em]"
          >
            Make
            <br />
            <span className="italic font-serif text-white/95">software</span>
            <br />
            people <span className="text-amber-300">notice.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6 items-end"
          >
            <p className="md:col-span-2 text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
              Horizon is a design and motion studio. We help teams launch
              products that don't blend in. No decks. No templates. Just the
              thing, made well.
            </p>
            <div className="flex gap-3">
              <button className="px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition">
                Start a project →
              </button>
              <button className="px-5 py-3 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/15 transition backdrop-blur-md">
                Watch reel
              </button>
            </div>
          </motion.div>
        </section>

        {/* Marquee */}
        <div className="border-y border-white/10 py-4 overflow-hidden backdrop-blur-sm bg-black/20">
          <div className="flex gap-12 whitespace-nowrap text-sm font-mono text-white/60 animate-[scroll_30s_linear_infinite]">
            {Array.from({ length: 3 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                {[
                  "Glide",
                  "Aurora",
                  "Linear",
                  "Vercel",
                  "Arc",
                  "Raycast",
                  "Anthropic",
                  "Lattice",
                  "Northbeam",
                  "Hex",
                ].map((c) => (
                  <span key={c + k} className="tracking-widest">
                    {c} ✦
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

        {/* Manifesto strip */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-6">
            What we believe
          </p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
            Most software is{" "}
            <span className="text-white/40">forgettable on purpose.</span> The
            interesting work happens when a team decides not to play it safe.{" "}
            <span className="text-amber-300">We're for that team.</span>
          </h2>
        </section>

        {/* Numbers */}
        <section className="px-6 pb-32 max-w-7xl mx-auto grid sm:grid-cols-3 gap-10">
          {[
            ["28", "products shipped", "since 2023"],
            ["4.1×", "median launch lift", "across last 12 clients"],
            ["3 wk", "typical engagement", "from kickoff to live"],
          ].map(([n, l, sub]) => (
            <div key={l} className="border-t border-white/20 pt-6">
              <p className="text-6xl md:text-7xl font-semibold tracking-tighter">
                {n}
              </p>
              <p className="text-sm uppercase tracking-widest text-white/70 mt-3">
                {l}
              </p>
              <p className="text-xs text-white/40 mt-1">{sub}</p>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto rounded-[40px] bg-white/5 border border-white/15 backdrop-blur-xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-amber-500/20 blur-2xl opacity-50" />
            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                Have something coming up?
              </h3>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                We take on three engagements a quarter. Tell us what you're
                building and when it ships.
              </p>
              <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">
                Get in touch
              </button>
            </div>
          </div>
        </section>

        <footer className="px-6 pb-10 max-w-7xl mx-auto flex items-center justify-between text-xs text-white/40 font-mono">
          <span>HORIZON ° MMXXVI</span>
          <span>Reykjavík · Brooklyn</span>
        </footer>
      </div>
    </main>
  );
}
