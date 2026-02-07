import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import EmotionRegistry from "./emotion-registry";
import { Header } from "@snud2025/ui";
import JsonLd from "@components/JsonLd";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

const bvhAntoPlot = localFont({
  src: "./fonts/BVHAntoPlot-Bold.woff2",
  variable: "--font-bvh-anto-plot",
  display: "swap",
  weight: "700",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://2025.snudesignweek.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SNU DESIGN WEEK 2025 | WRAP UP",
    template: "%s | SNU DESIGN WEEK 2025",
  },
  description:
    "서울대학교 디자인학부 졸업전시 2025. 2025년 12월 4일부터 9일까지 서울대학교 49동 & 파워플랜트에서 개최됩니다.",
  keywords: [
    "서울대학교",
    "디자인",
    "졸업전시",
    "SNU",
    "Design Week",
    "2025",
    "WRAP UP",
    "예술의전당",
  ],
  authors: [{ name: "SNU Design Week 2025 Team" }],
  creator: "SNU Design Week 2025",
  publisher: "서울대학교 디자인학부",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "SNU DESIGN WEEK 2025",
    title: "SNU DESIGN WEEK 2025 | WRAP UP",
    description:
      "서울대학교 디자인학부 졸업전시 2025. 2025년 12월 4일부터 9일까지 서울대학교 49동 & 파워플랜트에서 개최됩니다.",
    images: [
      {
        url: "/meta/og-image.png",
        width: 1200,
        height: 630,
        alt: "SNU DESIGN WEEK 2025 | WRAP UP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNU DESIGN WEEK 2025 | WRAP UP",
    description:
      "서울대학교 디자인학부 졸업전시 2025. 2025년 12월 4일부터 9일까지 서울대학교 49동 & 파워플랜트에서 개최됩니다.",
    images: ["/meta/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/meta/favicon.ico", sizes: "any" },
      { url: "/meta/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/meta/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/meta/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/meta/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/meta/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SNU DESIGN WEEK 2025",
  alternateName: "서울대학교 디자인학부 졸업전시 2025",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <JsonLd data={websiteJsonLd} />
        {/* Typekit 폰트 로딩 최적화 */}
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://p.typekit.net"
          crossOrigin="anonymous"
        />
        {/* Typekit 스크립트 - 인라인으로 즉시 실행 */}
        <Script strategy="beforeInteractive" id="typekit">
          {`
              (function(d) {
                var config = {
                  kitId: 'zsm3lep',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `}
        </Script>
      </head>
      <body className={`${pretendard.variable} ${bvhAntoPlot.variable}`}>
        <EmotionRegistry>
          <a href="#main-content" className="skip-link">
            본문으로 건너뛰기
          </a>
          <Header />
          <main id="main-content">{children}</main>
        </EmotionRegistry>
        <Analytics />
      </body>
    </html>
  );
}
