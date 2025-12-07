import { useState, useEffect } from 'react';

export const useScrollSpy = () => {
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const sections = document.querySelectorAll('main section');
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return activeSection;
};