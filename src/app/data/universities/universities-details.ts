import { CiLocationOn } from "react-icons/ci";
import { UniversityDetails } from "./types";

export const universitiesDetails: UniversityDetails[] = [
  {
    slug: "istanbul-gelisim-university",
    name: {
      ar: "جامعة اسطنبول جيليشيم",
      en: "Istanbul Gelisim University",
    },
    city: {
      ar: "اسطنبول",
      en: "Istanbul",
    },
    logo: "/logos/Gelisim.png",
    icon: CiLocationOn,
    cover: "/universities/gelisim/cover.jpg",
    description: {
      ar: "جامعة خاصة تأسست عام 2008 وتعد من أكبر الجامعات الخاصة في تركيا...",
      en: "A private university founded in 2008...",
    },
    stats: {
      students: 30000,
      rankLocal: 62,
      rankWorld: 2742,
    },
    gallery: [
      "/universities/gelisim/1.jpg",
      "/universities/gelisim/2.jpg",
      "/universities/gelisim/3.jpg",
    ],
  },
];
