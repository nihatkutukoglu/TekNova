'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Süreç', href: '#process' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Paketler', href: '#packages' },
    { name: 'Hakkımızda', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white border-b border-slate-100 py-4' 
          : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
              Tek<span className="text-blue-600">Nova.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-base"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center pl-6 border-l border-slate-200">
              <a
                href="#contact"
                className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold transition-colors duration-300"
              >
                Projenizi Konuşalım
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full shadow-2xl shadow-slate-900/5">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-slate-900 text-white px-6 py-4 rounded-xl font-semibold text-lg"
              >
                Projenizi Konuşalım
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
