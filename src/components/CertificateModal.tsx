import React from 'react';
import { Certification } from '../types';
import { X, Award, Globe, CheckCircle2, ShieldCheck, FileBadge2, ExternalLink } from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (!cert) return null;

  const displayImage = imgFailed && cert.certificateFallbackImage
    ? cert.certificateFallbackImage
    : (cert.certificateImage || cert.certificateFallbackImage || 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1000&q=80');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full rounded-xl overflow-hidden bg-[#121212] border border-[#2B2B2B] shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full text-white bg-black/80 hover:bg-[#E30613] border border-white/10 transition-colors shadow-lg"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto custom-scrollbar flex-1">
          
          {/* Certificate Photo Display Frame */}
          <div className="relative w-full bg-[#0A0A0A] border-b border-[#2B2B2B] flex items-center justify-center p-4 sm:p-6">
            <div className="relative w-full max-h-[420px] rounded-lg overflow-hidden border border-[#2B2B2B] shadow-2xl bg-black/50 flex items-center justify-center">
              <img
                src={displayImage}
                onError={() => setImgFailed(true)}
                alt={`${cert.name} Official Certificate Document`}
                className="max-h-[380px] w-full object-contain"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Authenticity Watermark Tag */}
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded text-emerald-400 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Officially Verified Credential</span>
              </div>

              {/* Code Tag */}
              <div className="absolute top-3 right-14 bg-black/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-white text-[11px] font-heading tracking-wider">
                {cert.shortCode}
              </div>
            </div>
          </div>

          {/* Certificate Information & Description Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#121212]">
            
            {/* Header info */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded bg-[#E30613]/10 text-[#E30613] border border-[#E30613]/30">
                  {cert.badgeYear}
                </span>
                <span className="text-xs font-medium text-gray-400 font-mono flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-gray-400" />
                  {cert.country}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide pt-1">
                {cert.name}
              </h3>

              <div className="text-xs sm:text-sm text-gray-300 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E30613]" />
                <span>Issuing Body: {cert.organization}</span>
              </div>
            </div>

            {/* Description Text */}
            <div className="p-4 rounded-lg bg-[#181818] border border-[#2B2B2B] text-gray-300 text-xs sm:text-sm leading-relaxed font-body">
              <p>{cert.description}</p>
            </div>

            {/* Competency & Curriculum Highlights */}
            {cert.specialtyDetails && cert.specialtyDetails.length > 0 && (
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E30613]" />
                  <span>Curriculum & Tested Competencies</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cert.specialtyDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded bg-[#161616] border border-[#262626] flex items-start gap-2 text-xs text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action */}
            <div className="pt-4 border-t border-[#2B2B2B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-gray-400 text-center sm:text-left">
                Verified under Captain Ahmed Mostafa's coaching registry.
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#E30613] hover:bg-[#C00510] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-lg"
              >
                Apply To Train With Coach
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
