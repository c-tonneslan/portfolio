"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const rooms = [
  { num: "01", name: "Chambre Bleue", ar: "الزرقاء", story: "Majorelle blue, two windows on the inner courtyard, no clocks.", size: "32 m²", rate: "MAD 1 800", tone: "bg-[#2c4d9b]", text: "text-[#f1e8d4]", accent: "#d8a943" },
  { num: "02", name: "Chambre Safran", ar: "الزعفران", story: "Saffron walls, a small terrace, the call to prayer at dawn from three minarets.", size: "28 m²", rate: "MAD 1 600", tone: "bg-[#d8a943]", text: "text-[#1f1410]", accent: "#c25831" },
  { num: "03", name: "Chambre Terre", ar: "الأرض", story: "Tadelakt walls in earth red, a deep bath, dates and orange-blossom water on arrival.", size: "34 m²", rate: "MAD 2 100", tone: "bg-[#c25831]", text: "text-[#f1e8d4]", accent: "#2c4d9b" },
  { num: "04", name: "Suite Atlas", ar: "أطلس", story: "Two rooms and a roof above them, looking south. The mountains on a clear day.", size: "58 m²", rate: "MAD 3 800", tone: "bg-[#1f1410]", text: "text-[#f1e8d4]", accent: "#d8a943" },
];

