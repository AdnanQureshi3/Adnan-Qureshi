import React from 'react';
import { SocialLink, SocialLinks } from './SocialLinks';

const Footer: React.FC = () => {
    
    // Using the same social link data structure but rendering only GitHub and LinkedIn 
    // for a minimalist footer look, as the others are in the Hero section.
    const footerLinks: SocialLink[] = [
        {
            href: "https://github.com/janedoe",
            title: "GitHub",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.43 5.43 0 0 0-1.55-3.84 5.06 5.06 0 0 0-.01-4.22s-1.25-.33-4.04 1.25a12.1 12.1 0 0 0-6.26 0c-2.79-1.58-4.04-1.25-4.04-1.25A5.06 5.06 0 0 0 5 4.77a5.43 5.43 0 0 0-1.55 3.84c0 5.46 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        },
        {
            href: "https://linkedin.com/in/janedoe",
            title: "LinkedIn",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        },
    ];

    return (
        <footer className="bg-[#161b22] py-8 border-t border-[#30363d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                <p className="mb-4">&copy; 2025 Adnan Qureshi. All rights reserved.</p>
                
                {/* Minimal Footer Links */}
                <div className="flex justify-center space-x-6 text-2xl mb-4">
                    {footerLinks.map((link) => (
                        <a key={link.title} href={link.href} target="_blank" className="interactable text-gray-400 hover:text-indigo-400 transition duration-300" title={link.title}>
                            {link.icon}
                        </a>
                    ))}
                </div>
                
                <p className="text-sm">Built with Next.js, TypeScript, and Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;