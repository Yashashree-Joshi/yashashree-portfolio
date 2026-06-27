export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: string;
}

export interface AchievementCategory {
  id: string;
  label: string;
  color: string;
  // Constellation cluster center position (percentage of section width/height)
  cx: number; // 0-100
  cy: number; // 0-100
  items: AchievementItem[];
}

export const achievementCategories: AchievementCategory[] = [
  {
    id: "research",
    label: "Research",
    color: "#541212",
    cx: 20, cy: 25,
    items: [
      { id: "r1", title: "ASPLOS Publication", description: "Memory latency optimization in sparse neural networks.", date: "2021" },
      { id: "r2", title: "NeurIPS Spotlight", description: "Graph-based attention mechanisms selected for spotlight presentation.", date: "2023" },
      { id: "r3", title: "System Architecture Paper", description: "Novel OS scheduling for heterogeneous compute.", date: "2022" },
    ]
  },
  {
    id: "competitions",
    label: "Competitions",
    color: "#468A9A",
    cx: 65, cy: 20,
    items: [
      { id: "c1", title: "Hackathon Winner", description: "Built an AI-powered triage system in 24 hours.", date: "2022" },
      { id: "c2", title: "Kaggle Top 5%", description: "NLP competition — sentiment analysis at scale.", date: "2023" },
      { id: "c3", title: "ACM ICPC Regional", description: "Competitive programming regional qualifier.", date: "2021" },
    ]
  },
  {
    id: "open_source",
    label: "Open Source",
    color: "#EEEEEE",
    cx: 45, cy: 65,
    items: [
      { id: "o1", title: "Quantum Ledger", description: "Lightweight consensus mechanism for IoT. 2k+ GitHub stars.", date: "2022" },
      { id: "o2", title: "OSS Contributions", description: "Contributor to PyTorch and Triton compiler.", date: "2023" },
    ]
  },
  {
    id: "leadership",
    label: "Leadership",
    color: "#468A9A",
    cx: 78, cy: 60,
    items: [
      { id: "l1", title: "Technical Lead", description: "Led a 6-person team building distributed ML pipelines.", date: "2023" },
      { id: "l2", title: "Mentorship Program", description: "Mentored 12 junior engineers in systems and AI.", date: "2024" },
    ]
  },
  {
    id: "certifications",
    label: "Certifications",
    color: "#EEEEEE",
    cx: 20, cy: 72,
    items: [
      { id: "cert1", title: "Deep Learning Specialization", description: "Andrew Ng — Coursera.", date: "2021" },
      { id: "cert2", title: "Systems Design Expert", description: "Architecting for scale — distributed systems.", date: "2022" },
    ]
  }
];

// Legacy export for backward compatibility — Journey section still uses this
export const achievements = achievementCategories.flatMap(cat => cat.items.map(item => ({
  id: item.id,
  title: item.title,
  organization: cat.label,
  year: item.date,
  description: item.description,
  icon: item.icon ?? "star"
})));
