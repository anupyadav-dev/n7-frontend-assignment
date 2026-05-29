import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "N7 — The new foundation of modern banking",
  description:
    "N7 helps financial institutions transform with cloud-based core banking, digital banking out-of-the-box, and seamless customer experiences.",
  openGraph: {
    title: "N7 — The new foundation of modern banking",
    description:
      "Cloud-based core banking and digital transformation for modern financial institutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N7 — The new foundation of modern banking",
    description:
      "Cloud-based core banking and digital transformation for modern financial institutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
