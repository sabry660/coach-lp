import React, { useState } from 'react';
import { galleryData } from '../data/coachData';
import { GalleryItem } from '../types';
import { Maximize2, Camera, Eye } from 'lucide-react';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0A] relative border-t border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            <Camera className="w-3.5 h-3.5" />
            Training Environment & Action
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider">
            AFIT METHOD <span className="text-[#E30613]">GALLERY</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base">
            Glimpse inside the high-performance training culture, elite barbell equipment, and kinematic coaching sessions.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryData.map((item) => {
            const isFailed = failedImages[item.id];
            const displayImg = isFailed ? item.fallbackImage : item.image;

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox({ ...item, image: displayImg })}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-[#121212] border border-[#2B2B2B] hover:border-[#E30613]/50 cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image */}
                <img
                  src={displayImg}
                  onError={() => handleImageError(item.id)}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Placeholder path tag */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-gray-300">
                  {item.image.replace('/', '')}
                </div>

                {/* Hover Quick Zoom Button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E30613]">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-xl text-white tracking-wide leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
