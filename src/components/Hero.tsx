import React, { useState, useEffect } from 'react';
import { Flame, ArrowRight, Trophy, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { AppSettings } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface HeroProps {
  settings: AppSettings;
}

export const Hero: React.FC<HeroProps> = ({ settings }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const t = useTranslations();
  const heroImage = '/hero.jpeg';
  const fallbackHero = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85';

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImgLoaded(true);
    img.onerror = () => {
      setImgError(true);
      setImgLoaded(true);
    };
  }, [heroImage]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-transparent overflow-hidden w-full max-w-full"
    >
      {/* Background Radial Glow & Grid pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[500px] bg-[#E30613]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High Impact Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Coach & Method Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-red-500/20 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#E30613] animate-ping" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-200">
                {t.hero.badge}
              </span>
            </div>

            {/* High-Impact Headline */}
            <div className="space-y-1">
              <h1 className="font-heading text-5xl sm:text-7xl xl:text-8xl font-normal leading-[0.9] text-white tracking-wider" dangerouslySetInnerHTML={{ __html: t.hero.headline }} />
              <p className="font-heading text-xl sm:text-2xl text-gray-400 tracking-widest uppercase pt-1">
                {t.hero.subheadline}
              </p>
            </div>

            {/* Compelling Subheadline */}
            <p className="font-body text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Two Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#E30613] hover:bg-[#C00510] text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-sm shadow-xl glow-red transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{t.hero.startTransformation}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#2B2B2B] text-white border border-[#2B2B2B] hover:border-gray-500 font-semibold uppercase tracking-wider text-sm px-7 py-4 rounded-sm transition-all duration-200"
              >
                <span>{t.hero.exploreTiers}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-[#2B2B2B]/80 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="flex items-center gap-2.5">
                <Trophy className="w-5 h-5 text-[#E30613] shrink-0" />
                <div>
                  <div className="font-heading text-2xl text-white tracking-wide">10+ {t.hero.yearsExp}</div>
                  <div className="text-[11px] text-gray-400 uppercase font-medium">{t.hero.coachingMastery}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Flame className="w-5 h-5 text-[#E30613] shrink-0" />
                <div>
                  <div className="font-heading text-2xl text-white tracking-wide">500+</div>
                  <div className="text-[11px] text-gray-400 uppercase font-medium">{t.hero.physiquesRebuilt}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#E30613] shrink-0" />
                <div>
                  <div className="font-heading text-2xl text-white tracking-wide">TASS & ACE</div>
                  <div className="text-[11px] text-gray-400 uppercase font-medium">{t.hero.ukUsAccredited}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Ambient Background Box Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#E30613]/30 via-transparent to-[#E30613]/10 rounded-lg blur-xl opacity-70" />

            <div className="relative w-full max-w-md lg:max-w-none rounded-lg overflow-hidden border border-[#2B2B2B] bg-[#121212] shadow-2xl group">
              
              {/* Main Coach Image with Error Fallback */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#181818]">
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#181818]">
                    <div className="w-8 h-8 border-2 border-[#E30613] border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={imgError ? fallbackHero : heroImage}
                  onError={() => setImgError(true)}
                  alt="Captain Ahmed El Saiad - AFIT METHOD Elite Coach"
                  className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${!imgLoaded ? 'opacity-0' : 'opacity-100'}`}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlays for Luxury Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-black/20" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                {/* Bottom Floating Stats Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 p-3.5 rounded flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#E30613]/20 border border-[#E30613] flex items-center justify-center font-heading text-xl text-[#E30613]">
                      AS
                    </div>
                    <div>
                      <div className="font-heading text-lg text-white tracking-wide">{settings.coachName}</div>
                      <div className="text-[11px] text-gray-400">{t.hero.headCoach}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" /> {t.hero.certified}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
