export interface SubPageContent {
  title: string;
  subtitle?: string;
  intro: string;
  sections: {
    title: string;
    content: string | string[];
    iconName?: string;
  }[];
  bulletsHeader?: string;
  bullets?: string[];
  ctaText?: string;
  inquiryContact?: string;
}

export const odooPageData: Record<'ar' | 'en', SubPageContent> = {
  ar: {
    title: "نظام أودو (Odoo ERP)",
    subtitle: "الحل الأمثل لإدارة أعمال منشأتك التعليمية والتجارية بالكامل",
    intro: "هل تعاني من كثرة الأنظمة التقنية في منشأتك؟ هل هذه الأنظمة غير متوافقة أو غير مرتبطة ببعضها؟ هل تكاليف هذه الأنظمة مرتفعة؟ الحل في نظام أودو (Odoo). لن تحتاج لأنظمة متعددة بعد اليوم لأن أودو يغطي تقريباً جميع أعمال منشأتك بفعالية وكفاءة وسعر مميز.",
    sections: [
      {
        title: "أتمتة كافة أعمال منشأتك",
        content: "إن نظام أودو هو نظام عالمي يستخدم في آلاف المنشآت وملايين المستخدمين حول العالم. كوكيل معتمد لنظام أودو في المملكة، نحن نتأكد من تطبيق وتخصيص هذا النظام في منشأتك لتحقيق الأهداف الاستراتيجية المرجوة والربط الكامل للعمليات."
      },
      {
        title: "عملك بالكامل في منصة واحدة",
        content: "أودو هو عبارة عن مجموعة متكاملة من تطبيقات الأعمال مفتوحة المصدر التي تغطي جميع احتياجات شركتك، مثل: المحاسبة، إدارة الرواتب، الموارد البشرية، إدارة علاقات العملاء (CRM)، التجارة الإلكترونية، التعليم الإلكتروني، المخازن والمستودعات، نقاط البيع (POS)، وإدارة المشاريع وغير ذلك."
      },
      {
        title: "بسيط، ذو كفاءة عالية، وبسعر معقول!",
        content: "ما يجعل من أودو مميزاً هو هدفه بأن يكون سهل الاستخدام للغاية ومتكاملاً تماماً في الوقت ذاته. هل تريد إدارة كافة عمليات الموارد البشرية والتسويق والمواقع الإلكترونية والمبيعات؟ كل هذا تقدمه أودو لك بسهولة تامة وبأفضل تكلفة استثمارية."
      }
    ],
    bulletsHeader: "تطبيقات وحلول نظام أودو المشمولة:",
    bullets: [
      "المحاسبة المتقدمة والتقارير المالية المطابقة لهيئة الزكاة والضريبة والجمارك.",
      "إدارة الموارد البشرية (HR): الرواتب، البدلات، الحضور والانصراف، والعهود.",
      "نظام المشتريات والمبيعات المتكامل وإدارة سلسلة الإمداد.",
      "إدارة المشاريع التعليمية والمؤسسية ومتابعة المهام بجداول زمنية مرنة.",
      "التعليم الإلكتروني وإدارة شؤون الطلاب والمقررات.",
      "إدارة المستودعات بنظام الجرد المستمر والباركود السريع."
    ],
    ctaText: "اطلب استشارة مجانية وعرض سعر مخصص لنظام Odoo",
    inquiryContact: "0554344899"
  },
  en: {
    title: "Odoo ERP Solutions",
    subtitle: "The perfect integrated solution for managing your entire education & business system",
    intro: "Are you struggling with too many disconnected technical systems? Are these software apps non-compatible or highly expensive to run? The ideal solution is Odoo. You will no longer require multiple separate systems because Odoo covers virtually 100% of your business operations with high efficacy and great cost.",
    sections: [
      {
        title: "Automate All Your Operations",
        content: "Odoo is a global enterprise resource planning system used by thousands of companies and millions of daily users. As an authorized Odoo partner in Saudi Arabia, we ensure professional customization, custom integrations, and dedicated local deployment."
      },
      {
        title: "Your Entire Enterprise on a Single Screen",
        content: "Odoo features modular, open-source business apps extending across all organizational departments: Financial Accounting, HR & Payroll, CRM & Lead Management, Inventory & Warehouses, POS, E-Commerce, E-Learning, School Portals, and agile Project Management trackers."
      },
      {
        title: "Simple, Efficient, and Affordable",
        content: "Odoo stands out because of its exceptional user friendliness paired with comprehensive native connections. No more messy spreadsheets or API glue. Grow your business and coordinate departments seamlessly with the best budget."
      }
    ],
    bulletsHeader: "Odoo Application Modules Covered:",
    bullets: [
      "ZATCA Phase 2 compliant e-invoicing and corporate accounting logs.",
      "End-to-End Human Resources tracker (Evaluations, Salaries, and Visas).",
      "Robust Inventory Control with dynamic QR and Barcode scanning.",
      "Advanced student registries, course enrollment and billing modules.",
      "CRM & Sales pipeline with customer follow-up actions.",
      "Live project management timesheets and task burndown graphs."
    ],
    ctaText: "Request a custom Odoo ERP trial & consultancy",
    inquiryContact: "0554344899"
  }
};

