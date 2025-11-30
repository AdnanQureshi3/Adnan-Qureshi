import React from 'react';

interface AboutSectionProps {
    theme: 'light' | 'dark';
}

const developerBio = `
Adnan Qureshi is a final-year Computer Science student skilled in the MERN stack, cloud computing, and AI-powered applications. He has built production-ready platforms like UpChain and FileMan, integrating real-time systems, AWS S3, and agentic AI workflows. Adnan is strong in DSA, OS, DBMS, and problem-solving, with a focus on clean, scalable engineering. He is motivated by growth, stability, and building meaningful products. Currently, he is preparing for software engineering roles with an interest in startups and remote opportunities.
`;

const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
    const sentences = developerBio.trim().split('. ');

    return (
        <section id="about" className="section-padding border-t border-[#30363d]">
            <h2 className="text-4xl font-bold text-center mb-12">Who I Am</h2>

            <div className="max-w-4xl mx-auto card p-8 rounded-xl shadow-2xl">
                <p className="text-lg text-gray-400 mb-4">
                    {sentences[0]}.
                </p>

                <p className="text-lg text-gray-400">
                    {sentences.slice(1).join('. ')}
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
