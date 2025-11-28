"use client";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { E164Number } from "libphonenumber-js/core";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  value: E164Number | undefined;
  onChange: (value: E164Number | undefined) => void;
}

export default function PhoneInputField({ value, onChange }: Props) {
  const locale = useLocale(); 
  const isArabic = locale === "ar";

  const t = useTranslations("contact");

   


  return (
    <PhoneInput
      placeholder={t("placeholder.phone")}
      defaultCountry="TR"
      value={value}
      onChange={onChange}
      className={`w-full border rounded p-2 mb-4 ${isArabic ? "text-right" : "text-left"}`}
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    />
    
  );
}
