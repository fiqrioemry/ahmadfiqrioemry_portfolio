"use client";
import Link from "next/link";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleDarkMode } from "@/app/store/store";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "shadow-md" : ""
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
          <div className="hidden xl:flex items-center gap-8">
            <NavMenu />
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
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
