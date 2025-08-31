import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import "../styles/responsive.css";
import DisableInteractions from "@/components/ui/DisableInteractions";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hooyar Lotfy – Full Stack Developer",
  description:
    "Hooyar Lotfy, 17, full stack developer of web, mobile, and games. Creating apps, websites, and interactive experiences with impact and precision.",
  keywords: [
    "full stack developer",
    "web developer",
    "mobile developer",
    "game developer",
    "React",
    "React Native",
    "Unreal Engine",
    "Laravel",
    "Node.js",
    "Firebase",
  ],
  authors: [{ name: "Hooyar Lotfy" }],
  creator: "Hooyar Lotfy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cryptkingclaws.site",
    title: "Hooyar Lotfy – Full Stack Developer",
    description:
      "Hooyar Lotfy, 17, full stack developer of web, mobile, and games. Creating apps, websites, and interactive experiences with impact and precision.",
    siteName: "Hooyar Lotfy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hooyar Lotfy – Full Stack Developer",
    description:
      "Hooyar Lotfy, 17, full stack developer of web, mobile, and games. Creating apps, websites, and interactive experiences with impact and precision.",
    creator: "@hooyarlotfy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className="dark">
      <head>
        {/* Custom favicon: place your file in public/assets/image and update path as needed */}
        <link rel="icon" href="/assets/image/favicon.png" type="image/png" />
      </head>
  <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased overflow-x-hidden`}>
        <DisableInteractions />
        {children}
      </body>
    </html>
  );
}
