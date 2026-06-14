"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    kicker: "Architecture",
    title: "The pink walls of Charles Correa",
    sub: "How a Goa-born architect taught India to build for the monsoon, not against it.",
    author: "Aanya Iyer",
    pages: "p. 14–28",
    tint: "from-[#ef9c2b]/30 to-[#c8612f]/40",
  },
  {
    num: "02",
    kicker: "Type",
    title: "Devanagari, after Mahendra Patel",
    sub: "A new generation of Indian type designers, and the script they grew up illegible in.",
    author: "Kabir Bose",
    pages: "p. 30–48",
    tint: "from-[#2c2467]/40 to-[#4a8b6f]/30",
  },
  {
    num: "03",
    kicker: "Photo essay",
    title: "Five afternoons in Bombay, in the rain",
    sub: "Photographs by Suchitra Naik, May through July 2025.",
    author: "S. Naik · A. Mehta",
    pages: "p. 50–71",
    tint: "from-[#6b1f3a]/40 to-[#2c2467]/30",
  },
  {
    num: "04",
    kicker: "Profile",
    title: "Aman Khanna keeps making the same chair",
    sub: "Twelve years, one form. A conversation about repetition as discipline.",
    author: "Devika Rao",
    pages: "p. 74–88",
    tint: "from-[#4a8b6f]/30 to-[#ef9c2b]/30",
  },
];

const poems = [
  {
    en: "The mango tree outside the kitchen / drops one fruit each summer / on the same square of the courtyard.",
    hi: "रसोई के बाहर आम का पेड़ / हर गर्मी एक फल गिराता है / आँगन के उसी कोने पर।",
    author: "— A. Iyer, after Vinod Kumar Shukla",
  },
  {
    en: "I learned to fold the saree from my grandmother / who learned it standing / in a room with no mirror.",
    hi: "साड़ी की तह दादी से सीखी / जिन्होंने सीखी थी खड़े होकर / एक कमरे में जहाँ आइना नहीं था।",
    author: "— Sangeeta D., 2026",
  },
];

