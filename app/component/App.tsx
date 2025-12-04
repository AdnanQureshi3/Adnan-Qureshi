"use client";
import React, { useState, useEffect } from "react";
import Navigation from "./ui/Navigation";
import Hero from "./ui/Hero";
import AboutSection from "./ui/About";
import Footer from "./ui/Footer";
import SkillsSection from "./ui/SkillSection";
import ContactSection from "./ui/ContactSection";


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
        <SkillsSection activeTab="frontend" setActiveTab={() => {}} techStackData={{}} />
          <ContactSection theme={theme} />

      </main>

      <Footer />
    </>
  );
};

export default App;
