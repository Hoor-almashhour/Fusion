import UniversitiesSlider from "@/app/component/UniversitiesSlider/UniversitiesSlider";
import { TProps } from "@/app/types/translation";




export default function Universities({ t }: TProps) {
  return (
    <section className="w-full py-16">
      <h2 className="text-center text-2xl
       font-bold text-[#B10B0B] mb-10">
        {t("universitiesSection")}
      </h2>
      <div className="max-w-6xl mx-auto">
        <UniversitiesSlider />
      </div>
    </section>
  );
}
