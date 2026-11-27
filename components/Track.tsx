"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// One delegated listener for every conversion link — keeps HomePage a server component and never
// blocks navigation (track() is fire-and-forget). Props use language-neutral ids so he/en roll up.
// Note: Vercel custom events are recorded on Pro/Enterprise plans only.
export default function Track({ lang }: { lang: "he" | "en" }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("a, button");
      if (!el) return;
      const ctx = el.closest<HTMLElement>("[data-loc]");
      const loc = ctx?.dataset.loc ?? "page";
      const item = el.closest<HTMLElement>("[data-item]")?.dataset.item ?? "";
      const href = el.getAttribute("href") ?? "";
      let name = el.dataset.event ?? "";
      if (!name && href.startsWith("https://wa.me")) name = "wa_click";
      else if (!name && href.startsWith("tel:")) name = "phone_click";
      else if (!name && href.includes("instagram.com")) name = "ig_click";
      if (!name) return;
      const props = item ? { loc, item, lang } : { loc, lang };
      try {
        track(name, props);
        // Same event for Google Tag Manager / GA4 (create a Custom Event trigger per name in GTM).
        (window as unknown as { dataLayer?: object[] }).dataLayer?.push({ event: name, ...props });
      } catch {
        /* analytics must never affect the visitor */
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [lang]);
  return null;
}
