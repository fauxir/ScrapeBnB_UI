import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Grid from "@/components/background-grid/background-grid";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get AirBnB data",
  description: "Free to use AirBnB API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Grid className="absolute top-[-20rem] z-0 transform -skew-y-12 h-[170%] w-[100%] opacity-35"/>
      {children}</body>
    </html>
  );
}
