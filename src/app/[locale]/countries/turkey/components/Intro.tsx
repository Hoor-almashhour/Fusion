import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function Intro({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section dir={isArabic ? "rtl" : "ltr"}>
      <div
        className={`max-w-6xl ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <p className="text-gray-700 text-lg leading-9 mb-8">
          {t("intro.p1")}
        </p>

        <p className="text-gray-700 text-lg leading-9 mb-12">
          {t("intro.p2")}
        </p>

       
        <div
          className={`relative w-full md:w-3/5 mx-auto bg-[#B10B0B] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-15 ${
            isArabic ? "md:justify-end" : "md:justify-start"
          }`}
        >
       
          <div className="absolute inset-0 opacity-30 bg-[url('/imagesflag/tr-flag.jpg')] bg-cover bg-center"></div>

          <div
            className={`relative 
                md:w-full flex
                 ${
              isArabic ?  "md:justify-start" :  "md:justify-start"
            }`}
          >
            <img
              src="/imagesStats/Imgsrc.jpg"
              alt="Student studying in Turkey"
              className="rounded-full shadow-xl object-cover w-2/4
               "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
