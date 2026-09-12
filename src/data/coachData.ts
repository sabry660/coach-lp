import { Certification, Transformation, PricingTier, GalleryItem, Testimonial, FaqItem, AppSettings } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const defaultSettings: AppSettings = {
  whatsappNumber: '201000000000', // Default international format (Egypt +20)
  coachName: 'الكابتن أحمد الصياد',
  coachTitle: 'أخصائي اللياقة النخبوية والتغذية الرياضية السريرية',
  email: 'coach.ahmedelsaiad@afitmethod.com',
  instagramUrl: 'https://instagram.com/ahmedelsaiad_afit',
  facebookUrl: 'https://facebook.com/CaptainAhmedElSaiadFitness',
  tiktokUrl: 'https://tiktok.com/@captain_ahmed_elsaiad',
};

// ==================== CERTIFICATIONS DATA ====================
export const certificationsDataAr: Certification[] = [
  {
    id: 'tass-uk',
    name: 'مخطوطة المنحة الرياضية للموهوبين (TASS)',
    shortCode: 'TASS UK',
    organization: 'حكومة المملكة المتحدة ومخطوطة المنحة الرياضية للموهوبين',
    country: 'المملكة المتحدة',
    description: 'متخصص في تكييف القوة للرياضيين النخبويين عاليي الأداء، والميكانيكا الحيوية، والتطور الرياضي طويل الأمد.',
    badgeYear: 'معتمد في المملكة المتحدة',
    certificateImage: '/certificates/1.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'التطور البدني للرياضيين الأولمبيين والوطنيين عاليي الأداء',
      'تتبع السرعة الحركية وتحليل القدرة الانفجارية',
      'الإدارة المتقدمة للحمل العضلي واستعادة الجهاز العصبي المركزي (CNS)',
      'التحقق من معايير علوم الرياضية الحكومية في المملكة المتحدة',
    ],
  },
  {
    id: 'ace-cpt',
    name: 'المجلس الأمريكي للتمارين الرياضية (ACE)',
    shortCode: 'ACE',
    organization: 'المجلس الأمريكي للتمارين الرياضية',
    country: 'الولايات المتحدة',
    description: 'شهادة المعيار الذهبي في التدريب المتكامل لللياقة، وديناميكيات التمارين التصحيحية، وتكييف الأيض.',
    badgeYear: 'دولي',
    certificateImage: '/certificates/2.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1584697964190-7bb9348d374f?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'تخصص نموذج التدريب المتكامل لللياقة (IFT) من ACE',
      'محاذاة السلسلة الحركية التصحيحية وإصلاح الخلل الوضعي',
      'تقسيم التدريب القلبي التنفسي عبر المناطق 1-4',
      'الالتزام بالتغذية السلوكية والميكانيكا الحيوية لنمط الحياة',
    ],
  },
  {
    id: 'iffc',
    name: 'الاتحاد الدولي لمدربي اللياقة',
    shortCode: 'IFFC',
    organization: 'الاتحاد الدولي لمدربي اللياقة',
    country: 'عالمي',
    description: 'اعتماد التدريب الرئيسي للتقسيم المتقدم للتضخم، وإعادة تكوين الجسم، والتحضير النخبوي للمسرح.',
    badgeYear: 'مدرب رئيسي',
    certificateImage: '/certificates/3.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'بروتوكولات تكييف كمال الأجسام واللياقة البدنية على مستوى المسابقات',
      'برمجة التضخم مقارنة بين التوتر الميكانيكي والإجهاد الأيضي',
      'تعويض الماء والشوارد والجليكوجين الفائق في أسبوع الذروة',
      'ملف المقاومة المتقدم وعلاقة طول التوتر العضلي',
    ],
  },
  {
    id: 'iohs',
    name: 'المنظمة الدولية للصحة وعلوم الرياضة',
    shortCode: 'IOHS',
    organization: 'المنظمة الدولية لعلوم الصحة',
    country: 'أوروبا / دولي',
    description: 'معتمد في فسيولوجيا التمارين السريرية، وبروتوكولات منع الإصابات، وإعادة تأهيل الجهاز العضلي الهيكلي.',
    badgeYear: 'أخصائي معتمد',
    certificateImage: '/certificates/4.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'وصف التمارين السريرية لاستعادة الجهاز العضلي الهيكلي',
      'حماية فك الضغط العمودي، وكفة الدوران، ووتر الرضفة',
      'إدارة تراكم اللاكتات في الدم وبناء القاعدة الهوائية',
      'تحليل المؤشرات الحيوية وتخفيف التعب النظامي',
    ],
  },
  {
    id: 'london-univ',
    name: 'جامعة لندن الدولية',
    shortCode: 'جامعة لندن الدولية',
    organization: 'كلية علوم الرياضة والتغذية السريرية',
    country: 'المملكة المتحدة',
    description: 'دبلوم متقدم في التغذية الرياضية السريرية، وتقسيم المغذيات الدقيقة، والتكيف الأيضي.',
    badgeYear: 'دبلوم أكاديمي',
    certificateImage: '/certificates/5.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'دبلوم الدراسات العليا الأكاديمي في التغذية الرياضية السريرية',
      'التأثير الحراري للتغذية وتوازن هرمونات الغدد الصماء (الغدة الدرقية، اللبتين، الكورتيزول)',
      'دورة الكربوهيدرات الدقيقة وتقسيم المغذيات أثناء التمرين',
      'تصميم مكملات سريرية قائمة على الأدلة',
    ],
  },
  {
    id: 'egypt-ministry',
    name: 'وزارة الشباب والرياضة المصرية',
    shortCode: 'وزارة الرياضة',
    organization: 'وزارة الشباب والرياضة المصرية (الاعتماد الرسمي)',
    country: 'مصر',
    description: 'مدرب لياقة بدنية رئيسي مرخص من الدولة ومدرب أداء معترف به لقيادة اللياقة الوطنية.',
    badgeYear: 'رخصة رسمية',
    certificateImage: '/certificates/6.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'رخصة حكومية رسمية للتدريب الرياضي عالي الأداء',
      'الامتثال للتكييف البدني للفريق الرياضي الوطني',
      'معايير أخلاقيات التدريب المهني وحماية صحة الرياضيين',
      'اعتماد مدرب وطني معترف به',
    ],
  },
  {
    id: 'asca',
    name: 'رابطة القوة والتكييف الأسترالية',
    shortCode: 'ASCA',
    organization: 'رابطة القوة والتكييف الأسترالية',
    country: 'أستراليا',
    description: 'معتمد في ميكانيكا الرفع الأولمبي، وتحليل السرعة-القوة، والتقسيم الرياضي النخبوي.',
    badgeYear: 'معتمد المستوى 2',
    certificateImage: '/certificates/7.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'تحليل مسار رفع الأثقال الأولمبي (النظف، السحب، الرمي)',
      'إتقان نماذج التقسيم الخطي والمتذبذب والكتلي',
      'تحسين منحنى القوة-السرعة للسرعة الخام والقوة',
      'إرشادات التنفيذ الآمن ميكانيكياً للتمارين المركبة الثقيلة',
    ],
  },
];

