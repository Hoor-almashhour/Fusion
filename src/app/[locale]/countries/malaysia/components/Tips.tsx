import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

type TipItem = {
  title: string;
  text: string;
};

export default function Tips({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const tips = t.raw("tips.items") as TipItem[];

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      
      <h2
        className={`text-2xl mb-6 font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("tips.title")}
      </h2>

     
      <ul
        dir={isArabic ? "rtl" : "ltr"}
        className={`list-disc pr-6 text-gray-700 leading-7 space-y-2 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {tips.map((tip, idx) => (
          <li key={idx}>
            <strong className="text-gray-900">
              {tip.title}
              {isArabic ? " :" : ": "}
            </strong>
            {tip.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