export const pickupPageData: Record<'ar' | 'en', SubPageContent> = {
  ar: {
    title: "PickUp إستلام الطلبات الآمن",
    subtitle: "أول براءة اختراع سعودية لتسهيل وتأمين استلام الطرود والشحنات المنزلية الذكية",
    intro: "يعتبر بيك اب (PickUp) أول منتج من نوعه عالمياً، وهو أحد مخرجات معمل الإبداع الرائدة التي نفخر بها بالكامل والمحمية بحقوق الملكية الفكرية وبراءة الاختراع المعتمدة من الهيئة السعودية للملكية الفكرية.",
    sections: [
      {
        title: "رافعة التوصيل الذكية على السور",
        content: "المنتج عبارة عن آلية رافعة ذكية ومبتكرة يتم تركيبها بشكل أنيق ومدمج على سور الفلل والمنازل. مخصصة لاستلام كافة طلبات التوصيل (الطرود، المشروبات، المأكولات، السلع الاستهلاكية) بشكل آمن ميكانيكياً وإيقافها في الحرم الداخلي دون أي حاجة للتواصل البشري."
      },
      {
        title: "حماية الخصوصية والأمن العائلي",
        content: "لا داعي للقلق بعد اليوم. لن تضطر العائلة لفتح باب المنزل الخارجي لغرباء التوصيل ومندوبي التطبيقات، ولن تحدث أي احتكاكات مباشرة. يضع المندوب الشحنة في الحاوية الخارجية ليقوم النظام بسحبها آلياً وتأمينها داخل حوش المنزل بكل سهولة وسرية."
      },
      {
        title: "متوافق مع مختلف الطرود والأحجام",
        content: "تم هندسة بيك اب بدقة للتعامل مع مختلف الأوزان والأحجام الشائعة للطرود المنزلية والعلب الكرتونية وحاملي القهوة والمشروبات الباردة والساخنة بآلية اتزان تمنع انسكاب السوائل أو تضرر المنتجات الحساسة."
      }
    ],
    bulletsHeader: "مزايا وفوائد منتج PickUp المميز:",
    bullets: [
      "مجهّز بآلية إقفال ذكية تفتح برمز مخصص للمندوب أو رمز استجابة سريع QR.",
      "نظام رفع ميكانيكي هيدروليكي آمن ومتوازن لسلامة الشحنات السائلة والغذائية.",
      "هيكل مقاوم للظروف المناخية القاسية كالحرارة المرتفعة، الرطوبة، والرياح في المملكة.",
      "يحافظ تماماً على استقلالية وخصوصية أفراد العائلة داخل منازلهم.",
      "حل مثالي عند عدم تواجد أحد بالمنزل لاستلام الطرود الثمينة والوثائق الهامة."
    ],
    ctaText: "اطلب جهاز PickUp الذكي لمنزلك الآن",
    inquiryContact: "0554344899"
  },
  en: {
    title: "PickUp Secure Delivery Receiver",
    subtitle: "The world's first patented smart wall-mounted elevator receipt system for homes",
    intro: "PickUp is a pioneering product of its kind globally, born directly out of the Innovation Lab's mechanical incubator and proudly registered under official patent rights with the Saudi Authority for Intellectual Property (SAIP).",
    sections: [
      {
        title: "On-Wall Smart Cargo Elevator",
        content: "PickUp features an elegant, secure mechanical elevator unit that mounts flawlessly to your villa's exterior boundary wall. It is designed to safely receive packages from delivery couriers without opening the main residential door or compromising layout security."
      },
      {
        title: "Absolute Family Privacy & Security",
        content: "There's no longer any reason to worry. You are no longer forced to unlock doors or have face-to-face contacts with courier personnel. The courier places the order in the secure external box, and with a touch, the product is lifted smoothly inside your fence."
      },
      {
        title: "Balanced Design for Food, Coffee & Cargo",
        content: "Engineered with precision self-balancing shock mounts, PickUp safely handles food, pizza boxes, delicate documents, groceries, and liquid coffee cups without risking any spills or dynamic damage."
      }
    ],
    bulletsHeader: "Highlights of PickUp System:",
    bullets: [
      "Keyless dynamic lock supported by single-use mobile code generators.",
      "Balanced smooth mechanical motion protecting hot/cold foods and liquids.",
      "Ultra-durable, rustless chassis customized to withstand harsh GCC summers.",
      "Saves valuable time of staying home waiting for couriers to arrive.",
      "Integrates fully with smart home systems and secure monitoring cameras."
    ],
    ctaText: "Order your PickUp device today via WhatsApp",
    inquiryContact: "0554344899"
  }
};

