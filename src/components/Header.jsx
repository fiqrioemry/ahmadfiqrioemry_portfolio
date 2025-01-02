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
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const { handleThemeChange } = useTheme();

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
      } py-8 sticky top-0 backdrop-blur-md transition-all duration-300 z-30 `}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <Link href="/">
            <h1 className="text-2xl tracking-[1px] dark:text-light">
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
                  <Button variant="outline">
                    <Settings />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72">
                  <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleThemeChange("dark")}
                    className="flex justify-between"
                  >
                    Dark theme
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleThemeChange("light")}
                    className="flex justify-between"
                  >
                    Light theme
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleThemeChange("classic")}
                    className="flex justify-between"
                  >
                    Classic theme
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleThemeChange("modern")}
                    className="flex justify-between"
                  >
                    Modern theme
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
