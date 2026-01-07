import React from 'react';
import { ProjectData } from '../../types';

interface ProjectsSectionProps {
  projectData: ProjectData[];
  theme: 'light' | 'dark';
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectData, theme }) => {
  const linkBaseClasses =
    "flex items-center space-x-1 px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] whitespace-nowrap";

  const githubLinkClasses =
    theme === 'light'
      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-400/40"
      : "bg-indigo-700 text-white hover:bg-indigo-600 shadow-md shadow-indigo-500/50";

  const secondaryLinkClasses =
    theme === 'light'
      ? "border border-indigo-400 text-indigo-700 hover:bg-indigo-100"
      : "border border-indigo-700/50 text-indigo-300 hover:bg-indigo-900/50 hover:text-white";

  const getIcon = (type: 'Live' | 'Code') => {
    const props: React.SVGProps<SVGSVGElement> = {
      width: 16,
      height: 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    return type === 'Live' ? (
      <svg {...props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ) : (
      <svg {...props}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  };

  return (
    <section
      id="projects"
      className={`section-padding border-t ${
        theme === 'light'
          ? "bg-gray-50 text-black border-gray-300"
          : "bg-transparent text-white border-[#30363d]"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div
            key={project.title}
            className={`rounded-xl overflow-hidden border transition-all duration-500 transform hover:-translate-y-1
              ${
                theme === 'light'
                  ? "bg-white border-gray-300 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgba(79,70,229,0.18)]"
                  : "bg-[#0d1117] border-[#30363d] shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.25)]"
              }
            `}
          >
            <img
              src={project.imgSrc}
              alt={`${project.title} Mockup`}
              className={`w-full h-48 object-cover border-b ${
                theme === 'light' ? "border-gray-300" : "border-[#30363d]"
              }`}
            />

            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p
                className={`text-sm mb-4 ${
                  theme === 'light' ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full border
                      ${
                        theme === 'light'
                          ? "bg-indigo-50 text-indigo-700 border-indigo-300"
                          : "bg-indigo-900/40 text-indigo-300 border-indigo-700/50"
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className={`flex flex-wrap gap-3 pt-4 border-t ${
                  theme === 'light' ? "border-gray-300" : "border-[#30363d]"
                }`}
              >
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
