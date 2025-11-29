"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import UniversitiesSlider from "@/app/component/UniversitiesSlider/UniversitiesSlider";
import { FaEarthAmericas } from "react-icons/fa6";
import { GrFormSchedule } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";

interface Reason {
  title: string;
  text: string;
}
interface PageProps {
  params: { locale: string; country: string };
}

export default function CountryPage({ params }: PageProps) {
  const t = useTranslations('turkey');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const reasons = t.raw('reasons') as Reason[];

   const population = t("stats.populationValue", { value: "91+" });
   const academicYearValue = t("stats.academicYearValue");
    const universities = t("stats.universitiesCountValue", { value: "200+" });
    const students = t("stats.studentsCountValue", { value: "8+" });
    const international = t("stats.internationalStudentsValue", { value: "350+" });


  return (
    <main className={`flex flex-col items-center bg-white ${isArabic ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative md:w-full min-h-[80vh] bg-gray-50 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full px-6 md:px-16">
          {/* الصورة */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mt-16">
            <Image
              src="/Hero/heroImg.png"
              alt="Student"
              width={440}
              height={300}
              style={{ height: "auto", width: "auto" }}
              priority
            />
          </div>
          {/* النص */}
          <div className={`w-full text-center md:text-${isArabic ? "right" : "left"} text-white`}>
            <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4 text-[#F9680E]">
              {t("heroTitle")}
            </h1>
            <div className={`flex items-center justify-center md:justify-${isArabic ? "end" : "start"} md:items-end gap-3 flex-col`}>
              <span className="block w-16 h-[2px] bg-[#F9680E]"></span>
              <FaUniversity className="text-[#F9680E] text-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
        <section className="w-full bg-white flex justify-center">
            <div className="flex flex-wrap justify-center items-center flex-row-reverse gap-32 max-w-7xl py-10">

                {/* التعداد السكاني */}
                <div className="flex flex-col items-end justify-end">
                    <div className="p-2 rounded-md text-orange-500">
                        <RiTeamFill className="text-3xl" />
                    </div>
                    <div className="mt-1 text-gray-900 text-lg font-semibold">
                        {t("stats.population")}
                    </div>
                    <div className="mt-3 text-gray-700 text-xl font-medium" dir="ltr">
                        {population}
                    </div>
                </div>

               <div className="flex flex-col items-end justify-end">
                    <div className="p-2 rounded-md text-orange-500">
                        <GrFormSchedule className="text-3xl" />
                    </div>
                    
                    <div className="mt-1 text-gray-900 text-lg font-semibold">
                        {t("stats.academicYear")}
                    </div>

                    <div className="mt-3 text-gray-700 text-xl font-medium" dir="ltr">
                        {t("stats.academicYearValue")}
                    </div>
               </div>


                {/* عدد الجامعات */}
                <div className="flex flex-col items-end justify-end">
                <div className="p-2 rounded-md text-orange-500">
                    <FaUniversity className="text-3xl" />
                </div>
                <div className="mt-1 text-gray-900 text-lg font-semibold">
                    {t("stats.universitiesCount")}
                </div>
                <div className="mt-3 text-gray-700 text-xl font-medium" dir="ltr">
                    {universities}
                </div>
                </div>

                {/* عدد الطلاب */}
                <div className="flex flex-col items-end justify-end">
                <div className="p-2 rounded-md text-orange-500">
                    <PiStudentFill className="text-3xl" />
                </div>
                <div className="mt-1 text-gray-900 text-lg font-semibold">
                    {t("stats.studentsCount")}
                </div>
                <div className="mt-3 text-gray-700 text-xl font-medium" dir="ltr">
                    {students}
                </div>
                </div>

                {/* الطلاب الدوليين */}
                <div className="flex flex-col items-end justify-end">
                <div className="p-2 rounded-md text-orange-500">
                    <FaEarthAmericas className="text-3xl" />
                </div>
                <div className="mt-1 text-gray-900 text-lg font-semibold">
                    {t("stats.internationalStudents")}
                </div>
                <div className="mt-3 text-gray-700 text-xl font-medium" dir="ltr">
                    {international}
                </div>
                </div>

            </div>
            </section>


      {/* Intro Section */}
      <section className="bg-white border-t-2 border-[#F9680E] py-16 shadow-2xl px-6 md:px-20 rounded-lg max-w-7xl mx-3 flex justify-center">
        <div className="max-w-6xl text-right">
          <p className="text-gray-700 text-lg leading-9 mb-8">{t("intro.p1")}</p>
          <p className="text-gray-700 text-lg leading-9 mb-12">{t("intro.p2")}</p>

          {/* لماذا الدراسة في تركيا */}
          <h2 className="text-3xl font-bold text-[#B10B0B] mb-6 text-right">{t("whyStudyTitle")}</h2>
          <p className="text-gray-700 text-lg leading-8 mb-10 text-right">{t("whyStudyDesc")}</p>

          <div className="space-y-8">
             {reasons.map((item, index) => (
              <div key={index} className="text-right">
                <div className="flex items-start justify-start flex-row-reverse">
                  <div dir="rtl" className="text-[#F9680E] w-8 h-8 flex items-center justify-center font-bold">{index + 1}.</div>
                  <h3 className="text-xl font-semibold text-[#B10B0B] text-right">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-7 text-base text-right">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="w-full py-16">
        <h2 className="text-center text-3xl font-bold text-[#B10B0B] mb-10">{t("universitiesSection")}</h2>
        <div className="max-w-6xl mx-auto">
          <UniversitiesSlider />
        </div>
      </section>
    </main>
  );
}
