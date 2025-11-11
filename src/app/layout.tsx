import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const recoleta = localFont({
  src: [
    {
      path: "../../public/fonts/Recoleta-RegularDEMO.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Lume - AI-powered Learning & Training Platform",
  description:
    "Lume is an AI-powered platform for meditation, learning, and training. Explore interactive content, enhance productivity, and grow your skills efficiently.",
  keywords: ["AI", "Meditation", "Learning", "Training", "Productivity", "Online Learning"],
  authors: [{ name: "David", url: "https://github.com/daviddozie" }],
  themeColor: "#7C3AED",
  metadataBase: new URL("https://lume--ai.vercel.app"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lume - AI-powered Learning & Training Platform",
    description:
      "Lume is an AI-powered platform for meditation, learning, and training. Explore interactive content, enhance productivity, and grow your skills efficiently.",
    url: "https://lume--ai.vercel.app",
    siteName: "Lume",
    images: [
      {
        url: "https://lume--ai.vercel.app/_next/image?url=%2FLume-Logo.png&w=128&q=75",
        width: 1200,
        height: 630,
        alt: "Lume - AI-powered Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lume - AI-powered Learning & Training Platform",
    description:
      "Lume is an AI-powered platform for meditation, learning, and training. Explore interactive content, enhance productivity, and grow your skills efficiently.",
    images: ["https://lume--ai.vercel.app/_next/image?url=%2FLume-Logo.png&w=128&q=75"],
    creator: "@daviddozie",
  },
  icons: {
    icon: "https://lume--ai.vercel.app/_next/image?url=%2FLume-Logo.png&w=128&q=75",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${recoleta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
