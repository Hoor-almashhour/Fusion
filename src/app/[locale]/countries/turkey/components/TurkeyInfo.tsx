import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

interface Section {
  title: string;
  text: string;
}

export default function TurkeyInfo({ t }: TProps) {
  const sections = t.raw("intro2.sections") as Section[];
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="md:max-w-7xl w-full  py-16  md:px-5 md:mx-3" dir={isArabic ? "rtl" : "ltr"}>

      <h2 className={`text-2xl
         font-bold text-[#B10B0B] ${isArabic ? "text-right" : "text-left"}`}>
        {t("intro2.title")}
      </h2>

      <div className="space-y-8 mt-8">
        {sections.map((item, index) => (
          <div key={index} className={`${isArabic ? "text-right" : "text-left"}`}>
            <h3 className="text-xl font-semibold text-[#F9680E] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-7 text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
