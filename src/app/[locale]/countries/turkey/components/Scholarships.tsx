import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function Scholarships({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const benefits = t.raw("scholarships.benefits") as string[];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="md:max-w-7xl w-full py-16 md:px-5 md:mx-3 bg-white"
    >
      <h2
        className={`text-2xl
            font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("scholarships.title")}
      </h2>

      <h3 className="text-xl font-semibold text-[#F9680E] mt-4">
        {t("scholarships.program")}
      </h3>

      <p
        className={`text-gray-700 mt-4 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("scholarships.description")}
      </p>

      <ul
        className={`mt-6 space-y-2 list-disc list-inside text-gray-700 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p
        className={`mt-6 text-sm text-gray-600 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("scholarships.note")}
      </p>
    </section>
  );
}
