import Image from "next/image";
import React from "react";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { useLocale, useTranslations } from "next-intl";

const imageSrc = "/imagesStats/Imgsrc.jpg";

interface StatItem {
  number: string;
  label: string;
}

export default function HeroStatsSection() {
  const t = useTranslations("common.heroStats");
   const locale = useLocale();
    const isArabic = locale === "ar";


  const stats = t.raw("stats");

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 ">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-11">

          {/* left column */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-right gap-6">

              {/* icon & subtitle */}
              <div className="flex flex-col items-center lg:items-start gap-2">
                <LiaGraduationCapSolid className="text-gray-500 text-4xl" />
                <p className="text-gray-500 text-lg">{t("subtitle")}</p>
              </div>

              {/* headline */}
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900">
                {t("title")}
              </h2>

              {/* stats */}
              <div className="w-full mt-6">
                <div className="flex flex-row items-center md:flex-row-reverse justify-between flex-wrap">
                  {stats.map((item: StatItem,index: number) => (
                    <div key={index} className="flex flex-col items-center lg:items-start">
                      <div className="p-2 rounded-md text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h.01M15 9h.01" />
                        </svg>
                      </div>

                      <div className="mt-3 text-gray-800 text-xl font-medium">
                        {item.number}
                      </div>

                      <div className="mt-1 text-gray-400 text-sm">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* right column - image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="hidden md:block absolute -right-10 top-8 w-64 h-64 bg-orange-100 rounded-full transform rotate-12" aria-hidden />
            <div className="relative z-10 w-[320px] sm:w-[420px] md:w-[520px] lg:w-[560px] shadow-lg rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={t("imageAlt")}
                className="object-cover w-auto h-64 md:h-[360px] lg:h-[420px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
