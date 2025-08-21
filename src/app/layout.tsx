import type { Metadata } from "next";
import "./globals.css";
import siteConfig from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-inter bg-gray-50 text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
