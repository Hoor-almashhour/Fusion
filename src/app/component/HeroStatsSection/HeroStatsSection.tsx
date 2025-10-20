import Image from "next/image";
import React from "react";
import { LiaGraduationCapSolid } from "react-icons/lia";


const imageSrc = "/imagesStats/Imgsrc.jpg"; 

export default function HeroStatsSection(){
  return (
    <section  className="bg-gray-100 py-16">
      <div  className="max-w-6xl mx-auto px-6 ">
        <div  className="flex flex-col-reverse lg:flex-row items-center gap-11">
          {/* left column - content */}
          <div  dir="rtl" className="w-full md:w-1/2">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-right gap-6">
              {/* small icon + subtitle */}
              <div className="flex flex-col items-center lg:items-start gap-2">
                
                  {/* graduation cap icon */}
                   <LiaGraduationCapSolid className="text-gray-500 text-4xl"/>
                
                <p className="text-gray-500 text-lg">تعرّف علينا عن قُرب</p>
              </div>

              {/* headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
                لأنك تستحق الأفضل دائماً
              </h2>

              {/* stats */}
              <div   className="w-full mt-6">
                <div   className=" flex-row flex items-center md:flex-row-reverse justify-between flex-wrap">
                  {/* stat 1 */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="p-2 rounded-md text-orange-500">
                      {/* advisor icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
                      </svg>
                    </div>
                    <div className="mt-3 text-gray-800 text-xl font-medium">+120</div>
                    <div className="mt-1 text-gray-400 text-sm">فريق استشاري</div>
                  </div>

                  {/* stat 2 */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="p-2 rounded-md text-orange-500">
                      {/* specialization icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v6" />
                      </svg>
                    </div>
                    <div className="mt-3 text-gray-800 text-xl font-medium">+120</div>
                    <div className="mt-1 text-gray-400 text-sm">تخصص جامعي</div>
                  </div>

                  {/* stat 3 */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="p-2 rounded-md text-orange-500">
                      {/* university icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 9l10 6 10-6-10-6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 15l10 6 10-6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 9l10 6 10-6" />
                      </svg>
                    </div>
                    <div className="mt-3 text-gray-800 text-xl font-medium">+120</div>
                    <div className="mt-1 text-gray-400 text-sm">جامعة معتمدة</div>
                  </div>

                  {/* stat 4 */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="p-2 rounded-md text-orange-500">
                      {/* happy students icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h.01M15 9h.01" />
                      </svg>
                    </div>
                    <div className="mt-3 text-gray-800 text-xl font-medium">+15,000</div>
                    <div className="mt-1 text-gray-400 text-sm">طلبة سعداء</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right column - image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* decorative blob */}
            <div className="hidden md:block absolute -right-10 top-8 w-64 h-64 bg-orange-100 rounded-full transform rotate-12" aria-hidden />

            <div className="relative z-10 w-[320px] sm:w-[420px] md:w-[520px] lg:w-[560px] shadow-lg rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt="صورة توضيحية"
                width={800}
                height={800}
                className="object-cover w-auto h-64 md:h-[360px] lg:h-[420px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
