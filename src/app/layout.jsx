"use client";

import { JetBrains_Mono } from "next/font/google";
import "../app/globals.css";
import Header from "@/components/Header";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { ScrollArea } from "@/components/ui/scroll-area";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const preventContextMenu = (event) => {
      event.preventDefault();
    };

    // Menambahkan event listener untuk klik kanan
    document.addEventListener("contextmenu", preventContextMenu);

    // Menghapus event listener saat komponen unmounted
    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}  no-select`}>
        <ScrollArea className="h-screen bg-primary">
          <Header />

          <StairTransition />
          <PageTransition> {children}</PageTransition>
        </ScrollArea>
      </body>
    </html>
  );
}
