# NOÉM Flower Atelier — website

Marketing site for NOÉM, a high-end flower atelier (Omer's sister's business). Luxury, prestige, Paris vibes.
Hebrew is the primary language (RTL at `/`), English mirrors it at `/en/`.

## Approved direction (do not drift)
- **Layout:** "A3 — Immersive film" from the design canvas (round 4): full-screen video hero with the cream logo and nav over it,
  then the Concept A "Quiet Luxury Atelier" page: founder quote → collection (3 bouquets) → how to order (01–03) →
  services I–IV (subscriptions, events & weddings, corporate, workshops) → atelier story → olive subscription band →
  Instagram gallery → olive footer.
- **Font:** Heebo only, both languages. Thin (100–200) for display, 300 for text. Chosen by the client — no serifs.
- **Colours:** cream `#F9F0E4`, cream-deep `#F3E6D4`, olive `#474D24`, olive-deep `#3C411E`, muted `#5A5F3A`.
- **Ordering:** no cart. Every order CTA opens WhatsApp (+972 54 227 0540) with a prefilled message naming the bouquet.
- **Rejected before — avoid:** generic "AI" layouts (pill buttons, pastel tiles, eyebrow labels everywhere, emoji),
  Helvetica-only minimalism, Frank Ruhl Libre / Assistant / Cormorant.

## Code map
- `content/site.ts` — ALL copy (he + en), contact details, media paths. Edit copy here only.
- `components/HomePage.tsx` — page sections (server component).
- `components/Header.tsx` — fixed header: transparent over the hero, turns cream after 80px; mobile menu.
- `components/Reveal.tsx` — fade-in on scroll (respects reduced motion).
- `app/(he)` and `app/(en)/en` — two root layouts (lang/dir differ). `app/globals.css` — all styles, logical properties for RTL.
- `public/media` — photos (webp 800/1400), logos, hero videos (landscape + vertical for phones).
  Atelier photos come from the client's Google Drive folder (HEIC → webp 800/1400).

## Placeholders still open (in [brackets] in content/site.ts)
Founder name + bio + quote, atelier address, delivery area.
Pricing: bouquets have NO fixed price — each is priced individually (handmade, depends on stock + budget; see
`collection.handmade`). Subscriptions = "Le Club Floral", three tiers: L'Essentiel ₪650, Signature ₪850,
Le Jardin Privé ₪1,500 per month (weekly delivery). Hero video is a stand-in made from photos —
replace `public/media/hero.mp4` (16:9) and `hero-vertical.mp4` (3:4) with real atelier footage.

## Commands
`npm run dev` · `npm run build` (static export to `out/`). Vercel-ready via `vercel.json` (see README) — not deployed yet.
