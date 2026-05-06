# Aravind Vijayaraghavan — Portfolio

Personal portfolio site built with plain **HTML, CSS and JavaScript** — no build step, no framework, no backend. Deploys in 60 seconds to any static host (Vercel / Netlify / Cloudflare Pages / GitHub Pages).

## File structure

```
portfolio-website/
├── index.html      # All content / structure
├── styles.css      # Dark theme, animations, responsive layout
├── script.js       # Navbar scroll, mobile menu, scroll-reveal animations
└── README.md       # You are here
```

## Run locally

Just open `index.html` in a browser, or serve it for hot reload-ish behaviour:

```bash
# Python
python3 -m http.server 5500

# or Node
npx serve .
```

Then visit `http://localhost:5500`.

## Edit content

All text lives in `index.html` — search for the section (`#about`, `#experience`, `#projects`, etc.) and edit inline. Most colours and spacing are CSS variables at the top of `styles.css`:

```css
:root {
  --accent: #7c5cff;     /* purple */
  --accent-2: #14e6c8;   /* teal  */
  --bg: #0a0a0f;
  /* ... */
}
```

---

## Deploying with a custom domain (no VM, no servers)

The general flow for **every** option below:

1. Push this folder to a GitHub repo (e.g. `aravind-portfolio`).
2. Connect the repo to a static host — it builds & redeploys on every push.
3. Buy a domain (Namecheap / Cloudflare / Porkbun / Google Domains, ~$10/yr).
4. Add the DNS records the host shows you. Free SSL is auto-provisioned.

### Option 1 — Vercel (recommended, easiest)

1. Push to GitHub: `git init && git add . && git commit -m "init" && git remote add origin <url> && git push -u origin main`
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, pick the repo. Use the defaults (no framework). It deploys to `your-repo.vercel.app` immediately.
3. In the project, **Settings → Domains → Add** → enter `aravindvijay.com` (or whatever you buy).
4. Vercel shows you DNS records. In your domain registrar:
   - For the apex domain `aravindvijay.com`: add an `A` record `76.76.21.21`.
   - For `www`: add a `CNAME` to `cname.vercel-dns.com`.
5. Wait a few minutes → Vercel auto-issues a Let's Encrypt cert → site is live on HTTPS.

Cost: **$0** (just the domain).

### Option 2 — Netlify

1. Push to GitHub.
2. [netlify.com](https://netlify.com) → **Add new site → Import from Git** → pick repo. Build command: *(leave blank)*. Publish directory: `.`.
3. **Domain settings → Add custom domain** → enter your domain.
4. Add the DNS records Netlify shows (`A` to their load balancer + `CNAME` for `www`).
5. SSL auto-issues.

### Option 3 — Cloudflare Pages

Best if you also buy your domain at Cloudflare (DNS is then automatic).

1. [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project** → connect GitHub repo. No build command, output dir `/`.
2. **Custom domains → Set up a custom domain** → enter your domain. If the domain is in your Cloudflare account, DNS is wired up in one click.

### Option 4 — GitHub Pages (zero new accounts)

1. Push to a public GitHub repo.
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch → main / root**.
3. Your site is live at `https://<username>.github.io/<repo>/`.
4. For a custom domain: in Pages settings, set the custom domain field. GitHub creates a `CNAME` file in the repo. Then add a `CNAME` in your registrar pointing `www.aravindvijay.com` to `<username>.github.io`. Tick **Enforce HTTPS** once the cert provisions.

---

## Where to buy a domain

| Registrar         | Notes                                                            |
| ----------------- | ---------------------------------------------------------------- |
| **Cloudflare**    | At-cost pricing, no upsells, easiest DNS if using CF Pages.      |
| **Namecheap**     | Cheap first-year offers, decent UI.                              |
| **Porkbun**       | Cheap renewals, free WHOIS privacy.                              |
| **Google Domains** *(now Squarespace Domains)* | Clean UX, slightly pricier.        |

Any `.com` will be ~$10–14/year. `.dev` and `.ai` are pricier.

## SEO niceties already included

- Semantic HTML5 sections (`<nav>`, `<section>`, `<article>`, `<footer>`)
- `<meta description>` and Open Graph tags for nice link previews
- Single-page, fast-loading (no JS framework, no images yet)
- Inline SVG favicon

## Things you might want to add later

- A `/resume.pdf` link (drop the PDF next to `index.html` and link it from the hero CTAs)
- A profile photo in the hero — add `<img src="me.jpg" />` and style with `border-radius: 50%`
- A blog section (Notion-as-CMS or just a `/blog` folder with markdown rendered via a tiny static-site generator like Astro)
- Analytics — Plausible or Cloudflare Web Analytics, both privacy-friendly and free for low traffic

---

Made with care, no frameworks harmed.
