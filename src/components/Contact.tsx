"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="reach"
      className="px-6 md:px-12 py-32 md:py-40 border-t border-[#1a1612]/30 bg-[#1a1612] text-[#f4ede0] relative overflow-hidden"
    >
      {/* Decorative oxblood orb */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#a83232] opacity-25 blur-[80px]"
      />
      <div className="relative max-w-6xl mx-auto grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.3em] mb-5 text-[#d96e6e]"
          >
            § vii — Get in touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-5xl md:text-7xl tracking-[-0.025em] leading-[0.95]"
          >
            Looking for a role
            <br />
            <span className="text-[#d96e6e]">where code meets cities.</span>
          </motion.h2>
          <p className="font-serif italic text-lg md:text-2xl mt-8 max-w-2xl leading-[1.5] text-[#f4ede0]/85">
            If you&apos;re hiring in civic tech, urban systems, transit, or
            developer tooling, please write. I can move fast on the right kind
            of work, and I&apos;d rather work on fewer projects, more deeply.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-12 md:col-span-4 space-y-4 text-[11px] uppercase tracking-[0.25em] mt-12 md:mt-0"
        >
          <a
            href="mailto:cst0520@gmail.com"
            className="block py-4 border-y border-[#f4ede0]/30 hover:border-[#d96e6e] hover:text-[#d96e6e] transition-colors"
          >
            ↗ Email — cst0520@gmail.com
          </a>
          <a
            href="https://github.com/c-tonneslan"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-4 border-b border-[#f4ede0]/30 hover:border-[#d96e6e] hover:text-[#d96e6e] transition-colors"
          >
            ↗ GitHub — c-tonneslan
          </a>
          <a
            href="/writing"
            className="block py-4 border-b border-[#f4ede0]/30 hover:border-[#d96e6e] hover:text-[#d96e6e] transition-colors"
          >
            ↗ Writing — bug narratives
          </a>
          <a
            href="/lab"
            className="block py-4 border-b border-[#f4ede0]/30 hover:border-[#d96e6e] hover:text-[#d96e6e] transition-colors"
          >
            ↗ Lab — UI experiments
          </a>
        </motion.div>
      </div>
    </section>
  );
}
