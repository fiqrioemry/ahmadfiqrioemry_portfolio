import { useEffect, useState } from "react";

const useHandleTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Perbarui class pada body
    document.body.className = theme;
  }, [theme]);

  return { theme, handleThemeChange };
};

export default useHandleTheme;
