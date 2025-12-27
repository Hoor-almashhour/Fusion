import Link from "next/link";
import { universitiesList } from "@/app/data/universities/universities-list";
import { useTranslations, useLocale } from "next-intl";

export default function UniversitiesPage() {
  const t = useTranslations("universities");
  const locale = useLocale() as "ar" | "en";

  return (
    <section className="container mx-auto py-40 px-6
     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {universitiesList.map((u) => {
        const Icon = u.icon;

        return (
          <div
            key={u.slug}
            className="border rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={u.logo}
              className="w-24 mx-auto h-24"
              alt={u.name[locale]}
            />

            <h3 className="font-bold text-[#F9680E]">
              {u.name[locale]}
            </h3>

            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Icon />
              <span>{u.city[locale]}</span>
            </div>

            <div className="flex mt-6">
              <Link
                href={`/${locale}/universities/${u.slug}`}
                className="bg-[#F9680E] text-white py-3 w-1/2 rounded-l-lg hover:bg-[#f77b2b] transition"
              >
                {t("details")}
              </Link>

              <Link
                href="https://wa.me/905318598487"
                className="bg-[#B10B0B] text-white py-3 w-1/2 rounded-r-lg hover:bg-[#8a0a0a] transition"
              >
                {t("register")}
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
