import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COSMOQ - Automation and AI Agent Template",
  description: "COSMOQ is a modern Framer template built for AI startups and enterprises. Launch fast, scale easily, and showcase your AI products, workflows, and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#03000a] text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
