
import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";
import EducationSystem from "./EducationSystem";
import Costs from "./Costs";
import Housing from "./Housing";
import Requirements from "./Requirements";
import Tips from "./Tips";

type AdvantageItem = {
  title: string;
  text: string;
};

export default function Advantages({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";
    const items = t.raw("advantages.items") as AdvantageItem[];

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
    

      <div className="bg-white  border-t-2 border-[#F9680E] shadow-2xl rounded-lg py-16 
         px-6 md:px-5 md:max-w-7xl mx-4">
            <h2  className={`text-2xl
              font-bold text-[#B10B0B] ${
              isArabic ? "text-right" : "text-left"
            }`}>
              {t("advantages.title")}
            </h2>
        {items.map((item: AdvantageItem, i: number) => (
          <div key={i} className={`p-4 
            ${isArabic ? "text-right" : "text-left"
            }`}>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2 leading-7">{item.text}</p>
          </div>
        ))}
          <EducationSystem  t={t}    />
           <Costs t={t}     />
           <Housing t={t}    />
           <Requirements t={t}     />
           <Tips t={t}   />
      </div>
     
    </section>
  );
}
