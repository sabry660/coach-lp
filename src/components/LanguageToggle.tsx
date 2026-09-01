import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141414] hover:bg-[#222222] border border-[#E30613]/40 hover:border-[#E30613] transition-all duration-200 group shrink-0 active:scale-95 shadow-sm"
      aria-label="Switch language"
      title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 text-[#E30613] group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-xs font-bold text-gray-200 group-hover:text-white transition-colors uppercase tracking-wider">
        {language === 'en' ? 'العربية' : 'EN'}
      </span>
    </button>
  );
};