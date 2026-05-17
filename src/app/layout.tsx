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
  title: "Charlie Tonneslan | Developer Portfolio",
  description:
    "Software engineer working on civic and urban systems: housing, zoning, transit, civil infrastructure, and the policy underneath. TypeScript, Go, Python, and Rust.",
  openGraph: {
    title: "Charlie Tonneslan | Developer Portfolio",
    description:
      "Software engineer working on civic and urban systems: housing, zoning, transit, civil infrastructure, and the policy underneath. TypeScript, Go, Python, and Rust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
