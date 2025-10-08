

import Hero from '@/app/component/Hero/Hero';
import SearchSection from '@/app/component/SearchSection/SearchSection';
import WhyChooseFus from './component/WhyChooseFus/WhyChooseFus';
import UniversitiesSlider from './component/UniversitiesSlider/UniversitiesSlider';



export default  function HomePage() {

  return (
    <>
      <Hero />
      <SearchSection />
      <WhyChooseFus/>
      <UniversitiesSlider />
    </>
  );
}