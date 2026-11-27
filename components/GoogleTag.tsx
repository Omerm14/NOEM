"use client";

import Script from "next/script";
import { gtmId } from "@/content/site";

// Google Tag Manager container (requested by the owner). gtag() is defined for tags that expect it;
// the gtm.start event lets the container's "All pages" triggers fire. Conversion clicks are also
// pushed to dataLayer by components/Track.tsx (events: wa_click, phone_click, ig_click, a11y_open).

export default function GoogleTag() {
  return (
    <Script id="gtm" strategy="lazyOnload">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
    </Script>
  );
}
