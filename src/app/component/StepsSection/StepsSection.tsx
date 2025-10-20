// components/StepsSection.tsx
import React from "react";
import Image from "next/image";
export default function StepsSection() {
  return (
    <section dir="rtl" className="bg-white py-18">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#3b2b4a]">
            خطوات التقديم على الدراسة في تركيا
          </h3>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {/* Step 1 */}
          <article className="rounded-2xl  border-dashed border-3 border-gray-300 bg-white p-6 flex flex-col items-center text-center">
            <div className="w-36 h-36 mb-4 flex items-center justify-center">
              <Image
                src="/Steps/step1.png"
                alt="خطوة 1"
                width={300}
                height={300}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            <div className="mt-2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute right-3 -top-38">
                  <div className="w-12 h-12 border-red-100 rounded-full bg-[#F9680E] text-white flex items-center justify-center text-lg font-semibold">
                    1
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-[#8a0a0a] mb-3">التواصل مع المستشار التعليمي</h4>
              </div>

              <p className="text-gray-500 leading-relaxed">
                والتعرّف على جميع المعلومات اللازمة للتقديم.
              </p>
            </div>
          </article>

          {/* Step 2 */}
          <article className="rounded-2xl border-3 border-dashed border-gray-300 bg-white  p-6 flex flex-col items-center text-center">
            <div className="w-36 h-36 mb-4">
              <Image
                src="/Steps/step2.png"
                alt="خطوة 2"
                width={300}
                height={300}
                 className="object-contain w-full h-full"
                priority
               
              />
            </div>
            <div className="relative mt-2">
              <div className="absolute right-3 -top-38">
                <div className="w-12 h-12 rounded-full bg-[#8a0a0a] text-white flex items-center justify-center text-lg font-semibold">
                  2
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[#8a0a0a] mb-3">إعداد الوثائق للتقديم</h4>
            </div>
            <p className="text-gray-500 leading-relaxed mt-2">
              إعداد المستندات المطلوبة للدراسة في إحدى الجامعات الحكومية أو الخاصة.
            </p>
          </article>

          {/* Step 3 */}
          <article className="rounded-2xl border-3 border-dashed border-gray-300 bg-white  p-6 flex flex-col items-center text-center">
            <div className="w-36 h-36 mb-4">
              <Image
                src="/Steps/step3.png"
                alt="خطوة 3"
                 width={300}
                height={300}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="relative mt-2">
              <div className="absolute right-3 -top-38 ">
                <div className="w-12 h-12 rounded-full bg-[#F9680E] text-white flex items-center justify-center text-lg font-semibold">
                  3
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[#8a0a0a] mb-3">دراسة الملف والقبول المبدئي</h4>
            </div>
            <p className="text-gray-500 leading-relaxed mt-2">
              بعد دراسة الملف، الخطوة التالية هي حصولك على القبول المبدئي.
            </p>
          </article>

          {/* Step 4 */}
          <article className="rounded-2xl border-3 border-dashed border-gray-300 bg-white  p-6 flex flex-col items-center text-center ">
            <div className="w-36 h-36 mb-2">
             <Image
                src="/Steps/step4.png"
                alt="خطوة 4"
                width={300}
                height={300}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="relative mt-2">
              <div className="absolute right-3 -top-38 ">
                <div className="w-12 h-12 rounded-full bg-[#8a0a0a] text-white flex items-center justify-center text-lg font-semibold">
                  4
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[#8a0a0a] mb-3">إتمام الإجراءات والحصول على القبول النهائي</h4>
            </div>
            <p className="text-gray-500 leading-relaxed mt-2">
              ومن ثم سنقوم باستكمال الإجراءات كي تحصل على القبول النهائي.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
