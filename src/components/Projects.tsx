"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type CategoryKey = keyof typeof categories;

export default function Projects() {
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-12 h-1 bg-accent rounded mb-4" />
          <p className="text-muted mb-8 max-w-xl">
            Each project is deployed, documented, and tested. Click through to
            see the code, architecture decisions, and live demos.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {(Object.keys(categories) as CategoryKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-4 py-2 text-sm rounded-lg transition-all ${
                  active === key
                    ? "bg-accent text-white"
                    : "bg-card-bg border border-card-border text-muted hover:text-foreground"
                }`}
              >
                {categories[key]}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
