// Print & Paint Catalog & Site Data
export const siteConfig = {
  name: "Print & Paint",
  taglineBg: "3D Принтиране, Ръчно Оцветяване и Художествени Услуги",
  taglineEn: "3D Printing, Hand Painting & Custom Art Studio",
  phonePeyo: "+359 898 624 880",
  phoneHristo: "+359 885 852 169",
  email: "contact@printnpaint.net",
  authorDev: "PVidev Dev.",
  authorDevUrl: "https://pvidev.dev/",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100075994116320",
    tiktok: "https://www.tiktok.com/@print.and.paint",
    instagram: "https://www.instagram.com/print.paint_/",
    youtube: "https://www.youtube.com/@Print-And-Paint"
  }
};

export const catalogData = [
  {
    id: "cyber-samurai",
    codeId: "PNP-001",
    category: "games",
    categoryBg: "Игри & Sci-Fi",
    categoryEn: "Games & Sci-Fi",
    franchiseBg: "Cyberpunk 2077 / Оригинален концепт",
    franchiseEn: "Cyberpunk 2077 / Original Concept",
    nameBg: "Cyber Ronin · Neo-Tokyo",
    nameEn: "Cyber Ronin · Neo-Tokyo",
    scale: "1/6 (32 cm)",
    tech: "8K SLA Resin + UV Cured",
    finishBg: "Аерограф, NMM металик, UV светещи неонови акценти",
    finishEn: "Airbrush, NMM metallic, UV reactive neon cyber accents",
    timeHours: 42,
    photosCount: 8,
    cover: "/assets/cyber-samurai.jpg",
    photos: [
      { src: "/assets/cyber-samurai.jpg", titleBg: "Основен ракурс", titleEn: "Front Perspective" },
      { src: "/assets/cyber-samurai.jpg", titleBg: "Детайл броня & катана", titleEn: "Armor & Katana Detail" },
      { src: "/assets/cyber-samurai.jpg", titleBg: "Текстури и патина", titleEn: "Texture & Shading" }
    ],
    descBg: "Колекционерска статуетка с изключителна детайлност. Изработена на 8K смолен 3D принтер с дебелина на слоя едва 0.025мм. Всяка плоча от кибер бронята е ръчно полирана, грундирана и оцветена с акрилни бои от висок клас с добавени UV луминисцентни очертания.",
    descEn: "Collector grade miniature statue with exceptional detail. Printed on an 8K resin 3D printer with 0.025mm layer thickness. Every armor plate is hand polished, primed, and shaded using premium acrylics with vibrant UV luminescent contours."
  },
  {
    id: "mythic-dragon",
    codeId: "PNP-002",
    category: "fantasy",
    categoryBg: "Фентъзи",
    categoryEn: "Fantasy & Lore",
    franchiseBg: "Dark Fantasy / Ancient Wyrm",
    franchiseEn: "Dark Fantasy / Ancient Wyrm",
    nameBg: "Verdant Wyrm · The Ancient",
    nameEn: "Verdant Wyrm · The Ancient",
    scale: "1/8 (38 cm крилен размах)",
    tech: "8K SLA смола + Подсилена каменна основа",
    finishBg: "Многослойно нанасяне на люспи, вътрешно огнено сияние, суха четка",
    finishEn: "Multi-layered scale washing, internal fiery chest glow, dry-brushing",
    timeHours: 54,
    photosCount: 11,
    cover: "/assets/mythic-dragon.jpg",
    photos: [
      { src: "/assets/mythic-dragon.jpg", titleBg: "Диорама с готическа арка", titleEn: "Gothic Arch Diorama" },
      { src: "/assets/mythic-dragon.jpg", titleBg: "Гръден кош с лава ефект", titleEn: "Molten Core Glow" },
      { src: "/assets/mythic-dragon.jpg", titleBg: "Криле и текстури на люспите", titleEn: "Wings & Scales Detailing" }
    ],
    descBg: "Импозантен древен дракон, кацнал върху развалините на готическа катедрала. Гръдният кош е изпълнен с градиентна техника за илюзия на изригваща магма, а люспите преливат между изумрудено зелено и обсидианово черно.",
    descEn: "Imposing ancient dragon perched upon the ruins of a gothic cathedral. The chest incorporates an advanced gradient technique simulating erupting magma, while the scales transition from emerald green to obsidian black."
  },
  {
    id: "anime-sorceress",
    codeId: "PNP-003",
    category: "anime",
    categoryBg: "Аниме & Манга",
    categoryEn: "Anime & Manga",
    franchiseBg: "Astrella Lore / Оригинално Аниме",
    franchiseEn: "Astrella Lore / Original Anime",
    nameBg: "Elara · Sorceress of Astrella",
    nameEn: "Elara · Sorceress of Astrella",
    scale: "1/6 (29 cm)",
    tech: "8K SLA + Прозрачна цветна смола за кристалите",
    finishBg: "Гланцов перлен ефект на робата, ръчно рисувани аниме очи, златен филигран",
    finishEn: "Pearl shimmer robe finish, hand-painted anime eyes, gold filigree",
    timeHours: 36,
    photosCount: 7,
    cover: "/assets/anime-sorceress.jpg",
    photos: [
      { src: "/assets/anime-sorceress.jpg", titleBg: "Фронтален ракурс с кристална магия", titleEn: "Levitating Crystal Magic" },
      { src: "/assets/anime-sorceress.jpg", titleBg: "Лице и златен филигран", titleEn: "Face & Gold Filigree" },
      { src: "/assets/anime-sorceress.jpg", titleBg: "Прозрачни кристали", titleEn: "Optical Tinted Resin" }
    ],
    descBg: "Ефирна аниме магьосница, левитираща в центъра на вихрушка от кристали. Прозрачните кристални елементи са принтирани от специална оптична смола и тонирани в аметистово виолетово. Златните детайли по одеждите са положени с четка размер 000.",
    descEn: "Ethereal anime sorceress floating amid a whirlwind of crystals. The translucent crystal shards are printed using specialized optical resin and tinted amethyst violet. Intricate gold robe trims are hand-applied using size 000 micro-brushes."
  },
  {
    id: "gothic-crusader",
    codeId: "PNP-004",
    category: "fantasy",
    categoryBg: "Фентъзи",
    categoryEn: "Fantasy & Lore",
    franchiseBg: "Dark Souls / Elden Ring Vibe",
    franchiseEn: "Dark Souls / Elden Ring Vibe",
    nameBg: "The Iron Paladin · Lord of Cinder",
    nameEn: "The Iron Paladin · Lord of Cinder",
    scale: "1/10 (22 cm с основа)",
    tech: "8K Смола + Микро-текстурирана основа",
    finishBg: "Non-Metallic Metal (NMM), ефекти на корозия и ръжда, светещи сини руни",
    finishEn: "Non-Metallic Metal (NMM), weathering & rust effects, glowing blue runes",
    timeHours: 31,
    photosCount: 9,
    cover: "/assets/gothic-crusader.jpg",
    photos: [
      { src: "/assets/gothic-crusader.jpg", titleBg: "Боен ракурс с меч и щит", titleEn: "Battle Ready Stance" },
      { src: "/assets/gothic-crusader.jpg", titleBg: "Руническо сияние по острието", titleEn: "Runic Blade Glow" },
      { src: "/assets/gothic-crusader.jpg", titleBg: "Основа с павета и черепи", titleEn: "Base Cobblestones & Skulls" }
    ],
    descBg: "Тъмен паладин от тежки битки. Острието на меча носи древни ледени руни с плавен OSL (Object Source Lighting) ефект. Основата включва калдъръм, изсъхнал мъх и микроскопични черепи за пълно потапяне в мрачния свят.",
    descEn: "Hardened dark paladin weathered by battle. The sword blade radiates cold runic power through smooth OSL (Object Source Lighting). The base features cobblestones, dry moss, and micro-skulls for complete immersion."
  },
  {
    id: "scifi-titan-mech",
    codeId: "PNP-005",
    category: "games",
    categoryBg: "Игри & Sci-Fi",
    categoryEn: "Games & Sci-Fi",
    franchiseBg: "Titanfall / Mecha Frontier",
    franchiseEn: "Titanfall / Mecha Frontier",
    nameBg: "Ironclad-07 · Vanguard Class Titan",
    nameEn: "Ironclad-07 · Vanguard Class Titan",
    scale: "1/12 (26 cm тежка артилерия)",
    tech: "Хибриден 8K SLA + Инженерен FDM за ставите",
    finishBg: "Индустриално състаряване (Weathering), предупредителни ивици, чипинг",
    finishEn: "Industrial weathering, safety hazard stripes, chipping medium & washes",
    timeHours: 48,
    photosCount: 10,
    cover: "/assets/scifi-titan-mech.jpg",
    photos: [
      { src: "/assets/scifi-titan-mech.jpg", titleBg: "Пълен боен изглед", titleEn: "Full Combat View" },
      { src: "/assets/scifi-titan-mech.jpg", titleBg: "Ракетен модул и роторна картечница", titleEn: "Missile Pod & Gatling" },
      { src: "/assets/scifi-titan-mech.jpg", titleBg: "Метална табелка и индустриална основа", titleEn: "Plaque & Industrial Base" }
    ],
    descBg: "Тежък боен механоид с над 35 индивидуално принтирани и сглобени компонента. Използвана е многопластова техника на олющена боя (hairspray chipping), засъхнала смазка около хидравличните бутала и предупредителни маркировки.",
    descEn: "Heavy combat mech constructed from over 35 individually printed and fitted parts. Features multi-layered chipped paint weathering, realistic hydraulic oil stains, hazard stripes, and high-precision micro decals."
  },
  {
    id: "eldritch-demon",
    codeId: "PNP-006",
    category: "fantasy",
    categoryBg: "Фентъзи",
    categoryEn: "Fantasy & Lore",
    franchiseBg: "Diablo / DOOM Eternal Vibe",
    franchiseEn: "Diablo / DOOM Eternal Vibe",
    nameBg: "Arch-Fiend Ignis · Underworld General",
    nameEn: "Arch-Fiend Ignis · Underworld General",
    scale: "1/6 (35 cm масивен бюст & тяло)",
    tech: "8K SLA Смола с висока плътност",
    finishBg: "Червен и оранжев OSL лава ефект, овъглена броня, димни акценти",
    finishEn: "Red & orange OSL lava effects, charred bone armor, smoke base",
    timeHours: 50,
    photosCount: 12,
    cover: "/assets/eldritch-demon.jpg",
    photos: [
      { src: "/assets/eldritch-demon.jpg", titleBg: "Огнена глефа и огнена броня", titleEn: "Molten Glaive & Armor" },
      { src: "/assets/eldritch-demon.jpg", titleBg: "Рога и демонско изражение", titleEn: "Horns & Demonic Visage" },
      { src: "/assets/eldritch-demon.jpg", titleBg: "Пепелна диорама", titleEn: "Ashen Ruins Diorama" }
    ],
    descBg: "Мащабна и свирепа фигура на демоничен пълководец. Разполага с горяща магмена глефа, излъчваща реалистично топло сияние върху тялото и бронята на героя. Всяка жилка и пукнатина е подчертана с наситени пигменти.",
    descEn: "Massive demonic warlord statue wielding a blazing lava glaive that casts dynamic warm light reflections across charred armor and muscular anatomy. Rich pigments and washes accentuate every fissure and vein."
  },
  {
    id: "laser-mandala",
    codeId: "PNP-007",
    category: "laser",
    categoryBg: "Лазерно Гравиране",
    categoryEn: "Laser Engraving",
    franchiseBg: "Стенно Изкуство & Декор",
    franchiseEn: "Wall Art & Interior Decor",
    nameBg: "Nexus Mandala · 8-Layer Woodcraft",
    nameEn: "Nexus Mandala · 8-Layer Woodcraft",
    scale: "45 x 45 cm (Дебелина 32 мм)",
    tech: "Прецизно лазерно рязане & гравиране (0.05mm фокус)",
    finishBg: "Масивен орех, брезов шперплат, натурално ленено масло и байц",
    finishEn: "Solid walnut, birch ply, natural linseed oil & organic wood stains",
    timeHours: 22,
    photosCount: 6,
    cover: "/assets/laser-mandala.jpg",
    photos: [
      { src: "/assets/laser-mandala.jpg", titleBg: "Многослойна перспектива", titleEn: "Multi-Layered Perspective" },
      { src: "/assets/laser-mandala.jpg", titleBg: "Микро-гравирани кибер пътечки", titleEn: "Micro-Engraved Circuitry" },
      { src: "/assets/laser-mandala.jpg", titleBg: "Дървесна текстура и финиш", titleEn: "Natural Wood Grain Finish" }
    ],
    descBg: "Осемслойно релефно стенно пано, съчетаващо свещена геометрия с кибернетични мотиви. Всеки слой дърво е лазерно изрязан с микроскопична точност и ръчно омаслен с натурални екологични масла за дълбок контраст.",
    descEn: "Eight-layer architectural relief wall art fusing sacred geometry with cyberpunk circuitry. Every wood layer is laser-cut with pinpoint precision and hand-oiled using organic stains to create mesmerizing depth and contrast."
  },
  {
    id: "custom-3d-sculpt",
    codeId: "PNP-008",
    category: "modeling",
    categoryBg: "3D Моделиране",
    categoryEn: "3D Modeling",
    franchiseBg: "Индивидуален проект / Персонаж по идея",
    franchiseEn: "Custom Project / Idea to Concept",
    nameBg: "Beastmaster Sculpt · Digital Master",
    nameEn: "Beastmaster Sculpt · Digital Master",
    scale: "Дигитален модел (Готов за печат)",
    tech: "ZBrush, Blender, Sub-division sculpting, Оптимизация на топологията",
    finishBg: "Тестван модел с кухи секции, отводнителни отвори и ключови сглобки",
    finishEn: "Hollowed resin-ready test sculpt with drain holes and locking keys",
    timeHours: 60,
    photosCount: 6,
    cover: "/assets/workshop-modeling.jpg",
    photos: [
      { src: "/assets/workshop-modeling.jpg", titleBg: "Работен процес в ZBrush", titleEn: "ZBrush Digital Workflow" },
      { src: "/assets/workshop-modeling.jpg", titleBg: "Топология и полигонална мрежа", titleEn: "Topology & Polygonal Mesh" }
    ],
    descBg: "Пълен цикъл на 3D моделиране: от 2D скица и референция до анатомично изграден персонаж с милиони полигони. Включва прецизно разрязване на части за лесен печат и сглобяване със заключващи щифтове (keys).",
    descEn: "Full 3D modeling cycle: from concept sketch to high-density anatomical digital sculpt with millions of polygons. Split into optimized modular parts with locking keys for flawless resin 3D printing."
  }
];

