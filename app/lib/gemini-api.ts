import { AnalysisResult, PitchResult } from "../types";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;


export async function exponentialBackoffFetch(url: string, options: RequestInit, maxRetries = 5): Promise<Response> {
  if (!apiKey) {
    throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is missing from environment variables.");
  }

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      
      const errorText = await response.text();
      console.error(`API attempt ${i + 1} failed:`, errorText);

      if (response.status !== 429 && response.status < 500) {
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }
    } catch (error: any) {
      if (i === maxRetries - 1) throw error;
    }
    const delay = Math.pow(2, i) * 1000 + Math.random() * 50;
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  throw new Error('API call failed after retries');
}

export async function getProjectAnalysis(projectTitle: string, projectDescription: string): Promise<AnalysisResult> {
    const payload = {
        contents: [{ parts: [{ text: `Analyze this project: ${projectTitle}. Desc: ${projectDescription}` }] }],
        systemInstruction: { parts: [{ text: "You are an expert product manager. Provide a one-sentence PITCH and 3 FUTURE_FEATURES. Respond only in strict JSON." }] },
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    "PITCH": { "type": "STRING" },
                    "FUTURE_FEATURES": { "type": "ARRAY", "items": { "type": "STRING" } }
                },
                required: ["PITCH", "FUTURE_FEATURES"]
            }
        },
    };

    // Updated to stable model name
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await exponentialBackoffFetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    const result = await response.json();
    const text = result.candidates[0].content.parts[0].text;
    return JSON.parse(text);
}

export async function getTailoredPitch(role: string, developerBio: string): Promise<PitchResult> {

    console.log("code chala");
    console.log(process.env.NEXT_PUBLIC_API_URL);

    const payload = {
        contents: [{ parts: [{ text: `Role: ${role}. Bio: ${developerBio}` }] }],
        systemInstruction: { parts: [{ text:`
Use this prompt text:

You are writing in FIRST PERSON as a sharp, confident software developer with a dry sense of humor.

Task: Given a ROLE and a BIO.

CASE 1 — If the role matches software/tech:

* Write a strong professional pitch (60–80 words).
* Provide exactly 3 HIGHLIGHTED_SKILLS relevant to the role.

CASE 2 — If the role is clearly unrelated to software/tech (cleaner, driver, waiter, etc.):

* Write a longer savage roast (60–90 words) in first person.
* Talk directly to the person who suggested the role.
* Be witty, bold, slightly arrogant, and funny.
* No poetry, no metaphors, no corporate tone.
* Make it sound like a smart developer roasting politely but confidently.
* Do NOT mention the bio.
* Still provide 3 real tech HIGHLIGHTED_SKILLS.

Roast style examples (match this tone and length):
"Suggesting this role to me is honestly impressive. I design scalable systems, write production-grade code, and work with cloud and AI workflows. If you’re looking for someone to handle chores, you’re in the wrong inbox. If you need complex software built, now we’re talking."

"I appreciate the creativity, but I’m a software engineer, not a backup plan for random jobs. My work revolves around code, architecture, and systems, not tasks that require zero technical thinking. This is very far from what I do."

STRICT RULES:

* Output ONLY valid JSON.
* First person only.
* No extra explanation.

` }] },
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    "PITCH": { "type": "STRING" },
                    "HIGHLIGHTED_SKILLS": { "type": "ARRAY", "items": { "type": "STRING" } }
                },
                required: ["PITCH", "HIGHLIGHTED_SKILLS"]
            }
        },
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const response = await exponentialBackoffFetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    const result = await response.json();
    const text = result.candidates[0].content.parts[0].text;
    return JSON.parse(text);
}