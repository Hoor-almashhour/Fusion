"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaUniversity,
  FaUser,
  FaPen,
  FaRegClipboard,
} from "react-icons/fa";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <footer dir={isArabic ? "rtl" : "ltr"} className="bg-[#B10B0B] text-white">
    
      <div className="bg-[#F9680E] py-8 px-4 md:px-16 rounded-b-[40px]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-lg md:text-xl font-semibold text-center md:text-right">
            {t("helpTitle")}
          </h2>

          <div className="flex flex-col sm:flex-row-reverse items-center gap-3 w-full md:w-auto">
            <input
             dir={isArabic ? "rtl" : "ltr"}
              type="text"
              placeholder={t("phonePlaceholder")}
              className={`
              px-4 py-2 rounded-full text-gray-800 text-end focus:outline-none w-full sm:w-72 bg-white 
               ${isArabic ? "text-left": "text-right"
              }`}
            />
            <button className="bg-[#B10B0B] hover:bg-[#B10B0B] transition text-white font-semibold px-8 py-2 rounded-full">
              {t("send")}
            </button>
          </div>
        </div>
      </div>

    
      <div  className="py-12 px-4 md:px-16">
        <div  className="max-w-6xl mx-auto flex flex-1 gap-8 flex-col-reverse justify-center items-center md:flex-row-reverse md:justify-between md:gap-8 text-center md:text-left">
          
         
          <div >
            <h3 className="text-lg font-semibold mb-4">{t("contactTitle")}</h3>
            <ul  className="space-y-3 text-sm">
              <li  className="flex items-center justify-start gap-2">
                 <FaClock  className="text-yellow-400" />
                {t("workHours")}
               
              </li>

              <li className="flex items-center justify-start gap-2">
                 <FaPhoneAlt className="text-yellow-400" />
                <Link href="https://wa.me/905318598487" className="font-semibold">
                  00905318598487
                </Link>
               
              </li>

              <li className="flex items-center justify-start gap-2">
                 <FaEnvelope className="text-yellow-400" />
                <Link href="mailto:info@fusion-turk.com" className="font-semibold">
                  info@fusion-turk.com
                </Link>
              </li>

              <li className="flex items-center justify-start gap-2">
                 <FaEnvelope className="text-yellow-400" />
                {t("address")}
              </li>
            </ul>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-3 text-sm">

              <li className="flex items-center gap-2">
              <FaHome className="text-yellow-400" />
              <Link href="/" className="hover:underline">
                {t("home")}
              </Link>
            </li>

              <li className="flex items-center justify-start gap-2">
                <FaUniversity className="text-yellow-400" />
                {t("universities")}
              </li>

              <li className="flex items-center gap-2">
                <FaUser className="text-yellow-400" />
                <Link href="/about" className="hover:underline">
                  {t("about")}
                </Link>
              </li>


              <li className="flex items-center gap-2">
                <FaPen className="text-yellow-400" />
                <Link href="/blog" className="hover:underline">
                  {t("blog")}
                </Link>
             </li>

              <li className="flex items-center gap-2">
                <FaRegClipboard className="text-yellow-400" />
                <Link href="/contact" className="hover:underline">
                  {t("register")}
                </Link>
              </li> 

            </ul>
          </div>

        
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Image
            src="/logo/1.jpg"
            alt="FUSION logo"
             width={144}
            height={144}
            className="rounded-full mx-auto"
             priority
          />


            <div className="flex gap-4 text-xl">
              <Link href="https://www.facebook.com/share/1MAs2ux3mt/"
               className="text-white">
                <FaFacebookF />
              </Link>

              <Link href="https://www.instagram.com/fusion.edserv"
               className="text-white">
                <FaInstagram />
              </Link>

              <Link href= "https://www.tiktok.com/@fusion.edserv"
               className="text-white">
                <FaTiktok />
              </Link>

              <Link href="https://wa.me/905318598487" className="text-white">
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-white/20 py-4 text-xs text-center md:text-right px-4 md:px-16 flex flex-col-reverse md:flex-row justify-center items-center gap-2">
        <div className="flex gap-4">
          <Link href="#">{t("support")}</Link>
          <span>|</span>
          <Link href="#">{t("privacy")}</Link>
        </div>

        <p className="text-white/70 font-extrabold">{t("rights")}</p>
      </div>
    </footer>
  );
}
