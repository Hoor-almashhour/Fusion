import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "react-phone-number-input/style.css";
import Footer from "../component/Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fusion",
  description:
    "An integrated platform to support international students applying to Turkish Universities",
};

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch {
    return notFound();
  }
}

 export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
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
