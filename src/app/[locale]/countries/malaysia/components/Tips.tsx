
import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";

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
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("tips.title")}
      </h2>

      <ul className="list-disc pr-6 text-gray-700 leading-7">
        {tips.map((tip, idx) => (
          <li key={idx}>
            <strong>{tip.title}: </strong>
            {tip.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
