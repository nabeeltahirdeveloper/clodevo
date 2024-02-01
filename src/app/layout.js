"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const location = usePathname();
  const backgroundColor = location === "/" ? "#1F2433" : "#FFF";

  return (
    <html lang="en">
      <body className={`${inter.className} flex`} style={{
        backgroundColor
      }}>
        <div className="w-[246px]">
          <Sidebar />
        </div>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
