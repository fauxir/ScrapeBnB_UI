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
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full relative`}>
        <Grid className="fixed top-[-20rem] inset-0 z-0 transform -skew-y-12 opacity-35 overflow-hidden  h-[170%]" />
        <div className="relative z-10 h-full overflow-auto">{children}</div>
      </body>
    </html>
  );
}
