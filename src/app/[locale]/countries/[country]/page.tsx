import { getTranslations } from "next-intl/server";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Universities from "./components/Universities";
import WhyStudy from "./components/WhyStudy";

export async function generateStaticParams() {
  return [
    { country: "turkey" },
    { country: "malaysia" },
    { country: "cyprus" },
    
  ];
}


export default async function CountryPage({
  params,
}: {
  params: { locale: string; country: string };
}) {

  const { locale, country } = params;

  const t = await getTranslations({
    locale,
    namespace: country,
  });
  const isArabic = locale === "ar";

  return (
    <main className={`flex flex-col items-center bg-white ${isArabic ? "rtl" : "ltr"}`}>
      <Hero t={t}    />
      <Stats t={t} />
      <WhyStudy t={t} />
      <Universities t={t} />
    </main>
  );
}
