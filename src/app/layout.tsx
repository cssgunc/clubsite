import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";

const geistSans = Geist({
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen w-full relative flex flex-col lg:flex-col h-svh">
          <div
            className="absolute inset-0 z-[-1]"
            style={{
              backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent), linear-gradient(to bottom, transparent, transparent, rgba(56, 189, 248, 0.3))`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Navigation />
          <div className="flex shrink h-auto overflow-y-auto flex-col pt-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
