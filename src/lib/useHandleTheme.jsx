import { useEffect, useState } from "react";

const useHandleTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark"; /// Default dark
  });

  const [font, setFont] = useState(() => {
    return localStorage.getItem("font") || "jetbrains"; // Default jetbrains
  });

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Simpan tema ke localStorage
  };

  const handleFontChange = (newFont) => {
    setFont(newFont);
    localStorage.setItem("font", newFont); // Simpan font ke localStorage
  };

  useEffect(() => {
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
