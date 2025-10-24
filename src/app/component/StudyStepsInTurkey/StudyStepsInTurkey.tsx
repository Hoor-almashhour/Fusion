"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Step = {
  id: number;
  title: string;
  description: string;
  color: string;
   gradient: string;
  src: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "الاستشارة المجانية",
    description:
      "ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح لك كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب.",
    color: "bg-[#404040] text-white",
    gradient: "bg-gradient-to-b from-white to-[#2e2e2e]",
    src: "/StudySteps/step1.png",
  },
  {
    id: 2,
    title: "اختر تخصصك",
    description:
      "نساعدك على اختيار التخصص الجامعي الأنسب لك بناءً على اهتماماتك وقدراتك لضمان مستقبلك الأكاديمي.",
    color: "bg-[#F2BF5E] text-white",
    gradient: "bg-gradient-to-b from-white to-[#FDEBC0]",
    src: "/StudySteps/step2.png",
  },
  {
    id: 3,
    title: "اختيار الجامعة",
    description:
      "نوضح لك تفاصيل الجامعات، ميزاتها وعيوبها، ونساعدك في اختيار الأنسب من بينها.",
    color: "bg-[#48B0D9] text-white",
    gradient: "bg-gradient-to-b from-white to-[#BBD6E5]",
    src: "/StudySteps/step3.png",
  },
  {
    id: 4,
    title: "املأ نموذج التسجيل",
    description:
      "بعد اختيارك للتخصص والجامعة المناسبة، يمكنك تعبئة نموذج التسجيل الإلكتروني المجاني.",
    color: "bg-[#BBBCC0] text-white",
    gradient: "bg-gradient-to-b from-white to-[#E5E6E7]",
    src: "/StudySteps/step4.png",
  },
  {
    id: 5,
    title: "القبول الجامعي",
    description:
      "سيصلك القبول الجامعي الرسمي في أقرب وقت على بريدك الإلكتروني مع التفاصيل المطلوبة.",
    color: "bg-[#643073] text-white",
    gradient: "bg-gradient-to-b from-white to-[#BDA7C0]",
    src: "/StudySteps/step5.png",
  },
  {
    id: 6,
    title: "السكن الجامعي",
    description:
      "نساعدك على إيجاد سكن آمن ومريح في بيئة مشجعة على الدراسة والإبداع.",
    color: "bg-[#A61F43] text-white",
    gradient: "bg-gradient-to-b from-white to-[#D699A1]",
    src: "/StudySteps/step6.png",
  },
  {
    id: 7,
    title: "الاستقبال في المطار",
    description:
      "نستقبلك في المطار ونرافقك حتى السكن الجامعي لضمان راحتك وسلامتك.",
    color: "bg-[#404040] text-white",
    gradient: "bg-gradient-to-b from-white to-[#2e2e2e]",
    src: "/StudySteps/step7.png",
  },
];

export default function StepsSection() {
  return (
    <section
      dir="rtl"
      className="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
        <div className="absolute  bottom-55 right-10 w-full h-full ">
          <Image
            src="/StudySteps/bg.png"
            alt="background"
            fill
            priority
            className="object-contain opacity-15 translate-y-10 scale-125"
          />
       </div>
      <div className="pt-36 md:pt-96 md:mt-44">
       <div className="flex flex-col md:grid md:grid-cols-7 relative">
        {steps.map((s, i) => (
          <motion.article
            key={s.id}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
            className="relative flex flex-col items-center text-center"
          >
            {/* الصورة فوق الكرت */}
            <div  className={` md:absolute md:-top-35 md:z-10  h-[165px] w-full p-5 overflow-hidden flex items-center justify-center ${s.gradient}`}
             >
              <Image
                src={s.src}
                alt={s.title}
                width={165}
                height={165}
                style={{ height: 'auto', width: 'auto' }} 
                priority
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* الكرت */}
            <div
              className={`flex flex-col justify-between w-full shadow-lg ${s.color} p-5  pt-10 md:pt-8  min-h-[267px]`}
            >
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed font-semibold">{s.description}</p>
              <div className="mt-5 relative flex items-center justify-center">
                  <div className="absolute w-16 h-16 rounded-full border border-white/50"></div>
                  <div className="absolute w-14 h-14 px-4 rounded-full border-9 border-white/70"></div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold ">
                    {s.id}
                  </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

        
        
      </div>
    </section>
  );
}
