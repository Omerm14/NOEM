// All site copy lives here. Hebrew is the primary language; English mirrors it.
// Items in [brackets] are placeholders waiting for the atelier's real details — they are never rendered
// (see `shown()` below) and scripts/check-placeholders.mjs fails the build if one reaches the output.
//
// Canonical business record (NAP): use EXACTLY these everywhere online — site, schema, Google Business
// Profile, Bing Places, Apple, Instagram, directories. Name "NOÉM Flower Atelier" · primary phone
// +972-54-227-0540 (WhatsApp) · areas = `areas` below.

export const contact = {
  whatsapp: "972542270540",
  phones: [
    { label: "054-227-0540", intl: "+972 54-227-0540", href: "tel:+972542270540" },
    { label: "052-601-2220", intl: "+972 52-601-2220", href: "tel:+972526012220" },
  ],
  instagram: "noem.flowers",
  web: "www.noem-atelier.com",
};

// Canonical address of the live site (used for metadata, sitemap, robots, structured data, llms.txt).
export const siteUrl = "https://www.noem-atelier.com";
// Bump when the page content changes (sitemap lastModified, WebPage dateModified, statement date).
export const contentUpdated = "2026-11-27";
// Google Tag Manager container (owner-provided).
export const gtmId = "GTM-PF4QHZVZ";

/** A copy string still waiting for real content ("[...]") is not rendered anywhere. */
export const isPlaceholder = (v?: string) => !v || /\[[^\]]*\]/.test(v);
export const shown = (v?: string) => (isPlaceholder(v) ? undefined : v);

/** Delivery area (service-area business — no public address). Hod HaSharon is served but is NOT in the Ono Valley. */
export type Area = { id: string; he: string; en: string; type: "City" | "Place"; ono: boolean; alt?: string[] };
export const areas: Area[] = [
  { id: "kiryat-ono", he: "קריית אונו", en: "Kiryat Ono", type: "City", ono: true, alt: ["קרית אונו"] },
  { id: "savyon", he: "סביון", en: "Savyon", type: "City", ono: true },
  { id: "ganei-tikva", he: "גני תקווה", en: "Ganei Tikva", type: "City", ono: true, alt: ["גני תקוה"] },
  { id: "yehud", he: "יהוד", en: "Yehud", type: "City", ono: true },
  { id: "monosson", he: "מונוסון", en: "Monosson", type: "Place", ono: true },
  { id: "ramat-efal", he: "רמת אפעל", en: "Ramat Ef'al", type: "Place", ono: true, alt: ["Ramat Efal"] },
  { id: "kfar-maas", he: "כפר מעש", en: "Kfar Ma'as", type: "Place", ono: true, alt: ["Kfar Maas"] },
  { id: "givat-shmuel", he: "גבעת שמואל", en: "Giv'at Shmuel", type: "City", ono: true, alt: ["Givat Shmuel"] },
  { id: "magshimim", he: "מגשימים", en: "Magshimim", type: "Place", ono: true },
  { id: "bnei-atarot", he: "בני עטרות", en: "Bnei Atarot", type: "Place", ono: true },
  { id: "hod-hasharon", he: "הוד השרון", en: "Hod HaSharon", type: "City", ono: false },
];

export const media = {
  // Hero still from the brand file (NOEM_front_vector_10x10cm). The old stand-in films stay in /media for later.
  heroImage: "/media/hero-anthurium",
  ogImage: "/media/og-anthurium.jpg",
  logoOlive: "/media/logo-olive.svg",
  logoCream: "/media/logo-cream.svg",
  logoPng: "/media/logo-512.png",
  bagYellow: "/media/bag-yellow",
  bagsPair: "/media/bags-pair",
  vaseKitchen: "/media/vase-kitchen",
  pastelWrapped: "/media/pastel-wrapped",
  anthuriumWrapped: "/media/anthurium-wrapped",
  vaseSunflower: "/media/vase-sunflower",
  yellowWrapped: "/media/yellow-wrapped",
  boxPastel: "/media/box-pastel",
};

