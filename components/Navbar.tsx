"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.slice(1);
    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    };

    if (menuOpen) {
      setMenuOpen(false);
      // Wait for menu close animation to finish before scrolling
      setTimeout(scrollToSection, 320);
    } else {
      scrollToSection();
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
        >
          Rahul<span className="text-accent">.</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-accent font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent-light rounded-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href={personalInfo.resume}
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Resume
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            className="w-5 h-0.5 bg-foreground block origin-center transition-all"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-5 h-0.5 bg-foreground block"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            className="w-5 h-0.5 bg-foreground block origin-center transition-all"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-3 py-2.5 text-sm text-foreground hover:text-accent hover:bg-accent-light rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <a
                  href={personalInfo.resume}
                  download
                  className="block px-3 py-2.5 text-sm font-medium text-accent hover:bg-accent-light rounded-lg transition-colors duration-200"
                >
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
