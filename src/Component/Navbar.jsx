import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "HOME", href: "#home" },
    { name: "WORK", href: "#work" },
    { name: "SERVICES", href: "#services" },
    { name: "CONNECT", href: "#connect" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--beige)",
        borderBottom: scrolled ? "2px solid var(--ink)" : "2px solid transparent",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="font-mono text-base font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--ink)", fontFamily: "'Space Mono', monospace" }}
          whileHover={{ opacity: 0.7 }}
        >
          MIHAD<span style={{ color: "var(--ink-muted)" }}>.DEV</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <li key={item.name}>
              <motion.a
                href={item.href}
                className="hover-underline text-sm tracking-[0.12em]"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "var(--ink)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
                whileHover={{ opacity: 0.7 }}
              >
                {item.name}
              </motion.a>
            </li>
          ))}
          <li>
            <motion.a
              href="mailto:mihadbornio@me.com"
              className="editorial-box text-xs font-bold tracking-widest"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "var(--ink)",
                border: "2px solid var(--ink)",
              }}
              whileHover={{ backgroundColor: "var(--ink)", color: "var(--beige)" }}
              transition={{ duration: 0.2 }}
            >
              HIRE ME
            </motion.a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span
            className="block h-0.5 w-6"
            style={{ backgroundColor: "var(--ink)" }}
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block h-0.5 w-6"
            style={{ backgroundColor: "var(--ink)" }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block h-0.5 w-6"
            style={{ backgroundColor: "var(--ink)" }}
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ borderTop: "2px solid var(--ink)", backgroundColor: "var(--beige)" }}
            className="overflow-hidden md:hidden"
          >
            <ul className="px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-bold tracking-widest"
                    style={{ fontFamily: "'Space Mono', monospace", color: "var(--ink)" }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:mihadbornio@me.com"
                  className="editorial-box text-xs font-bold"
                  style={{ fontFamily: "'Space Mono', monospace", color: "var(--ink)", border: "2px solid var(--ink)" }}
                >
                  HIRE ME
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;