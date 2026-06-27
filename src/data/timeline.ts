export interface TimelineEntry {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
  color: string;
  // Globe position: angle in degrees (0-360 longitude-like, maps to horizontal position on globe SVG)
  angle: number;
  // Tilt: vertical position on globe (-1 to 1, -1=top, 1=bottom)
  tilt: number;
}

export const timeline: TimelineEntry[] = [
  {
    id: "t1",
    title: " Curiosity Begins",
    date: "Mini KG – 2022",
    description:
      "A simple computer lesson in middle school sparked my curiosity about technology. Without a personal laptop during the lockdown years, most of my exploration happened in the school computer lab. Limited access only made me more eager to learn.",
    icon: "",
    color: "#468A9A",
    angle: 30,
    tilt: -0.6,
  },

  {
    id: "t2",
    title: " Learning to Build",
    date: "2022",
    description:
      "I chose MIT-WPU's Integrated B.Tech program because I wanted to start engineering early, focus on practical learning, and build real software instead of spending years preparing for entrance exams. Learning C and creating my first number guessing game showed me that programming was a way to create.",
    icon: "",
    color: "#EEEEEE",
    angle: 80,
    tilt: -0.3,
  },

  {
    id: "t3",
    title: " Engineering Foundations",
    date: "2022 – Present",
    description:
      "Studying AI & Data Science introduced me to software engineering, algorithms, machine learning, and system design. Beyond academics, I challenged myself to build projects that went far beyond classroom requirements.",
    icon: "",
    color: "#468A9A",
    angle: 150,
    tilt: 0.1,
  },

  {
    id: "t4",
    title: " Finding Purpose",
    date: "Rural Immersion",
    description:
      "A rural immersion experience changed how I viewed technology. I saw communities with access to devices but without solutions that truly addressed their daily challenges. From that moment, my goal shifted from simply building models to building technology that solves meaningful real-world problems.",
    icon: "",
    color: "#541212",
    angle: 220,
    tilt: 0.4,
  },

  {
    id: "t5",
    title: " Research & Innovation",
    date: "Present",
    description:
      "Research became a way to apply AI to meaningful challenges. Working on healthcare-focused machine learning, participating in Kaggle competitions, and contributing to academic research strengthened both my technical skills and my understanding of technology's real-world impact.",
    icon: "",
    color: "#468A9A",
    angle: 280,
    tilt: -0.2,
  },

  {
    id: "t6",
    title: " Building Beyond the Classroom",
    date: "Innovation",
    description:
      "From developing LunaOS and full-stack applications to building AI-powered systems and research prototypes, every project became an opportunity to learn new technologies, strengthen engineering skills, and transform ideas into working solutions.",
    icon: "",
    color: "#EEEEEE",
    angle: 330,
    tilt: 0.55,
  },

  {
    id: "t7",
    title: " The Journey Continues",
    date: "Beyond Today",
    description:
      "I'm still learning, still building, and still exploring. My goal is to create technology that helps people live the life they aspire to while contributing to products and systems that make a meaningful difference at scale.",
    icon: "",
    color: "#468A9A",
    angle: 180,
    tilt: -0.5,
  },
];