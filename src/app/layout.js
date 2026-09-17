import { Inter } from "next/font/google";
import Script from "next/script";
import AntdProvider from "@/components/providers/AntdProvider";
import PageLayout from "@/components/templates/PageLayout/PageLayout";
import JsonLd from "@/components/atoms/JsonLd/JsonLd";
import { defaultMetadata } from "@/lib/metadata";
import { getDefaultJsonLd } from "@/lib/jsonLd";
import "@/styles/globals.scss";

const GA_MEASUREMENT_ID = "G-TNG7ZDZJPK";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <JsonLd data={getDefaultJsonLd()} />
        <AntdProvider>
          <PageLayout>{children}</PageLayout>
        </AntdProvider>
      </body>
    </html>
  );
}
