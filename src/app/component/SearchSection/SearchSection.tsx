'use client';

import { useState } from 'react';
import { LiaGraduationCapSolid } from 'react-icons/lia';

export default function SearchSection() {
  const [search, setSearch] = useState('');

  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      {/* العنوان */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-7">
          <span className="text-3xl text-gray-500">
            <LiaGraduationCapSolid />
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-red-700">
          ابحث عن تخصص
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-5">
          استخدم محرك البحث المتقدم لدينا لإيجاد المناسب لك.
        </p>
      </div>

      {/* البحث */}
      <div dir="rtl" className="w-full max-w-7xl bg-white shadow-lg rounded-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
          <select className="border rounded p-2 text-gray-600">
            <option>الدرجة</option>
          </select>
          <select className="border rounded p-2 text-gray-600">
            <option>اللغة</option>
          </select>
          <select className="border rounded p-2 text-gray-600">
            <option>التخصص</option>
          </select>
          <select className="border rounded p-2 text-gray-600">
            <option>الجامعات</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="بحث عن ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded p-2 text-right text-gray-700 border-gray-600"
          />
          <div className="flex gap-2 justify-center">
            <button className="bg-red-700 hover:bg-white hover:text-black text-white px-14 py-3 rounded-lg shadow-lg">
              بحث
            </button>
            <button className="bg-gray-900 hover:bg-white hover:text-black text-white px-14 py-3 rounded-lg shadow-lg">
              متقدم
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
