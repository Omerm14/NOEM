import type { Metadata, Viewport } from "next";
// Heebo, only the subsets the site uses: Hebrew + Latin for each weight, Latin-ext (₪) for body weight.
import "@fontsource/heebo/hebrew-100.css";
import "@fontsource/heebo/latin-100.css";
import "@fontsource/heebo/hebrew-200.css";
import "@fontsource/heebo/latin-200.css";
import "@fontsource/heebo/hebrew-300.css";
import "@fontsource/heebo/latin-300.css";
import "@fontsource/heebo/latin-ext-300.css";
import "@fontsource/heebo/hebrew-400.css";
import "@fontsource/heebo/latin-400.css";
import "../../globals.css";
import { en, gtmId } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import A11yWidget from "@/components/A11yWidget";
import GoogleTag from "@/components/GoogleTag";

export const metadata: Metadata = buildMetadata(en);

export const viewport: Viewport = { themeColor: "#474d24" };

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" />
        </noscript>
        {children}
        <GoogleTag />
        <A11yWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
