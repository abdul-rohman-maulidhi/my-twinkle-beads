// components/Footer.tsx
"use client";
import React from "react";
import { Instagram } from "lucide-react";
import Container from "./ui/Container";

type FooterProps = {
  brandName?: string;
  description?: string;
  navLinks?: { label: string; href: string }[];
  instagramUrl?: string;
};

const Footer: React.FC<FooterProps> = ({
  brandName = "My Twinkle Beads",
  description = "Toko gelang handmade custom dengan sentuhan cinta dan kreativitas.",
  navLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Koleksi", href: "#products" },
    { label: "Keunggulan", href: "#features" },
    { label: "Cara Pesan", href: "#steps" },
    { label: "Kontak", href: "#contact" },
  ],
  instagramUrl = "https://instagram.com/mytwinklebeads",
}) => {
  return (
    <footer className="bg-purple-800 text-white py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-2 tracking-wide text-pink-200">
              {brandName}
            </h2>
            <p className="text-sm text-purple-100">{description}</p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-pink-300 mb-3">Navigasi</h3>
            <ul className="space-y-2 text-sm text-purple-100">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-lg font-semibold text-pink-300 mb-3">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-sm text-center text-purple-200 border-t border-purple-700 pt-6">
          &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
