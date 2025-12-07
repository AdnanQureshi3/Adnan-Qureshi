import { useEffect } from 'react';

export const useCursor = (isModalOpen: boolean, isMenuOpen: boolean) => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const customCursor = document.getElementById('custom-cursor');
        if (!customCursor) return;

        const handleMouseMove = (e: MouseEvent) => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        };

        const interactableElements = document.querySelectorAll('.interactable, .project-card, .tech-item');

        const handleMouseEnter = () => customCursor.classList.add('expanded');
        const handleMouseLeave = () => customCursor.classList.remove('expanded');

        const attachListeners = () => {
            document.addEventListener('mousemove', handleMouseMove);
            interactableElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        const removeListeners = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            interactableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };

        attachListeners();

        return () => removeListeners();
    }, [isModalOpen, isMenuOpen]);
};