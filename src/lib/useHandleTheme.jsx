"use client";

import { useEffect, useState } from "react";

const useHandleTheme = () => {
  const [theme, setTheme] = useState("dark");
  const [font, setFont] = useState("jetbrains");

  useEffect(() => {
    // Hanya berjalan di client-side
    const savedTheme = localStorage.getItem("theme");
    const savedFont = localStorage.getItem("font");

    if (savedTheme) setTheme(savedTheme);
    if (savedFont) setFont(savedFont);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  const handleFontChange = (newFont) => {
    setFont(newFont);
    if (typeof window !== "undefined") {
      localStorage.setItem("font", newFont);
    }
  };

  useEffect(() => {
    // Update body class setiap ada perubahan theme atau font
    document.body.classList.remove(
      "dark",
      "light",
      "classic",
      "jetbrains",
      "poppins",
      "roboto",
      "inter"
    );

    if (theme) {
      document.body.classList.add(theme);
    }
    if (font) {
      document.body.classList.add(font);
    }
  }, [theme, font]);

  return { theme, handleThemeChange, font, handleFontChange };
};

export default useHandleTheme;
