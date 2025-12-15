import { TProps } from "@/app/types/translation";
import { useLocale } from "next-intl";

interface Props extends TProps {
  titleKey: string;
  listKey: string;
}

export default function BulletSection({ t, titleKey, listKey }: Props) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  const items = t.raw(listKey) as string[];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="md:max-w-7xl w-full py-16  md:px-5 rounded-lg"
    >
      <h2
        className={`text-3xl font-bold text-[#B10B0B] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {t(titleKey)}
      </h2>

      <ul
        className={`mt-6 space-y-3 text-gray-700 list-disc list-inside ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
