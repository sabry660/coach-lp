import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { AppSettings } from '../types';
import { LanguageToggle } from './LanguageToggle';
import { MusicToggle } from './MusicToggle';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../contexts/LanguageContext';

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
  const t = useTranslations();
  const { language } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.aboutCoach, href: '#story' },
    { name: t.nav.certifications, href: '#certifications' },
    { name: t.nav.transformations, href: '#transformations' },
    { name: t.nav.coachingTiers, href: '#pricing' },
    { name: t.nav.facility, href: '#gallery' },
    { name: t.nav.reviews, href: '#testimonials' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#2B2B2B] shadow-2xl py-3'
          : 'bg-black/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center group focus:outline-none shrink-0"
            aria-label="AFIT Home"
          >
            <img 
              src="/logo.jpg" 
              alt="AFIT METHOD Logo" 
              className="h-10 sm:h-11 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-[#E30613] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#E30613] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <MusicToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded bg-[#E30613] hover:bg-[#C00510] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 glow-red-sm flex items-center gap-2 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.bookConsultation}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button - High visibility 3-line SVG icon */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] border-2 border-[#E30613] focus:outline-none flex items-center justify-center transition-all shadow-[0_0_12px_rgba(227,6,19,0.4)] active:scale-95 shrink-0 min-w-[44px] h-[44px] cursor-pointer z-50"
              aria-label="Toggle Navigation Menu"
              title="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-[#E30613]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-[#E30613]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-[#2B2B2B] px-6 py-6 space-y-5 animate-in slide-in-from-top-2 shadow-2xl">
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-bold text-white hover:text-[#E30613] py-3 border-b border-gray-800/80 transition-colors flex items-center justify-between group"
              >
                <span className="text-white group-hover:text-[#E30613] transition-colors">{link.name}</span>
                <span className="text-sm font-bold text-gray-500 group-hover:text-[#E30613] transition-colors">
                  {language === 'ar' ? '‹' : '›'}
                </span>
              </a>
            ))}
          </nav>

          {/* Language & Music Toggles + Consultation CTA Inside Drawer */}
          <div className="pt-3 space-y-4 border-t border-gray-800/80" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#141414] border border-[#2B2B2B]">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {language === 'ar' ? 'الإعدادات واللغة' : 'Settings & Language'}
              </span>
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <MusicToggle />
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-3.5 rounded bg-[#E30613] hover:bg-[#C00510] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg glow-red-sm active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.bookConsultationWhatsApp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
