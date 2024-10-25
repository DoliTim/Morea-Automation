// src/components/Header.js
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#F5F5F5] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="/images/morea-logo.jpg" 
              alt="Morea Logo" 
              className="h-8"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#product" className="text-gray-800 hover:text-black transition-colors">
              Product
            </a>
            <a href="#features" className="text-gray-800 hover:text-black transition-colors">
              Features
            </a>
            <a href="#contact" className="text-gray-800 hover:text-black transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F5F5]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#product" className="block px-3 py-2 text-gray-800 hover:text-black">
              Product
            </a>
            <a href="#features" className="block px-3 py-2 text-gray-800 hover:text-black">
              Features
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-800 hover:text-black">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;