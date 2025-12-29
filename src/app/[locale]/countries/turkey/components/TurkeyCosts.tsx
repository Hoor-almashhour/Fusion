import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function TurkeyCosts({ t }: TProps) {
  const details = t.raw("costs.details") as string[];
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="md:max-w-7xl w-full  py-16  md:px-5 md:mx-3" dir={isArabic ? "rtl" : "ltr"}>

      <h2 className={`text-3xl
         font-bold text-[#B10B0B] ${isArabic ? "text-right" : "text-left"}`}>
        {t("costs.title")}
      </h2>

      <p className={`text-gray-700 mt-4 ${isArabic ? "text-right" : "text-left"}`}>
        {t("costs.text")}
      </p>

      <ul className={`mt-6 space-y-3 text-gray-700 list-disc list-inside ${isArabic ? "text-right" : "text-left"}`}>
        {details.map((item, index) => (
          <li key={index} className={`${isArabic ? "text-right" : "text-left"}`}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
