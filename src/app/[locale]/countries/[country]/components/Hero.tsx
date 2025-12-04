
import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

import { FaUniversity } from "react-icons/fa";

export default function Hero({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative md:w-full min-h-[80vh] bg-gray-50 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full px-8 md:px-16">

        <div className="w-full md:w-1/2 flex justify-center mt-16 md:mt-16">
          <img
            src="/Hero/heroImg.png"
            alt="Student"
            className="w-96 object-cover"
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
                className={`flex items-center justify-center gap-3 flex-col md:items-end ${
                    isArabic ? "md:justify-end" : "md:justify-start"
                }`}
>

              <span className="block w-16 h-[2px] bg-[#F9680E]"></span>
              <FaUniversity className="text-[#F9680E] text-3xl" />
            </div>
        </div>

      </div>
    </section>
  );
}