export const certificationsDataEn: Certification[] = [
  {
    id: 'tass-uk',
    name: 'Talented Athlete Scholarship Scheme (TASS)',
    shortCode: 'TASS UK',
    organization: 'UK Government & TASS Athletic Accreditation',
    country: 'United Kingdom',
    description: 'Specialized in elite athletic strength conditioning, kinematics, and long-term athletic development.',
    badgeYear: 'UK Accredited',
    certificateImage: '/certificates/1.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'Olympic & national high-performance athlete physical development',
      'Kinetic velocity tracking & explosive power analysis',
      'Advanced muscular load management & CNS recovery',
      'UK Government sports science standard verification',
    ],
  },
  {
    id: 'ace-cpt',
    name: 'American Council on Exercise (ACE CPT)',
    shortCode: 'ACE',
    organization: 'American Council on Exercise',
    country: 'United States',
    description: 'Gold-standard certification in integrated fitness training, corrective exercise dynamics, and metabolic conditioning.',
    badgeYear: 'International',
    certificateImage: '/certificates/2.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1584697964190-7bb9348d374f?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'ACE Integrated Fitness Training (IFT) model specialization',
      'Corrective kinetic chain alignment & postural correction',
      'Cardiorespiratory periodization across Zones 1-4',
      'Behavioral nutrition adherence & lifestyle biomechanics',
    ],
  },
  {
    id: 'iffc',
    name: 'International Fitness Instructors Federation',
    shortCode: 'IFFC',
    organization: 'International Fitness Instructors Federation',
    country: 'Global',
    description: 'Master Coach certification for advanced hypertrophy periodization, body recomposition, and elite stage prep.',
    badgeYear: 'Master Coach',
    certificateImage: '/certificates/3.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'Competition-level bodybuilding & physique conditioning protocols',
      'Hypertrophy programming: mechanical tension vs metabolic stress',
      'Peak week water, electrolyte, and super-glycogen manipulation',
      'Advanced resistance profiling & length-tension relationships',
    ],
  },
  {
    id: 'iohs',
    name: 'International Organization for Health & Sports Science',
    shortCode: 'IOHS',
    organization: 'International Health Science Organization',
    country: 'Europe / International',
    description: 'Certified in clinical exercise physiology, injury prevention protocols, and musculoskeletal rehabilitation.',
    badgeYear: 'Certified Specialist',
    certificateImage: '/certificates/4.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'Clinical exercise prescription for musculoskeletal recovery',
      'Spinal decompression, rotator cuff, & patellar tendon protection',
      'Blood lactate accumulation management & aerobic base building',
      'Biomarker analysis & systemic fatigue mitigation',
    ],
  },
  {
    id: 'london-univ',
    name: 'London International University',
    shortCode: 'London Int. Univ.',
    organization: 'Faculty of Sports Science & Clinical Nutrition',
    country: 'United Kingdom',
    description: 'Advanced diploma in clinical sports nutrition, micronutrient periodization, and metabolic adaptation.',
    badgeYear: 'Academic Diploma',
    certificateImage: '/certificates/5.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'Postgraduate academic diploma in clinical sports nutrition',
      'Thermic effect of feeding & endocrine hormone balance (Thyroid, Leptin, Cortisol)',
      'Precision carb cycling & peri-workout nutrient timing',
      'Evidence-based clinical supplementation design',
    ],
  },
  {
    id: 'egypt-ministry',
    name: 'Egyptian Ministry of Youth & Sports',
    shortCode: 'Youth & Sports Ministry',
    organization: 'Egyptian Ministry of Youth & Sports (Official Accreditation)',
    country: 'Egypt',
    description: 'State-licensed Master Fitness Trainer & performance coach recognized for national athletic leadership.',
    badgeYear: 'Official License',
    certificateImage: '/certificates/6.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'Official state license for high-performance athletic coaching',
      'National athletic team physical conditioning compliance',
      'Professional coaching ethics & athlete health safeguards',
      'Recognized national master trainer credentials',
    ],
  },
  {
    id: 'asca',
    name: 'Australian Strength & Conditioning Association',
    shortCode: 'ASCA',
    organization: 'Australian Strength & Conditioning Association',
    country: 'Australia',
    description: 'Certified in Olympic lifting mechanics, force-velocity analysis, and elite athletic periodization.',
    badgeYear: 'Level 2 Certified',
    certificateImage: '/certificates/7.jpeg',
    certificateFallbackImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    specialtyDetails: [
      'Olympic weightlifting trajectory analysis (Clean, Jerk, Snatch)',
      'Mastery of linear, undulating, & block periodization models',
      'Force-velocity curve optimization for raw speed & power',
      'Mechanically sound execution guidelines for heavy compound lifts',
    ],
  },
];

