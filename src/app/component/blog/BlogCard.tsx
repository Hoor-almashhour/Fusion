// components/blog/BlogCard.tsx
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden m-5
    ">
      <img
        src={post.image}
        alt={post.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <span className="text-xs text-gray-400">{post.date}</span>

        <h3 className="mt-2 font-bold text-sm line-clamp-2">
          {post.title}
        </h3>

        <p className="mt-2 text-xs text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>

        <a
          href={`/blog/${post.slug}`}
          className="inline-block mt-3 text-sm text-purple-700 font-medium"
        >
          اقرأ المزيد →
        </a>
      </div>
    </div>
  );
}
