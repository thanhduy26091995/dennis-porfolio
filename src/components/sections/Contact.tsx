"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle number="06" title="Get In Touch" />
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">
          I&apos;m currently open to new opportunities. Whether you have a
          question, a project idea, or just want to say hi — my inbox is always
          open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block px-8 py-4 border border-[var(--accent)] text-[var(--accent)] font-mono text-sm rounded hover:bg-[var(--accent-muted)] transition-colors mb-12"
        >
          Say Hello ↗
        </a>
        <div className="flex items-center justify-center gap-8">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
