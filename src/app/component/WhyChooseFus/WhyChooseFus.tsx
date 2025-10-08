"use client";

import React from "react";
import { GraduationCap, Users, MessageSquare, Percent } from "lucide-react";

const reasons = [
  {
    title: "قبولك الجامعي مجانا",
    description:
      "نسعى أن يلتحق الطالب بالجامعة المناسبة له بأقساط دراسية مناسبة، مع توفير له كافة التسهيلات الممكنة.",
  },
  {
    title: "فريق احترافي",
    description:
      "شركة رائدة في مجال الخدمات الطلابية والقبول الجامعي للدراسة في تركيا، منذ عام 2015 وحتى الآن.",
  },
  {
    title: "استشارات مجانية",
    description: "نساعدك على اختيار تخصصك المناسب من خلال استشاريين متخصصين.",
  },
  {
    title: "خصومات مميزة",
    description: "توفير خصومات جامعية تصل إلى أكثر من 70% من الرسوم الدراسية.",
  },
];

const icons = [
  { Icon: GraduationCap, color: "text-yellow-500" },
  { Icon: Users, color: "text-orange-500" },
  { Icon: MessageSquare, color: "text-blue-500" },
  { Icon: Percent, color: "text-pink-500" },
];

const WhyChooseFus = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
          لماذا تختار فيوجن للتقديم بالجامعات التركية؟
        </h2>
        <p className="text-gray-600 mb-12">٤ أسباب تجعلك تختار فيوجن</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => {
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
