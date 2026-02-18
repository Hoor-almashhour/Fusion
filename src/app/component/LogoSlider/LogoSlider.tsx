"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { universitiesList } from "@/app/data/universities";


type Props = {
  lang: "ar" | "en";
};

export default function LogoSlider({ lang }: Props) {
  const logos = [...universitiesList, ...universitiesList]; 

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <motion.div
        className="flex gap-12 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 45,
        }}
      >
        {logos.map((u, idx) => (
          <div
            key={`${u.slug}-${idx}`} 
            className="flex-shrink-0 w-24 h-24 md:w-30 md:h-30 bg-white rounded-full shadow-sm flex items-center justify-center p-6"
          >
            <Image
              src={u.logo}
              alt={u.name[lang]}
              width={120}
              height={120}
              unoptimized
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
