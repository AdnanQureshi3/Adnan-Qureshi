"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

// Data that defines the Tech Stack
const techStackData: Record<string, TechStackItem[]> = {
    frontend: [
      { name: 'React.js', desc: 'Primary UI' },
      { name: 'Vue.js', desc: 'Secondary Framework' },
      { name: 'Tailwind CSS', desc: 'Utility Styling' },
      { name: 'HTML5/CSS3', desc: 'Core Foundations' },
      { name: 'TypeScript', desc: 'Type Safety' },
      { name: 'Redux/Zustand', desc: 'State Management' },
    ],
    backend: [
      { name: 'Node.js', desc: 'Runtime Environment' },
      { name: 'Express', desc: 'REST APIs' },
      { name: 'MongoDB', desc: 'NoSQL Database' },
      { name: 'PostgreSQL', desc: 'Relational DB' },
      { name: 'Firebase', desc: 'BaaS/Realtime' },
      { name: 'Docker', desc: 'Containerization' },
    ],
    languages: [
      { name: 'JavaScript', desc: 'Core Language' },
      { name: 'Python', desc: 'Scripting/ML' },
      { name: 'C++', desc: 'Performance/DSA' },
      { name: 'Git/GitHub', desc: 'Version Control' },
      { name: 'Jest/Cypress', desc: 'Testing Frameworks' },
      { name: 'CI/CD (Actions)', desc: 'Automation' },
    ]
};

// Data that defines the Projects
const projectData: ProjectData[] = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack application built with React and Node.js. Features include user authentication, payment processing, and admin dashboards.',
        tech: ['React', 'Node.js', 'MongoDB'],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=E-Commerce+Platform"
    },
    {
        title: 'Data Analytics Dashboard',
        description: 'An interactive dashboard for visualizing complex datasets using Vue.js and D3.js. Optimized for performance.',
        tech: ['Vue.js', 'D3.js', 'PostgreSQL'],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=Data+Visualization+Tool"
    },
    {
        title: 'Cross-Platform Mobile App',
        description: 'A habit tracking mobile application built using React Native and Firebase for real-time data synchronization.',
        tech: ['React Native', 'Firebase', 'Jest'],
        imgSrc: "https://placehold.co/600x400/273a5a/ffffff?text=Mobile+App+Concept"
    }
];


