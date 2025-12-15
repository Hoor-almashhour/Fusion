import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function PrivateUniversitiesAdvantages({ t }: TProps) {
  const list = t.raw("privateUniversitiesAdvantages.list") as string[];
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="md:max-w-7xl w-full  py-16  md:px-5 md:mx-3 bg-white" dir={isArabic ? "rtl" : "ltr"}>
      <h2 className={`text-3xl font-bold text-[#B10B0B] ${isArabic ? "text-right" : "text-left"}`}>
        {t("privateUniversitiesAdvantages.title")}
      </h2>

      <div className={`mt-8 grid md:grid-cols-1 gap-4`}>
        {list.map((item, index) => (
          <div key={index} className={`p-4 space-y-3 text-gray-700 list-disc list-inside ${isArabic ? "text-right" : "text-left"}`}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
