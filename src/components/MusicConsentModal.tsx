import React from 'react';
import { useMusic } from '../contexts/MusicContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';
import { Music, X } from 'lucide-react';

export const MusicConsentModal: React.FC = () => {
  const { consentGiven, giveConsent } = useMusic();
  const t = useTranslations();

  if (consentGiven) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111111] border-t border-[#2B2B2B] p-3 sm:p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="p-1.5 sm:p-2 rounded-full bg-[#E30613]/20 border border-[#E30613]/30 shrink-0">
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-[#E30613]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-base sm:text-lg text-white tracking-wide">
              {t.music.title}
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400">
              {t.music.subtitle}
            </p>
          </div>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => giveConsent(true)}
            className="flex-1 sm:flex-none py-2 sm:py-2 px-3 sm:px-4 rounded bg-[#E30613] hover:bg-[#C00510] text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs transition-all duration-200 glow-red"
          >
            {t.music.yesPlay}
          </button>
          <button
            onClick={() => giveConsent(false)}
            className="flex-1 sm:flex-none py-2 sm:py-2 px-3 sm:px-4 rounded bg-[#1A1A1A] hover:bg-[#2B2A2A] text-white border border-[#2B2B2B] hover:border-gray-500 font-semibold uppercase tracking-wider text-[10px] sm:text-xs transition-all duration-200"
          >
            {t.music.noThanks}
          </button>
        </div>
      </div>
    </div>
  );
};