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
];
