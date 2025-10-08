import './globals.css';
import { ReactNode } from 'react';
import { routing, Locale } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Get locale from next-intl (or another i18n provider)
  const locale = useLocale();

  // Ensure locale is safe
  const safeLocale: Locale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  return (
    <html lang={safeLocale} dir={safeLocale === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}

