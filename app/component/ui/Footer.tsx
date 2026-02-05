import React from 'react';
import { socialLinks } from '@/app/lib/data';

const Footer: React.FC = () => {
    
  
    

    return (
        <footer className="bg-[#161b22] py-8 border-t border-[#30363d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                
                {/* Minimal Footer Links */}
                <div className="flex justify-center gap-6 mb-4 text-2xl">
                  {socialLinks.map(({ name, icon: Icon, url }) => (
                      <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-indigo-500"
                      aria-label={name}
                      >
                      <Icon />
                    </a>
                  ))}
                </div>
                  <p className="mb-4">&copy; 2025 Adnan Qureshi. All rights reserved.</p>
                
                <p className="text-sm">Built with Next.js, TypeScript, and Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;