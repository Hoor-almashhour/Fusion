import { TProps } from "@/app/types/translation";


export default function Intro({ t }: TProps) {
  return (
    <section >
      <div className="max-w-6xl text-right">
        <p className="text-gray-700 text-lg leading-9 mb-8">{t("intro.p1")}</p>
        <p className="text-gray-700 text-lg leading-9 mb-12">{t("intro.p2")}</p>
            <div className="relative w-full md:w-3/5 mx-auto bg-[#B10B0B] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-end p-6 md:p-12 shadow-lg">
             {/* الخلفية شبه شفافة مع العلم */} 
               <div className="absolute inset-0 opacity-30 bg-[url('/imagesflag/tr-flag.jpg')] bg-cover bg-center "></div>
               <div className="relative z-10  w-full md:w-1/2 md:flex md:justify-end md:items-end ">
                 <img src="/imagesStats/Imgsrc.jpg" alt="طالبة تدرس في تركيا"
                   width={350} height={350} className="rounded-full border-4 border-yellow-400 shadow-xl object-cover" /> 
                </div>
            </div>
      </div>
    </section>
  );
}
