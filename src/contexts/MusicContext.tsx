import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  consentGiven: boolean;
  giveConsent: (consent: boolean) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem('musicConsent');
    if (savedConsent === 'true') {
      setConsentGiven(true);
    }
  }, []);

  useEffect(() => {
    // Initialize audio element
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/1.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  const giveConsent = (consent: boolean) => {
    setConsentGiven(true);
    localStorage.setItem('musicConsent', consent.toString());
    
    if (consent && audioRef.current) {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, consentGiven, giveConsent }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};