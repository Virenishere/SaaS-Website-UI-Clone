import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ArrowNavSVG from "./SVG/ArrowNavSVG";
import Logo from "../../assets/Logo.png";
import HamburgerSVG from "./SVG/HamburgerSVG";
import LogoMobile from "../../assets/LogoMobile.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full">
      {/* uppernavbar */}
      <div className="uppernav flex justify-center items-center py-3.5 text-sm hover:text-gray-600 cursor-pointer">
        {isMobile
          ? "View the complex Kit"
          : "This page is included in a free SaaS Website Kit. View the complex Kit"}
        <ArrowNavSVG />
      </div>

      {/* mainnavbar */}
      <div className="flex justify-between items-center bg-[#030303] h-20 px-3.5 py-5 cursor-pointer">
        <img src={isMobile ? LogoMobile : Logo} alt="Logo" />
        <button className="hidden md:block bg-white text-black rounded-lg py-2.5 px-3.5 hover:bg-gray-300">
          Get for free
        </button>
        <div className="md:hidden cursor-pointer " onClick={toggleMenu}>
          <HamburgerSVG />
        </div>
      </div>

      {/* Mobilemenubar */}
      {menuOpen && isMobile && (
        <div className="md:hidden bg-[#030303] text-white flex flex-col items-center space-y-2 py-4 transition-all duration-300">
          <a
            href="#"
            className="w-full text-center py-3 hover:text-gray-300 hover:bg-gray-800 rounded-md transition duration-200"
          >
            text1
          </a>
          <hr className="border-t border-gray-700 w-4/5" />
          <a
            href="#"
            className="w-full text-center py-3 hover:text-gray-300 hover:bg-gray-800 rounded-md transition duration-200"
          >
            text2
          </a>
          <hr className="border-t border-gray-700 w-4/5" />
          <a
            href="#"
            className="w-full text-center py-3 hover:text-gray-300 hover:bg-gray-800 rounded-md transition duration-200"
          >
            text3
          </a>
          <hr className="border-t border-gray-700 w-4/5" />
          <a
            href="#"
            className="w-full text-center py-3 hover:text-gray-300 hover:bg-gray-800 rounded-md transition duration-200"
          >
            text4
          </a>
          <hr className="border-t border-gray-700 w-4/5" />
          <button className="mt-4 bg-white text-black rounded-lg py-2.5 px-5 hover:bg-gray-300 transition duration-300">
            Get for free
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
