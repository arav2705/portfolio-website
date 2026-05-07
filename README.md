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

1. Push to a public GitHub repo.
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch → main / root**.
3. Your site is live at `https://<username>.github.io/<repo>/`.
4. For a custom domain: in Pages settings, set the custom domain field. GitHub creates a `CNAME` file in the repo. Then add a `CNAME` in your registrar pointing `www.aravindvijay.com` to `<username>.github.io`. Tick **Enforce HTTPS** once the cert provisions.

---

