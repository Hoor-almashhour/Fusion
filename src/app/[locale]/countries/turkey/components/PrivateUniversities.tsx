import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function PrivateUniversities({ t }: TProps) {
    const universities = t.raw("privateUniversities.list") as string[];
    const locale = useLocale();
    const isArabic = locale === "ar";
  return (
    <section
        dir={isArabic ? "rtl" : "ltr"}
        className="md:max-w-7xl w-full  py-16 md:px-5 md:mx-3">
            
      <h2 className={`text-3xl font-bold text-[#B10B0B] ${
            isArabic ? "text-right" : "text-left"
       } `} >
        {t("privateUniversities.title")}
      </h2>

      <ul
        dir={isArabic ? "rtl" : "ltr"}
        className={`grid md:grid-cols-2 gap-4 mt-8 list-disc list-inside ${
            isArabic ? "text-right" : "text-left"
        }`}
        >
        {universities.map((name, index) => (
            <li key={index} className={`${isArabic ? "text-right" : "text-left"} text-gray-700`}>
            {name}
            </li>
        ))}
        </ul>

        <div className={`mt-8 ${isArabic ? "text-right" : "text-left"}`}>
        <button className="bg-[#F9680E] text-white px-6 py-3 rounded-lg font-semibold">
            {t("privateUniversities.cta")}
        </button>
        </div>

    </section>
  );
}
