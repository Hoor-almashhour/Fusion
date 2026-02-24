"use client";

import { useTranslations, useLocale } from "next-intl";
import { FaUniversity } from "react-icons/fa";


export default function CountryPage() {
    
    const t = useTranslations("countries");
    const locale = useLocale();
    const isArabic = locale === "ar";
    
  return (
    <div className="mb-4" >

      <section dir={locale === "ar" ? "rtl" : "ltr"} className="flex flex-col md:flex-row-reverse items-center justify-between min-h-[100vh]  px-3 md:px-[130px] py-28 mb-4 bg-gray-50 text-primary font-sans">

          <div className="md:w-3/4 flex justify-center my-6">
                <img
                  src="/Hero/heroImg.webp"
                  alt="Student"
                  className='w-lg h-4/5 '
                />
          </div>
           <div
                  className={`w-full text-center text-white ${
                      isArabic ? "md:text-right" : "md:text-left"
                  }`}
              >
              <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4 text-[#F9680E]">
                  {t("heroTitle")}
              </h1>
  
                <div
                  className={`flex items-center justify-center gap-3 flex-col md:items-start ${
                      isArabic ? "md:justify-end" : "md:justify-start"
                  }`}
                >
  
                <span className="block w-16 h-[2px] bg-[#F9680E]"></span>
                <FaUniversity className="text-[#F9680E] text-3xl" />
              </div>
          </div>
        </section>
        <section dir={locale === "ar" ? "rtl" : "ltr"} className="bg-white md:mx-auto  border-t-2 border-[#F9680E] shadow-2xl rounded-lg py-16 px-6 md:px-5 md:max-w-7xl mx-4 ">

            <div className="max-w-7xl mx-auto">
              <p className="mb-4">{t("intro.p1")}</p>
              <p className="mb-10">{t("intro.p2")}</p>

              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-[#B10B0B] mb-4">{t("whyFusion.title")}</h2>
                <ul className="space-y-2 list-disc list-inside ">
                  {t.raw("whyFusion.list").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-[#B10B0B] mb-4">{t("services.title")}</h2>
                <p className="mb-4">{t("services.intro")}</p>
                <ul className="space-y-2 list-disc list-inside ">
                  {t.raw("services.list").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-[#B10B0B] mb-4">{t("countries.title")}</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside ">
                  {t.raw("countries.list").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-600">{t("countries.note")}</p>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-[#B10B0B] mb-4">{t("trust.title")}</h2>
                <ul className="space-y-2 list-disc list-inside ">
                  {t.raw("trust.list").map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className=" mt-20">
                <h2 className="text-2xl font-bold text-[#B10B0B] mb-4">{t("cta.title")}</h2>
                <p>{t("cta.text")}</p>
              </section>
            </div>
        </section>
    </div>
  );
}
