type BlogPost = {
  id: number;
  title: {
    ar: string;
    en: string;
  };
  excerpt: {
    ar: string;
    en: string;
  };
  image: string;
  slug: string;
  date: string;
};
import { useLocale } from "next-intl";

export default function BlogCard({ post }: { post: BlogPost }) {
  const locale = useLocale();
  const lang = locale === "ar" ? "ar" : "en";

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden m-5">
      <img
        src={post.image}
        alt={post.title[lang]}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <span className="text-xs text-gray-400">{post.date}</span>

        <h3 className="mt-2 font-bold text-sm line-clamp-2">
          {post.title[lang]}
        </h3>

        <p className="mt-2 text-xs text-gray-600 line-clamp-2">
          {post.excerpt[lang]}
        </p>

        <a
          href={`/#
            /${post.slug}`}
          className="inline-block mt-3 text-sm text-[#B10B0B]
           font-medium"
        >
          {lang === "ar" ? "اقرأ المزيد →" : "Read more →"}
        </a>
      </div>
    </div>
  );
}