/** Width of the large variant of each photo (studio PNGs from Drive are 1086px wide; phone photos 1400). */
const largeWidth: Record<string, number> = {
  [media.pastelWrapped]: 1086,
  [media.anthuriumWrapped]: 1086,
  [media.vaseSunflower]: 1086,
  [media.yellowWrapped]: 1086,
};
export const bigWidth = (base: string) => largeWidth[base] ?? 1400;
export const large = (base: string) => `${base}-${bigWidth(base)}.webp`;

export type Locale = "he" | "en";

export type Bouquet = {
  id: string;
  name: string;
  note: string;
  image: string;
  position?: string;
  alt: string;
};

export type Dict = {
  locale: Locale;
  dir: "rtl" | "ltr";
  meta: { title: string; description: string; ogDescription: string; ogAlt: string };
  skip: string;
  newTab: string;
  homeLabel: string;
  announcement: string;
  nav: { href: string; label: string }[];
  switchLabel: string;
  switchHref: string;
  switchAria: string;
  order: string;
  orderMessage: string;
  menu: string;
  close: string;
  hero: { line1: string; line2: string; explore: string; whatsapp: string; videoLabel: string };
  quote: { text: string; by: string };
  collection: { title: string; handmade: string; about: string; cta: string; waMessage: (name: string) => string; bouquets: Bouquet[] };
  howToOrder: string;
  steps: { n: string; title: string; text: string }[];
  services: { eyebrow: string; title: string; more: string; items: { n: string; title: string; text: string; id: string; wa: string }[] };
  atelier: { eyebrow: string; title1: string; title2: string; p1: string; p2: string; cta: string; alt: string };
  subscription: { name: string; tagline: string; perMonth: string; choose: string; tiers: { id: string; name: string; price: string }[]; waMessage: (tier: string, price: string) => string };
  gallery: { title: string; alts: string[]; label: string; prev: string; next: string };
  faq: { title: string; items: { id: string; q: string; a: string }[] };
  footer: { tagline: string; visit: string; delivery: string; atelierCol: string; rights: string; statementLink: string };
  statement: {
    title: string;
    close: string;
    sections: { h: string; p?: string; list?: string[] }[];
    updated: string;
  };
};

