
import { getTranslations } from "next-intl/server";
import Hero from "../turkey/components/Hero";
import Stats from "../turkey/components/Stats";
import WhyStudy from "../turkey/components/WhyStudy";
import Universities from "../turkey/components/Universities";
import MalaysiaHero from "../malaysia/components/MalaysiaHero";
import MalaysiaAbout from "../malaysia/components/MalaysiaAbout";
import MalaysiaStats from "../malaysia/components/MalaysiaStats";
import Advantages from "../malaysia/components/Advantages";
import EducationSystem from "../malaysia/components/EducationSystem";
import Costs from "../malaysia/components/Costs";
import Housing from "../malaysia/components/Housing";
import Requirements from "../malaysia/components/Requirements";
import Tips from "../malaysia/components/Tips";


export async function generateStaticParams() {
  return [
     { locale: "ar", country: "turkey" },
    { locale: "ar", country: "malaysia" },
    { locale: "en", country: "turkey" },
    { locale: "en", country: "malaysia" }
    
    
  ];
}

interface PageProps {
  params: Promise<{ locale: string; country: string }>
}

export default async function Page({ params }: PageProps) {
  const { locale, country } =  await params;

  const t = await getTranslations({
    locale,
    namespace: `countries.${country}`,
  });

  const isArabic = locale === "ar";

  return (
    <main className={`flex flex-col items-center bg-white ${isArabic ? "rtl" : "ltr"}`}>
      {country === "turkey" && t && (
        <>
          <Hero t={t}    />
          <Stats t={t} />
          <WhyStudy t={t} />
          <Universities t={t} />
        </>
      )}

      {country === "malaysia" && (
        <>
          <MalaysiaHero t={t}     />
          <MalaysiaAbout t={t}      />
          <MalaysiaStats t={t}      />
          <Advantages t={t}      />
          <EducationSystem  t={t}    />
          <Costs t={t}     />
          <Housing t={t}    />
          <Requirements t={t}     />
          <Tips t={t}   />
        </>
      )}
      
    </main>
  );
}
