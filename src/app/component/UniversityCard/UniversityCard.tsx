// /components/UniversityCard.tsx
import { University } from "@/app/data/universities";
import Link from "next/link";
import Image from "next/image";


type Props = University;

export default function UniversityCard({ name, city, logo, icon: Icon }: Props) {
  return (
         <div className="flex-shrink-0 w-[90%] md:w-[320px] rounded-2xl border shadow-lg p-6 flex flex-col items-center justify-between h-[320px] bg-white mx-auto">
            <Image
                src={logo}
                alt={name}
                width={96}
                height={96}
                className="object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-[#F9680E] mb-2">{name}</h3>
            <div className="flex items-center justify-center gap-1.5">
            <p className="text-gray-700 uppercase">{city}</p>
            <span className="text-gray-700 text-lg"><Icon /></span>
            </div>

            <div className="flex flex-row justify-between w-full mt-6">
            <Link
                href="#"
                className="bg-[#F9680E] text-white py-3 sm:py-4 w-full sm:w-1/2 rounded-l-lg hover:bg-[#f77b2b] transition"
            >
                ...المزيد
            </Link>
            <Link
                href="https://wa.me/905318598487"
                className="bg-[#B10B0B] text-white py-3 sm:py-4 w-full sm:w-1/2 rounded-r-lg hover:bg-[#8a0a0a] transition"
            >
                سجل الآن
            </Link>
            </div>
        </div>
    );
}