// Default export fallback
export const certificationsData = certificationsDataAr;


// ==================== TRANSFORMATIONS DATA ====================
export const transformationsDataAr: Transformation[] = [
  {
    id: 'trans-1',
    clientName: 'كريم ع.',
    timeframe: '12 أسبوع',
    age: 29,
    weightChange: '-14 كجم دهون',
    bodyFatChange: '26% → 11%',
    beforeImage: '/bofore,after/1.jpeg',
    afterImage: '/bofore,after/1.jpeg',
    fallbackBeforeImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    fallbackAfterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    description: 'مدير مؤسسي يتغلب على الركود الأيضي. حقق تعريف بطني عميق، زيادة 80 كجم في الضغط على البنش، ومضاعفة الحيوية الطاقية.',
    tag: 'فقدان الدهون وتقطيع الجذع',
    highlights: [
      'فقد 14 كجم من الأنسجة الدهنية النقية دون تكسر العضلات',
      'دورة الكربوهيدرات مخصصة حول ساعات العمل التنفيذية',
      'إصلاح ميل الحوض الأمامي من خلال عمل السلسلة الخلفية المستهدف',
    ],
  },
  {
    id: 'trans-2',
    clientName: 'يوسف س.',
    timeframe: '16 أسبوع',
    age: 34,
    weightChange: '-18.5 كجم',
    bodyFatChange: '31% → 13%',
    beforeImage: '/bofore,after/2.jpeg',
    afterImage: '/bofore,after/2.jpeg',
    fallbackBeforeImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    fallbackAfterImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    description: 'تحويل وضعية الجلوس الخاملة إلى تكييف رياضي. تصحيح وضعية كاملة، حل آلام أسفل الظهر، وذروة الأوعية الدموية.',
    tag: 'إعادة تكوين كامل للجسم',
    highlights: [
      'تخفيض إجمالي 18.5 كجم في كتلة الجسم مع احتفاظ عضلي كبير',
      'إعادة تأهيل الانزعاج القطني المزمن من خلال إتقان مفصل الورك',
      'بناء إطار V-taper صلب وتعريف كتف عميق',
    ],
  },
  {
    id: 'trans-3',
    clientName: 'معتز ح.',
    timeframe: '24 أسبوع',
    age: 26,
    weightChange: '+7.5 كجم عضلات نحيفة',
    bodyFatChange: '14% → 8.5%',
    beforeImage: '/bofore,after/3.jpeg',
    afterImage: '/bofore,after/3.jpeg',
    fallbackBeforeImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    fallbackAfterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    description: 'تكييف تحضير المسرح واللياقة البدنية. بروتوكولات الحمل الزائد التدريجي الثقيل مدمجة مع دورة كربوهيدرات جراحية وتركيز ثلاثي الأبعاد على الدلت.',
    tag: 'التضخم وتحضير المسابقات',
    highlights: [
      'اكتسب 7.5 كجم من أنسجة العضلات الانقباضية الكثيفة',
      'خفض دهون الجسم إلى رقم واحد مع بطن عضلية كاملة',
      'إتقان معايرة الصوديوم والماء في أسبوع الذروة',
    ],
  },
];

