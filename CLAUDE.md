# NOÉM Flower Atelier — website

Marketing site for NOÉM, a high-end flower atelier (Omer's sister's business). Luxury, prestige, Paris vibes.
Hebrew is the primary language (RTL at `/`), English mirrors it at `/en/`.

## Approved direction (do not drift)
- **Layout:** "A3 — Immersive film" from the design canvas (round 4): full-screen hero (now the brand anthurium still, by the
  client's choice — no video) with the cream logo and nav over it,
  then the Concept A "Quiet Luxury Atelier" page: founder quote → collection (3 bouquets) → how to order (01–03) →
  services I–IV (subscriptions, events & weddings, corporate, workshops) → atelier story → olive subscription band →
  Instagram gallery → FAQ ("QUESTIONS", approved for SEO/GEO) → olive footer. ONE page only — no extra routes.
- **Headings:** every heading is English, in capitals (`.caps`), identical on both languages; `<title>` is English.
- **Font:** Heebo only, both languages. Thin (100–200) for display, 300 for text. Chosen by the client — no serifs.
- **Colours:** cream `#F9F0E4`, cream-deep `#F3E6D4`, olive `#474D24`, olive-deep `#3C411E`, muted `#5A5F3A`.
- **Ordering:** no cart. Every order CTA opens WhatsApp (+972 54 227 0540) with a prefilled message naming the bouquet.
- **Rejected before — avoid:** generic "AI" layouts (pill buttons, pastel tiles, eyebrow labels everywhere, emoji),
  Helvetica-only minimalism, Frank Ruhl Libre / Assistant / Cormorant.

## SEO / GEO / accessibility (keep intact)
- `lib/seo.ts` → `buildMetadata()` for both layouts (canonical, hreflang he/en/x-default, OG, twitter); `clean()` strips
  bidi marks from machine-readable text. `components/StructuredData.tsx` renders the JSON-LD graph from `site.ts`
  (Florist without address — service-area business; bouquets have no price; Lé Club Floral prices numeric ILS).
- `app/robots.ts`, `app/sitemap.ts` (with images), `app/llms.txt/route.ts` — all generated from `site.ts`.
- Canonical record (must match everywhere online): "NOÉM Flower Atelier", +972-54-227-0540, areas = `areas` in site.ts.
  Hod HaSharon is served but is NOT in the Ono Valley — never describe it as part of it.
- Placeholders `[...]` are never rendered (`shown()`); `npm run build` runs `scripts/check-placeholders.mjs` (postbuild).
- Accessibility: skip link, `.sr-only` "opens in a new tab", menu focus trap, statement `<dialog id="accessibility">`
  (deep link `#accessibility`), Skynet toolbar (`components/A11yWidget.tsx`, lazyOnload). Re-run axe after UI changes.
- Analytics: Google Tag Manager `GTM-PF4QHZVZ` (`components/GoogleTag.tsx`), Vercel Analytics + Speed Insights;
  `components/Track.tsx` sends `wa_click` / `phone_click` / `ig_click` / `a11y_open` {loc, item, lang} to both.

## Code map
- `content/site.ts` — ALL copy (he + en), contact details, media paths. Edit copy here only.
- `components/HomePage.tsx` — page sections (server component).
- `components/Header.tsx` — fixed header: transparent over the hero, turns cream after 80px; mobile menu.
- `components/Reveal.tsx` — fade-in on scroll (respects reduced motion).
- `app/(he)` and `app/(en)/en` — two root layouts (lang/dir differ). `app/globals.css` — all styles, logical properties for RTL.
- `public/media` — photos (webp 800/1400), logos (SVG + `logo-512.png` for schema), hero still (webp 1000/1600/2400 + portrait).
  Atelier photos come from the client's Google Drive folder (HEIC → webp 800/1400).

## Placeholders still open (in [brackets] in content/site.ts)
Founder name + bio (quote attribution and atelier paragraph stay hidden until then), Hebrew spelling of the brand,
order/delivery hours + same-day cut-off, email + accessibility contact, what each subscription tier includes.
Pricing: bouquets have NO fixed price — each is priced individually (handmade, depends on stock + budget; see
`collection.handmade`). Subscriptions = "Lé Club Floral", three tiers: L'Essentiel ₪650, Signature ₪850,
Le Jardin Privé ₪1,500 per month (weekly delivery). Delivery area: Ono Valley (Kiryat Ono, Savyon, Ganei Tikva, Yehud,
Monosson, Ramat Ef'al, Kfar Ma'as, Giv'at Shmuel, Magshimim, Bnei Atarot) + Hod HaSharon.

## Commands
`npm run dev` · `npm run build` (static export to `out/`, then the placeholder check). Deployed on Vercel from `main`.
