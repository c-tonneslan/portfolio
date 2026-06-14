"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const days = [
  { date: "30/05", weekday: "Sex", title: "Abertura · The Open", venue: "Pavilhão Ciccillo Matarazzo", color: "#E8763A" },
  { date: "06/06", weekday: "Sex", title: "Tropicália, agora", venue: "Casa de Vidro", color: "#D34A4A" },
  { date: "20/06", weekday: "Sex", title: "Tipografia & Pele", venue: "MASP, Subsolo", color: "#9C3577" },
  { date: "04/07", weekday: "Sex", title: "Cartazes do Norte", venue: "Galpão Lina Bo", color: "#3B5BA5" },
  { date: "18/07", weekday: "Sex", title: "Forma · Floresta", venue: "Pinacoteca", color: "#2E8062" },
  { date: "01/08", weekday: "Sex", title: "Concretismo, refeito", venue: "Auditório Ibirapuera", color: "#E8763A" },
  { date: "15/08", weekday: "Sex", title: "Som · Imagem", venue: "Cinemateca", color: "#D34A4A" },
  { date: "24/08", weekday: "Dom", title: "Encerramento · Festa", venue: "Parque Ibirapuera (todo)", color: "#9C3577" },
];

const designers = [
  { name: "Mariana Vieira", city: "São Paulo", field: "Identidade" },
  { name: "Pedro Cabral", city: "Rio de Janeiro", field: "Editorial" },
  { name: "Sofia Lacerda", city: "Salvador", field: "Tipografia" },
  { name: "Lucas Andrade", city: "Recife", field: "Cartaz" },
  { name: "Helena Camargo", city: "Belo Horizonte", field: "Web" },
  { name: "João Bittencourt", city: "Porto Alegre", field: "Sinalização" },
  { name: "Camila Reis", city: "Curitiba", field: "Embalagem" },
  { name: "Tomás Negrão", city: "Brasília", field: "Tipografia" },
];

