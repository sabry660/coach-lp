import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, MessageCircle } from 'lucide-react';
import { AppSettings } from '../types';

interface NavbarProps {
  settings: AppSettings;
  onSelectTier: (tierId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  settings,
  onSelectTier,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Coach', href: '#story' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Coaching Tiers', href: '#pricing' },
    { name: 'Facility', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/90 backdrop-blur-md border-b border-[#2B2B2B] shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo (Letter in a square only) */}
          <a
            href="#hero"
            className="flex items-center group focus:outline-none"
            aria-label="AFIT Home"
          >
            <div className="w-11 h-11 rounded-sm bg-[#E30613] flex items-center justify-center font-heading text-3xl font-bold text-white tracking-wider shadow-lg shadow-[#E30613]/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[#E30613]/60 group-hover:brightness-110 border border-white/10">
              A
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#E30613] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded bg-[#E30613] hover:bg-[#C00510] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 glow-red-sm flex items-center gap-2 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-gray-400 hover:text-white bg-[#1A1A1A] border border-gray-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#2B2B2B] px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-[#E30613] py-2 border-b border-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Consultation on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
