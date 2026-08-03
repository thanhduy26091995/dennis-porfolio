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
    repoUrl: "https://github.com/dennisbui/portfolio",
    status: "active",
    featured: true,
  },
  {
    name: "Project Alpha",
    description: "A placeholder for an upcoming project.",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "completed",
    featured: false,
  },
];
