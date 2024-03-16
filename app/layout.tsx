import { Session } from "@/providers/session";
import { ReactHotToaster } from "@/providers/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ReactQueryProvider } from "@/providers/react-query";
import "./globals.css";

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
          <ReactQueryProvider>
            <ReactHotToaster />
            {children}
          </ReactQueryProvider>
        </Session>
      </body>
    </html>
  );
}
