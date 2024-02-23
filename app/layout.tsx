import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactHotToaster } from "@/providers/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "eCommerce for selling computer equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactHotToaster />
        {children}
      </body>
    </html>
  );
}
