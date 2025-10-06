import {
  SiC,
  SiPython,
  SiLua,
  SiJavascript,
  SiAdobe,
  SiLaravel,
  SiNodedotjs,
  SiReact,
  SiUipath,
  SiFigma,
  SiUnrealengine,
} from "react-icons/si";
import {
  BsDatabase,
  BsPeople,
  BsTrophy,
  BsChatDots,
  BsRocketTakeoff,
  BsLightbulb,
  BsGraphUp,
  BsStars,
  BsArrowsMove,
  BsBriefcase,
  BsAward,
} from "react-icons/bs";

export type SectionId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "organizations"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  index: string;
}

export interface ExperienceItem {
  company: string;
  period: string;
  position: string;
  tags: string[];
  responsibilities: string[];
}

export interface OrganizationItem {
  organization: string;
  period: string;
  position: string;
  responsibilities: string[];
}

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  details: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  tagline: string;
  summary: string;
  title: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  period: string;
  status: "completed" | "in-progress" | "pending";
  category: string;
}

export interface SkillItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner";
  description: string;
  icon: any;
}

export interface SkillCategory {
  name: string;
  items: SkillItem[];
}

export const navItems: NavItem[] = [
  { id: "about", label: "About", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "projects", label: "Projects", index: "03" },
  { id: "skills", label: "Skills", index: "04" },
  { id: "education", label: "Education", index: "05" },
  { id: "organizations", label: "Organizations", index: "06" },
  { id: "contact", label: "Contact", index: "07" },
];

export const personalInfo: PersonalInfo = {
  name: "Ananda Alviansyah Putra Pratama Sudarmawan",
  email: "alvians.alvians.aa@gmail.com",
  phone: "(+62)822-2942-8012",
  linkedin: "https://linkedin.com/in/ananda-alviansyah-sudarmawan-92a6642ba/",
  tagline: "Optimizing logic through creativity and modular design.",
  summary:
    "I am a passionate Software Engineer with experience in system design, automation and game development. Skilled in multiple programming languages and frameworks, with proven ability to lead teams, optimize processes, and deliver innovative solutions. Awarded a scholarship at BINUS University and recognized for leadership roles in student organizations, as well as multiple achievements in national and university-level competitions. Combines technical expertise with creativity, leadership, and collaboration to drive impactful results.",
  title: "Software Engineer",
};

