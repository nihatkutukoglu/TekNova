import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TekNova | Yazılım Danışmanlığı ve Dijital Dönüşüm",
  description: "Modern yazılım çözümleriyle işletmenizi dijitale taşıyoruz. Özel yazılım, web sitesi ve otomasyon hizmetleri.",
  openGraph: {
    title: "TekNova | Yazılım Danışmanlığı ve Dijital Dönüşüm",
    description: "Modern yazılım çözümleriyle işletmenizi dijitale taşıyoruz. Özel yazılım, web sitesi ve otomasyon hizmetleri.",
    url: 'https://teknovaweb.com.tr',
    siteName: 'TekNova',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TekNova | Dijital Dönüşüm",
    description: "İşletmeniz için özel yazılım ve web çözümleri.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 overflow-x-hidden">{children}</body>
    </html>
  );
}