export const workshopSteps = [
  {
    step: "01",
    titleBg: "3D Моделиране & Подготовка",
    titleEn: "3D Modeling & Pre-Flight",
    descBg: "Създаваме или оптимизираме 3D модела, задаваме кухини за олекотяване и поставяме прецизни микро-опори под ъгъл.",
    descEn: "We sculpt or optimize the 3D model, create hollow interiors to reduce weight, and place ultra-fine angled supports.",
    img: "/assets/workshop-modeling.jpg"
  },
  {
    step: "02",
    titleBg: "8K Фотополимерен Печат",
    titleEn: "8K Resin 3D Printing",
    descBg: "Принтираме с екстремна резолюция от 25-30 микрона слой по слой в контролирана среда на нашите SLA системи.",
    descEn: "Printing at an extreme 25-30 micron layer resolution in a climate-controlled environment on our SLA resin arrays.",
    img: "/assets/workshop-printers.jpg"
  },
  {
    step: "03",
    titleBg: "Измиване, Почистване & Curing",
    titleEn: "Wash, Cure & Surface Prep",
    descBg: "Ултразвуково измиване в изопропилов алкохол, отстраняване на опорите, шлайфане и дълбока UV полимеризация.",
    descEn: "Ultrasonic IPA wash bath, surgical support removal, gentle sanding, and multi-wavelength UV curing chamber.",
    img: "/assets/workshop-printers.jpg"
  },
  {
    step: "04",
    titleBg: "Грундиране & Ръчно Оцветяване",
    titleEn: "Priming & Master Painting",
    descBg: "Аерографно грундиране със зенитни сенки, последвано от часове микро-рисуване на очи, текстури, метали и кожа.",
    descEn: "Airbrush zenithal priming followed by intensive micro-brushing for expressive eyes, skin tones, metals, and cloth.",
    img: "/assets/workshop-airbrush.jpg"
  },
  {
    step: "05",
    titleBg: "Защитен Лак & Финална Сглобка",
    titleEn: "Sealing & Final Presentation",
    descBg: "Полагане на защитен UV матов или сатенен лак за трайност на цветовете и монтаж върху стабилна диорама.",
    descEn: "Application of museum-grade UV matte or satin protective sealants and assembly onto solid diorama plinths.",
    img: "/assets/workshop-craft.jpg"
  }
];

