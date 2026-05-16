"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "Python", "Go", "Rust", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "FastAPI", "Gin", "Express", "GraphQL"],
  },
  {
    title: "Data & AI",
    skills: ["PostgreSQL", "Redis", "DuckDB", "Anthropic SDK", "Pandas"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "GitHub Actions", "AWS", "Vercel"],
  },
  {
    title: "Practices",
    skills: ["CI/CD", "Testing", "Code Review"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-12 h-1 bg-accent rounded mb-8" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-card-bg border border-card-border rounded-md text-muted hover:text-foreground hover:border-accent/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
