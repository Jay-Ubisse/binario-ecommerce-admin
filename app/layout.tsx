import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactHotToaster } from "@/providers/toaster";
import { Session } from "@/providers/session";

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
        <Session>
          <ReactHotToaster />
          {children}
        </Session>
      </body>
    </html>
  );
}
