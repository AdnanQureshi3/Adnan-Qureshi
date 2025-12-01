import { useState, useEffect, useCallback } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        // Hydrate theme from localStorage on initial load
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
            if (savedTheme) {
                setTheme(savedTheme);
            }
        }
    }, []);

    useEffect(() => {
        
        document.body.setAttribute('data-theme', theme);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    return { theme, toggleTheme };
};