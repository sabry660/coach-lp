import React, { useState } from 'react';
import { useCoachData } from '../data/coachData';
import { HelpCircle, ChevronDown, MessageSquareQuote } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

export const Faq: React.FC = () => {
  // Allow toggling open item, default first item open
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations();
  const { faq: faqs } = useCoachData();

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-[#2B2B2B] w-full max-w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            <HelpCircle className="w-3.5 h-3.5" />
            {t.faq.badge}
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider" dangerouslySetInnerHTML={{ __html: t.faq.headline }} />
          <p className="font-body text-gray-400 text-sm sm:text-base">
            {t.faq.description}
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141414] border-[#E30613]/50 shadow-lg'
                    : 'bg-[#111111] border-[#2B2B2B] hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-xl sm:text-2xl text-white tracking-wide leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#E30613] text-white rotate-180'
                        : 'bg-[#1F1F1F] text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-300 font-body text-xs sm:text-sm leading-relaxed border-t border-[#2B2B2B]/60 animate-in fade-in slide-in-from-top-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 text-center p-5 rounded bg-[#111111] border border-[#2B2B2B]">
          <p className="text-xs sm:text-sm text-gray-300">
            {t.faq.customQuestion}{' '}
            <a href="#contact" className="text-[#E30613] font-bold hover:underline ml-1">
              {t.faq.askDirectly}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
