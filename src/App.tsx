/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { defaultSettings } from './data/coachData';
import { AppSettings, GalleryItem, Certification } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { MusicProvider } from './contexts/MusicContext';
import { useTranslations } from './hooks/useTranslations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Certifications } from './components/Certifications';
import { Transformations } from './components/Transformations';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { CertificateModal } from './components/CertificateModal';
import { MusicConsentModal } from './components/MusicConsentModal';
import { MessageCircle } from 'lucide-react';

function MainContent() {
  const [settings] = useState<AppSettings>(defaultSettings);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [selectedTierId, setSelectedTierId] = useState<string>('pro-elite');
  const { language } = useLanguage();

  const handleSelectTier = (tierId: string) => {
    setSelectedTierId(tierId);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWhatsApp = () => {
    const cleanNumber = (settings.whatsappNumber || '201000000000').replace(/[^0-9]/g, '');
    const msgText = language === 'ar'
      ? `مرحباً كابتن أحمد مصطفى! أود الاستفسار عن البدء في برنامج التدريب الشخصي الخاص بطريقة AFIT.`
      : `Hello Captain Ahmed Mostafa! I want to inquire about starting my AFIT METHOD personal coaching program.`;
    const defaultMsg = encodeURIComponent(msgText);
    window.open(`https://wa.me/${cleanNumber}?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans antialiased selection:bg-[#E30613] selection:text-white flex flex-col justify-between overflow-x-hidden w-full max-w-full">
      {/* 1. Navigation Bar */}
      <Navbar
        settings={settings}
        onSelectTier={handleSelectTier}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero settings={settings} />

        {/* 3. Story Section */}
        <Story />

        {/* 4. Certifications Section */}
        <Certifications onSelectCert={(cert) => setActiveCert(cert)} />

        {/* 5. Transformations Section */}
        <Transformations />

        {/* 6. Subscription Tiers / Pricing Section */}
        <Pricing onSelectTier={handleSelectTier} />

        {/* 7. Gallery Section */}
        <Gallery onOpenLightbox={(item) => setActiveLightboxItem(item)} />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. FAQ Section */}
        <Faq />

        {/* 10. Contact / CTA Section */}
        <ContactForm
          settings={settings}
          selectedTierId={selectedTierId}
        />
      </main>

      {/* 11. Footer */}
      <Footer settings={settings} />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-24 right-6 z-40 sm:bottom-6 hidden sm:block">
        <button
          onClick={handleFloatingWhatsApp}
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-3 px-4 sm:px-5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
          aria-label="Chat with Captain Ahmed on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-black" />
          <span className="text-xs uppercase tracking-wider font-extrabold hidden sm:inline">
            {language === 'ar' ? 'تحدث على واتساب' : 'Chat On WhatsApp'}
          </span>
        </button>
      </div>

      {/* Lightbox for Gallery */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      {/* Certificate Details & Document Popup Modal */}
      <CertificateModal
        cert={activeCert}
        onClose={() => setActiveCert(null)}
      />

      {/* Music Consent Modal */}
      <MusicConsentModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MusicProvider>
        <MainContent />
      </MusicProvider>
    </LanguageProvider>
  );
}
