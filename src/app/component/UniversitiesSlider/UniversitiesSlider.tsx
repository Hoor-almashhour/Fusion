"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import UniversityCard from "../UniversityCard/UniversityCard";
import { universitiesList } from "@/app/data/universities";


export default function UniversitiesSlider() {
  const t = useTranslations("universities");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // 🔥 Responsive
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1); // mobile
      else if (window.innerWidth < 1024) setVisibleCards(2); // tablet
      else setVisibleCards(3); // desktop
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = universitiesList.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="w-full bg-white py-10 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-[#B10B0B] mb-2">
        {t("title")}
      </h2>
      <p className="text-gray-600 mb-8">{t("subtitle")}</p>

      <div className="relative w-full max-w-6xl overflow-hidden px-4">
        {/* Prev */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#B10B0B] text-white p-2 rounded-full z-10"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`,
          }}
        >
          {universitiesList.map((u) => (
            <div
              key={u.slug}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
            >
              <UniversityCard {...u} />
            </div>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#B10B0B] text-white p-2 rounded-full z-10"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <Link
        href="/universities"
        className="mt-11 bg-[#B10B0B] text-white py-3 px-8 rounded-full font-extrabold hover:bg-[#8a0a0a]"
      >
        {t("moreBtn")}
      </Link>
    </section>
  );
}
