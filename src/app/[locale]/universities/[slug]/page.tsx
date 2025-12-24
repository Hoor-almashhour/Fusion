import { notFound } from "next/navigation";
import { universitiesDetails } from "@/app/data/universities/universities-details";

type Props = {
  params: Promise<{
    locale: "ar" | "en";
    slug: string;
  }>;
};

export default async function UniversityDetails({ params }: Props) {
 
  const { locale, slug } = await params;
  const university = universitiesDetails.find(
    (u) => u.slug === slug
  );

  if (!university) return notFound();

  return (
    <main>
      {/* Hero */}
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${university.cover})` }}
      >
        <h1 className="text-4xl font-bold bg-black/50 px-6 py-3 rounded-xl">
          {university.name[locale]}
        </h1>
      </div>

      {/* Stats */}
      <section className="container mx-auto py-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div>
          <p className="font-bold text-2xl text-[#F9680E]">
            {university.stats.students}+
          </p>
          <p>Students</p>
        </div>
        <div>
          <p className="font-bold text-2xl text-[#F9680E]">
            {university.stats.rankLocal}
          </p>
          <p>Local Rank</p>
        </div>
        <div>
          <p className="font-bold text-2xl text-[#F9680E]">
            {university.stats.rankWorld}
          </p>
          <p>World Rank</p>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 py-8 leading-loose text-gray-700">
        {university.description[locale]}
      </section>

      {/* Gallery */}
      <section className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-10 px-6">
        {university.gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-xl object-cover w-full h-[200px]"
            alt={`${university.name[locale]} ${i + 1}`}
          />
        ))}
      </section>
    </main>
  );
}
