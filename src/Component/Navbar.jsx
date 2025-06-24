import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 font-medium backdrop-blur-md bg-white/20 border-b border-white/30 shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-end items-center">

       

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 text-base tracking-wide">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative group transition-all duration-300"
              >
                <span className="group-hover:text-blue-600">{item.name}</span>
                <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-blue-600"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-6 py-6 bg-white/30 backdrop-blur-lg rounded-xl shadow-xl max-w-md mx-auto font-medium text-gray-800 border border-white/20">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block py-2 px-4 rounded-md hover:bg-white/40 hover:text-blue-600 transition duration-300 text-base tracking-wide"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
