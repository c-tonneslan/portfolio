"use client";

import Link from "next/link";

export default function BrutalistDemo() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] text-black font-mono pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Masthead */}
        <header className="border-y-4 border-black py-4 mb-8">
          <div className="flex items-center justify-between text-xs uppercase">
            <span>Vol. XII · No. 4</span>
            <span>Saturday, May 24, 2026</span>
            <span>Reykjavík · Free</span>
          </div>
        </header>

        <h1 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter mb-2 uppercase">
          The
          <br />
          Press.
        </h1>
        <p className="border-t-2 border-black pt-3 mb-12 text-sm uppercase tracking-widest flex items-center justify-between">
          <span>An anti-design quarterly</span>
          <span>Iss. 04 / 2026</span>
        </p>

        {/* Hero feature */}
        <article className="grid md:grid-cols-12 gap-6 mb-16 pb-12 border-b-4 border-black">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-widest mb-3 inline-block bg-black text-[#f4f1e8] px-2 py-1">
              Cover · Essay
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tight uppercase mb-5">
              Soft is over.
              <br />
              <span className="bg-yellow-300 px-1">Hard</span> is what's next.
            </h2>
            <p className="text-base leading-relaxed mb-3">
              A decade of rounded corners, milky gradients, and 3D pastel
              illustrations gave us interfaces with no edges to grab.
              Everything was polite. Nothing left a fingerprint.
            </p>
            <p className="text-base leading-relaxed mb-3">
              The pendulum has swung. Designers are reaching for thick borders,
              flat black, and monospace bodies. It looks like the late 90s, but
              the point isn't nostalgia. The point is{" "}
              <span className="font-bold underline">information density</span>.
            </p>
            <p className="text-sm uppercase mt-6 font-bold">
              By M. Patel · 8 min read →
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="border-4 border-black bg-yellow-300 aspect-[4/5] p-4 flex flex-col">
              <div className="flex-1 border-2 border-black bg-[#f4f1e8] relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-10">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <div
                      key={i}
                      className="border-r border-b border-black/15"
                    />
                  ))}
                </div>
                <div className="absolute inset-x-4 top-4 bottom-4 border-4 border-black bg-black" />
                <div className="absolute left-8 top-8 right-8 h-2 bg-yellow-300" />
                <div className="absolute left-8 bottom-8 text-[10px] uppercase text-yellow-300 tracking-widest">
                  Fig. 01 — The wall
                </div>
              </div>
              <p className="text-[10px] mt-3 uppercase tracking-widest leading-relaxed">
                ↓ Inside: the design grids of the new web. A walkthrough of six
                interfaces that refuse to be friendly.
              </p>
            </div>
          </div>
        </article>

        {/* Columns */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              kicker: "Typography",
              title: "Why everyone is using mono.",
              body: "Geist Mono, JetBrains, IBM Plex Mono — once the territory of code editors, now the body font of marketing pages. We asked four type designers what changed.",
              byline: "L. Müller",
            },
            {
              kicker: "Tools",
              title: "The new asset pipeline.",
              body: "Figma plugins are out. CLI-first design systems, code-driven tokens, and Tailwind v4 are how the fastest teams actually ship. A field report.",
              byline: "D. Ortega",
            },
            {
              kicker: "Critique",
              title: "Anti-design, post-irony.",
              body: "Is brutalism a real design language, or just a way for tired designers to look fresh? Three interfaces and one verdict per piece.",
              byline: "T. Wexler",
            },
          ].map((col) => (
            <div
              key={col.title}
              className="border-l-2 border-black pl-4 break-inside-avoid"
            >
              <p className="text-[10px] uppercase tracking-widest mb-2 font-bold">
                {col.kicker}
              </p>
              <h3 className="text-xl font-black mb-3 leading-tight">
                {col.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3">{col.body}</p>
              <p className="text-[10px] uppercase tracking-widest">
                {col.byline} ·{" "}
                <span className="underline cursor-pointer">read →</span>
              </p>
            </div>
          ))}
        </section>

        {/* Big table */}
        <section className="mb-16">
          <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-black pb-2">
            Index · 2026 trends ranked
          </h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black uppercase text-xs">
                <th className="text-left py-2">#</th>
                <th className="text-left py-2">Movement</th>
                <th className="text-left py-2">Half-life</th>
                <th className="text-right py-2">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["01", "Bento grids", "Healthy", "Keep"],
                ["02", "AI command bars", "Hot", "Keep"],
                ["03", "Spatial / glass", "Returning", "Maybe"],
                ["04", "Brutalism", "Resurgent", "Yes"],
                ["05", "Claymorphism", "Niche", "Selective"],
                ["06", "Kinetic typography", "Hot", "Keep"],
                ["07", "Glow-in-the-dark CTAs", "Overused", "Cut"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-black/30">
                  <td className="py-2 font-bold">{row[0]}</td>
                  <td className="py-2">{row[1]}</td>
                  <td className="py-2">{row[2]}</td>
                  <td className="py-2 text-right font-bold uppercase">
                    {row[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Subscribe */}
        <section className="border-4 border-black bg-black text-[#f4f1e8] p-6 md:p-10 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <div>
              <p className="text-xs uppercase tracking-widest mb-2">
                Last call
              </p>
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-none">
                Get the next issue in print.
              </h3>
            </div>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                className="flex-1 bg-[#f4f1e8] text-black px-3 py-3 outline-none font-mono text-sm"
                placeholder="your.email@domain"
              />
              <button className="bg-yellow-300 text-black font-bold uppercase px-5 py-3 hover:bg-yellow-400 transition text-sm">
                Ship it →
              </button>
            </form>
          </div>
        </section>

        <div className="pt-6 border-t-2 border-black flex items-center justify-between text-xs uppercase">
          <Link href="/lab" className="underline">
            ← all demos
          </Link>
          <span>End of issue · pp. 12</span>
        </div>
      </div>
    </main>
  );
}
