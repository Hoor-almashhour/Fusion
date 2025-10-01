import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Cairo } from 'next/font/google';
import './globals.css';
import { routing, Locale } from '@/i18n/routing';

const cairo = Cairo({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // اختار locale آمن
  const safeLocale: Locale = routing.locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;

  // تحميل ملفات الترجمة
  const messages = await getMessages({ locale: safeLocale });

  return (
    <html lang={safeLocale} dir={safeLocale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={cairo.className}>
        <NextIntlClientProvider locale={safeLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
