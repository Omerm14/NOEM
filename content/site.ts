// All site copy lives here. Hebrew is the primary language; English mirrors it.
// Items in [brackets] are placeholders waiting for the atelier's real details.

export const contact = {
  whatsapp: "972542270540",
  phones: [
    { label: "054-227-0540", href: "tel:+972542270540" },
    { label: "052-601-2220", href: "tel:+972526012220" },
  ],
  instagram: "noem.flowers",
  web: "www.noem-atelier.com",
};

// Canonical address of the live site (used for metadata, sitemap, robots).
export const siteUrl = "https://www.noem-atelier.com";

export const media = {
  hero: "/media/hero.mp4",
  heroPoster: "/media/hero-poster.jpg",
  heroVertical: "/media/hero-vertical.mp4",
  heroVerticalPoster: "/media/hero-vertical-poster.jpg",
  logoOlive: "/media/logo-olive.png",
  logoCream: "/media/logo-cream.png",
  dahlia: "/media/bouquet-dahlia",
  bag: "/media/bouquet-bag",
  window: "/media/bouquet-window",
  anthurium: "/media/anthurium",
};

export type Locale = "he" | "en";

export type Bouquet = {
  id: string;
  name: string;
  note: string;
  price: string;
  image: string;
  position?: string;
  alt: string;
};

export type Dict = {
  locale: Locale;
  dir: "rtl" | "ltr";
  meta: { title: string; description: string };
  announcement: string;
  nav: { href: string; label: string }[];
  switchLabel: string;
  switchHref: string;
  switchAria: string;
  order: string;
  menu: string;
  close: string;
  hero: { line1: string; line2: string; explore: string; whatsapp: string; videoLabel: string };
  quote: { text: string; by: string };
  collection: { eyebrow: string; title: string; intro: string; cta: string; waMessage: (name: string) => string; bouquets: Bouquet[] };
  steps: { n: string; title: string; text: string }[];
  services: { eyebrow: string; title: string; more: string; items: { n: string; title: string; text: string; id: string }[] };
  atelier: { eyebrow: string; title1: string; title2: string; p1: string; p2: string; cta: string; alt: string };
  subscription: { eyebrow: string; title: string; cta: string; waMessage: string };
  gallery: { title: string };
  footer: { tagline: string; visit: string; address: string; atelierCol: string; rights: string };
};

export const he: Dict = {
  locale: "he",
  dir: "rtl",
  meta: {
    title: "NOÉM — אטלייה פרחים",
    description: "זרי פרחים יוקרתיים בעבודת יד, מינויים, אירועים וחתונות. שם פרחים הופכים לאמנות.",
  },
  announcement: "כל זר נקשר ביד באטלייה · משלוחים ב[אזור משלוח]",
  nav: [
    { href: "#collection", label: "זרים" },
    { href: "#subscriptions", label: "מינויים" },
    { href: "#events", label: "אירועים" },
    { href: "#corporate", label: "עסקים" },
    { href: "#workshops", label: "סדנאות" },
  ],
  switchLabel: "EN",
  switchHref: "/en/",
  switchAria: "Switch to English",
  order: "להזמנה",
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
    text: "„אני עובדת עם מה שהעונה מביאה — מנתור, דליה, טוודיה תכולה — ומשאירה לכל גבעול קצת מהפראות שלו.״",
    by: "[שם המייסדת], מעצבת פרחים",
  },
  collection: {
    eyebrow: "הקולקציה",
    title: "זרי העונה",
    intro: "בוחרים זר, שולחים לנו הודעה, ואנחנו מאשרים את פרחי היום, את הכרטיס ואת חלון המשלוח.",
    cta: "להזמנה בוואטסאפ",
    waMessage: (name) => `שלום NOÉM, אשמח להזמין את הזר „${name}״.`,
    bouquets: [
      {
        id: "atelier",
        name: "האטלייה",
        note: "הזר החתום שלנו: דליות, מנתור וטוודיה בשמנת, ורוד עדין ותכלת.",
        price: "₪ [מחיר]",
        image: media.dahlia,
        alt: "דליות לבנות וורודות עם טוודיה תכולה",
      },
      {
        id: "grand",
        name: "מחווה גדולה",
        note: "קומפוזיציה נדיבה ואוורירית, בשקית החתומה של האטלייה.",
        price: "₪ [מחיר]",
        image: media.bag,
        position: "center 30%",
        alt: "זר פסטל גדול בשקית NOÉM",
      },
      {
        id: "florist",
        name: "בחירת הפלוריסטית",
        note: "ספרו לנו מה האירוע ומה האווירה — נרכיב מהגבעולים הטובים של היום.",
        price: "החל מ־₪ [מחיר]",
        image: media.window,
        position: "center 35%",
        alt: "זר עם מנתור אפרסקי ועשבים ירוקים ליד חלון",
      },
    ],
  },
  steps: [
    { n: "01", title: "בוחרים", text: "זר מהקולקציה, או בחירת הפלוריסטית." },
    { n: "02", title: "שולחים הודעה", text: "לחיצה אחת פותחת וואטסאפ עם שם הזר. את הפרטים נאשר איתכם אישית." },
    { n: "03", title: "נמסר ביד", text: "עטוף, עם כרטיס בכתב יד, עד הדלת בשקית של NOÉM." },
  ],
  services: {
    eyebrow: "מעבר לזר",
    title: "השירותים של האטלייה",
    more: "לפרטים",
    items: [
      { id: "subscriptions", n: "I.", title: "מינויים", text: "פרחים טריים בבית בכל שבוע או בכל חודש, בהתאם לעונה." },
      { id: "events", n: "II.", title: "אירועים וחתונות", text: "זרי כלה, עיצוב שולחנות והתקנות — מהסקיצה הראשונה ועד היום עצמו." },
      { id: "corporate", n: "III.", title: "עסקים", text: "סידורים שבועיים ללובי, למשרד ולבוטיק, ומתנות ללקוחות." },
      { id: "workshops", n: "IV.", title: "סדנאות", text: "ערבים בקבוצה קטנה באטלייה: לומדים להרכיב, ויוצאים עם זר." },
    ],
  },
  atelier: {
    eyebrow: "האטלייה",
    title1: "כל פרט,",
    title2: "בכוונה.",
    p1: "[פסקה קצרה על המייסדת: איפה למדה, למה פתחה את NOÉM, ומה מייחד את דרך העבודה באטלייה.]",
    p2: "מהכרטיס בכתב יד ועד הסרט על השקית — שום דבר לא יוצא מהאטלייה במקרה.",
    cta: "הסיפור שלנו",
    alt: "כרטיס NOÉM מונח על זר דליות",
  },
  subscription: {
    eyebrow: "מינוי פרחים",
    title: "קומפוזיציה חדשה על השולחן, בכל שבוע.",
    cta: "להתחיל מינוי",
    waMessage: "שלום NOÉM, אשמח לשמוע על מינוי פרחים.",
  },
  gallery: { title: "מהאטלייה" },
  footer: {
    tagline: "שם פרחים הופכים לאמנות.",
    visit: "ביקור ויצירת קשר",
    address: "[כתובת האטלייה]",
    atelierCol: "האטלייה",
    rights: "© NOÉM אטלייה פרחים",
  },
};

