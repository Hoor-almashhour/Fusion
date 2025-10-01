/* eslint-disable @typescript-eslint/no-unused-vars */
import Hero from "../component/Hero/Hero";
import Navbar from "../component/Navbar/Navbar";
import SearchSection from "../component/SearchSection/SearchSection";


export default async function Home({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;

  return (
    <div>
      <Navbar />
      <Hero />
      <SearchSection/>
    </div>
  );
}
