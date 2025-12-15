import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function EducationSystem({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const d = t.raw("educationSystem.durations");

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="md:max-w-7xl w-full py-16 md:px-5 bg-white"
    >
      <h2
        className={`text-3xl font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("educationSystem.title")}
      </h2>

      <p
        className={`text-gray-700 text-lg mt-6 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t("educationSystem.intro")}
      </p>

      <p
        className={`text-gray-700 text-lg leading-8 mt-6 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {d.bachelor.text}{" "}
        <span dir="ltr">{d.bachelor.years}</span>{" "}
        {d.bachelor.suffix}{" "}
        {d.bachelor.note}{" "}
        <span dir="ltr">{d.bachelor.medicalYears}</span>{" "}
        {isArabic ? "سنوات" : "years"}
        <br />
        {d.master.text} {d.master.years}
        <br />
        {d.phd.text}{" "}
        <span dir="ltr">{d.phd.years}</span>{" "}
        {d.phd.suffix}
        <br />
        {d.diploma.text} {d.diploma.years}
      </p>
    </section>
  );
}