const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('frontend');

  // Modal states for Project Analysis
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [analysisContent, setAnalysisContent] = useState<AnalysisResult | null>(null);
  const [isModalLoading, setIsModalLoading] = useState(false);

  // Custom cursor hook usage (passing all 4 dependencies for full responsiveness)
  useCursor(isAnalysisModalOpen, isMobileMenuOpen);


  
  
  return (
    <>
      <style jsx global>{`
        /* Load Roboto Mono font for the code aesthetic */
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap');

        /* --- 1. CSS Variables for Theming --- */
        :root {
            --accent-color: #6366f1;   
            --accent-hover: #4f46e5;   
        }
        
        /* Default: DARK MODE */
        body {
            --bg-primary: #0d1117;     
            --text-primary: #c9d1d9;   
            --card-bg: #161b22;        
            --border-color: #30363d;
            --sub-card-bg: #1e2329;
            --shadow-color: rgba(99, 102, 241, 0.25);
            --bg-pattern-color: #30363d;
            
            /* Hides default cursor for custom cursor effect on desktop */
            cursor: none; 
        }

        /* Light Mode Overrides */
        body[data-theme='light'] {
            --bg-primary: #f8f9fa;     
            --text-primary: #212529;   
            --card-bg: #ffffff;        
            --border-color: #e9ecef;
            --sub-card-bg: #e9ecef;
            --shadow-color: rgba(99, 102, 241, 0.15);
            --bg-pattern-color: #ced4da;
        }
        
        /* --- 2. Core Styles (using variables) --- */
        body {
            font-family: 'Roboto Mono', monospace;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            transition: background-color 0.3s ease;
            scroll-behavior: smooth;
            background-image: radial-gradient(var(--bg-pattern-color) 1px, transparent 1px);
            background-size: 25px 25px;
        }
        
        /* FIX: MEDIA QUERY OVERRIDE FOR MOBILE */
        @media (max-width: 768px) {
            body {
                /* Force default OS cursor on mobile/small screens */
                cursor: auto !important; 
            }
        }

        .section-padding {
            padding: 5rem 1rem;
        }
        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        
        /* Override Tailwind classes for headers to ensure theme colors apply */
        h1, h2, h3 {
          color: var(--text-primary) !important;
        }

        /* --- 3. Interactive/3D Elements --- */
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
            transition: all 0.3s ease-out;
            transform: translateZ(0); 
            border: 1px solid var(--border-color);
        }
        .tech-item:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 10px 15px -3px var(--shadow-color);
        }

        /* --- 4. Navigation & Tabs --- */
        .active-link {
            color: var(--accent-color) !important;
            font-weight: 600;
            background-color: var(--border-color) !important;
        }
        .active-tab {
            color: var(--text-primary) !important;
            border-bottom-color: var(--accent-color) !important;
        }

        .header-bg {
             background-color: var(--bg-primary);
             border-bottom-color: var(--border-color);
        }

        /* --- 5. Custom Cursor --- */
        #custom-cursor {
            /* ENSURE HIGH Z-INDEX AND FIXED POSITION */
            z-index: 99999 !important; 
            position: fixed !important;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: var(--accent-color);
            pointer-events: none;
            opacity: 0.8;
            mix-blend-mode: difference;
            transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
            transform: translate(-50%, -50%);
        }

        #custom-cursor.expanded {
            width: 50px;
            height: 50px;
            opacity: 0.3;
        }

        /* --- 6. Modal Specific Styling --- */
        .loader {
            border: 4px solid var(--border-color); 
            border-top: 4px solid var(--accent-color); 
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
      `}</style>
      
      {/* CURSOR ELEMENT: Explicitly hidden on small screens (md:block) */}
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

        {/* 3. EDUCATION SECTION (Static content, no theme prop needed) */}
        <section id="education" className="section-padding border-t border-[#30363d]">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card p-6 rounded-xl hover:shadow-indigo-500/30 transition duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-white">Bachelors in Electronics and Communication.</h3>
                <span className="text-sm text-indigo-400 font-medium bg-indigo-900/20 px-3 py-1 rounded-full">2022 - 2026</span>
              </div>
              <p className="text-lg text-gray-400 mb-2">NIT Hamirpur | Hamirpur, India</p>
              <p className="text-sm text-gray-500">Specialization in Electronics and Communication Engineering.</p>
            </div>

            <div className="card p-6 rounded-xl hover:shadow-indigo-500/30 transition duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-white">Senior Secondary (12th) – CBSE</h3>
                <span className="text-sm text-indigo-400 font-medium bg-indigo-900/20 px-3 py-1 rounded-full">2019 - 2021</span>
              </div>
              <p className="text-lg text-gray-400 mb-2">B.B.V.M School | Agra, UP</p>
             
            </div>
            <div className="card p-6 rounded-xl hover:shadow-indigo-500/30 transition duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-white">High School (10th) – CBSE</h3>
                <span className="text-sm text-indigo-400 font-medium bg-indigo-900/20 px-3 py-1 rounded-full">2017 - 2019</span>
              </div>
              <p className="text-lg text-gray-400 mb-2">B.B.V.M School | Agra, UP</p>
             
            </div>
          </div>
        </section>

        <SkillsSection 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          techStackData={techStackData} 
        />

        <ProjectsSection 
          projectData={projectData} 
         
        />

        <ContactSection theme={theme} />

      </main>

      <Footer />
     
    </>
  );
};

export default App;