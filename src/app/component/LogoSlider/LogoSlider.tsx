"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const logos = [
  { src: "/logos/Kultur.png", alt: "Ozyegin University" },
  { src: "/logos/Ted.webp", alt: "Istanbul Kent University" },
  { src: "/logos/tic.avif", alt: "Nisantasi University" },
  { src: "/logos/Bau.webp", alt: "Fenerbahce University" },
  { src: "/logos/yeni.jpg", alt: "Gedik University" },
  { src: "/logos/nisantasi.jpg", alt: "Yeni Yuzyil University" },
];

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25, // سرعة الحركة (كلما زادت القيمة صار أبطأ)
        }}
      >
        {/* نكرر القائمة مرتين حتى لا يكون هناك فراغ عند نهاية الانزلاق */}
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-sm flex items-center justify-center p-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