export const gulfHatPageData: Record<'ar' | 'en', SubPageContent> = {
  ar: {
    title: "القبعة الخليجية (GulfHat)",
    subtitle: "براند وعلامة تجارية سعودية مسجلة لإعادة صياغة المظهر الخليجي بذكاء وعصرية",
    intro: "قبعة الخليج (GulfHat) هي علامة تجارية محلية سعودية تحدث ثورة في طريقة ارتداء الزي التقليدي للرأس في الخليج والمملكة. فبدلاً من القطع المتفرقة، توفر GulfHat الزي كقطعة واحدة مدمجة سهلة الارتداء.",
    sections: [
      {
        title: "بساطة، خفة، وأناقة فورية",
        content: "تماماً مثل القبعات الرياضية العادية، تحمي قبعة الخليج من أشعة الشمس المباشرة وتوفر فتحات دقيقة للتهوية، بينما تحافظ في مظهرها على شكل الشماغ والعقال الأنيق والمهيب للهوية الوطنية الأصيلة."
      },
      {
        title: "مثالية للمدرجات والأنشطة الرياضية",
        content: "قبعة الخليج رائعة لمدرجات ملاعب كرة القدم والأنشطة الرياضية والسياحية. يمكن للاعبين، والمشجعين والضيوف والإداريين ارتدائها بمنتهى الراحة والاستيعاب دون القلق من سقوط العقال أو الشماغ أثناء الحركة السريعة والاحتفال."
      },
      {
        title: "ألوان وشعارات مخصصة للأندية والبراندات",
        content: "تأتي GulfHat بأشكال وألوان عديدة دافئة وتتيح خيار التخصيص الكامل بشعارات وألوان الأندية الرياضية أو الهيئات الوطنية. هذا يجعلها التذكار والهدية الثقافية الأفضل للزوار في المهرجانات والمناسبات."
      }
    ],
    bulletsHeader: "مواصفات وخصائص GulfHat المميزة:",
    bullets: [
      "منتج سعودي أصيل 100%، تم التصميم والتطوير الهندسي والصناعي بالكامل في المملكة العربية السعودية.",
      "مناسبة جداً للأطفال: سهلة البس والخلع في المناسبات الوطنية واليوم الوطني والاحتفالات المدرسية دون فوضى.",
      "اللون الأبيض الكلاسيكي: يتميز بتصميم يحاكي الغترة البيضاء الناصعة والعقال الأسود المتناسق.",
      "قماش متطور يسمح بمرور الهواء وتخفيف درجة الحرارة تحت الشمس.",
      "الهدية الثقافية المثالية لضيوف وفود السياحة والرياضة القادمين لدول الخليج للتمتع بالثقافة العربية بأسلوب عملي."
    ],
    ctaText: "لطلب كميات مخصصة للنوادي أو الهدايا تواصل معنا",
    inquiryContact: "0554344899"
  },
  en: {
    title: "The GulfHat (GulfHat)",
    subtitle: "A registered Saudi trade mark revolutionizing traditional Gulf headwear",
    intro: "GulfHat is a local Saudi trademark. It revolutionizes the way we wear the traditional Saudi and Gulf headwear. Instead of multiple separate pieces, GulfHat provides the headwear in one single piece that is easy to wear.",
    sections: [
      {
        title: "Simple, Light, and Elegant",
        content: "Just like a standard cap, it protects from the sun and allows more air ventilation, while perfectly preserving the prestigious look of the traditional Shemagh and Iqal in a compact, stable format."
      },
      {
        title: "Perfect for Sports & Stadiums",
        content: "GulfHat is perfect for sport activities. All players, fans, guests, and sport management can wear GulfHat easily and comfortably. It is heavily optimized for fast movement and outdoor sports events without slipping off."
      },
      {
        title: "Fully Custom Club Colors & Shapes",
        content: "GulfHat comes in different colors and shapes. It can be fully customized with logos and theme colors for any Sport Club or National Brand, serving as the absolute best culturally cohesive merchandise or gift."
      }
    ],
    bulletsHeader: "Why Choose the Original GulfHat?",
    bullets: [
      "Original Saudi Product: Design and manufacturing is proudly located inside Saudi Arabia.",
      "Perfect for Children: Simple and ready to wear in seconds. Great for school parties and national events.",
      "Classic White Model: Features the clean White headwear with elegant black Iqal borders.",
      "Highly breathable mesh fabric that provides optimal ventilation during warm weather.",
      "Unique souvenir representing the rich Arabian culture in a functional, modern shape."
    ],
    ctaText: "Order GulfHat bulk packages or club branded units now",
    inquiryContact: "0554344899"
  }
};

