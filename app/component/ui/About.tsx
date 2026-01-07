


import React, { useState, useCallback } from 'react';
import { getTailoredPitch } from '../../lib/gemini-api';
import { PitchResult } from '../../types';

interface AboutSectionProps {
    theme: 'light' | 'dark';
}


const developerBio = `
Adnan Qureshi is a final-year Computer Science student skilled in the MERN stack, cloud computing, and AI-powered applications. He has built production-ready platforms like UpChain and FileMan, integrating real-time systems, AWS S3, and agentic AI workflows. Adnan is strong in DSA, OS, DBMS, and problem-solving, with a focus on clean, scalable engineering. He is motivated by growth, stability, and building meaningful products. Currently, he is preparing for software engineering roles with an interest in startups and remote opportunities.
`;
const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
    const [pitchRole, setPitchRole] = useState('');
    const [pitchResult, setPitchResult] = useState<PitchResult | null>(null);
    const [isPitchLoading, setIsPitchLoading] = useState(false);
    const [pitchError, setPitchError] = useState<string | null>(null);

    const handlePitchGeneration = useCallback(async () => {
        const role = pitchRole.trim();
        setPitchError(null);
        setPitchResult(null);

        if (!role) {
            setPitchError("Please enter a specific job role to tailor the pitch.");
            return;
        }

        setIsPitchLoading(true);

        try {
            const result = await getTailoredPitch(role, developerBio);
            setPitchResult(result);
        } catch (error: any) {
            setPitchError("Error generating pitch: " + error.message);
            console.error("Failed to fetch Gemini response for pitch:", error);
        } finally {
            setIsPitchLoading(false);
        }
    }, [pitchRole]);

    return (
        <section
  id="about"
  className={`section-padding border-t ${
    theme === 'light'
      ? 'bg-gray-50 text-black border-gray-300'
      : 'bg-transparent text-white border-[#30363d]'
  }`}
>
  <h2 className="text-4xl font-bold text-center mb-12">
    Who I Am
  </h2>

  <div
    className={`max-w-4xl mx-auto p-8 rounded-xl border ${
      theme === 'light'
        ? 'bg-white border-gray-300 shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
        : 'bg-[#0d1117] border-[#30363d] shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
    }`}
  >
    <p
      className={`text-lg mb-4 ${
        theme === 'light' ? 'text-gray-700' : 'text-gray-400'
      }`}
    >
      {developerBio.split('. ')[0]}.
    </p>

    <p
      className={`text-lg ${
        theme === 'light' ? 'text-gray-700' : 'text-gray-400'
      }`}
    >
      {developerBio.split('. ').slice(1).join('. ')}
    </p>

    {/* AI PITCH */}
    <div
      className={`mt-8 pt-8 border-t space-y-4 ${
        theme === 'light' ? 'border-gray-300' : 'border-[#30363d]'
      }`}
    >
      <h3 className="text-2xl font-bold flex items-center">
        <span className="mr-2 text-indigo-500">✨</span>
        Tailor My Pitch (AI Assistant)
      </h3>

      <p
        className={`text-sm ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
        }`}
      >
        Enter a specific job role (e.g., "Cloud Architect") to see an instant,
        customized summary of how my skills align.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter target role, e.g., 'Gen AI Engineer'"
          value={pitchRole}
          onChange={(e) => setPitchRole(e.target.value)}
          className={`interactable grow px-4 py-2 rounded-lg border transition duration-300
            ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-black focus:border-indigo-500'
                : 'bg-[#010409] border-[#30363d] text-white focus:border-indigo-500'
            }
          `}
        />

        <button
          onClick={handlePitchGeneration}
          disabled={isPitchLoading}
          className="interactable px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
        >
          {isPitchLoading ? 'Generating...' : 'Generate Pitch'}
        </button>
      </div>

      <div
        className={`mt-4 p-4 rounded-lg border ${
          pitchResult || pitchError || isPitchLoading ? 'block' : 'hidden'
        } ${
          theme === 'light'
            ? 'bg-gray-50 border-gray-300'
            : 'bg-[#0d1117] border-[#30363d]'
        }`}
      >
        {isPitchLoading && (
          <div className="flex flex-col items-center py-4">
            <div className="loader mb-2 border-gray-400 border-t-indigo-500"></div>
            <p
              className={`text-sm ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              Crafting personalized pitch…
            </p>
          </div>
        )}

        {pitchError && !isPitchLoading && (
          <p className="text-red-500 text-center p-2 bg-red-500/10 rounded-lg">
            <span className="font-bold">Error:</span> {pitchError}
          </p>
        )}

        {pitchResult && !isPitchLoading && (
          <>
            <p
              className={`text-lg font-medium ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              {pitchResult.PITCH}
            </p>
            <p className="text-sm text-indigo-500 mt-2">
              Skills Highlighted: {pitchResult.HIGHLIGHTED_SKILLS.join(' | ')}
            </p>
          </>
        )}
      </div>
    </div>
  </div>
</section>

     
    );
};

export default AboutSection;