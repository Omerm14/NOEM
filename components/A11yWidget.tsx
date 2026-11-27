"use client";

import Script from "next/script";

// Same accessibility toolbar as the Urban Bakery site (Skynet "All in One Accessibility"),
// in NOÉM olive. lazyOnload keeps it off the critical path (LCP/INP). It is an aid only —
// compliance comes from the page itself (see the accessibility statement).
export default function A11yWidget() {
  return (
    <Script
      id="aioa-adawidget"
      src="https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=%23474D24&token=&position=bottom_left"
      strategy="lazyOnload"
    />
  );
}
