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
  title: "Software Engineer",
  tagline: "Building things for the web.",
  bio: "A software engineer passionate about crafting clean, performant web experiences. I enjoy working across the stack and sharing what I learn along the way.",
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
