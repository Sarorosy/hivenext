import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseFollower from "@/components/MouseFollower";
import Footer from "@/components/Footer";
import ClientLayout from "./ClientLayout";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Hive | Shared Workspaces and Offices for Rent",
  description: "Rent meeting rooms & shared workspaces near you. Flexible hourly & daily plans available",
  icons: {
    icon: "/favicon.png", // This overrides default Vercel favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=EB+Garamond&family=Montserrat&family=Italianno&family=Italiana&family=Playfair+Display&family=Noto+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/Hive-Favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