export const proadsPageData: Record<'ar' | 'en', SubPageContent> = {
  ar: {
    title: "تقنية ProAds ",
    subtitle: "حلول الدعاية والترويج الحاصلة على براءة اختراع بتقنية الإسقاط ثلاثي الأبعاد والذكاء التفاعلي",
    intro: "أجهزة ProAds™ وشخصية دجلة (The Dolly™) هما مخرجان إبداعيان مخصصان لمراكز التسوق والأماكن العامة لإبهار الزوار وخلق تجارب تسويقية وتوعوية غير مسبوقة.",
    sections: [
      {
        title: "ما هي تقنية ProAds™ الثورية؟",
        content: "عبارة عن تقنية إسقاط بصري ثنائية وثلاثية الأبعاد مسجلة ببراءة اختراع، تفوق الشاشات التقليدية بكثير. تستخدم أجهزة عرض ليزر ذات كثافة عالية ومحتوى تفاعلي مصمم خصيصاً بنمط 3D يظهر وكأنه معلق في الهواء أو على الأرضيات دون حواجز مادية."
      },
      {
        title: "دولي الكاركتر التفاعلي Dolly™",
        content: "دوللي هو شخصية كرتونية تفاعلية حية تظهر كدلفين مجسم ثلاثي الأبعاد! يرتبط الزوار والأطفال به عاطفياً على الفور. يلعب دوللي بمرح، ويصدر أصواتاً بحرية، والجميل هو أن قصة وتصرفات Dolly تتطور وتستجيب مع حركة وحضور الجمهور في المكان التفاعلي."
      },
      {
        title: "أماكن استثمار تقنية ProAds™",
        content: "تناسب جداً أرضيات المولات الكبرى، الممرات الخارجية والمفتوحة، بوابات المتاجر والماركات الفخمة لزيادة الإقبال وجذب الانتباه الفوري، نهايات السلالم المتحركة، والأماكن منخفضة الإضاءة لتقديم تجارب مرئية خلابة."
      }
    ],
    bulletsHeader: "لماذا تختار ProAds™ لحملتك التسويقية؟",
    bullets: [
      "لا تتطلب مساحة فيزيائية أرضية ولا تعيق مرور الزوار وتعتبر آمنة 100%.",
      "قوة جذب استثنائية تفوق الشاشات التقليدية بمعدل انتباه يتجاوز 4 أضعاف.",
      "إمكانية دمج ألعاب تفاعلية للأطفال عبر هولوغرام مع استجابة فورية للحركة.",
      "ربط الإسقاط برموز استجابة سريعة QR-Codes لتقديم قسائم شراء وهدايا.",
      "تقديم عروض هولوغرامية مذهلة للاحتفال بيوم التأسيس أو العروض الوطنية."
    ],
    ctaText: "تواصل معنا لتأجير أو تجهيز ProAds في موقعك التجاري",
    inquiryContact: "0554344899"
  },
  en: {
    title: "ProAds™ Technology & Dolly™",
    subtitle: "Revolutionary patented 3D display technology and the interactive dolphin experience",
    intro: "ProAds™ and The Dolly™ represent the pinnacle of our experiential marketing products designed to capture eyeballs, drive brand engagement, and create unforgettable interactions.",
    sections: [
      {
        title: "What is ProAds™?",
        content: "A revolutionary patented display technology utilizing specialized projection systems and high-density 3D holographic rendering. Unlike static LED screens, ProAds projects crisp, interactive content directly on open surfaces or air walkways without requiring heavy structures."
      },
      {
        title: "The Dolly™ Interactive Living Dolphin",
        content: "Dolly is a living, breathing 3D dolphin character projected onto space centers! Customers hook to it emotionally. Dolly leaps, plays joyfully, squeaks, and changes behaviors dynamically based on the crowd density and children's interactions."
      },
      {
        title: "Optimal Deployment Venues",
        content: "Perfect for shopping mall central plazas, retail store entrances, corporate lobbies, amusement venues, crowded escalators, and low-light exhibition booths to create a strong crowd pulling magnet."
      }
    ],
    bulletsHeader: "Key Advantages of ProAds™ & Dolly™:",
    bullets: [
      "Requires absolutely zero physical floor space, entirely safe and fluid.",
      "Stellar retention rate - keeps kids and shoppers engaged 4x longer than standard ads.",
      "Custom interactive projection games responding to foot movement.",
      "Integrates instant QR code pop-ups for on-the-spot giveaways and discounts.",
      "Ideal for high-impact corporate launch events and National Day gala shows."
    ],
    ctaText: "Rent or commission a custom ProAds interactive setup",
    inquiryContact: "0554344899"
  }
};

