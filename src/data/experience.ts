export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "Joblogic",
    role: "Engineering Team Lead — Enterprise Customer",
    period: "07/2025 — Present",
    location: "United Kingdom",
    description: [
      "Lead a team of 4 engineers across the full SDLC — planning, spec review, and delivery.",
      "Act as the primary contact point with cross-functional teams (BA, Infra, QC).",
      "Drive Enterprise customer onboarding by bridging the gap between client needs and the system.",
      "Serve as subject-matter expert and technical adviser for mobile.",
    ],
    tech: [".NET", "Vue.js", "Kotlin", "Swift", "Agile / SDLC"],
  },
  {
    company: "Joblogic",
    role: "Senior Mobile Developer",
    period: "04/2023 — 07/2025",
    location: "United Kingdom",
    description: [
      "Developed and maintained both Android and iOS apps, refactoring legacy code to a modern stack and migrating from Cordova to native Kotlin/Swift.",
      "Built new features, reviewed code from other team members, and led R&D initiatives.",
      "Defined and set up CI/CD pipelines for the mobile apps.",
      "Enhanced the mobile library distribution by migrating from local packages to Azure Artifacts.",
    ],
    tech: ["Kotlin", "Swift", "Android", "iOS", "Cordova", "CI/CD", "Azure Artifacts"],
  },
  {
    company: "Whydah",
    role: "Android Developer",
    period: "03/2022 — 04/2023",
    location: "Vietnam",
    description: [
      "Built the Raramuri running app from scratch — a fitness app that enhances the running experience by tracking Ambassadors along their journeys and running daily and weekly challenges with prizes.",
      "Integrated brand partnerships (e.g., Skechers) into reward campaigns.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Android"],
  },
  {
    company: "Applied Mesh Pte Ltd",
    role: "Middle Android Developer",
    period: "05/2019 — 03/2022",
    location: "Singapore",
    description: [
      "Built getKaki, an e-commerce app for the Singapore market, using Kotlin and Clean Architecture.",
    ],
    tech: ["Kotlin", "Clean Architecture", "Android"],
  },
  {
    company: "EdgeWorks German R&D Software Ltd.",
    role: "Junior Android Developer",
    period: "06/2018 — 04/2019",
    location: "Vietnam",
    description: [
      "Built Mobijuce, a power-bank rental app for the Hong Kong market — users scan a QR code to rent a power bank and are billed based on rental duration.",
      "Developed the Android app using Kotlin and the Model-View-Presenter (MVP) architecture.",
    ],
    tech: ["Kotlin", "MVP", "Android"],
  },
  {
    company: "HBB Solutions",
    role: "Android Developer",
    period: "11/2016 — 05/2018",
    location: "Vietnam",
    description: [
      "Built an on-demand app connecting homeowners and maids (Uber-like) — integrated Google Maps API with GPS-based search, online payment, and push notifications.",
      "Developed real-time chat with Socket.IO for a school–parent communication app.",
      "Researched emerging technologies including WebRTC (video call), RTMP (live streaming), and XMPP chat; set up the company's Android internship program.",
    ],
    tech: ["Android", "RxJava", "Firebase", "Socket.IO", "Retrofit", "Google Maps API"],
  },
];
