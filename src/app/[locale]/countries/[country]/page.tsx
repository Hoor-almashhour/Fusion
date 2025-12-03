
import { useTranslations } from "next-intl";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Universities from "./components/Universities";
import WhyStudy from "./components/WhyStudy";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  // يمكنك إرجاع كل الدول المتاحة هنا
  return [
    { country: "turkey" },
   
    // إضافة دول أخرى هنا
  ];
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ locale: string; country: string }>;
}) {
  const { locale, country } = await params;

    const t = await getTranslations({ locale, namespace: country });
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
