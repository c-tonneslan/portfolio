"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="note"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/30"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] mb-3 text-[#a83232]">
            § i — A short note
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-4xl md:text-5xl tracking-[-0.02em] leading-[1]"
          >
            On the
            <br />
            way I work.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="col-span-12 md:col-span-8 md:col-start-5 space-y-7 text-base md:text-lg leading-[1.85]"
        >
          <p>
            <span className="font-serif italic float-left text-[5.5rem] md:text-[7rem] leading-[0.78] mr-3 mt-1 text-[#a83232]">
              M
            </span>
            ost of what I&apos;ve learned has come from reading large
            codebases and trying to fix something small in them. The pull
            requests in section iii are how I got my hands on Go and Rust
            beyond the toy-project level. It&apos;s also where I picked up
            most of what I know about race conditions, retries, and the shape
            of error handling people actually live with in production.
          </p>
          <p>
            The projects I build for myself tend to land near cities and
            transit.{" "}
            <span className="text-[#a83232] font-medium">civic-philly</span>{" "}
            is 5,000+ Philadelphia housing and zoning records joined against
            census tracts and council districts.{" "}
            <span className="text-[#a83232] font-medium">septa-live</span> is
            a live map of every SEPTA line that publishes realtime data.{" "}
            <span className="text-[#a83232] font-medium">groundwork</span>{" "}
            stitches 6,500+ affordable-housing projects across six cities
            into one schema with rent-burden overlays. The civic stuff sits
            next to developer tooling like{" "}
            <span className="text-[#a83232] font-medium">vouch</span> (a Go
            CLI for catching AI-code failure modes) and{" "}
            <span className="text-[#a83232] font-medium">littledb</span> (a
            1,500-line embedded KV store with a copy-on-write B+tree).
          </p>
          <p className="font-serif italic text-xl md:text-2xl leading-[1.55] text-[#6b5e54] border-l-2 border-[#a83232] pl-5 my-10">
            What I&apos;m looking for: software engineering work where code
            meets cities — housing, transit, planning, civil infrastructure,
            and the policy underneath. Developer tooling is a close second.
          </p>
          <p className="text-sm uppercase tracking-[0.25em] text-[#6b5e54] not-italic">
            — Charlie · Philadelphia · open for work
          </p>
        </motion.div>
      </div>
    </section>
  );
}
