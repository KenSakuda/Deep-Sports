import type { Metadata } from "next";
// import Script from 'next/script';
import "./globals.css";
import Header from "@/app/_components/Header";
import Menu from "@/app/_components/Menu";
import Footer from "@/app/_components/Footer";
// import { GTM } from '@/_components/GTM';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: {
    template: "%s｜Deep Sports",
    default: "Deep Sports - スポーツアナリティクス特化型ニュースサイト",
  },
  description: "データアナリティクスに特化したスポーツニュースサイト",
  openGraph: {
    title: "Deep Sports",
    description: "データアナリティクスに特化したスポーツニュースサイト",
    type: "website",
    images: "/logo.png",
  },
  alternates: {
    canonical: "https://deepsports.b-mystory.com",
  },
};

const isProduction: boolean = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* ここにviewportを明示的に追加 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* {isProduction && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"
            crossOrigin="anonymous"
          />
        )} */}
        {/* {isProduction && <GTM />} */}
        {isProduction}
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
