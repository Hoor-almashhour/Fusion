import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function UniversitiesTypes({ t }: TProps) {
  const govReq = (t.raw("universitiesTypes.government.requirements") as string[]) ?? [];
  const privateReq = (t.raw("universitiesTypes.private.requirements") as string[]) ?? [];

  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="md:max-w-7xl w-full py-16 md:px-5 md:mx-3 bg-white" dir={isArabic ? "rtl" : "ltr"}>

      <h2 className={`text-2xl
         font-bold text-[#B10B0B] ${isArabic ? "text-right" : "text-left"}`}>
        {t("universitiesTypes.title")}
      </h2>

      <p className={`text-gray-700 text-lg mt-4 ${isArabic ? "text-right" : "text-left"}`}>
        {t("universitiesTypes.intro")}
      </p>

    
      <div className={`mt-10 ${isArabic ? "text-right" : "text-left"}`}>
        <h3 className="text-2xl font-semibold text-[#F9680E]">
          {t("universitiesTypes.government.title")}
        </h3>
        <p className="mt-2 text-gray-700">
          {t("universitiesTypes.government.description")}
        </p>

        <ul className={`mt-4 space-y-2 text-gray-700 list-disc list-inside ${isArabic ? "text-right" : "text-left"}`}>
          {govReq.map((item, i) => (
            <li key={i} className={`${isArabic ? "text-right" : "text-left"}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>

   
      <div className={`mt-10 ${isArabic ? "text-right" : "text-left"}`}>
        <h3 className="text-2xl font-semibold text-[#F9680E]">
          {t("universitiesTypes.private.title")}
        </h3>
        <p className="mt-2 text-gray-700">
          {t("universitiesTypes.private.description")}
        </p>

        <ul className={`mt-4 space-y-2 text-gray-700 list-disc list-inside ${isArabic ? "text-right" : "text-left"}`}>
          {privateReq.map((item, i) => (
            <li key={i} className={`${isArabic ? "text-right" : "text-left"}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
