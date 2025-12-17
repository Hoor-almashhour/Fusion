import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function Requirements({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const items = t.raw("requirements.items") as string[];

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      
     
      <h2
        className={`text-2xl mb-6 font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("requirements.title")}
      </h2>

     
      <ul
        dir={isArabic ? "rtl" : "ltr"}
        className={`list-disc pr-6 text-gray-700 leading-7 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
