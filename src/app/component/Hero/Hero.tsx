'use client'
import React from 'react'
import Image from 'next/image';
import { FaInfo } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';
const  Hero = () => {
    const t = useTranslations('hero')
  return (
    <div className="bg-gray-50  text-primary font-sans ">
     <section className="flex flex-col md:flex-row-reverse items-center justify-between  min-h-[100vh] px-3 md:px-[130px] py-12
       rtl:md:flex-row-reverse ltr:md:flex-row rtl:text-right ltr:text-left
        ">
        {/* Image of the student */}
        <div className="md:w-1/2  flex justify-center  md:mb-0">
          <Image src="/Hero/heroImg.png" alt="Student"width={440} height={400} className="w-full md:max-w-[440px] h-auto" />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-right">
            <h1 className="text-[#B10B0B] text-3xl md:text-4xl font-extrabold mb-4">
                  {t('title')}
            </h1>
            <p className="text-lg mb-6 text-gray-800">
                <span className="flex items-center justify-center md:justify-start md:text-2xl text-lg font-bold gap-1">
                    <FaInfo className="text-[#F9680E]" />
                    <span className="text-[#B10B0B] ">{t('subtitle')}</span>
                    <span className="text-[#F9680E]">{t('word')}</span>
                </span>
                <br />
                 {t('description')}
            </p>

            <div className="flex  flex-row gap-4 justify-center  md:justify-start ">
                <button className="bg-[#B10B0B]  transition duration-300 ease-in-out flex items-center flex-row gap-3
                    active:scale-85 text-white px-6 py-2 rounded-full cursor-pointer">
                    {t('btn1')}
                   <FaArrowLeft />
                </button>
                <button className="bg-[#F9680E] transition duration-300 ease-in-out 
                    active:scale-85 text-white px-6   py-2 whitespace-nowrap rounded-full cursor-pointer">
                   {t('btn2')}
                </button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero