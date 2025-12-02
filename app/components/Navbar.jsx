"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Close mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSetActive = (name) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  // Smooth scroll function
  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="z-[999] relative">
      <motion.div 
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.8rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li 
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleSetActive(link.name);
                  scrollToSection(link.hash);
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}

          {/* Projects link specifically for mobile menu */}
          <motion.li 
            className="h-3/4 flex items-center justify-center relative sm:hidden"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
                {
                  "text-gray-950 dark:text-gray-200": activeSection === "Projects",
                }
              )}
              href="/projects"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveSection("Projects");
              }}
            >
              All Projects
            </Link>
          </motion.li>
        </ul>
      </nav>

      {/* Mobile menu button */}
      <button
        className="fixed top-4 right-4 z-[1000] sm:hidden p-2 rounded-md bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <div className="w-6 flex flex-col gap-1">
          <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 dark:bg-white ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-opacity duration-300 dark:bg-white ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 dark:bg-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/50 z-[998] sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <motion.div 
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-[999] transform transition-transform duration-300 ease-in-out sm:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
      >
        <div className="pt-20 px-4">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  className={clsx(
                    "block py-3 px-4 rounded-lg transition",
                    {
                      "bg-gray-200 text-gray-950 dark:bg-gray-800 dark:text-gray-200": activeSection === link.name,
                      "text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800": activeSection !== link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetActive(link.name);
                    scrollToSection(link.hash);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Additional link for all projects page */}
            <li>
              <Link
                className={clsx(
                  "block py-3 px-4 rounded-lg transition",
                  {
                    "bg-gray-200 text-gray-950 dark:bg-gray-800 dark:text-gray-200": activeSection === "Projects",
                    "text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800": activeSection !== "Projects",
                  }
                )}
                href="/projects"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveSection("Projects");
                }}
              >
                All Projects
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;