export const transformationsDataEn: Transformation[] = [
  {
    id: 'trans-1',
    clientName: 'Kareem A.',
    timeframe: '12 Weeks',
    age: 29,
    weightChange: '-14kg Fat',
    bodyFatChange: '26% → 11%',
    beforeImage: '/bofore,after/1.jpeg',
    afterImage: '/bofore,after/1.jpeg',
    fallbackBeforeImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    fallbackAfterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    description: 'Corporate executive overcoming metabolic stagnation. Achieved deep abdominal definition, +80kg bench press increase, and doubled daily energy.',
    tag: 'Fat Loss & Core Shredding',
    highlights: [
      'Lost 14kg of pure adipose tissue without muscle breakdown',
      'Custom carbohydrate cycling fitted around executive work hours',
      'Fixed anterior pelvic tilt through targeted posterior chain work',
    ],
  },
  {
    id: 'trans-2',
    clientName: 'Youssef S.',
    timeframe: '16 Weeks',
    age: 34,
    weightChange: '-18.5kg Body Mass',
    bodyFatChange: '31% → 13%',
    beforeImage: '/bofore,after/2.jpeg',
    afterImage: '/bofore,after/2.jpeg',
    fallbackBeforeImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    fallbackAfterImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    description: 'Transformed sedentary desk posture to athletic conditioning. Complete posture correction, resolved lower back pain, and peak vascularity.',
    tag: 'Full Body Recomposition',
    highlights: [
      'Total 18.5kg reduction in body mass with significant muscle retention',
      'Rehabilitated chronic lumbar discomfort through hip hinge mastery',
      'Built solid V-taper frame and deep shoulder definition',
    ],
  },
  {
    id: 'trans-3',
    clientName: 'Moataz H.',
    timeframe: '24 Weeks',
    age: 26,
    weightChange: '+7.5kg Lean Muscle',
    bodyFatChange: '14% → 8.5%',
    beforeImage: '/bofore,after/3.jpeg',
    afterImage: '/bofore,after/3.jpeg',
    fallbackBeforeImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    fallbackAfterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    description: 'Stage prep & physique conditioning. Heavy progressive overload protocols combined with surgical carb cycling and 3D delt focus.',
    tag: 'Hypertrophy & Contest Prep',
    highlights: [
      'Gained 7.5kg of dense contractile muscle tissue',
      'Reduced body fat to single digits with full muscle bellies',
      'Mastered peak week sodium and water calibration',
    ],
  },
];

export const transformationsData = transformationsDataAr;


// ==================== PRICING TIERS DATA ====================
export const pricingTiersDataAr: PricingTier[] = [
  {
    id: 'afit-performance',
    name: 'AFit Performance',
    price: '$99',
    period: '/شهر',
    description: 'باقة مخصصة للشباب هدفنا نحسن صحة، شكل جسم، كفاءة حركة، إنتاجية وقوة.',
    features: [
      'تقسيم تمرين مخصص (الجيم أو المنزل)',
      'مخطط المغذيات الكبرى والسعرات الحرارية المخصص',
      'استراتيجية وتوقيت مكملات التغذية',
      'تدقيق التقدم وتكوين الجسم كل أسبوعين',
      'تحليل شكل التمرين وتنفيذ الفيديو',
      'المتابعة بنفسي مباشرة',
      'تصحيح انحرافات القوام بتمارين تصحيحية',
    ],
    ctaText: 'اختر AFit Performance',
  },
  {
    id: 'afit-her',
    name: 'AFit Her',
    price: '$99',
    period: '/شهر',
    highlighted: true,
    badge: 'الأكثر شعبية',
    description: 'باقة مخصصة للبنات lifestyle شبه الباقة الأولى والمتابعة بتكون عن طريق فرد من الفريق.',
    features: [
      'تقسيم تمرين مخصص (الجيم أو المنزل)',
      'مخطط المغذيات الكبرى والسعرات الحرارية المخصص',
      'استراتيجية وتوقيت مكملات التغذية',
      'تدقيق التقدم وتكوين الجسم كل أسبوعين',
      'تحليل شكل التمرين وتنفيذ الفيديو',
      'المتابعة عن طريق فرد من الفريق',
      'تصحيح انحرافات القوام بتمارين تصحيحية',
    ],
    ctaText: 'اختر AFit Her',
  },
  {
    id: 'afit-strength',
    name: 'AFit Strength',
    price: '$199',
    period: '/شهر',
    badge: 'باقة باورليفتينج',
    description: 'باقة باورليفتينج هدفنا نحقق أرقام أعلى في السكوات والبنش والديدليفت مع تحقيق الأهداف الأخرى.',
    features: [
      'برنامج باورليفتينج متقدم للسكوات والبنش والديدليفت',
      'تخطيط تفصيلي لرفع الأرقام في التمارين الثلاثة',
      'تحسين شكل الجسم والصحة وكفاءة الحركة',
      'تدقيق يومي للتغذية الراجعة وتحسين الأداء',
      'فحص فيديو شامل أسبوعي وتحليل التقنية',
      'المتابعة معاي مباشرة',
      'تصحيح انحرافات القوام بتمارين تصحيحية',
      'بروتوكولات خاصة بأسبوع الذروة للمسابقات',
    ],
    ctaText: 'اختر AFit Strength',
  },
];