export default function MumbaiDemo() {
  return (
    <main className="min-h-screen bg-[#f7e0c4] text-[#2c2467] relative">
      {/* Top meta */}
      <header className="px-6 md:px-12 py-5 border-b border-[#2c2467]/40 flex items-center justify-between text-[11px] uppercase tracking-[0.25em]">
        <div className="flex items-center gap-2">
          <span className="text-[#ef9c2b]">✦</span>
          <span>MAYA — A Quarterly</span>
        </div>
        <span className="hidden md:inline">Issue Twenty-Two · The Monsoon</span>
        <Link href="/lab" className="hover:underline underline-offset-4">
          /lab
        </Link>
      </header>

      {/* Cover */}
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-20 grid grid-cols-12 gap-6 relative">
        {/* Ornamental rule */}
        <div className="col-span-12 flex items-center gap-4">
          <span className="text-[#6b1f3a] text-2xl">✦</span>
          <div className="flex-1 h-px bg-[#2c2467]/40" />
          <span className="text-[10px] uppercase tracking-[0.35em]">
            Issue 22 · Monsoon MMXXVI
          </span>
          <div className="flex-1 h-px bg-[#2c2467]/40" />
          <span className="text-[#6b1f3a] text-2xl">✦</span>
        </div>

        <div className="col-span-12 md:col-span-2 hidden md:block">
          <p
            className="font-serif text-7xl text-[#ef9c2b] mt-4"
            style={{ fontFamily: "serif" }}
          >
            २२
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] mt-2">
            Bāīsavā Aṅk
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-70">
            Twenty-second
          </p>
        </div>

        <div className="col-span-12 md:col-span-9 md:col-start-3">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif text-[18vw] md:text-[14vw] leading-[0.85] tracking-[-0.03em]"
          >
            Maya<span className="text-[#6b1f3a]">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif italic text-2xl md:text-4xl tracking-tight mt-3 text-[#6b1f3a]"
          >
            On living slowly in a country that won't stop moving.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3 text-sm uppercase tracking-[0.22em]"
          >
            <span>96 pages</span>
            <span className="text-[#ef9c2b]">✦</span>
            <span>4 features</span>
            <span className="text-[#ef9c2b]">✦</span>
            <span>2 poems</span>
            <span className="text-[#ef9c2b]">✦</span>
            <span>1 photo essay</span>
            <span className="text-[#ef9c2b]">✦</span>
            <span>printed in Bombay</span>
          </motion.div>
        </div>
      </section>

      {/* Big subhead — editor's note */}
      <section className="px-6 md:px-12 py-20 border-y-2 border-[#2c2467] bg-[#2c2467] text-[#f7e0c4]">
        <div className="grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.3em] opacity-80">
            Editor's note
            <br />⸺ Devika Rao
          </p>
          <p className="col-span-12 md:col-span-8 font-serif italic text-2xl md:text-3xl leading-[1.45] tracking-[-0.005em]">
            <span className="not-italic font-sans float-left text-7xl font-bold leading-[0.78] mr-3 mt-1 text-[#ef9c2b]">
              T
            </span>
            he monsoon doesn't end a year — it interrupts one. This issue
            asks what gets made in the interruption: a building, a script, a
            chair, an afternoon. The answers come from four cities, in five
            languages.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12 border-b border-[#2c2467]/40 pb-3">
          <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em]">
            Features<span className="text-[#6b1f3a]">.</span>
          </h2>
          <span className="text-[11px] uppercase tracking-[0.3em] opacity-70">
            Four pieces · 76 pages
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.article
              key={f.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group cursor-pointer"
            >
              <div
                className={`aspect-[5/3] rounded-sm bg-gradient-to-br ${f.tint} mb-5 relative overflow-hidden border border-[#2c2467]/15`}
              >
                <div
                  className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />
                <span className="absolute top-4 left-4 font-mono text-xs uppercase tracking-widest text-[#f7e0c4]/80">
                  №{f.num}
                </span>
                <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.3em] text-[#f7e0c4] font-medium">
                  {f.kicker}
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#6b1f3a] mb-2">
                ✦ {f.kicker}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight leading-tight group-hover:italic transition-all">
                {f.title}
              </h3>
              <p className="text-sm mt-3 text-[#2c2467]/80 leading-relaxed max-w-md font-serif italic">
                {f.sub}
              </p>
              <p className="text-[11px] uppercase tracking-[0.25em] mt-4 opacity-70">
                {f.author} · {f.pages}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Poems */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#f7e0c4] relative">
        <div aria-hidden className="absolute top-10 right-10 text-9xl opacity-10" style={{ fontFamily: "serif" }}>
          कविता
        </div>
        <div className="relative grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#6b1f3a]">
              ✦ iii — Poems
            </p>
            <h2 className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[0.95]">
              Two,
              <br />
              translated.
            </h2>
            <p className="text-sm mt-6 font-serif italic max-w-xs opacity-80">
              In English and Devanagari, set side by side. The translations
              are deliberately loose.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5 space-y-16">
            {poems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-2 gap-6 border-l-2 border-[#ef9c2b] pl-6"
              >
                <p className="font-serif italic text-xl md:text-2xl leading-[1.65]">
                  {p.en}
                </p>
                <p
                  className="text-xl md:text-2xl leading-[1.85] text-[#6b1f3a]"
                  style={{ fontFamily: "serif" }}
                >
                  {p.hi}
                </p>
                <p className="md:col-span-2 text-[11px] uppercase tracking-[0.3em] opacity-70">
                  {p.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaic photo essay — gradient placeholders */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="flex items-end justify-between mb-10 border-b border-[#2c2467]/40 pb-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b1f3a] mb-2">
              ✦ iv — Photo essay
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.02em]">
              Five afternoons in Bombay, in the rain.
            </h2>
            <p className="text-sm mt-1 italic font-serif opacity-80">
              Suchitra Naik, 2025
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 auto-rows-[120px]">
          {[
            { c: "from-[#6b1f3a] to-[#2c2467]", area: "col-span-12 md:col-span-7 row-span-3" },
            { c: "from-[#4a8b6f] to-[#2c2467]", area: "col-span-12 md:col-span-5 row-span-2" },
            { c: "from-[#ef9c2b] to-[#c8612f]", area: "col-span-6 md:col-span-3 row-span-2" },
            { c: "from-[#2c2467] to-[#4a8b6f]", area: "col-span-6 md:col-span-2 row-span-2" },
            { c: "from-[#c8612f] to-[#6b1f3a]", area: "col-span-12 md:col-span-7 row-span-2" },
            { c: "from-[#2c2467] to-[#6b1f3a]", area: "col-span-12 md:col-span-5 row-span-2" },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`${p.area} bg-gradient-to-br ${p.c} relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='1.4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#f7e0c4]/80 font-mono">
                0{i + 1} / 06
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#ef9c2b] text-[#2c2467] relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#6b1f3a]" />
        <div aria-hidden className="absolute top-10 -left-20 w-64 h-64 rounded-full bg-[#4a8b6f] opacity-60" />
        <div className="relative grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 font-bold">
              ✦ Subscribe
            </p>
            <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] leading-[1]">
              Four issues
              <br />
              <span className="italic">a year,</span> in print.
            </h2>
            <p className="font-serif italic text-lg md:text-xl mt-6 max-w-md leading-relaxed">
              Posted from Bombay. No PDF, no app, no waitlist. Just paper.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
            {[
              { region: "India", price: "₹ 3,200", note: "per year" },
              { region: "Rest of world", price: "USD 78", note: "per year" },
              { region: "Single issue", price: "₹ 900", note: "current only" },
              { region: "Patron", price: "₹ 9,600", note: "with the archive" },
            ].map((p) => (
              <div
                key={p.region}
                className="border-2 border-[#2c2467] p-4 bg-[#f7e0c4] hover:bg-[#2c2467] hover:text-[#f7e0c4] transition cursor-pointer"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] mb-1">
                  {p.region}
                </p>
                <p className="font-mono text-xl font-bold">{p.price}</p>
                <p className="text-[10px] mt-1 opacity-70">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masthead */}
      <footer className="px-6 md:px-12 py-14 border-t-2 border-[#2c2467] grid grid-cols-12 gap-6 text-[12px] leading-[1.8]">
        <div className="col-span-12 md:col-span-3">
          <p className="font-serif text-3xl mb-2">
            Maya<span className="text-[#6b1f3a]">.</span>
          </p>
          <p className="opacity-70">A quarterly · since 2021</p>
          <p className="opacity-70">Published by Maya Press, Bombay</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Editorial
          </p>
          <p>Devika Rao · editor</p>
          <p>Kabir Bose · type</p>
          <p>Aanya Iyer · architecture</p>
          <p>Suchitra Naik · photo</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Office
          </p>
          <p>14, Wadia Building</p>
          <p>Kala Ghoda, Fort</p>
          <p>Mumbai 400 001</p>
          <p className="mt-2 opacity-70">hello@maya.in</p>
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Next issue
          </p>
          <p className="font-serif italic">Issue 23 · Post-monsoon</p>
          <p>September 2026</p>
          <p className="mt-2 font-serif italic">On staying.</p>
          <Link
            href="/lab"
            className="mt-6 inline-block text-[10px] uppercase tracking-[0.25em] hover:underline underline-offset-4"
          >
            ← all demos
          </Link>
        </div>
      </footer>
    </main>
  );
}
