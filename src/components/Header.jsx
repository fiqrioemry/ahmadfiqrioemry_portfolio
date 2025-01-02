"use client";
import Link from "next/link";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";
import { FaMoon, FaSun } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import useHandleDarkMode from "@/lib/useHandleDarkMode";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const { darkMode, handleDarkMode } = useHandleDarkMode();

  const handleToggle = () => {
    handleDarkMode();
  };

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
              <button
                onClick={handleToggle}
                className=" dark:bg-lightPrimary px-2 py-2 rounded-full dark:hover:bg-lightSecondary hover:bg-secondary"
              >
                {darkMode ? (
                  <FaSun className="text-2xl" />
                ) : (
                  <FaMoon className="text-2xl" />
                )}
              </button>
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
