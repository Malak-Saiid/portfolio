export type SkillIcon =
  | "frontend"
  | "backend"
  | "database"
  | "code"
  | "network"
  | "tools"
  | "people";

export interface SkillCategory {
  id: string;
  title: string;
  icon: SkillIcon;
  description: string;
  skills: string[];
}

export interface ExperienceEntry {
  organization: string;
  context: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
}

export interface Certificate {
  title: string;
  provider: string;
  icon: "ai" | "network" | "routing" | "python";
}

export interface Language {
  name: string;
  proficiency: string;
}
