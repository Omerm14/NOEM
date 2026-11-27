"use client";

import { useEffect } from "react";

// Fades sections in as they enter the viewport. Content stays visible without JS
// because the .reveal class is only added by this script.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Respect the OS setting for the hero film too: stop it on its first frame.
      document.querySelectorAll<HTMLVideoElement>("video[autoplay]").forEach((v) => {
        v.removeAttribute("autoplay");
        v.pause();
        v.currentTime = 0;
      });
      return;
    }
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight) el.classList.add("reveal");
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
