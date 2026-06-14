"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    num: "01",
    ar: "بيت",
    en: "House",
    sub: "Six Lebanese architects on rebuilding after the August 2020 blast.",
    author: "Yara Khoury",
    pages: "p. 12–34",
  },
  {
    num: "02",
    ar: "خط",
    en: "Line",
    sub: "Mahmoud Darwish in translation: three poems, three translators, six readings.",
    author: "Joseph Sayah",
    pages: "p. 38–52",
  },
  {
    num: "03",
    ar: "صوت",
    en: "Voice",
    sub: "A conversation with Lara Tabet on photographing the Beqaa.",
    author: "Maya Hage",
    pages: "p. 56–78",
  },
  {
    num: "04",
    ar: "نسيج",
    en: "Cloth",
    sub: "The last hand looms of Tripoli, in a photo essay by Nadim Asfar.",
    author: "Nadim Asfar",
    pages: "p. 82–104",
  },
];

const featured = {
  ar: "كيف نُعِيد",
  en: "How we rebuild",
  sub: "An essay by Yara Khoury on the architecture of return.",
};

export default function BeirutDemo() {
  return (
    <main className="min-h-screen bg-[#dfe9ec] text-[#0d1e3a]">
      {/* Top bar */}
      <header className="px-6 md:px-12 py-5 flex items-center justify-between border-b border-[#0d1e3a]/40 text-[11px] uppercase tracking-[0.3em]">
        <Link href="/lab" className="hover:underline underline-offset-4">
          /lab
        </Link>
        <span className="hidden md:flex items-center gap-3">
          <span dir="rtl" className="text-base normal-case tracking-normal" style={{ fontFamily: "serif" }}>
            بيت
          </span>
          <span>BAIT — A quarterly</span>
        </span>
        <span className="text-[#b6612d]">Issue 09 · Spring MMXXVI</span>
      </header>

      {/* Cover */}
      <section className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-12 gap-6 relative">
        {/* Geometric pattern motif (zellij-feel) */}
        <div
          aria-hidden
          className="absolute top-10 right-10 w-32 h-32 md:w-56 md:h-56 opacity-50"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="z1" patternUnits="userSpaceOnUse" width="20" height="20">
                <polygon
                  points="10,2 18,10 10,18 2,10"
                  fill="none"
                  stroke="#2b6d8e"
                  strokeWidth="0.8"
                />
                <circle cx="10" cy="10" r="2" fill="#b6612d" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#z1)" />
          </svg>
        </div>

        <div className="col-span-12 md:col-span-3">
          <p
            dir="rtl"
            className="text-[10rem] md:text-[14rem] leading-[0.8] text-[#b6612d]"
            style={{ fontFamily: "serif" }}
          >
            ٩
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] mt-2 opacity-70">
            Issue nine
          </p>
        </div>
        <div className="col-span-12 md:col-span-9 relative">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[14vw] md:text-[10vw] leading-[0.82] tracking-[-0.025em] font-medium"
          >
            BAIT
            <span className="font-serif italic font-normal text-[#b6612d]">
              .
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            dir="rtl"
            className="text-3xl md:text-5xl mt-2 text-right tracking-tight text-[#2b6d8e]"
            style={{ fontFamily: "serif" }}
          >
            مجلة فصلية من بيروت
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-serif italic text-xl md:text-3xl mt-6 leading-[1.4] max-w-2xl"
          >
            A quarterly of contemporary Lebanese & Arab thought. Published in
            Beirut, set in two scripts, printed on stone-coloured stock.
          </motion.p>
        </div>
      </section>

      {/* Bilingual hero */}
      <section className="px-6 md:px-12 py-20 border-y-2 border-[#0d1e3a] bg-[#0d1e3a] text-[#dfe9ec]">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-5 text-[#b6612d]">
              ⸺ Cover essay · 01
            </p>
            <h2 className="font-serif italic text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              {featured.en}.
            </h2>
            <p className="text-[11px] uppercase tracking-[0.3em] mt-4 opacity-80">
              By Yara Khoury · 22 pages
            </p>
            <p className="font-serif italic text-base md:text-lg mt-6 max-w-md leading-relaxed text-[#dfe9ec]/90">
              {featured.sub}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right" dir="rtl">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-5 text-[#b6612d] text-left">
              ⸺ مقالة الغلاف · ٠١
            </p>
            <p
              className="text-5xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "serif" }}
            >
              {featured.ar}.
            </p>
            <p className="text-[11px] mt-4 opacity-80 text-left uppercase tracking-[0.3em]">
              يارا خوري · ٢٢ صفحة
            </p>
            <p
              className="text-base md:text-lg mt-6 max-w-md leading-relaxed text-[#dfe9ec]/90 ml-auto"
              style={{ fontFamily: "serif" }}
            >
              مقالة عن العمارة بعد الانفجار، وعن البيوت التي تُبنى مرتين.
            </p>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="flex items-end justify-between mb-10 border-b border-[#0d1e3a]/40 pb-3">
          <h3 className="font-serif italic text-3xl md:text-5xl tracking-[-0.02em]">
            In this issue.
          </h3>
          <p
            className="hidden md:block text-right text-2xl"
            dir="rtl"
            style={{ fontFamily: "serif" }}
          >
            في هذا العدد
          </p>
        </div>
        <ul>
          {articles.map((a, i) => (
            <motion.li
              key={a.num}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-4 border-b border-[#0d1e3a]/20 py-6 items-baseline cursor-pointer group"
            >
              <span className="col-span-1 font-mono text-xs opacity-60">
                № {a.num}
              </span>
              <span
                className="col-span-2 text-4xl text-[#b6612d] group-hover:text-[#2b6d8e] transition-colors"
                style={{ fontFamily: "serif" }}
                dir="rtl"
              >
                {a.ar}
              </span>
              <div className="col-span-6">
                <p className="font-serif italic text-2xl md:text-3xl tracking-tight">
                  {a.en}.
                </p>
                <p className="text-sm mt-2 opacity-80 max-w-xl leading-relaxed">
                  {a.sub}
                </p>
              </div>
              <span className="col-span-2 text-xs uppercase tracking-[0.18em] opacity-80 self-center">
                {a.author}
              </span>
              <span className="col-span-1 text-right font-mono text-sm">
                {a.pages.split(" ")[1]}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* A spread — bilingual fragment */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#2b6d8e] text-[#dfe9ec] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-20 -right-20 w-96 h-96 opacity-25"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <pattern
                id="z2"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
              >
                <polygon
                  points="20,4 36,20 20,36 4,20"
                  fill="none"
                  stroke="#b6612d"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="20" r="3" fill="#b6612d" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#z2)" />
          </svg>
        </div>
        <div className="relative grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-[#b6612d]">
              ⸺ Excerpt · 02 · Line
            </p>
            <p className="font-serif italic text-2xl md:text-3xl leading-[1.55]">
              "I learned the word for stone twice — once in the village, once
              again in Beirut, where the same stone meant a different thing
              because the streets were narrower and louder and the old men sat
              closer to it."
            </p>
            <p className="text-sm mt-6 uppercase tracking-[0.25em] opacity-80">
              — Mahmoud Darwish, trans. J. Sayah
            </p>
          </div>
          <div dir="rtl" className="text-right">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-[#b6612d] text-left">
              ⸺ مقتطف · ٠٢ · خط
            </p>
            <p
              className="text-3xl md:text-4xl leading-[1.8]"
              style={{ fontFamily: "serif" }}
            >
              "تعلمتُ كلمة الحجر مرتين — مرة في القرية، ومرةً في بيروت، حيث
              الحجر نفسه كان شيئاً آخر، لأن الشارع كان أضيق وأعلى، والشيوخ
              يجلسون قريباً منه."
            </p>
            <p
              className="text-sm mt-6 uppercase tracking-[0.25em] opacity-80 text-left"
            >
              — محمود درويش
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="px-6 md:px-12 py-24 md:py-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#b6612d]">
            ⸺ Subscribe
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]">
            Four
            <br />
            issues
            <br />
            by post.
          </h2>
          <p
            dir="rtl"
            className="text-right text-2xl mt-4 text-[#2b6d8e]"
            style={{ fontFamily: "serif" }}
          >
            أربعة أعداد بالبريد
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 grid sm:grid-cols-2 gap-4">
          <div className="border-2 border-[#0d1e3a] p-5">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-2">
              Lebanon & MENA
            </p>
            <p className="font-mono text-3xl">USD 38</p>
            <p className="text-xs mt-1 opacity-70">per year</p>
            <p className="text-xs mt-3 font-serif italic">
              Posted from Achrafieh.
            </p>
          </div>
          <div className="bg-[#0d1e3a] text-[#dfe9ec] p-5">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-2">
              International
            </p>
            <p className="font-mono text-3xl">USD 92</p>
            <p className="text-xs mt-1 opacity-70">per year, air mail</p>
            <p className="text-xs mt-3 font-serif italic">
              Two to four weeks.
            </p>
          </div>
          <button className="sm:col-span-2 bg-[#b6612d] text-[#dfe9ec] px-5 py-4 font-bold uppercase tracking-[0.25em] text-sm">
            Subscribe · اشتراك →
          </button>
        </div>
      </section>

      {/* Masthead */}
      <footer className="px-6 md:px-12 py-14 border-t-2 border-[#0d1e3a] grid grid-cols-12 gap-6 text-[12px] leading-[1.8]">
        <div className="col-span-12 md:col-span-3">
          <p className="font-serif italic text-3xl mb-2">BAIT.</p>
          <p
            className="text-xl mt-1 text-[#2b6d8e]"
            style={{ fontFamily: "serif" }}
            dir="rtl"
          >
            بيت — مجلة فصلية
          </p>
          <p className="opacity-70 mt-2">A quarterly since 2024.</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Editorial
          </p>
          <p>Maya Hage · editor</p>
          <p>Joseph Sayah · translation</p>
          <p>Yara Khoury · architecture</p>
          <p>Nadim Asfar · photography</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Office
          </p>
          <p>14, Rue Sursock</p>
          <p>Achrafieh, Beirut</p>
          <p>Lebanon</p>
          <p className="mt-2 opacity-70">salam@bait.lb</p>
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Next issue
          </p>
          <p className="font-serif italic">№ 10 · Summer 2026</p>
          <p
            className="mt-1 text-[#2b6d8e]"
            style={{ fontFamily: "serif" }}
          >
            عن البحر
          </p>
          <p className="opacity-70 mt-1">On the sea.</p>
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
