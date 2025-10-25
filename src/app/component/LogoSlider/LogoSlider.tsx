"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { universities } from "@/app/data/universities";
 // استيراد البيانات

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {/* نكرر القائمة مرتين حتى لا يكون هناك فراغ عند نهاية الانزلاق */}
        {[...universities, ...universities].map((u, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-24 h-24 md:w-30 md:h-30 bg-white rounded-full shadow-sm flex flex-col items-center justify-center p-4"
          >
            <Image
              src={u.logo}
              alt={u.name}
              width={110}
              height={110}
              className="object-contain rounded-full "
            />
            
          </div>
        ))}
      </motion.div>
    </div>
  );
}
