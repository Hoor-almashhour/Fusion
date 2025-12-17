import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function Postgraduate({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const description = t.raw("postgraduate.description") as string[];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="md:max-w-7xl w-full  py-16  md:px-5 md:mx-3 rounded-lg"
    >
      <h2
        className={`text-2xl
            font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("postgraduate.title")}
      </h2>

      <p
        className={`text-gray-700 mt-4 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("postgraduate.duration")}
      </p>

      <ul
        className={`mt-6 space-y-3 text-gray-700 list-disc list-inside ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {description.map((item, index) => (
          <li key={index} className="leading-7">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
