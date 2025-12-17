import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function Sources({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const sources = t.raw("sources.list") as string[];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="md:max-w-7xl w-full py-16 md:px-5 md:mx-3 "
    >
      <h2
        className={`text-2xl
            font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("sources.title")}
      </h2>

      <ul
        className={`mt-6 space-y-2 list-disc list-inside text-gray-700 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {sources.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
