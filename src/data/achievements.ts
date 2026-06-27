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
  {
    id: "r1",
    title: "IEEE I2ITCON Publication",
    description: "Published my first IEEE conference paper on Guardian Intercept Dementia in IEEE Xplore.",
    date: "2025"
  },
  {
    id: "r2",
    title: "Venus Sonification",
    description: "Ongoing research exploring planetary data sonification for scientific accessibility.",
    date: "Ongoing"
  },
  {
    id: "r3",
    title: "DRT ALIES",
    description: "Developing an AI-assisted disaster response and intelligent alert framework.",
    date: "Ongoing"
  }
]
  },
  {
    id: "competitions",
    label: "Competitions",
    color: "#468A9A",
    cx: 65, cy: 20,
   items: [
  {
    id: "c1",
    title: "ICSC Achievement",
    description: "ICSC 2025 Finalist Secured 2nd place globally for C programming runtime performance in the ICSC Competitive Programming Code Submission Semi-Final problem A1 and 13th place in the problem B1.Achieved 14th place internationally in the ICSC Qualification Round for C programming runtimePerformance for problem B .",
    date: "2025"
  },
  {
     id: "c2",
    title: "AWS AI for Bharat Hackathon",
    description: "Led Team Bot Catalyst and developed MindCare AI, a voice-based cognitive healthcare assistant designed to improve healthcare accessibility for elderly individuals, caregivers, and underserved rural communities.",
    date: "2025"
  },
  {
    id: "c3",
    title: "Alzheimer's MRI Challenge",
    description: "Built a leak-free explainable AI pipeline using EfficientNet and Grad-CAM for dementia classification.",
    date: "2026"
  }
]
  },
  {
    id: "open_source",
    label: "Open Source",
    color: "#EEEEEE",
    cx: 45, cy: 65,
   items: [
  {
    id: "o1",
    title: "ML for Research",
    description: "Building an open-source roadmap helping beginners transition from ML fundamentals to research.",
    date: "2026"
  },
  {
    id: "o2",
    title: "LunaOS",
    description: "Developing an educational operating system to explore systems programming and kernel architecture.",
    date: "Ongoing"
  }
]
  },
  {
    id: "leadership",
    label: "Leadership",
    color: "#468A9A",
    cx: 78, cy: 60,
   items: [
  {
    id: "l1",
    title: "Vishnova Core Team",
    description: "Contributed to organizing and managing technical initiatives, collaborating with teams to execute events and promote innovation.",
    date: "2026"
  },
  {
    id: "l2",
    title: "Technophilia Volunteer And Organizer",
    description: "Actively participated in organizing technical events, coordinating activities, and supporting event execution.",
    date: "2025"
  }
]
  },
  {
    id: "certifications",
    label: "Experience",
    color: "#EEEEEE",
    cx: 20, cy: 72,
     items: [
    {
      id: "e1",
      title: "AI Research Trainee",
      description: "Worked as an AI Research Trainee at Ingnious AI, contributing to machine learning research, model development, literature review, Facial point Detection model analysis and AI-driven solutions for real-world applications.",
      date: "2025"
     
    }
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