export default function BossaDemo() {
  return (
    <main className="min-h-screen bg-[#f3eecb] text-[#1b1410] relative overflow-hidden">
      {/* Marquee */}
      <div className="border-y-2 border-[#1b1410] bg-[#f3eecb] overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite] text-base md:text-lg font-bold tracking-tight py-3">
          {Array.from({ length: 4 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 px-6">
              {[
                "18ª BIENAL DE DESIGN",
                "★",
                "SÃO PAULO · MMXXVI",
                "★",
                "30 de maio — 24 de agosto",
                "★",
                "PAVILHÃO CICCILLO MATARAZZO",
                "★",
                "120 designers, 14 países",
                "★",
              ].map((t, i) => (
                <span key={k + "-" + i}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      {/* Top nav */}
      <nav className="px-6 md:px-12 py-5 flex items-center justify-between text-sm font-medium">
        <Link href="/lab" className="font-bold tracking-tight">
          BIENAL<span className="text-[#E8763A]">.</span>SP
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {["Programa", "Designers", "Visitas", "Sobre", "Imprensa"].map(
            (l) => (
              <a key={l} className="hover:text-[#E8763A] transition-colors">
                {l}
              </a>
            ),
          )}
        </div>
        <button className="px-4 py-2 rounded-full bg-[#1b1410] text-[#f3eecb]">
          Ingressos →
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-10 md:pt-16 pb-32 relative">
        {/* Decorative shapes */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute -top-20 -right-32 w-[420px] h-[420px] rounded-full bg-[#E8763A]"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="absolute top-40 right-40 w-[180px] h-[360px] bg-[#D34A4A]"
            style={{
              borderRadius: "50% / 50%",
              borderTopRightRadius: "60px",
            }}
          />
          {/* Niemeyer curve as svg */}
          <svg
            className="absolute -bottom-10 left-0 w-[700px] h-[260px]"
            viewBox="0 0 700 260"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.3 }}
              d="M-20,250 C 120,40  340,310  520,80 S 780,200 720,260"
              fill="none"
              stroke="#3B5BA5"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-[#2E8062] rounded-full opacity-90" />
        </div>

        <div className="relative grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] mb-6 font-bold"
            >
              ⸺ Décima oitava edição
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-[22vw] md:text-[18vw] font-bold leading-[0.78] tracking-[-0.04em]"
            >
              18<sup className="text-[12vw] md:text-[10vw] align-super">a</sup>
              <br />
              <span className="italic font-serif font-normal text-[#D34A4A]">
                Bienal,
              </span>
              <br />
              São Paulo.
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="col-span-12 md:col-span-3 self-end space-y-2 text-sm md:text-base mt-8 md:mt-0"
          >
            <p className="font-bold uppercase tracking-wider text-xs">
              MMXXVI
            </p>
            <p>30 de maio →</p>
            <p>24 de agosto</p>
            <p className="mt-4 opacity-75 text-xs">
              Pavilhão Ciccillo Matarazzo
              <br />
              Parque Ibirapuera
            </p>
          </motion.div>
        </div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative mt-10 max-w-2xl text-lg md:text-xl leading-[1.55] font-serif italic"
        >
          Doze semanas, oito sextas-feiras, cento e vinte designers. O tema
          deste ano é{" "}
          <span className="not-italic font-sans font-bold bg-[#1b1410] text-[#f3eecb] px-2">
            forma & floresta
          </span>
          {" "}— a forma que o design toma quando o lugar não esquece.
        </motion.p>
      </section>

      {/* Programme — 8 days as colored circles */}
      <section className="px-6 md:px-12 pb-32 relative">
        <div className="flex items-end justify-between mb-10 border-b-2 border-[#1b1410] pb-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">
            Programa.{" "}
            <span className="font-normal opacity-60">Oito sextas.</span>
          </h2>
          <span className="text-xs uppercase tracking-widest hidden md:block">
            ↓ rolar para baixo
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {days.map((d, i) => (
            <motion.article
              key={d.date}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group cursor-pointer"
            >
              <div
                className="aspect-square rounded-full flex flex-col items-center justify-center text-[#f3eecb] mb-4 transition-transform group-hover:scale-[1.04]"
                style={{ backgroundColor: d.color }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                  {d.weekday}
                </span>
                <span className="font-bold text-3xl md:text-4xl tracking-tight">
                  {d.date}
                </span>
              </div>
              <p className="font-bold text-base md:text-lg leading-tight">
                {d.title}
              </p>
              <p className="text-xs opacity-70 mt-1">{d.venue}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Big quote */}
      <section className="px-6 md:px-12 py-32 bg-[#1b1410] text-[#f3eecb] -mx-0 relative overflow-hidden">
        <div aria-hidden className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#E8763A] opacity-30 blur-2xl" />
        <div aria-hidden className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-[#3B5BA5] opacity-30 blur-2xl" />
        <div className="relative max-w-5xl mx-auto">
          <p className="font-serif italic text-3xl md:text-6xl leading-[1.1] tracking-tight">
            "Forma segue clima. A floresta foi a primeira designer brasileira
            e ainda é a melhor."
          </p>
          <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm uppercase tracking-[0.25em]">
              — Lucia Marques, curadora da 18ª Bienal
            </p>
            <p className="font-serif italic text-base opacity-70">
              translation: form follows climate.
              <br />
              the forest was Brazil's first designer, and is still the best.
            </p>
          </div>
        </div>
      </section>

      {/* Designers */}
      <section className="px-6 md:px-12 py-32">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] mb-3 font-bold">
              ⸺ Participantes
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-[0.95]">
              Cento e
              <br />
              <span className="italic font-serif font-normal text-[#D34A4A]">
                vinte
              </span>
              <br />
              designers.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 self-end">
            <p className="text-base md:text-lg leading-[1.7] font-serif italic max-w-xl">
              Selecionados por convite aberto, em catorze países. Abaixo, uma
              amostra do Brasil — o restante na exposição.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1b1410]/15 border-y-2 border-[#1b1410]">
          {designers.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-[#f3eecb] p-5 hover:bg-[#1b1410] hover:text-[#f3eecb] transition-colors cursor-pointer group"
            >
              <p className="font-mono text-[10px] uppercase opacity-60 group-hover:opacity-80">
                Nº {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-bold text-lg md:text-xl tracking-tight mt-1">
                {d.name}
              </p>
              <p className="text-xs mt-1 opacity-75">
                {d.city} · {d.field}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tickets */}
      <section className="px-6 md:px-12 py-32 bg-[#E8763A] text-[#1b1410] relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#D34A4A]" />
        <div aria-hidden className="absolute top-10 left-20 w-32 h-32 rounded-full bg-[#3B5BA5] opacity-80" />
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] mb-3 font-bold">
              ⸺ Ingressos
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.025em] leading-[0.95]">
              Entrada
              <br />
              <span className="italic font-serif font-normal">livre,</span>
              <br />
              todas as sextas.
            </h2>
            <p className="font-serif italic text-lg mt-6 max-w-md">
              Workshops e visitas guiadas exigem inscrição, mas a Bienal é
              gratuita. Sempre foi, e seguirá sendo.
            </p>
          </div>
          <div className="self-end space-y-3 text-base">
            <button className="block w-full text-left px-5 py-4 rounded-2xl bg-[#1b1410] text-[#f3eecb] font-bold hover:bg-black transition">
              Inscrever-se em workshop →
            </button>
            <button className="block w-full text-left px-5 py-4 rounded-2xl border-2 border-[#1b1410] hover:bg-[#1b1410] hover:text-[#f3eecb] transition">
              Visita guiada · grátis →
            </button>
            <button className="block w-full text-left px-5 py-4 rounded-2xl bg-[#f3eecb] border border-[#1b1410]">
              Apoio escolar · grupos
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-14 text-sm grid md:grid-cols-4 gap-6">
        <div className="md:col-span-2">
          <p className="text-2xl font-bold tracking-tight mb-2">
            BIENAL<span className="text-[#E8763A]">.</span>SP
          </p>
          <p className="opacity-70 max-w-xs leading-relaxed">
            18ª Bienal de Design de São Paulo. Realizada com apoio do MinC e
            da Prefeitura de São Paulo. Curadoria por Lucia Marques.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest mb-2 font-bold">
            Localização
          </p>
          <p>Pavilhão Ciccillo Matarazzo</p>
          <p>Parque Ibirapuera, Portão 3</p>
          <p>04094-000 · São Paulo, SP</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest mb-2 font-bold">
            Horários
          </p>
          <p>Ter — Dom · 10h às 21h</p>
          <p>Segundas fechado</p>
          <p className="mt-4 text-[10px] uppercase tracking-widest">
            ★{" "}
            <Link href="/lab" className="hover:underline underline-offset-4">
              voltar para /lab
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
