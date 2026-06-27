import { Project } from "../types";

export const projects: Project[] = [
    {
  id: "proj-1",
  title: "LunaOS",
  category: "Systems",
  description:
    "A custom operating system built from scratch to explore kernel development, low-level programming, and computer architecture while mastering system fundamentals through hands-on engineering.",
  techStack: [
    "C",
    "x86 Assembly",
    "GRUB",
    "GNU Toolchain",
    "QEMU"
  ],
  status: "In Progress",
  github: "YOUR_GITHUB_LINK",
  images: [],
  features: [
    "Custom boot process using GRUB",
    "Kernel development in C and x86 Assembly",
    "Direct hardware interaction",
    "Progressive implementation of core operating system components",
    "Learning-driven modular architecture"
  ],
  problemStatement:
    "Modern operating systems abstract away the complexity of hardware, making it difficult to truly understand how computers work. LunaOS was created to bridge that gap by building an operating system from scratch and learning every layer through practical implementation.",

  architecture:
    "LunaOS follows a modular operating system architecture where each subsystem is developed incrementally. The kernel is written in C with x86 Assembly handling low-level initialization, bootstrapping, and hardware interaction. Every feature is implemented from first principles to strengthen understanding of operating system internals.",

  challenges:
    "Working without the debugging conveniences available in application development required understanding hardware behavior, boot sequences, memory layout, and low-level debugging techniques while solving problems step by step.",

  learnings:
    "LunaOS has significantly deepened my understanding of operating systems, computer architecture, memory organization, bootloading, assembly language, and systems programming. More importantly, it reinforced my belief that the best way to master fundamentals is by building them from scratch."
},
  {
  id: "proj-2",
  title: "Guardian Intercept Dementia",
  category: "AI",
  description:
    "An AI-assisted dementia care platform that helps patients follow daily routines while reducing caregiver stress through intelligent voice reminders, geo-fencing, and automated notifications.",
  techStack: [
    "Python",
    "Flask",
    "SMTP",
    "Geo-Fencing",
    "Machine Learning",
    "Speech Recognition"
  ],
  status: "Completed",
  github: "YOUR_GITHUB_LINK",
  images: [],
  features: [
    "Personalized scheduling for medications, appointments, and daily activities",
    "Persistent voice-assisted reminders requiring patient acknowledgement",
    "Geo-fencing for patient location awareness",
    "Automatic caregiver notifications using SMTP",
    "Designed to promote patient independence while reducing caregiver burden"
  ],
  problemStatement:
    "People living with dementia often struggle to remember medications, appointments, and everyday tasks, making independent living difficult and increasing the burden on caregivers. Traditional alarms are easy to ignore and provide no confirmation that tasks have actually been completed.",

  architecture:
    "The system follows a caregiver-driven workflow where daily tasks are scheduled through a Flask-based interface. Scheduled activities are converted into intelligent voice prompts that continue until acknowledged by the patient. Geo-fencing provides location awareness, while automated SMTP notifications alert caregivers whenever a response is not received within the configured time limit.",

  challenges:
    "Designing a reminder system that balances patient independence with caregiver intervention while ensuring alerts are reliable and non-intrusive.",

  learnings:
    "This project strengthened my understanding of healthcare-focused AI, backend development with Flask, voice-based interaction, automation using SMTP, and designing technology that directly addresses real-world challenges."
},
  {
    id: "proj-3",
    title: "Astra AI Web Interface",
    category: "Web",
    description: "An immersive, cinematic web experience for exploring complex AI datasets.",
    techStack: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    status: "Completed",
    demo: "https://astra-web.example.com",
    images: [],
    features: [
      "3D data visualization",
      "Smooth physics-based scrolling",
      "Interactive data points"
    ],
    problemStatement: "Traditional data tables fail to capture the multi-dimensional nature of AI research datasets.",
    architecture: "A custom WebGL renderer integrated with React via react-three-fiber, communicating with a Rust backend via WebSockets.",
    challenges: "Maintaining 60fps while rendering thousands of 3D objects.",
    learnings: "WebGL optimization techniques and shader programming."
  },
  {
    id: "proj-4",
    title: "Cognitive Synthesizer",
    category: "Research",
    description: "Research project exploring the synthesis of cognitive patterns in reinforcement learning agents.",
    techStack: ["TensorFlow", "OpenAI Gym", "Python"],
    status: "In Progress",
    images: [],
    features: [
      "Multi-agent environment",
      "Novel reward shaping algorithms",
      "Behavioral analysis dashboard"
    ],
    problemStatement: "RL agents often fail to generalize across slightly varied environments.",
    architecture: "A distributed training setup using Ray to scale agents across multiple GPU nodes.",
    challenges: "Reward sparsity in complex multi-step tasks.",
    learnings: "Advanced reinforcement learning techniques and distributed systems."
  },
  {
    id: "proj-5",
    title: "Nova DB",
    category: "Systems",
    description: "A specialized time-series database for high-frequency trading data.",
    techStack: ["C++", "Assembly", "Linux"],
    status: "Completed",
    github: "https://github.com/placeholder/nova-db",
    images: [],
    features: [
      "Microsecond write latency",
      "Memory-mapped file storage",
      "Custom query language"
    ],
    problemStatement: "Off-the-shelf databases cannot handle the write velocity of HFT firms.",
    architecture: "Lock-free ring buffers and a custom memory allocator to avoid system call overhead.",
    challenges: "Debugging concurrent race conditions in C++.",
    learnings: "Low-level system optimization and cache-line aware programming."
  },
  {
    id: "proj-6",
    title: "EcoSense Network",
    category: "AI",
    description: "Predictive modeling for environmental changes using satellite imagery.",
    techStack: ["Python", "PyTorch", "Google Earth Engine"],
    status: "Completed",
    demo: "https://ecosense.example.com",
    images: [],
    features: [
      "Semantic segmentation of satellite images",
      "Temporal change detection",
      "Interactive map overlay"
    ],
    problemStatement: "Detecting illegal deforestation requires constant manual monitoring of satellite feeds.",
    architecture: "A UNet-based architecture trained on multi-spectral imagery to detect anomalies automatically.",
    challenges: "Handling cloud cover and atmospheric interference in images.",
    learnings: "Working with geospatial data and remote sensing."
  }
];
