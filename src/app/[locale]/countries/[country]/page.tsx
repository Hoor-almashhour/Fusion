
import { useTranslations } from "next-intl";
import Hero from "./components/Hero";

import Stats from "./components/Stats";
import Universities from "./components/Universities";
import WhyStudy from "./components/WhyStudy";

interface CountryPageProps {
  params: {
    locale: string;
    country: string;
  };
}

export default function CountryPage({ params }: CountryPageProps) {
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
