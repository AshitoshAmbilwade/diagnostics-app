"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // Removed User as it's not in the image

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
        scrolled ? "shadow-md py-0" : "shadow-sm py-0" // Removed py-2 for a more compact initial state
      }`}
    >
      {/* MAIN HEADER BAR */}
      <div className="w-full px-6 sm:px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          {/* Practo Logo */}
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
            <h1 className="text-blue-950 text-3xl font-bold mb-3">practo</h1>
            <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
            {/* Using an image for the logo */}
          </div>
        </div>

        {/* Navigation - Center Aligned */}
        <nav className="hidden lg:flex space-x-8 text-base font-normal">
          {" "}
          {/* Increased space, adjusted font */}
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Find Doctors
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Video Consult
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Surgeries
          </a>
          {/* Medicines link is not in the image header, so it's removed */}
        </nav>

        {/* Right Menu */}
        <div className="hidden ml-3 lg:flex items-center space-x-6">
          {" "}
          {/* Adjusted space */}
          {/* Dropdowns */}
          {[
            {
              label: (
                <span className="flex items-center">
                  <span className="bg-[#102146] text-white px-2 py-0.5 text-xs rounded-full mr-1">
                    NEW
                  </span>
                  For Corporates
                </span>
              ),
              links: ["Health Plans", "Corporate Wellness"],
            },
            {
              label: "For Providers",
              links: ["List Your Practice", "Practo Reach"],
            },
            { label: "Security & Help", links: ["Security", "Help Center"] }, // Added Security & Help
          ].map(({ label, links }) => (
            <div
              key={typeof label === "string" ? label : "corporate"}
              className="relative group"
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#4A4A4A", // Changed text color to match image
                  padding: 0,
                  fontSize: "15px", // Adjusted font size
                  fontWeight: 400, // Adjusted font weight
                  display: "flex",
                  alignItems: "center",
                  gap: "2px", // Adjusted gap
                  cursor: "pointer",
                }}
                className="hover:text-blue-600 transition-colors" // Changed hover color
              >
                {label}
                <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-blue-600" />{" "}
                {/* Adjusted color */}
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 left-0 z-10 border border-gray-200">
                {" "}
                {/* Added border */}
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
          <button
            style={{
              backgroundColor: "#ffffff", // bg-white
              color: "#102146", // text-[#102146]
              border: "1px solid #d4d4d4", // border border-[#d4d4d4]
              padding: "8px 20px", // px-5 py-2 (approximate; 1 unit = 4px in Tailwind)
              borderRadius: "8px", // rounded-lg (approximate; 8px for lg)
              fontSize: "16px", // text-base (approximate; 16px for base)
              fontWeight: "normal", // font-normal
              transition: "all 200ms ease-in-out", // transition-all duration-200
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb"; // hover:bg-gray-50
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff"; // Reset on mouse leave
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
          isMenuOpen
            ? "max-h-96 opacity-100 py-4 border-t"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Nav Links */}
          <div className="flex flex-col space-y-4">
            {["Find Doctors", "Video Consult", "Surgeries"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100"
              >
                {item}
              </a>
            ))}
            {/* Added Mobile Dropdown for Corporates, Providers, Security & Help */}
            {[
              {
                label: "For Corporates",
                links: ["Health Plans", "Corporate Wellness"],
              },
              {
                label: "For Providers",
                links: ["List Your Practice", "Practo Reach"],
              },
              { label: "Security & Help", links: ["Security", "Help Center"] },
            ].map(({ label, links }) => (
              <div
                key={typeof label === "string" ? label : "corporate-mobile"}
                className="relative"
              >
                <button
                  style={{
                  background: "none",
                  border: "none",
                  color: "#4A4A4A", // Changed text color to match image
                  padding: 0,
                  fontSize: "15px", // Adjusted font size
                  fontWeight: 400, // Adjusted font weight
                  display: "flex",
                  alignItems: "center",
                  gap: "2px", // Adjusted gap
                  cursor: "pointer",
                }}
                  onClick={(e) => {
                    // Simple toggle for mobile dropdowns
                    e.currentTarget.nextElementSibling.classList.toggle(
                      "hidden"
                    );
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
                  backgroundColor: "#ffffff", // bg-white
                  color: "#102146", // text-[#102146]
                  border: "1px solid #d4d4d4", // border border-[#d4d4d4]
                  padding: "8px 20px", // px-5 py-2 (approximate; 1 unit = 4px in Tailwind)
                  borderRadius: "8px", // rounded-lg (approximate; 8px for lg)
                  fontSize: "16px", // text-base (approximate; 16px for base)
                  fontWeight: "normal", // font-normal
                  transition: "all 200ms ease-in-out", // transition-all duration-200
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f9fafb"; // hover:bg-gray-50
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff"; // Reset on mouse leave
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