export const pricingTiersDataEn: PricingTier[] = [
  {
    id: 'afit-performance',
    name: 'AFit Performance',
    price: '$99',
    period: '/month',
    description: 'A package designed for men, aiming to improve health, physique, movement efficiency, productivity, and strength.',
    features: [
      'Customized workout split (Gym or Home)',
      'Tailored macro & calorie blueprint',
      'Nutritional supplement timing & strategy',
      'Bi-weekly progress & body composition audit',
      'Exercise form & execution video analysis',
      'Coaching/monitoring provided directly by me',
      'Postural deviations correction through corrective exercises',
    ],
    ctaText: 'Select AFit Performance',
  },
  {
    id: 'afit-her',
    name: 'AFit Her',
    price: '$99',
    period: '/month',
    highlighted: true,
    badge: 'Most Popular',
    description: 'A lifestyle-oriented package designed for women; similar to the first package, but coaching is provided by a team member.',
    features: [
      'Customized workout split (Gym or Home)',
      'Tailored macro & calorie blueprint',
      'Nutritional supplement timing & strategy',
      'Bi-weekly progress & body composition audit',
      'Exercise form & execution video analysis',
      'Coaching provided by team member',
      'Postural deviations correction through corrective exercises',
    ],
    ctaText: 'Select AFit Her',
  },
  {
    id: 'afit-strength',
    name: 'AFit Strength',
    price: '$199',
    period: '/month',
    badge: 'Powerlifting Package',
    description: 'A powerlifting package. The goal is to achieve higher numbers in the squat, bench press, and deadlift—while also addressing other objectives like physique, health, and movement efficiency.',
    features: [
      'Advanced powerlifting program for squat, bench, and deadlift',
      'Detailed planning to increase numbers in the three lifts',
      'Physique, health, and movement efficiency improvement',
      'Daily nutrition check-ins and performance optimization',
      'Comprehensive weekly video analysis and technique review',
      'Coaching/monitoring provided directly by me',
      'Postural deviations correction through corrective exercises',
      'Specialized protocols for competition peak week',
    ],
    ctaText: 'Select AFit Strength',
  },
];

export const pricingTiersData = pricingTiersDataAr;


