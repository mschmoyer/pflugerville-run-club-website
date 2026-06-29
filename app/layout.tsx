import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pfrunclub.com"),
  title: "Pflugerville Running Club | Saturdays 8AM at Lake Pflugerville",
  description:
    "Join Pflugerville's free running club every Saturday at 8:00 AM around beautiful Lake Pflugerville. All paces welcome.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Pflugerville Running Club | Saturdays 8AM at Lake Pflugerville",
    description:
      "Join Pflugerville's free running club every Saturday at 8:00 AM around beautiful Lake Pflugerville. All paces welcome.",
    type: "website",
    url: "https://pfrunclub.com",
    siteName: "Pflugerville Running Club",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pflugerville Running Club | Saturdays 8AM at Lake Pflugerville",
    description:
      "Join Pflugerville's free running club every Saturday at 8:00 AM around beautiful Lake Pflugerville. All paces welcome.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
