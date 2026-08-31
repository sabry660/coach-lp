import React from 'react';
import { pricingTiersData } from '../data/coachData';
import { Check, Zap, Crown, ArrowRight, Shield } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tierId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 bg-[#000000] relative border-t border-[#2B2B2B]">
      {/* Background radial highlight behind center card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E30613]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            <Crown className="w-3.5 h-3.5" />
            Investment in Excellence
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider">
            SUBSCRIPTION <span className="text-[#E30613]">TIERS & PRICING</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base">
            Transparent, zero-nonsense coaching tiers tailored to your ambition level. Limited intake slots per month to preserve elite coaching quality.
          </p>
        </div>

        {/* 3 Pricing Boxes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiersData.map((tier) => {
            const isPopular = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`relative rounded-xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#1C1214] via-[#141414] to-[#0D0D0D] border-2 border-[#E30613] shadow-[0_0_40px_rgba(227,6,19,0.25)] lg:-translate-y-3'
                    : 'bg-[#121212] border border-[#2B2B2B] hover:border-gray-600'
                } p-7 lg:p-8`}
              >
                {/* Popular / VIP Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[11px] font-heading tracking-widest uppercase px-4 py-1 rounded-full shadow-lg ${
                        isPopular
                          ? 'bg-[#E30613] text-white font-bold'
                          : 'bg-[#2B2B2B] text-gray-200 border border-gray-600'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="flex items-center justify-between mt-2">
                    <h3 className="font-heading text-3xl text-white tracking-wide">
                      {tier.name}
                    </h3>
                    {isPopular && <Zap className="w-5 h-5 text-[#E30613]" />}
                  </div>

                  {/* Price */}
                  <div className="mt-4 mb-3 flex items-baseline gap-1">
                    <span className="font-heading text-5xl lg:text-6xl text-white font-normal">
                      {tier.price}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">{tier.period}</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-gray-400 font-body leading-relaxed mb-6 min-h-[36px]">
                    {tier.description}
                  </p>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2B2B2B] to-transparent my-6" />

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                      What is included:
                    </div>
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div
                          className={`p-1 rounded-full shrink-0 mt-0.5 ${
                            isPopular
                              ? 'bg-[#E30613]/20 text-[#E30613]'
                              : 'bg-[#1F1F1F] text-gray-300'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300 font-body leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-4 px-6 rounded font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-[#E30613] hover:bg-[#C00510] text-white glow-red hover:shadow-2xl'
                        : 'bg-[#1A1A1A] hover:bg-[#2B2B2B] text-white border border-[#2B2B2B] hover:border-gray-500'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-center mt-2.5">
                    <span className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                      <Shield className="w-3 h-3 text-gray-400" /> Cancel or adjust anytime • No lock-in contracts
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Group & Corporate Inquiry Strip */}
        <div className="mt-12 text-center p-4 rounded bg-[#111111] border border-[#2B2B2B] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-300">
            Looking for Competition Prep or Corporate Group Coaching?
          </span>
          <a
            href="#contact"
            className="text-xs font-bold uppercase tracking-wider text-[#E30613] hover:underline"
          >
            Request Custom Consultation →
          </a>
        </div>

      </div>
    </section>
  );
};
