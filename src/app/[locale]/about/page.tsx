import { useTranslations , useLocale} from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
   const locale = useLocale();
  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className=" mx-auto px-10 py-42  bg-gray-50">

      <section className="mb-16 text-xl">
        <h2 className="text-3xl font-semibold mb-4">{t("section1Title")}</h2>
        <p>{t("section1Text")}</p>
      </section>

      <section className="mb-16 text-xl">
        <h2 className="text-3xl font-semibold mb-4">{t("section2Title")}</h2>
        <p>{t("section2Text")}</p>
      </section>

      <section className="mb-16 text-xl">
        <h2 className="text-3xl font-semibold mb-4">{t("section3Title")}</h2>
        <p>{t("section3Text")}</p>
      </section>

      <section className="mb-16 text-xl">
        <h2 className="text-3xl font-semibold mb-4">
          {t("section4Title")}
        </h2>

        <div className="space-y-3">
          {t.raw("section4Text").map((item: string, index: number) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mb-16 text-xl">
        <h2 className="text-3xl font-semibold mb-4">
          {t("section5Title")}
        </h2>

        <div className="space-y-3">
          {t.raw("section5Text").map((item: string, index: number) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>


    </div>
  );
}
