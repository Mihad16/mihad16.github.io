import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 px-6 py-4 font-medium backdrop-blur-md bg-black/80 border-b border-gray-800 shadow-md transition-all duration-300"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl w-full mx-auto flex justify-end items-center px-2 sm:px-0">

       

        {/* Desktop Menu */}
        <motion.ul 
          className="hidden md:flex space-x-8 text-white text-base tracking-wide"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item, index) => (
            <motion.li 
              key={item.name}
              variants={menuItemVariants}
              custom={index}
            >
              <motion.a
                href={item.href}
                className="relative group transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:text-blue-400">{item.name}</span>
                <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-blue-400"></span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
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
          </motion.svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul 
          className="md:hidden mt-4 space-y-4 px-6 py-6 bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-xl max-w-md mx-auto font-medium text-white border border-gray-800"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item, index) => (
            <motion.li 
              key={item.name}
              variants={menuItemVariants}
              custom={index}
            >
              <motion.a
                href={item.href}
                className="block py-2 px-4 rounded-md hover:bg-gray-800/40 hover:text-blue-400 transition duration-300 text-base tracking-wide"
                onClick={closeMenu}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;
