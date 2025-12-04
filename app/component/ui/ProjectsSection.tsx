import React from 'react';
import { ProjectData } from '../../types';

interface ProjectsSectionProps {
    projectData: ProjectData[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectData }) => {
    return (
        <section id="projects" className="section-padding border-t border-[#30363d]">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {projectData.map((project) => (
                    <div key={project.title} className="project-card card rounded-xl overflow-hidden transition duration-500">
                        <img className="w-full h-48 object-cover" 
                            src={project.imgSrc} 
                            alt={`${project.title} Mockup`} 
                            onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/273a5a/ffffff?text=${project.title.replace(/\s/g, '+')}`)}
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map(techItem => (
                                    <span key={techItem} className="bg-indigo-900/50 text-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                           
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;