// ==================== GALLERY DATA ====================
export const galleryDataAr: GalleryItem[] = [
  {
    id: 'gal-1',
    title: '',
    category: '',
    image: '/gallery/1.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-2',
    title: '',
    category: '',
    image: '/gallery/2.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-3',
    title: '',
    category: '',
    image: '/gallery/3.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-4',
    title: '',
    category: '',
    image: '/gallery/4.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
];

export const galleryDataEn: GalleryItem[] = [
  {
    id: 'gal-1',
    title: '',
    category: '',
    image: '/gallery/1.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-2',
    title: '',
    category: '',
    image: '/gallery/2.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-3',
    title: '',
    category: '',
    image: '/gallery/3.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-4',
    title: '',
    category: '',
    image: '/gallery/4.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
];

export const galleryData = galleryDataAr;


// ==================== TESTIMONIALS DATA ====================
export const testimonialsDataAr: Testimonial[] = [
  {
    id: 'test-1',
    name: 'طارق محمود',
    title: 'المدير التنفيذي والرياضي',
    rating: 5,
    result: '-16 كجم دهون في 4 أشهر',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote:
      'الكابتن أحمد مصطفى لا يبيع ملفات PDF عامة نسخة طبق الأصل. معرفته العميقة بعلوم الرياضة والتكيف الأيضي على مستوى أولمبي. فقدت 16 كجم أثناء العمل 60 ساعة أسبوعياً دون الاحتراق أو الشعور بالجوع.',
  },
  {
    id: 'test-2',
    name: 'د. شريف الجوهري',
    title: 'جراح عظام ومتحمس للكروس فيتنيس',
    rating: 5,
    result: 'إعادة تأهيل أسفل الظهر وبناء 6 كجم عضلات',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote:
      'بصفتي جراحاً، أنا مشكوك بشكل مشهور في مدربي اللياقة. التعديلات الميكانيكية للكابتن أحمد على ديدليفت وسكواتي القضت على الانضغاط القطني المزمن مع إضافة 6 كجم من الأنسجة النحيفة الصلبة في 5 أشهر.',
  },
  {
    id: 'test-3',
    name: 'عمر خشابة',
    title: 'مؤسس تقني وملاكم هاوٍ',
    rating: 5,
    result: 'دهون جسم رقم واحد ومضاعفة القدرة التحملية',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    quote:
      'طريقة AFIT هي علم بحت. عمليات تسجيل الدخول على واتساب وتصحيحات الشكل الفورية تمسلك مساءلة صارمة. إذا كنت جاداً في تحويل جسمك وعقليتك، لا أحد أفضل في المنطقة. الكابتن أحمد الصياد هو أفضل مدرب عملت معه على الإطلاق.',
  },
];

export const testimonialsDataEn: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Tarek Mahmoud',
    title: 'Corporate Executive & Athlete',
    rating: 5,
    result: '-16kg Fat in 4 Months',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote:
      'Captain Ahmed Mostafa does not sell generic copy-paste PDFs. His deep sports science knowledge and metabolic adaptation are Olympic-level. I lost 16kg while working 60 hours a week without burnout or feeling starved.',
  },
  {
    id: 'test-2',
    name: 'Dr. Sherif El-Gohary',
    title: 'Orthopedic Surgeon & Fitness Enthusiast',
    rating: 5,
    result: 'Lower Back Rehab & +6kg Muscle Gain',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote:
      'As a surgeon, I am notoriously skeptical of fitness trainers. Captain Ahmed\'s mechanical adjustments to my deadlift and squat eliminated chronic lumbar compression while adding 6kg of solid lean tissue in 5 months.',
  },
  {
    id: 'test-3',
    name: 'Omar Khashaba',
    title: 'Tech Founder & Amateur Boxer',
    rating: 5,
    result: 'Single Digit Body Fat & Doubled Stamina',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    quote:
      'The AFIT METHOD is pure science. The WhatsApp check-ins and instant form corrections hold you ruthlessly accountable. If you are serious about transforming your body and mindset, there is nobody better in the region. Captain Ahmed El Saiad is the best coach I have ever worked with.',
  },
];

export const testimonialsData = testimonialsDataAr;


