import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function EnglishStudy({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="md:max-w-7xl w-full py-16  md:px-5 rounded-lg"
    >
      <h2
        className={`text-3xl font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("englishStudy.title")}
      </h2>

      <p
        className={`text-gray-700 text-lg leading-8 mt-6 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("englishStudy.text")}
      </p>
    </section>
  );
}