// SVG zellij motif
const Zellij = ({ size = 80, color = "#c25831", bg = "#f1e8d4" }: { size?: number; color?: string; bg?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full"
    style={{ backgroundColor: bg }}
  >
    <defs>
      <pattern
        id={`zellij-${color.replace("#", "")}`}
        patternUnits="userSpaceOnUse"
        width={size / 4}
        height={size / 4}
      >
        <polygon
          points="10,2 18,10 10,18 2,10"
          fill={color}
          opacity="0.85"
        />
        <polygon
          points="10,6 14,10 10,14 6,10"
          fill={bg}
        />
        <line x1="0" y1="10" x2="20" y2="10" stroke={color} strokeWidth="0.5" opacity="0.4" />
        <line x1="10" y1="0" x2="10" y2="20" stroke={color} strokeWidth="0.5" opacity="0.4" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill={`url(#zellij-${color.replace("#", "")})`} />
  </svg>
);

export default function MarrakechDemo() {
  return (
    <main className="min-h-screen bg-[#f1e8d4] text-[#1f1410]">
      {/* Top bar */}
      <header className="px-6 md:px-12 py-5 flex items-center justify-between border-b border-[#1f1410]/30 text-[11px] uppercase tracking-[0.3em]">
        <Link href="/lab" className="hover:underline underline-offset-4">
          /lab
        </Link>
        <div className="hidden md:flex items-center gap-3">
          <span>Riad Aïn</span>
          <span className="text-[#c25831]">·</span>
          <span dir="rtl" style={{ fontFamily: "serif" }} className="text-base normal-case tracking-normal">
            رياض عين
          </span>
          <span className="text-[#c25831]">·</span>
          <span>Médina, Marrakech</span>
        </div>
        <button className="hover:text-[#c25831]">Réserver →</button>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-12 gap-6 relative overflow-hidden">
        {/* Decorative zellij column on the right */}
        <div
          aria-hidden
          className="hidden md:block absolute right-0 top-0 bottom-0 w-32 lg:w-48"
        >
          <Zellij color="#2c4d9b" bg="#f1e8d4" />
        </div>

        <div className="col-span-12 md:col-span-9 relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.35em] mb-6 text-[#c25831] font-bold"
          >
            ⸺ Quatre chambres · une cour · un toit
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif italic text-[18vw] md:text-[12vw] leading-[0.85] tracking-[-0.025em]"
          >
            Riad Aïn.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            dir="rtl"
            className="text-2xl md:text-4xl mt-3 text-[#2c4d9b]"
            style={{ fontFamily: "serif" }}
          >
            رياض عين — رياض صغير، في قلب المدينة
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-serif italic text-lg md:text-2xl mt-6 leading-[1.5] max-w-2xl text-[#1f1410]/90"
          >
            A small riad, four rooms only, in a quiet street behind the
            spice market in the old medina. Built around the year 1820,
            renovated, gently, in 2018.
          </motion.p>
        </div>
      </section>

      {/* Zellij band */}
      <section className="h-24 md:h-32 grid grid-cols-4 border-y border-[#1f1410]/30">
        <div className="overflow-hidden"><Zellij color="#c25831" bg="#f1e8d4" /></div>
        <div className="overflow-hidden"><Zellij color="#2c4d9b" bg="#f1e8d4" /></div>
        <div className="overflow-hidden"><Zellij color="#d8a943" bg="#f1e8d4" /></div>
        <div className="overflow-hidden"><Zellij color="#1f1410" bg="#f1e8d4" /></div>
      </section>

      {/* Courtyard quote */}
      <section className="px-6 md:px-12 py-24 md:py-32 text-center max-w-4xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-[#c25831]">
          ⸺ Inscription, dans le patio
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif italic text-3xl md:text-5xl leading-[1.35] tracking-[-0.01em]"
        >
          "La maison est petite, mais elle est calme,
          <br />
          et l'eau est froide."
        </motion.p>
        <p className="text-base font-serif italic mt-6 text-[#1f1410]/70">
          The house is small, but it is calm — and the water is cold.
        </p>
        <p dir="rtl" className="text-2xl mt-6 text-[#2c4d9b]" style={{ fontFamily: "serif" }}>
          البيت صغير، ولكنه هادئ، والماء بارد
        </p>
      </section>

      {/* The rooms */}
      <section>
        <div className="px-6 md:px-12 py-10 border-y border-[#1f1410]/30">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <h2 className="font-serif italic text-4xl md:text-6xl tracking-[-0.02em]">
              Les chambres.
            </h2>
            <p dir="rtl" className="text-xl text-[#c25831]" style={{ fontFamily: "serif" }}>
              الغرف — أربعة فقط
            </p>
          </div>
        </div>

        {rooms.map((r, i) => (
          <motion.article
            key={r.num}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className={`${r.tone} ${r.text} relative overflow-hidden`}
          >
            <div className="grid grid-cols-12 gap-6 px-6 md:px-12 py-20 md:py-28 relative">
              {/* Side zellij */}
              <div
                aria-hidden
                className="hidden md:block absolute right-0 top-0 bottom-0 w-24"
                style={{ opacity: 0.18 }}
              >
                <Zellij color={r.accent} bg="rgba(0,0,0,0)" />
              </div>

              <div className="col-span-12 md:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.3em] opacity-80">
                  № {r.num}
                </p>
                <p
                  dir="rtl"
                  className="text-4xl mt-3 opacity-95"
                  style={{ fontFamily: "serif", color: r.accent }}
                >
                  {r.ar}
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-serif italic text-5xl md:text-7xl tracking-[-0.025em] leading-[0.95]">
                  {r.name}.
                </h3>
                <p className="text-[11px] uppercase tracking-[0.3em] mt-5 opacity-85">
                  {r.size}
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="font-serif italic text-lg md:text-2xl leading-[1.5] max-w-md">
                  {r.story}
                </p>
                <div className="mt-8 flex items-center gap-5 flex-wrap">
                  <span className="font-mono text-2xl md:text-3xl">
                    {r.rate}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                    par nuit · ليلة
                  </span>
                  <button
                    className="px-4 py-2 text-[11px] uppercase tracking-[0.25em] font-bold border-2 border-current hover:opacity-80"
                  >
                    Réserver →
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* About */}
      <section className="px-6 md:px-12 py-24 md:py-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#c25831]">
            ⸺ À propos de la maison
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]">
            La maison,
            <br />
            la cour,
            <br />
            les voisins.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-[1.8]">
          <p>
            <span className="font-serif italic float-left text-7xl leading-[0.78] mr-3 mt-1 text-[#c25831]">
              L
            </span>
            a maison appartient à la famille Aïn depuis 1820. Mon
            arrière-grand-père l'a construite pour ses quatre filles ; chaque
            chambre porte encore le nom d'une d'elles, dans nos archives.
          </p>
          <p>
            Nous l'avons restaurée doucement en 2018, en gardant tout ce
            qu'il était possible de garder — le tadelakt, les portes, le
            puits dans la cour, et l'olivier qui est plus vieux que le riad.
          </p>
          <p className="font-serif italic text-[#c25831]">
            Le matin, le café est servi sur le toit avec des dattes de
            Zagora et du pain d'orge du voisin Hassan. C'est mon plat
            préféré dans toute la médina.
          </p>
          <p className="text-sm uppercase tracking-[0.25em] not-italic opacity-80">
            — Salima Aïn, propriétaire
          </p>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-[#1f1410] text-[#f1e8d4] px-6 md:px-12 py-20 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-72 h-72 opacity-30"
        >
          <Zellij color="#d8a943" bg="rgba(0,0,0,0)" />
        </div>
        <div className="relative grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#d8a943]">
              ⸺ Réservation
            </p>
            <h2 className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]">
              Deux nuits
              <br />
              <span className="text-[#c25831]">minimum,</span>
              <br />
              s'il vous plaît.
            </h2>
            <p
              dir="rtl"
              className="text-xl mt-4 text-[#d8a943]"
              style={{ fontFamily: "serif" }}
            >
              ليلتان كحد أدنى
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 block">
                Arrivée
              </label>
              <input
                defaultValue="Sam. 30 mai"
                className="w-full bg-transparent border-b border-[#f1e8d4]/40 py-2 text-lg font-serif italic focus:outline-none focus:border-[#d8a943]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 block">
                Départ
              </label>
              <input
                defaultValue="Lun. 1 juin"
                className="w-full bg-transparent border-b border-[#f1e8d4]/40 py-2 text-lg font-serif italic focus:outline-none focus:border-[#d8a943]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 block">
                Personnes
              </label>
              <input
                defaultValue="2 adultes"
                className="w-full bg-transparent border-b border-[#f1e8d4]/40 py-2 text-lg font-serif italic focus:outline-none focus:border-[#d8a943]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 block">
                Chambre
              </label>
              <input
                defaultValue="Chambre Bleue"
                className="w-full bg-transparent border-b border-[#f1e8d4]/40 py-2 text-lg font-serif italic focus:outline-none focus:border-[#d8a943]"
              />
            </div>
            <button className="col-span-2 bg-[#c25831] text-[#f1e8d4] mt-4 py-4 font-bold uppercase tracking-[0.25em] text-sm hover:bg-[#d8a943] hover:text-[#1f1410] transition">
              Confirmer · تأكيد →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-14 grid grid-cols-12 gap-6 text-[12px] leading-[1.8]">
        <div className="col-span-12 md:col-span-4">
          <p className="font-serif italic text-3xl mb-2">Riad Aïn.</p>
          <p
            dir="rtl"
            className="text-xl text-[#c25831]"
            style={{ fontFamily: "serif" }}
          >
            رياض عين
          </p>
          <p className="opacity-70 mt-2">Quatre chambres · depuis 1820</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Adresse
          </p>
          <p>18, Derb el-Ferrane</p>
          <p>Quartier Kasbah, Médina</p>
          <p>40000 Marrakech, Maroc</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Contact
          </p>
          <p>bonjour@riadain.ma</p>
          <p>+212 5 24 38 64 91</p>
          <p className="mt-2 opacity-70">
            Réception · 7 — 22 h
          </p>
        </div>
        <div className="col-span-12 md:col-span-2 md:text-right">
          <Link
            href="/lab"
            className="text-[10px] uppercase tracking-[0.25em] hover:underline underline-offset-4"
          >
            ← all demos
          </Link>
        </div>
      </footer>
    </main>
  );
}
