"use client";

import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { StudyStep } from "../types/StudySteps";



export default function StepsSection() {
  const t = useTranslations("studyStepsSection");
   const steps = t.raw("steps") as StudyStep[];
   const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section dir={isArabic ? "rtl" : "ltr"}  className="bg-white py-18">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#3b2b4a]">
            {t("title")}
          </h3>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => (
            <article
              key={step.id}
              className="rounded-2xl border-dashed border-3 border-gray-300 bg-white p-6 flex flex-col items-center text-center"
            >
              <div className="w-36 h-36 mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="relative mt-2">
                <div className="absolute -top-16  right-4  md:-top-16  md:right-6">
                  <div
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center text-lg font-semibold"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.id}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-[#8a0a0a] mb-3">
                  {step.title}
                </h4>
              </div>

              <p className="text-gray-500 leading-relaxed mt-2">
                {step.description}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
