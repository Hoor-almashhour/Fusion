import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Cairo } from 'next/font/google';
import './globals.css';
import { routing, Locale } from '@/i18n/routing';


// ✅ واجهة لتحديد نوع الـ props
interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // ✅ لازم نعمل await للـ params
  const { locale } = await params;

  // اختار locale آمن
  const safeLocale: Locale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  // تحميل ملفات الترجمة
  const messages = await getMessages({ locale: safeLocale });

  return (
        <NextIntlClientProvider locale={safeLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
  );
}
