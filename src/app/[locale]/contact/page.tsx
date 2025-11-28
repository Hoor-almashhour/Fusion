'use client';

import { useTranslations, useLocale } from 'next-intl';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';
 import { E164Number } from "libphonenumber-js/core";
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import PhoneInputField from './PhoneInputField';
import { LiaGraduationCapSolid } from 'react-icons/lia';

const ContactPage = () => {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const [phone, setPhone] = useState<E164Number | undefined>();

  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message })
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="px-4  md:px-24 py-36  text-primary"
    >
      {/* العنوان */}
      <div className="flex justify-center mb-7">
          <span className="text-3xl text-gray-500">
            <LiaGraduationCapSolid />
          </span>
        </div>
      <h1 className="text-center text-3xl font-bold text-[#B10B0B] mb-10">
            
        {t('title')}
      </h1>

      <div className="flex flex-col-reverse md:flex-row-reverse items-start gap-10">

        {/* الخريطة + معلومات الاتصال */}
        <div className="md:w-1/2 space-y-6">

          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6022.9325074818835!2d28.84075!3d40.993167!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1764189854238!5m2!1sen!2str"
             width="575" height="450" 
             className='p-2'
              loading="lazy"
               >

             </iframe>

          <div className="text-lg space-y-2">
            <p>📍 Istanbul, Turkey</p>
            <p>📞 905318598487+</p>
            <p>📧 info@fusion-turk.com</p>

            <div className="flex gap-4 pt-2">
             <Link href="https://www.facebook.com/share/1MAs2ux3mt/" className="bg-[#F9680E] text-white p-2 rounded-full hover:bg-[#B10B0B]">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/fusion.edserv" className="bg-[#F9680E] text-white p-2 rounded-full hover:bg-[#B10B0B]">
              <FaInstagram />
            </Link>
            <Link href="https://www.tiktok.com/@fusion.edserv" className="bg-[#F9680E] text-white p-2 rounded-full hover:bg-[#B10B0B]">
              <FaTiktok />
            </Link>
            </div>
          </div>
        </div>

        {/* نموذج التواصل */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow">

          <label className="font-semibold">{t('name')}</label>
          <input
            className="w-full border rounded p-2 mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="font-semibold">{t('email')}</label>
          <input
            className="w-full border rounded p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="font-semibold">{t('phone')}</label>
              <PhoneInputField value={phone} onChange={setPhone} />
             

          <label className="font-semibold">{t('message')}</label>
          <textarea
            className="w-full border rounded p-3 h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={sendMessage}
            className="bg-[#1A1A2E] text-white w-full py-3 mt-4 rounded"
          >
            {t('send')}
          </button>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
