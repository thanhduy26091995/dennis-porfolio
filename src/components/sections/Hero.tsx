"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

function AvatarFallback({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--surface)] text-[var(--accent)] text-3xl font-bold font-mono rounded-full">
      {initials}
    </div>
  );
}

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <motion.p
        className="font-mono text-[var(--accent)] text-sm mb-4"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-5xl md:text-7xl font-bold text-[var(--foreground)] mb-2"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        {profile.name}.
      </motion.h1>

      <motion.h2
        className="text-4xl md:text-6xl font-bold text-[var(--foreground-muted)] mb-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
      >
        {profile.title}.
      </motion.h2>

      <motion.p
        className="max-w-xl text-[var(--foreground-muted)] leading-relaxed mb-8"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
      >
        {profile.bio}
      </motion.p>

      <motion.div
        className="flex items-center gap-4 flex-wrap"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
      >
        <a
          href="#projects"
          className="px-6 py-3 border border-[var(--accent)] text-[var(--accent)] font-mono text-sm rounded hover:bg-[var(--accent-muted)] transition-colors"
        >
          View My Work
        </a>
        <div className="flex items-center gap-4">
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

      <motion.div
        className="mt-12 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[var(--accent)] overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
      >
        {!avatarError ? (
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            onError={() => setAvatarError(true)}
          />
        ) : (
          <AvatarFallback name={profile.name} />
        )}
      </motion.div>
    </div>
  );
}
