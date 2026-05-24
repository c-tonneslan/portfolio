"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function MinimalDemo() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-zinc-900 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase mb-2">
          /lab / minimal
        </p>

        <motion.header {...fade(0)} className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-10">
            ESSAY · 04
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-[1.05] tracking-tight">
            On the
            <br />
            quiet web.
          </h1>
          <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-widest text-zinc-500">
            <span>By Mira Patel</span>
            <span className="w-px h-3 bg-zinc-300" />
            <span>May 24, 2026</span>
            <span className="w-px h-3 bg-zinc-300" />
            <span>9 min read</span>
          </div>
        </motion.header>

        <motion.figure {...fade(0.1)} className="mb-20">
          <div className="aspect-[4/3] w-full bg-gradient-to-br from-zinc-200 to-zinc-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.05),transparent_60%)]" />
            <div className="absolute bottom-12 left-12 w-24 h-24 rounded-full bg-zinc-100 mix-blend-overlay" />
            <div className="absolute top-1/3 right-1/4 w-44 h-44 rounded-full border border-zinc-400/40" />
          </div>
          <figcaption className="text-xs text-zinc-500 mt-3 italic">
            Untitled, 2026. Pigment on linen, 80 × 60 cm.
          </figcaption>
        </motion.figure>

        <motion.div
          {...fade(0.15)}
          className="space-y-8 text-[17px] leading-[1.85] text-zinc-800"
        >
          <p className="first-letter:font-serif first-letter:italic first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
            The loudest websites used to be the most successful ones. Confetti
            on confetti, every CTA pulsing, six modals competing for the same
            three seconds of attention. That era is ending, and the thing
            replacing it is not a counter-trend. It is just good design,
            finally allowed to breathe.
          </p>

          <p>
            What I mean by "quiet" is not minimalism, exactly. Minimalism
            implies subtraction, and a lot of what's coming back is not the
            absence of detail but the absence of{" "}
            <span className="italic">urgency</span>. Pages that don't need to
            shout. Pages that trust you to read them.
          </p>

          <h2 className="font-serif italic text-3xl mt-16 mb-4 tracking-tight">
            The serif comeback was inevitable.
          </h2>

          <p>
            For ten years almost every product page was set in a grotesque sans
            — Inter, Geist, GT, Söhne. Type designers warned us the well was
            getting shallow. Now the most-bookmarked sites of the year are
            mixing serif headlines into sans bodies, italics doing the
            emotional work that bold weights used to. It reads like a magazine.
            That is on purpose.
          </p>

          <blockquote className="border-l-2 border-zinc-900 pl-6 my-12 font-serif italic text-2xl leading-relaxed text-zinc-900">
            "A page that respects the reader is louder than one that grabs
            them."
          </blockquote>

          <p>
            The interesting question isn't whether to follow the trend. It's
            what to do with the freedom it grants. A quieter page can carry a
            longer argument. It can ask the visitor to slow down. The teams
            doing this well are also the ones writing better copy, because
            they've stopped using motion to paper over weak ideas.
          </p>

          <h2 className="font-serif italic text-3xl mt-16 mb-4 tracking-tight">
            Three sites worth studying.
          </h2>

          <ol className="space-y-4 pl-6 list-decimal marker:text-zinc-400 marker:font-serif marker:italic">
            <li>
              <span className="font-medium">seesaw.website</span> — the new
              standard for studio sites. One column. Serif headlines. Project
              pages that look like spreads.
            </li>
            <li>
              <span className="font-medium">cosmos.so</span> — proof that you
              can build a social product without a single drop shadow.
            </li>
            <li>
              <span className="font-medium">arcadia.studio</span> — the
              calmest portfolio I've seen all year. Three case studies, each
              told end to end, no carousel.
            </li>
          </ol>

          <p>
            None of these sites would have been notable five years ago. They'd
            have read as undersold. What changed is the baseline. Once
            everything was loud, quiet became a signal.
          </p>
        </motion.div>

        <motion.div
          {...fade(0.25)}
          className="mt-24 pt-12 border-t border-zinc-300"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Continue
          </p>
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-2xl font-serif italic hover:text-zinc-600 transition-colors"
          >
            All demos
            <span className="text-base">→</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