export const graduationPageData: Record<'ar' | 'en', SubPageContent> = {
  ar: {
    title: "براند \"زي التخرج\" (Graduation Uniform)",
    subtitle: "أول براند سعودي 100% يصمم أرواب وبشوت التخرج والملابس الرسمية بطابع الهوية الوطنية الأصيلة",
    intro: "فخورون بتقديم براند سعودي أصيل يعيد صياغة الملابس والمشالح الأكاديمية للاحتفالات الوطنية والجامعية والمدرسية، لتتناسب مع الطراز السعودي الفاخر والهوية المحلية الفخمة بدلاً من العباءات الغربية المستوردة.",
    sections: [
      {
        title: "تصاميم وطنية بلمسات الهوية الفاخرة",
        content: "يقوم البراند بتصميم أرواب تخرج وبشوت مبتكرة مدمجة للرأس مصممة كشماغ وعقال فاخر ورداء تخرج متناسق يعكس هيبة وبهاء المناسبة ويعزز مشاعر الانتماء للوطن الغالي."
      },
      {
        title: "ملابس احتفالية لجميع الأعمار",
        content: "نقدم حلول تفصيل وتوزيع لملابس التخرج الأكاديمية والوطنية للأطفال في المدارس ورياض الأطفال، وكذلك البالغين والجامعات في احتفالات التخرج الكبرى، بأسعار مخصصة للطلبات الجماعية وبأعلى درجات الجودة."
      },
      {
        title: "تخصيص كامل للألوان والتطريز بالذهب والفضة",
        content: "ندعم التطريز الدقيق لشعارات المدارس، الكليات، أو الهيئات على أرواب التخرج ودمج المشالح بالخيوط الذهبية والفضية الفاخرة التي تدوم طويلاً لتبقى ذكرى غالية لا تُنسى مدى العمر."
      }
    ],
    bulletsHeader: "مزايا منتجات زي التخرج الوطني:",
    bullets: [
      "صناعة سعودية وطنية 100% ملتزمة بتفاصيل الجودة السعودية للأقمشة والمشالح.",
      "تصاميم خاصة ومريحة تدمج تفاصيل الشماغ والعقال بلمسات معاصرة سهلة الارتداء.",
      "خامات خفيفة الوزن باردة وممتازة لقاعات الاحتفالات وتحت الإضاءات القوية.",
      "تتوفر مقاسات دقيقة للأطفال والكبار من الجنسين مع ميزة التخصيص للمجموعات والمدارس.",
      "أسعار منافسة جداً للكميات الكبيرة والمدارس والجامعات والجهات الحكومية مع توصيل سريع لجميع المناطق."
    ],
    ctaText: "اطلب تفصيل زي التخرج المخصص لمدرستك أو جامعتك الآن",
    inquiryContact: "0554344899"
  },
  en: {
    title: "Graduation Uniform Brand",
    subtitle: "100% Saudi brand designed for school and university graduation gowns steeped in rich local heritage",
    intro: "We proudly present the leading Saudi graduation wear brand that revolutionizes academic garments, transforming traditional black gowns into beautifully designed, culturally relevant masterpieces representing Saudi identity.",
    sections: [
      {
        title: "National Gowns with Cultural Motifs",
        content: "Our designs integrate elegant elements of the classic Saudi look (such as the red/white Shemagh drapes, traditional gold-threaded Bisht linings, and structured hats) to give graduates an unparalleled sense of pride."
      },
      {
        title: "For All Ages & Graduation Levels",
        content: "We supply customized ceremonial dress and graduation wear packages for children in kindergarten/primary school, as well as senior university students and graduate programs across the Kingdom."
      },
      {
        title: "Bespoke Gold and Silver Embroidery",
        content: "Customized with your institution's badges, logos, or flags. We use pure metallic threads to deliver a durable ceremonial asset that represents a lifelong memory of accomplishment."
      }
    ],
    bulletsHeader: "Why Choose Our Graduation Uniform Gowns?",
    bullets: [
      "100% locally produced supporting local Saudi artisans and garments factories.",
      "Adapts traditional drapes (Shemagh & Iqal) in a stable layout perfect for school photos.",
      "High grade, breathable materials keeping graduates comfortable under stage lights.",
      "Available in tailored sizing matrices for kids, teenagers, and adults up to 4XL.",
      "Highly attractive bulk pricing and fast shipments directly to school campuses."
    ],
    ctaText: "Inquire about custom academic models for your school or university",
    inquiryContact: "0554344899"
  }
};