export const teamData = [
  {
    name: "Пейо Видев",
    nameEn: "Peyo Videv",
    roleBg: "3D Печат & Инженеринг",
    roleEn: "3D Printing & Engineering",
    phone: "+359 898 624 880",
    phoneHref: "tel:+359898624880",
    descBg: "Специалист по 8K смолен и FDM печат, слайсинг оптимизация, подготовка на сложни геометрии и хардуерна прецизност.",
    descEn: "Specialist in 8K SLA resin and FDM printing, slicing calibration, complex support placement, and mechanical precision."
  },
  {
    name: "Христо Станилов",
    nameEn: "Hristo Stanilov",
    roleBg: "Художник & Аерография",
    roleEn: "Artist & Master Painter",
    phone: "+359 885 852 169",
    phoneHref: "tel:+359885852169",
    descBg: "Майстор на четката и аерографа с фокус върху фините преливки, NMM светлинни ефекти, състаряване и реалистични текстури.",
    descEn: "Master of brush and airbrushing, specializing in smooth gradient transitions, NMM light effects, weathering, and life-like textures."
  }
];

export const translations = {
  bg: {
    navHome: "Начало",
    navCollection: "Колекция",
    navServices: "Услуги",
    navWorkshop: "Работилничка",
    navAbout: "За Нас",
    navContact: "Контакти",
    quickQuote: "Запитване ↗",
    heroBadge: "ОТ 2021г. В СОФИЯ, БЪЛГАРИЯ",
    heroTitlePrefix: "Тук изкуството среща",
    heroTitleHighlight: "съвършените технологии",
    heroSubtitle: "Превръщаме любими герои от игри, филми и аниме в неповторими 3D колекционерски фигурки, диорами и персонализирани арт произведения.",
    btnExplore: "Разгледайте Колекцията ↓",
    btnOrderCustom: "Поръчайте фигурка по идея ↗",
    statProjects: "Завършени проекта",
    statTech: "SLA & FDM технологии",
    statCraft: "Ръчно оцветяване",
    statExp: "Години професионален опит",
    
    // Sidebar
    sidebarCollection: "КОЛЕКЦИЯТА",
    sidebarCategories: "Категории",
    sidebarAll: "Всички",
    sidebarGames: "Игри & Sci-Fi",
    sidebarFantasy: "Фентъзи",
    sidebarAnime: "Аниме",
    sidebarLaser: "Лазерно рязане",
    sidebarModeling: "3D Моделиране",
    sidebarWorkshopKicker: "ОТ АТЕЛИЕТО",
    sidebarWorkshopTitle: "Как творим",
    sidebarWorkshopDesc: "Вижте процеса от дигиталния файл до ръчно изрисуваната фигурка.",
    sidebarWorkshopBadge: "Работен процес",
    sidebarTeamKicker: "ЕКИП",
    sidebarFollow: "ПОСЛЕДВАЙТЕ НИ",
    
    // Collection
    collectionTitle: "Избрана Колекция",
    collectionSubtitle: "Всяка фигурка е уникат, изработен с 8K резолюция и ръчно оцветен до най-малкия детайл.",
    searchPlaceholder: "Търсене по ID (напр. PNP-001) или име, игра, технология…",
    allFilter: "Всички",
    gamesFilter: "Игри & Sci-Fi",
    fantasyFilter: "Фентъзи",
    animeFilter: "Аниме",
    laserFilter: "Лазерно Гравиране",
    modelingFilter: "3D Моделиране",
    filterShowing: "Показване на",
    filterOf: "от",
    filterProjects: "проекта",
    noResults: "Няма открити фигурки за това търсене или ID.",
    photosBadge: "снимки",
    quickView: "Преглед",
    idLabel: "ID:",

    // Modal
    modalScale: "Мащаб:",
    modalTech: "Технология:",
    modalFinish: "Оцветяване:",
    modalTime: "Време за изработка:",
    modalHours: "часа",
    modalOrderBtn: "Поръчай подобен проект ↗",
    modalCopyLink: "Копирай линк",
    modalLinkCopied: "Линкът е копиран в клипборда!",
    modalClose: "Затвори",
    zoomHint: "Клик за уголемяване / мащабиране",
    galleryTitle: "ГАЛЕРИЯ ОТ РАКУРСИ:",

    // Services
    servicesTitle: "Нашите Услуги",
    servicesSubtitle: "Комплексни решения от идея и скица до готов колекционерски шедьовър.",
    srv1Title: "3D Принтиране",
    srv1Desc: "Свръхдетайлен 8K фотополимерен печат (SLA) за фигури и миниатюри, както и прецизен FDM печат за по-големи конструкции.",
    srv2Title: "Ръчно Оцветяване & Аерограф",
    srv2Desc: "Майсторско оцветяване с професионални акрили, градиенти с аерограф, сенки, изветряне, NMM и защитен UV лак.",
    srv3Title: "3D Моделиране & Скулптуриране",
    srv3Desc: "Създаване на 3D модели по ваши референции, снимки или идеи, оптимизирани специално за качествен печат.",
    srv4Title: "Лазерно Гравиране & Рязане",
    srv4Desc: "Прецизна лазерна обработка на масивно дърво, плексиглас, плакети и многослойни арт декорации.",

    // Workshop
    workshopTitle: "В Работилничката",
    workshopSubtitle: "Потопете се в атмосферата на студиото и вижте всеки етап от трансформацията.",

    // About
    aboutTitle: "Хората зад Print & Paint",
    aboutSubtitle: "Ние сме Пейо и Христо — обединени от страстта към технологичната прецизност и изкуството на детайла.",

    // Contact
    contactTitle: "Направете Вашата Поръчка",
    contactSubtitle: "Имате идея за любим герой, миниатюра за настолна игра или уникален подарък? Свържете се с нас!",
    contactStudioTitle: "Print & Paint Studio",
    contactStudioDesc: "София, България · Изпращаме с Еконт и Спиди до всяка точка на България и Европа с опция за преглед преди плащане.",
    contactDirectCall: "Или ни се обадете директно:",
    formName: "Вашето Име *",
    formEmail: "Имейл адрес *",
    formPhone: "Телефонен номер *",
    formProjectId: "Референтен проект / ID",
    formProjectIdHint: "(Автоматично попълнено при клик на фигурка или въведете ръчно)",
    formService: "Желана услуга *",
    formServiceOpt1: "3D Принтиране и Оцветяване на фигурка",
    formServiceOpt2: "Само 3D Принтиране (готов за боя)",
    formServiceOpt3: "3D Моделиране по идея",
    formServiceOpt4: "Лазерно гравиране / рязане",
    formServiceOpt5: "Друг персонализиран проект",
    formSize: "Приблизителен размер / мащаб",
    formMessage: "Описание на идеята и детайли *",
    formFile: "Прикачете файл или снимка (STL, OBJ, JPG, PNG, PDF)",
    formFileText: "Влачете файлове тук или кликнете за избор",
    formFileHint: "До 5 файла, макс 10 MB общо",
    formSubmit: "Изпратете Запитването ↗",
    formSending: "Изпращане на съобщението…",
    formSuccess: "Благодарим Ви! Вашето запитване беше изпратено успешно към contact@printnpaint.net. Ще се свържем с Вас в най-кратък срок.",

    // Placeholders
    placeholderProjectId: "напр. PNP-001 или кликнете 'Поръчай' от фигурката",
    placeholderName: "Иван Иванов",
    placeholderPhone: "+359 8...",
    placeholderEmail: "ivan@example.com",
    placeholderSize: "напр. 20 см / 1:8",
    placeholderMessage: "Разкажете ни за фигурката, желания персонаж, цветове, срок...",

    // Founder roles & direct contact
    founder1Role: "3D Печат & Инженеринг",
    founder2Role: "Художник & Аерография",
    contactPeyo: "Пейо Видев:",
    contactHristo: "Христо Станилов:",
    contactEmailLabel: "Имейл:",
    footerPhone1: "+359 898 624 880 (Пейо)",
    footerPhone2: "+359 885 852 169 (Христо)",

    // Footer
    footerAbout: "Професионално 3D принтиране, художествено оцветяване, лазерно гравиране и персонализирани скулптури в София, България.",
    footerLocation: "София, жк. Надежда / Лозенец · Доставки с Еконт & Спиди",
    footerRights: "Всички права запазени.",
    footerDevBy: "Изработено от",
    footerTop: "Нагоре ↑"
  },
  en: {
    navHome: "Home",
    navCollection: "Collection",
    navServices: "Services",
    navWorkshop: "Workshop",
    navAbout: "About Us",
    navContact: "Contact",
    quickQuote: "Get a Quote ↗",
    heroBadge: "SINCE 2021 IN SOFIA, BULGARIA",
    heroTitlePrefix: "Where art meets",
    heroTitleHighlight: "cutting-edge technology",
    heroSubtitle: "We transform iconic gaming, anime, and cinematic characters into one-of-a-kind 3D printed collectible statues, dioramas, and custom artisan works.",
    btnExplore: "Explore Collection ↓",
    btnOrderCustom: "Order Custom Figure ↗",
    statProjects: "Finished projects",
    statTech: "SLA & FDM hardware",
    statCraft: "Handcrafted detailing",
    statExp: "Years professional experience",

    // Sidebar
    sidebarCollection: "THE COLLECTION",
    sidebarCategories: "Categories",
    sidebarAll: "All",
    sidebarGames: "Games & Sci-Fi",
    sidebarFantasy: "Fantasy",
    sidebarAnime: "Anime",
    sidebarLaser: "Laser Art",
    sidebarModeling: "3D Modeling",
    sidebarWorkshopKicker: "FROM THE STUDIO",
    sidebarWorkshopTitle: "How We Craft",
    sidebarWorkshopDesc: "Explore our process from digital sculpture to fully painted figurine.",
    sidebarWorkshopBadge: "Workflow Process",
    sidebarTeamKicker: "TEAM",
    sidebarFollow: "FOLLOW US",

    // Collection
    collectionTitle: "Featured Collection",
    collectionSubtitle: "Each statue is a singular work of art, printed in 8K resolution and meticulously hand-painted down to the finest micro-detail.",
    searchPlaceholder: "Search by ID (e.g. PNP-001) or character, game, technology…",
    allFilter: "All",
    gamesFilter: "Games & Sci-Fi",
    fantasyFilter: "Fantasy",
    animeFilter: "Anime",
    laserFilter: "Laser Art",
    modelingFilter: "3D Modeling",
    filterShowing: "Showing",
    filterOf: "of",
    filterProjects: "projects",
    noResults: "No figurines match your search query or ID.",
    photosBadge: "photos",
    quickView: "View",
    idLabel: "ID:",

    // Modal
    modalScale: "Scale:",
    modalTech: "Technology:",
    modalFinish: "Finish:",
    modalTime: "Craft Time:",
    modalHours: "hours",
    modalOrderBtn: "Request this Project ↗",
    modalCopyLink: "Copy Link",
    modalLinkCopied: "Direct link copied to clipboard!",
    modalClose: "Close",
    zoomHint: "Click to zoom in / scale view",
    galleryTitle: "ANGLE GALLERY:",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Full-cycle solutions from digital sketch to museum-grade collectible masterpiece.",
    srv1Title: "3D Printing",
    srv1Desc: "Ultra-sharp 8K resin printing (SLA) for fine miniatures, plus heavy-duty FDM printing for larger props and dioramas.",
    srv2Title: "Hand Painting & Airbrushing",
    srv2Desc: "Master painter finishes with acrylics, smooth airbrush gradients, shading, weathering, NMM, and protective UV sealants.",
    srv3Title: "3D Modeling & Sculpting",
    srv3Desc: "Custom character creation based on your concept art, photo references, or tabletop miniatures, optimized for clean printing.",
    srv4Title: "Laser Engraving & Cutting",
    srv4Desc: "High-precision laser processing of hardwoods, acrylics, plaques, and multi-layered architectural relief panels.",

    // Workshop
    workshopTitle: "Inside The Workshop",
    workshopSubtitle: "Step into our maker studio and discover every phase of production.",

    // About
    aboutTitle: "The Craftsmen Behind Print & Paint",
    aboutSubtitle: "We are Peyo and Hristo — united by our passion for technological perfection and artistic detail.",

    // Contact
    contactTitle: "Place Your Custom Order",
    contactSubtitle: "Have a favorite character in mind, a tabletop gaming project, or need a truly unique gift? Reach out to us!",
    contactStudioTitle: "Print & Paint Studio",
    contactStudioDesc: "Sofia, Bulgaria · Shipping nationwide and across Europe with trackable shipping and inspection prior to payment.",
    contactDirectCall: "Or call us directly:",
    formName: "Full Name *",
    formEmail: "Email Address *",
    formPhone: "Phone Number *",
    formProjectId: "Project Reference / ID",
    formProjectIdHint: "(Automatically filled on figure click, or enter manually)",
    formService: "Selected Service *",
    formServiceOpt1: "3D Printing & Hand Painting Figurine",
    formServiceOpt2: "3D Printing Only (Raw / Ready to Paint)",
    formServiceOpt3: "Custom 3D Sculpting",
    formServiceOpt4: "Laser Cutting / Engraving",
    formServiceOpt5: "Other Custom Project",
    formSize: "Estimated Size / Scale",
    formMessage: "Project Description & Specifics *",
    formFile: "Attach model or photo (STL, OBJ, JPG, PNG, PDF)",
    formFileText: "Drag files here or click to browse",
    formFileHint: "Up to 5 files, 10 MB total",
    formSubmit: "Submit Order Request ↗",
    formSending: "Sending your request…",
    formSuccess: "Thank you! Your request has been sent to contact@printnpaint.net. We will get back to you within 24 hours.",

    // Placeholders
    placeholderProjectId: "e.g. PNP-001 or click 'Order' on a figurine",
    placeholderName: "John Doe",
    placeholderPhone: "+359 8... or intl format",
    placeholderEmail: "john@example.com",
    placeholderSize: "e.g. 20 cm / 1:8 scale",
    placeholderMessage: "Tell us about the figurine, favorite character, desired colors, deadline...",

    // Founder roles & direct contact
    founder1Role: "3D Printing & Engineering",
    founder2Role: "Artist & Master Painter",
    contactPeyo: "Peyo Videv:",
    contactHristo: "Hristo Stanilov:",
    contactEmailLabel: "Email:",
    footerPhone1: "+359 898 624 880 (Peyo)",
    footerPhone2: "+359 885 852 169 (Hristo)",

    // Footer
    footerAbout: "Professional 3D printing, artisan hand painting, laser engraving, and custom sculptures in Sofia, Bulgaria.",
    footerLocation: "Sofia, Bulgaria · Fast delivery with Econt & Speedy",
    footerRights: "All rights reserved.",
    footerDevBy: "Crafted by",
    footerTop: "Top ↑"
  }
};
