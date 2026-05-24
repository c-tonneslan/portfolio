"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Module = {
  id: string;
  name: string;
  sub: string;
  hp: number;
  price: number;
  status: "in_stock" | "back_order" | "discontinued";
};

const modules: Module[] = [
  { id: "M-21", name: "Triple State Variable Filter", sub: "Low-pass · band-pass · high-pass", hp: 12, price: 540, status: "in_stock" },
  { id: "M-08", name: "Dual Sine Oscillator", sub: "Through-zero FM", hp: 14, price: 480, status: "in_stock" },
  { id: "M-31", name: "Step Sequencer", sub: "16 steps · two channels", hp: 20, price: 620, status: "back_order" },
  { id: "M-04", name: "Voltage Quantiser", sub: "Twelve scales, transposable", hp: 8, price: 320, status: "in_stock" },
  { id: "M-27", name: "Spring Reverb, Long Tank", sub: "Accutronics 8FB3A1A", hp: 14, price: 560, status: "in_stock" },
  { id: "M-15", name: "Slew Limiter, Logarithmic", sub: "Two channels · linked", hp: 6, price: 260, status: "back_order" },
  { id: "M-19", name: "Mixer, Six Channel", sub: "Stereo bus, transformer out", hp: 14, price: 460, status: "in_stock" },
  { id: "M-33", name: "Wavefolder, Discrete", sub: "BC547 cell, no IC", hp: 8, price: 340, status: "in_stock" },
  { id: "M-02", name: "Power Supply, Linear", sub: "±12V, 1A, toroidal", hp: 0, price: 380, status: "in_stock" },
  { id: "M-25", name: "Tape Echo, Single Head", sub: "Discontinued after run of 84", hp: 16, price: 0, status: "discontinued" },
];

const statusLabel: Record<Module["status"], string> = {
  in_stock: "In stock",
  back_order: "Back order, 6–8 weeks",
  discontinued: "Discontinued",
};

// A frequency-response curve that animates a cutoff sweep
function FilterResponse({ cutoff }: { cutoff: number }) {
  // cutoff between 0 and 1 — controls where the rolloff sits horizontally
  const w = 600;
  const h = 180;
  const N = 120;
  const points: string[] = [];
  for (let i = 0; i <= N; i++) {
    const x = (i / N) * w;
    const norm = i / N;
    // simple resonance peak near cutoff, then rolloff
    const dist = norm - cutoff;
    const peak = Math.exp(-Math.pow(dist * 14, 2)) * 0.35;
    const rolloff = norm > cutoff ? Math.max(0, 1 - (norm - cutoff) * 3.6) : 1;
    const yNorm = Math.min(1, rolloff + peak);
    const y = h - yNorm * (h - 24) - 12;
    points.push(`${x},${y}`);
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full">
      {/* Grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={"v" + i}
          x1={(i * w) / 4}
          x2={(i * w) / 4}
          y1={0}
          y2={h}
          stroke="#000"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={"h" + i}
          y1={(i * h) / 3}
          y2={(i * h) / 3}
          x1={0}
          x2={w}
          stroke="#000"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
      ))}
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="#E30613"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cutoff marker */}
      <line
        x1={cutoff * w}
        x2={cutoff * w}
        y1={0}
        y2={h}
        stroke="#000"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <text
        x={cutoff * w + 6}
        y={14}
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        fill="#000"
      >
        {Math.round(cutoff * 20000)} Hz
      </text>
    </svg>
  );
}