// ==================== FAQ DATA ====================
export const faqDataAr: FaqItem[] = [
  {
    id: 'faq-1',
    question: '01 — البرنامج مناسب لمين؟',
    answer:
      'برامج AFit مصممة لمختلف المستويات، سواء كنت مبتدئًا أو لديك خبرة في التدريب. بنحدد البرنامج المناسب بناءً على هدفك، مستواك الحالي، وإمكانياتك.',
  },
  {
    id: 'faq-2',
    question: '02 — هل البرنامج مخصص ليا؟',
    answer:
      'أيوه. البرامج كلها customized على حياتك وروتينك ووقتك اومكانياتك.',
  },
  {
    id: 'faq-3',
    question: '03 — إيه الأهداف اللي أقدر أشتغل عليها؟',
    answer:
      'تقدر تشتغل على خسارة الدهون، بناء العضلات، تحسين شكل الجسم، زيادة القوة والأداء، تحسين كفاءة الحركة أو تحسين لياقتك بشكل عام.',
  },
  {
    id: 'faq-4',
    question: '04 — هل لازم أكون بتمرن في الجيم؟',
    answer:
      'مش بالضرورة. نقدر نحدد نظام التدريب بناءً على المكان والمعدات المتاحة لك، سواء Gym أو Home Training.',
  },
  {
    id: 'faq-5',
    question: '05 — هل النظام الغذائي عبارة عن وجبات ثابتة؟',
    answer:
      'نعتمد على نظام مرن مناسب لحالتك وهدفك وتفضيلاتك وبيكون في بدايل كتير ودا بيساعدك على الالتزام اكتر من غير ما تزهق.',
  },
  {
    id: 'faq-6',
    question: '06 — هل في متابهة يومية؟',
    answer:
      'أيوه. المتابعة جزء أساسي من البرنامج، وبنراجع تقدمك وادائك بشكل يومي ونعمل التعديلات المطلوبة على التدريب أو التغذية بناءً على النتائج.',
  },
  {
    id: 'faq-7',
    question: '07 — إيه اللي بيحصل لو تقدمي وقف؟',
    answer:
      'مش بنسيبك تكمل بنفس الخطة وخلاص. بنراجع البيانات والتزامك وتقدمك، ونحدد السبب، وبعدها نعدل الخطة عند الحاجة.',
  },
  {
    id: 'faq-8',
    question: '08 — لو عندي إصابة أو تمرين معين مش مناسب ليا؟',
    answer:
      'لازم تبلغنا قبل بداية البرنامج عن أي إصابات أو قيود في الحركة. وبناءً على المعلومات المتاحة، بنقدر نعدل التمارين بما يتناسب مع حالتك، مع التأكيد إن البرنامج التدريبي لا يُغني عن تقييم الطبيب أو أخصائي العلاج الطبيعي عند الحاجة.',
  },
  {
    id: 'faq-9',
    question: '09 — هل أقدر أغير مواعيد التمرين أو عدد الأيام؟',
    answer:
      'أيوه. البرنامج بيتبني على جدولك وإمكانياتك، والهدف إن الخطة تكون قابلة للتطبيق والاستمرار، مش مجرد خطة مثالية على الورق.',
  },
  {
    id: 'faq-10',
    question: '10 — هل أقدر أتواصل مع حد لو عندي سؤال؟',
    answer:
      'طبعًا. وسيلة التواصل ودرجة الدعم بتختلف حسب الباقة اللي اشتركت فيها، وكل باقة موضح فيها مستوى الدعم والمتابعة المتاح.',
  },
  {
    id: 'faq-11',
    question: '11 — إزاي أبدأ؟',
    answer:
      'اختار الباقة المناسبة لهدفك، أكمل عملية الاشتراك، وبعدها هتبدأ خطوات الـOnboarding وتجميع البيانات المطلوبة لتجهيز برنامجك.',
  },
  {
    id: 'faq-12',
    question: '13 — هل أقدر أبدأ لو أنا مبتدئ تمامًا؟',
    answer:
      'أكيد. مش محتاج تكون عندك خبرة سابقة. البرنامج بيتناسب مع مستواك الحالي، وهدفه إنك تتطور خطوة بخطوة.',
  },
  {
    id: 'faq-13',
    question: '14 — هل البرامج مختلفة للرجال والبنات؟',
    answer:
      'أيوه، عندنا برامج مصممة وفق احتياجات وأهداف مختلفة. اختار البرنامج الأقرب لهدفك، ولو مش متأكد أي برنامج مناسب ليك، تقدر تتواصل معانا قبل الاشتراك.',
  },
  {
    id: 'faq-14',
    question: '15 — هل عندكم برنامج مخصص للـPowerlifting؟',
    answer:
      'أيوه. AFit Strength مخصص للـPowerlifting والرياضيين اللي هدفهم تطوير القوة والأداء، مع برمجة تدريبية أكثر تخصصًا. هدفنا نحقق أرقام أعلى في السكوات والبنش والديدليفت مع تحقيق الأهداف التانية زي شكل الجسم والصحة وكفاءة الحركة.',
  },
  {
    id: 'faq-15',
    question: '16 — هل النتائج مضمونة؟',
    answer:
      'مفيش نتيجة واحدة مضمونة لكل شخص، لأن النتائج بتعتمد على عوامل كثيرة منها الالتزام، التغذية، النوم، التدريب، والحالة الفردية. اللي بنضمنه هو إن مع التزامك والخطة والمتابعة اللي متفصلة على بياناتك وبيتم تعديلهم بناءً على تقدمك هتقدر توصل لنتيجة ترضيك، ولو دا محصلش بتقدر تسترد قيمة اشتراكك كاملة شرط تكون التزمت فعلا ومشوفتش تغيير.',
  },
  {
    id: 'faq-16',
    question: '17 — هل البرنامج مناسب لو وقتي محدود؟',
    answer:
      'أيوه. بنحاول تصميم البرنامج بحيث يتناسب مع وقتك وجدولك الواقعي، لأن أفضل برنامج هو البرنامج اللي تقدر تلتزم بيه باستمرار.',
  },
  {
    id: 'faq-17',
    question: '18 — إيه الفرق بين الباقات الثلاث؟',
    answer:
      'عندنا 3 باقات: AFit Performance للشباب مع متابعة مباشرة مني، AFit Her للبنات مع متابعة من فرد من الفريق، وAFit Strength للباورليفتينج مع متابعة مباشرة مني وتخطيط تفصيلي لرفع الأرقام في السكوات والبنش والديدليفت. جميع الباقات تشمل تصحيح انحرافات القوام.',
  },
];

