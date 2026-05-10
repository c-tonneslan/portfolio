"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <div className="w-12 h-1 bg-accent rounded mx-auto mb-6" />
          <p className="text-muted mb-10 leading-relaxed">
            I&apos;m looking for full-stack, backend, and AI/ML engineering
            roles. If you&apos;re hiring or want to collaborate on something,
            reach out.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="mailto:cst0520@gmail.com"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/c-tonneslan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#333] hover:border-[#555] rounded-lg font-medium transition-colors"
            >
              GitHub
            </a>
          </div>

          <p className="text-xs text-muted/50">
            cst0520@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
