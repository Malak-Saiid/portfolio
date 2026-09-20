export type ProjectPreviewKind = "humanitarian" | "booking" | "commerce";

export interface Project {
  id: string;
  name: string;
  category: string;
  period: string;
  description: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string | null;
  imageAlt: string;
  previewKind: ProjectPreviewKind;
}
