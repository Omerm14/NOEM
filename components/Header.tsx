"use client";

import { useEffect, useState } from "react";
import type { Dict } from "@/content/site";

export type HeaderCopy = Pick<Dict, "locale" | "announcement" | "nav" | "switchLabel" | "switchHref" | "switchAria" | "order" | "menu" | "close"> & { whatsapp: string };
import { media, waLink } from "@/content/site";

export default function Header({ t }: { t: HeaderCopy }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = solid || open;
  const cls = ["site-header", solid ? "is-solid" : "", open ? "menu-open" : ""].join(" ");

  return (
    <header className={cls}>
      <div className="announce">{t.announcement}</div>
      <div className="wrap header-row">
        <nav aria-label={t.locale === "he" ? "ראשי" : "Main"} className="main-nav">
          {t.nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 8h18M3 16h18" />}
          </svg>
          {open ? t.close : t.menu}
        </button>
        <a href={t.locale === "he" ? "/" : "/en/"} className="logo" aria-label="NOÉM">
          <img src={dark ? media.logoOlive : media.logoCream} alt="NOÉM Flower Atelier" width={500} height={256} />
        </a>
        <div className="header-tools">
          <a href={t.switchHref} className="lang-switch" aria-label={t.switchAria} lang={t.locale === "he" ? "en" : "he"}>
            {t.switchLabel}
          </a>
          <a href={waLink()} className="order-btn">{t.order}</a>
        </div>
      </div>
      <nav id="mobile-nav" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label={t.menu}>
        {t.nav.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a href={waLink()} onClick={() => setOpen(false)}>{t.whatsapp}</a>
      </nav>
    </header>
  );
}