export const en: Dict = {
  locale: "en",
  dir: "ltr",
  meta: {
    title: "NOÉM — Flower Atelier",
    description: "High-end bouquets composed by hand, subscriptions, events and weddings. Where flowers become art.",
  },
  announcement: "Hand-tied daily at the atelier · Delivery across [DELIVERY AREA]",
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
    text: "“I compose with what the season offers — stock, dahlia, star-shaped tweedia — and let each stem keep a little of its wildness.”",
    by: "[Founder name], Florist",
  },
  collection: {
    eyebrow: "The Collection",
    title: "Bouquets of the season",
    intro: "Choose a bouquet, send us a message, and we will confirm the flowers of the day, the card and the delivery window.",
    cta: "Order on WhatsApp",
    waMessage: (name) => `Hello NOÉM, I'd like to order the “${name}” bouquet.`,
    bouquets: [
      { id: "atelier", name: "The Atelier", note: "Our signature: dahlias, stock and tweedia in cream, blush and powder blue.", price: "₪ [PRICE]", image: media.dahlia, alt: "White and blush dahlias with blue tweedia" },
      { id: "grand", name: "Grand Gesture", note: "A generous, airy composition, presented in the atelier's signature bag.", price: "₪ [PRICE]", image: media.bag, position: "center 30%", alt: "A large pastel bouquet in a NOÉM gift bag" },
      { id: "florist", name: "Florist's Choice", note: "Tell us the occasion and the mood. We compose from the best stems of the day.", price: "from ₪ [PRICE]", image: media.window, position: "center 35%", alt: "Bouquet with peach stock and pale green grasses by a window" },
    ],
  },
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
      { id: "subscriptions", n: "I.", title: "Subscriptions", text: "Fresh flowers at home every week or every month, composed to the season." },
      { id: "events", n: "II.", title: "Events & Weddings", text: "Bridal bouquets, tablescapes and installations, designed with you from the first sketch." },
      { id: "corporate", n: "III.", title: "Corporate", text: "Weekly arrangements for lobbies, offices and boutiques, plus client gifting." },
      { id: "workshops", n: "IV.", title: "Workshops", text: "Small-group evenings at the atelier: learn to compose and take your bouquet home." },
    ],
  },
  atelier: {
    eyebrow: "The Atelier",
    title1: "Every detail,",
    title2: "considered.",
    p1: "[A short paragraph about the founder: where she trained, why she opened NOÉM, and what makes the atelier's way of working different.]",
    p2: "From the hand-written card to the ribbon on the bag, nothing leaves the atelier by accident.",
    cta: "Our story",
    alt: "NOÉM card resting on a bouquet of dahlias",
  },
  subscription: {
    eyebrow: "Flower subscription",
    title: "A new composition on your table, every week.",
    cta: "Start a subscription",
    waMessage: "Hello NOÉM, I'd like to hear about a flower subscription.",
  },
  gallery: { title: "From the atelier" },
  footer: {
    tagline: "Where flowers become art.",
    visit: "Visit & contact",
    address: "[Atelier address]",
    atelierCol: "Atelier",
    rights: "© NOÉM Flower Atelier",
  },
};

export const waLink = (text?: string) =>
  `https://wa.me/${contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// 404 page (app/global-not-found.tsx) — bilingual on one page, Hebrew first.
export const notFoundCopy = {
  he: { title: "הדף שחיפשתם לא נמצא.", text: "אולי הקישור השתנה, ואולי הוא פשוט נבל. הזרים שלנו מחכים בדף הבית.", home: "לדף הבית", whatsapp: "הזמנה בוואטסאפ" },
  en: { title: "This page could not be found.", home: "Back to the atelier" },
  metaTitle: "404 — NOÉM",
};
