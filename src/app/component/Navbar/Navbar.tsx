'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaTimes, FaBars, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoChevronDown } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa6';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/StudyStepsInTurkey", label: "خطوات الدراسة في الخارج" },
    { href: "#", label: "الدول", icon: <IoChevronDown /> },
    { href: "#", label: "الجامعات", icon: <IoChevronDown /> },
    { href: "#", label: "باقات فيوجن" },
    { href: "#", label: "أخبار ومقالات" },
    { href: "#", label: "من نحن" },
    { href: "#", label: "تواصل معنا" },
  ];

  return (
    <header className="text-sm">
      {/* الشريط العلوي */}
      <div className="hidden md:flex justify-between items-center py-2 px-[130px] text-white text-sm rtl:flex-row-reverse ltr:flex-row bg-primary">
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
            كن شريكنا
          </button>
        </div>
      </div>

      {/* الناف بار الرئيسي */}
      <nav dir='rtl' className="bg-white text-black fixed w-full rtl:flex-row ltr:flex-row-reverse z-40">
        <div className="sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:h-[140px] px-5">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src="/Logo/logo2.png" alt="FUSION logo" width={60} height={50} className="w-auto h-auto" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex font-semibold text-black rtl:flex-row ltr:flex-row-reverse">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-6 hover:text-orange-500 ${
                      pathname === link.href ? "text-orange-500" : ""
                    }`}
                  >
                    {link.label}
                    {link.icon && <span>{link.icon}</span>}
                  </Link>
                </li>
              ))}
            </ul>

            {/* زر التسجيل */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="#" className="text-white px-9 py-2 bg-[#F9680E] rounded-full font-semibold hover:bg-[#B10B0B]">
                سجل الآن
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

            <ul className="flex flex-col  items-center font-semibold text-white text-lg px-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)} className="px-4 py-4 flex justify-between items-center">
                    {link.label}
                    {link.icon && <span>{link.icon}</span>}
                  </Link>
                </li>
              ))}
            </ul>

            {/* روابط اللغة */}
            <div className="flex flex-col  items-center gap-4 px-9 mt-2">
              <span className="text-white text-lg">Arabic (العربية)</span>
              <span className="text-white text-lg">English (الإنجليزية)</span>
            </div>

            {/* Socials */}
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
                  سجل الآن
                </Link>
              </div>
           
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
