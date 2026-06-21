export interface TranslationSet {
  // Navigation
  home: string;
  odoo: string;
  services: string;
  portfolio: string;
  competitions: string;
  contactUs: string;
  langName: string;

  // Header and Footer
  companyName: string;
  companySubtitle: string;
  phoneLabel: string;
  emailLabel: string;
  addressLabel: string;
  addressValue: string;
  footerRights: string;
  inquiries: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  learnMore: string;

  // About Section
  aboutTitle: string;
  aboutContent: string;
  aboutIncorporateHeader: string;
  aboutIncorporateSub: string;

  // Connected Value Propositions
  valueCircleCenter: string;
  valueOptimize: string;
  valueReinvent: string;
  valueOpportunity: string;
  valueProblemFocused: string;

  // Investor call to action
  investorTitle: string;
  investorSubtitle: string;
  investorContent: string;
  investorButton: string;

  // Services
  servicesTitle: string;
  servicesIntro: string;
  servicesList: string[];
  service1Title: string;
  service1Desc: string[];
  service2Title: string;
  service2Desc: string[];
  service3Title: string;
  service3Desc: string[];
  service4Title: string;
  service4Desc: string[];
  service5Title: string;
  service5Desc: string[];
  service6Title: string;
  service6Desc: string[];

  // Portfolio Dropdown items
  portfolioSkyProperty: string;
  portfolioMosqueClock: string;
  portfolioMyProject: string;
  portfolioTryHub: string;
  portfolioPickUp: string;
  portfolioGradUniform: string;
  portfolioTech: string;
  portfolioProAds: string;

  // Portfolio general & Cards
  portfolioTitle: string;
  portfolioSubtitle: string;
  externalLink: string;
  internalLink: string;
  clickHere: string;
  moreDetails: string;

  // Form general
  formName: string;
  formEmail: string;
  formSubject: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
  formRequired: string;

  // Competition Page Texts
  compTitle: string;
  compDescription: string;
  compFullName: string;
  compCity: string;
  compCountry: string;
  compMobile: string;
  compEmail: string;
  compIdeaDesc: string;
  compAttachFile: string;
  compOriginality: string;
  compOriginalityCheck: string;
  compSecurityLevel: string;
  compSecurityValue: string;
  compPrivacyLevel: string;
  compPrivacyValue: string;
  compEaseImplementation: string;
  compEaseValue: string;
  compEaseUse: string;
  compEaseUseValue: string;
  compCostImplementation: string;
  compCostValue: string;
  compTermsAgreed: string;
  compSendBtn: string;
}

