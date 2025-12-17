import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

interface HousingType {
  title: string;
  text: string;
}

export default function Housing({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const types = t.raw("housing.types") as HousingType[];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="md:max-w-7xl w-full py-16  md:px-5 md:mx-3 bg-white"
    >
     
      <h2
        className={`text-2xl
            font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("housing.title")}
      </h2>

      
      <p
        className={`text-gray-700 mt-4 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("housing.intro")}
      </p>

      <div className="mt-8 space-y-6">
        {types.map((item, index) => (
          <div
            key={index}
            className={isArabic ? "text-right" : "text-left"}
          >
            <h3 className="text-xl font-semibold text-[#F9680E]">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
