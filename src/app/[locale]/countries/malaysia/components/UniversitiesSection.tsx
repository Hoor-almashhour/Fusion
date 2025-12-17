import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";
import Link from 'next/link';

type University = {
  name: string;
  description: string;
  location: string;
  image: string;
};

export default function UniversitiesSection({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const universities = t.raw("universities.items") as University[];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      {/* Title */}
      <h2
        className={`text-2xl md:text-3xl font-bold mb-10 text-center`}
      >
        {t("universities.title")}
      </h2>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((uni, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={uni.image}
              alt={uni.name}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div
              dir={isArabic ? "rtl" : "ltr"}
              className={`flex-1
                 p-6 ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {uni.name}
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                {uni.description}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                📍 {uni.location}
              </p>

              {/* Buttons */}
              <div className={`  gap-3  items-center justify-center
             
               ${isArabic ? "text-center": "text-center"
              }`}>
                <Link
                  href="https://wa.me/905318598487"
                  className="flex-1 text-center px-4 py-2 items-center justify-center
                   text-sm rounded-lg 
                  bg-[#F9680E] text-white font-semibold hover:bg-[#e85d00] transition"
                >
                  {t("universities.register")}
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
