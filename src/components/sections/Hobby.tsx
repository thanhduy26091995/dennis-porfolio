"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const hobbies = [
  { emoji: "☕", label: "Coffee", description: "Fueled by good espresso" },
  { emoji: "🎮", label: "Gaming", description: "FC / FIFA with the team" },
  { emoji: "⚽", label: "Sport", description: "Staying active off-screen" },
];

export default function Hobby() {
  return (
    <div className="mt-16">
      <SectionTitle number="06" title="A Bit More About Me" />
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {hobbies.map((hobby) => (
          <div
            key={hobby.label}
            className="p-4 rounded border border-[var(--border)] bg-[var(--accent-muted)] hover:border-[var(--accent)] transition-colors"
          >
            <span className="text-2xl">{hobby.emoji}</span>
            <p className="mt-2 font-semibold text-[var(--foreground)] text-sm">
              {hobby.label}
            </p>
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              {hobby.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
