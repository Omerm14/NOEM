# NOÉM Flower Atelier

Hebrew-first (RTL) site with English at `/en/`. Next.js static export.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

See `CLAUDE.md` for the approved design direction and what's still a placeholder.

## Deploying to Vercel

The project is ready to import as-is (nothing is deployed yet):

1. vercel.com → **Add New → Project** → import `omerm14/noem`. Framework is detected as Next.js; keep the defaults
   (`npm ci`, `npm run build`). `next.config.ts` uses `output: "export"`, so Vercel serves the static `out/` folder.
2. **Settings → Domains** → add `www.noem.co.il` (and `noem.co.il` redirecting to it). The canonical URL, sitemap and
   robots already point at `https://www.noem.co.il`; change `metadataBase` in both layouts and `app/sitemap.ts` /
   `app/robots.ts` if the domain differs.
3. `vercel.json` adds long cache headers for `/media/*` and basic security headers.

Or from a terminal: `npx vercel` (preview) and `npx vercel --prod` once approved.
