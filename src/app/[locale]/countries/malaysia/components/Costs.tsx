
import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";

export default function Costs({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2  className={`text-2xl mb-6
              font-bold text-[#B10B0B] ${
              isArabic ? "text-right" : "text-left"
            }`}>
        {t("costs.title")}
      </h2>
      <p className={`  text-gray-700 leading-8
        ${ isArabic ? "text-right" : "text-left"
                }`}>
        {t("costs.text")}</p>

      <ul 
        dir={isArabic ? "rtl" : "ltr"}
       className= {`
       list-disc pr-6 mt-4 text-gray-700 leading-7

      ${ isArabic ? "text-right" : "text-left"
        }`}>
        {t.raw("costs.list").map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
