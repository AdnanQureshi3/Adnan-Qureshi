import React from 'react';
import { ProjectData } from '../../types';

interface ProjectsSectionProps {
  projectData: ProjectData[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectData }) => {
  const linkBaseClasses =
    "flex items-center space-x-1 px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md whitespace-nowrap";
  const githubLinkClasses =
    "bg-indigo-700 text-white hover:bg-indigo-600 shadow-indigo-500/50";
  const secondaryLinkClasses =
    "text-indigo-300 border border-indigo-700/50 hover:bg-indigo-900/50 hover:text-white";

  const getIcon = (type: 'Live' | 'Code') => {
    const svgProps: React.SVGProps<SVGSVGElement> = {
      width: 16,
      height: 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    if (type === 'Live') {
      return (
        <svg {...svgProps}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
    }

    return (
      <svg {...svgProps}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  };

  return (
    <section id="projects" className="section-padding border-t border-[#30363d] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div
            key={project.title}
            className="bg-linear-to-br from-[#12161b] to-[#0a0c0e] rounded-xl overflow-hidden border border-[#30363d] transition duration-500 hover:border-indigo-500/70 shadow-xl hover:shadow-indigo-500/15 transform hover:-translate-y-1"
          >
            <img
              src={project.imgSrc}
              alt={`${project.title} Mockup`}
              className="w-full h-48 object-cover border-b border-[#30363d]"
              onError={(e) =>
                (e.currentTarget.src = `https://placehold.co/600x400/273a5a/ffffff?text=${project.title.replace(/\s/g, '+')}`)
              }
            />

            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description} 
        
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                    <span
                    key={tech}
                    className="bg-indigo-900/40 text-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded-full border border-indigo-700/50"
                    >
                    {tech}
                  </span>
                ))}
              </div>

      
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#30363d] ">
    
                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkBaseClasses} ${githubLinkClasses}`}
                >
                  {getIcon('Code')}
                  <span>GitHub</span>
                </a>

                {project.Live && (
                  <a
                    href={project.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBaseClasses} ${secondaryLinkClasses}`}
                  >
                    {getIcon('Live')}
                    <span>Live</span>
                  </a>
                )}

                {project.Demo && (
                  <a
                    href={project.Demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBaseClasses} ${secondaryLinkClasses}`}
                  >
                    {getIcon('Live')}
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
