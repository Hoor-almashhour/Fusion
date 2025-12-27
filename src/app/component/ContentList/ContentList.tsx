
export default function ContentList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className=" p-6">
      <h2 className="section-title mb-4  text-sm
          md:text-xl font-extrabold text-[#B10B0B] ">{title}</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
