import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://www.noem.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { he: `${base}/`, en: `${base}/en/` };
  return [
    { url: `${base}/`, alternates: { languages } },
    { url: `${base}/en/`, alternates: { languages } },
  ];
}
