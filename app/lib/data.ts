import { TechStackItem , ProjectData , SocialLink } from "../types";
export const techStackData: Record<string, TechStackItem[]> = {
    frontend: [
      { name: 'React.js', desc: 'Primary UI' },
      { name: 'Next.js', desc: 'Secondary Framework' },
      { name: 'Tailwind CSS', desc: 'Utility Styling' },
      { name: 'HTML5/CSS3', desc: 'Core Foundations' },
      { name: 'TypeScript', desc: 'Type Safety' },
      { name: 'Redux', desc: 'State Management' },
    ],
    backend: [
      { name: 'Node.js', desc: 'Runtime Environment' },
      { name: 'Express', desc: 'REST APIs' },
      { name: 'MongoDB', desc: 'NoSQL Database' },
      { name: 'SQLite', desc: 'Local Database' },
      { name: 'PostgreSQL', desc: 'Relational DB' },
      { name: 'AWS (EC2, S3, Lambda)', desc: 'Cloud Deployment' },
      { name: 'Docker', desc: 'Containerization' },
      { name: 'Electron', desc: 'Desktop Apps' },
      { name: 'Redis', desc: 'In-Memory Data Store' },
      { name: 'Prisma', desc: 'ORM / DB Client' },
      { name: 'Neo4j', desc: 'Graph Database' }
    ],
    languages: [
      { name: 'JavaScript', desc: 'Core Language' },
      { name: 'Python', desc: 'Scripting/ML' },
      { name: 'C++', desc: 'Performance/DSA' },
      { name: 'Git/GitHub', desc: 'Version Control' },
      { name: 'Jest', desc: 'Testing Frameworks' },
      { name: 'CI/CD (Actions)', desc: 'Automation' },
      { name: 'Zod', desc: 'Schema Validation' },
    ],
   ai_genai: [
    { name: 'OpenAI / Gemini APIs', desc: 'LLM Inference' },
    { name: 'Qdrant', desc: 'Vector Database' },
    { name: 'RAG Pipelines', desc: 'Contextual Retrieval' },
    { name: 'LangChain', desc: 'LLM Orchestration' },
    { name: 'LangGraph', desc: 'Stateful Agent Graphs' },
    { name: 'Agent Systems', desc: 'Tool-based Reasoning' },
    { name: 'Memory Systems', desc: 'Conversation & Vector Memory' },
  ]
};

export const projectData: ProjectData[] = [
    {
        title: 'Up-Chain',
        description: 'A full-stack application built with React and Node.js. Features include user authentication, payment processing, and admin dashboards.',
        tech: ['React', 'Node.js', 'MongoDB' , 'Google GenAI'],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=Up-Chain",
        Demo: '',
        Live: 'https://upchain-6wrp.onrender.com/',
        Github: 'https://github.com/AdnanQureshi3/Upchain',
    },
    {
        title: 'WorkSight',
        description: 'A full-stack application built with React and Node.js. Features include user authentication, payment processing, and admin dashboards.',
        tech: ['Electron.Js', 'Python', 'SQLite' , 'GenAI'],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=WorkSight",
        Demo: '',
        Live: '',
        Github: 'https://github.com/AdnanQureshi3/WorkSight',
    },
    {
        title: 'FileMan',
        description: 'FileMan is a modern and secure file-sharing platform designed for seamless uploads, sharing, and management.',
        tech: ['Node.js', 'AWS','Razor Pay', 'PostgreSQL' ],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=FileMan",
        Demo: 'https://youtu.be/ZEmDZYrNBQ4',
        Live: 'https://fileman.onrender.com/',
        Github: 'https://github.com/AdnanQureshi3/FileMan',
    },
    {
        title: 'CPU Scheduler Visualizer',
        description: 'A habit tracking mobile application built using React Native and Firebase for real-time data synchronization.',
        tech: ['React', 'Chart.js'],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=CPU Algo Visualizer",
        Demo: '',
        Live: 'https://cpu-schedular-one.vercel.app/',
        Github: 'https://github.com/AdnanQureshi3/CPU-Schedular',
    }
];

import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
 export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Adnanqureshi3",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/adnanq61",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/Adnan_Qureshi_61/",
  },
  {
    name: "Codeforces",
    icon: FaCode,
    url: "https://codeforces.com/profile/adnanq61",
  },
];