export const he: Dict = {
  locale: "he",
  dir: "rtl",
  meta: {
    title: "NOÉM | FLOWER ATELIER",
    description: "זר פרחים יוקרתי בעבודת יד, עד הדלת בבקעת אונו ובהוד השרון. מנוי פרחים שבועי, פרחים לחתונה ולאירועים, סידורים לעסקים. הזמנה בוואטסאפ.",
    // og:description is what WhatsApp shows under the title — it keeps the brand line.
    ogDescription: "זרי פרחים יוקרתיים בעבודת יד, מנויים, אירועים וחתונות. WHERE FLOWERS BECOME ART.\u200E",
    ogAlt: "אנתוריום לבן, NOÉM Flower Atelier",
  },
  skip: "דילוג לתוכן הראשי",
  newTab: "(נפתח בחלון חדש)",
  homeLabel: "NOÉM, דף הבית",
  announcement: "L’art de la fleur",
  nav: [
    { href: "#collection", label: "זרים" },
    { href: "#subscriptions", label: "מנויים" },
    { href: "#events", label: "אירועים" },
    { href: "#corporate", label: "עסקים" },
    { href: "#workshops", label: "סדנאות" },
  ],
  switchLabel: "EN",
  switchHref: "/en/",
  switchAria: "Switch to English",
  order: "להזמנה",
  orderMessage: "שלום NOÉM, אשמח להזמין זר.",
  menu: "תפריט",
  close: "סגירה",
  hero: {
    // The hero line is the brand signature: English, in capitals, on both languages.
    line1: "Where flowers",
    line2: "become art.",
    explore: "לקולקציה",
    whatsapp: "הזמנה בוואטסאפ",
    videoLabel: "זרים של NOÉM באטלייה",
  },
  quote: {
    text: "\"אני עובדת עם מה שהעונה מביאה, מנתור ודליה ועד טוודיה תכולה, ומשאירה לכל גבעול קצת מהפראות שלו.\"",
    by: "[שם המייסדת], מעצבת פרחים",
  },
  collection: {
    title: "Our Collection",
    handmade: "כל זר פרחים נקשר ביד באטלייה, ואין שני זרים זהים. הוא נבנה מהפרחים שיש לנו באותו יום ולפי התקציב שלכם, ולכן כל זר מתומחר בנפרד.",
    about: "NOÉM היא אטלייה לזרי פרחים בעבודת יד בבקעת אונו ובהוד השרון. אנחנו מכינים זרים במשלוח עד הבית, מנוי פרחים שבועי החל מ-₪650 לחודש, ופרחים לחתונות, לאירועים ולעסקים. ההזמנה בוואטסאפ או בטלפון.",
    cta: "להזמנה בוואטסאפ",
    waMessage: (name) => `שלום NOÉM, אשמח להזמין את הזר \"${name}\". התקציב שלי: `,
    bouquets: [
      {
        id: "atelier",
        name: "The Atelier",
        note: "הזר החתום שלנו, עם מנתור, גרברה וטוודיה בגוני שמנת, ורוד עדין ותכלת.",
        image: media.pastelWrapped,
        position: "center 35%",
        alt: "זר פסטל של מנתור, גרברות וטוודיה תכולה בעטיפה אפרסקית עם סרט",
      },
      {
        id: "grand",
        name: "Grand Gesture",
        note: "קומפוזיציה נדיבה ואוורירית, עטופה ביד ועם כרטיס של האטלייה.",
        image: media.anthuriumWrapped,
        position: "center 35%",
        alt: "זר לבן וירוק עם אנתוריום, לשון חמותי, שושנים וגרווילאה בעטיפה לבנה",
      },
      {
        id: "florist",
        name: "Florist's Choice",
        note: "ספרו לנו מה האירוע ומה האווירה, ונרכיב זר מהגבעולים הטובים של היום.",
        image: media.vaseSunflower,
        position: "center 30%",
        alt: "סידור פרחים באגרטל עם חמנייה, הורטנזיה, ורדים וציפורנים בגוני ורוד ובורדו",
      },
    ],
  },
  howToOrder: "How to order",
  steps: [
    { n: "01", title: "Choose", text: "זר מהקולקציה, או בחירת הפלוריסטית." },
    { n: "02", title: "Message us", text: "לחיצה אחת פותחת וואטסאפ עם שם הזר. את הפרטים נאשר איתכם אישית." },
    { n: "03", title: "Hand-delivered", text: "עטוף, עם כרטיס בכתב יד, עד הדלת בשקית של NOÉM." },
  ],
  services: {
    eyebrow: "Beyond the bouquet",
    title: "The atelier's services",
    more: "לפרטים",
    items: [
      { id: "subscriptions", n: "I.", title: "Subscriptions", text: "Lé Club Floral הוא מנוי פרחים שבועי. זר חדש בבית בכל שבוע, בשלוש חבילות, החל מ-₪650 לחודש.", wa: "שלום NOÉM, אשמח לשמוע על מנוי פרחים." },
      { id: "events", n: "II.", title: "Events & Weddings", text: "זר כלה, פרחים לחתונה, עיצוב שולחנות והתקנות, מהסקיצה הראשונה ועד היום עצמו.", wa: "שלום NOÉM, אשמח לשמוע על פרחים לאירוע או לחתונה." },
      { id: "corporate", n: "III.", title: "Corporate", text: "פרחים למשרד, ללובי ולבוטיק בסידור שבועי קבוע, ומתנות פרחים ללקוחות.", wa: "שלום NOÉM, אשמח לשמוע על פרחים לעסק, סידורים קבועים ומתנות ללקוחות." },
      { id: "workshops", n: "IV.", title: "Workshops", text: "סדנת פרחים בקבוצה קטנה, במקום שנקבע מראש. לומדים להרכיב זר ויוצאים איתו הביתה.", wa: "שלום NOÉM, אשמח לשמוע על סדנאות הפרחים." },
    ],
  },
  atelier: {
    eyebrow: "The Atelier",
    title1: "Every detail,",
    title2: "considered.",
    p1: "[פסקה קצרה על המייסדת: איפה למדה, למה פתחה את NOÉM, ומה מייחד את דרך העבודה באטלייה.]",
    p2: "מהכרטיס בכתב יד ועד הסרט על השקית, שום דבר לא יוצא מהאטלייה במקרה.",
    cta: "הסיפור שלנו",
    alt: "זר צהוב בשקית NOÉM עם כרטיס בכתב יד",
  },
  subscription: {
    name: "Lé Club Floral",
    tagline: "יוקרה בכל שבוע.",
    perMonth: "לחודש",
    choose: "להצטרפות",
    tiers: [
      { id: "essentiel", name: "L’Essentiel", price: "₪650" },
      { id: "signature", name: "Signature", price: "₪850" },
      { id: "jardin", name: "Le Jardin Privé", price: "₪1,500" },
    ],
    waMessage: (tier, price) => `שלום NOÉM, אשמח להצטרף ל-Lé Club Floral במנוי ${tier} (${price} לחודש).`,
  },
  gallery: {
    title: "From the atelier",
    label: "גלריית עבודות של NOÉM, אפשר לגלול הצידה",
    prev: "התמונה הקודמת",
    next: "התמונה הבאה",
    alts: [
      "זר גרברות צהובות וחרציות בעטיפת שמנת עם סרט וכרטיס NOÉM",
      "סידור פרחים בקופסה עם ורדים, דלפיניום תכלת וכרטיס NOÉM",
      "סידור פרחים ורוד ותכלת באגרטל על שיש המטבח",
      "שני זרים עטופים בשקיות NOÉM עם כרטיסים",
    ],
  },
  faq: {
    title: "Questions",
    items: [
      { id: "delivery", q: "לאן אתם עושים משלוח פרחים?", a: "NOÉM מוסרת זרים ומנויים ביד בכל בקעת אונו, בקריית אונו, סביון, גני תקווה, יהוד, מונוסון, רמת אפעל, כפר מעש, גבעת שמואל, מגשימים ובני עטרות, וגם בהוד השרון." },
      { id: "order", q: "איך מזמינים זר פרחים?", a: "לוחצים על \"להזמנה בוואטסאפ\" ליד הזר שבחרתם, ונפתחת הודעה עם שם הזר. מוסיפים תקציב, תאריך ונוסח לכרטיס, ואנחנו מאשרים איתכם אישית את פרחי היום ואת חלון המשלוח. אפשר גם להתקשר ל-054-227-0540." },
      { id: "price", q: "כמה עולה זר פרחים?", a: "לזרים של NOÉM אין מחיר קבוע. כל זר נקשר ביד מהפרחים שיש באטלייה באותו יום ומתומחר לפי התקציב שלכם." },
      { id: "subscription", q: "איך עובד מנוי הפרחים?", a: "Lé Club Floral הוא מנוי הפרחים השבועי של NOÉM. בכל שבוע מגיע הביתה זר חדש, ויש שלוש חבילות: L’Essentiel ב-₪650, Signature ב-₪850 ו-Le Jardin Privé ב-₪1,500 לחודש." },
      { id: "weddings", q: "אתם מעצבים פרחים לחתונה וזר כלה?", a: "כן. NOÉM מעצבת זרי כלה, שולחנות והתקנות פרחים לחתונות ולאירועים, מהסקיצה הראשונה ועד היום עצמו. כדאי לפנות אלינו מוקדם ככל האפשר." },
      { id: "corporate", q: "יש לכם פרחים למשרד ומתנות לעסקים?", a: "כן. אנחנו מכינים סידורי פרחים שבועיים ללובי, למשרד ולבוטיק, ומתנות פרחים ללקוחות, בתיאום אישי." },
      { id: "atelier", q: "איפה נמצאת האטלייה?", a: "ל-NOÉM אין חנות או מקום פתוח לקהל. כל ההזמנות נמסרות במשלוח עד הבית בבקעת אונו ובהוד השרון, וסדנאות הפרחים מתקיימות במקום שנקבע מראש ונמסר בעת ההרשמה." },
      { id: "includes", q: "מה מגיע עם הזר?", a: "כל זר מגיע עטוף, עם כרטיס בכתב יד, עד הדלת בשקית של NOÉM." },
    ],
  },
  footer: {
    tagline: "WHERE FLOWERS BECOME ART.",
    visit: "Delivery & contact",
    delivery: "בקעת אונו והסביבה · הוד השרון",
    atelierCol: "Atelier",
    rights: "© NOÉM אטלייה פרחים",
    statementLink: "הצהרת נגישות",
  },
  statement: {
    title: "Accessibility statement",
    close: "סגירה",
    sections: [
      { h: "מחויבות", p: "NOÉM רואה חשיבות בהנגשת האתר לאנשים עם מוגבלות. האתר הותאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע\"ג-2013, ולתקן הישראלי ת\"י 5568 ברמה AA (המבוסס על WCAG 2.0), ונבדק מול WCAG 2.1 ברמה AA." },
      { h: "ההתאמות שבוצעו", list: [
        "ניווט מלא במקלדת, כולל קישור לדילוג לתוכן הראשי ופוקוס גלוי",
        "טקסט חלופי לכל תמונה בעלת תוכן",
        "ניגודיות צבעים לפי התקן, כולל טקסט על גבי תמונת הפתיחה",
        "הגדרת שפה וכיוון קריאה לכל קטע בעברית ובאנגלית",
        "התאמה להגדלת טקסט עד 200% ולמסכים צרים",
        "כיבוי אנימציות למי שהגדיר הפחתת תנועה במכשיר",
        "תפריט ותיבות דו-שיח עם ניהול פוקוס",
        "תוסף נגישות לשינויי תצוגה נוספים (רכיב צד שלישי)",
      ] },
      { h: "אופן הבדיקה", p: "האתר נבדק בכלי בדיקה אוטומטיים (axe) ובמעבר ידני במקלדת, בדסקטופ ובמובייל." },
      { h: "מגבלות ידועות", p: "תוכן בשירותים חיצוניים שאליהם האתר מקשר (WhatsApp, Instagram) ותוסף הנגישות אינם בשליטתנו המלאה. תמונת הפתיחה היא דקורטיבית." },
      { h: "הסדרי נגישות פיזיים", p: "ל-NOÉM אין חנות או מקום קבלת קהל קבוע. ההזמנות נמסרות במשלוח עד הבית, וסדנאות מתקיימות במקום שנקבע מראש. ספרו לנו בעת ההרשמה על צורכי נגישות, ונדאג לבחור מקום ולהתאים את הסדנה." },
      { h: "פנייה בנושא נגישות", p: "נתקלתם בקושי? נשמח לשמוע ולתקן. אפשר לפנות אלינו בטלפון או בוואטסאפ במספר 054-227-0540." },
      { h: "פרטיות", p: "האתר משתמש ב-Google Tag Manager וב-Google Analytics למדידת ביקורים ולחיצות. שירותים אלה עשויים לשמור עוגיות בדפדפן, והמידע הסטטיסטי מועבר ל-Google. אפשר לחסום זאת בהגדרות העוגיות בדפדפן או בתוסף הביטול של Google Analytics (tools.google.com/dlpage/gaoptout). בנוסף נעשה שימוש ב-Vercel Analytics, ללא עוגיות. תוסף הנגישות נטען משרת של צד שלישי (Skynet Technologies) ושומר את העדפות התצוגה שלכם בדפדפן. לשאלות בנושא פרטיות: 054-227-0540." },
    ],
    updated: "עודכן: 27 בנובמבר 2026",
  },
};