export const faqDataEn: FaqItem[] = [
  {
    id: 'faq-1',
    question: '01 — Who is this program for?',
    answer:
      'AFit programs are designed for all levels, whether you are a beginner or experienced in training. We determine the right program based on your goals, current fitness level, and capabilities.',
  },
  {
    id: 'faq-2',
    question: '02 — Is the program personalized for me?',
    answer:
      'Yes. All programs are customized to fit your lifestyle, routine, schedule, and capabilities.',
  },
  {
    id: 'faq-3',
    question: '03 — What goals can I work towards?',
    answer:
      'You can work on fat loss, muscle building, body recomposition, increasing strength and performance, improving movement efficiency, or enhancing your overall fitness.',
  },
  {
    id: 'faq-4',
    question: '04 — Do I have to train at a gym?',
    answer:
      'Not necessarily. We can design your training plan based on your location and available equipment, whether you prefer gym workouts or home training.',
  },
  {
    id: 'faq-5',
    question: '05 — Does the nutrition plan consist of fixed meals?',
    answer:
      'We use a flexible approach tailored to your situation, goals, and preferences. We provide plenty of alternatives, which helps you stay committed without getting bored.',
  },
  {
    id: 'faq-6',
    question: '06 — Is there daily follow-up?',
    answer:
      'Yes. Follow-up is a core part of the program; we review your progress and performance daily and make necessary adjustments to your training or nutrition based on the results.',
  },
  {
    id: 'faq-7',
    question: '07 — What happens if my progress stalls?',
    answer:
      'We don\'t just let you continue with the same plan regardless. We review the data, your adherence, and your progress to identify the cause, then adjust the plan as needed.',
  },
  {
    id: 'faq-8',
    question: '08 — What if I have an injury or a specific exercise isn\'t suitable for me?',
    answer:
      'You must inform us of any injuries or movement limitations before starting the program. Based on this information, we can modify exercises to suit your condition—though please note that the training program does not replace a professional assessment by a doctor or physical therapist when needed.',
  },
  {
    id: 'faq-9',
    question: '09 — Can I change my workout schedule or the number of training days?',
    answer:
      'Yes. The program is built around your schedule and capabilities; the goal is to create a plan that is practical and sustainable, not just an ideal plan on paper.',
  },
  {
    id: 'faq-10',
    question: '10 — Can I contact someone if I have a question?',
    answer:
      'Of course. Communication methods and the level of support vary depending on the package you choose; each package clearly outlines the available support and follow-up.',
  },
  {
    id: 'faq-11',
    question: '11 — How do I get started?',
    answer:
      'Choose the package that suits your goal and complete the sign-up process. Afterward, you will begin the onboarding steps and provide the necessary data to prepare your program.',
  },
  {
    id: 'faq-12',
    question: '13 — Can I start if I\'m a complete beginner?',
    answer:
      'Absolutely. You don\'t need any prior experience. The program is tailored to your current level, aiming to help you progress step-by-step.',
  },
  {
    id: 'faq-13',
    question: '14 — Are the programs different for men and women?',
    answer:
      'Yes, we have programs designed to meet different needs and goals. Choose the program that best aligns with your objective. If you aren\'t sure which one is right for you, feel free to contact us before signing up.',
  },
  {
    id: 'faq-14',
    question: '15 — Do you have a program specifically for powerlifting?',
    answer:
      'Yes. "AFit Strength" is dedicated to powerlifting and athletes aiming to improve strength and performance. Our goal is to achieve higher numbers in the squat, bench press, and deadlift while also addressing other objectives like physique, health, and movement efficiency.',
  },
  {
    id: 'faq-15',
    question: '16 — Are results guaranteed?',
    answer:
      'There is no single guaranteed result for everyone, as outcomes depend on many factors—including commitment, nutrition, sleep, training, and individual circumstances. What we do guarantee is that by sticking to the plan and the follow-up—which are tailored to your data and adjusted based on your progress—you will achieve satisfying results. If that doesn\'t happen, you can get a full refund, provided you genuinely adhered to the program and saw no changes.',
  },
  {
    id: 'faq-16',
    question: '17 — Is the program suitable if I have limited time?',
    answer:
      'Yes. We aim to design a program that fits your time and realistic schedule, because the best program is the one you can stick to consistently.',
  },
  {
    id: 'faq-17',
    question: '18 — What is the difference between the three packages?',
    answer:
      'We offer 3 packages: AFit Performance for men with direct coaching from me, AFit Her for women with coaching from a team member, and AFit Strength for powerlifting with direct coaching from me and detailed planning to increase numbers in squat, bench, and deadlift. All packages include postural deviations correction.',
  },
];

export const faqData = faqDataAr;


// Custom hook to automatically return localized coach data based on current active language
export const useCoachData = () => {
  const { language } = useLanguage();

  return {
    certifications: language === 'ar' ? certificationsDataAr : certificationsDataEn,
    transformations: language === 'ar' ? transformationsDataAr : transformationsDataEn,
    pricingTiers: language === 'ar' ? pricingTiersDataAr : pricingTiersDataEn,
    gallery: language === 'ar' ? galleryDataAr : galleryDataEn,
    testimonials: language === 'ar' ? testimonialsDataAr : testimonialsDataEn,
    faq: language === 'ar' ? faqDataAr : faqDataEn,
  };
};
