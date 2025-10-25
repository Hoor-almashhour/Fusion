"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaTelegramPlane, FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome, FaUniversity, FaUser, FaPen, FaRegClipboard } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#B10B0B] text-white">
      {/* القسم العلوي */}
      <div className="bg-[#F9680E] py-8 px-4 md:px-16 rounded-b-[40px]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <h2 className="text-lg md:text-xl font-semibold text-center md:text-right">
            ..  سنساعدك في تحديد المسار التعليمي الذي يناسبك 
          </h2>
          <div className="flex flex-col sm:flex-row-reverse items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="الهاتف مع الرمز الدولي"
              className="px-4 py-2 rounded-full text-gray-800 text-end focus:outline-none w-full sm:w-72 bg-white"
            />
            <button className="bg-[#B10B0B]  hover:bg-[#B10B0B]  transition text-white font-semibold px-8 py-2 rounded-full">
              إرسال
            </button>
          </div>
        </div>
      </div>

      {/* القسم الأوسط */}
      <div className="py-12 px-4  md:px-16">
        <div className=" max-w-6xl mx-auto flex flex-1 gap-8 flex-col-reverse md:flex-3 md:flex-row md:justify-between md:gap-8 text-center md:text-right">
          {/* معلومات التواصل */}
          <div>
            <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-end gap-2">
                
                من 8 صباحًا حتى 6 مساءً، من الإثنين إلى السبت
                <FaClock className="text-yellow-400" />
              </li>
              <li className="flex items-center justify-end  gap-2">
               
                <Link href="https://wa.me/905318598487" className="text-white hover:text-secondary font-semibold">
                    00905318598487
                </Link>
                 <FaPhoneAlt className="text-yellow-400" />
              </li>
              <li className="flex items-center justify-end  gap-2">
               
                 <Link href="mailto:info@fusion-turk.com" className="text-white hover:text-secondary font-semibold">
                    info@fusion-turk.com
                </Link>
                 <FaEnvelope className="text-yellow-400" />
              </li>
              <li className="flex items-center justify-end gap-2">
               
                 Taksim/ Istanbul
                 <FaMapMarkerAlt className="text-yellow-400" />
              </li>
            </ul>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-400 transition cursor-pointer">
                الرئيسية
                <FaHome className="text-yellow-400" /> 
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-400 transition cursor-pointer">
                الجامعات
                 <FaUniversity className="text-yellow-400" />
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-400 transition cursor-pointer">
                 من نحن
                 <FaUser className="text-yellow-400" />
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-400 transition cursor-pointer">
                المدونة
                <FaPen className="text-yellow-400" /> 
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-400 transition cursor-pointer">
                 التسجيل
                 <FaRegClipboard className="text-yellow-400" />
              </li>
            </ul>
          </div>

          {/* الشعار ووسائل التواصل */}
          <div className="flex flex-col items-center md:items-end space-y-4">
             <Image src="/Logo/logo2.png" alt="FUSION logo" width={160} height={60} className="w-auto h-auto" />
            <div className="flex gap-4 text-xl">
                <Link href="https://www.facebook.com/share/1MAs2ux3mt/" className=" text-white ">
                  <FaFacebookF className="hover:text-yellow-400 cursor-pointer transition" />
                </Link>
                 <Link href="https://www.instagram.com/fusion.edserv" className=" text-white ">
                   <FaInstagram className="hover:text-yellow-400 cursor-pointer transition" />
                 </Link>
                <Link href="https://www.tiktok.com/@fusion.edserv" className=" text-white ">
                  <FaTiktok />
                </Link>
              <FaTelegramPlane className="hover:text-yellow-400 cursor-pointer transition" />
              <Link href="https://wa.me/905318598487" className="text-white ">
                 <FaWhatsapp className="hover:text-yellow-400 cursor-pointer transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* القسم السفلي */}
      <div className="border-t border-white/20 py-4 text-xs text-center md:text-right px-4 md:px-16 flex flex-col md:flex-row 
         justify-center  items-center gap-2">
        <div className="flex gap-4">
          <Link href="#" className="hover:text-yellow-400 transition font-extrabold">
            SUPPORT
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition font-extrabold">
            PRIVACY POLICY
          </Link>
        </div>
        <p className="text-white/70 font-extrabold">
          Copyright © 2025 Uranus Education. All rights reserved
        </p>
      </div>
    </footer>
  );
}
