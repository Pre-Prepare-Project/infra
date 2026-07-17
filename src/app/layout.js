import { Inter } from "next/font/google";
import AntdProvider from "@/components/providers/AntdProvider";
import PageLayout from "@/components/templates/PageLayout/PageLayout";
import JsonLd from "@/components/atoms/JsonLd/JsonLd";
import { defaultMetadata } from "@/lib/metadata";
import { getDefaultJsonLd } from "@/lib/jsonLd";
import "@/styles/globals.scss";

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
        <JsonLd data={getDefaultJsonLd()} />
        <AntdProvider>
          <PageLayout>{children}</PageLayout>
        </AntdProvider>
      </body>
    </html>
  );
}
