import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

export default function MalaysiaAbout({ t }: TProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const gallery = t.raw("about.gallery") as string[];

  return (
    <section className="py-16 px-4">
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-12"
      >
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          {t("about.title")}
        </h2>

        <div className="w-20 h-1 bg-[#F9A826] mx-auto mt-3 mb-8"></div>

        {/* Text */}
        <p
          className={`text-gray-700 leading-8 text-base md:text-lg ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {t("about.text")}
        </p>

        {/* Slider */}
        <div
          className="
            mt-10
            flex
            gap-4
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-4
          "
        >
          {gallery.map((img, i) => (
            <div
              key={i}
              className="
                snap-center
                flex-shrink-0
                w-full
                md:w-48
              "
            >
              <img
                src={img}
                alt={`Malaysia ${i + 1}`}
                className="
                  w-full
                  h-56
                  md:h-28
                  object-cover
                  rounded-xl
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
