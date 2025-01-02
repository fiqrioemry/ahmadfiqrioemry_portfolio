"use client";

import useHandleTheme from "@/lib/useHandleTheme";
import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { theme, font, handleThemeChange, handleFontChange } = useHandleTheme();
  useHandleTheme();
  return (
    <ThemeContext.Provider
      value={{ theme, font, handleThemeChange, handleFontChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
