# LDF Static Site (Netlify/GitHub Pages Ready)

A lightweight, mobile-friendly NGO website for **Lama Development Foundation**.

## Deploy to Netlify (free)
1. Create a free account at https://app.netlify.com/
2. Click **Add new site → Deploy manually**.
3. Drag & drop the entire folder you downloaded.
4. Netlify will give you a temporary `*.netlify.app` URL.

### Connect your custom domain
- Netlify → Your Site → **Domain settings → Add custom domain** → `lamadevelopmentfoundation.org` (and `www`).
- Netlify will show the exact DNS records to add in Cloudflare.
  - Usually: a **CNAME** for `www` to your `*.netlify.app` subdomain.
  - And apex/root (`lamadevelopmentfoundation.org`) A/ALIAS records as prompted by Netlify.
- Go to **Cloudflare → DNS → Add records** exactly as Netlify shows.
- Wait a few minutes; then click **Verify** in Netlify. Enable HTTPS.

## Deploy to GitHub Pages (free)
1. Create a GitHub repo and upload these files.
2. Repo → **Settings → Pages** → Select branch `main` and folder `/root`.
3. Add your custom domain in **Pages → Custom domain** (optional).
4. In Cloudflare DNS, add a **CNAME** for `www` to `<your-username>.github.io` and follow GitHub's guidance for apex records.

## Contact form
This site includes a Netlify form (`data-netlify="true"`). After deploying on Netlify, submissions appear in your Netlify dashboard. You can enable email notifications to `info@lamadevelopmentfoundation.org`.

## Editing content
- `index.html` – main content (text/sections)
- `styles.css` – colors and layout
- `script.js` – small JS for menu & year
