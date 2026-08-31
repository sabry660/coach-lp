import React from 'react';
import { transformationsData } from '../data/coachData';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Flame, Timer, ArrowUpRight, CheckCircle2, Sparkles, SlidersHorizontal } from 'lucide-react';

export const Transformations: React.FC = () => {
  return (
    <section id="transformations" className="py-24 bg-[#0A0A0A] relative border-t border-[#2B2B2B]">
      {/* Background Ambient Glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#E30613]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            <Flame className="w-3.5 h-3.5" />
            Proven Track Record
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider">
            REAL CLIENT <span className="text-[#E30613]">TRANSFORMATIONS</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base">
            Drag the interactive slider to see undeniable before and after results. Real science, disciplined adherence, and surgical nutrition.
          </p>
        </div>

        {/* 3-Column Grid of Before/After Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformationsData.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-lg bg-[#121212] border border-[#2B2B2B] overflow-hidden flex flex-col justify-between group shadow-xl hover:border-[#E30613]/50 transition-colors"
              >
                {/* Top Interactive Slider Container */}
                <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-[#181818]">
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    beforeFallback={item.fallbackBeforeImage}
                    afterFallback={item.fallbackAfterImage}
                    beforeAlt={`${item.clientName} Before Transformation`}
                    afterAlt={`${item.clientName} After Transformation`}
                    className="h-full"
                  />

                  {/* Floating Timeframe Badge */}
                  <div className="absolute bottom-3 left-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold font-heading tracking-wider px-2.5 py-1 rounded shadow-lg flex items-center gap-1.5 z-10 pointer-events-none">
                    <Timer className="w-3.5 h-3.5 text-[#E30613]" />
                    <span>{item.timeframe}</span>
                  </div>

                  {/* Program Tag */}
                  <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#E30613]/90 text-white shadow-md">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content & Metrics */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-2xl text-white tracking-wide">
                          {item.clientName}
                        </h3>
                        <span className="text-xs text-gray-400">Age: {item.age} • AFIT 1-on-1 Client</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" /> Completed
                      </span>
                    </div>

                    {/* Numeric Stats Highlight Bar */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded bg-[#181818] border border-[#2B2B2B]">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">Weight Delta</div>
                        <div className="font-heading text-xl text-[#E30613]">{item.weightChange}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">Body Fat Delta</div>
                        <div className="font-heading text-xl text-white">{item.bodyFatChange}</div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 font-body leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlight bullets */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] mt-1 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-gray-800/80">
                    <a
                      href="#contact"
                      className="w-full py-2.5 px-3 rounded bg-[#1C1C1C] hover:bg-[#E30613] text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Achieve Similar Result</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transformation Guarantee Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 font-body">
            * Individual results vary based on starting baseline, biological adherence, and consistency. 
            All transformations shown are verified 1-on-1 clients of Captain Ahmed Mostafa.
          </p>
        </div>

      </div>
    </section>
  );
};
