export interface TechItem {
  name: string;
  category: "language" | "framework" | "infra" | "ai" | "db";
}

export const techStack: TechItem[] = [
  { name: "TypeScript", category: "language" },
  { name: "Java", category: "language" },
  { name: "Python", category: "language" },
  { name: "Kotlin", category: "language" },
  { name: "Dart", category: "language" },
  { name: "React", category: "framework" },
  { name: "Astro", category: "framework" },
  { name: "Flutter", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Laravel", category: "framework" },
  { name: "Docker", category: "infra" },
  { name: "Google Cloud", category: "infra" },
  { name: "Windows Server", category: "infra" },
  { name: "Ubuntu Server", category: "infra" },
  { name: "MongoDB Atlas", category: "db" },
  { name: "Oracle SQL", category: "db" },
  { name: "MySQL", category: "db" },
  { name: "YOLO", category: "ai" },
  { name: "MoveNet", category: "ai" },
  { name: "Mapbox v11", category: "framework" },
];

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  whatsapp: string;
}

export const personalInfo: PersonalInfo = {
  name: "Angel Daniel Meneses Castilleja",
  role: "Full-stack IT Engineer",
  email: "meneses.daniel.personal@gmail.com",
  phone: "729-759-858",
  github: "https://github.com/ADanicode",
  linkedin: "https://linkedin.com/in/a-d-m-c",
  location: "Pachuca, Hgo., México",
  whatsapp: "https://wa.me/52729759858",
};
