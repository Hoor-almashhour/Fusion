'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaTimes, FaBars, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoChevronDown } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

const Navbar = () => {
   const pathname = usePathname();
   const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations('navbar')

   const links = [
   { href: "/", label: t('home') },
    { href: "#", label: t('steps') },
    { href: "#", label: t('country'), icon: <IoChevronDown /> },
    { href: "#", label: t('universities'), icon: <IoChevronDown /> },
    { href: "#", label: t('packages') },
    { href: "#", label: t('news') },
    { href: "#", label: t('about') },
    { href: "#", label: t('contact') }
    
  ];


  return (
    <header className="text-sm">
      <div className="hidden md:flex justify-between items-center py-2 px-[130px]  text-white text-sm 
         rtl:flex-row-reverse ltr:flex-row">
        <div className="flex justify-center items-center gap-7 flex-row-reverse bg-primary">
             <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=info@fusion-turk.com" className="text-white hover:text-secondary  cursor-pointer text-sm font-semibold">info@fusion-turk.com</Link>
            <Link href="https://wa.me/905318598487" className="text-white hover:text-secondary cursor-pointer text-sm font-semibold">00905013530333</Link> 
        </div>
      
          <div className='flex gap-5 bg-primary'>
                <div className="flex gap-2 text-lg">
                    <Link href="https://www.facebook.com/share/1MAs2ux3mt/" className="bg-[#F9680E] text-white p-2 rounded-full cursor-pointer hover:bg-[#B10B0B]">
                       <FaFacebookF />
                    </Link>
                    <Link href="https://www.instagram.com/fusion.edserv?igsh=MTdiMjBqczVxMnhzZg==" className="bg-[#F9680E] text-white p-2 rounded-full cursor-pointer hover:bg-[#B10B0B] ">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.tiktok.com/@fusion.edserv?is_from_webapp=1&sender_device=pc" className="bg-[#F9680E] text-white p-2 rounded-full cursor-pointer hover:bg-[#B10B0B]">
                        <FaTiktok />
                    </Link>
                </div>
              <button className="font-semibold text-white bg-[#F9680E] cursor-pointer hover:transition duration-300 ease-in-out
                    active:scale-85
                 px-3 py-1 rounded-full ">
                  {t('partner')}
              </button>
         </div>
      </div>

      <nav className="bg-white text-black fixed w-full rtl:flex-row ltr:flex-row-reverse">
        <div className=" sm:px-6 lg:px-8 rtl:flex-row-reverse ltr:flex-row ">
          <div className="flex justify-between items-center md:h-[140px] px-5 rtl:flex-row ltr:flex-row-reverse ">
              {/* Logo */}
            <div className="md:flex-shrink-0 ">
              <Image src="/Logo/Logo.jpg" alt="FUSION logo" width={60} height={50} className=" w-auto"/>
            </div>
             {/* Desktop Menu */}
              <ul className="hidden md:flex font-semibold text-black rtl:flex-row ltr:flex-row-reverse">
                {links.map((link) => (
                    <li key={link.href + link.label}>
                    <Link
                        href={link.href}
                        className={`flex items-center gap-1 px-3 py-6 ${
                        link.href === "/"
                            ? pathname === "/" || pathname === "/سجل الآن"
                            ? " text-orange-500"
                            : "hover:text-orange-500"
                            : pathname.startsWith(link.href)
                            ? " text-orange-500"
                            : "hover:text-orange-500"
                        }`}
                    >
                       {link.label}
                       {link.icon && <span>{link.icon}</span>}
                    </Link>
                    </li>
                ))}
             </ul>


            {/* Actions */}
            <div className="hidden md:flex items-center gap-4 rtl:flex-row ltr:flex-row-reverse">
              <Link href="#" className=" text-white px-9 py-2 bg-[#F9680E]  
              cursor-pointer rounded-full font-semibold hover:bg-[#B10B0B] hover:text-white">
                  {t('register')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-[#B10B0B] p-5  rtl:ms-4 ltr:ms-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                   <FaBars />
                </button>
      </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-[75%] h-full bg-[#B10B0B] shadow-lg z-50 flex flex-col  ">
            <div className="flex items-center justify-between flex-row-reverse p-5 ">
                <button onClick={() => setMenuOpen(false)}>
                   <FaTimes className="text-2xl text-white" />
                </button>
            </div>
               <div className="md:hidden px-4 ">
                    <ul className="flex flex-col  font-semibold text-white text-lg ">
                        {links.map((link) => (
                        <li key={link.href + link.label}>
                            <Link 
                            href={link.href}
                            className={`px-6 py-5 flex justify-between items-center " ${
                                link.href === "/"
                                ? pathname === "/" || pathname === "/سجل الآن"
                                    ? " text-orange-500"
                                    : ""
                                : pathname.startsWith(link.href)
                                ? " text-orange-500"
                                : ""
                            }`}
                            onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                               {link.icon && <span>{link.icon}</span>}
                            </Link>
                        </li>
                        ))}
                   </ul>
               </div>
               
                {/* لغة */}
                <div className="flex flex-col items-start gap-4 px-9 mt-2">
                <Link href="/" locale="ar" className="text-white hover:text-[#F9680E] text-lg"> Arabic (العربية)  </Link>
                <Link href="/" locale="tr" className="text-white hover:text-[#F9680E] text-lg"> Türkçe  (التركية) </Link>
                <Link href="/" locale="en" className="text-white hover:text-[#F9680E] text-lg"> English (الإنجليزية) </Link>
                </div>
                <div className="pt-6 flex flex-row items-start gap-4 px-9  mb-6">
                    <Link href="https://www.facebook.com/share/1MAs2ux3mt/" className=" text-white cursor-pointer text-lg hover:bg-[#F9680E]">
                        <FaFacebookF />
                    </Link>
                    <Link href="https://www.instagram.com/fusion.edserv?igsh=MTdiMjBqczVxMnhzZg==" className=" text-white cursor-pointer text-lg hover:bg-[#F9680E]">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.tiktok.com/@fusion.edserv?is_from_webapp=1&sender_device=pc" className=" text-white cursor-pointer text-lg hover:bg-[#F9680E]">
                        <FaTiktok />
                    </Link>
                </div>
                <Link href="#" className=" text-primary text-center py-2 mx-9 w-[170px] bg-white 
                     cursor-pointer rounded-full font-bold hover:bg-primary ">
                     {t('register')}
                </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
