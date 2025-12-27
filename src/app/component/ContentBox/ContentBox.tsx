

export default function ContentBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" p-6 leading-loose">
      <h2 className="section-title mb-4  text-sm
      md:text-xl font-extrabold text-[#B10B0B]" >{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
