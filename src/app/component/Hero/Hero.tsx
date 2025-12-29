'use client';

import React from 'react';
import { FaInfo } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="bg-gray-50 text-primary font-sans">
      <section className="flex flex-col md:flex-row-reverse items-center justify-between min-h-[100vh] px-3 md:px-[130px] py-28
       ">

        {/* Image */}
        <div className="md:w-1/2 flex justify-center my-5 ">
          <img src="/Hero/heroImg.png"
           alt="Student" className='w-lg h-4/5  ' />
        </div>

        {/* Text */}
        <div className={`md:w-1/2 w-full text-center ${isArabic ? "md:text-right" : "md:text-left"}`}>
          
          {/* Title */}
          <h1 className="text-[#B10B0B] text-3xl md:text-4xl font-extrabold mb-4">
            {t('title')}
          </h1>

          {/* Subtitle + description */}
          <p className="text-lg mb-6 text-gray-800 leading-8">
            <span className="flex items-center gap-1  justify-center flex-row md:justify-start md:flex-row font-bold md:text-2xl text-sm
              ">
              
              <FaInfo className="text-[#F9680E]" />
              <span className="text-[#B10B0B]">{t('subtitle')}</span>
              <span className="text-[#F9680E]">{t('word')}</span>
            </span>

            <br />
            {t('description')}
          </p>

          {/* Buttons */}
          <div className="flex flex-row-reverse gap-4 justify-center md:justify-end items-center"
            >

            <Link href="/universities"className="bg-[#B10B0B] text-white px-6 py-2 rounded-full flex justify-center items-center gap-3">
              {t('btn1')}
              {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </Link>

            <Link   href="/contact" className="bg-[#F9680E] text-white px-6 py-2 rounded-full">
              {t('btn2')}
            </Link>

          </div>

        </div>

      </section>
    </div>
  );
};

export default Hero;