export const en: Dict = {
  locale: "en",
  dir: "ltr",
  meta: {
    title: "NOÉM | FLOWER ATELIER",
    description: "Hand-tied luxury bouquets delivered across the Ono Valley and Hod HaSharon. Weekly flower subscriptions, weddings, events and corporate florals.",
    ogDescription: "High-end bouquets composed by hand, subscriptions, events and weddings. WHERE FLOWERS BECOME ART.",
    ogAlt: "White anthurium, NOÉM Flower Atelier",
  },
  skip: "Skip to main content",
  newTab: "(opens in a new tab)",
  homeLabel: "NOÉM home",
  announcement: "L’art de la fleur",
  nav: [
    { href: "#collection", label: "Bouquets" },
    { href: "#subscriptions", label: "Subscriptions" },
    { href: "#events", label: "Events" },
    { href: "#corporate", label: "Corporate" },
    { href: "#workshops", label: "Workshops" },
  ],
  switchLabel: "עב",
  switchHref: "/",
  switchAria: "עברית",
  order: "Order",
  orderMessage: "Hello NOÉM, I'd like to order a bouquet.",
  menu: "Menu",
  close: "Close",
  hero: {
    line1: "Where flowers",
    line2: "become art.",
    explore: "Explore the collection",
    whatsapp: "Order on WhatsApp",
    videoLabel: "NOÉM bouquets at the atelier",
  },
  quote: {
    text: "“I work with what the season brings, from stock and dahlias to blue tweedia, and let each stem keep a little of its wildness.”",
    by: "[Founder name], Florist",
  },
  collection: {
    title: "Our Collection",
    handmade: "Every bouquet is tied by hand at the atelier, and no two are alike. We compose each one from the flowers we have that day and to your budget, so every bouquet is priced individually.",
    about: "NOÉM is a flower atelier serving the Ono Valley and Hod HaSharon in Israel. We make hand-tied bouquets delivered to the door, a weekly flower subscription from ₪650 a month, and flowers for weddings, events and businesses. Orders by WhatsApp or phone.",
    cta: "Order on WhatsApp",
    waMessage: (name) => `Hello NOÉM, I'd like to order the “${name}” bouquet. My budget: `,
    bouquets: [
      { id: "atelier", name: "The Atelier", note: "Our signature bouquet, with stock, gerbera and tweedia in cream, blush and powder blue.", image: media.pastelWrapped, position: "center 35%", alt: "Pastel bouquet of stock, gerberas and blue tweedia in a peach wrap with a ribbon" },
      { id: "grand", name: "Grand Gesture", note: "A generous, airy composition, wrapped by hand and carded by the atelier.", image: media.anthuriumWrapped, position: "center 35%", alt: "White and green bouquet with anthurium, calla lilies, lilies and grevillea in a white wrap" },
      { id: "florist", name: "Florist's Choice", note: "Tell us the occasion and the mood. We compose from the best stems of the day.", image: media.vaseSunflower, position: "center 30%", alt: "Vase arrangement with a sunflower, hydrangea, roses and carnations in pink and burgundy" },
    ],
  },
  howToOrder: "How to order",
  steps: [
    { n: "01", title: "Choose", text: "Pick a bouquet from the collection, or ask for a florist's choice." },
    { n: "02", title: "Message us", text: "One tap opens WhatsApp with your bouquet already named. We confirm the details personally." },
    { n: "03", title: "Hand-delivered", text: "Wrapped, carded and brought to the door in the NOÉM bag." },
  ],
  services: {
    eyebrow: "Beyond the bouquet",
    title: "The atelier's services",
    more: "Discover",
    items: [
      { id: "subscriptions", n: "I.", title: "Subscriptions", text: "Lé Club Floral is our weekly flower subscription. A new bouquet at home every week, in three tiers, from ₪650 a month.", wa: "Hello NOÉM, I'd like to hear about a flower subscription." },
      { id: "events", n: "II.", title: "Events & Weddings", text: "Bridal bouquets, wedding flowers, tablescapes and installations, from the first sketch to the day itself.", wa: "Hello NOÉM, I'd like to hear about flowers for an event or wedding." },
      { id: "corporate", n: "III.", title: "Corporate", text: "Flowers for offices, lobbies and boutiques on a fixed weekly schedule, plus floral gifts for clients.", wa: "Hello NOÉM, I'd like to hear about flowers for my business, regular arrangements and client gifts." },
      { id: "workshops", n: "IV.", title: "Workshops", text: "A small-group flower workshop at a venue arranged in advance. Learn to compose a bouquet and take it home.", wa: "Hello NOÉM, I'd like to hear about your flower workshops." },
    ],
  },
  atelier: {
    eyebrow: "The Atelier",
    title1: "Every detail,",
    title2: "considered.",
    p1: "[A short paragraph about the founder: where she trained, why she opened NOÉM, and what makes the atelier's way of working different.]",
    p2: "From the hand-written card to the ribbon on the bag, nothing leaves the atelier by accident.",
    cta: "Our story",
    alt: "Yellow bouquet in a NOÉM bag with a hand-written card",
  },
  subscription: {
    name: "Lé Club Floral",
    tagline: "Luxury every week.",
    perMonth: "/ month",
    choose: "Join",
    tiers: [
      { id: "essentiel", name: "L’Essentiel", price: "₪650" },
      { id: "signature", name: "Signature", price: "₪850" },
      { id: "jardin", name: "Le Jardin Privé", price: "₪1,500" },
    ],
    waMessage: (tier, price) => `Hello NOÉM, I'd like to join Lé Club Floral with the ${tier} subscription (${price} / month).`,
  },
  gallery: {
    title: "From the atelier",
    label: "NOÉM work gallery, scroll sideways",
    prev: "Previous photo",
    next: "Next photo",
    alts: [
      "Yellow gerbera and chrysanthemum bouquet in a cream wrap with a ribbon and a NOÉM card",
      "Box arrangement with roses, pale blue delphinium and a NOÉM card",
      "Pink and powder-blue arrangement in a vase on a kitchen counter",
      "Two wrapped bouquets in NOÉM bags with cards",
    ],
  },
  faq: {
    title: "Questions",
    items: [
      { id: "delivery", q: "Where do you deliver flowers?", a: "NOÉM hand-delivers bouquets and subscriptions across the Ono Valley, including Kiryat Ono, Savyon, Ganei Tikva, Yehud, Monosson, Ramat Ef'al, Kfar Ma'as, Giv'at Shmuel, Magshimim and Bnei Atarot, and also to Hod HaSharon." },
      { id: "order", q: "How do I order a bouquet?", a: "Tap “Order on WhatsApp” next to the bouquet you like, and a message opens with the bouquet already named. Add your budget, date and card wording, and we confirm the flowers of the day and the delivery window with you personally. You can also call +972 54-227-0540." },
      { id: "price", q: "How much does a bouquet cost?", a: "NOÉM bouquets have no fixed price. Each one is tied by hand from the flowers in the atelier that day and priced to your budget." },
      { id: "subscription", q: "How does the flower subscription work?", a: "Lé Club Floral is NOÉM's weekly flower subscription. A new bouquet arrives every week, in three tiers: L’Essentiel at ₪650, Signature at ₪850 and Le Jardin Privé at ₪1,500 a month." },
      { id: "weddings", q: "Do you design wedding flowers and bridal bouquets?", a: "Yes. NOÉM designs bridal bouquets, tablescapes and floral installations for weddings and events, from the first sketch to the day itself. It's best to reach out as early as you can." },
      { id: "corporate", q: "Do you offer flowers for offices and corporate gifts?", a: "Yes. We make weekly arrangements for lobbies, offices and boutiques, and floral gifts for clients, arranged with you personally." },
      { id: "atelier", q: "Where is the atelier?", a: "NOÉM has no shop or premises open to the public. Every order is delivered to the door across the Ono Valley and Hod HaSharon, and flower workshops are held at a venue arranged in advance and shared when you book." },
      { id: "includes", q: "What comes with the bouquet?", a: "Every bouquet arrives wrapped, carded by hand and brought to the door in the NOÉM bag." },
    ],
  },
  footer: {
    tagline: "WHERE FLOWERS BECOME ART.",
    visit: "Delivery & contact",
    delivery: "Ono Valley & surroundings · Hod HaSharon",
    atelierCol: "Atelier",
    rights: "© NOÉM Flower Atelier",
    statementLink: "Accessibility statement",
  },
  statement: {
    title: "Accessibility statement",
    close: "Close",
    sections: [
      { h: "Commitment", p: "NOÉM wants this site to be usable by everyone, including people with disabilities. It was built to the Israeli Equal Rights for Persons with Disabilities (Service Accessibility) Regulations 2013 and Israeli Standard IS 5568 at level AA (based on WCAG 2.0), and checked against WCAG 2.1 level AA." },
      { h: "What we adjusted", list: [
        "Full keyboard navigation, a skip-to-content link and a visible focus ring",
        "Alternative text for every meaningful image",
        "Colour contrast to the standard, including text over the opening image",
        "Language and reading direction set for every Hebrew and English passage",
        "Support for 200% text zoom and narrow screens",
        "Animations switched off when your device asks for reduced motion",
        "Menu and dialogs with managed focus",
        "An accessibility toolbar for extra display options (third-party component)",
      ] },
      { h: "How we tested", p: "The site was checked with automated tools (axe) and a manual keyboard pass on desktop and mobile." },
      { h: "Known limitations", p: "Content on external services the site links to (WhatsApp, Instagram) and the accessibility toolbar are not fully under our control. The opening image is decorative." },
      { h: "Physical accessibility", p: "NOÉM has no shop or permanent premises. Orders are delivered to the door, and workshops are held at a venue arranged in advance. Tell us about any access needs when you book, and we will choose the venue and adapt the workshop accordingly." },
      { h: "Contact us about accessibility", p: "Something not working for you? We'd like to hear and fix it. Call or WhatsApp us on +972 54-227-0540." },
      { h: "Privacy", p: "The site uses Google Tag Manager and Google Analytics to measure visits and clicks. These services may set cookies in your browser, and the statistics are sent to Google. You can block this in your browser's cookie settings or with the Google Analytics opt-out add-on (tools.google.com/dlpage/gaoptout). It also uses Vercel Analytics, which sets no cookies. The accessibility toolbar loads from a third-party server (Skynet Technologies) and stores your display preferences in your browser. Privacy questions: +972 54-227-0540." },
    ],
    updated: "Updated: 27 November 2026",
  },
};

export const waLink = (text?: string) =>
  `https://wa.me/${contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// 404 page (app/global-not-found.tsx) — bilingual on one page, Hebrew first.
export const notFoundCopy = {
  he: { title: "Page not found.", text: "אולי הקישור השתנה, ואולי הוא פשוט נבל. הזרים שלנו מחכים בדף הבית.", home: "לדף הבית", whatsapp: "הזמנה בוואטסאפ" },
  en: { home: "Back to the atelier" },
  metaTitle: "404 | NOÉM",
};
