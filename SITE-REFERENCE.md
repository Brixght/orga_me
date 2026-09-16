# ORGA_ME — STEP 1 SITE REFERENCE (pre-rework backup)

Saved before deleting the Netlify site (`https://orga-me.netlify.app`).
Source: live Netlify crawl + local copy. Live HTML = local HTML
(except Netlify rewrites links to pretty URLs like `/en/products/soursop`).

---

## 1. Every page (21 HTML files)

Base live URL: `https://orga-me.netlify.app`
Canonical in `sitemap.xml`: `https://orga-me.org/` (note: sitemap pointed to
orga-me.org, NOT netlify — update on redeploy).

| # | Live Netlify URL | Local file | Purpose |
|---|---|---|---|
| 0 | `/` | `index.html` | Redirect splash: meta-refresh to `en/index.html`, EN/FR links |
| 1 | `/en/index.html` (`/en/`) | `en/index.html` | Homepage EN: 6-slide hero carousel + 3 featured products |
| 2 | `/en/about.html` (`/en/about`) | `en/about.html` | About EN: family story (est. 2022, Togo & Senegal) + Mission |
| 3 | `/en/products.html` (`/en/products`) | `en/products.html` | All products EN: grid of all 6 |
| 4 | `/en/supporters.html` (`/en/supporters`) | `en/supporters.html` | Partners EN: 1 card for GJOW Foundation |
| 5 | `/en/products/granulated-ginger` | `en/products/granulated-ginger.html` | Detail: 3 variants (Classic / Brownish / Drier) |
| 6 | `/en/products/gingcuci` | `en/products/gingcuci.html` | Detail: 2 variants (Classic / Yellow Powdered) |
| 7 | `/en/products/tea-gingcuci` | `en/products/tea-gingcuci.html` | Detail: 3 variants (Classic / Powder / Yellow) + 14-image gallery |
| 8 | `/en/products/dandelion-tea` | `en/products/dandelion-tea.html` | Detail: single product |
| 9 | `/en/products/moringa` | `en/products/moringa.html` | Detail: single product |
| 10 | `/en/products/soursop` | `en/products/soursop.html` | Detail: single product |
| 11-20 | Same 10 paths under `/fr/...` | `fr/*.html` + `fr/products/*.html` | Full French translations of all above |

No dedicated contact page, no cart/checkout, no 404 page, no `_redirects` file.

Footer contact (all pages): **Responsible: Elyzabeth K. Fanlome —
Phone: +221 77 379 84 63 / +221 78 125 39 77** — Based in Togo & Senegal.

## 2. Products (names, descriptions, prices, images)

**PRICES: NONE. No price, FCFA, $, €, cart, or buy button exists anywhere
(full source search verified). Pages are informational only
(Benefits / How to Use / Ingredients).**

### P1. Granulated Ginger
- Tagline: "Premium ginger granules in three varieties for teas, cooking and wellness."
- 3 sections: Classic / Brownish / Drier. All 100% `Zingiber officinale`.
- Images used: `granulated-main.png`, `granulated-brown.png`, `granulated-drier.png`
- Unused in folder: `granulated-ginger.jpg`, `granulated-ginger-1/2/3.jpg`,
  `dried-granulated-ginger.jpg`, `dried-granulated-ginger-1/2/3.jpg`,
  `granulated-add1.png`, `granulated-add2.png`, `dried-ginger-add1.png`

### P2. Gingcuci (Ginger Blend)
- Tagline: "Warming ginger blend for circulation and wellness."
- 2 sections: Classic (ginger + lemon peel) / Yellow Powdered (+ turmeric-like botanicals)
- Images: `gingcuci-main.png`, `gingcuci-yellow.png`
- Unused: `gingcuci.jpg`, `gingcuci-thumb.jpg`, `gingcuci-1/2/3.jpg`,
  `gingcuci-featured.png`, `gingcuci-fr.png`

### P3. Tea Gingcuci (Classic, Powder, Yellow)
- Tagline: "Classic, powder and yellow varieties for daily balance."
- Only page using `.product-gallery` — 14 images: `tea-gingcuci.jpg`,
  `tea-gingcuci-1/2/3.jpg`, `tea-gingcuci-add1.png`, `gingcuci-featured.png`,
  `tea-gingcuci-yellow.jpg`, `tea-gingcuci-yellow-1/2/3.jpg`,
  `tea-gingcuci-powder.jpg`, `tea-gingcuci-powder-1/2/3.jpg`

### P4. Dandelion Tea
- Tagline: "Herbal infusion for liver support and natural detoxification."
- 100% `Taraxacum officinale` leaves + roots. Image: `dandelion-main.png`
- Unused: `dandelion-tea.jpg`, `dandelion-tea-1/2/3.jpg`,
  `dandelion-add1.png`, `dandelion-fr.png`

