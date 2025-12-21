export interface AnalysisResult {
  PITCH: string;
  FUTURE_FEATURES: string[];
}

export interface PitchResult {
  PITCH: string;
  HIGHLIGHTED_SKILLS: string[];
}

export interface TechStackItem {
    name: string;
    desc: string;
}


export interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  imgSrc: string;
  Github: string;
  Live?: string;
  Demo?: string;
}
