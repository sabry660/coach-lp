export interface Certification {
  id: string;
  name: string;
  shortCode: string;
  organization: string;
  country: string;
  description: string;
  badgeYear: string;
  certificateImage?: string;
  certificateFallbackImage?: string;
  specialtyDetails?: string[];
}

export interface Transformation {
  id: string;
  clientName: string;
  timeframe: string;
  age: number;
  weightChange: string;
  bodyFatChange: string;
  beforeImage: string;
  afterImage: string;
  fallbackBeforeImage: string;
  fallbackAfterImage: string;
  description: string;
  tag: string;
  highlights?: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  highlighted?: boolean;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  fallbackImage: string;
  aspectRatio?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  rating: number;
  quote: string;
  result: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  goal: string;
  experienceLevel: string;
  selectedTier: string;
  currentWeight: string;
  targetWeight: string;
  height: string;
  age: string;
  notes: string;
}

export interface AppSettings {
  whatsappNumber: string; // e.g. "201000000000"
  coachName: string;
  coachTitle: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
}
