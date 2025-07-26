import type { Metadata } from "next";
import { Geist, Geist_Mono,Quicksand,Zen_Dots } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const quicksand = Quicksand({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-quicksand",
});

const zen_Dots = Zen_Dots({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zendots",
  weight: "400",
});


export const metadata: Metadata = {
  title: "Lift mobile",
  description: "Lift Mobile Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zen_Dots.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
