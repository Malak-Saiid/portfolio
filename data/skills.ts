import type { SkillCategory } from "@/types/profile";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "frontend",
    description: "Thoughtful interfaces, from structure to interaction.",
    skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Responsive UI Design"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "backend",
    description: "The APIs and application logic behind the experience.",
    skills: ["Node.js", "Express.js", "RESTful API Development", "JWT Authentication"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    description: "Working with relational and document-based data.",
    skills: ["MongoDB", "MySQL", "Mongoose", "Oracle"],
  },
  {
    id: "languages",
    title: "Programming languages",
    icon: "code",
    description: "A foundation across different programming paradigms.",
    skills: ["Python", "Java", "JavaScript", "PHP", "C#", "C++"],
  },
  {
    id: "networking",
    title: "Networking",
    icon: "network",
    description: "Understanding how systems connect and communicate.",
    skills: ["CCNA 1–3 Knowledge", "Routing & Switching", "Subnetting"],
  },
  {
    id: "tools",
    title: "Tools & practices",
    icon: "tools",
    description: "A practical toolkit for building and collaborating.",
    skills: ["Git", "GitHub", "Postman", "Jira", "OOP", "Agile Development", "API Testing", "Cloud Technologies"],
  },
  {
    id: "soft-skills",
    title: "The human side of engineering",
    icon: "people",
    description: "Good software starts with clear thinking and good teamwork.",
    skills: ["Problem Solving", "Team Collaboration", "Communication"],
  },
];
