import type { Metadata, Viewport } from "next";
import "@fontsource/heebo/100.css";
import "@fontsource/heebo/200.css";
import "@fontsource/heebo/300.css";
import "@fontsource/heebo/400.css";
import "../globals.css";
import { he } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noem.co.il"),
  title: he.meta.title,
  icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
  description: he.meta.description,
  alternates: { languages: { en: "/en/" } },
  openGraph: { title: he.meta.title, description: he.meta.description, images: ["/media/hero-poster.jpg"], locale: "he_IL" },
};

export const viewport: Viewport = { themeColor: "#474d24" };

export default function HebrewLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
