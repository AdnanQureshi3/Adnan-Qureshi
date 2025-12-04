"use client";
import React, { useState, useEffect } from "react";
import Navigation from "./ui/Navigation";
import Hero from "./ui/Hero";
import AboutSection from "./ui/About";
import Footer from "./ui/Footer";
import SkillsSection from "./ui/SkillSection";
import ContactSection from "./ui/ContactSection";
import ProjectsSection from "./ui/ProjectsSection";
import { AnalysisResult, TechStackItem, ProjectData } from '../types';


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


function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return { theme, toggleTheme };
}

function useScrollSpy() {
  return "intro";
}

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('frontend');


  return (
    <>
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
