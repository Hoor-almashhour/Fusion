
import { TProps } from "@/app/types/translation";
import { useLocale, useTranslations } from "next-intl";

export default function MalaysiaAbout({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">{t("about.title")}</h2>
      <p className="text-gray-700 leading-8">{t("about.text")}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {t.raw("about.gallery").map((img: string, i: number) => (
          <img
            key={i}
            src={img}
            className="rounded-md h-24 md:h-32 w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
}
