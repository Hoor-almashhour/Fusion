"use client";
import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";

type AdvantageItem = {
  title: string;
  text: string;
};

export default function Advantages() {
    const t = useTranslations("countries.malaysia");
    const locale = useLocale();
    const isArabic = locale === "ar";
    const items = t.raw("advantages.items") as AdvantageItem[];

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {t("advantages.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item: AdvantageItem, i: number) => (
          <div key={i} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-purple-600">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2 leading-7">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
