"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/content/site";
import { contact, media, waLink } from "@/content/site";

export type HeaderCopy = Pick<Dict, "locale" | "orderMessage" | "announcement" | "nav" | "switchLabel" | "switchHref" | "switchAria" | "order" | "menu" | "close"> & { whatsapp: string };

export default function Header({ t }: { t: HeaderCopy }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Expose the header's live height so the mobile menu sheet starts right beneath it.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = () => document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape, close if the window grows to desktop.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add("menu-lock");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1241px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      root.classList.remove("menu-lock");
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const dark = solid || open;
  const cls = ["site-header", solid ? "is-solid" : "", open ? "menu-open" : ""].join(" ");
  const close = () => setOpen(false);

  return (
    <header ref={ref} className={cls}>
      <div className="announce" lang="fr" dir="ltr">{t.announcement}</div>
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
          <span className="menu-icon" aria-hidden="true"><span /><span /></span>
          {open ? t.close : t.menu}
        </button>
        <a href={t.locale === "he" ? "/" : "/en/"} className="logo" aria-label="NOÉM">
          <img src={dark ? media.logoOlive : media.logoCream} alt="NOÉM Flower Atelier" width={1164} height={590} />
        </a>
        <div className="header-tools">
          <a href={t.switchHref} className="lang-switch" aria-label={t.switchAria} lang={t.locale === "he" ? "en" : "he"}>
            {t.switchLabel}
          </a>
          <a href={waLink(t.orderMessage)} className="order-btn" target="_blank" rel="noopener">{t.order}</a>
        </div>
      </div>
      <nav id="mobile-nav" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label={t.menu} aria-hidden={!open} inert={!open}>
        <div className="mobile-nav__links">
          {t.nav.map((n, i) => (
            <a key={n.href} href={n.href} onClick={close} style={{ "--i": i } as React.CSSProperties}>{n.label}</a>
          ))}
        </div>
        <div className="mobile-nav__foot" style={{ "--i": t.nav.length } as React.CSSProperties}>
          <a href={waLink(t.orderMessage)} onClick={close} className="btn btn--solid" target="_blank" rel="noopener">{t.whatsapp}</a>
          <div className="mobile-nav__contact">
            <a href={contact.phones[0].href} className="ltr">{t.locale === "en" ? contact.phones[0].intl : contact.phones[0].label}</a>
            <a href={`https://instagram.com/${contact.instagram}`} className="ltr">@{contact.instagram}</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