### P5. Moringa Powder
- Tagline: "Superfood powder for energy, nutrients and vitality."
- 100% `Moringa oleifera`, "90+ nutrients" claim. Image: `moringa-main.png`
- Unused: `moringa.jpg`, `moringa-thumb.jpg`, `moringa-1/2/3.jpg`, `moringa-add1.png`

### P6. Soursop Leaf Tea
- Tagline: "Antioxidant-rich tea for digestion and immune balance."
- 100% `Annona muricata`. NOTE: page hero used `soursop-powder-main.jpeg`
  (powder jar); carousel/cards used `soursop-main.jpg`.
- Unused: `soursop.jpg`, `soursop-thumb.jpg`, `soursop-main.png`,
  `soursop-1/2/3.jpg`, `soursop-add1.jpg`, `soursop-powder.jpg`,
  `soursop-powder-1/2/3.jpg`, `soursop-en.png`, `soursop-fr.png`

Homepage featured (only 3): Granulated Ginger, Gingcuci, Soursop.

## 3. Videos + thumbnails

**No video embedded on any page.** No `<video>`, YouTube, or Vimeo link found.
One orphan file, unreferenced: `assets/images/soursop-video.mp4` (6.9 MB).
Closest thumbnails by name (all unused): `soursop-thumb.jpg`,
`gingcuci-thumb.jpg`, `moringa-thumb.jpg`.

## 4. Navigation links (exact)

- `en/index.html`: About Us / Products / Supporters / Français
- `en/about.html`: Home / Products / Supporters / Français
- `en/products.html`: Home / About / Supporters / Français
- `en/supporters.html`: Home / About / Products / Supporters (self-link) / Français
- Product pages: Home (`../index.html`) / Products (`../products.html`) only
- FR mirrors: Accueil / Produits / Soutiens / English
- Only external link: `https://www.gjowfoundation.org/` (target=_blank)
- Carousel CTAs pointed at `products/<slug>.html`

## 5. Color palette (from `assets/styles.css` `:root` + body)

- `--green-1: #1a6b34` (primary, header, buttons, headings)
- `--green-2: #2d8c4e` (gradient end)
- `--green-3: #4caf50` (defined, rarely used)
- `--accent: #f0f7f0` (scrollbar track, section bg with `#fafafa`)
- `--muted: #5a7a5a` (secondary text)
- `--dark: #0f2e1a` (carousel bg gradient with `#1a5a30`)
- Body: bg `#fafdfa`, text `#1a3d2e`, lead `#2d5016`
- Footer gradient: `#1a6b34 → #0d3d1a`
- Borders/shadows: `rgba(26,107,52,0.06–0.15)`, `rgba(0,0,0,0.06–0.15)`

## 6. Fonts

Single font: **Inter** via Google Fonts `@import`
(`wght 300–800`), fallback `system-ui, -apple-system, sans-serif`.
Brand 800 / 1.6rem / 3px letter-spacing. H2 800 with green gradient clip-text.
Body line-height 1.7.

## 7. Animations / interactions (original)

- `pageLoad` keyframe on body: opacity 0→1, translateY 12px→0, 0.6s
- `.reveal` + `.card` + `.product-section` via IntersectionObserver
  (threshold 0.12) → translateY 40px/30px→0, 0.7s
  `cubic-bezier(0.175,0.885,0.32,1.1)`
- Cards: hover lift −12px + shadow; image scale 1.04; global `img:hover scale(1.02)`
- Buttons: hover translateY −3px + shadow; active scale 0.97
- Nav: underline `::after` width 0→100%, 0.3s
- Carousel: flex track, 0.6s spring easing, arrows ‹ ›, dots, keyboard ←/→,
  **autoplay every 5s** (pause on hover)
- Sticky header with `backdrop-filter: blur(12px)`
- No modal, lightbox, count-up, skeleton, page transitions, hamburger,
  lazy-loading, or reduced-motion support

## 8. File/folder structure (original)

```text
/
  index.html            (meta-refresh to en/index.html)
  robots.txt            (Allow: /, Sitemap: https://orga-me.org/sitemap.xml)
  sitemap.xml           (21 URLs, lastmod 2026-07-12, hreflang en/fr)
  README.md
  .gitattributes / .gitignore
  assets/
    styles.css          (574 lines, single stylesheet)
    script.js           (59 lines: observeReveal() + initCarousel())
    images/             (75 files: ~70 png/jpg + hero-tea.svg + soursop-video.mp4)
  en/
    index.html / about.html / products.html / supporters.html
    products/ (6 files)
  fr/                   (mirror, same 10 files)
```

CSS linked as `../assets/styles.css` (`../../` on product pages); JS same with `defer`.
No build step, no npm, no framework — plain HTML/CSS/JS.
