

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { University } from "@/app/data/universities/types";


import { useLocale} from "next-intl";


type Props = University;

export default function UniversityCard ({
 slug,
  name,
  city,
  logo,
  icon: Icon,
}: Props) {

     const t = useTranslations("universities");
     
      const locale = useLocale() as "ar" | "en";
  return (
         <div className="flex-shrink-0 w-full
          md:w-[337px] rounded-2xl border shadow-lg p-6 flex flex-col items-center justify-between h-[320px] bg-white mx-auto">
            <img
                src={logo}
                alt={name[locale]}
                className="object-contain mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold text-[#F9680E] mb-2">
                 {name[locale]}
            </h3>
            <div className="flex items-center justify-center gap-1.5">
            <p className="text-gray-700 uppercase">
                {city[locale]}
            </p>
            <span className="text-gray-700 text-lg"><Icon /></span>
            </div>

            <div className="flex flex-row justify-center items-center w-full mt-6">
            <Link
                href="https://wa.me/905318598487"
                className="bg-[#B10B0B] text-white py-3 sm:py-4 w-full sm:w-1/2 rounded-full
                 hover:bg-[#8a0a0a] transition"
            >
             {t("register")}
            </Link>
            </div>
        </div>
    );
}
