"use client";

import { useEffect, useRef, useState } from "react";
import { bigWidth } from "@/content/site";

export type ReelImage = { base: string; alt: string; position?: string };

// All the atelier's photos in one strip: swipe on a phone, arrows / trackpad / keyboard on desktop.
// Native scroll-snap does the work, so it stays smooth and needs no carousel library.
export default function GalleryReel({ images, label, prev, next, dir }: { images: ReelImage[]; label: string; prev: string; next: string; dir: "rtl" | "ltr" }) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const pos = Math.abs(el.scrollLeft); // RTL scrollLeft runs negative
      setAtStart(pos < 4);
      setAtEnd(pos + el.clientWidth >= el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (step: 1 | -1) => {
    const el = track.current;
    const item = el?.querySelector("li");
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const amount = (item.getBoundingClientRect().width + gap) * step * (dir === "rtl" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <div className="reel">
      <ul ref={track} className="reel__track" tabIndex={0} aria-label={label}>
        {images.map((img, i) => {
          const big = bigWidth(img.base);
          return (
            <li key={img.base} className="reel__item">
              <img
                src={`${img.base}-800.webp`}
                srcSet={`${img.base}-800.webp 800w, ${img.base}-${big}.webp ${big}w`}
                sizes="(max-width: 700px) 78vw, 30vw"
                alt={img.alt}
                loading={i < 3 ? "eager" : "lazy"}
                style={img.position ? { objectPosition: img.position } : undefined}
              />
            </li>
          );
        })}
      </ul>
      <div className="reel__nav">
        <button type="button" className="reel__btn" onClick={() => go(-1)} disabled={atStart} aria-label={prev}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d={dir === "rtl" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} />
          </svg>
        </button>
        <button type="button" className="reel__btn" onClick={() => go(1)} disabled={atEnd} aria-label={next}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d={dir === "rtl" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
          </svg>
        </button>
      </div>
    </div>
  );
}
