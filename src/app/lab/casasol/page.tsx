"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Room = {
  num: string;
  name: string;
  story: string;
  fact: string;
  rate: string;
  bg: string;
  text: string;
  wall: string;
};

const rooms: Room[] = [
  {
    num: "01",
    name: "Sala Rosa",
    story: "The pink room. Two south-facing windows. The wall at the foot of the bed is the colour Barragán used on his own house in Tacubaya.",
    fact: "33 m² · King · Tub",
    rate: "MX$ 6,400",
    bg: "bg-[#ed8b8b]",
    text: "text-[#1a1410]",
    wall: "bg-[#b35147]",
  },
  {
    num: "02",
    name: "Sala Cobalto",
    story: "Cobalt blue, taken from the indigo dyers of San Cristóbal. The kind of blue that lowers the temperature of the room in August.",
    fact: "40 m² · King · Terrace",
    rate: "MX$ 8,200",
    bg: "bg-[#3551a8]",
    text: "text-[#f0eadd]",
    wall: "bg-[#1a2a6e]",
  },
  {
    num: "03",
    name: "Sala Terracota",
    story: "Earth red, with a small interior courtyard and a fig tree that is older than the building.",
    fact: "28 m² · Queen · Courtyard",
    rate: "MX$ 5,800",
    bg: "bg-[#b35147]",
    text: "text-[#f0eadd]",
    wall: "bg-[#7d2a25]",
  },
  {
    num: "04",
    name: "Sala Ocre",
    story: "Mexican ochre, the colour of an old wall in Oaxaca after the third coat of pigment. Bath looks into the garden.",
    fact: "35 m² · Queen · Garden",
    rate: "MX$ 6,800",
    bg: "bg-[#dba74e]",
    text: "text-[#1a1410]",
    wall: "bg-[#a6772a]",
  },
  {
    num: "05",
    name: "Sala Blanca",
    story: "Lime-washed white, with a single pink wall that catches the late sun. The smallest room and the favourite of the housekeeper.",
    fact: "22 m² · Queen · No view",
    rate: "MX$ 4,400",
    bg: "bg-[#f0eadd]",
    text: "text-[#1a1410]",
    wall: "bg-[#ed8b8b]",
  },
  {
    num: "06",
    name: "Suite Sol",
    story: "Two rooms, one terrace facing the bell tower of San Bernardo. Booked first, every season. We forgive you in advance if you want it.",
    fact: "62 m² · King · Terrace · Tub",
    rate: "MX$ 14,200",
    bg: "bg-[#dba74e]",
    text: "text-[#1a1410]",
    wall: "bg-[#b35147]",
  },
];

