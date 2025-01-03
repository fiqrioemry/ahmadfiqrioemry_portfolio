import "../app/globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import { jetbrainsMono, poppins, inter, roboto } from "./config/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${poppins.variable} ${inter.variable} ${roboto.variable}`}
      >
        <Header />
        <StairTransition />
        {children}
      </body>
    </html>
  );
}
