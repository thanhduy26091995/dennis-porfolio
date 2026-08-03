"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle number="02" title="Skills" />
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
          >
            <h3 className="font-mono text-[var(--accent)] text-sm mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
