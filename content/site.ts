// All site copy lives here. Hebrew is the primary language; English mirrors it.
// Items in [brackets] are placeholders waiting for the atelier's real details.

export const contact = {
  whatsapp: "972542270540",
  phones: [
    { label: "054-227-0540", intl: "+972 54-227-0540", href: "tel:+972542270540" },
    { label: "052-601-2220", intl: "+972 52-601-2220", href: "tel:+972526012220" },
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
  bagYellow: "/media/bag-yellow",
  sunflower: "/media/sunflower-wild",
  bagsPair: "/media/bags-pair",
  vaseBlush: "/media/vase-blush",
  bridalRoses: "/media/bridal-roses",
  anthuriumBridal: "/media/anthurium-bridal",
  vaseKitchen: "/media/vase-kitchen",
};

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
  meta: { title: string; description: string };
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
  collection: { eyebrow: string; title: string; intro: string; handmade: string; cta: string; waMessage: (name: string) => string; bouquets: Bouquet[] };
  steps: { n: string; title: string; text: string }[];
  services: { eyebrow: string; title: string; more: string; items: { n: string; title: string; text: string; id: string; wa: string }[] };
  atelier: { eyebrow: string; title1: string; title2: string; p1: string; p2: string; cta: string; alt: string };
  subscription: { name: string; tagline: string; perMonth: string; choose: string; tiers: { id: string; name: string; price: string }[]; waMessage: (tier: string, price: string) => string };
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
    text: "„אני עובדת עם מה שהעונה מביאה — מנתור, דליה, טוודיה תכולה — ומשאירה לכל גבעול קצת מהפראות שלו.״",
    by: "[שם המייסדת], מעצבת פרחים",
  },
  collection: {
    eyebrow: "הקולקציה",
    title: "זרי העונה",
    intro: "בוחרים זר, שולחים לנו הודעה, ואנחנו מאשרים את פרחי היום, את הכרטיס ואת חלון המשלוח.",
    handmade: "כל זר נקשר ביד באטלייה, ואין שני זרים זהים: הוא נבנה מהפרחים שיש לנו באותו יום ולפי התקציב שלכם, ולכן כל זר מתומחר בנפרד.",
    cta: "להזמנה בוואטסאפ",
    waMessage: (name) => `שלום NOÉM, אשמח להזמין את הזר „${name}״. התקציב שלי: `,
    bouquets: [
      {
        id: "atelier",
        name: "האטלייה",
        note: "הזר החתום שלנו: דליות, מנתור וטוודיה בשמנת, ורוד עדין ותכלת.",
        image: media.dahlia,
        alt: "דליות לבנות וורודות עם טוודיה תכולה",
      },
      {
        id: "grand",
        name: "מחווה גדולה",
        note: "קומפוזיציה נדיבה ואוורירית, בשקית החתומה של האטלייה.",
        image: media.bagYellow,
        position: "center 40%",
        alt: "זר גרברות וחרציות בגווני צהוב בשקית NOÉM",
      },
      {
        id: "florist",
        name: "בחירת הפלוריסטית",
        note: "ספרו לנו מה האירוע ומה האווירה — נרכיב מהגבעולים הטובים של היום.",
        image: media.sunflower,
        position: "center 30%",
        alt: "זר חמניות, הורטנזיה וורדים אפרסקיים מוחזק ביד ליד וילון",
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
      { id: "subscriptions", n: "I.", title: "מינויים", text: "Le Club Floral: זר חדש בבית בכל שבוע, בשלוש חבילות — מ־₪650 לחודש.", wa: "שלום NOÉM, אשמח לשמוע על מינוי פרחים." },
      { id: "events", n: "II.", title: "אירועים וחתונות", text: "זרי כלה, עיצוב שולחנות והתקנות — מהסקיצה הראשונה ועד היום עצמו.", wa: "שלום NOÉM, אשמח לשמוע על פרחים לאירוע או לחתונה." },
      { id: "corporate", n: "III.", title: "עסקים", text: "סידורים שבועיים ללובי, למשרד ולבוטיק, ומתנות ללקוחות.", wa: "שלום NOÉM, אשמח לשמוע על פרחים לעסק — סידורים קבועים ומתנות ללקוחות." },
      { id: "workshops", n: "IV.", title: "סדנאות", text: "ערבים בקבוצה קטנה באטלייה: לומדים להרכיב, ויוצאים עם זר.", wa: "שלום NOÉM, אשמח לשמוע על הסדנאות באטלייה." },
    ],
  },
  atelier: {
    eyebrow: "האטלייה",
    title1: "כל פרט,",
    title2: "בכוונה.",
    p1: "[פסקה קצרה על המייסדת: איפה למדה, למה פתחה את NOÉM, ומה מייחד את דרך העבודה באטלייה.]",
    p2: "מהכרטיס בכתב יד ועד הסרט על השקית — שום דבר לא יוצא מהאטלייה במקרה.",
    cta: "הסיפור שלנו",
    alt: "שני זרים עטופים בשקיות NOÉM עם כרטיס",
  },
  subscription: {
    name: "Le Club Floral",
    tagline: "קצת יוקרה, בכל שבוע.",
    perMonth: "לחודש",
    choose: "להצטרפות",
    tiers: [
      { id: "essentiel", name: "L’Essentiel", price: "₪650" },
      { id: "signature", name: "Signature", price: "₪850" },
      { id: "jardin", name: "Le Jardin Privé", price: "₪1,500" },
    ],
    waMessage: (tier, price) => `שלום NOÉM, אשמח להצטרף ל־Le Club Floral במינוי ${tier} (${price} לחודש).`,
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
    text: "“I compose with what the season offers — stock, dahlia, star-shaped tweedia — and let each stem keep a little of its wildness.”",
    by: "[Founder name], Florist",
  },
  collection: {
    eyebrow: "The Collection",
    title: "Bouquets of the season",
    intro: "Choose a bouquet, send us a message, and we will confirm the flowers of the day, the card and the delivery window.",
    handmade: "Every bouquet is tied by hand at the atelier and no two are alike: we compose it from the flowers we have that day and to your budget, so each one is priced individually.",
    cta: "Order on WhatsApp",
    waMessage: (name) => `Hello NOÉM, I'd like to order the “${name}” bouquet. My budget: `,
    bouquets: [
      { id: "atelier", name: "The Atelier", note: "Our signature: dahlias, stock and tweedia in cream, blush and powder blue.", image: media.dahlia, alt: "White and blush dahlias with blue tweedia" },
      { id: "grand", name: "Grand Gesture", note: "A generous, airy composition, presented in the atelier's signature bag.", image: media.bagYellow, position: "center 40%", alt: "Yellow gerbera and chrysanthemum bouquet in a NOÉM gift bag" },
      { id: "florist", name: "Florist's Choice", note: "Tell us the occasion and the mood. We compose from the best stems of the day.", image: media.sunflower, position: "center 30%", alt: "Hand-held bouquet of sunflowers, hydrangea and peach roses by a curtain" },
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
      { id: "subscriptions", n: "I.", title: "Subscriptions", text: "Le Club Floral: a new bouquet at home every week, in three tiers — from ₪650 a month.", wa: "Hello NOÉM, I'd like to hear about a flower subscription." },
      { id: "events", n: "II.", title: "Events & Weddings", text: "Bridal bouquets, tablescapes and installations, designed with you from the first sketch.", wa: "Hello NOÉM, I'd like to hear about flowers for an event or wedding." },
      { id: "corporate", n: "III.", title: "Corporate", text: "Weekly arrangements for lobbies, offices and boutiques, plus client gifting.", wa: "Hello NOÉM, I'd like to hear about flowers for my business — regular arrangements and client gifts." },
      { id: "workshops", n: "IV.", title: "Workshops", text: "Small-group evenings at the atelier: learn to compose and take your bouquet home.", wa: "Hello NOÉM, I'd like to hear about the atelier's workshops." },
    ],
  },
  atelier: {
    eyebrow: "The Atelier",
    title1: "Every detail,",
    title2: "considered.",
    p1: "[A short paragraph about the founder: where she trained, why she opened NOÉM, and what makes the atelier's way of working different.]",
    p2: "From the hand-written card to the ribbon on the bag, nothing leaves the atelier by accident.",
    cta: "Our story",
    alt: "Two wrapped bouquets in NOÉM bags with cards",
  },
  subscription: {
    name: "Le Club Floral",
    tagline: "A little luxury, every week.",
    perMonth: "/ month",
    choose: "Join",
    tiers: [
      { id: "essentiel", name: "L’Essentiel", price: "₪650" },
      { id: "signature", name: "Signature", price: "₪850" },
      { id: "jardin", name: "Le Jardin Privé", price: "₪1,500" },
    ],
    waMessage: (tier, price) => `Hello NOÉM, I'd like to join Le Club Floral with the ${tier} subscription (${price} / month).`,
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
