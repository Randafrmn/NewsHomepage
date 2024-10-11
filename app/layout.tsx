import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "News Homepage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
