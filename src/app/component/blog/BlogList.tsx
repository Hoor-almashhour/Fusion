// components/blog/BlogList.tsx
import { LiaGraduationCapSolid } from "react-icons/lia";
import BlogCard from "./BlogCard";

const posts = [
  {
    id: 1,
    title: "كيف تؤهلك الدراسة في الخارج للعمل في شركات عالمية؟",
    excerpt: "الدراسة في الخارج لم تعد مجرد تجربة تعليمية، بل أصبحت بوابة حقيقية لدخول سوق العمل العالمي.فالجامعات الدولية",
    image: "/images-blog/3.png",
    slug: "choose-your-major",
    date: "12 / 12 / 2025",
  },
  {
    id: 2,
    title: "تكاليف الدراسة والمعيشة في أوروبا",
    excerpt: "تعرف على متوسط التكاليف وأفضل الدول من حيث الميزانية...",
    image: "/images-blog/2.png",
    slug: "study-costs-europe",
    date: "10 / 12 / 2025",
  },
   {
    id: 3,
    title: "خطوات تجهيز ملف التقديم للدراسة في الخارج باحتراف",
    excerpt: "التقديم للدراسة في الخارج مش خطوة عشوائية، لكنه عملية محتاجة تنظيم ودقة لأن ملف التقديم هو أول انطباع",
    image: "/images-blog/1.png",
    slug: "study-costs-europe",
    date: "18 / 12 / 2025",
  },
];

export default function BlogList() {
  return (
    <section className="py-40">
      <div className="container mx-auto">

        {/* Title */}
        <div className="text-center mb-8 flex justify-center flex-col items-center">
            <span className="text-3xl text-gray-500 mb-8 ">
           
             <LiaGraduationCapSolid />
             </span>
                    
          <h1 className=" text-3xl font-bold text-[#B10B0B] mb-5">مدونة فيوجن
            التعليمية </h1>
          <p className="text-gray-500 mb-9">
          
            مقالات مختصرة ومفيدة للطلاب الدوليين
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-50 p-8 rounded-xl text-center">
          <h3 className="font-bold text-lg">
            هل تحتاج مساعدة في الدراسة بالخارج؟
          </h3>
          <button className="mt-4 bg-[#F9680E]
           text-white px-6 py-2 rounded">
            تواصل معنا
          </button>
        </div>

      </div>
    </section>
  );
}