export interface OtherSolutionItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
}

export const otherSolutionsData: Record<'ar' | 'en', { title: string; subtitle: string; items: OtherSolutionItem[] }> = {
  ar: {
    title: "المنتجات والحلول التقنية الذكية الأخرى",
    subtitle: "باقة متميزة من الابتكارات البرمجية وحلول إنترنت الأشياء IoT التي تغذي نمو أعمالك وتحقق الكفاءة الرقمية",
    items: [
      {
        id: "tryhub",
        name: "تطبيق TryHub",
        tagline: "حيث يأتي العالم لمشاركة تجاربهم الحية ونقد الخدمات بوعي!",
        description: "منصة اجتماعية ذكية تتيح للمستخدمين والعملاء تدوين ومشاركة تقييماتهم وتجاربهم الصادقة للخدمات والمنتجات في مختلف القطاعات، مما يساعد العملاء على اتخاذ قرارات تسوق ذكية والمؤسسات على تحسين جودتها."
      },
      {
        id: "halapoints",
        name: "نقاط هلا (Hala Points)",
        tagline: "إدارة وضبط برامج الولاء والنقاط في مكان واحد آمن وسحابي",
        description: "تطبيق متكامل يسمح للمتاجر بإدراج وإدارة نقاط الولاء للزبائن دون تكاليف بنية تحتية أو بطاقات بلاستيكية مكلفة. وبالنسبة للمستهلكين، تجمع هلا كل نقاطهم من مختلف المحلات في تطبيق هاتف واحد آمن وبسيط."
      },
      {
        id: "iot",
        name: "حلول إنترنت الأشياء (IoT Solutions)",
        tagline: "ربط متطور عبر بروتوكولات NB-IoT و Lora للأجهزة الذكية والأتمتة",
        description: "نقوم بتوظيف أفكار وحلول IoT في التطبيقات الصناعية والمنزلية والزراعية والبلدية، مثل: العدادات الذكية للكهرباء والمياه، قراءة البيانات المؤتمتة (M2M)، وربط أجهزة الحساسات للتحكم فيها عن بعد."
      },
      {
        id: "salamat",
        name: "سلامات (Salamat E-Clinic)",
        tagline: "العيادة الإلكترونية المبتكرة وربط الحساسات الطبية الحيوية",
        description: "نظام متكامل يربط الأجهزة والحساسات الطبية المتطورة بالشبكة السحابية. يتيح للمرضى قياس مؤشراتهم الحيوية (درجة الحرارة، الضغط، السكر في الدم، الطول، الوزن)، وحفظها آلياً ليتم مراجعتها وتحليلها بواسطة الأطباء من أي مكان وفي أي وقت."
      },
      {
        id: "mapit",
        name: "نظام تتبع الأسطول MapIT",
        tagline: "لا يقتصر على تحديد الموقع بل يحلل سلوك السائقين بدقة وتفصيل",
        description: "نظام وتطبيق متطور لإدارة وتتبع المركبات والشاحنات. يتميز بتركيب مباشر plug-and-play في مأخذ OBD للسيارة. يقوم برصد السرعة الزائدة، الانعطافات المفاجئة، الحوادث، الإرهاق أثناء القيادة وعرض فوري لجميع المركبات على الخرائط الرقمية مع التنبيه الفوري."
      },
      {
        id: "jeel",
        name: "نظام المدرسة السحابي Jeel™",
        tagline: "الجيل الجديد لإدارة المدارس الأهلية والكليات بسلاسة متناهية",
        description: "نظام إدارة المدارس السحابي المتكامل الأكاديمي، المالي، البشري، والنقل المدرسي. لا يتطلب خوادم محلية أو صيانة معقدة. يتم تفعيله كخدمة سحابية مما يوفر الأمان المطلق للأرشيف والتقارير بمشاهدة فورية لأولياء الأمور والمعلمين."
      },
      {
        id: "permit",
        name: "منصة التصاريح السحابية (Permit)",
        tagline: "أول حل سحابي متكامل للتراخيص والتصاريح والتفتيش الميداني في المملكة",
        description: "منصة سحابية متقدمة موجهة للجهات الحكومية والخاصة لتنظيم وإصدار التراخيص والموافقات وجدولة الزيارات الرقابية والتفتيشية والأتمتة الكاملة لإجراءات الرقابة وتتبع المخالفات دون معاملات ورقية معقدة."
      },
      {
        id: "mosque2",
        name: "ساعة المسجد الذكية - الجيل الثاني",
        tagline: "أول ساعة برمجية ذكية للمساجد تتجاوز حدود عرض التوقيت التقليدي",
        description: "الجيل الثاني والحديث من ساعات المساجد. نظراً لكونها برمجية بالكامل، تتيح بث وإرسال الصلوات المقامة مباشرة والخطب من داخل المسجد لجوالات وشاشات المصلين المنزلية المحيطة صوتاً وصورة."
      },
      {
        id: "masjednalive",
        name: "تطبيق مساجدنا لايف (Masjedna Live)",
        tagline: "صل بمسجدك واشهد الدروس والخطب صوتاً وصورة في جوالك مباشرة",
        description: "تطبيق هاتف فريد يربط مجتمع الحي بالجامع الخاص بهم. يتيح للجميع متابعة بث الأذان، الإقامة، خطب الجمعة، والدروس المقامة في المسجد مباشرة للبلدان والمساجد الداعمة لتعم الفائدة والتواصل."
      },
      {
        id: "morshidna",
        name: "تطبيق مرشدنا (Morshidna)",
        tagline: "المرشد السياحي البصري والجغرافي المبتكر للأماكن التاريخية والمتاحف",
        description: "تطبيق سياحي متطور يعتم على استشعار الموقع الجغرافي للزائر ليعرض له فوراً تفاصيل ومعلومات ثقافية غنية (مقاطع مرئية، تسجيلات صوتية، ملفات وصور) عن المعلم الأثري المحيط به بأسلوب ذكي وبسيط."
      }
    ]
  },
  en: {
    title: "Other Smart Products & Solutions",
    subtitle: "A stellar suite of innovative software, mobile apps, and IoT platforms built to drive excellence",
    items: [
      {
        id: "tryhub",
        name: "TryHub App",
        tagline: "Where the world comes to share their genuine experiences!",
        description: "A smart social application allowing users to express real reviews and feedback on products, services, and shops. It drives customer wisdom and guides organizations toward continuous quality enhancements."
      },
      {
        id: "halapoints",
        name: "Hala Points",
        tagline: "Cloud-based customer loyalty and points management platform",
        description: "An elegant portal allowing retail stores and brands to establish custom points programs without hardware dependencies. Consumers gather and track all their points from multiple stores in one safe, clean wallet app."
      },
      {
        id: "iot",
        name: "IoT Solutions",
        tagline: "Advanced LoRa and NB-IoT protocols for connected automation",
        description: "We deploy cutting-edge IoT concepts in industrial, building, and household automation: smart utility meters reader (M2M), remote humidity trackers, smart environment sensors, and programmable control gates."
      },
      {
        id: "salamat",
        name: "Salamat E-Clinic",
        tagline: "IoT medical hub connecting vital signs sensors to clinicians",
        description: "A secure medical platform linking specialized health sensors online. Patients measure key vitals (temperature, blood pressure, sugar logs, weight, heights), and doctors securely access chronological trends from any location."
      },
      {
        id: "mapit",
        name: "MapIT Fleet Tracking",
        tagline: "OBD Plug & Play system tracking location and active driving diagnostics",
        description: "An incredibly detailed fleet tracking solution that measures aggressive acceleration, rapid braking, collisions, sudden cornering, and driver drowsiness levels. View all vehicles dynamically on digital map dashboards."
      },
      {
        id: "jeel",
        name: "Jeel School Management",
        tagline: "All-in-one cloud platform for private schools and colleges",
        description: "Jeel manages academics, payroll and HR, student fees, transport dispatch, and school schedules. Safe, simple, and requiring zero local servers. Teachers, admins, and parents connect synchronously on any device."
      },
      {
        id: "permit",
        name: "Permit Cloud Platform",
        tagline: "The premier cloud-based permitting, licensing, and code-inspection suite in KSA",
        description: "Designed for government municipal branches and enterprise regulatory agencies. Modernizes inspection scheduling, fine tracking, licensing reviews, and smart tablet-guided field actions without tedious paperwork."
      },
      {
        id: "mosque2",
        name: "Smart Mosque Clock (2nd Gen)",
        tagline: "Software-based mosque scheduling exceeding classical digital timers",
        description: "The 2nd generation mosque centerpiece. Because it is completely software-driven, it displays prayer sessions in versatile modes and can broadcast live prayers, events, and educational assemblies audio-visually."
      },
      {
        id: "masjednalive",
        name: "Masgedna Live",
        tagline: "Stay connected to your community mosque live streams",
        description: "A specialized app enabling residents to tune in directly to real-time streams of Azan, Friday sermons, prayers, lectures, and translations of their local mosque straight onto their TVs or phone screens."
      },
      {
        id: "morshidna",
        name: "Morshidna Tour Guide",
        tagline: "Location-aware interactive visual helper for tourists and museums",
        description: "A high-fidelity mobile application that detects coordinates and surrounding historical relics, displaying curated multimedia presentations (audio guides, videos, 3D maps, histories) of site spots."
      }
    ]
  }
};