export const experiences: ExperienceItem[] = [
  {
    company: "ROBLOX GAME DEVELOPMENT",
    period: "September 2024 – March 2025",
    position: "GAME PROJECT MANAGER",
    tags: ["Lua", "Roblox Studio", "Game Development"],
    responsibilities: [
      "Led a team in developing a Lua-based game on Roblox Studio.",
      "Transitioned core logic from ActionScript 2 to Lua within the Roblox Studio engine.",
      "Collaborated on building an RPG game system and designing UI graphics.",
    ],
  },
  {
    company: "BADAN NASIONAL SERTIFIKASI PROFESI (BNSP)",
    period: "July 2022 – February 2023",
    position: "SYSTEM ASSISTANT",
    tags: ["RPA", "Automation", "System Design"],
    responsibilities: [
      "Designed a system that reduced paper usage and operational costs.",
      "Implemented RPA to automate file and image extraction, streamlining data entry.",
    ],
  },
  {
    company: "LIGHTNING ENTERTAINMENT",
    period: "May 2014 – June 2017",
    position: "DEVELOPER",
    tags: ["ActionScript 2", "PHP", "Flash", "Web Development"],
    responsibilities: [
      "Successfully led and united a team to create a Flash-based game.",
      "Developed a web-based game, including both back-end and emulator.",
      "Contributed 2D art for in-game assets.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "BINUS UNIVERSITY",
    period: "August 2023 - Present",
    degree: "BACHELOR OF COMPUTER SCIENCE (SOFTWARE ENGINEERING)",
    details:
      "Relevant coursework: Software Development, Data Structures & Algorithms, Database Systems, Web Development, Project Management.",
  },
  {
    institution: "SMA SANTO CAROLUS",
    period: "July 2019 - June 2022",
    degree: "NATURAL SCIENCES MAJOR",
    details:
      "Active in Student Council (Arts Division), Band, and Karawitan extracurriculars.",
  },
];

export const organizationExperience: OrganizationItem[] = [
  {
    organization: "BAND STUDENT ACTIVITY UNIT BINUS BEKASI",
    period: "March 2025 – March 2026",
    position: "COMMITTEE MEMBER",
    responsibilities: [
      "Initiated a system empowering audition participants to contribute in organizational roles, minimizing dropouts and reinforcing team cohesion beyond musical performance.",
    ],
  },
  {
    organization: "UKM BAND AUDITION",
    period: "August 2024 – October 2024",
    position: "EVENT COORDINATOR",
    responsibilities: [
      "Implemented a collaborative structure that retained non-performing members through supportive organizational responsibilities, maximizing engagement across the team.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "world-of-oldadventure",
    title: "World Of OldAdventure",
    description: "A multiplayer RPG adventure game built with Roblox Studio featuring various quests and social interactions.",
    longDescription: "World Of OldAdventure is an immersive multiplayer RPG experience developed entirely in Roblox Studio using Lua. The game features various quest types ranging from epic storylines to daily challenges, character progression mechanics, and real-time multiplayer interactions. Players can explore vast medieval worlds, engage in strategic combat, and collaborate with others to complete challenging quests. The project implements advanced Lua scripting techniques for gameplay logic, optimized network communication for smooth multiplayer experiences, and a modular architecture that allows for easy content updates and expansions.",
    image: "https://tr.rbxcdn.com/180DAY-9c87fd7f88ea64f765a53f29030c1aaf/256/256/Image/Webp/noFilter",
    technologies: ["Lua", "Roblox Studio", "3D Modeling", "UI Design"],
    features: [
      "Various quest types with branching narratives",
      "Real-time multiplayer gameplay",
      "Character customization and progression",
      "In-game economy and trading system",
      "Social features including guilds and chat"
    ],
    liveUrl: "https://www.roblox.com/games/77069171124089/World-of-OldAdventure-Alpha",
    period: "September 2024 – January 2025",
    status: "pending",
    category: "Game Dev"
  },
  {
    id: "stress-detection",
    title: "Stress Level Detection During Learning",
    description: "A real-time emotion and stress detection system built using CNN and computer vision to monitor students' emotional states during learning sessions.",
    longDescription: "A real-time emotion and stress detection system built using Convolutional Neural Network (CNN) and FER-2013 dataset to monitor students' emotional states during learning sessions. The system analyzes facial expressions through a webcam and classifies them into stress levels (High, Medium, Low, Neutral) based on detected emotions. Integrated with a feedback module that suggests relaxation tips or short breaks when stress is detected. The model achieved over 90% accuracy on validation data and was designed for smooth real-time inference on standard devices.",
    image: "https://i.imgur.com/HpjT7Ym.png",
    technologies: ["Python", "TensorFlow", "CNN"],
    features: [
      "Real-time emotion detection via webcam",
      "CNN-based facial expression classification",
      "Mapping of emotions to stress levels",
      "Data preprocessing with augmentation & normalization",
      "Feedback and recommendation system for stress management"
    ],
    period: "March 2025 – June 2025",
    status: "completed",
    category: "Machine Learning"
  },
  {
    id: "Hikaricha",
    title: "Hikaricha - Matcha Community",
    description: "A marketplace and community platform dedicated to matcha enthusiasts, featuring product discovery, forums, and social interactions.",
    longDescription: "Hikaricha is a marketplace and community platform dedicated to matcha enthusiasts. The platform allows users to discover, discuss, and purchase matcha-related products while engaging in forum-based discussions about brewing methods, health benefits, and culture. Designed with scalability and user interaction in mind, Hikaricha integrates modern UI/UX principles and efficient data management for seamless user experiences.",
    image: "https://hikari-cha-web.vercel.app/hero-matcha-banner.jpg",
    technologies: ["Next.js", "MySQL", "GitHub"],
    features: [
      "Marketplace for matcha products and accessories",
      "User forums and discussion boards",
      "Authentication and profile system",
      "Real-time comment and post interactions",
      "Admin dashboard for product and community management"
    ],
    liveUrl: "https://hikari-cha-web.vercel.app",
    githubUrl: "https://github.com/arthasenal/HikariChaWeb",
    period: "September 2025 – Present",
    status: "in-progress",
    category: "Web Dev"
  }
];

export const technicalSkills: SkillCategory[] = [
  {
    name: "Programming Languages",
    items: [
      {
        name: "C",
        level: "Intermediate",
        description: "Builds efficient systems-level solutions with strong memory management and optimization focus.",
        icon: SiC,
      },
      {
        name: "Python",
        level: "Advanced",
        description: "Rapidly prototypes automation workflows and data tooling to accelerate delivery.",
        icon: SiPython,
      },
      {
        name: "Lua",
        level: "Advanced",
        description: "Designs gameplay logic and modular scripting for Roblox and custom engines.",
        icon: SiLua,
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        description: "Creates interactive web experiences with robust architecture and testing discipline.",
        icon: SiJavascript,
      },
      {
        name: "ActionScript 2",
        level: "Advanced",
        description: "Maintains legacy Flash applications and ports logic to modern platforms.",
        icon: SiAdobe,
      },
    ],
  },
  {
    name: "Frameworks & Tools",
    items: [
      {
        name: "Laravel",
        level: "Intermediate",
        description: "Engineers secure back-end APIs with clean architecture and maintainable modules.",
        icon: SiLaravel,
      },
      {
        name: "Node.js",
        level: "Advanced",
        description: "Delivers scalable services with real-time capabilities and resilient tooling.",
        icon: SiNodedotjs,
      },
      {
        name: "React.js",
        level: "Advanced",
        description: "Builds dynamic interfaces with reusable components and performance in mind.",
        icon: SiReact,
      },
      {
        name: "RPA",
        level: "Intermediate",
        description: "Automates repetitive workflows to eliminate bottlenecks across operations.",
        icon: SiUipath,
      },
      {
        name: "UI/UX Design",
        level: "Beginner",
        description: "Crafts human-centered experiences with thoughtful typography and layout systems.",
        icon: SiFigma,
      },
      {
        name: "Game Development",
        level: "Intermediate",
        description: "Leads 3D and 2D game production across Roblox Studio, Flash, and web platforms.",
        icon: SiUnrealengine,
      },
      {
        name: "Back-End Development",
        level: "Intermediate",
        description: "Designs modular server-side architectures with strong security and observability.",
        icon: BsDatabase,
      },
    ],
  },
];

export const softSkills: SkillItem[] = [
  {
    name: "Leadership",
    level: "Advanced",
    description: "Guides multidisciplinary teams with clarity, accountability, and shared vision.",
    icon: BsTrophy,
  },
  {
    name: "Teamwork & Collaboration",
    level: "Advanced",
    description: "Builds trust through transparent communication and shared problem-solving.",
    icon: BsPeople,
  },
  {
    name: "Problem-Solving",
    level: "Advanced",
    description: "Breaks down complex challenges into actionable milestones and experiments.",
    icon: BsLightbulb,
  },
  {
    name: "Critical Thinking",
    level: "Advanced",
    description: "Evaluates systems holistically to choose scalable, maintainable solutions.",
    icon: BsGraphUp,
  },
  {
    name: "Creativity",
    level: "Advanced",
    description: "Infuses design thinking and storytelling into technical execution.",
    icon: BsStars,
  },
  {
    name: "Innovation",
    level: "Advanced",
    description: "Explores emerging technology to deliver differentiating product features.",
    icon: BsRocketTakeoff,
  },
  {
    name: "Communication",
    level: "Advanced",
    description: "Translates complex insights for stakeholders across technical fluency levels.",
    icon: BsChatDots,
  },
  {
    name: "Adaptability",
    level: "Advanced",
    description: "Thrives in rapid iteration cycles and adjusts plans with composure.",
    icon: BsArrowsMove,
  },
  {
    name: "Organizational Management",
    level: "Intermediate",
    description: "Implements processes that balance governance with creative freedom.",
    icon: BsBriefcase,
  },
  {
    name: "Mentorship & Coaching",
    level: "Intermediate",
    description: "Develops talent through feedback loops, workshops, and pairing sessions.",
    icon: BsAward,
  },
];
