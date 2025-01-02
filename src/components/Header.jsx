"use client";
import Link from "next/link";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";
import { useTheme } from "@/app/ThemeProvider";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const { font, theme, handleThemeChange, handleFontChange } = useTheme();

  useEffect(() => {
    const handleScrollEvent = () => setScrollActive(window.scrollY > 0);

    window.addEventListener("scroll", handleScrollEvent);

    handleScrollEvent();

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <header
      className={`${
        scrollActive ? "shadow-md" : ""
      } py-8 sticky top-0 backdrop-blur-md transition-all duration-300 z-20 `}
    >
      <div className="container mx-auto ">
        <div className="flex items-center justify-between ">
          <Link href="/">
            <h1 className="text-2xl tracking-[1px] ">
              Ahmad<span className="text-accent">Fiqri</span>
            </h1>
          </Link>

          {/* navmenu */}
          <div className="flex gap-x-4 items center">
            <div className="hidden xl:flex items-center gap-8">
              <NavMenu />
            </div>
            <div className="flex items-center">
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
                      "flex justify-between",
                      theme === "dark" ? "bg-foreground dark:text-white" : ""
                    )}
                  >
                    Classic theme
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Select Font</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleFontChange("jetbrains")}
                    className={cn(
                      "flex justify-between",
                      font === "jetbrains"
                        ? "bg-foreground dark:text-white"
                        : ""
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
                      "flex justify-between",
                      font === "roboto" ? "bg-foreground dark:text-white" : ""
                    )}
                  >
                    Roboto
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
            </div>
            {/* mobile nav */}
            <div className="xl:hidden flex items-center">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
