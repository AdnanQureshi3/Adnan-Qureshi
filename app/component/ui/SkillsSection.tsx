import React from 'react';
import { TechStackItem } from '../../types';

interface SkillsSectionProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    techStackData: Record<string, TechStackItem[]>;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ activeTab, setActiveTab, techStackData }) => {
    
    const tabs = [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend & Database' },
        { id: 'languages', label: 'Languages & Tools' },
        { id: 'ai_genai', label: 'AI / GenAI' },
    ];
    
    return (
        <section id="skills" className="section-padding border-t border-[#30363d]">
            <h2 className="text-4xl font-bold text-center mb-12">My Technical Stack</h2>
            
            {/* Tab Controls */}
            <div className="flex justify-center flex-wrap space-x-2 md:space-x-8 mb-10 border-b border-[#30363d] max-w-4xl mx-auto">
                {tabs.map(({ id, label }) => (
                    <button 
                        key={id}
                        data-tab={id} 
                        onClick={() => setActiveTab(id)}
                        className={`tab-button interactable py-3 px-6 text-sm font-medium border-b-2 transition duration-300 ${activeTab === id ? 'active-tab' : 'text-gray-400 border-transparent hover:border-indigo-500'}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div id="tab-content" className="max-w-4xl mx-auto p-4 md:p-8 card rounded-xl">
                {techStackData[activeTab] && (
                    <div id={activeTab} className="tab-pane grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {techStackData[activeTab].map(item => (
                            <div key={item.name} className="tech-item p-3 rounded-lg text-center transition duration-300">
                                <p className="font-semibold">{item.name}</p>
                                <span className="text-xs text-indigo-400">{item.desc}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SkillsSection;