"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

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

  const navLinks = [
    { name: "Find Doctors", path: "/find-doctors" },
    { name: "Video Consult", path: "/video-consultation" },
    { name: "Surgeries", path: "/surgeries" },
  ];

  const dropdownMenus = [
    {
      label: (
        <span className="flex items-center">
          <span className="bg-[#102146] text-white px-2 py-0.5 text-xs rounded-full mr-1">
            NEW
          </span>
          For Corporates
        </span>
      ),
      key: "corporates",
      links: ["Health Plans", "Corporate Wellness"],
    },
    {
      label: "For Providers",
      key: "providers",
      links: ["List Your Practice", "Practo Reach"],
    },
    {
      label: "Security & Help",
      key: "security",
      links: ["Security", "Help Center"],
    },
  ];

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-0" : "shadow-sm py-0"
      }`}
    >
      {/* MAIN HEADER BAR */}
      <div className="w-full px-6 sm:px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
          <h1 className="text-blue-950 text-3xl font-bold mb-3">practo</h1>
          <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-base font-normal">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Menu */}
        <div className="hidden ml-3 lg:flex items-center space-x-6">
          {dropdownMenus.map(({ label, links, key }) => (
            <div key={key} className="relative group">
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#4A4A4A",
                  padding: 0,
                  fontSize: "15px",
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  cursor: "pointer",
                }}
                className="hover:text-blue-600 transition-colors"
              >
                {label}
                <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-blue-600" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 left-0 z-10 border border-gray-200">
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
          <button
            style={{
              backgroundColor: "#ffffff",
              color: "#102146",
              border: "1px solid #d4d4d4",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "normal",
              transition: "all 200ms ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >
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
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}

            {dropdownMenus.map(({ label, links, key }) => (
              <div key={key} className="relative">
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#4A4A4A",
                    padding: 0,
                    fontSize: "15px",
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.currentTarget.nextElementSibling.classList.toggle("hidden");
                  }}
                >
                  {typeof label === "string" ? label : "For Corporates"}
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                <div className="hidden bg-gray-50 py-2 pl-4">
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

            <div className="pt-2">
              <button
                style={{
                  backgroundColor: "#ffffff",
                  color: "#102146",
                  border: "1px solid #d4d4d4",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "normal",
                  transition: "all 200ms ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f9fafb";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                }}
              >
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
