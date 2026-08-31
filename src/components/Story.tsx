import React, { useState } from 'react';
import { Target, Activity, Zap, CheckSquare, Dumbbell, Award } from 'lucide-react';

export const Story: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const storyImage = '/assets/images/youssef-story.jpg';
  const fallbackStory = 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80';

  const pillars = [
    {
      icon: Activity,
      title: 'Kinematic Biomechanics',
      desc: 'Form is non-negotiable. Every exercise is adjusted to your unique joint architecture and mobility limitations to maximize hypertrophy while protecting spinal & articular health.',
    },
    {
      icon: Zap,
      title: 'Metabolic Periodization',
      desc: 'No stagnant caloric deficits. We cycle carbohydrates, calibrate glycogen replenishment, and optimize leptin/thyroid markers for relentless fat oxidation without muscle loss.',
    },
    {
      icon: Target,
      title: 'Data-Driven Accountability',
      desc: 'Progressive overload tracking, weekly body composition audits, and micro-adjustments prevent plateaus before they happen. Numbers do not lie.',
    },
  ];

  return (
    <section id="story" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-[#2B2B2B]">
      {/* Background ambient accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E30613]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            About The Founder
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider">
            THE MAN BEHIND <span className="text-[#E30613]">AFIT METHOD</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base">
            Bridging the gap between cutting-edge sports science and relentless, real-world execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Image Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#2B2B2B] bg-[#121212] shadow-2xl group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#181818]">
                <img
                  src={imgError ? fallbackStory : storyImage}
                  onError={() => setImgError(true)}
                  alt="Captain Ahmed Mostafa Coaching"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Placeholder path tag */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[10px] uppercase font-mono tracking-wider text-gray-300">
                  assets/images/youssef-story.jpg
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#121212]/95 border border-white/10 p-4 rounded backdrop-blur-md">
                  <div className="font-heading text-xl text-white tracking-wide">CAPTAIN AHMED MOSTAFA</div>
                  <div className="text-xs text-[#E30613] font-semibold uppercase tracking-wider">
                    Master Coach • Sports Nutrition Specialist
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">
                    "Discipline is the bridge between aesthetic ambition and physical reality."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide">
                SCIENCE-BACKED. RESULTS-DRIVEN. NO EXCUSES.
              </h3>
              <p className="font-body text-gray-300 leading-relaxed text-sm sm:text-base">
                With over a decade on the gym floor and advanced international credentials from the 
                <strong className="text-white"> United Kingdom (TASS), USA (ACE), and London International University</strong>, 
                Captain Ahmed Mostafa has revolutionized physique engineering in Egypt and the Middle East.
              </p>
              <p className="font-body text-gray-400 leading-relaxed text-sm sm:text-base">
                The <strong>AFIT METHOD</strong> was born out of frustration with toxic fitness trends: starvation crash diets, 
                injury-prone training splits, and generic online PDFs. Captain Ahmed’s protocol treats each client like an elite athlete—analyzing 
                metabolic markers, hormonal health, biomechanics, and daily lifestyle constraints to craft an undisputed roadmap to victory.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#141414] border border-[#2B2B2B] hover:border-[#E30613]/40 transition-colors flex gap-4 items-start"
                  >
                    <div className="p-2.5 rounded bg-[#E30613]/10 border border-[#E30613]/30 text-[#E30613] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading text-lg text-white tracking-wide">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Experience & Success Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#2B2B2B]">
              <div className="p-3 bg-[#111111] rounded border border-gray-800 text-center">
                <div className="font-heading text-3xl text-[#E30613]">10+</div>
                <div className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">Years Exp.</div>
              </div>
              <div className="p-3 bg-[#111111] rounded border border-gray-800 text-center">
                <div className="font-heading text-3xl text-white">500+</div>
                <div className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">Clients Built</div>
              </div>
              <div className="p-3 bg-[#111111] rounded border border-gray-800 text-center">
                <div className="font-heading text-3xl text-[#E30613]">7</div>
                <div className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">Accreditations</div>
              </div>
              <div className="p-3 bg-[#111111] rounded border border-gray-800 text-center">
                <div className="font-heading text-3xl text-white">100%</div>
                <div className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">Tailored</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
