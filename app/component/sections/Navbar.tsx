"use client";


export default function Navbar() {
  return (
    <header className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-700 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="#intro" className="text-indigo-400 font-bold text-xl">
          Portfolio
        </a>
        <div className="hidden md:flex space-x-6 text-gray-300">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
      </nav>
      
    </header>
  );
}
