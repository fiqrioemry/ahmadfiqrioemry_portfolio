"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 backdrop-blur-md t ransition-all duration-300 ${
        scrolled ? " shadow-md" : ""
      } py-8`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl tracking-[1px]">
              Ahmad<span className="text-accent">Fiqri</span>
            </h1>
          </Link>

          {/* navmenu */}
          <NavMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
