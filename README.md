# BIDEEN TECHNOLOGY website

A static, framework-free storefront and repair-booking site: HTML5, CSS3 and vanilla JavaScript.
No build step, no backend, no database. Ready to deploy on Vercel.

```
bideen-technology/
├── index.html
├── css/style.css
├── js/head.js          (adds the "js" class early, prevents a flash of hidden content)
├── js/script.js        (all behaviour + editable content data)
├── assets/
│   ├── images/
│   │   ├── logo.png            <- your supplied logo
│   │   ├── hero.svg
│   │   ├── categories/ products/ repairs/ gallery/
│   └── icons/apple-touch-icon.png
├── favicon.ico
├── vercel.json
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder for a more realistic test:

```bash
npx serve .          # or: python3 -m http.server 8080
```

The page loads Font Awesome icons and Google Fonts from CDNs, so it needs an internet connection to show icons and the Sora/Inter fonts. Everything else is local.

## Logo

`assets/images/logo.png` is your supplied logo. To replace it, overwrite that file (keep the name).
- **Navbar:** shows a cropped view of the "B" mark from `logo.png` plus the text "BIDEEN / TECHNOLOGY". The crop is done in CSS (`.brand__mark img` in `css/style.css`). If your new logo has a different layout, adjust the width and negative margins there, or swap the `<span class="brand__mark">` for a plain `<img>`.
- **Footer:** shows the full logo.
- **Favicon:** `favicon.ico` and `assets/icons/apple-touch-icon.png` were generated from the "B" mark. Regenerate them if you change the logo.
- **Social previews:** `og:image` in `index.html` is a relative path. Change it to the full URL (for example `https://your-domain.com/assets/images/logo.png`) after deploying, or WhatsApp, Facebook and X may not show the image.

## Change products and prices

Open `js/script.js` and edit the `PRODUCTS` array. Each product has `id`, `name`, `cat`, `spec`, `price` (a number in naira), `status` (`In Stock`, `Limited Stock` or `Pre-order`), `image`, `desc` and `details`. Categories used by the filter buttons are listed in `FILTERS`. All prices are **demonstration prices**, not live inventory or quotations.

Repair services and their starting estimates are in `SERVICES`. The repair booking form's service list is built from the same array.

## Update images

All images referenced by the site are in `assets/images/`. The included images are **generated illustrations, not photographs**, so the site works with no broken links. To use real photos:
1. Add your photos (JPG, WebP or PNG, around 800x600, 4:3 works best) to the matching folder.
2. Update the `image` / `src` paths in `PRODUCTS`, `CATEGORIES` and `GALLERY` in `js/script.js`, and `assets/images/hero.svg` in `index.html` for the hero.
3. Keep each file well under 300 KB for fast loading.

## Change the WhatsApp number

1. In `js/script.js`, change `CONFIG.whatsapp` (international format, digits only, no `+`). Every button and generated message uses it, including the links in the HTML, which are rewritten on load.
2. For visitors without JavaScript, also search `index.html` for `2349045083638` and replace it, and update the visible number `+234 904 508 3638` and the `tel:` links.

Also update the placeholder email `info@bideentechnology.com` and the social links in the footer (they currently point to each platform's home page).

## Forms, cart and what needs a backend

- **Repair booking and contact forms** validate in the browser, then open WhatsApp with a prefilled message. Nothing is stored or emailed.
- **Cart** is a demonstration cart saved in the visitor's browser (`localStorage`). Checkout opens WhatsApp with the items, quantities and total. There is no payment gateway and no stock tracking.
- For real **email delivery**, add a backend or a form service (for example a Vercel serverless function with an email API, or a hosted form service) and post the form there.
- For real **payments and inventory**, connect a payment provider (for example Paystack or Flutterwave) and a product database or commerce platform. Prices should be verified server-side.

## Deploy to Vercel

**With Git:** push this folder to a GitHub repository, then in Vercel choose *Add New > Project*, import the repo, leave Framework Preset as **Other**, leave Build Command and Output Directory empty, and deploy.

**With the CLI:**
```bash
npm i -g vercel
cd bideen-technology
vercel --prod
```

`vercel.json` adds security headers (including a Content Security Policy) and caching. If you add other external scripts, fonts, embeds or images, add their domains to the CSP in `vercel.json`, or the browser will block them.

## Content to replace before launch

- Demonstration prices and repair estimates.
- Sample testimonials (they are fictional and labelled as such).
- Illustrations, with real photos of your stock and workshop.
- Placeholder email and social links.
