import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { BackgroundGradient } from "./components/BackgroundGradient";
import { Footer } from "./components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/next";
config.autoAddCss = false;

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CS + Social Good at UNC Chapel Hill",
  description: "CS + Social Good at UNC Chapel Hill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen w-full relative flex flex-col lg:flex-col h-svh">
          <BackgroundGradient />
          <Navigation />
          <div className="flex shrink h-auto overflow-y-auto flex-col">
            {children}
            <Footer />
          </div>
        </div>
      </body>
      <Analytics />
    </html>
  );
}
