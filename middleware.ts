// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from '@/i18n/routing';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ السماح بمرور الملفات الداخلية
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // ✅ إعادة التوجيه من / إلى اللغة الافتراضية
  if (pathname === '/' || pathname === '') {
    const url = req.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// ✅ Next.js 15 matcher الصحيح
export const config = {
  matcher: ['/', '/(ar|en|tr)/:path*'],
};
