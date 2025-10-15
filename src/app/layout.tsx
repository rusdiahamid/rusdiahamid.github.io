import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rusdia Hamid - Full Stack Developer & Creative Technologist",
  description: "Passionate full-stack developer building innovative digital experiences. Specializing in React, Next.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Rusdia Hamid" }],
  openGraph: {
    title: "Rusdia Hamid - Full Stack Developer",
    description: "Passionate full-stack developer building innovative digital experiences",
    type: "website",
    locale: "en_US",
  },
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
        {children}
      </body>
    </html>
  );
}
