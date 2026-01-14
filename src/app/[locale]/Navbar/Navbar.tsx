'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaTimes, FaBars, FaTiktok } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { IoChevronDown } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa6';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from '@/app/component/LanguageSwitcher/LanguageSwitcher';
import Image from "next/image";




const Navbar = () => {

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('navbar');
  const locale = useLocale();
  const isArabic = locale === "ar";
 
  const links = [
    { href: "/", label: t('home') },
    { href: "/study-steps", label: t('steps')},
    { href: "/universities" , label: t('universities'), icon: <IoChevronDown /> },
    { href: "/blog",   label: t('news') },
    { href: "/about", label: t('about')},
    { href: "/contact", label: t('contact') },
  ];

  return (
    <header  className="text-sm bg-[#B10B0B] ">
    
      <div dir={isArabic ? "rtl" : "ltr"} className="hidden md:flex justify-between flex-row-reverse items-center  py-2 px-[130px] text-white text-sm bg-primary">
        <div className="flex justify-center items-center gap-7 flex-row-reverse">
          <Link href="mailto:info@fusion-turk.com" className="text-white hover:text-secondary font-semibold">
            info@fusion-turk.com
          </Link>
          <Link href="https://wa.me/905318598487" className="text-white hover:text-secondary font-semibold">
            00905318598487
          </Link>
        </div>

        <div className="flex gap-5">
          <div className="flex gap-2 text-lg">
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
          <button className="font-semibold text-white bg-[#F9680E] px-3 py-1 rounded-full hover:bg-[#B10B0B]">
            {t('partner')}
          </button>
        </div>
      </div>

      
      <nav dir={isArabic ? "rtl" : "ltr"} className="bg-white text-black fixed w-full  z-40  ltr:flex-row-reverse">
        <div className="sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:h-[140px] px-5">
            {/* Logo */}
            <div className="flex-shrink-0">
               <img
                src="/images/logo/fusion.png"
                alt="FUSION logo"
                className="rounded-full object-cover h-28 w-28"
              />
              
            </div>

            {/* Desktop Menu */}
              <ul dir={isArabic ? "rtl" : "ltr"} className="hidden md:flex font-semibold text-black   relative">
                 {links.slice(0, 2).map((link) => ( 
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3 py-6 hover:text-[#F9680E] ${
                        pathname === link.href ? "text-[#F9680E]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
               ))}

                <li>
                <Link
                  href="/countries"
                  className={`flex items-center px-3 py-6 hover:text-[#F9680E] ${
                    pathname === "/countries" ? "text-[#F9680E]" : ""
                  }`}
                >
                  {t('country')}
                </Link>
              </li>

                
                {links.slice(2).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3 py-6 hover:text-[#F9680E] ${
                        pathname === link.href ? "text-[#F9680E]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>


            {/* زر التسجيل */}
            <div className="hidden md:flex items-center  gap-4  ">
              <Link href="https://wa.me/905318598487"className="text-white px-9 py-2 bg-[#F9680E] rounded-full font-semibold hover:bg-[#B10B0B]">
                {t('register')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-[#B10B0B] p-5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-[75%] h-full bg-[#B10B0B] shadow-lg z-50 flex flex-col">
            <div className="flex items-center justify-between flex-row-reverse p-5">
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes className="text-2xl text-white" />
              </button>
            </div>
          
            <ul className="flex flex-col items-center font-semibold text-white text-lg px-4">
             
              {links.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-4 flex justify-between items-center w-full text-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/countries"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-4 flex justify-center items-center w-full text-center"
                >
                  {t('country')}
                </Link>
              </li>

              {links.slice(2).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-4 flex justify-between items-center w-full text-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>


        <div className="flex justify-center mt-5">
          <LanguageSwitcher />
        </div>
 
            <div className="pt-6 flex flex-row justify-center gap-4 px-9 mb-6">
              <Link href="https://facebook.com" className="text-white text-lg">
                <FaFacebookF />
              </Link>
              <Link href="https://instagram.com" className="text-white text-lg">
                <FaInstagram />
              </Link>
              <Link href="https://tiktok.com" className="text-white text-lg">
                <FaTiktok />
              </Link>
            </div>
              <div className='text-center  my-9'>
                 <Link href="https://wa.me/905318598487" className="text-center py-2 px-14 bg-white rounded-full font-bold">
                   {t('register')}
                </Link>
              </div>
           
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
