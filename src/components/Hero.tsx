"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center px-6 pt-28 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto w-full"
      >
        <p className="text-sm text-muted mb-6 font-mono">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 align-middle animate-pulse-soft" />
          available for work
        </p>

        <div className="space-y-5 text-muted leading-relaxed text-base md:text-lg max-w-2xl">
          <p>
            <span className="text-foreground">I&apos;m Charlie</span>, a
            software engineer. The work I keep coming back to is civic and
            urban: housing, zoning, transit, civil infrastructure, and the
            policy that shapes them. Plenty of backend and developer tooling on
            the side, mostly Go.
          </p>
          <p>
            Lately I&apos;ve been shipping bug fixes into{" "}
            <span className="text-foreground">jackc/pgx</span>,{" "}
            <span className="text-foreground">nats.go</span>,{" "}
            <span className="text-foreground">wails</span>,{" "}
            <span className="text-foreground">urfave/cli</span>, and{" "}
            <span className="text-foreground">colly</span>, plus other Go,
            Rust, and Python projects.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-10 text-sm">
          <a
            href="#opensource"
            className="text-foreground border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
          >
            open source
          </a>
          <a
            href="#projects"
            className="text-foreground border-b border-foreground/40 hover:border-foreground transition-colors pb-0.5"
          >
            projects
          </a>
          <a
            href="mailto:cst0520@gmail.com"
            className="text-muted hover:text-foreground transition-colors"
          >
            cst0520@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
