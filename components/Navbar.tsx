"use client";
import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { Menu, X } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type NavbarProps = {
  logo?: string;
  links: NavLink[];
  ctaText?: string;
  ctaLink?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  logo,
  links,
  ctaText,
  ctaLink,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-purple-700 tracking-wide hover:text-purple-900 transition"
        >
          {logo}
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        {ctaText && ctaLink && (
          <div className="hidden md:block">
            <Button
              variant="fill"
              className="text-sm px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open(ctaLink, "_blank")}
            >
              {ctaText}
            </Button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 text-purple-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md py-4">
          <nav className="flex flex-col items-center gap-4">
            {links.map(({ label, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-base font-medium text-gray-700 hover:text-purple-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            {ctaText && ctaLink && (
              <Button
                variant="fill"
                className="text-base px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white mt-2"
                onClick={() => {
                  window.open(ctaLink, "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                {ctaText}
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
