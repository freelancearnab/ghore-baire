"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "Reservations", href: "#reservations" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 shadow-lg shadow-amber-900/10 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="font-playfair text-2xl font-bold tracking-wide text-amber-400 md:text-3xl">
            Ghare Baire
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium tracking-widest text-white/80 uppercase transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:text-amber-400 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#reservations"
            className="hidden rounded-sm border border-amber-400 bg-amber-400/10 px-5 py-2 text-sm font-semibold tracking-wider text-amber-400 uppercase transition-all duration-300 hover:bg-amber-400 hover:text-black sm:inline-block"
          >
            Book a Table
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium tracking-widest text-white/80 uppercase transition-colors duration-300 hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-sm border border-amber-400 bg-amber-400/10 px-6 py-2 text-sm font-semibold tracking-wider text-amber-400 uppercase transition-all duration-300 hover:bg-amber-400 hover:text-black"
          >
            Book a Table
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
