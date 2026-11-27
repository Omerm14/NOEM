import type { Metadata } from "next";
import type { Dict, Locale } from "@/content/site";
import { media, siteUrl } from "@/content/site";

/** Canonical URLs — one source for metadata, sitemap, JSON-LD and llms.txt. */
export const pageUrl: Record<Locale, string> = { he: `${siteUrl}/`, en: `${siteUrl}/en/` };
export const hreflang = { he: pageUrl.he, en: pageUrl.en, "x-default": pageUrl.he };

/** Strip bidi control marks from anything machines read (JSON-LD, llms.txt, meta). */
export const clean = (s: string) => s.replace(/[‎‏‪-‮⁦-⁩]/g, "");

export const abs = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

export function buildMetadata(t: Dict): Metadata {
  const url = pageUrl[t.locale];
  const ogImage = { url: abs(media.ogImage), width: 1200, height: 630, alt: clean(t.meta.ogAlt) };
  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: clean(t.meta.description),
    applicationName: "NOÉM",
    icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
    alternates: { canonical: url, languages: hreflang },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: {
      type: "website",
      url,
      siteName: "NOÉM Flower Atelier",
      title: t.meta.title,
      // WhatsApp/social previews keep the brand line; the bidi mark keeps its period in place in RTL.
      description: t.meta.ogDescription,
      locale: t.locale === "he" ? "he_IL" : "en_US",
      alternateLocale: t.locale === "he" ? ["en_US"] : ["he_IL"],
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.ogDescription, images: [ogImage.url] },
  };
}
