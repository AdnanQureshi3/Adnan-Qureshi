"use client";
import React, { useState } from 'react';
import Navigation from './ui/Navigation';
import Hero from './ui/Hero';
import AboutSection from './ui/About';
import SkillsSection from './ui/SkillsSection';
import ProjectsSection from './ui/ProjectsSection';
import ContactSection from './ui/ContactSection';
import Footer from './ui/Footer';

import { useTheme } from '../hooks/useTheme';
import { useCursor } from '../hooks/useCursor';
import { useScrollSpy } from '../hooks/useScrollSpy';

import { AnalysisResult, TechStackItem, ProjectData } from '../types';

const techStackData: Record<string, TechStackItem[]> = {
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

const projectData: ProjectData[] = [
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
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=Up-Chain",
        Demo: '',
        Live: '',
        Github: 'https://github.com/AdnanQureshi3/WorkSight',
    },
    {
        title: 'FileMan',
        description: 'FileMan is a modern and secure file-sharing platform designed for seamless uploads, sharing, and management.',
        tech: ['Node.js', 'Razor Pay', 'PostgreSQL'],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=Data+Visualization+Tool",
        Demo: 'https://youtu.be/ZEmDZYrNBQ4',
        Live: 'https://fileman.onrender.com/',
        Github: 'https://github.com/AdnanQureshi3/FileMan',
    },
    {
        title: 'CPU Scheduler Visualizer',
        description: 'A habit tracking mobile application built using React Native and Firebase for real-time data synchronization.',
        tech: ['React', 'Chart.js'],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=Mobile+App+Concept",
        Demo: '',
        Live: 'https://cpu-schedular-one.vercel.app/',
        Github: 'https://github.com/AdnanQureshi3/CPU-Schedular',
    }
];

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('frontend');
  const [isAnalysisModalOpen] = useState(false);

  useCursor(isAnalysisModalOpen, isMobileMenuOpen);

  const isLight = theme === 'light';
  
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap');

        :root {
            --accent-color: #7c3aed;   
            --accent-hover: #6d28d9;   
        }
        
        body {
            --bg-primary: #0d1117;     
            --text-primary: #c9d1d9;   
            --card-bg: #161b22;        
            --border-color: #30363d;
            --sub-card-bg: #1e2329;
            --shadow-color: rgba(124, 58, 237, 0.25);
            --bg-pattern-color: #30363d;
            cursor: none; 
            transition: background-color 0.3s ease;
            font-family: 'Roboto Mono', monospace;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            scroll-behavior: smooth;
            background-image: radial-gradient(var(--bg-pattern-color) 1px, transparent 1px);
            background-size: 25px 25px;
        }

        body[data-theme='light'] {
            --bg-primary: #f8fafc;
            --text-primary: #1e293b;
            --card-bg: #ffffff;
            --border-color: #e2e8f0;
            --sub-card-bg: #f1f5f9;
            --shadow-color: rgba(124, 58, 237, 0.1);
            --bg-pattern-color: #cbd5e1;
        }

        @media (max-width: 768px) {
            body { cursor: auto !important; }
        }

        .section-padding { padding: 5rem 1rem; }
        
        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
        }

        h1, h2, h3 { color: var(--text-primary) !important; }

        .project-card {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            transform-style: preserve-3d;
            box-shadow: 0 10px 20px -5px var(--shadow-color);
        }
        
        .project-card:hover {
            transform: perspective(1000px) rotateX(1deg) scale(1.02);
            box-shadow: 0 25px 50px -12px var(--shadow-color);
        }
        
        .tech-item {
            background-color: var(--sub-card-bg);
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
        }

        .active-link {
            color: var(--accent-color) !important;
            background-color: ${isLight ? '#ede9fe' : '#30363d'} !important;
        }

        #custom-cursor {
            z-index: 99999 !important; 
            position: fixed !important;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: var(--accent-color);
            pointer-events: none;
            mix-blend-mode: ${isLight ? 'normal' : 'difference'};
            transition: width 0.3s ease, height 0.3s ease, transform 0.3s ease;
            transform: translate(-50%, -50%);
        }
      `}</style>
      
      <div id="custom-cursor" className='hidden md:block'></div>

      <Navigation 
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="max-w-7xl mx-auto">
        <Hero theme={theme} />
        <AboutSection theme={theme} />

        <section id="education" className={`section-padding border-t ${isLight ? 'border-slate-200' : 'border-[#30363d]'}`}>
          <h2 className={`text-4xl font-bold text-center mb-12 ${isLight ? 'text-slate-900' : 'text-white'}`}>Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card p-8 rounded-2xl hover:border-violet-400 transition-all duration-300 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h3 className={`text-2xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>Bachelors in Electronics and Communication</h3>
                <span className="text-sm font-bold bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full">2022 - 2026</span>
              </div>
              <p className={`text-lg font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-gray-400'}`}>NIT Hamirpur | Hamirpur, India</p>
              <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-gray-500'}`}>Specialization in Electronics and Communication Engineering.</p>
            </div>

            <div className="card p-8 rounded-2xl hover:border-violet-400 transition-all duration-300 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h3 className={`text-2xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>Senior Secondary (12th) – CBSE</h3>
                <span className="text-sm font-bold bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full">2019 - 2021</span>
              </div>
              <p className={`text-lg font-medium ${isLight ? 'text-slate-600' : 'text-gray-400'}`}>B.B.V.M School | Agra, UP</p>
            </div>

            <div className="card p-8 rounded-2xl hover:border-violet-400 transition-all duration-300 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h3 className={`text-2xl font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>High School (10th) – CBSE</h3>
                <span className="text-sm font-bold bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full">2017 - 2019</span>
              </div>
              <p className={`text-lg font-medium ${isLight ? 'text-slate-600' : 'text-gray-400'}`}>B.B.V.M School | Agra, UP</p>
            </div>
          </div>
        </section>

        <SkillsSection 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          techStackData={techStackData} 
          theme={theme}
        />

        <ProjectsSection 
          projectData={projectData} 
          theme = {theme}
        />

        <ContactSection theme={theme} />
      </main>

      <Footer />
    </>
  );
};

export default App;