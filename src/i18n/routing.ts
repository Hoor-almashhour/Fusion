// routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar', 'tr'],
  defaultLocale: 'ar',  // اللغة الافتراضية
});

export type Locale = (typeof routing.locales)[number];


