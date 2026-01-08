import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quiotech | Web Technology Solutions",
  description: "Quiotech - Crafting Cutting-Edge Web Solutions for Your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
