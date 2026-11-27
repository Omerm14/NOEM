import type { Metadata, Viewport } from "next";
import "@fontsource/heebo/100.css";
import "@fontsource/heebo/200.css";
import "@fontsource/heebo/300.css";
import "@fontsource/heebo/400.css";
import "../../globals.css";
import { en, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: en.meta.title,
  icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
  description: en.meta.description,
  alternates: { languages: { he: "/" } },
  openGraph: { title: en.meta.title, description: en.meta.description, images: ["/media/hero-poster.jpg"], locale: "en_US" },
};

export const viewport: Viewport = { themeColor: "#474d24" };

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
