"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle number="03" title="Experience" />
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />
        <div className="flex flex-col gap-12 pl-8">
          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-[var(--accent)] border-2 border-[var(--background)]" />
              <p className="font-mono text-xs text-[var(--accent)] mb-1">
                {job.period}
              </p>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {job.role}{" "}
                <span className="text-[var(--accent)]">@ {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-2">
                {job.description.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-[var(--foreground-muted)] flex gap-2"
                  >
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tech.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
