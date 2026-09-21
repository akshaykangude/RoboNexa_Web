# Tracked data (reviews, questions, users)

These folders hold your **customer-submitted data** as JSON, version-controlled
so nothing is lost. Every record carries:

- **`code`** — a permanent unique code for that submission (e.g. `RV-9F3AB2`).
  It never changes, so you can always track exactly who sent what.
- **`pid`** — the product's **SKU** (e.g. `ACT-J60`). The SKU is the product's
  fixed identity: even if you later change the product's name, price, image or
  description, the review/question stays locked to the right product. Reviews do
  **not** float away or attach to the wrong item.
- **`date`** — ISO timestamp of when it was sent.
- **`device`** — a snapshot captured in the browser at submit time: `ua`
  (browser/OS), `platform`, `lang`, `screen`, `tz` (timezone), `ref` (where they
  came from).

## Folders

```
data/reviews/reviews.json      verified-buyer reviews
data/questions/questions.json  customer questions (Q&A)
data/users/users.json          registered customers (NO passwords stored)
```

## How records get here

In the store's admin (secret entry), each tab has an **Export** button that
copies a ready `.json`. Paste it into the matching file here and commit. That's
how in-browser submissions become permanent repo data.

## What a static site can and can't do (be aware)

- ✅ Assign the permanent code, timestamp, product SKU and a **browser/device**
  snapshot; keep it all locked to the product; export & version-control it.
- ⚠️ It **cannot** auto-save a visitor's submission straight into GitHub the
  moment they send it, capture their **IP / precise location**, or accept
  **image uploads** from customers — a static page has no server. Those need the
  custom app (Next.js + database + storage). The schema below already has room
  for `images` and `ip` so nothing changes when you move to the server.
