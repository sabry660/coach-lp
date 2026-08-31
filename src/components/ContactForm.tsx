import React, { useState, useEffect } from 'react';
import { AppSettings, ConsultationFormData } from '../types';
import {
  MessageCircle,
  Send,
  Instagram,
  Facebook,
  Mail,
  Flame,
  CheckCircle2,
  ShieldCheck,
  User,
  PhoneCall,
  Scale,
  Ruler,
  Dumbbell,
  Target
} from 'lucide-react';

// Custom TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49c1.68-1.57 2.07-4.04 2.07-6.07V8.58a8.28 8.28 0 0 0 4.84 1.56V6.69z" />
    </svg>
  );
}

interface ContactFormProps {
  settings: AppSettings;
  selectedTierId: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  settings,
  selectedTierId,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    email: '',
    goal: 'Fat Loss & Physique Shredding',
    experienceLevel: 'Intermediate (1-3 years gym)',
    selectedTier: selectedTierId ? (selectedTierId === 'vip-1on1' ? 'VIP 1-on-1 ($349/mo)' : selectedTierId === 'pro-elite' ? 'Pro Elite Coaching ($199/mo)' : 'Starter Tier ($99/mo)') : 'Pro Elite Coaching ($199/mo)',
    currentWeight: '',
    targetWeight: '',
    height: '',
    age: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

