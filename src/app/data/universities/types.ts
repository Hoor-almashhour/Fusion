// app/data/universities/types.ts
import type { IconType } from "react-icons";

export type University = {
  slug: string;
  name: {
    ar: string;
    en: string;
  };
  city: {
    ar: string;
    en: string;
  };
  logo: string;
  icon: IconType;
};

export type UniversityDetails = University & {

    
  cover: string;
  stats: {
    students: number;
    internationalStudents: number; 
    rankLocal: number;
    rankWorld: number;
  };
  gallery: string[];
  content: {
    overview: { ar: string; en: string };
    location: { ar: string; en: string };
    goals: { ar: string; en: string };
    faculties: { ar: string[]; en: string[] };
    features: { ar: string[]; en: string[] };
    activities: { ar: string[]; en: string[] };
    campus: { ar: string; en: string };
    facilities: { ar: string; en: string };
    housing: { ar: string; en: string };
  };
};

