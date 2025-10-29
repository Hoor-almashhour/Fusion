"use client";

import UniversitiesSlider from "@/app/component/UniversitiesSlider/UniversitiesSlider";
import Image from "next/image";
import Link from "next/link";
import { FaUniversity } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { GrFormSchedule } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
 

export default function TurkeyPage() {
  return (
    <main className="flex flex-col items-center bg-white">
      {/* 🟥 Hero Section */}
        <section className="relative md:w-full min-h-[80vh] bg-gray-50 flex items-center justify-center overflow-hidden">
            {/* المحتوى */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full px-6 md:px-16">
                {/* الصورة */}
                <div className="w-full md:w-1/2 flex justify-center mb-10 md:mt-16">
                <Image src="/Hero/heroImg.png" alt="Student" width={440} height={300} style={{ height: 'auto', width: 'auto' }} priority />
                </div>

                {/* النص */}
                <div className="w-full text-center md:text-right text-white">
                <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4 text-[#F9680E]">
                    الدراسة في تركيا: المميزات والشروط للجامعات التركية
                </h1>
                <div className="flex items-center justify-center md:justify-end md:items-end gap-3 flex-col">
                    <span className="block w-16 h-[2px] bg-[#F9680E]"></span>
                    <FaUniversity  className="text-[#F9680E] text-3xl"/>
                </div>
                </div>
            </div>
        </section>
        {/* stats */}
        <section className="w-full bg-white flex justify-center">
             <div className="flex flex-wrap justify-center items-center flex-row-reverse gap-32 max-w-7xl py-10">
                {/* stat 1 */}
                <div className="flex flex-col items-end justify-end">
                    <div className="p-2 rounded-md text-orange-500">
                        {/* advisor icon */}
                        <RiTeamFill  className="text-3xl"/>
                    </div>
               
                    <div className="mt-1 text-gray-900 text-lg font-semibold">التعداد السكاني </div>
                    <div className="mt-3 text-gray-700 text-xl font-semibold">
                    <p dir="rtl">  <span dir="ltr">91+</span> مليون نسمة</p>
                    </div>

                </div>

                {/* stat 2 */}
                <div className="flex flex-col  items-end justify-end ">
                <div className="p-2 rounded-md text-orange-500">
                    {/* specialization icon */}
                    <GrFormSchedule  className="text-3xl" />
                </div>
               
                <div className="mt-1  text-gray-900 text-lg font-semibold">العام الدراسي</div>
                 <div className="mt-3 text-gray-700 text-xl font-semibold">Sep - Jun</div>
                </div>

                {/* stat 3 */}
                <div className="flex flex-col items-end justify-end ">
                <div className="p-2 rounded-md text-orange-500">
                    
                      <FaUniversity className="text-3xl"/>
                </div>
                
                    <div className="mt-1  text-gray-900 text-lg font-semibold">عدد الجامعات</div>
                    <div className="mt-3 text-gray-700 text-xl font-medium">  
                        <p dir="rtl">  <span dir="ltr">200+</span> جامعة </p>
                    </div>
                </div>
                 <div className="flex flex-col items-end justify-end ">
                <div className="p-2 rounded-md text-orange-500">
                    
                      <PiStudentFill  className="text-3xl"/>
                </div>
                
                    <div className="mt-1  text-gray-900 text-lg font-semibold">عدد الطلاب</div>
                    <div className="mt-3 text-gray-700 text-xl font-medium"> 
                        <p dir="rtl">  <span dir="ltr">8+</span> مليون </p>
                    </div>
                </div>
                {/* stat 4 */}
                <div className="flex flex-col items-end justify-end">
                <div className="p-2 rounded-md text-orange-500">
                    
                    <FaEarthAmericas className="text-3xl" />
                </div>
                <div className="mt-1  text-gray-900 text-lg font-semibold">الطلاب الدوليين</div>
                <div className="mt-3 text-gray-700 text-xl font-medium">  
                    <p dir="rtl">  <span dir="ltr">350+</span> ألف </p>
                </div>
                
                </div>
            </div>
       </section>
        
        <section className="bg-white border-t-2 border-[#F9680E] py-16 shadow-2xl px-6 md:px-20 rounded-lg max-w-7xl mx-3 flex justify-center">
            <div className="max-w-6xl text-right">
                {/* النص التعريفي */}
                <p className="text-gray-700 text-lg leading-9 mb-8">
                في السنوات الأخيرة أصبحت تركيا من أشهر الوجهات الدراسية العالمية بفضل طبيعتها المميزة وتطور التعليم الجامعي بها،
                بالإضافة إلى العديد من المميزات التي جعلت الدراسة في تركيا فرصة رائعة لتحقيق طموحاتك العلمية والمهنية والشخصية
                </p>
                <p className="text-gray-700 text-lg leading-9 mb-12">
                والآن.. اكتشف معنا مميزات الدراسة في تركيا، وتعرف على كافة التفاصيل التي تحتاج إلى معرفتها لاتخاذ خطوة التسجيل للدراسة في إحدى الجامعات التركية
                </p>

                {/* الصورة مع النص */}
                <div className="relative w-full md:w-4/5 mx-auto bg-[#B10B0B] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-12 shadow-lg">
                {/* الخلفية شبه شفافة مع العلم */}
                <div className="absolute inset-0 opacity-30 bg-[url('/images/turkey-flag.jpg')] bg-cover bg-center"></div>

                {/* النص */}
                <div className="relative z-10 w-full md:w-1/2 text-center md:text-right text-white mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold mb-3">الدراسة في تركيا</h2>
                    <div className="flex justify-center md:justify-start gap-2 text-yellow-400 text-3xl">
                    <span>•••</span>
                    </div>
                </div>

                {/* الصورة */}
                <div className="relative z-10 w-full md:w-1/2 flex justify-center">
                    <Image
                    src="/images/student-turkey.png"
                    alt="طالبة تدرس في تركيا"
                    width={350}
                    height={350}
                    className="rounded-full border-4 border-yellow-400 shadow-xl object-cover"
                    />
                </div>
                </div>
                <div className="mt-9">
                    {/* العنوان */}
                    <h2 className="text-3xl font-bold text-[#B10B0B] mb-6 text-right">
                    لماذا الدراسة في تركيا؟
                    </h2>
                    <p className="text-gray-700 text-lg leading-8 mb-10 text-right">
                    هل تعلم أن تركيا من أفضل خيارات الدراسة في الخارج وأكثرها تميزًا!  
                     إليك أهم الأسباب التي تدفعك لتفضيل الدراسة في تركيا 
                    </p>

                    {/* قائمة الأسباب */}
                    <div className="space-y-8 ">
                    {[
                        {
                        title: "جودة التعليم",
                        text: ".تطبق الجامعات التركية معايير الجودة التعليمية العالمية، مما يضمن لك تعليم عالمي متميز، مع الحصول على شهادات معتمدة دوليًا",
                        },
                        {
                        title: "تنوع الجامعات",
                        text: ".يتجاوز عدد الجامعات الموجودة في تركيا حاليًا 200 جامعة، ما بين جامعات خاصة وجامعات حكومية. تتنافس تلك الجامعات في تقديم أفضل تجربة تعليمية للطلاب",
                        },
                        {
                        title: "توفر جميع التخصصات",
                        text: ".تنوع البرامج الدراسية من أهم مميزات الجامعات التركية، حيث تتوفر جميع التخصصات المطلوبة في سوق العمل؛ مثل: التخصصات الطبية، العلوم الصحية، التخصصات الهندسية والتكنولوجية، العمارة، الفنون، تخصصات العلوم الإنسانية والاجتماعية، والتخصصات الاقتصادية والإدارية وغيرهم",
                        },
                        {
                        title: "جودة الحياة الطلابية",
                        text: ".تتركز أغلب الجامعات التركية في المدن الكبرى مثل اسطنبول وأنقرة، مما يمنح الطلاب تجربة معيشية جيدة وسط توافر جميع الخدمات التي قد يحتاجونها، ووجود العديد من الفرص الترفيهية",
                        },
                        {
                        title: "حداثة المرافق والتجهيزات الجامعية",
                        text: ".تمتلك أغلب الجامعات في تركيا بنية تحتية متطورة عبارة عن مرافق حديثة وتجهيزات تكنولوجية تضمن تطبيق معايير الجودة وتساعد في حصولك على تعليم ممتاز. من أهم تلك المرافق: الفصول الدراسية الذكية والمعامل والمختبرات وورش العمل وكذلك المكتبات الكبرى",
                        },
                        {
                        title: "تطور المناهج وطرق التدريس",
                        text: ".تحرص الجامعات التركية باستمرار على تطوير مناهجها لتواكب أحدث الاكتشافات العلمية، وتستخدم أحدث طرق التدريس العالمية. كما تهتم الجامعات باختيار أعضاء هيئة التدريس من أكفأ الأساتذة وأكثرهم خبرة في مجالاتهم",
                        },
                        {
                        title: "الاهتمام بالأنشطة الطلابية",
                        text: ".تضم الجامعات التركية في الغالب عددًا كبيرًا من الأندية الطلابية التي تقدم أنشطة متنوعة؛ منها الأنشطة الاجتماعية والفنية والرياضية، كما يتم تنظيم فعاليات على مدار العام مثل الحفلات والمهرجانات والمسابقات والندوات",
                        },
                        {
                        title: "التعليم المعتمد على التطبيق",
                        text: ".تستخدم الجامعات التركية أسلوب التعليم العملي الذي يدمج بين الدراسة النظرية والتطبيق العملي عبر مشاريع وتدريبات داخل المعامل وورش العمل",
                        },
                        {
                        title: "شراكات قوية  من أجل تدريب الطلاب",
                        text:    ".تهتم الجامعات في تركيا بعقد شراكات تعاونية مع جامعات عالمية من أجل تطوير مهارات الطلاب، فنجدها تشترك في برامج التبادل الطلابي مثل: برنامج الإيراسموس الأوروبي المعروف" ,

                           
                        },
                        {
                        title: "تقدم إمكانيات البحث العلمي",
                        text: ".توفر أغلب الجامعات التركية إمكانيات بحثية متطورة داخل مختبراتها ومراكز البحوث العلمية المتخصصة",
                        },
                        {
                        title: "إمكانية الدراسة باللغة الإنجليزية",
                        text: ".توفر الجامعات التركية برامج دراسية باللغة الإنجليزية في جميع التخصصات، مما يسهل على الطلاب الدوليين الاندماج والحصول على فرص عمل عالمية",
                        },
                        {
                        title: "تعلم اللغة التركية",
                        text: ".الدراسة في تركيا فرصة رائعة لتعلم اللغة التركية وممارستها بشكل يومي أثناء الحياة الجامعية والتفاعل مع الشعب التركي",
                        },
                        {
                        title: "انخفاض تكاليف المعيشة والدراسة",
                        text: ".تُعد المصروفات الدراسية وتكاليف المعيشة في تركيا مناسبة جدًا مقارنة بالدول الأوروبية الأخرى",
                        },
                        {
                        title: "دعم الطلاب الدوليين",
                        text: ".تدعم الحكومة والجامعات التركية الطلاب الدوليين نفسيًا وأكاديميًا ومهنيًا عبر مكاتب الدعم ومراكز الإرشاد",
                        },
                        {
                        title: "سهولة القبول وإجراءات السفر",
                        text: ".من أهم مميزات الدراسة في تركيا سهولة القبول وقلة التعقيدات في متطلبات التسجيل، خصوصًا في الجامعات الخاصة",
                        },
                    ].map((item, index) => (
                        <div
                        key={index}
                        className="text-right"
                        >
                        <div className="flex items-start justify-start flex-row-reverse">
                            <div dir="rtl" className="text-[#F9680E]  w-8 h-8  flex items-center justify-center font-bold">
                            {index + 1} .
                            </div>
                            <h3  className="text-xl font-semibold text-[#B10B0B] text-right">
                            {item.title}
                            </h3>
                        </div>
                        <p className="text-gray-700 leading-7 text-base  text-right">{item.text}</p>
                        </div>
                    ))}
                    </div>
  </div>
            </div>
            
        </section>

    
      {/* 🏫 الجامعات التركية */}
      <section className="w-full py-16">
        <h2 className="text-center text-3xl font-bold text-[#B10B0B] mb-10">أشهر الجامعات في تركيا</h2>
        <div className="max-w-6xl mx-auto">
          <UniversitiesSlider />
        </div>
      </section>

      {/* 🟪 CTA */}
    </main>
  );
}
