

import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";

export default function EducationSystem({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("educationSystem.title")}
      </h2>
      <p className="text-gray-700 leading-8">{t("educationSystem.text")}</p>

      <ul className="list-disc pr-6 mt-4 text-gray-700 leading-7">
        {t.raw("educationSystem.points").map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
