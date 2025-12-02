
import { useLocale, useTranslations } from "next-intl";
import { use } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import Universities from "./components/Universities";
import WhyStudy from "./components/WhyStudy";


export default function CountryPage({ params }: { params: Promise<{ locale: string; country: string }> }) {
  
  const resolved = use(params);
  const { country } = resolved;

  const t = useTranslations(country);
  const locale = useLocale();
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