export default function ZurichDemo() {
  const [cutoff, setCutoff] = useState(0.42);

  // gentle auto sweep when idle
  useEffect(() => {
    let dir = 1;
    const t = setInterval(() => {
      setCutoff((c) => {
        const n = c + dir * 0.002;
        if (n > 0.78) dir = -1;
        if (n < 0.18) dir = 1;
        return n;
      });
    }, 50);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black relative">
      {/* Vertical edition strip, left */}
      <div className="fixed left-3 top-0 bottom-0 hidden md:flex flex-col items-center justify-between text-[10px] uppercase tracking-[0.35em] py-6 z-20">
        <span style={{ writingMode: "vertical-rl" }}>
          VOLT · Established Zürich, MCMLXVIII
        </span>
        <span style={{ writingMode: "vertical-rl" }}>
          Edition 04 / MMXXVI · Catalogue 41
        </span>
      </div>
      {/* Vertical signal-red rule, right */}
      <div className="fixed right-3 top-0 bottom-0 w-px bg-[#E30613] hidden md:block" />

      <div className="md:px-12 px-6">
        {/* Top meta */}
        <header className="border-b border-black grid grid-cols-12 gap-6 items-end py-5 text-[11px] uppercase tracking-[0.25em]">
          <div className="col-span-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E30613]" />
            <span>VOLT Instruments AG</span>
          </div>
          <div className="hidden md:flex col-span-6 gap-7">
            <span>Catalogue</span>
            <span>Specifications</span>
            <span>Workshop</span>
            <span>Repairs</span>
            <span>Contact</span>
          </div>
          <div className="col-span-9 md:col-span-3 text-right">
            <Link href="/lab" className="hover:underline underline-offset-4">
              /lab
            </Link>
          </div>
        </header>

        {/* Masthead */}
        <section className="grid grid-cols-12 gap-6 pt-14 md:pt-24 pb-20 md:pb-28">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] space-y-2">
            <p>A1 — A12</p>
            <p>Issue No. 41</p>
            <p>Bauschänzlistr. 4</p>
            <p>8001 Zürich</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[22vw] md:text-[16vw] leading-[0.78] tracking-[-0.045em] font-bold"
            >
              VOLT
            </motion.h1>
            <p className="grid grid-cols-12 gap-6 mt-8 text-sm md:text-base leading-[1.55]">
              <span className="col-span-12 md:col-span-6">
                A catalogue of modular synthesisers, hand-wound transformers,
                and incidental electronic apparatus. Built one at a time, in
                Zürich, since nineteen sixty-eight.
              </span>
              <span className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.22em]">
                ↓ Catalogue follows
              </span>
            </p>
          </div>
        </section>

        {/* Featured product — M-21 with live frequency response */}
        <section className="grid grid-cols-12 gap-6 border-y-2 border-black py-10 md:py-14 mb-20">
          <div className="col-span-12 md:col-span-5">
            <div className="border border-black p-5">
              <FilterResponse cutoff={cutoff} />
              <div className="mt-3 flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.25em]">
                  Cutoff
                </span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={cutoff}
                  onChange={(e) => setCutoff(Number(e.target.value))}
                  className="flex-1 accent-[#E30613]"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] mt-3 opacity-70">
                Module M-21 · live response · low-pass mode
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-[11px] uppercase tracking-[0.25em] mb-2 text-[#E30613]">
              ⸺ Module M-21
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.025em] leading-[0.95]">
              Triple
              <br />
              State-Variable
              <br />
              Filter.
            </h2>
            <p className="mt-6 text-base leading-[1.7] max-w-md">
              A two-pole filter, three outputs taken simultaneously. The
              voltage-controlled resonance is self-oscillating past unity. The
              circuit is the one Hans Wäcker drew for us in 1974 and we have
              not had reason to change it.
            </p>

            {/* Spec sheet */}
            <table className="mt-8 w-full text-[12px] border-t border-black">
              <tbody>
                {[
                  ["Width", "12 HP"],
                  ["Depth", "32 mm"],
                  ["Power", "+12V · 60 mA  /  −12V · 50 mA"],
                  ["Outputs", "LP · BP · HP, 10 Vpp"],
                  ["Resonance", "Self-osc above 0.86"],
                  ["Slew rate", "200 V/μs"],
                  ["Frequency range", "8 Hz – 22 kHz"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-black/30">
                    <td className="py-1.5 uppercase tracking-[0.22em] w-1/2 text-[10px]">
                      {k}
                    </td>
                    <td className="py-1.5 font-mono">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-baseline gap-5 mt-8">
              <p className="text-3xl font-bold">
                <span className="font-mono text-base mr-2 align-top opacity-70">
                  CHF
                </span>
                540.—
              </p>
              <button className="px-4 py-2 bg-[#E30613] text-white text-[11px] uppercase tracking-[0.25em]">
                Place order
              </button>
              <span className="text-[11px] uppercase tracking-[0.25em] opacity-70">
                In stock · 14
              </span>
            </div>
          </div>
        </section>

        {/* Catalogue grid */}
        <section className="mb-24">
          <div className="grid grid-cols-12 gap-6 items-end mb-6">
            <h3 className="col-span-12 md:col-span-9 text-3xl md:text-4xl font-bold tracking-[-0.02em]">
              Catalogue.{" "}
              <span className="font-normal text-black/40">10 modules.</span>
            </h3>
            <div className="hidden md:flex col-span-3 justify-end gap-4 text-[10px] uppercase tracking-[0.25em]">
              <span className="border-b border-black pb-0.5">All</span>
              <span className="opacity-50">Filter</span>
              <span className="opacity-50">Osc</span>
              <span className="opacity-50">Seq</span>
            </div>
          </div>

          <div className="border-t border-black grid grid-cols-12 gap-x-6 text-[10px] uppercase tracking-[0.22em] py-2 opacity-70">
            <span className="col-span-1">№</span>
            <span className="col-span-4">Module</span>
            <span className="col-span-3">Sub</span>
            <span className="col-span-1">HP</span>
            <span className="col-span-2">Price · CHF</span>
            <span className="col-span-1 text-right">Status</span>
          </div>

          {modules.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="grid grid-cols-12 gap-x-6 border-t border-black/30 py-4 items-baseline hover:bg-black hover:text-white transition-colors cursor-pointer group"
            >
              <span className="col-span-1 font-mono text-xs">{m.id}</span>
              <span className="col-span-4 text-lg md:text-xl tracking-tight">
                {m.name}
              </span>
              <span className="col-span-3 text-xs opacity-80">{m.sub}</span>
              <span className="col-span-1 font-mono text-xs">
                {m.hp || "—"}
              </span>
              <span className="col-span-2 font-mono text-sm">
                {m.status === "discontinued" ? "—" : m.price + ".—"}
              </span>
              <span
                className={`col-span-1 text-right text-[10px] uppercase tracking-[0.2em] ${
                  m.status === "in_stock"
                    ? "text-[#E30613] group-hover:text-white"
                    : ""
                }`}
              >
                {m.status === "in_stock"
                  ? "●"
                  : m.status === "back_order"
                    ? "○"
                    : "✕"}{" "}
                {statusLabel[m.status].split(",")[0]}
              </span>
            </motion.div>
          ))}
        </section>

        {/* Workshop note */}
        <section className="grid grid-cols-12 gap-6 mb-24 border-t border-black pt-12">
          <div className="col-span-12 md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.25em]">
              From the workshop —
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="text-2xl md:text-3xl leading-[1.4] tracking-tight font-medium">
              We build one panel at a time, on the same milling machine we
              bought from the Sulzer foundry in 1972. If you place an order
              this week, we will start it on Monday morning, the 26th of May.
              You will be the second job of the week.
            </p>
            <p className="text-sm mt-6 opacity-70 font-mono">
              — Hans-Peter Wäcker, master · 24. V. 2026
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black pt-8 pb-12 grid grid-cols-12 gap-6 text-[12px] leading-[1.7]">
          <div className="col-span-12 md:col-span-3">
            <p className="uppercase tracking-[0.22em] text-[10px] mb-2">
              Workshop
            </p>
            <p>Bauschänzlistrasse 4</p>
            <p>8001 Zürich</p>
            <p>Switzerland</p>
            <p className="mt-2 opacity-70">By appointment only.</p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="uppercase tracking-[0.22em] text-[10px] mb-2">
              Correspondence
            </p>
            <p>werkstatt@volt-instruments.ch</p>
            <p>+41 44 251 39 11</p>
            <p className="mt-2">Tu — Sa, 0900 — 1700.</p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="uppercase tracking-[0.22em] text-[10px] mb-2">
              Colophon
            </p>
            <p>Set in Helvetica Neue.</p>
            <p>Printed in Zürich.</p>
            <p>Edition of 600.</p>
          </div>
          <div className="col-span-12 md:col-span-3 text-right">
            <p className="text-[10px] uppercase tracking-[0.22em]">
              MCMLXVIII — MMXXVI
            </p>
            <p className="text-4xl font-bold mt-1">58.</p>
            <p className="text-[10px] uppercase tracking-[0.22em] opacity-70">
              Years in this room
            </p>
            <Link
              href="/lab"
              className="mt-6 inline-block text-[10px] uppercase tracking-[0.22em] hover:underline underline-offset-4"
            >
              ← all demos
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
