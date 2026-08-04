export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages & UI",
    items: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "Flutter"],
  },
  {
    category: "Architecture",
    items: ["Clean Architecture", "MVVM", "System Design"],
  },
  {
    category: "Android Libraries",
    items: [
      "Coroutines",
      "Flow",
      "Hilt",
      "Retrofit",
      "Room",
      "CameraX",
      "Media3 / ExoPlayer",
      "ML Kit",
    ],
  },
  {
    category: "Backend & Integration",
    items: ["REST APIs", "GraphQL", "Firebase"],
  },
  {
    category: "Testing & Quality",
    items: [
      "Unit Testing",
      "UI Testing",
      "Performance Optimization",
      "Memory Leak Detection",
      "Security Best Practices",
    ],
  },
  {
    category: "DevOps & Release",
    items: [
      "CI/CD",
      "Fastlane",
      "GitHub Actions",
      "Azure DevOps",
      "Google Play Console",
      "App Store Connect",
    ],
  },
  {
    category: "Leadership",
    items: ["Technical Leadership", "Code Review", "Mentoring", "Agile / Scrum"],
  },
];
