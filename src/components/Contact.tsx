"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 lg:px-8 py-24 md:py-32 border-t border-white/6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/10 bg-card-bg p-10 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#6bd1ff] opacity-20 blur-[120px]" />
            <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full bg-[#7c5fff] opacity-20 blur-[120px]" />
          </div>

          <div className="relative">
            <p className="text-xs uppercase tracking-widest text-accent mb-5">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1] max-w-3xl mx-auto">
              Looking for a role.
              <br />
              <span className="text-muted">Open to whatever you&apos;re building.</span>
            </h2>
            <p className="mt-7 text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Civic, transit, and developer tooling are where I&apos;ve been
              spending time, but I&apos;d love to hear about anything you&apos;re
              working on. Eager to learn, and to find a team where I can ship
              the kind of work I&apos;d be proud of.
            </p>

            <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
              <a
                href="mailto:cst0520@gmail.com"
                className="px-5 py-2.5 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition"
              >
                cst0520@gmail.com →
              </a>
              <a
                href="https://github.com/charlestonneslan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white/8 border border-white/12 backdrop-blur text-sm hover:bg-white/12 transition"
              >
                github.com/charlestonneslan
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
