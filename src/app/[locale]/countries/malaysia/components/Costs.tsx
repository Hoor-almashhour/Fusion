
import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";

export default function Costs({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("costs.title")}
      </h2>
      <p className="text-gray-700 leading-7">{t("costs.text")}</p>

      <ul className="list-disc pr-6 mt-4 text-gray-700 leading-7">
        {t.raw("costs.list").map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
