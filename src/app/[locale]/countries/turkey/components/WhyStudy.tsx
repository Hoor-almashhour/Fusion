
import { TProps } from "@/app/types/translation";
import Intro from "./Intro";
import TurkeyInfo from "./TurkeyInfo";
import EnglishStudy from "./EnglishStudy";
import PrivateUniversities from "./PrivateUniversities";
import Postgraduate from "./Postgraduate";
import TurkeyCosts from "./TurkeyCosts";
import BulletSection from "./BulletSection";
import EducationSystem from "./EducationSystem";
import UniversitiesTypes from "./UniversitiesTypes";
import PrivateUniversitiesAdvantages from "./PrivateUniversitiesAdvantages";
import Housing from "./Housing";
import { useLocale } from "next-intl";

interface Reason {
  title: string;
  text: string;
}

export default function WhyStudy({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const reasons = t.raw("reasons") as Reason[];

  return (
    <section
        dir={isArabic ? "rtl" : "ltr"}
        className="bg-white  border-t-2 border-[#F9680E] shadow-2xl rounded-lg py-16 
         px-6 md:px-5 md:max-w-7xl mx-4"
      >
       <div className="max-w-7xl mx-auto">
           <Intro t={t} />
        <h2
          className={`text-3xl font-bold text-[#B10B0B] ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {t("whyStudyTitle")}
        </h2>

        <p
          className={`text-gray-700 text-lg leading-8 mt-6 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {t("whyStudyDesc")}
        </p>


       <div className="space-y-8 mt-6" dir={isArabic ? "rtl" : "ltr"}>
          {reasons.map((item, index) => (
            <div key={index} className={isArabic ? "text-right" : "text-left"}>
              <div className={`flex items-start gap-2 }`}>
                <div  dir={isArabic ? "rtl" : "ltr"}
                className="text-[#F9680E] w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}.
                </div>
                <h3 
                className="text-xl font-semibold text-[#B10B0B]">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-7 text-base mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <TurkeyInfo  t={t} />
        <EducationSystem t={t} />
        <UniversitiesTypes t={t} />
        <PrivateUniversitiesAdvantages t={t} />
        <Housing t={t} />
        <EnglishStudy t={t} />
        <PrivateUniversities  t={t}  />
        <Postgraduate t={t} />
        <TurkeyCosts t={t} />
        <BulletSection t={t} titleKey="PreparationSteps.title" listKey="PreparationSteps.steps" />
        <BulletSection t={t} titleKey="TravelTips.title" listKey="TravelTips.tips" />
      
       </div>
     
    </section>
  );
}
