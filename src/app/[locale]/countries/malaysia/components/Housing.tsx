
import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";

type Point = string;

export default function Housing({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const points = t.raw("housing.onCampus.points") as Point[];

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("housing.title")}
      </h2>

      <p className="text-gray-700 leading-8">{t("housing.text")}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        {t("housing.onCampus.title")}
      </h3>

      <ul className="list-disc pr-6 text-gray-700 leading-7">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        {t("housing.offCampus.title")}
      </h3>

      <p className="text-gray-700 leading-7">
        {t("housing.offCampus.text")}
      </p>
    </section>
  );
}
