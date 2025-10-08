// src/components/WhyChooseFus.tsx
import React from "react";
import { useTranslations } from "next-intl";
import { GraduationCap, Users, MessageSquare, Percent } from "lucide-react";

interface Reason {
  title: string;
  description: string;
  subtitle: string;
}

const icons = [
  { Icon: GraduationCap, color: "text-yellow-500" },
  { Icon: Users, color: "text-orange-500" },
  { Icon: MessageSquare, color: "text-blue-500" },
  { Icon: Percent, color: "text-pink-500" },
];

const WhyChooseFus: React.FC = () => {
  const t = useTranslations("whyChoose");
   const reasons = t.raw("reasons") as Reason[];

  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
          {t("title")}
        </h2>
        <p className="text-gray-600 mb-12">{t("subtitle")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((item: Reason, index: number) => {
            const { Icon, color } = icons[index];
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 active:scale-95 transition-all duration-300 p-6 flex flex-col items-center text-center cursor-pointer"
              >
               <Icon className={`w-12 h-12 mb-4 ${color}`} />
                <h3 className="text-xl font-semibold text-red-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFus;
