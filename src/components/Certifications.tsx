import React from 'react';
import { certificationsData } from '../data/coachData';
import { Certification } from '../types';
import { Award, CheckCircle2, Globe, FileBadge2, ExternalLink, Eye } from 'lucide-react';

interface CertificationsProps {
  onSelectCert: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  return (
    <section id="certifications" className="py-24 bg-[#000000] relative border-t border-[#2B2B2B]">
      {/* Ambient background glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[300px] bg-[#E30613]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider">
            CERTIFICATIONS & <span className="text-[#E30613]">ACCREDITATIONS</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base">
            Click any certificate card below to inspect the verified accreditation document, curriculum competencies, and issuing institute details.
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => onSelectCert(cert)}
              className={`p-6 rounded-lg bg-[#111111] border border-[#2B2B2B] hover:border-[#E30613] cursor-pointer flex flex-col justify-between relative group transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${
                index === 0 ? 'lg:col-span-2 xl:col-span-1 border-[#E30613]/40 bg-gradient-to-b from-[#181314] to-[#0E0E0E]' : ''
              }`}
            >
              {/* Click to view indicator badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] uppercase font-bold text-[#E30613] bg-black/80 px-2 py-0.5 rounded border border-[#E30613]/40">
                <Eye className="w-3 h-3" />
                <span>View Certificate</span>
              </div>

              <div className="space-y-4">
                {/* Header Badge & Code */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl text-white tracking-wider group-hover:text-[#E30613] transition-colors">
                    {cert.shortCode}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#1C1C1C] text-gray-300 border border-gray-800">
                    {cert.badgeYear}
                  </span>
                </div>

                {/* Full Name */}
                <h3 className="font-heading text-lg text-gray-200 tracking-wide leading-snug group-hover:text-white transition-colors">
                  {cert.name}
                </h3>

                {/* Issuing Organization */}
                <div className="flex items-center gap-1.5 text-xs text-[#E30613] font-medium">
                  <Globe className="w-3.5 h-3.5 shrink-0" />
                  <span className="line-clamp-1">{cert.organization}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed font-body line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Footer Verification Badge */}
              <div className="pt-4 mt-6 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
                <span className="text-gray-400 font-mono">{cert.country}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Standard Guarantee Banner */}
        <div className="mt-12 p-6 rounded-lg bg-[#141414] border border-[#2B2B2B] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded bg-[#E30613]/10 border border-[#E30613]/30 text-[#E30613] shrink-0">
              <FileBadge2 className="w-8 h-8" />
            </div>
            <div>
              <div className="font-heading text-xl text-white tracking-wide">
                100% EVIDENCE-BASED PROTOCOLS ONLY
              </div>
              <p className="text-xs text-gray-400 font-body">
                Continuous international re-certification and peer-reviewed athletic programming. No pseudoscience or risky shortcuts.
              </p>
            </div>
          </div>
          <a
            href="#pricing"
            className="whitespace-nowrap px-6 py-2.5 rounded bg-[#E30613] hover:bg-[#C00510] text-white text-xs font-bold uppercase tracking-wider transition-colors glow-red-sm"
          >
            Train With Certified Coach
          </a>
        </div>

      </div>
    </section>
  );
};
