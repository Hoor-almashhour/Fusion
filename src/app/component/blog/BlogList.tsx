"use client";
import { useLocale, useTranslations } from "next-intl";
import { LiaGraduationCapSolid } from "react-icons/lia";
import BlogCard from "./BlogCard";
import { useState } from "react";

const POSTS_PER_PAGE = 6;

const posts = [
  {
    id: 1,
    title: {
      ar: "كيف تؤهلك الدراسة في الخارج للعمل في شركات عالمية؟",
      en: "How Studying Abroad Prepares You for Global Careers",
    },
    excerpt: {
      ar: "الدراسة في الخارج أصبحت بوابة حقيقية لدخول سوق العمل العالمي",
      en: "Studying abroad is a real gateway to the global job market",
    },
    image: "/images-blog/3.png",
    slug: "global-career",
    date: "12 / 12 / 2025",
  },
  {
    id: 2,
    title: {
      ar: "تكاليف الدراسة والمعيشة في أوروبا",
      en: "Study and Living Costs in Europe",
    },
    excerpt: {
      ar: "تعرف على متوسط التكاليف وأفضل الدول من حيث الميزانية",
      en: "Learn about average costs and the best budget-friendly countries",
    },
    image: "/images-blog/2.png",
    slug: "study-costs-europe",
    date: "10 / 12 / 2025",
  },
  {
     id: 3,
     title :{
        ar: "خطوات تجهيز ملف التقديم للدراسة في الخارج باحتراف",
        en:"Steps to prepare a professional application file for studying abroad",
     },
      excerpt:{
        ar:"التقديم للدراسة في الخارج مش خطوة عشوائية، لكنه عملية محتاجة تنظيم ودقة لأن ملف التقديم هو أول انطباع",
        en:"Applying to study abroad is not a random step, but a process that requires organization and precision because the application file is the first impression.",
    },
     image: "/images-blog/1.png",
    slug: "Steps to prepare a professional application",
     date: "18 / 12 / 2025",
  },
   {
     id: 4,
     title :{
        ar: "مستقبل وظائف أمن المعلومات عالميًا: لماذا يعد من أسرع المهن نموًا؟",
        en:"The future of information security jobs globally: Why is it one of the fastest growing professions?",
     },
      excerpt:{
        ar:"يشهد العالم تحولًا رقميًا ضخمًا غير شكل الاقتصاد العالمي وأعاد صياغة طبيعة الوظائف. ومع هذا التحول، ظهر تخصص",
         en:"The world is undergoing a massive digital transformation that has reshaped the global economy and redefined the nature of jobs. With this transformation, a new specialization has emerged",
    },
     image: "/images-blog/4.png",
    slug: "new specialization has emerged",
     date: "14/ 12 / 2025",
  },
   {
     id: 5,
     title :{
        ar: "التخصصات المستقبلية التي ستشكل سوق العمل في السنوات القادمة",
        en:"Future specializations that will shape the job market in the coming years",
     },
      excerpt:{
        ar:"يشهد العالم تغيرات سريعة بسبب التطور التكنولوجي والذكاء الاصطناعي والتحولات الاقتصادية. هذه التغيرات خلقت طلبًا متزايدًا على مجموعة",
        en:"The world is undergoing rapid changes due to technological advancements, artificial intelligence, and economic shifts. These changes have created increasing demand for a range of products",
    },
     image: "/images-blog/9.png",
   
    slug: "Steps to prepare a professional application",
     date: "04 / 12 / 2025",
    
  },
   {
     id: 6,
     title :{
        ar: "لماذا تُعد كندا وبريطانيا من أقوى الدول في دراسة طب الأسنان؟",
        en:"Why are Canada and Britain among the strongest countries for studying dentistry?",
     },
      excerpt:{
        ar:"تُعتبر كندا وبريطانيا من أبرز الوجهات العالمية لدراسة طب الأسنان نظرًا لقوة مناهجها، ومستوى التدريب العملي المتقدم، والاعتراف",
        en:"Canada and the UK are among the world's leading destinations for studying dentistry due to their strong curricula, advanced practical training, and recognition.",
    },
     image: "/images-blog/6.png",
    slug: " studying dentistry",
     date: "12/ 12 / 2025",
  },
   {
     id: 7,
     title :{
        ar:"ما الذي يجعل الجامعات الأوروبية مفضلة لدى الطلاب العرب؟",
        en:"What makes European universities preferred by Arab students?",
     },
      excerpt:{
        ar:"شهدت الجامعات الأوروبية خلال السنوات الأخيرة إقبالًا كبيرًا من الطلاب العرب الذين يبحثون عن تعليم عالي الجودة، وفرص",
        en:"European universities have witnessed a significant influx of Arab students in recent years seeking high-quality education and opportunities.",
    },
     image: "/images-blog/7.png",
    slug: " European universities",
     date: "16/ 12 / 2025",
  },
   {
     id: 8,
     title :{
        ar: "نصائح لتأمين القبول في الجامعات ذات المنافسة العالية",
        en:"Tips for securing admission to highly competitive universities",
     },
      excerpt:{
        ar:"الحصول على قبول في جامعة ذات تنافسية عالية ليس أمرًا بسيطًا، لكنه ليس مستحيلًا أيضًا. النجاح في هذه",
        en:"Gaining admission to a highly competitive university is not easy, but it's not impossible either. Success in this",
    },
     image: "/images-blog/8.png",
    slug: "competitive universities",
     date: "14/ 12 / 2025",
  },
  {
     id: 9,
     title :{
        ar: "هل يستحق السفر للدراسة في الخارج كل هذه التكاليف؟",
        en:"Is studying abroad worth all these costs?"
     },
      excerpt:{
        ar:"أصبح السفر للدراسة في الخارج حلمًا مشتركًا للكثير من الطلاب، لكنه في الوقت نفسه قرار كبير يحتاج إلى",
        en:"Studying abroad has become a common dream for many students, but it is also a big decision that requires...",
    },
     image: "/images-blog/5.png",
    slug: " studying abroad worth all these costs",
     date: "28 /  11/ 2025",
    
   
  },
  {
     id: 10,
     title :{
        ar: "كيف تختار الدولة الأنسب للدراسة في الخارج بناءً على ميزانيتك وطموحك؟",
        en:"How do you choose the most suitable country to study abroad based on your budget and ambitions?",
     },
      excerpt:{
        ar:"اختيار الدولة المناسبة للدراسة في الخارج خطوة تحتاج إلى رؤية واضحة، لأن القرار لا يعتمد فقط على قوة",
        en:"Choosing the right country to study abroad is a step that requires a clear vision, because the decision is not based solely on strength."
    },
     image: "/images-blog/10.png",
    slug: "your budget and ambitions",
     date: "30 / 11/ 2025",
    
  },
  {
     id: 11,
     title :{
        ar:"تجربة العيش والدراسة في الصين لطلاب الشرق الأوسط",
        en:"Experience of living and studying in China for Middle Eastern students",
     },
      excerpt:{
        ar:"خلال السنوات الأخيرة أصبحت الصين واحدة من الوجهات التعليمية الأكثر جذبًا لطلاب الشرق الأوسط. فهي تجمع بين بيئة",
        en:"In recent years, China has become one of the most attractive educational destinations for students from the Middle East. It combines an environment",
    },
     image: "/images-blog/11.png",
    slug: " China for Middle Eastern students",
     date: "27 / 11/ 2025",
    
  },
  {
     id: 12,
     title :{
        ar: "أهم التخصصات المطلوبة في أمريكا خلال السنوات القادمة",
        en:"The most in-demand specializations in America in the coming years",
     },
      excerpt:{
        ar:"تُعد الولايات المتحدة واحدة من أكثر الأسواق تطورًا وتنويعًا في العالم، ومع التحولات التكنولوجية والاقتصادية السريعة بدأت تظهر",
        en:"The United States is one of the most developed and diversified markets in the world, and with rapid technological and economic shifts, it has begun to emerge"
    },
     image: "/images-blog/12.png",
   
    slug: " most in-demand specializations in America",
     date: "14/ 12 / 2025",
  },

];

export default function BlogList() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section className="py-40">
      <div className="container mx-auto">

        {/* Title */}
        <div className="text-center mb-8 flex flex-col items-center">
          <span className="text-3xl text-gray-500 mb-6">
            <LiaGraduationCapSolid />
          </span>

          <h1 className="text-3xl font-bold text-[#B10B0B] mb-4">
            {t("title")}
          </h1>

          <p className="text-gray-500 mb-8">
            {t("subtitle")}
          </p>
        </div>

          {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {currentPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">

            {/* Prev */}
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              {t("prev")}
            </button>

            {/* Numbers */}
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded border
                    ${
                      page === currentPage
                         ? "bg-[#B10B0B] text-white font-bold"
                         : "hover:bg-gray-100"
                    }
                  `}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              {t("next")}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
