import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

type Point = string;

export default function Housing({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const onCampusPoints = t.raw("housing.onCampus.points") as Point[];

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
        className={`text-gray-700 leading-8 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("housing.text")}
      </p>

      {/* السكن الجامعي */}
      <h3
        className={`text-xl font-semibold mt-6 mb-2 text-[#F9680E] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("housing.onCampus.title")}
      </h3>

      <ul
        dir={isArabic ? "rtl" : "ltr"}
        className={`list-disc pr-6 text-gray-700 leading-7 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {onCampusPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* السكن خارج الجامعة */}
      <h3
        className={`text-xl font-semibold mt-6 mb-2 text-[#F9680E] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("housing.offCampus.title")}
      </h3>

      <p
        className={`text-gray-700 leading-7 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("housing.offCampus.text")}
      </p>
    </section>
  );
}
