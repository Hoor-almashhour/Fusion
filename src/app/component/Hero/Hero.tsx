'use client';

import React from 'react';
import Image from 'next/image';
import { FaInfo } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="bg-gray-50 text-primary font-sans">
      <section className="flex flex-col md:flex-row-reverse items-center justify-between min-h-[100vh] px-3 md:px-[130px] py-12">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image src="/Hero/heroImg.png" alt="Student" width={440} height={300} style={{ height: 'auto', width: 'auto' }} priority />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full text-center md:text-right">
          <h1 className="text-[#B10B0B] text-3xl md:text-4xl font-extrabold mb-4">
            احصل على قبولك الجامعي في تركيا
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            <span className="flex items-center justify-center md:justify-start md:text-2xl text-lg font-bold gap-1">
              <FaInfo className="text-[#F9680E]" />
              <span className="text-[#B10B0B]">لا تخلي الفرصة</span>
              <span className="text-[#F9680E]">!تفوتك</span>
            </span>
            <br />
            فيوجن للخدمات التعليمية في تركيا، نساعد الطلاب في التقديم والالتحاق بأفضل الجامعات التركية والدولية، مع دعم كامل في إجراءات القبول والفيزا.
          </p>

          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#B10B0B] text-white px-6 py-2 rounded-full flex items-center gap-3">
              الجامعات
              <FaArrowLeft />
            </button>
            <button className="bg-[#F9680E] text-white px-6 py-2 rounded-full">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
