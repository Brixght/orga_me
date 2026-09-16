# ORGA_ME — Premium Wellness Site (Cloudflare Pages ready)

Organic teas and powders from West Africa — supporting digestion, energy, and immune resilience.

- English: `/en/index.html` · Français: `/fr/index.html`
- Plain HTML + CSS + JS. No npm, no build step, no frameworks, no animation libraries.

## What's inside

- `index.html` — language chooser (EN/FR)
- `404.html` — custom not-found page (Cloudflare Pages serves this automatically)
- `_headers` — Cloudflare Pages headers (cache + security). No Netlify syntax anywhere.
- `en/` + `fr/` — home, products, about, supporters + 6 product detail pages each
- `assets/styles.css`, `assets/script.js` — single stylesheet + single vanilla script
- `assets/images/` — product photos + `soursop-video.mp4` (loads on click only, no autoplay)
- `robots.txt`, `sitemap.xml` — update the domain to your real `.pages.dev` URL after deploy

Design: warm paper background, deep-green CTA, Inter, 10px radius, 1px borders, glass navbar + modals only.
Motion: `cubic-bezier(0.4,0,0.2,1)` at 200–400ms, transform/opacity only, IntersectionObserver reveals,
staggered hero, count-up stats, quick-view modal, video/gallery lightboxes, mobile slide-in menu,
skeleton image fades, `prefers-reduced-motion` supported.

## Deploy to Cloudflare Pages from GitHub

You only do this once. Afterwards every `git push` redeploys automatically.

### 1. Push these files to a GitHub repo

```powershell
cd C:\path\to\orga_me
git init
git add -A
git commit -m "Orga_ME premium rework"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

Private repos work fine on the free plan.

### 2. Connect the repo to Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select your GitHub account → pick `YOUR-REPO` → **Begin setup**.
3. Settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` *(or leave blank — this is a plain static site)*
   - **Root directory:** `/` (leave as-is)
4. **Save and Deploy.**

### 3. Get your `.pages.dev` URL

After the first deploy, Pages shows e.g. `https://orga-me.pages.dev`.
Preview deploys get URLs like `https://<branch>.orga-me.pages.dev`.

### 4. Finish up (important)

1. Replace `https://orga-me.pages.dev` in `sitemap.xml` (and `robots.txt`) with your real URL, commit, push.
2. Optional: **Custom domain** → Pages project → **Custom domains** → add `orga-me.org`.
3. Test: `/en/index.html`, `/fr/index.html`, a product page, and a bad URL (should show `404.html`).

## Local preview

Any static server works, e.g.:

```powershell
# from the repo root
python -m http.server 8000
# open http://localhost:8000/en/index.html
```

## Notes

- All links/paths are relative (`../assets/...`, `products/...`), so the site works on any domain.
- Video never autoplays; it loads only when the visitor presses play.
- To order: phone links `tel:+221773798463` / `tel:+221781253977` (Elyzabeth K. Fanlome).
