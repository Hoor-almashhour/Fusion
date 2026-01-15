"use client";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { E164Number } from "libphonenumber-js/core";
import { useLocale, useTranslations } from "next-intl";

interface Props {
   value?: E164Number;
  onChange: (value?: E164Number) => void;
  placeholder?: string;
  required?: boolean;
}

export default function PhoneInputField({
  value,
  onChange,
  placeholder,
  required
}: Props) {
  
  const locale = useLocale(); 
  const isArabic = locale === "ar";

  const t = useTranslations("contact");

   


  return (
      <div className="w-full mb-4">
    <PhoneInput
      placeholder={t("placeholder.phone")}
      defaultCountry="TR"
      value={value}
      onChange={onChange}
      className={`w-full border rounded p-2 mb-4 ${isArabic ? "text-right" : "text-left"}`}
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    />
    {/* ✅ required validation */}
      {required && !value && (
        <p className="text-red-600 text-sm mt-1">
          {isArabic ? "رقم الهاتف مطلوب" : "Phone number is required"}
        </p>
      )}
      </div>
  );
}
