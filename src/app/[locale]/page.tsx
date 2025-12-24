


import WhyChooseFus from '../component/WhyChooseFus/WhyChooseFus';
import UniversitiesSlider from '../component/UniversitiesSlider/UniversitiesSlider';
import HeroStatsSection from '../component/HeroStatsSection/HeroStatsSection';
import StepsSection from '../component/StepsSection/StepsSection';

import Hero from '../component/Hero/Hero';
import SearchSection from '../component/SearchSection/SearchSection';
import LogoSlider from '../component/LogoSlider/LogoSlider';






export default  function HomePage() {

  return (
    <>
      <Hero />
      <SearchSection />
      <WhyChooseFus/>
      <UniversitiesSlider />
      <HeroStatsSection/>
      <StepsSection/>
      <LogoSlider lang="en" />

    </>
  );
}