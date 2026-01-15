"use client";

import { E164Number } from "libphonenumber-js/core";
import PhoneInputField from "@/app/[locale]/contact/PhoneInputField";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { LiaGraduationCapSolid } from "react-icons/lia";

export default function SearchSection() {
  const t = useTranslations("search");
  const locale = useLocale();
  const isArabic = locale === "ar";

 const [formData, setFormData] = useState<{
  degree: string;
  language: string;
  major: string;
  country: string;
  search: string;
  phone?: E164Number;
}>({
  degree: "",
  language: "",
  major: "",
  country: "",
  search: "",
  phone: undefined,
});


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handlePhoneChange = (value?: E164Number) => {
  setFormData((prev) => ({
    ...prev,
    phone: value,
  }));
};

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

 if (!formData.phone) {
    alert(locale === "ar" ? "الرجاء إدخال رقم الهاتف" : "Please enter phone number");
    return;
  }

  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    alert("تم إرسال الطلب بنجاح ✅");
  } else {
    alert("حدث خطأ ❌");
  }
};

  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-7">
          <span className="text-3xl text-gray-500">
            <LiaGraduationCapSolid />
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-red-700">
          {t("title")}
        </h2>
        <p className="text-gray-500 mt-4">{t("subtitle")}</p>
      </div>

      <form
        dir={isArabic ? "rtl" : "ltr"}
        onSubmit={handleSubmit}
        className="w-full max-w-7xl bg-white shadow-lg p-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
          <select name="degree" onChange={handleChange} className="border p-2">
            <option value="">{t("degree")}</option>
            <option value="Bachelor">{t("bachelor")}</option>
            <option value="Master">{t("master")}</option>
            <option value="PhD">{t("phd")}</option>
          </select>

          <select name="language" onChange={handleChange} className="border p-2">
            <option value="">{t("language")}</option>
            <option value="Turkish">{t("turkish")}</option>
            <option value="English">{t("english")}</option>
            <option value="Russian">{t("russian")}</option>
          </select>

          <select name="major" onChange={handleChange} className="border p-2">
            <option value="">{t("major")}</option>
            <option value="Medical">{t("medical")}</option>
            <option value="Engineering">{t("engineering")}</option>
            <option value="Literary">{t("literary")}</option>
            <option value="Humanities">{t("humanities")}</option>
          </select>

          <select name="country" onChange={handleChange} className="border p-2">
            <option value="">{t("country")}</option>
            <option value="Turkey">{t("turkey")}</option>
            <option value="Russia">{t("russia")}</option>
            <option value="Cyprus">{t("cyprus")}</option>
            <option value="Belarus">{t("belarus")}</option>
            <option value="Georgia">{t("georgia")}</option>
            <option value="Italy">{t("italy")}</option>
            <option value="Spain">{t("spain")}</option>
            <option value="Azerbaijan">{t("azerbaijan")}</option>
            <option value="Egypt">{t("egypt")}</option>
            <option value="Jordan">{t("jordan")}</option>
            <option value="Iraq">{t("iraq")}</option>
            <option value="Malaysia">{t("malaysia")}</option>
            <option value="China">{t("china")}</option>
            <option value="UK">{t("uk")}</option>
          </select>
        </div>

        <PhoneInputField 
            value={formData.phone || undefined}
            onChange={handlePhoneChange}
            placeholder={t("phone")}
            required
          />
        <input
          name="search"
          placeholder={t("placeholder")}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
        />
       
        <div className="flex justify-center items-center">
          <button
                type="submit"
                className="bg-[#B10B0B] cursor-pointer w-36   text-white px-14 py-3 rounded-lg hover:bg-red-800"
              >
                {t("send")}
          </button>
        </div>
       
      </form>
    </section>
  );
}
