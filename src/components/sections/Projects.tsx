"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle number="04" title="Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex flex-col p-6 rounded border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-[var(--accent)] text-2xl">⬡</span>
              <div className="flex gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors font-mono text-xs"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors font-mono text-xs"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed flex-1 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-[var(--foreground-muted)]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
