"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLanguage = () => {
    const newLocale = currentLocale === "ar" ? "en" : "ar";
    const newPath = `/${newLocale}${pathname.replace(/^\/(ar|en)/, "")}`;
    router.push(newPath);
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-white text-black font-bold py-2 px-6 rounded-full"
    >
      {currentLocale === "ar" ? "English" : "العربية"}
    </button>
  );
}
