# ROBONEXA — robotics store (GitHub Pages site)

A ready-to-host storefront. Products live as **files in this repo**, so your
catalogue, photos, videos and documents are version-controlled and never lost.

## What's here

```
index.html                 the whole store (one file)
.nojekyll                  tells GitHub Pages to serve the folders as-is
products/
  index.json               the list of product IDs to show, e.g. ["ACT-J60","LDR-32"]
  ACT-J60/
    product.json           this product's details (price, specs, discount, docs…)
    images/                photos (1.jpg, 2.jpg …)
    videos/                videos (demo.mp4 …)
    docs/                  datasheet.pdf, model.step, sdk.zip, dimensions.pdf …
  LDR-32/  …
  _TEMPLATE/               copy this to create a new product (not shown on store)
```

## Put it online (GitHub Pages)

1. Create a GitHub repo named **`akshaykangude.github.io`** (Public).
2. Upload **everything in this folder** (keep the folder structure). Easiest:
   on the repo page → **Add file ▸ Upload files** → drag the whole contents in.
3. **Settings ▸ Pages** → Source **Deploy from a branch** → **main / root** → Save.
4. ~1 minute later your site is live at **https://akshaykangude.github.io**.

Later, connect your domain `robonext.in` under **Settings ▸ Pages ▸ Custom domain**.

## Add or change a product

**Easy way:** open the store, unlock admin (secret trick below), add/edit the
product in the form, click **JSON** to copy its `product.json`, and save that into
`products/<ID>/product.json`. Put the files in that folder's `images/`, `videos/`,
`docs/` and commit.

**Manual way:** copy `products/_TEMPLATE`, rename to your product ID, edit
`product.json`, add files, and add the ID to `products/index.json`.

- **Discount:** set `price` to the selling price and `mrp` to the original —
  the store shows the % off automatically.
- **Downloads:** any file you list under `docs`/`software` becomes a working
  Download button (datasheet, CAD, SDK, dimensions).
- **Images & videos:** listed files show in the product gallery.

## Secret admin entry (hidden from customers)

The store owner login does **not** appear anywhere for customers. Open it by:
- tapping the **© copyright line** at the page bottom **5 times** quickly, or
- pressing **Ctrl + Shift + A**, or
- adding **`#master`** to the web address.

Admin password is `admin123` — change `ADMIN_PASS` near the top of the `<script>`
in `index.html`.

## Important: what a static site can and can't do

- ✅ **Catalogue, photos, videos, datasheet/CAD/SDK downloads, prices, discounts,
  specs, enquiries by email** — all work great here.
- ⚠️ **Customer logins, email verification codes, orders and reviews** are
  *demonstrated* here but only save in each visitor's browser — a static page has
  no server to send email or store data for real. Those become real in the
  **custom app** (Next.js + database) — that project is separate and already
  started.
