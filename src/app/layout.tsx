import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CartContextProvider from "@/providers/CartContextProvider";
import AuthSessionProvider from "@/providers/AuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Shop Ecommerce",
  description: "Generated by Next.js 14 version",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider>
        <CartContextProvider>
        <Navbar/>
        <main className="pb-10 px-5 sm:px-10">
        {children}
        </main>
        <Footer/>
        </CartContextProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
