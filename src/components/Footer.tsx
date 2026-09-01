import React from 'react';
import { AppSettings } from '../types';
import { ArrowUp, Instagram, Facebook, Mail, ShieldAlert } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../contexts/LanguageContext';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49c1.68-1.57 2.07-4.04 2.07-6.07V8.58a8.28 8.28 0 0 0 4.84 1.56V6.69z" />
    </svg>
  );
}

interface FooterProps {
  settings: AppSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  const t = useTranslations();
  const { language } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white border-t border-[#2B2B2B] relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-900">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#hero" className="inline-block group" aria-label="AFIT Home">
              <img 
                src="/logo.svg" 
                alt="AFIT METHOD Logo" 
                className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-xs text-gray-400 font-body leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#1A1A1A] hover:bg-[#E30613] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#1A1A1A] hover:bg-[#E30613] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={settings.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#1A1A1A] hover:bg-[#E30613] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${settings.email}`}
                className="w-8 h-8 rounded bg-[#1A1A1A] hover:bg-[#E30613] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg text-white tracking-wider">
              {t.footer.quickNav}
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-body">
              <li>
                <a href="#story" className="hover:text-[#E30613] transition-colors">{t.footer.aboutCaptain}</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#E30613] transition-colors">{t.footer.verifiedAccreditations}</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#E30613] transition-colors">{t.footer.clientTransformations}</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#E30613] transition-colors">{t.footer.coachingTiers}</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E30613] transition-colors">{t.footer.facilityTechnique}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E30613] transition-colors">{t.footer.frequentlyAsked}</a>
              </li>
            </ul>
          </div>

          {/* International Credentials */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg text-white tracking-wider">
              {t.footer.accreditations}
            </h4>
            <div className="space-y-2 text-xs text-gray-400 font-body">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30613]" />
                <span>{language === 'ar' ? 'TASS (خطة منحة الرياضيين الموهوبين، المملكة المتحدة)' : 'TASS (Talented Athlete Scheme, UK)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30613]" />
                <span>{language === 'ar' ? 'ACE مدرب شخصي معتمد (الولايات المتحدة)' : 'ACE Certified Personal Trainer (USA)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30613]" />
                <span>{language === 'ar' ? 'IFFC مدرب لياقة رئيسي' : 'IFFC Master Fitness Coach'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30613]" />
                <span>{language === 'ar' ? 'دبلوم جامعة لندن الدولية' : 'London International University Diploma'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30613]" />
                <span>{language === 'ar' ? 'ASCA المستوى 2 للقوة والتكييف' : 'ASCA Level 2 Strength & Conditioning'}</span>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Contact CTA */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg text-white tracking-wider">
              {t.footer.onlineConsultation}
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-body">
              {t.footer.consultationDesc}
            </p>
            <a
              href="#contact"
              className="inline-block w-full py-2.5 px-4 rounded bg-[#E30613] hover:bg-[#C00510] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors"
            >
              {t.footer.getInTouch}
            </a>
          </div>

        </div>

        {/* Bottom Bar & Medical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-body">
          <div>
            © {currentYear} {t.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <span>{t.footer.evidenceBased}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#1A1A1A] hover:bg-[#2B2B2B] text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
              aria-label="Scroll to top"
            >
              <span>{t.footer.top}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-6 pt-4 border-t border-gray-900/60 text-[11px] text-gray-400 text-center flex items-center justify-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span>
            {t.footer.disclaimer}
          </span>
        </div>

      </div>
    </footer>
  );
};
