"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col items-center gap-8 pt-8 pb-12 border-t border-[#141b36]/60 relative z-10">
      <ScrollReveal className="w-full flex flex-col items-center gap-8">
        {/* Footer Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 gap-y-5 sm:gap-4">
          {footerLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${link.href == "#contact" ? "col-span-2 md:col-span-1" : ""}`}
            >
            <Link href={link.href} className={`footer-nav-pill block text-center `}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-slate-400 text-center tracking-wide">
          &copy; {currentYear} Shadi Mustafa. All rights reserved.
        </p>
      </ScrollReveal>
    </footer>
  );
}
