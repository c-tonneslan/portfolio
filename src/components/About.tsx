"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 lg:px-8 py-24 md:py-32 border-t border-white/6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-8 lg:gap-12"
        >
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] leading-[1.05] mb-6">
              How I got
              <br />
              here.
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Currently looking for software engineering work in civic tech,
              urban systems, or developer tooling.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
            <p>
              Most of what I&apos;ve learned has come from reading large
              codebases and trying to fix something small in them. The pull
              requests in the open-source section below are how I got my
              hands on Go and Rust beyond the toy-project level. It&apos;s
              also where I picked up most of what I know about race
              conditions, retries, and the shape of error handling people
              actually live with in production.
            </p>
            <p>
              The projects I build for myself tend to land near cities and
              transit.{" "}
              <span className="text-accent">civic-philly</span> joins 5,000+
              Philadelphia housing and zoning records against ACS census
              tracts and council districts.{" "}
              <span className="text-accent">septa-live</span> maps every
              SEPTA line that publishes realtime data.{" "}
              <span className="text-accent">groundwork</span> stitches 6,500+
              affordable-housing projects across six cities into one schema
              with rent-burden overlays. Developer tooling like{" "}
              <span className="text-accent">vouch</span> and{" "}
              <span className="text-accent">littledb</span> sits next to it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
