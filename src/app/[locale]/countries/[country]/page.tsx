
import { useLocale, useTranslations } from "next-intl";
import { use } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import Universities from "./components/Universities";
import WhyStudy from "./components/WhyStudy";

export default function CountryPage({
   params,
    }: {
  params: { locale: string; country: string };
    }) {
      const { country, locale } = params;

    const t = useTranslations(country);
   const isArabic = locale === "ar";


  return (
    <main className={`flex flex-col items-center bg-white ${isArabic ? "rtl" : "ltr"}`}>
      <Hero t={t} />
      <Stats t={t} />
     
    
      <WhyStudy t={t} />
     
      <Universities t={t} />
    </main>
  );
}
