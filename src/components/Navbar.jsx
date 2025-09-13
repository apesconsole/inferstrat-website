import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-xl shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-extrabold text-blue-700 tracking-wide">
          INFERSTRAT
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg px-6 py-4 space-y-4">
          <a
            href="#home"
            className="block text-gray-800 hover:text-blue-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-gray-800 hover:text-blue-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="block text-gray-800 hover:text-blue-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-gray-800 hover:text-blue-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

