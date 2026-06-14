"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const editions = [
  { num: "07", year: "2026", title: "The Reading Chair", designer: "Märta Linde", run: "edition of 80", price: "SEK 38 400", note: "Solid Småland oak, hand-rubbed linseed, wool from Klippan." },
  { num: "06", year: "2025", title: "Stool 02", designer: "Jens Holmberg", run: "edition of 120", price: "SEK 14 200", note: "Birch, three coats of soap finish. The maker's first piece for us." },
  { num: "05", year: "2025", title: "Shelf, Wall-Hung", designer: "Anna Sjögren", run: "edition of 60", price: "SEK 24 600", note: "Ash with brass fittings. Three lengths, two depths, one finish." },
  { num: "04", year: "2024", title: "Bench, Long", designer: "Pelle Eriksson", run: "edition of 40", price: "SEK 42 800", note: "Pine. Untreated. We were unsure about this one. We were wrong." },
  { num: "03", year: "2024", title: "The Quiet Lamp", designer: "Ida Forsberg", run: "edition of 100", price: "SEK 9 800", note: "Brass, paper shade, hand-wound cord. Sold out, but six were returned and remade." },
];

export default function StockholmDemo() {
  return (
    <main className="min-h-screen bg-[#e6ebee] text-[#1a1a1a]">
      {/* Vertical edition strip */}
      <div
        aria-hidden
        className="fixed left-3 top-0 bottom-0 hidden md:flex flex-col items-center justify-between text-[10px] uppercase tracking-[0.35em] py-6 opacity-70"
      >
        <span style={{ writingMode: "vertical-rl" }}>
          Ärla Upplagor · Södermalm · sedan MMXIX
        </span>
        <span style={{ writingMode: "vertical-rl" }}>
          Sju utgåvor
        </span>
      </div>

      {/* Top bar */}
      <header className="px-6 md:px-12 py-5 flex items-center justify-between text-[11px] uppercase tracking-[0.3em]">
        <Link href="/lab" className="hover:underline underline-offset-4">
          /lab
        </Link>
        <span className="hidden md:inline">
          Ärla Upplagor · Stockholm · 2026
        </span>
        <span className="text-[#c08350]">Sju · seven editions</span>
      </header>

      {/* Masthead */}
      <section className="px-6 md:px-12 pt-20 md:pt-28 pb-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-9">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.35em] mb-8 opacity-70"
          >
            ⸺ Editions house · one designer a year
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[14vw] md:text-[10vw] leading-[0.85] tracking-[-0.025em] font-medium"
          >
            Ärla
            <span className="font-serif italic font-normal text-[#c08350]">
              {" "}upplagor.
            </span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 md:col-span-3 self-end text-sm leading-[1.7]"
        >
          A small editions house on Tjärhovsgatan, in Södermalm. Each year we
          release a single furniture object, made in a numbered edition, by
          one designer of our choosing.
        </motion.p>
      </section>

      {/* Featured edition */}
      <section className="px-6 md:px-12 pb-32 grid grid-cols-12 gap-6 border-y border-[#1a1a1a]/25 py-16 md:py-20">
        <div className="col-span-12 md:col-span-5">
          {/* Faux chair illustration: spare lines */}
          <div className="aspect-[5/6] bg-[#ebe2d0] relative overflow-hidden border border-[#1a1a1a]/15">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 260" className="w-3/4 h-3/4">
                {/* shadow */}
                <ellipse cx="100" cy="245" rx="60" ry="6" fill="#1a1a1a" opacity="0.12" />
                {/* back */}
                <rect x="60" y="40" width="80" height="100" fill="#c08350" rx="2" />
                {/* seat */}
                <rect x="50" y="140" width="100" height="14" fill="#9b6438" rx="2" />
                {/* cushion */}
                <rect x="55" y="138" width="90" height="6" fill="#8aa185" opacity="0.85" rx="2" />
                {/* legs */}
                <rect x="55" y="154" width="6" height="90" fill="#7a4a2a" />
                <rect x="139" y="154" width="6" height="90" fill="#7a4a2a" />
                <rect x="55" y="80" width="6" height="60" fill="#7a4a2a" />
                <rect x="139" y="80" width="6" height="60" fill="#7a4a2a" />
              </svg>
            </div>
            <p className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] opacity-70">
              № 07 · 2026
            </p>
            <p className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.25em] opacity-70">
              Edition of 80
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#c08350] mb-2">
            ⸺ This year's edition
          </p>
          <h2 className="font-serif italic text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
            The Reading Chair.
          </h2>
          <p className="text-base md:text-lg leading-[1.75] mt-5 max-w-md">
            Designed by Märta Linde over the course of fourteen months in her
            studio in Skåne. Solid oak from a single Småland farm, hand-rubbed
            in raw linseed, with a wool seat woven by Klippan in dust green.
          </p>
          <p className="font-serif italic text-base mt-4 opacity-80 max-w-md">
            "I wanted a chair to read in for thirty years. The first prototype
            was wrong. The fourth was correct."
          </p>
          <p className="text-[11px] uppercase tracking-[0.3em] mt-2 opacity-70">
            — M. Linde, in the catalogue note
          </p>

          <div className="mt-8 grid grid-cols-2 gap-y-3 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">
                Material
              </p>
              <p>Småland oak, raw linseed</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">
                Upholstery
              </p>
              <p>Klippan wool, "Mossa" (dust green)</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">
                Dimensions
              </p>
              <p>H 78 · W 64 · D 72 cm</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">
                Lead time
              </p>
              <p>14 — 18 weeks</p>
            </div>
          </div>

          <div className="mt-8 flex items-baseline gap-5">
            <p className="font-mono text-3xl">
              <span className="text-base mr-1 opacity-70">SEK</span>
              38 400
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] opacity-70">
              · 42 of 80 remain
            </p>
            <button className="ml-auto px-4 py-2 bg-[#1a1a1a] text-[#e6ebee] text-[11px] uppercase tracking-[0.25em]">
              Reservera →
            </button>
          </div>
        </div>
      </section>

      {/* Catalogue of editions */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="flex items-end justify-between border-b border-[#1a1a1a]/25 pb-3 mb-10">
          <h3 className="font-serif italic text-3xl md:text-4xl tracking-[-0.01em]">
            Tidigare upplagor.
          </h3>
          <p className="text-[11px] uppercase tracking-[0.3em] opacity-70 hidden md:block">
            Five earlier editions · the archive
          </p>
        </div>
        <ul>
          {editions.map((e, i) => (
            <motion.li
              key={e.num}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-3 border-b border-[#1a1a1a]/15 py-6 items-baseline hover:bg-[#1a1a1a] hover:text-[#e6ebee] transition-colors cursor-pointer group"
            >
              <span className="col-span-1 font-mono text-xs opacity-60">
                № {e.num}
              </span>
              <span className="col-span-1 font-mono text-xs opacity-70">
                {e.year}
              </span>
              <div className="col-span-6">
                <p className="font-serif italic text-xl md:text-2xl tracking-tight">
                  {e.title}
                </p>
                <p className="text-xs opacity-70 mt-0.5 group-hover:opacity-80">
                  by {e.designer} · {e.run}
                </p>
                <p className="text-sm font-serif italic mt-3 max-w-md opacity-85 group-hover:opacity-95">
                  {e.note}
                </p>
              </div>
              <span className="col-span-2 text-right md:text-left text-xs uppercase tracking-[0.2em] opacity-80 self-center">
                {e.designer}
              </span>
              <span className="col-span-2 text-right font-mono text-sm">
                {e.price}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* About the studio */}
      <section className="px-6 md:px-12 py-24 md:py-32 grid grid-cols-12 gap-6 bg-[#1a1a1a] text-[#e6ebee]">
        <div className="col-span-12 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#c08350]">
            ⸺ Om oss · about the house
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05]">
            Slowly,
            <br />
            and never twice.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-[1.8]">
          <p>
            <span className="font-serif italic float-left text-7xl leading-[0.78] mr-3 mt-1 text-[#c08350]">
              W
            </span>
            e are three people in a small studio above a bakery in Södermalm.
            We are not a furniture brand. We do not have a season. We release
            one edition a year and we do not release the same edition twice.
          </p>
          <p>
            Designers we admire are invited to make a single piece. The
            economics are difficult, the process is slow, the chair you
            receive is the chair we'd have wanted in our own kitchen. That is
            the whole brief.
          </p>
          <p className="font-serif italic">
            Pieces are made by hand in Småland by the same family of joiners
            since 2019. Every piece carries the maker's mark and the year. If
            something breaks we will mend it, by post, for the rest of its
            life.
          </p>
          <p className="text-sm uppercase tracking-[0.25em] not-italic opacity-80">
            — Hilda Wessman, founder
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-14 grid grid-cols-12 gap-6 text-[12px] leading-[1.8]">
        <div className="col-span-12 md:col-span-3">
          <p className="font-serif italic text-3xl mb-2">Ärla</p>
          <p className="opacity-70">Upplagor · sedan 2019</p>
          <p className="opacity-70">Stockholm</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Adress
          </p>
          <p>Tjärhovsgatan 14, 4 tr</p>
          <p>116 28 Stockholm</p>
          <p className="mt-2 opacity-70">Öppet efter avtal.</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Kontakt
          </p>
          <p>post@arla.se</p>
          <p>+46 8 642 38 02</p>
          <p className="mt-2 opacity-70">
            For trade enquiries, please write.
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Nästa upplaga
          </p>
          <p className="font-serif italic">Edition № 08, spring 2027.</p>
          <p className="opacity-70">Designer announced in October.</p>
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
