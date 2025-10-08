"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const universities = [
  { name: "جامعة كولتور", city: "Istanbul", logo: "/logos/Kultur.png" },
  { name: "جامعة تيد", city: "Ankara", logo: "/logos/Ted.webp" },
  { name: "جامعة اسطنبول التجارية", city: "Istanbul", logo: "/logos/tic.avif" },
  { name: "جامعة بهتشه شهير", city: "Istanbul", logo: "/logos/Bau.webp" },
  { name: "جامعة أوزيجين", city: "Istanbul", logo: "/logos/yeni.jpg" },
  { name: "جامعة نيشان تاشي", city: "Istanbul", logo: "/logos/nisantasi.jpg" },
];

export default function UniversitiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % universities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + universities.length) % universities.length);
  };

  return (
    <section className="w-full bg-white py-10 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-[#B10B0B] mb-2">جامعاتنا</h2>
      <p className="text-gray-600 mb-8">أهم الجامعات في تركيا وشمال قبرص التركية</p>

      <div className="relative w-full max-w-6xl overflow-hidden px-6">
        {/* أزرار التنقل */}
        <button
          onClick={prevSlide}
          className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-[#B10B0B] text-white p-2 rounded-full hover:bg-[#8a0a0a] transition z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="flex transition-transform duration-[800ms] ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {universities.map((u, index) => (
            <div
              key={index}
              className="min-w-full sm:min-w-1/2 md:min-w-1/3 flex justify-center"
            >
              <div className="w-full sm:w-3/4 md:w-[340px] rounded-2xl border shadow-lg p-6 flex flex-col items-center justify-between h-[320px] bg-white mx-auto">
                <Image
                  src={u.logo}
                  alt={u.name}
                  width={96}
                  height={96}
                  className="object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-[#F9680E] mb-2">{u.name}</h3>
                <p className="text-gray-700 uppercase">{u.city}</p>

                <div className="flex flex-col sm:flex-row justify-between w-full mt-6 gap-2">
                  <Link
                    href="#"
                    className="bg-[#F9680E] text-white py-3 sm:py-4 w-full sm:w-1/2 rounded-lg hover:bg-[#f77b2b] transition"
                  >
                    المزيد...
                  </Link>
                  <Link
                    href="https://wa.me/905318598487"
                    className="bg-[#B10B0B] text-white py-3 sm:py-4 w-full sm:w-1/2 rounded-lg hover:bg-[#8a0a0a] transition"
                  >
                    سجل الآن
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-[#B10B0B] text-white p-2 rounded-full hover:bg-[#8a0a0a] transition z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <button className="mt-11 bg-[#B10B0B] text-white py-3 px-8 rounded-full hover:bg-[#8a0a0a] transition">
        تعرف على جامعات أكثر
      </button>
    </section>
  );
}
