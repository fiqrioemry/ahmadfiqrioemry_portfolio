"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";
import useHandleTheme from "@/lib/useHandleTheme";

const ThemeSettings = () => {
  const { font, theme, handleThemeChange, handleFontChange } = useHandleTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72  ">
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleThemeChange("classic")}
          className={cn(
            "flex justify-between",
            theme === "classic" ? "bg-foreground " : ""
          )}
        >
          Dark theme
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("light")}
          className={cn(
            "flex justify-between",
            theme === "light" ? "bg-foreground " : ""
          )}
        >
          Light theme
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("dark")}
          className={cn(
            "flex items-center justify-between",
            theme === "dark" ? "bg-foreground dark:text-white" : ""
          )}
        >
          <div>Classic theme</div>
          <div className="text-xs">Recommend</div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Select Font</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleFontChange("jetbrains")}
          className={cn(
            "flex justify-between",
            font === "jetbrains" ? "bg-foreground dark:text-white" : ""
          )}
        >
          JetBrains Mono
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleFontChange("poppins")}
          className={cn(
            "flex justify-between",
            font === "poppins" ? "bg-foreground dark:text-white" : ""
          )}
        >
          Poppins
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleFontChange("roboto")}
          className={cn(
            "flex items-center justify-between",
            font === "roboto" ? "bg-foreground dark:text-white" : ""
          )}
        >
          <div>Roboto</div>
          <div className="text-xs">Recommend</div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleFontChange("inter")}
          className={cn(
            "flex justify-between",
            font === "inter" ? "bg-foreground dark:text-white" : ""
          )}
        >
          Inter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSettings;
