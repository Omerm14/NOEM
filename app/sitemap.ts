import type { MetadataRoute } from "next";
import { contentUpdated, media } from "@/content/site";
import { abs, hreflang, pageUrl } from "@/lib/seo";

export const dynamic = "force-static";

// Images that appear on the page (absolute URLs) — feeds Google Images for the atelier's work.
const images = [
  `${media.heroImage}-1600.webp`,
  media.ogImage,
  `${media.dahlia}-1400.webp`,
  `${media.bagYellow}-1400.webp`,
  `${media.sunflower}-1400.webp`,
  `${media.bagsPair}-1400.webp`,
  `${media.vaseBlush}-1400.webp`,
  `${media.bridalRoses}-1400.webp`,
  `${media.anthuriumBridal}-1400.webp`,
  `${media.vaseKitchen}-1400.webp`,
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
