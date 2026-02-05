import React from 'react';

// Define the structure for a single social link
export interface SocialLink {
    href: string;
    title: string;
    icon: React.ReactNode;
}

// Data array for all links
const links: SocialLink[] = [
    {
        href: "https://github.com/adnanquresh3",
        title: "GitHub",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.43 5.43 0 0 0-1.55-3.84 5.06 5.06 0 0 0-.01-4.22s-1.25-.33-4.04 1.25a12.1 12.1 0 0 0-6.26 0c-2.79-1.58-4.04-1.25-4.04-1.25A5.06 5.06 0 0 0 5 4.77a5.43 5.43 0 0 0-1.55 3.84c0 5.46 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
    },
    {
        href: "https://leetcode.com/adnanquresh61",
        title: "LeetCode",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.895 21.614l-11.895-4.482v-9.264l11.895 4.482v9.264zm-1.895 2.386l-12-4.522v-9.355l12-4.523v18.399zm10-14.355l-10 3.774v-5.264l10-3.774v5.264zm-10 10.579l10-3.774v-5.264l-10 3.774v5.264zM24 8.718l-12 4.523v-9.395l12-4.523v9.395z"/></svg>
    },
    {
        href: "https://www.codechef.com/users/itzzs_adnan",
        title: "CodeChef",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10a10 10 0 0 0-16.7-5.5L2 14v8h20v-8a10 10 0 0 0-6-9z"/><path d="M10 14h4v8h-4zM6 14h4v4H6zM14 14h4v4h-4z"/></svg>
    },
    {
        href: "https://www.linkedin.com/in/adnan-qureshi-73b86624a/",
        title: "LinkedIn",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    },
];

export const SocialLinks: React.FC = () => {
    return (
        <div className="flex justify-center space-x-6 text-2xl mb-8">
            {links.map((link) => (
                <a key={link.title} href={link.href} target="_blank" className="interactable text-gray-400 hover:text-indigo-400 transition duration-300" title={link.title}>
                    {link.icon}
                </a>
            ))}
        </div>
    );
};