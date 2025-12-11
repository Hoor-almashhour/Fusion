"use client";
import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";

export default function Requirements() {
      const t = useTranslations("countries.malaysia");
      const locale = useLocale();
    const isArabic = locale === "ar";
  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("requirements.title")}
      </h2>

      <ul className="list-disc pr-6 text-gray-700 leading-7">
        {t.raw("requirements.items").map((i: string, idx: number) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
