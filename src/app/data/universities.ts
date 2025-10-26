
import type { IconType } from "react-icons";
import { CiLocationOn } from "react-icons/ci";

export type University = {
  name: string;
  city: string;
  logo: string;
  icon: IconType; 
};

export const universities: University[] = [
    { name: "جامعة كولتور", city: "Istanbul", logo: "/logos/Kultur.png", icon: CiLocationOn },
    { name: "جامعة تيد", city: "Ankara", logo: "/logos/Ted.webp", icon: CiLocationOn },
    { name: "جامعة اسطنبول التجارية", city: "Istanbul", logo: "/logos/tic.avif", icon: CiLocationOn },
    { name: "جامعة بهتشه شهير", city: "Istanbul", logo: "/logos/Bau.webp", icon: CiLocationOn },
    { name: "جامعة أوزيجين", city: "Istanbul", logo: "/logos/yeni.jpg", icon: CiLocationOn },
    { name: "جامعة اسطنبول أيدن", city: "Istanbul", logo: "/logos/aydin.png", icon: CiLocationOn },
    { name: "جامعة اسطنبول جيليشم", city: "Istanbul", logo: "/logos/Gelisim.png", icon: CiLocationOn },
    { name: " اسطنبول خليج", city: "Istanbul", logo: "/logos/halic.png", icon: CiLocationOn },
    { name: "جامعة ايشيك", city: "Istanbul", logo: "/logos/isik.webp", icon: CiLocationOn },
    { name: "جامعة استينيا", city: "Istanbul", logo: "/logos/istinye.png", icon: CiLocationOn },
    { name: "جامعة اسطنبول ميديبول", city: "Istanbul", logo: "/logos/medipol.jpg", icon: CiLocationOn },
    { name: "جامعة أوزيجين", city: "Istanbul", logo: "/logos/ozyegin.jpg", icon: CiLocationOn },
    { name: "جامعة اسكودار", city: "Istanbul", logo: "/logos/uskudar.png", icon: CiLocationOn },
    { name: "جامعة يدي تبه", city: "Istanbul", logo: "/logos/yeditepe.jpg", icon: CiLocationOn },
    { name: "جامعة اسطنبول يني يوزيل", city: "Istanbul", logo: "/logos/yeni.jpg", icon: CiLocationOn },

];
