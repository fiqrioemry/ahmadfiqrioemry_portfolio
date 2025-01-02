import "../app/globals.css";
import Header from "@/components/Header";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ThemeProvider } from "./ThemeProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

function RootComponent({ children }) {
  return (
    <body className={jetbrainsMono.variable}>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </body>
  );
}

export default function RootLayout() {
  return (
    <html lang="en">
      <ThemeProvider>
        <RootComponent />
      </ThemeProvider>
    </html>
  );
}
