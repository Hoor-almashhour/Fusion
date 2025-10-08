import './globals.css';
import { ReactNode } from 'react';
import { routing, Locale } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
 
 


  
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}

