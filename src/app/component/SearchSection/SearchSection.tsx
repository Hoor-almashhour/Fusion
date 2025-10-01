
"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { LiaGraduationCapSolid } from "react-icons/lia";

export default function SearchSection() {
  const [search, setSearch] = useState("");
  const t = useTranslations('search')
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      {/* العنوان */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-7">
          <span className="text-3xl text-gray-500"><LiaGraduationCapSolid  /></span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-red-700">
          {t('title')}
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-5">
          {t('subtitle')}
        </p>
      </div>

      {/* صندوق البحث */}
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-sm p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4 rtl:md:flex-row-reverse ltr:md:flex-row rtl:text-right ltr:text-left">
          <select className="border rounded p-2 text-gray-600 ">
            <option>{t('degree')}</option>
          </select>
          <select className="border rounded p-2 text-gray-600 ">
            <option>{t('language')}</option>
          </select>
          <select className="border rounded p-2 text-gray-600 ">
            <option>{t('major')}</option>
          </select>
          <select className="border rounded p-2 text-gray-600 ">
            <option>{t('universities')}</option>
          </select>
        </div>

        {/* حقل البحث + الأزرار */}
        <div className="flex flex-col md:flex-row gap-2 ">
          <input
            type="text"
            placeholder={t('placeholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded p-2 text-right text-gray-700 border-gray-600  "
          />
          <div className="flex gap-2 sm:flex justify-center">
            <button className="bg-red-700 hover:bg-white hover:text-black text-white px-14 py-3 rounded-lg shadow-lg ">
              {t('btnSearch')}
            </button>
            <button className="bg-gray-900 hover:bg-white hover:text-black text-white px-14 py-3 rounded-lg shadow-lg ">
             {t('btnAdvanced')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
















