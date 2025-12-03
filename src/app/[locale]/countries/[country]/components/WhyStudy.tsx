
import { TProps } from "@/app/types/translation";
import Intro from "./Intro";

interface Reason {
  title: string;
  text: string;
}

export default function WhyStudy({ t }: TProps) {
  const reasons = t.raw("reasons") as Reason[];

  return (
    <section className="bg-white max-w-7xl   border-t-2 border-[#F9680E]  py-16 shadow-2xl px-6 md:px-20 rounded-lg mx-3 ">
      <Intro t={t} />
      <h2 className="text-3xl font-bold text-[#B10B0B] text-right">{t("whyStudyTitle")}</h2>
      <p className="text-gray-700 text-lg leading-8 mt-6 text-right">{t("whyStudyDesc")}</p>

      <div className="space-y-8 mt-6">
        {reasons.map((item, index) => (
          <div key={index} className="text-right">
            <div className="flex items-start justify-start flex-row-reverse">
              <div className="text-[#F9680E] w-8 h-8 flex items-center justify-center font-bold">
                {index + 1}.
              </div>
              <h3 className="text-xl font-semibold text-[#B10B0B]">{item.title}</h3>
            </div>
            <p className="text-gray-700 leading-7 text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
