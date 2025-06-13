"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X,  User, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-0" : "shadow-sm py-2"
      }`}
    >
      {/* MAIN HEADER BAR */}
      <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              practo
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          <a 
            href="#"
            className="text-gray-700 hover:text-blue-600 flex items-center group"
          >
            Find Doctors
            <ChevronDown className="ml-1 h-4 w-4 text-gray-400 group-hover:text-blue-600" />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Video Consult
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Surgeries
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Medicines
          </a>
        </nav>

        {/* Right Menu */}
        <div className="hidden ml-3 lg:flex items-center space-x-4">
          {/* Dropdowns */}
          {[
            { label: "For Corporates", links: ["Health Plans", "Corporate Wellness"] },
            { label: "For Providers", links: ["List Your Practice", "Practo Reach"] },
          ].map(({ label, links }) => (
            <div key={label} className="relative group">
              <button className="text-gray-600 hover:text-blue-600 flex items-center text-sm font-medium">
                {label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 left-0 z-10">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Login Button */}
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
            Login / Signup
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 py-4 border-t" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
                 {/* Nav Links */}
          <div className="flex flex-col space-y-4">
            {["Find Doctors", "Video Consult", "Surgeries", "Medicines"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
              >
                {item}
              </a>
            ))}

            <div className="pt-2">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-md">
                <User className="h-5 w-5" />
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
