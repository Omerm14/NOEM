import type { Metadata } from "next";
import "@fontsource/heebo/100.css";
import "@fontsource/heebo/200.css";
import "@fontsource/heebo/300.css";
import "@fontsource/heebo/400.css";
import "./globals.css";
import { media, notFoundCopy as t, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: t.metaTitle,
  robots: { index: false },
  icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
};

export default function GlobalNotFound() {
  return (
    <html lang="he" dir="rtl">
      <body className="nf-body">
        <main className="nf">
          <a href="/" className="nf__logo" aria-label="NOÉM">
            <img src={media.logoCream} alt="NOÉM Flower Atelier" width={1164} height={590} />
          </a>
          <div className="nf__body">
            <p className="nf__code" aria-hidden="true">404</p>
            <h1>{t.he.title}</h1>
            <p className="nf__text">{t.he.text}</p>
            <div className="nf__ctas">
              <a href="/" className="btn btn--cream">{t.he.home}</a>
              <a href={waLink()} className="btn btn--outline-cream">{t.he.whatsapp}</a>
            </div>
          </div>
          <p className="nf__en" lang="en" dir="ltr">
            {t.en.title} <a href="/en/">{t.en.home}</a>
          </p>
        </main>
      </body>
    </html>
  );
}
