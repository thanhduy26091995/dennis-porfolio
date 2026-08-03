export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Nginx", "Linux", "GitHub Actions"],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman"],
  },
];
