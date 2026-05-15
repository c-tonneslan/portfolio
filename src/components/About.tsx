"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">About</h2>
          <div className="w-12 h-1 bg-accent rounded mb-8" />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a software engineer interested in systems programming,
                real-time infrastructure, and developer tooling. I work mostly
                in TypeScript and Go, with some Python and Rust mixed in.
              </p>
              <p>
                I&apos;ve been contributing to open source projects at Tailscale
                and LiveKit, fixing real bugs in production codebases. It&apos;s
                a good way to learn how large Go projects are structured and
                actually ship something useful.
              </p>
              <p>
                Currently looking for software engineering internships or
                full-time roles.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
                  What I Work With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Python",
                    "Go",
                    "Rust",
                    "React",
                    "Next.js",
                    "Node.js",
                    "FastAPI",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "AWS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-card-bg border border-card-border rounded-md text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
                  Focus Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Developer Tooling",
                    "Systems & Storage",
                    "Interactive Web Apps",
                    "Data Analysis",
                    "Open Source",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-sm bg-card-bg border border-card-border rounded-md text-muted"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
