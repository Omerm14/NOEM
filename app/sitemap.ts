import type { MetadataRoute } from "next";
import { contentUpdated, large, media } from "@/content/site";
import { abs, hreflang, pageUrl } from "@/lib/seo";

export const dynamic = "force-static";

// Images that appear on the page (absolute URLs) — feeds Google Images for the atelier's work.
const images = [
  `${media.heroImage}-1600.webp`,
  media.ogImage,
  ...[media.pastelWrapped, media.anthuriumWrapped, media.vaseSunflower, media.bagsPair, media.yellowWrapped, media.boxPastel, media.vaseKitchen, media.bagYellow].map(large),
].map(abs);

export default function sitemap(): MetadataRoute.Sitemap {
  return (["he", "en"] as const).map((locale) => ({
    url: pageUrl[locale],
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: locale === "he" ? 1 : 0.8,
    alternates: { languages: hreflang },
    images,
  }));
}
