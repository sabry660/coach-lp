import React, { useState, useMemo } from 'react';
import { useCoachData } from '../data/coachData';
import { GalleryItem } from '../types';
import { Maximize2, Camera, Eye } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const t = useTranslations();
  const { gallery } = useCoachData();

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Memoize gallery items to prevent unnecessary re-renders
  const galleryItems = useMemo(() => {
    return gallery.map((item) => {
      const isFailed = failedImages[item.id];
      const displayImg = isFailed ? item.fallbackImage : item.image;
      return { ...item, displayImg, isFailed };
    });
  }, [gallery, failedImages]);

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-[#2B2B2B] w-full max-w-full">
      {/* Background Ambient Glow */}
      <div className="absolute left-0 sm:left-1/4 top-1/2 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 bg-[#E30613]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            <Camera className="w-3.5 h-3.5" />
            {t.gallery.badge}
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider" dangerouslySetInnerHTML={{ __html: t.gallery.headline }} />
          <p className="font-body text-gray-400 text-sm sm:text-base">
            {t.gallery.description}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox({ ...item, image: item.displayImg })}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-[#121212] border border-[#2B2B2B] hover:border-[#E30613]/50 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={item.displayImg}
                onError={() => handleImageError(item.id)}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Quick Zoom Button */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#E30613]/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Content - Only show if title or category exists */}
              {(item.title || item.category) && (
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  {item.category && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E30613] bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  )}
                  {item.title && (
                    <h3 className="font-heading text-lg text-white tracking-wide leading-tight group-hover:text-[#E30613] transition-colors">
                      {item.title}
                    </h3>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
