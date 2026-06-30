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
  title: "Leak-Free Alzheimer's MRI Classification",
  category: "Research",
  description:
    "A clinically inspired Alzheimer's disease prediction framework combining leak-free MRI classification with explainable AI and independent genetic risk analysis to provide transparent, reproducible, and clinician-friendly decision support.",
  techStack: [
    "Python",
    "PyTorch",
    "EfficientNet",
    "Grad-CAM",
    "MONAI",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Google Colab"
  ],
  status: "Completed",
  github: "https://github.com/Yashashree-Joshi/Alzheimers_Detection",
  images: [],
  features: [
    "Leak-free MRI pipeline with filename-level deduplication",
    "EfficientNet-based multi-class dementia stage classification",
    "Explainable Grad-CAM visualizations for clinician interpretation",
    "Independent genetic risk analysis using odds ratio and statistical significance",
    "Late-fusion inference combining imaging and genetic insights without training leakage"
  ],

  problemStatement:
    "Many Alzheimer's prediction systems report high accuracy while suffering from hidden data leakage, making their results unreliable for real-world clinical use. This project addresses that challenge by building a fully reproducible, leak-free MRI classification pipeline enhanced with explainable AI and independent genetic risk analysis to improve clinical trust and transparency.",

  architecture:
    "The MRI classification model is built using an EfficientNet backbone trained on a strictly leak-free dataset created through filename-level deduplication and stratified dataset splitting. Grad-CAM generates anatomical attention maps that explain model predictions, while a separate genetic risk model computes statistically grounded risk scores. Both models remain completely independent and are fused only during inference to preserve scientific validity.",

  challenges:
    "Preventing hidden data leakage, generating clinically meaningful Grad-CAM visualizations, and combining MRI predictions with genetic insights without introducing invalid multimodal learning required careful experimental design and rigorous validation.",

  learnings:
    "This project strengthened my understanding of medical AI, explainable deep learning, reproducible research practices, computer vision, statistical validation, and the importance of building trustworthy AI systems for healthcare."
},
  {
  id: "proj-4",
  title: "ML for Research Series",
  category: "Research",
  description:
    "An open-source educational initiative designed to help beginners learn machine learning through the lens of real-world research, providing a structured roadmap from core concepts to publishing reproducible projects.",

  techStack: [
    "Python",
    "Scikit-learn",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Jupyter Notebook",
    "GitHub",
    "Kaggle"
  ],

  status: "In Progress",

  github: "https://github.com/Yashashree-Joshi/machine-learning-research-roadmap",

  images: [],

  features: [
    "Step-by-step machine learning roadmap for research beginners",
    "Hands-on notebooks covering real datasets and experiments",
    "Research-oriented project building methodology",
    "Open-source learning resources hosted on GitHub",
    "Focus on reproducibility and practical implementation"
  ],

  problemStatement:
    "Many students begin machine learning without understanding how to apply it to research. Learning resources are often fragmented, making it difficult to progress from basic algorithms to publishing meaningful research. This series was created to provide a structured roadmap that bridges that gap.",

  architecture:
    "The series is organized as progressive learning modules where each notebook builds upon previous concepts using practical datasets, reproducible experiments, and research-focused workflows. Every stage emphasizes implementation, experimentation, and documentation rather than theory alone.",

  challenges:
    "Designing content that remains beginner-friendly while introducing research methodology, reproducibility, and practical machine learning workflows without overwhelming new learners.",

  learnings:
    "Building this series strengthened my own understanding of machine learning, research methodology, technical writing, open-source documentation, and the importance of explaining complex concepts through practical examples."
},
  {
  id: "proj-5",
  title: "Smart Classroom Management & Scheduling System",
  category: "Systems",
  description:
    "A modular object-oriented classroom management system built in C++ that streamlines classroom scheduling, resource allocation, student enrollment, and timetable management through efficient class relationships and scheduling algorithms.",

  techStack: [
    "C++",
    "Object-Oriented Programming",
    "STL",
    "Data Structures",
    "Scheduling Algorithms"
  ],

  status: "Completed",

  github: "",

  images: [],

  features: [
    "Automated classroom and timetable scheduling",
    "Student, teacher, and course management",
    "Smart classroom resource allocation",
    "Conflict detection for overlapping schedules",
    "Modular OOP architecture with UML-based design"
  ],

  problemStatement:
    "Educational institutions often struggle with manual classroom scheduling, resource allocation, and timetable conflicts. This project was developed to provide a structured object-oriented solution capable of managing classrooms, students, teachers, courses, and schedules efficiently.",

  architecture:
    "The system follows an object-oriented architecture where SchedulerSystem acts as the central manager coordinating Classrooms, Students, Teachers, Courses, and Smart Devices. Relationships are implemented using association, aggregation, composition, and dependency to accurately model a real-world academic environment while maintaining modularity and scalability.",

  challenges:
    "Designing realistic relationships between multiple interacting classes while implementing conflict-free scheduling and maintaining clean, reusable object-oriented code.",

  learnings:
    "This project strengthened my understanding of object-oriented design principles, UML modeling, class relationships, modular software architecture, scheduling logic, and building maintainable C++ applications."
},
  {
  id: "proj-6",
  title: "Parking Management System (C)",
  category: "Systems",
  description:
    "A console-based parking management application developed in C to automate vehicle entry, exit, parking allocation, and billing while strengthening object-oriented programming and data management concepts.",

  techStack: [
    "C",
    "Arrys",
    "Loops",
    "File Handling"
  ],

  status: "Completed",

  github: "https://github.com/Yashashree-Joshi/Parking-Management-c",

  images: [],

  features: [
    "Vehicle entry and exit management",
    "Parking slot allocation",
    "Parking fee calculation",
    "Vehicle record management",
    "Menu-driven console interface"
  ],

  problemStatement:
    "Manual parking management often leads to inefficient space allocation and inaccurate record keeping. This project automates the complete parking workflow using a structured object-oriented approach.",

  architecture:
    "The application follows an object-oriented design where vehicle information, parking slots, and billing operations are managed through modular C++ classes, ensuring maintainability and scalability.",

  challenges:
    "Designing efficient parking allocation logic while maintaining accurate records and implementing modular object-oriented code.",

  learnings:
    "Strengthened my understanding of object-oriented programming, file handling, modular software design, and real-world problem solving using C++."
},
{
  id: "proj-6",
  title: "Smart Parking Management System",
  category: "Web",

  description:
    "A full-stack web application designed to digitize parking management by automating vehicle allocation, billing, and administrative operations for two-wheelers and four-wheelers.",

  techStack: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL"
  ],

  status: "Completed",

  github: "Yhttps://github.com/Yashashree-Joshi/Parking-Management-Web",

  images: [],

  features: [
    "Separate parking management for two-wheelers and four-wheelers",
    "Admin dashboard for monitoring parking operations",
    "Automatic parking fee calculation",
    "Vehicle entry and exit management",
    "Database-driven parking records and reporting"
  ],

  problemStatement:
    "Manual parking management often results in inefficient space utilization, inaccurate record keeping, and increased administrative effort. This project provides a centralized web platform to streamline parking operations while improving efficiency and user experience.",

  architecture:
    "The system follows a client-server architecture where a responsive frontend communicates with a PHP backend connected to a MySQL database. The application manages parking availability, billing, and vehicle records through modular backend components and persistent database storage.",

  challenges:
    "Designing an intuitive user interface while maintaining accurate database synchronization, efficient vehicle tracking, and reliable parking allocation logic.",

  learnings:
    "Strengthened my understanding of full-stack web development, relational database design, backend programming with PHP, frontend integration, CRUD operations, and building scalable web applications."
},
{
  id: "proj-7",
  title: "AI Recipe Recommendation Assistant",
  category: "AI",

  description:
    "An intelligent recipe recommendation assistant that combines local large language models with real-time web search to generate personalized cooking suggestions based on available ingredients, dietary preferences, and user queries.",

  techStack: [
    "Python",
    "Ollama",
    "Llama 3",
    "Google Custom Search API",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript"
  ],

  status: "Completed",

  github: "https://github.com/Yashashree-Joshi/Recipe-Recommendation",

  images: [],

  features: [
    "Recipe recommendations using local Llama 3 models",
    "Real-time recipe retrieval through Google Custom Search",
    "Ingredient-based recipe suggestions",
    "Natural language conversational interface",
    "Hybrid AI and web-search recommendation pipeline"
  ],

  problemStatement:
    "Finding recipes that match available ingredients, dietary preferences, and personal tastes often requires searching multiple websites. This project simplifies the process by combining generative AI with real-time web search to provide personalized recipe recommendations from a single conversational interface.",

  architecture:
    "The application integrates a locally hosted Llama 3 model through Ollama with Google's Custom Search API. User queries are processed by the language model, enriched using real-time search results, and transformed into context-aware recipe recommendations through a Flask-based backend.",

  challenges:
    "Balancing locally generated responses with live web information while ensuring recommendations remained relevant, accurate, and responsive.",

  learnings:
    "Strengthened my understanding of Retrieval-Augmented Generation (RAG)-style workflows, local LLM deployment with Ollama, API integration, prompt engineering, and building AI-powered web applications."
}
];
