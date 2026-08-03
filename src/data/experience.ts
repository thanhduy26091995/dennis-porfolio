export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "Joblogic",
    role: "Software Engineer",
    period: "2023 — Present",
    description: [
      "Building and maintaining web applications for field service management.",
      "Collaborating with cross-functional teams to deliver features end-to-end.",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Previous Company",
    role: "Frontend Developer",
    period: "2021 — 2023",
    description: [
      "Developed responsive UI components and improved frontend performance.",
    ],
    tech: ["React", "JavaScript", "CSS"],
  },
];
