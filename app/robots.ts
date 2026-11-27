import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export const dynamic = "force-static";

// Everyone may crawl. The named agents are listed explicitly (as on the Urban Bakery site) so the
// intent is unambiguous: AI search/answer engines are welcome to read and cite the atelier.
// Google-Extended and Applebot-Extended are control tokens (AI training/grounding), not crawlers.
const aiAgents = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiAgents, allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