export const translations: Record<'ar' | 'en', TranslationSet> = {
  ar: {
    home: "الرئيسية",
    odoo: "Odoo ERP",
    services: "خدماتنا",
    portfolio: "مخرجاتنا",
    competitions: "المسابقات",
    contactUs: "تواصل معنا",
    langName: "EN",

    companyName: "Innovation Ladders",
    companySubtitle: "سلالم الإبداع",
    phoneLabel: "الهاتف والواتساب",
    emailLabel: "البريد الإلكتروني",
    addressLabel: "العنوان",
    addressValue: "برج الهيدكوارترز - الواجهة البحرية، جدة - المملكة العربية السعودية.",
    footerRights: "© 2025 Innovation Ladders - Jeddah - Saudi Arabia",
    inquiries: "الاستفسار",

    heroTitle: "معمل الإبتكار",
    heroSubtitle: "نبتكر لنساهم في تطوير مجتمعنا!",
    learnMore: "تعرف على خدماتنا",

    aboutTitle: "نبذة عن سلالم الإبداع",
    aboutContent: "نحن معمل ابتكار حديث مقرنا مدينة جدة ولكن خدماتنا تشمل كافة مناطق المملكة العربية السعودية. يمكنكم الاعتماد علينا في تأسيس وتشغيل معامل الابتكار في مؤسساتكم. نعتبر أنفسنا الأول من نوعه في مدينة جدة حيث نركز على تطوير المنتجات والخدمات الريادية ، من الفكرة وحتى السوق. نهتم كثيراً بالابتكار في عملنا لتحقيق قيمة مضافة لعملائنا ونتبع نماذج معامل ابتكار عالمية. لدينا مخرجات في جميع المجالات تقريبا من السياحة والرياضة والإعلان التجاري والتعليم والصحة. نحن نساعد الجهات المختلفة في بناء ثقافة الابتكار المؤسسي لديهم لتحقيق قيمة مضافة كبيرة ومستدامة لهذه الجهات. لدينا شراكات مع مراكز ابتكار عالمية منها مركز الابتكار في وادي السيليكون ، في الولايات المتحدة الأمريكية.",
    aboutIncorporateHeader: "تأسيس وتشغيل معامل الابتكار",
    aboutIncorporateSub: "نحن نمكن شركاءنا من إطلاق إمكاناتهم وتحويل الأفكار الملهمة إلى منتجات حقيقية تنافس على الساحة العالمية.",

    valueCircleCenter: "حقق أكبر عائد من برامج الابتكار لمؤسستك",
    valueOptimize: "تحسين العمليات الداخلية (Optimize internal operations) لزيادة كفاءة وجودة العمل والإجراءات.",
    valueReinvent: "إعادة ابتكار قطاع العمل الخاص بك (Reinvent your own industry or business).",
    valueOpportunity: "خلق فرص عمل ومشاريع تجارية واعدة للمستقبل (Create viable business opportunities for the future).",
    valueProblemFocused: "تحسين تجربة العملاء والمستخدمين للمنتجات والخدمات القائمة (Improve the user experience).",

    investorTitle: "هل تريد أن تستثمر في منتجاتنا الريادية وشركاتنا الناشئة؟",
    investorSubtitle: "حقق أكبر عائد من برامج الابتكار لمؤسستك",
    investorContent: "نسعد بالشراكة مع المستثمرين ورجال الأعمال وصناديق الاستثمار الجريء. كما أننا نفخر بمنتجاتنا الريادية ومشاريع شركاتنا الناشئة. ولذلك فإننا تقديم فرصة للاستثمار في هذه المخرجات. تواصل معنا للمزيد من المعلومات.",
    investorButton: "تواصل معنا عبر الواتساب",

    servicesTitle: "خدماتنا",
    servicesIntro: "نحن في معمل الابتكار ملتزمون بتقديم أفضل الخدمات لعملائنا. نعمل بمثابة ممكن تحول نساعد من خلالها المؤسسات على تحقيق الأهداف التالية:",
    servicesList: [
      "تعزيز ثقافة الابتكار داخل المؤسسات.",
      "تقليل المخاطر في المشاريع الجديدة عبر الاختبار السريع.",
      "تسريع دخول السوق من خلال منهجيات التطوير الرشيقة.",
      "الحفاظ على القدرة التنافسية باعتماد أحدث التقنيات الناشئة."
    ],
    service1Title: "1. توليد الأفكار وصياغة المفاهيم",
    service1Desc: [
      "جلسات العصف الذهني وورش عمل التفكير التصميمي (Design Thinking).",
      "تحديد الفرص وتحليل اتجاهات السوق والمنافسين.",
      "دراسات الجدوى للمنتجات والخدمات الجديدة."
    ],
    service2Title: "2. تطوير النماذج الأولية والحد الأدنى للمنتج MVP",
    service2Desc: [
      "التطوير السريع للنماذج الأولية (المادية والرقمية).",
      "إنشاء الحد الأدنى من المنتجات القابلة للتطبيق (MVP) لاختبار السوق.",
      "النمذجة ثلاثية الأبعاد والمحاكاة التقنية."
    ],
    service3Title: "3. التحول الرقمي والتقنيات الناشئة",
    service3Desc: [
      "دمج تقنيات الذكاء الاصطناعي (AI)، والإنترنت الأشياء (IoT)، والبلوكشين، والواقع المعزز والافتراضي (AR/VR).",
      "حلول المدن الذكية والأتمتة الصناعية والمؤسسية.",
      "تحليل البيانات الكبيرة وأدوات اتخاذ القرار المعتمدة على الذكاء الاصطناعي."
    ],
    service4Title: "4. الابتكار المؤسسي ودعم الشركات الناشئة",
    service4Desc: [
      "برامج ريادة الأعمال الداخلية للموظفين وتحفيز حس التجديد.",
      "حاضنات ومسرعات الأعمال للشركات الناشئة والمبتدئة.",
      "تحديات الابتكار المفتوح مثل الهاكاثونات والمسابقات التنافسية."
    ],
    service5Title: "5. تجربة المستخدم وتصميم المنتجات (UI/UX)",
    service5Desc: [
      "أبحاث ودراسات التصميم المتمحور حول الإنسان (Human-Centered Design).",
      "تحسين واجهة المستخدم وتجربة المستخدم للمنتجات الرقمية.",
      "رسم خرائط رحلة العميل لتجربة متكاملة وخالية من العوائق."
    ],
    service6Title: "6. استراتيجية الابتكار والاستشارات",
    service6Desc: [
      "تطوير خارطة طريق واضحة لتبني الابتكار الرقمي والعملي.",
      "ابتكار نماذج الأعمال الحديثة (مثل الاشتراكات، نماذج المنصات وغيرها).",
      "تحليل مقارن مع المنافسين وصياغة استراتيجيات إعادة الهيكلة."
    ],

    portfolioSkyProperty: "SkyProperty",
    portfolioMosqueClock: "ساعة منارة للمساجد",
    portfolioMyProject: "منصة مشروعي",
    portfolioTryHub: "TryHub تطبيق",
    portfolioPickUp: "PickUp استقبال الطلبات",
    portfolioGradUniform: "زي التخرج",
    portfolioTech: "التقنيات والحلول الأخرى",
    portfolioProAds: "تقنية ProAds والكاركتر Dolly",

    portfolioTitle: "مخرجاتنا وحلولنا الريادية",
    portfolioSubtitle: "فخورون بمنتجاتنا المميزة التي طورناها من الفكرة حتى السوق ومصممة بأفضل المعايير.",
    externalLink: "رابط خارجي",
    internalLink: "عرض التفاصيل",
    clickHere: "اضغط هنا للزيارة",
    moreDetails: "المزيد",

    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formSubject: "الموضوع",
    formMessage: "الرسالة",
    formSubmit: "إرسال",
    formSuccess: "تم الإرسال بنجاح! سنتواصل معكم في أقرب وقت ممكن.",
    formRequired: "هذا الحقل مطلوب",

    compTitle: "مسابقة حلول استلام الطلبات الأمن",
    compDescription: "تهدف هذه المسابقة إلى تطوير أفكار وحلول لاستلام الطلبات في المنازل من مندوبي توصيل الطلبات بشكل يحقق الأمان والخصوصية لأصحاب المنزل وللبضاعة المستلمة. يمكن للجميع الاشتراك في هذه المسابقة عبر تعبئة هذا النموذج. نضمن لكم الحفاظ على أفكاركم وتقييمها بشكل شفاف وعادل.",
    compFullName: "الإسم الكامل *",
    compCity: "المدينة City *",
    compCountry: "الدولة Country *",
    compMobile: "رقم الجوال Mobile *",
    compEmail: "البريد الإلكتروني Email *",
    compIdeaDesc: "شرح الفكرة * Description of the Idea",
    compAttachFile: "أرفق ملفاً أو مستنداً عن الفكرة (اختياري) Attach document about the idea",
    compOriginality: "الأصالة * Originality",
    compOriginalityCheck: "أقر بأن الفكرة مبتدعة وأصيلة من عملي الشخصي ولم يتم اقتباسها أو نسخها.",
    compSecurityLevel: "مستوى الأمان * Security level",
    compSecurityValue: "أخبرنا كيف تحقق الفكرة الأمان لحل استلام البضائع",
    compPrivacyLevel: "مستوى الخصوصية * Privacy level",
    compPrivacyValue: "أخبرنا كيف تحقق الفكرة الخصوصية وتمنع الاحتكاك مع المناديب",
    compEaseImplementation: "سهولة التنفيذ * Ease of Implementation",
    compEaseValue: "أخبرنا عن مدى سهولة تنفيذ الفكرة هندسياً أو تكنولوجياً",
    compEaseUse: "سهولة الاستخدام * Ease of Use",
    compEaseUseValue: "أخبرنا عن مدى سهولة استخدام الفكرة بالنسبة للمستخدم النهائي",
    compCostImplementation: "تكلفة التنفيذ * Cost of Implementation",
    compCostValue: "أخبرنا عن تكلفة المكونات الخاصة بتشغيل وتجهيز الفكرة",
    compTermsAgreed: "أوافق على الشروط والأحكام الخاصة بالمسابقة وتقييم الأفكار",
    compSendBtn: "Send Request إرسال الطلب",
  },
  en: {
    home: "Home",
    odoo: "Odoo ERP",
    services: "Our Services",
    portfolio: "Our Portfolio",
    competitions: "Competitions",
    contactUs: "Contact Us",
    langName: "AR",

    companyName: "Innovation Ladders",
    companySubtitle: "سلالم الإبداع",
    phoneLabel: "Phone & WhatsApp",
    emailLabel: "Email",
    addressLabel: "Address",
    addressValue: "Headquarters Tower - Waterfront, Jeddah - Kingdom of Saudi Arabia.",
    footerRights: "© 2025 Innovation Ladders - Jeddah - Saudi Arabia",
    inquiries: "Inquiries",

    heroTitle: "Innovation Lab",
    heroSubtitle: "We innovate to contribute to the development of our society!",
    learnMore: "Discover Our Services",

    aboutTitle: "About Innovation Ladders",
    aboutContent: "We are a modern innovation lab headquartered in Jeddah, with services extending across all regions of Saudi Arabia. You can depend on us in establishing and operating your innovation lab. As the first facility of its kind in Jeddah, we specialize in developing pioneering products and services—from ideation to market. Innovation is at the core of our work, enabling us to deliver exceptional value to our clients while adhering to international practices. Our outcomes spans nearly all sectors, including tourism, sports, commercial advertising, education, and healthcare. We partner with organizations to cultivate institutional innovation cultures, driving transformative and sustainable value. Our global network includes collaborations with leading innovation hubs such as Silicon Valley Innovation Center in the United States.",
    aboutIncorporateHeader: "Establishing & Operating Innovation Labs",
    aboutIncorporateSub: "We empower our partners to unleash their full potential and transform inspiring ideas into impactful digital and physical outcomes.",

    valueCircleCenter: "Maximize the Return of Your Institution's Innovation Programs",
    valueOptimize: "Optimize internal operations to increase process efficiency, quality, and workflow speeds.",
    valueReinvent: "Reinvent your own industry or business through cutting-edge continuous transformation.",
    valueOpportunity: "Create viable business opportunities for the future (Opportunity Driven solutions).",
    valueProblemFocused: "Improve the user experience of existing products and services (Problem Focused designs).",

    investorTitle: "Do you want to invest in our innovative products and startups?",
    investorSubtitle: "Maximize the Return on Your Organization's Innovation Programs",
    investorContent: "We are happy to partner with investors, entrepreneurs, and venture capital funds. We also pride ourselves on our pioneering products and startup projects, so we offer the opportunity to invest in these outcomes. Contact us for more information.",
    investorButton: "Contact Us via WhatsApp",

    servicesTitle: "Our Services",
    servicesIntro: "At the Innovation Lab, we are committed to providing the best services to our clients. We act as a transformation enabler, helping organizations achieve the following goals:",
    servicesList: [
      "Promoting a culture of innovation within organizations.",
      "Reduce risk in new projects through rapid testing.",
      "Accelerate market entry through agile development methodologies.",
      "Maintaining competitiveness by adopting the latest emerging technologies."
    ],
    service1Title: "1. Ideation & Conceptualization",
    service1Desc: [
      "Brainstorming sessions and design thinking workshops.",
      "Opportunity identification and trend analysis.",
      "Feasibility studies for new products and services."
    ],
    service2Title: "2. Prototyping & MVP Development",
    service2Desc: [
      "Rapid prototyping (physical and digital).",
      "Minimum Viable Product (MVP) creation.",
      "3D modeling and industrial simulation."
    ],
    service3Title: "3. Digital Transformation & Emerging Tech",
    service3Desc: [
      "AI, IoT, blockchain, and AR/VR integration.",
      "Smart city, factory, and office automation solutions.",
      "Data analytics and AI-driven decision-making tools."
    ],
    service4Title: "4. Corporate Innovation & Startup Support",
    service4Desc: [
      "Intrapreneurship programs for employees and leadership.",
      "Incubation and acceleration paths for high-growth startups.",
      "Open innovation challenges, specialized hackathons, and competitions."
    ],
    service5Title: "5. User Experience (UX) & Product Design",
    service5Desc: [
      "Human-centered design research and user validation.",
      "UI/UX optimization for websites, applications, and dashboards.",
      "Customer journey mapping and interaction flows."
    ],
    service6Title: "6. Innovation Strategy & Consulting",
    service6Desc: [
      "Strategic roadmap development for digital innovation adoption.",
      "Business model innovation (e.g., subscription, cloud-platform, and network models).",
      "Competitor benchmarking and market disruption strategies."
    ],

    portfolioSkyProperty: "SkyProperty",
    portfolioMosqueClock: "Manarah Mosque Clock",
    portfolioMyProject: "MyProject Platform",
    portfolioTryHub: "TryHub App",
    portfolioPickUp: "PickUp Delivery Receiver",
    portfolioGradUniform: "Graduation Uniform",
    portfolioTech: "Other Smart Tech Solutions",
    portfolioProAds: "ProAds & Dolphin Dolly",

    portfolioTitle: "Our Products & Pioneering Portfolio",
    portfolioSubtitle: "We take immense pride in our products developed from pure concept to active market success.",
    externalLink: "External Redirection",
    internalLink: "View Details",
    clickHere: "Click alternative link to visit",
    moreDetails: "Explore Details",

    formName: "Full Name",
    formEmail: "Email Address",
    formSubject: "Subject",
    formMessage: "Message Description",
    formSubmit: "Send Message",
    formSuccess: "Your message has been sent successfully! We will get back to you shortly.",
    formRequired: "This field is required",

    compTitle: "Secure Delivery Solutions Competition",
    compDescription: "This competition aims to develop ideas and engineering solutions for secure, contact-free home delivery receipts. Keep your home safe, your packages protected, and your family's privacy fully secured. Anyone can register below; we guarantee full idea protection, professional review, and fair evaluation.",
    compFullName: "Full Name *",
    compCity: "City *",
    compCountry: "Country *",
    compMobile: "Mobile Number *",
    compEmail: "Email Address *",
    compIdeaDesc: "Description of the Idea *",
    compAttachFile: "Attach document or sketch about the idea (Optional)",
    compOriginality: "Originality *",
    compOriginalityCheck: "I declare that the idea is unique, holds my personal work, and has not been copied from elsewhere.",
    compSecurityLevel: "Security level *",
    compSecurityValue: "Tell us how the idea makes goods delivery fully secure",
    compPrivacyLevel: "Privacy level *",
    compPrivacyValue: "Tell us how the idea enhances family privacy and avoids courier physical contact",
    compEaseImplementation: "Ease of Implementation *",
    compEaseValue: "How easy is the engineering or logical realization of this idea?",
    compEaseUse: "Ease of Use *",
    compEaseUseValue: "How user-friendly is this solution for both courier and homeowner?",
    compCostImplementation: "Cost of Implementation *",
    compCostValue: "Describe the approximate costs involved in materials and operation",
    compTermsAgreed: "I agree to the competition rules, terms and conditions",
    compSendBtn: "Send Request / Submit Idea",
  }
};
