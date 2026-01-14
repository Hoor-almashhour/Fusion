import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "react-phone-number-input/style.css";

import Navbar from "./Navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "./Footer/Footer";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fusion",
  description:
    "An integrated platform to support international students applying to Turkish Universities",
};

export const  viewport = {
  
  viewport: 'width=device-width, initial-scale=1',
};

async function getMessages(locale: string) {
  try {
    const common = (await import(`@/messages/${locale}/common.json`)).default;
    const countries  = (await import(`@/messages/${locale}/countries/countries.json`)).default;
     
   return {
        ...common,
        countries
    };
  } catch (error) {
    console.error("Translation load error:", error);
    return notFound();
  }
}


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string}>; 
}) {
  const { locale } = await params;
  
  const messages = await getMessages(locale);



  return (
    <html lang={locale}>
      <body className={cairo.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
