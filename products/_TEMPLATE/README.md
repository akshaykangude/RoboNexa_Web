# Product template

This `_TEMPLATE` folder is **not** shown on the store (it's not listed in
`products/index.json`). Use it as the starting point for a new product.

## To add a new product

1. **Copy** this whole `_TEMPLATE` folder and rename it to your product ID,
   e.g. `products/AMR-500`.
2. Open `product.json` inside it and fill in your details. Set `"id"` to the
   same product ID (e.g. `"AMR-500"`).
3. Drop your files into the subfolders:
   - photos → `images/`   (jpg / png / webp)
   - videos → `videos/`   (mp4)
   - datasheet, CAD, SDK, dimensions → `docs/`   (pdf / step / zip …)
   Then list each file name in `product.json` (see the examples).
4. Add your product ID to `products/index.json` so it appears on the store:
   ```json
   ["ACT-J60", "LDR-32", "BLDC-200", "AMR-500"]
   ```
5. Commit & push. GitHub Pages updates in ~1 minute.

## Tip — build it in the admin panel first

Open the store, unlock the admin (secret trick — see the main README), fill in
the product using the nice form, then click **JSON** on that product to copy a
ready-made `product.json`. Paste it into your new folder, add the files, done.

The lines starting with `_comment_` are just notes for you — you can delete them.
