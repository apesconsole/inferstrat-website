import React from "react";

export default function Footer() {
  return (
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center text-white py-8">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="./images/logo.png" 
            alt="Inferstrat"
            className="mx-auto h-10 w-auto object-contain"
          />
        </div>

        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Inferstrat — Market Research & Consulting
        </p>
      </footer>

  );
}
