import React from 'react';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme, activeSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    
    const renderNavLinks = (isMobile: boolean = false) => {
        const links = [
          { id: 'intro', label: 'Intro' },
          { id: 'about', label: 'About' },
          { id: 'education', label: 'Education' },
          { id: 'skills', label: 'Tech Stack' },
          { id: 'projects', label: 'Projects' },
          { id: 'contact', label: 'Contact' },
        ];

        // Updated colors for better light mode contrast while keeping UI structure
        const baseClasses = "interactable transition duration-300 font-medium";
        const themeClasses = theme === 'light' 
            ? "text-slate-700 hover:text-indigo-600" 
            : "text-gray-300 hover:text-indigo-400";
        
        const desktopClasses = "px-3 py-2 rounded-lg";
        const mobileClasses = `block px-4 py-3 border-b ${theme === 'light' ? 'border-gray-200' : 'border-[#30363d]'}`;

        return links.map(({ id, label }) => {
          const isActive = activeSection === id;
          const activeClasses = isActive 
            ? (theme === 'light' ? '!text-indigo-600 bg-indigo-50' : '!text-indigo-400 bg-white/5') 
            : '';

          const classNames = `${baseClasses} ${themeClasses} ${isMobile ? mobileClasses : desktopClasses} ${activeClasses}`;
          
          return (
            <a 
              key={id} 
              href={`#${id}`} 
              className={classNames}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          );
        });
    };
    
    return (
        <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
            theme === 'light' 
            ? 'bg-white/90 border-gray-200 shadow-sm' 
            : 'bg-[#0d1117]/95 border-[#30363d]'
        }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
                <a href="#intro" className={`interactable text-2xl font-bold transition duration-300 ${
                    theme === 'light' ? 'text-indigo-600 hover:text-indigo-700' : 'text-indigo-400 hover:text-indigo-300'
                }`}>
                    My Portfolio
                </a>
                
                {/* Desktop Navigation */}
                <div className="space-x-4 hidden md:flex" id="desktop-nav">
                    {renderNavLinks()}
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle Button */}
                    <button 
                        id="theme-toggle" 
                        onClick={toggleTheme} 
                        className={`interactable p-2 rounded-md transition duration-300 ${
                            theme === 'light' ? 'text-slate-700 hover:bg-gray-100' : 'text-gray-300 hover:bg-white/10'
                        }`}
                    >
                    {theme === 'light' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    )}
                    </button>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        id="menu-toggle" 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className={`interactable md:hidden p-2 rounded-md transition duration-300 ${
                            theme === 'light' ? 'text-slate-700' : 'text-gray-300'
                        }`}
                    >
                    {!isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
                    )}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div id="mobile-menu" className={`absolute top-full left-0 w-full border-t md:hidden shadow-xl transition-colors duration-300 ${
                        theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#0d1117] border-[#30363d]'
                    }`}>
                        {renderNavLinks(true)}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navigation;