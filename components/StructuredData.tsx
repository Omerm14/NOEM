import type { Dict } from "@/content/site";
import { areas, contact, contentUpdated, media, siteUrl } from "@/content/site";
import { abs, clean, pageUrl } from "@/lib/seo";

// One JSON-LD graph per page, generated from the same copy the page shows (so it can never drift).
// Entity @ids are shared by /he and /en so search engines and AI see ONE NOÉM; only WebPage differs.
const id = (frag: string) => `${siteUrl}/#${frag}`;
const price = (p: string) => Number(p.replace(/[^\d.]/g, ""));

export default function StructuredData({ t }: { t: Dict }) {
  const he = t.locale === "he";
  const url = pageUrl[t.locale];
  const areaRef = (a: { id: string }) => ({ "@id": id(`area-${a.id}`) });
  const serviceAreas = [{ "@id": id("area-ono-valley") }, ...areas.filter((a) => !a.ono).map(areaRef)];

  const graph = [
    {
      "@type": "WebSite",
      "@id": id("website"),
      url: `${siteUrl}/`,
      name: "NOÉM",
      alternateName: ["NOÉM Flower Atelier", "NOEM"],
      inLanguage: ["he", "en"],
      publisher: { "@id": id("atelier") },
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: t.meta.title,
      description: clean(t.meta.description),
      inLanguage: t.locale,
      dateModified: contentUpdated,
      isPartOf: { "@id": id("website") },
      about: { "@id": id("atelier") },
      primaryImageOfPage: { "@id": id("primary-image") },
      mainEntity: { "@id": `${url}#faq` },
    },
    { "@type": "ImageObject", "@id": id("primary-image"), url: abs(media.ogImage), width: 1200, height: 630 },
    {
      "@type": "Florist",
      "@id": id("atelier"),
      name: "NOÉM Flower Atelier",
      alternateName: ["NOÉM", "NOEM", "noem.flowers"],
      url: `${siteUrl}/`,
      description: clean(t.collection.about),
      slogan: "Where flowers become art.",
      logo: { "@type": "ImageObject", url: abs(media.logoPng), width: 512, height: 512 },
      image: [abs(media.ogImage), abs(`${media.dahlia}-1400.webp`), abs(`${media.bagYellow}-1400.webp`), abs(`${media.sunflower}-1400.webp`)],
      telephone: "+972-54-227-0540",
      priceRange: "₪₪₪",
      knowsLanguage: ["he", "en"],
      sameAs: [`https://www.instagram.com/${contact.instagram}/`],
      contactPoint: [
        { "@type": "ContactPoint", contactType: "customer service", telephone: "+972-54-227-0540", url: `https://wa.me/${contact.whatsapp}`, availableLanguage: ["he", "en"] },
        { "@type": "ContactPoint", contactType: "customer service", telephone: "+972-52-601-2220", availableLanguage: ["he", "en"] },
      ],
      areaServed: serviceAreas,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NOÉM",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: t.collection.title,
            itemListElement: t.collection.bouquets.map((b) => ({
              "@type": "Offer",
              // No price on purpose: every bouquet is priced individually (as the page says).
              description: clean(t.collection.handmade),
              areaServed: serviceAreas,
              itemOffered: {
                "@type": "Service",
                "@id": id(`bouquet-${b.id}`),
                name: b.name,
                serviceType: he ? "זר פרחים בעבודת יד" : "Hand-tied bouquet",
                description: clean(b.note),
                image: abs(`${b.image}-1400.webp`),
                provider: { "@id": id("atelier") },
              },
            })),
          },
          {
            "@type": "OfferCatalog",
            name: t.subscription.name,
            itemListElement: t.subscription.tiers.map((tier) => ({
              "@type": "Offer",
              name: tier.name.replace("’", "'"),
              price: price(tier.price),
              priceCurrency: "ILS",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: price(tier.price),
                priceCurrency: "ILS",
                referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
              },
              itemOffered: { "@id": id("service-subscriptions") },
            })),
          },
        ],
      },
    },
    ...t.services.items.map((s) => ({
      "@type": "Service",
      "@id": id(`service-${s.id}`),
      name: s.id === "subscriptions" ? `${s.title} — ${t.subscription.name}` : s.title,
      description: clean(s.text),
      provider: { "@id": id("atelier") },
      areaServed: serviceAreas,
    })),
    {
      "@type": "Place",
      "@id": id("area-ono-valley"),
      name: he ? "בקעת אונו" : "Ono Valley",
      alternateName: he ? "Ono Valley" : "בקעת אונו",
      containsPlace: areas.filter((a) => a.ono).map(areaRef),
    },
    ...areas.map((a) => ({
      "@type": a.type,
      "@id": id(`area-${a.id}`),
      name: he ? a.he : a.en,
      alternateName: [he ? a.en : a.he, ...(a.alt ?? [])],
      ...(a.ono ? { containedInPlace: { "@id": id("area-ono-valley") } } : {}),
    })),
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: t.locale,
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: t.faq.items.map((f) => ({
        "@type": "Question",
        name: clean(f.q),
        acceptedAnswer: { "@type": "Answer", text: clean(f.a) },
      })),
    },
  ];

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
