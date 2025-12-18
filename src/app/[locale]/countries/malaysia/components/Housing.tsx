import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

type HousingType = {
  title: string;
  text?: string;
  points?: string[];
};

export default function Housing({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const housingTypes = t.raw("housing.types") as HousingType[];

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      
      {/* العنوان الرئيسي */}
      <h2
        className={`text-2xl mb-6 font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("housing.title")}
      </h2>

      {/* النص التعريفي */}
      <p
        className={`text-gray-700 leading-8 mb-6 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("housing.text")}
      </p>

      {/* أنواع السكن */}
      {housingTypes.map((type, index) => (
        <div key={index} className="mb-6">
          
          <h3
            className={`text-xl font-semibold mb-2 text-[#F9680E] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {type.title}
          </h3>

          {/* في حال كان نص */}
          {type.text && (
            <p
              className={`text-gray-700 leading-7 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {type.text}
            </p>
          )}

          {/* في حال كان نقاط */}
          {type.points && (
            <ul
              dir={isArabic ? "rtl" : "ltr"}
              className={`list-disc pr-6 text-gray-700 leading-7 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {type.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
