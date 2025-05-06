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
  title: "My Twinkle Beads | Gelang Handmade Unik & Cantik",
  description: "Koleksi gelang handmade dari My Twinkle Beads, dibuat dengan bahan pilihan dan desain elegan. Cocok untuk hadiah, aksesoris fashion, maupun koleksi pribadi.",
  keywords: [
    "gelang handmade",
    "aksesoris wanita",
    "gelang unik",
    "gelang cantik",
    "kado wanita",
    "gelang fashion",
    "perhiasan handmade"
  ],
  creator: "My Twinkle Beads",
  publisher: "My Twinkle Beads",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon-apple.png"
  },
  openGraph: {
    title: "My Twinkle Beads | Gelang Handmade Unik & Cantik",
    description: "Jelajahi koleksi gelang handmade eksklusif dari My Twinkle Beads. Tampil anggun dan personal dengan aksesoris pilihan.",
    url: "https://my-twinkle-beads.vercel.app/",
    siteName: "My Twinkle Beads",
    images: [
      {
        url: "https://my-twinkle-beads.vercel.app/images/hero.jpg", 
        width: 1200,
        height: 630,
        alt: "Koleksi Gelang Handmade My Twinkle Beads"
      }
    ],
    type: "website"
  }
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
