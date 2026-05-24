"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const toc = [
  { num: "i", title: "Carta del editor", sub: "Editor's letter", author: "Octavio Lemos", page: "03" },
  { num: "ii", title: "Sobre el insomnio", sub: "On insomnia", author: "Renata Bisi", page: "08", featured: true },
  { num: "iii", title: "Cinco poemas", sub: "Five poems", author: "Vicente Aldao", page: "21" },
  { num: "iv", title: "La ciudad inventada", sub: "The invented city", author: "Sara Petrocelli", page: "28" },
  { num: "v", title: "Entrevista — Pedro Lemebel, sin venda", sub: "Interview — Lemebel, unguarded", author: "—", page: "44" },
  { num: "vi", title: "Notas sobre Borges en su biblioteca", sub: "Notes on Borges, in his library", author: "Adriana Mansilla", page: "61" },
  { num: "vii", title: "Crónica · una noche en San Telmo", sub: "Chronicle · a night in San Telmo", author: "Tomás Greco", page: "78" },
  { num: "viii", title: "Reseñas", sub: "Reviews", author: "—", page: "92" },
  { num: "ix", title: "Colofón", sub: "Colophon", author: "—", page: "108" },
];

export default function BuenosDemo() {
  return (
    <main className="min-h-screen bg-[#f2ecd8] text-[#19234a] relative">
      {/* Vertical strip, left */}
      <div
        aria-hidden
        className="fixed left-4 top-0 bottom-0 hidden md:flex items-center justify-center text-[10px] uppercase tracking-[0.4em] opacity-70"
      >
        <span style={{ writingMode: "vertical-rl" }}>
          BANDONEÓN · BUENOS AIRES · OTOÑO MMXXVI
        </span>
      </div>

      {/* Top meta */}
      <header className="border-b-2 border-[#19234a] px-6 md:px-16 py-5 flex items-center justify-between text-[11px] uppercase tracking-[0.25em]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#c1273a] rounded-full" />
          <span>Revista trimestral, Año IV</span>
        </div>
        <span className="hidden md:inline">Mayo / Junio / Julio 2026</span>
        <Link href="/lab" className="hover:underline underline-offset-4">
          /lab
        </Link>
      </header>

      {/* Cover */}
      <section className="px-6 md:px-16 pt-16 md:pt-24 pb-32 grid grid-cols-12 gap-6 relative">
        {/* Yellow square decoration */}
        <div
          aria-hidden
          className="absolute right-6 md:right-20 top-16 w-44 h-44 md:w-72 md:h-72 bg-[#f5c344]"
        />
        <div
          aria-hidden
          className="absolute right-12 md:right-32 top-24 w-44 h-44 md:w-72 md:h-72 border-2 border-[#19234a]"
        />

        <div className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.22em] space-y-2 relative">
          <p>№ 14</p>
          <p>Otoño · Autumn</p>
          <p>2026</p>
          <p className="mt-6">$ 4800 ARS</p>
          <p className="opacity-60">USD 6.50 · €6.00</p>
        </div>

        <div className="col-span-12 md:col-span-9 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif italic text-[18vw] md:text-[12vw] leading-[0.82] tracking-[-0.03em]"
          >
            Bandoneón.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-xs md:text-sm uppercase tracking-[0.3em]"
          >
            ⸺ Una revista de Buenos Aires sobre literatura, ciudad, e insomnio
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 md:mt-16 max-w-2xl"
          >
            <p className="font-serif italic text-2xl md:text-3xl leading-[1.45] tracking-[-0.005em]">
              "Una ciudad no se mide en cuadras sino en los amigos que aún no
              te han contado lo que les pasó esa noche."
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] opacity-70">
              — Renata Bisi, en Sobre el insomnio, pág. 8
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editor's letter block */}
      <section className="border-y-2 border-[#19234a] bg-[#19234a] text-[#f2ecd8] px-6 md:px-16 py-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.25em] opacity-70">
            <p>Carta del editor</p>
            <p className="mt-1">Editor's letter</p>
            <p className="mt-4">Octavio Lemos</p>
            <p className="opacity-60">director</p>
          </div>
          <div className="col-span-12 md:col-span-8 text-base md:text-lg leading-[1.85] font-serif italic">
            <p>
              <span className="not-italic font-sans float-left text-7xl font-bold leading-[0.78] mr-2 mt-1 text-[#f5c344]">
                E
              </span>
              ste número apareció en el otoño que no llegaba. Mayo, en Buenos
              Aires, debería oler a hojas en Avenida Alvear, pero esta vez
              olió a tormenta postergada — cada mañana el cielo prometía algo
              y no cumplía.
            </p>
            <p className="mt-5">
              Lo que sigue es un número sobre lo postergado. Tres ensayos y
              una entrevista sobre cosas que ocurren tarde, y siempre, en
              Buenos Aires, ocurren más tarde de lo que uno cree.
            </p>
            <p className="mt-5 not-italic font-sans text-sm uppercase tracking-[0.3em] opacity-70">
              — Octavio L., calle Defensa, 21 de mayo
            </p>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="px-6 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 mb-10 items-end border-b-2 border-[#19234a] pb-3">
          <h2 className="col-span-12 md:col-span-9 font-serif italic text-4xl md:text-6xl tracking-[-0.02em]">
            Sumario.
          </h2>
          <p className="col-span-12 md:col-span-3 md:text-right text-[11px] uppercase tracking-[0.25em] opacity-70">
            Nueve piezas, 116 páginas.
          </p>
        </div>
        <ul>
          {toc.map((t, i) => (
            <motion.li
              key={t.num}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`grid grid-cols-12 gap-3 border-b border-[#19234a]/30 py-5 items-baseline hover:bg-[#19234a] hover:text-[#f2ecd8] transition-colors cursor-pointer group ${
                t.featured ? "bg-[#f5c344]/30" : ""
              }`}
            >
              <span className="col-span-1 font-mono text-xs opacity-60 group-hover:opacity-80">
                {t.num}
              </span>
              <div className="col-span-7">
                <p className="font-serif italic text-xl md:text-2xl tracking-tight">
                  {t.title}
                </p>
                <p className="text-xs mt-0.5 opacity-65 group-hover:opacity-80">
                  {t.sub}
                </p>
              </div>
              <span className="col-span-3 text-xs md:text-sm uppercase tracking-[0.18em] opacity-80">
                {t.author}
              </span>
              <span className="col-span-1 text-right font-mono text-sm">
                p. {t.page}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Featured excerpt — Sobre el insomnio */}
      <section className="px-6 md:px-16 py-24 md:py-32 grid grid-cols-12 gap-6 bg-[#f2ecd8]">
        <aside className="col-span-12 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-2 text-[#c1273a]">
            ⸺ Adelanto · ii
          </p>
          <p className="font-serif italic text-2xl mb-3">Sobre el insomnio</p>
          <p className="text-xs opacity-70">Renata Bisi</p>
          <p className="text-xs opacity-50 mt-1">8 páginas · ensayo</p>
          <p className="text-xs uppercase tracking-[0.22em] mt-6 opacity-70">
            Una noche, una calle, un edificio.
          </p>
        </aside>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-lg md:text-xl leading-[1.85] space-y-6"
          >
            <p>
              <span className="not-italic font-sans float-left text-[7rem] leading-[0.78] mr-3 mt-1 text-[#c1273a] font-bold">
                D
              </span>
              ormir, en esta ciudad, es una decisión política. A las tres de
              la mañana, las luces de Defensa todavía contestan a las luces
              de Bolívar, y los gatos no son tampoco gatos sino versiones
              tristes de gatos.
            </p>
            <p>
              <span className="italic">
                Lo que uno hace despierto a esa hora es escribir cartas que no
                manda.
              </span>{" "}
              Yo escribí siete entre el martes y el sábado, y dejé seis sobre
              la mesa de la cocina, debajo de un cuenco de cerámica que me
              regaló mi madrina en 1996. La séptima la rompí en cuatro
              pedazos y la enterré en una maceta.
            </p>
            <p>
              No dormir es estar en compañía de uno mismo, sin testigos.
              Borges lo entendía y por eso vivía en biblioteca, donde estar
              despierto no era un acto solitario sino una conversación con
              los muertos que se quedaron, también, sin dormir.
            </p>
            <p className="text-sm uppercase tracking-[0.22em] not-italic font-sans opacity-70">
              ⸺ Continúa en p. 8
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto / large block */}
      <section className="px-6 md:px-16 py-32 bg-[#c1273a] text-[#f2ecd8] relative">
        <p className="text-[11px] uppercase tracking-[0.3em] mb-6 opacity-80">
          ⸺ Nuestro proyecto, en una frase
        </p>
        <p className="font-serif italic text-3xl md:text-6xl leading-[1.15] tracking-[-0.015em] max-w-5xl">
          Hacemos una revista en español, impresa en papel,{" "}
          <span className="bg-[#f5c344] text-[#19234a] px-2 not-italic font-sans font-bold">
            sin urgencia
          </span>{" "}
          y sin agencia.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="font-mono text-3xl md:text-4xl mb-1">52</p>
            <p className="text-xs uppercase tracking-[0.25em] opacity-80">
              Números desde 2021
            </p>
          </div>
          <div>
            <p className="font-mono text-3xl md:text-4xl mb-1">4×</p>
            <p className="text-xs uppercase tracking-[0.25em] opacity-80">
              Veces al año
            </p>
          </div>
          <div>
            <p className="font-mono text-3xl md:text-4xl mb-1">0</p>
            <p className="text-xs uppercase tracking-[0.25em] opacity-80">
              Anuncios, jamás
            </p>
          </div>
          <div>
            <p className="font-mono text-3xl md:text-4xl mb-1">3 200</p>
            <p className="text-xs uppercase tracking-[0.25em] opacity-80">
              Suscriptores
            </p>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="px-6 md:px-16 py-24 md:py-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3">
            ⸺ Suscripción
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]">
            Cuatro
            <br />
            números,
            <br />
            por correo.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 grid sm:grid-cols-2 gap-4">
          <div className="border-2 border-[#19234a] p-5">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-2">
              Argentina
            </p>
            <p className="font-mono text-3xl">$ 14 400</p>
            <p className="text-xs mt-1 opacity-70">por año · cuatro números</p>
            <p className="text-xs mt-3 font-serif italic">
              Envío incluido a CABA, GBA y resto del país.
            </p>
          </div>
          <div className="bg-[#19234a] text-[#f2ecd8] p-5">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-2">
              Internacional
            </p>
            <p className="font-mono text-3xl">USD 92</p>
            <p className="text-xs mt-1 opacity-70">por año · cuatro números</p>
            <p className="text-xs mt-3 font-serif italic">
              Envío por correo aéreo. 14 días, más o menos.
            </p>
          </div>
          <button className="sm:col-span-2 bg-[#f5c344] text-[#19234a] px-5 py-4 font-bold uppercase tracking-[0.25em] text-sm">
            Suscribirme →
          </button>
        </div>
      </section>

      {/* Masthead */}
      <footer className="px-6 md:px-16 py-16 border-t-2 border-[#19234a] grid grid-cols-12 gap-6 text-[12px] leading-[1.8]">
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-3">
            Dirección
          </p>
          <p>Octavio Lemos · director</p>
          <p>Renata Bisi · editora</p>
          <p>Vicente Aldao · poesía</p>
          <p>Sara Petrocelli · crónica</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-3">
            Diseño
          </p>
          <p>Estudio Antártica</p>
          <p className="opacity-70">composición, impresión</p>
          <p className="mt-2 font-serif italic opacity-80">
            Sobre el papel de Massuh. Sobre la tipografía de Tipos Latinos.
          </p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-3">
            Domicilio
          </p>
          <p>Defensa 856, 3º "B"</p>
          <p>1065 — San Telmo</p>
          <p>Buenos Aires, Argentina</p>
          <p className="mt-2 opacity-70">correo@bandoneon.rev</p>
        </div>
        <div className="col-span-6 md:col-span-3 md:text-right">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-3">
            Próximo número
          </p>
          <p>Invierno · Winter</p>
          <p>Agosto 2026</p>
          <p className="mt-2 font-serif italic">Sobre el frío y la deuda.</p>
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
