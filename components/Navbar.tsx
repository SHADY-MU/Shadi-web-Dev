"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <header className="sticky top-0 left-0 right-0 w-full z-50 bg-[#050816]/90 backdrop-blur-md border-b border-[#141b36]/80 flex justify-center">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-5xl px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between relative"
      >
        <Link href="#home" className="nav-brand" onClick={closeMenu}>
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block font-black text-xl sm:text-2xl text-white tracking-wide hover:text-blue-400 transition-colors"
          >
            Shadi Mustafa
          </motion.span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link.href} className="nav-pill" onClick={closeMenu}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <motion.button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={showMenu}
          onClick={() => setShowMenu(!showMenu)}
          whileTap={{ scale: 0.9 }}
          className="nav-toggle-btn"
        >
          {showMenu ? (
            <X className="w-5 h-5 text-blue-400" />
          ) : (
            <Menu className="w-5 h-5 text-slate-200" />
          )}
        </motion.button>

        {/* Animated Mobile Dropdown */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full px-6 pt-4 pb-6 flex flex-col items-center gap-3 bg-[#060a22]/95 backdrop-blur-2xl border-b border-[#1a2554] shadow-2xl shadow-black/90 md:hidden"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    className="nav-pill block text-center w-full"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
