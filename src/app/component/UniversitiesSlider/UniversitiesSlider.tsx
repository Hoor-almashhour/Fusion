"use client";


import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { universities } from "@/app/data/universities";
import UniversityCard from "../UniversityCard/UniversityCard";
import { useTranslations } from "next-intl";



export default function UniversitiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
   const t = useTranslations("universities");

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % universities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + universities.length) % universities.length);
  };

  return (
    <section className="w-full bg-white py-10 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-[#B10B0B] mb-2">{t("title")}</h2>
      <p className="text-gray-600 mb-8">{t("subtitle")}</p>

      <div className="relative w-full max-w-6xl overflow-hidden px-6">
        {/* أزرار التنقل */}
        <button
          onClick={prevSlide}
          className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-[#B10B0B] text-white p-2 rounded-full hover:bg-[#8a0a0a] transition z-10"
        >
          <ChevronLeft size={28} />
        </button>

        <div
          className="flex gap-4 transition-transform duration-[800ms] ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {universities.map((u, index) => {
            const Icon = u.icon; 
            return (
              <div
                key={index}
                className="min-w-full sm:min-w-1/2 md:min-w-1/3 flex justify-center"
              >
                 <UniversityCard key={u.name} {...u} />
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 bg-[#B10B0B] text-white p-2 rounded-full hover:bg-[#8a0a0a] transition z-10"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <button className="mt-11 bg-[#B10B0B] text-white py-3 px-8 rounded-full font-extrabold hover:bg-[#8a0a0a] transition">
        {t("moreBtn")}
      </button>
    </section>
  );
}
