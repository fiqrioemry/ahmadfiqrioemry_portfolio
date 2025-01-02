"use client";

import useHandleTheme from "@/lib/useHandleTheme";
import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { theme, handleThemeChange } = useHandleTheme();
  useHandleTheme();
  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
