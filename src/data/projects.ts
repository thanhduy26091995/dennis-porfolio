export type ProjectStatus = "active" | "completed" | "archived";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  status: ProjectStatus;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Dennis Portfolio",
    description: "Personal portfolio website built with Next.js 15 and TailwindCSS.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    liveUrl: "https://dennisbui.dev",
    repoUrl: "https://github.com/thanhduy26091995/dennis-porfolio",
    status: "active",
    featured: true,
  },
  {
    name: "Crypto Trading App — Zyncas",
    description:
      "Android app delivering crypto trading signals, real-time market tracking, and portfolio management for traders.",
    tech: ["Kotlin", "Android"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.zyncas.signals",
    status: "active",
    featured: true,
  },
  {
    name: "FC26 Tracker",
    description:
      "Web app to track internal company FC/FIFA gaming — match scores, prize funds, player profiles, and internal tournaments.",
    tech: ["Vue.js", "Go", "PostgreSQL"],
    liveUrl: "https://fifa.sitenow.cloud/",
    status: "active",
    featured: false,
  },
  {
    name: "Wedding Wishes — Digital Guestbook",
    description:
      "QR-code-based digital guestbook for weddings. Guests scan a code, take a selfie, write a message, and download a branded photo-booth keepsake. Go monolith serving API + React SPA, shipped as a single binary on a VPS behind Caddy.",
    tech: ["Go", "React", "TypeScript", "Caddy", "VPS"],
    liveUrl: "https://wishes.dennisbui.dev/",
    status: "active",
    featured: true,
  },
];
