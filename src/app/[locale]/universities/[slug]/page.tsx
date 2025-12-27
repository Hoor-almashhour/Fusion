import { notFound } from "next/navigation";
import { universitiesDetails } from "@/app/data/universities/universities-details";
import { CiLocationOn } from "react-icons/ci";
import ContentBox from "@/app/component/ContentBox/ContentBox";
import ContentList from "@/app/component/ContentList/ContentList";
import Stat from "@/app/component/Stat/Stat";
import { getLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{
    locale: "ar" | "en";
    slug: string;
  }>;
};

export default async function UniversityDetails({ params }: Props) {
  const { slug } = await params;

 const locale = (await getLocale()) as "ar" | "en";

  const t = await getTranslations("university");
  const isArabic = locale === "ar";

  const university = universitiesDetails.find((u) => u.slug === slug);
  if (!university) return notFound();

  const { content } = university;

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="bg-gray-50">

      {/* ===== Hero ===== */}
      <section
        className="relative h-[520px] bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${university.cover})` }}
      >
        <div className="absolute inset-0  h-[520px]  bg-black/40" />
        <div className="relative text-center text-white">
          <img
            src={university.logo}
            alt={university.name[locale]}
            className="w-24 h-24 mx-auto  bg-white rounded-full mt-8"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            {university.name[locale]}
          </h1>
          <p className="flex items-center justify-center gap-2 mt-2 text-sm">
            <CiLocationOn />
            {university.city[locale]}
          </p>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className=" md:max-w-7xl
             md:mx-auto py-6 mt-10 mx-5
             px-6 bg-white rounded-2xl shadow-lg
             ">
         <h2 className="section-title text-sm
             md:text-xl font-extrabold text-[#B10B0B] mb-2.5 ">
          {t("stats.title")} {university.name[locale]}
        </h2>
         <div className="w-20  h-[2px]  bg-[#B10B0B] mt-3" />
        <div className=" grid grid-cols-2 md:grid-cols-4 text-center py-6 gap-4">
          <Stat label={t("stats.worldRank")} value={university.stats.rankWorld} />
          <Stat label={t("stats.localRank")} value={university.stats.rankLocal} />
          <Stat label={t("stats.students")} value={`+${university.stats.students}`} />
          <Stat
            label={t("stats.internationalStudents")}
            value={`+${university.stats.internationalStudents}`}
          />
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="section-title  text-sm
           md:text-xl font-extrabold text-[#B10B0B] mb-2.5 ">
          {t("gallery")} {university.name[locale]}
        </h2>
         <span className="block w-40 mb-4 h-[2px] bg-[#B10B0B] "></span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {university.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${university.name[locale]} ${i + 1}`}
              className="rounded-xl object-cover w-full h-[180px]"
            />
          ))}
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className="bg-white  border-t-2 border-[#F9680E] shadow-2xl rounded-lg py-16  px-6 mb-6  md:mx-auto  md:max-w-7xl  mx-4">
      
        <ContentBox title={t("overview")}>
          {content.overview[locale]}
        </ContentBox>

        <ContentBox title={t("location")}>
          {content.location[locale]}
        </ContentBox>

        <ContentBox title={t("goals")}>
          {content.goals[locale]}
        </ContentBox>

        <ContentList title={t("faculties")} items={content.faculties[locale]} />
        <ContentList title={t("features")} items={content.features[locale]} />
        <ContentList title={t("activities")} items={content.activities[locale]} />

        <ContentBox title={t("campus")}>
          {content.campus[locale]}
        </ContentBox>

        <ContentBox title={t("facilities")}>
          {content.facilities[locale]}
        </ContentBox>

        <ContentBox title={t("housing")}>
          {content.housing[locale]}
        </ContentBox>
      </section>
    </main>
  );
}
