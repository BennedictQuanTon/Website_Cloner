"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CosmoqLogo } from "./icons";

const navLinks = [
  { name: "AI Solutions", href: "#solutions" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-black/40 backdrop-blur-md border-b border-white/5" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <CosmoqLogo className="h-6 w-auto text-white" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[inset_-3px_-2px_8px_0px_rgba(255,255,255,0.05)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-200" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#pricing" className="btn-primary px-5 py-2 text-sm font-medium inline-block">
              Get Started
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg md:hidden transition-all duration-300 flex flex-col justify-center px-8 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 text-center text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white font-medium py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="btn-primary py-3 px-6 text-base font-semibold mt-4 text-center block"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </>
  );
}
