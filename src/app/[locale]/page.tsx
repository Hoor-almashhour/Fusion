


import WhyChooseFus from '../component/WhyChooseFus/WhyChooseFus';
import UniversitiesSlider from '../component/UniversitiesSlider/UniversitiesSlider';
import HeroStatsSection from '../component/HeroStatsSection/HeroStatsSection';
import StepsSection from '../component/StepsSection/StepsSection';
import LogoSlider from '../component/LogoSlider/LogoSlider';
import Hero from '../component/Hero/Hero';
import SearchSection from '../component/SearchSection/SearchSection';





export default  function HomePage() {

  return (
    <>
      <Hero />
      <SearchSection />
      <WhyChooseFus/>
      <UniversitiesSlider />
      <HeroStatsSection/>
      <StepsSection/>
      <LogoSlider/>
    </>
  );
}