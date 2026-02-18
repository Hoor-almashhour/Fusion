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



