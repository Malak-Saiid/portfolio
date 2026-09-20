import type { ExperienceEntry } from "@/types/profile";

// The CV does not specify a job title. Keep this context separate from a formal role.
export const experiences: ExperienceEntry[] = [
  {
    organization: "Norwegian Refugee Council",
    context: "Information management & digital tools",
    location: "Halba, Lebanon",
    startDate: "October 2023",
    endDate: "Present",
    responsibilities: [
      "Managed legal documents and case information in Microsoft Dynamics with accuracy and confidentiality.",
      "Coordinated with ICLA Officers, lawyers, and field teams to ensure clear information flow and effective follow-up.",
      "Supported reporting, documentation, and data quality by identifying gaps and resolving missing information.",
    ],
    skills: ["Information Management", "Microsoft Dynamics", "Data Quality", "Documentation", "Team Coordination"],
  },
];
