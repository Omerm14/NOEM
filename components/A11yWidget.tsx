"use client";

import { useEffect } from "react";

// Same accessibility toolbar as the Urban Bakery site (Skynet "All in One Accessibility"), in NOÉM olive.
// It is heavy, so it loads only once the visitor starts interacting (scroll, tap, key) or after a few idle
// seconds — never competing with the first paint or the first tap. It is an aid only; compliance comes
// from the page itself (see the accessibility statement).
const SRC =
  "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=%23474D24&token=&position=bottom_left";

export default function A11yWidget() {
  useEffect(() => {
    let done = false;
    const events = ["scroll", "pointerdown", "keydown", "touchstart"] as const;
    const load = () => {
      if (done) return;
      done = true;
      events.forEach((e) => window.removeEventListener(e, load));
      const s = document.createElement("script");
      s.id = "aioa-adawidget";
      s.src = SRC;
      s.async = true;
      document.body.appendChild(s);
    };
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    const idle = window.setTimeout(load, 4000);
    return () => {
      window.clearTimeout(idle);
      events.forEach((e) => window.removeEventListener(e, load));
    };
  }, []);
  return null;
}
