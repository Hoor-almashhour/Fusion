

import Hero from '@/app/component/Hero/Hero';
import SearchSection from '@/app/component/SearchSection/SearchSection';
import WhyChooseFus from './component/WhyChooseFus/WhyChooseFus';
import UniversitiesSlider from './component/UniversitiesSlider/UniversitiesSlider';
import HeroStatsSection from './component/HeroStatsSection/HeroStatsSection';
import StepsSection from './component/StepsSection/StepsSection';
import LogoSlider from './component/LogoSlider/LogoSlider';
import Footer from './component/Footer/Footer';



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
      <Footer/>
    </>
  );
}