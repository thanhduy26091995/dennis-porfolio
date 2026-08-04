export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  links: SocialLink[];
}

export const profile: Profile = {
  name: "Dennis (Duy Bui)",
  title: "Mobile Engineer & Team Lead",
  tagline: "Building mobile apps that people actually use.",
  bio: "A mobile engineer with 8+ years shipping native Android and iOS apps, now leading an engineering team at Joblogic. I care about clean architecture, native performance, and bridging the gap between what clients need and what we build.",
  avatar: "/avatar.jpg",
  location: "Vietnam",
  email: "buivuthanhduy@gmail.com",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/thanhduy26091995",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/duy-bui-4bb54b143/",
      icon: "linkedin",
    },
    {
      label: "Medium",
      url: "https://medium.com/@thanhduy_78508",
      icon: "medium",
    },
  ],
};
