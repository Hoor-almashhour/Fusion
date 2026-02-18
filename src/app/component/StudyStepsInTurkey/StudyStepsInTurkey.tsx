"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";


type Step = {
  id: number;
  title: string;
  description: string;
  color: string;
  gradient: string;
  src: string;
};

export default function StudyStepsInTurkey() {
  const t = useTranslations("studySteps");

  const steps = t.raw("steps") as Step[];
   const locale = useLocale();
    const isArabic = locale === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      
      <div className="hidden  md:block md:absolute md:bottom-56 md:right-17 w-full h-full">
        <img
          src="/StudySteps/bg.png"
          alt="background"
          className="object-contain opacity-15 translate-y-10 scale-125"
        />
      </div>

      <div className="pt-36 md:pt-80 md:mt-40">
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
          
              <div
                className={`w-full flex items-center justify-center h-32 md:h-48 ${s.gradient}`}
              >
                <img
                  src={s.src}
                  alt={s.title}
                  width={140}
                  height={140}
                  className="object-contain drop-shadow-lg w-35 h-35 md:w-32 md:h-32"
                />
              </div>

              
              <div
                className={`flex flex-col justify-between w-full shadow-lg ${s.color} p-5 pt-8 min-h-[280px]`}
              >
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed font-semibold">{s.description}</p>

                <div className="mt-2 md:mt-5 relative flex items-center justify-center">
                  <div className="absolute w-16 h-16 rounded-full border border-white/50"></div>
                  <div className="absolute w-14 h-14 rounded-full border-9 border-white/70"></div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">
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