export default function CasaSolDemo() {
  return (
    <main className="min-h-screen bg-[#f0eadd] text-[#1a1410]">
      {/* Top bar */}
      <header className="px-6 md:px-12 py-5 flex items-center justify-between text-[11px] uppercase tracking-[0.3em]">
        <Link href="/lab" className="hover:underline underline-offset-4">
          /lab
        </Link>
        <span className="hidden md:inline">
          Casa Sol · Coyoacán, CDMX · MMXXVI
        </span>
        <button className="text-[#b35147] hover:underline underline-offset-4">
          Reservar →
        </button>
      </header>

      {/* Hero: a giant pink wall */}
      <section className="relative h-[80vh] md:h-[88vh] grid grid-cols-12 overflow-hidden">
        <div className="col-span-12 md:col-span-7 relative bg-[#ed8b8b] flex flex-col justify-between p-8 md:p-14">
          {/* Cast shadow */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, transparent 35%, rgba(0,0,0,0.18) 80%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#1a1410]/80">
              ⸺ Coyoacán · Ciudad de México · seis habitaciones
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative font-serif italic text-[20vw] md:text-[14vw] leading-[0.85] tracking-[-0.03em] text-[#1a1410]"
          >
            Casa
            <br />
            Sol.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative text-base md:text-lg max-w-md leading-relaxed text-[#1a1410]"
          >
            A small hotel of six rooms, hidden behind a wall on Calle
            Francisco Sosa. Built in 1932, repainted three times by people
            who knew what they were doing.
          </motion.p>
        </div>
        <div className="hidden md:flex col-span-3 flex-col">
          <div className="flex-1 bg-[#3551a8]" />
          <div className="flex-1 bg-[#dba74e]" />
        </div>
        <div className="hidden md:block col-span-2 bg-[#b35147]" />
      </section>

      {/* A small inscription / quote */}
      <section className="px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="font-serif italic text-3xl md:text-5xl leading-[1.35] tracking-[-0.01em]"
          >
            "Para que la luz tenga un lugar donde caer,
            <br />
            primero hay que pintar la pared."
          </motion.p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.3em] opacity-70">
            For light to have a place to fall, first you paint the wall.
            <br />
            — Inscription, in the courtyard, painter unknown.
          </p>
        </div>
      </section>

      {/* The rooms — each its own colour band */}
      <section>
        <div className="px-6 md:px-12 py-10 border-y border-[#1a1410]/30">
          <div className="flex items-end justify-between">
            <h2 className="font-serif italic text-4xl md:text-6xl tracking-[-0.02em]">
              Las habitaciones.
            </h2>
            <p className="text-[11px] uppercase tracking-[0.3em] opacity-70 hidden md:block">
              Seis. Nada más.
            </p>
          </div>
        </div>

        {rooms.map((r, i) => (
          <motion.article
            key={r.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`${r.bg} ${r.text} relative`}
          >
            <div className="grid grid-cols-12 gap-6 px-6 md:px-12 py-20 md:py-28 relative">
              {/* small accent wall */}
              <div
                aria-hidden
                className={`absolute right-0 top-0 bottom-0 hidden md:block w-[15%] ${r.wall}`}
              />
              <div className="col-span-12 md:col-span-1 text-[11px] uppercase tracking-[0.3em] opacity-70">
                № {r.num}
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-serif italic text-5xl md:text-7xl tracking-[-0.025em] leading-[0.95]">
                  {r.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.3em] mt-5 opacity-80">
                  {r.fact}
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="font-serif italic text-lg md:text-2xl leading-[1.5] max-w-md">
                  {r.story}
                </p>
                <div className="mt-8 flex items-center gap-5">
                  <span className="font-mono text-2xl md:text-3xl">
                    {r.rate}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-70">
                    por noche
                  </span>
                  <button
                    className={`px-4 py-2 text-[11px] uppercase tracking-[0.25em] font-bold border-2 border-current hover:bg-current hover:text-[#f0eadd] transition`}
                  >
                    Reservar →
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* About the house */}
      <section className="px-6 md:px-12 py-32 md:py-40 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#b35147]">
            ⸺ La casa
          </p>
          <h2 className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]">
            Sobre
            <br />
            esta casa.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-[1.8]">
          <p>
            <span className="font-serif italic float-left text-7xl leading-[0.78] mr-3 mt-1 text-[#b35147]">
              L
            </span>
            a casa la construyó un médico de Coyoacán en 1932, en el terreno
            que su mujer heredó de su padre. La compramos en 2017 con la idea
            de hacer un hotel; nos llevó cuatro años entender qué clase de
            hotel.
          </p>
          <p>
            La respuesta vino al pintar. Quitamos tres capas de blanco
            institucional y debajo apareció un rosa que no esperábamos. Un
            albañil de San Pedro nos dijo cómo se lograba: cal viva, pigmento
            de cochinilla, y paciencia.
          </p>
          <p className="font-serif italic text-[#b35147]">
            Casa Sol está pintada a mano, una vez por año, por las mismas
            personas que pintaron la primera vez. Es lo único que insistimos
            en mantener igual.
          </p>
          <p className="text-sm uppercase tracking-[0.25em] opacity-70 not-italic">
            — Mariana & Sergio Hernández, dueños
          </p>
        </div>
      </section>

      {/* Booking strip */}
      <section className="bg-[#1a1410] text-[#f0eadd] px-6 md:px-12 py-20">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#dba74e]">
              ⸺ Reservar
            </p>
            <h2 className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]">
              Dos noches
              <br />
              <span className="text-[#ed8b8b]">mínimo,</span>
              <br />
              por favor.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 block">
                Llegada
              </label>
              <input
                defaultValue="Sáb. 30 de mayo"
                className="w-full bg-transparent border-b border-[#f0eadd]/40 py-2 text-lg font-serif italic focus:outline-none focus:border-[#dba74e]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 block">
                Salida
              </label>
              <input
                defaultValue="Lun. 1 de junio"
                className="w-full bg-transparent border-b border-[#f0eadd]/40 py-2 text-lg font-serif italic focus:outline-none focus:border-[#dba74e]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 block">
                Huéspedes
              </label>
              <input
                defaultValue="2 adultos"
                className="w-full bg-transparent border-b border-[#f0eadd]/40 py-2 text-lg font-serif italic focus:outline-none focus:border-[#dba74e]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1 block">
                Habitación
              </label>
              <input
                defaultValue="Sala Rosa"
                className="w-full bg-transparent border-b border-[#f0eadd]/40 py-2 text-lg font-serif italic focus:outline-none focus:border-[#dba74e]"
              />
            </div>
            <button className="col-span-2 bg-[#ed8b8b] text-[#1a1410] mt-4 py-4 font-bold uppercase tracking-[0.25em] text-sm hover:bg-[#dba74e] transition">
              Confirmar disponibilidad →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-14 grid grid-cols-12 gap-6 text-[12px] leading-[1.8]">
        <div className="col-span-12 md:col-span-4">
          <p className="font-serif italic text-3xl mb-2">Casa Sol</p>
          <p className="opacity-70">Calle Francisco Sosa 184</p>
          <p className="opacity-70">04000 Coyoacán</p>
          <p className="opacity-70">Ciudad de México</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Contacto
          </p>
          <p>hola@casasol.mx</p>
          <p>+52 55 5658 1300</p>
          <p className="mt-2 opacity-70">Recepción 8 — 22</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            Servicios
          </p>
          <p>Desayuno incluido</p>
          <p>Wi-Fi en el patio</p>
          <p>Bici a préstamo</p>
          <p>Lavandería · 24 h</p>
        </div>
        <div className="col-span-12 md:col-span-2 md:text-right">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-2 font-bold">
            ★★★★
          </p>
          <p>Boutique · 6 habitaciones</p>
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
