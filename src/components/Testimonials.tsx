import React from 'react';
import { testimonialsData } from '../data/coachData';
import { Star, Quote, MessageSquareHeart, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#000000] relative border-t border-[#2B2B2B]">
      {/* Background Accent */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#E30613]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            Client Success & Words
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider">
            WHAT CLIENTS <span className="text-[#E30613]">SAY ABOUT CAPTAIN AHMED</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base">
            From medical surgeons to busy corporate executives, discover how the AFIT METHOD changes lives permanently.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-xl bg-[#111111] border border-[#2B2B2B] card-luxury-hover flex flex-col justify-between relative group"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-6 text-gray-800 group-hover:text-[#E30613]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-4">
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-[#E30613]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E30613]" />
                  ))}
                </div>

                {/* Highlight Result Pill */}
                <div className="inline-block">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#1C1C1C] text-emerald-400 border border-emerald-500/20">
                    {review.result}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-6 mt-6 border-t border-gray-800/80 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#2B2B2B] group-hover:border-[#E30613] transition-colors"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-heading text-lg text-white tracking-wide flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
                  </div>
                  <div className="text-xs text-gray-400 font-body">
                    {review.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
