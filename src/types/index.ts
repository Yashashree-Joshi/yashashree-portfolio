export type Project = {
  id: string;
  title: string;
  category: "AI" | "Research" | "Systems" | "Web";
  description: string;
  techStack: string[];
  status: "Completed" | "In Progress" | "Archived";
  github?: string;
  demo?: string;
  images: string[];
  futureImprovements?: string;
  problemStatement?: string;
  architecture?: string;
  features: string[];
  challenges?: string;
  learnings?: string;
};

export type Research = {
  id: string;
  title: string;
  conference: string;
  abstract: string;
  poster?: string;
  github?: string;
  pdfUrl?: string;
  presentation?: string;
  architectureImage?: string;
};

export type Achievement = {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon?: string;
};
