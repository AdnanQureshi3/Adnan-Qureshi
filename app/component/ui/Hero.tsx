"use client";
import React, { useEffect } from 'react';


interface HeroProps {
    theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = () => {
    
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const phrases = ["accessible experiences.", "fast web applications.", "clean, tested code.", "beautiful user interfaces."];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timer: NodeJS.Timeout;

        const typeWriter = () => {
          const currentPhrase = phrases[phraseIndex];
          
          if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
          } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
          }

          let typingSpeed = isDeleting ? 50 : 150;

          if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
          }

          timer = setTimeout(typeWriter, typingSpeed);
        };

        typeWriter();

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="intro" className="section-padding min-h-screen flex items-center justify-center text-center">
            <div className="max-w-6xl px-4">
                <div className="flex justify-center mb-2">
                    <img 
                        className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-500 shadow-xl ring-4 ring-indigo-500/30" 
                        src="/image.png" 
                        alt="Profile Avatar"
                        onError={(e) => (e.currentTarget.src = 'https://placehold.co/150x150/1e293b/ffffff?text=AQ')}
                    />
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                    Hello, I'm <span className="text-indigo-400">Adnan Qureshi</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                    A Full-Stack Developer passionate about building <span id="typing-text" className="text-indigo-400 font-medium border-b-2 border-indigo-400 pb-1"></span>
                </p>
         

                <div className="flex justify-center space-x-4 mt-8">
                    <a 
                        href="#projects" 
                        className="interactable inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transform transition duration-300 hover:scale-105"
                    >
                        View Projects
                    </a>
                    <a 
                        href="#contact" 
                        className="interactable inline-block px-8 py-3 border border-indigo-600 text-indigo-400 font-semibold rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transform transition duration-300 hover:scale-105"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