  // Update selected tier if user clicks from pricing section
  useEffect(() => {
    if (selectedTierId === 'starter') {
      setFormData((prev) => ({ ...prev, selectedTier: 'Starter Tier ($99/mo)' }));
    } else if (selectedTierId === 'pro-elite') {
      setFormData((prev) => ({ ...prev, selectedTier: 'Pro Elite Coaching ($199/mo)' }));
    } else if (selectedTierId === 'vip-1on1') {
      setFormData((prev) => ({ ...prev, selectedTier: 'VIP 1-on-1 ($349/mo)' }));
    }
  }, [selectedTierId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructWhatsAppMessage = (): string => {
    const coachName = settings.coachName || 'Captain Ahmed Mostafa';
    
    return `🔥 *AFIT METHOD — Coaching Application & Consultation* 🔥
------------------------------------------
👤 *Applicant Name:* ${formData.name || 'Not provided'}
📱 *Phone / WhatsApp:* ${formData.phone || 'Not provided'}
📧 *Email:* ${formData.email || 'N/A'}
🎯 *Primary Goal:* ${formData.goal}
🏆 *Experience Level:* ${formData.experienceLevel}
💎 *Selected Coaching Tier:* ${formData.selectedTier}
⚖️ *Current Weight:* ${formData.currentWeight ? formData.currentWeight + ' kg' : 'N/A'}
🎯 *Target Weight:* ${formData.targetWeight ? formData.targetWeight + ' kg' : 'N/A'}
📏 *Height:* ${formData.height ? formData.height + ' cm' : 'N/A'}
🎂 *Age:* ${formData.age ? formData.age + ' years' : 'N/A'}
------------------------------------------
📝 *Health & Fitness Notes / Medical:*
${formData.notes ? formData.notes : 'Ready to start full training protocol immediately.'}
------------------------------------------
🚀 *Submitted via AFIT Official Landing Page for ${coachName}*`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = constructWhatsAppMessage();
    setGeneratedMessage(msg);
    setSubmitted(true);

    // Clean destination WhatsApp number (remove +, spaces, dashes)
    const cleanNumber = (settings.whatsappNumber || '201000000000').replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsAppClick = () => {
    const cleanNumber = (settings.whatsappNumber || '201000000000').replace(/[^0-9]/g, '');
    const defaultMsg = encodeURIComponent(
      `Hello Captain Ahmed Mostafa! I am interested in joining the AFIT METHOD coaching program. Please send me the details.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#000000] relative border-t border-[#2B2B2B]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E30613]/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-xs font-bold uppercase tracking-widest text-[#E30613]">
            <Target className="w-3.5 h-3.5" />
            Apply For Coaching
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl text-white tracking-wider">
            START YOUR <span className="text-[#E30613]">TRANSFORMATION TODAY</span>
          </h2>
          <p className="font-body text-gray-400 text-sm sm:text-base">
            Fill out your details below to instantly generate your tailored consultation message and send it directly to Captain Ahmed on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Coach Direct CTA Card */}
            <div className="p-8 rounded-xl bg-gradient-to-b from-[#181213] to-[#0E0E0E] border-2 border-[#E30613] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E30613]/20 blur-2xl rounded-full pointer-events-none" />

              <div className="space-y-5 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#E30613] text-white flex items-center justify-center font-heading text-2xl shadow-lg glow-red">
                  <Flame className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-heading text-3xl text-white tracking-wide">
                    DIRECT COACH ACCESS
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-body leading-relaxed mt-1">
                    Skip the middleman. You will work directly with <strong>Captain Ahmed Mostafa</strong>. Every workout, diet split, and weekly video audit is personally engineered by him.
                  </p>
                </div>

                {/* Direct Instant WhatsApp Chat Button */}
                <button
                  type="button"
                  onClick={handleDirectWhatsAppClick}
                  className="w-full py-4 px-6 rounded bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Instant WhatsApp Chat</span>
                </button>

                <div className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E30613]" />
                  <span>Confidential & Direct Athletic / Nutrition Consultation</span>
                </div>
              </div>
            </div>

            {/* Social Media Links Box */}
            <div className="p-6 rounded-xl bg-[#111111] border border-[#2B2B2B] space-y-4">
              <h4 className="font-heading text-xl text-white tracking-wide">
                FOLLOW CAPTAIN AHMED MOSTAFA
              </h4>
              <p className="text-xs text-gray-400 font-body">
                Daily exercise execution tips, scientific nutrition breakdowns, and client stories.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded bg-[#1A1A1A] hover:bg-[#2B2B2B] text-gray-200 hover:text-white border border-gray-800 transition-colors text-xs font-semibold"
                >
                  <Instagram className="w-4 h-4 text-[#E30613]" />
                  <span>Instagram</span>
                </a>

                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded bg-[#1A1A1A] hover:bg-[#2B2B2B] text-gray-200 hover:text-white border border-gray-800 transition-colors text-xs font-semibold"
                >
                  <Facebook className="w-4 h-4 text-blue-500" />
                  <span>Facebook</span>
                </a>

                <a
                  href={settings.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded bg-[#1A1A1A] hover:bg-[#2B2B2B] text-gray-200 hover:text-white border border-gray-800 transition-colors text-xs font-semibold"
                >
                  <TikTokIcon className="w-4 h-4 text-pink-400" />
                  <span>TikTok</span>
                </a>

                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-2.5 p-3 rounded bg-[#1A1A1A] hover:bg-[#2B2B2B] text-gray-200 hover:text-white border border-gray-800 transition-colors text-xs font-semibold"
                >
                  <Mail className="w-4 h-4 text-gray-300" />
                  <span>Official Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Multi-field Application Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl bg-[#121212] border border-[#2B2B2B] shadow-2xl">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#E30613]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Karim El-Sayed"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-[#E30613]" />
                      <span>WhatsApp Number *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +20 100 123 4567"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. karim@example.com"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g. 28"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Height, Current Weight, Target Weight */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-gray-400" />
                      <span>Height (cm)</span>
                    </label>
                    <input
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      placeholder="e.g. 182"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-gray-400" />
                      <span>Current Weight (kg)</span>
                    </label>
                    <input
                      type="number"
                      name="currentWeight"
                      value={formData.currentWeight}
                      onChange={handleChange}
                      placeholder="e.g. 92"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-gray-400" />
                      <span>Target Weight (kg)</span>
                    </label>
                    <input
                      type="number"
                      name="targetWeight"
                      value={formData.targetWeight}
                      onChange={handleChange}
                      placeholder="e.g. 78"
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Primary Goal & Experience Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#E30613]" />
                      <span>Primary Fitness Goal</span>
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white outline-none cursor-pointer"
                    >
                      <option value="Fat Loss & Physique Shredding">Fat Loss & Physique Shredding</option>
                      <option value="Lean Muscle Hypertrophy & Bulk">Lean Muscle Hypertrophy & Bulk</option>
                      <option value="Full Body Recomposition (Lose Fat + Build Muscle)">Full Body Recomposition</option>
                      <option value="Contest / Stage / Photoshoot Prep">Contest / Stage / Photoshoot Prep</option>
                      <option value="Athletic Strength & Injury Rehabilitation">Athletic Strength & Rehabilitation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-300 tracking-wider flex items-center gap-1.5">
                      <Dumbbell className="w-3.5 h-3.5 text-[#E30613]" />
                      <span>Experience Level</span>
                    </label>
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                      className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white outline-none cursor-pointer"
                    >
                      <option value="Beginner (0 - 1 year in gym)">Beginner (0 - 1 year in gym)</option>
                      <option value="Intermediate (1 - 3 years gym)">Intermediate (1 - 3 years gym)</option>
                      <option value="Advanced Lifter (4+ years)">Advanced Lifter (4+ years)</option>
                      <option value="Competitive Athlete">Competitive Athlete</option>
                    </select>
                  </div>
                </div>

                {/* Selected Tier Selector */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-300 tracking-wider">
                    Desired Coaching Program
                  </label>
                  <select
                    name="selectedTier"
                    value={formData.selectedTier}
                    onChange={handleChange}
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white outline-none cursor-pointer"
                  >
                    <option value="Starter Tier ($99/mo)">Starter Tier ($99/mo) — Structured Plan & Audits</option>
                    <option value="Pro Elite Coaching ($199/mo)">Pro Elite Coaching ($199/mo) — Flagship AFIT System (Most Popular)</option>
                    <option value="VIP 1-on-1 ($349/mo)">VIP 1-on-1 Mentorship ($349/mo) — Direct Video Calls & Peak Prep</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-300 tracking-wider">
                    Injuries, Medical Conditions, or Specific Preferences
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Previous lower back disc issue, prefer 4 days workout split, busy corporate schedule..."
                    className="w-full bg-[#181818] border border-[#2B2B2B] focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] rounded px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded bg-[#E30613] hover:bg-[#C00510] text-white font-bold uppercase tracking-wider text-sm transition-all duration-200 glow-red flex items-center justify-center gap-3 shadow-xl hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Consultation Message on WhatsApp</span>
                </button>

                {/* Privacy disclaimer */}
                <p className="text-[11px] text-gray-400 text-center font-body">
                  By clicking submit, your structured inquiry is sent securely and directly to Captain Ahmed Mostafa. 
                  Zero spam, 100% confidentiality guaranteed.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
