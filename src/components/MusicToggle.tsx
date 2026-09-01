import React from 'react';
import { useMusic } from '../contexts/MusicContext';
import { useTranslations } from '../hooks/useTranslations';
import { Music, Volume2, VolumeX } from 'lucide-react';

export const MusicToggle: React.FC = () => {
  const { isPlaying, toggleMusic } = useMusic();
  const t = useTranslations();

  return (
    <button
      onClick={toggleMusic}
      className="p-2 rounded-lg bg-[#1A1A1A] hover:bg-[#2B2B2B] border border-gray-800 hover:border-[#E30613]/50 transition-all duration-300 group relative"
      aria-label={isPlaying ? t.music.pauseMusic : t.music.playMusic}
      title={isPlaying ? t.music.pauseMusic : t.music.playMusic}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-[#E30613] group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-[#E30613] group-hover:scale-110 transition-all" />
      )}
      
      {/* Pulsing indicator when playing */}
      {isPlaying && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#E30613] rounded-full animate-ping" />
      )}
      {isPlaying && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#E30613] rounded-full" />
      )}
    </button>
  );
};