import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export const dynamic = "force-static";

const base = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { he: `${base}/`, en: `${base}/en/` };
  return [
    { url: `${base}/`, alternates: { languages } },
    { url: `${base}/en/`, alternates: { languages } },
  ];
}
