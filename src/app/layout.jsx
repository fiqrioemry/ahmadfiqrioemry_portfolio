import "../app/globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "./ThemeProvider";
import { JetBrains_Mono, Inter, Poppins, Roboto } from "next/font/google";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${poppins.variable} ${inter.variable} ${roboto.variable}`}
      >
        <ThemeProvider>
          <Header />
          <StairTransition />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
