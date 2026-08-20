# Dinner Decider — GitHub Pages + AI Pantry Scanner

This project is a static GitHub Pages dinner picker with an optional AI pantry-photo scanner.

## Features
- 35+ American-style dinner ideas
- Category + dinner dropdowns
- Estimated calories per serving
- Ingredient lists
- Random dinner picker
- AI pantry/refrigerator photo upload
- AI ingredient detection
- Dinner ranking: Can Make Now, Missing 1–2 Items, and Other Close Matches

## 1. Deploy the website to GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js` to the repo root.
3. Commit/push the files.
4. In GitHub: Settings → Pages.
5. Choose **Deploy from a branch**, select `main`, and select `/ (root)`.
6. Save and open the Pages URL GitHub provides.

The normal dinner picker works immediately. The AI scanner needs the Worker below.

## 2. Deploy the secure AI endpoint with Cloudflare Workers
Do **not** put your OpenAI API key in `script.js` or anywhere in GitHub Pages.

1. Create a Cloudflare account and a Worker.
2. Use `cloudflare-worker/worker.js` as the Worker code.
3. Add a Worker secret named `OPENAI_API_KEY` containing your OpenAI API key.
4. Optional: set `OPENAI_MODEL` to a vision-capable model. This starter uses `gpt-5.6-luna` to keep costs lower.
5. Set `ALLOWED_ORIGIN` to your exact GitHub Pages origin, such as `https://YOUR-USERNAME.github.io`.
6. Deploy the Worker and copy its public URL.
7. In `script.js`, change:
   `const AI_PANTRY_ENDPOINT = "https://YOUR-WORKER.workers.dev/scan-pantry";`
   to your deployed Worker endpoint. If your Worker is deployed at the root, use its root URL unless you add routing for `/scan-pantry`.
8. Commit the updated `script.js` to GitHub.

## Cost/security notes
- The browser resizes images before upload to reduce payload and vision-token cost.
- The API key remains server-side in a Worker secret.
- Restrict the Worker to your GitHub Pages origin.
- For a public/high-traffic site, also enable Cloudflare rate limiting or another abuse-control mechanism to prevent unauthorized API spend.
- AI visual detection is an estimate. Users should verify ingredients, quantities, expiration, allergens, and food safety before cooking.

## Files
- `index.html` — website structure
- `styles.css` — responsive styling
- `script.js` — dinner database, randomizer, photo UI, and local recipe matching
- `cloudflare-worker/worker.js` — secure OpenAI image-analysis endpoint
- `cloudflare-worker/wrangler.toml` — optional Wrangler configuration
