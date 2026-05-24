"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#note", label: "i. note", section: "i." },
  { href: "/#work", label: "ii. work", section: "ii." },
  { href: "/#contributions", label: "iii. contributions", section: "iii." },
  { href: "/writing", label: "iv. writing", section: "iv." },
  { href: "/notes", label: "v. notes", section: "v." },
  { href: "/lab", label: "vi. lab", section: "vi." },
  { href: "/#reach", label: "vii. reach", section: "vii." },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f4ede0]/85 backdrop-blur-md border-b border-[#1a1612]/15"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between text-[11px] uppercase tracking-[0.28em]">
          <a
            href="/"
            className="flex items-baseline gap-2 hover:text-[#a83232] transition-colors"
          >
            <span className="text-[#a83232]">✦</span>
            <span>Charlie Tonneslan</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6b5e54] hover:text-[#1a1612] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-[#1a1612] transition-all ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-[#1a1612] transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-[#1a1612] transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#f4ede0] md:hidden"
          >
            <div className="flex flex-col items-start justify-center h-full px-10 gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl tracking-[-0.015em] font-serif italic hover:text-[#a83232] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/c-tonneslan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-base uppercase tracking-[0.28em] mt-8 text-[#6b5e54] hover:text-[#1a1612] transition-colors"
              >
                github.com/c-tonneslan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
