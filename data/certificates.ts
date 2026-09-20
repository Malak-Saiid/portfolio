import type { Certificate, Language } from "@/types/profile";

export const certificates: Certificate[] = [
  { title: "AI Training Hackathon", provider: "KANZ AI", icon: "ai" },
  { title: "CCNA: Introduction to Networks", provider: "Cisco Networking Academy", icon: "network" },
  { title: "CCNAv7: Switching, Routing, and Wireless Essentials", provider: "Cisco Networking Academy", icon: "routing" },
  { title: "Crash Course on Python", provider: "Google / Coursera", icon: "python" },
];

export const languages: Language[] = [
  { name: "Arabic", proficiency: "Native" },
  { name: "English", proficiency: "Fluent" },
  { name: "French", proficiency: "Intermediate" },
];
