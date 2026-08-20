# Dinner Decider — Supabase AI Pantry Version

This version is ready for GitHub Pages and uses Supabase for authentication plus the `scan-pantry` Edge Function.

## Already configured

- Supabase project URL: `https://inuqosrjpjmoyegmssic.supabase.co`
- Supabase publishable key: configured in `script.js` (safe for browser use)
- Edge Function name: `scan-pantry`
- OpenAI API key: **not included**; keep it only in Supabase Secrets as `OPENAI_API_KEY`

## 1. Supabase Edge Function

You already created `scan-pantry`. Open it in Supabase, replace its code with the contents of:

`supabase/functions/scan-pantry/index.ts`

Then deploy it.

Keep authentication/JWT protection enabled for this function. The website uses Supabase Auth and invokes the function through `supabase-js`, which supplies the user's session credentials.

## 2. Supabase Auth

The site includes email/password sign-in and account creation. In Supabase Authentication settings, make sure Email authentication is enabled. If email confirmation is enabled, new users must confirm their email before signing in.

## 3. GitHub Pages

Upload these root files to your GitHub Pages repository:

- `index.html`
- `styles.css`
- `script.js`

The `supabase/` folder is only a reference copy of your server-side Edge Function source. It can be public because it contains no OpenAI API key.

Enable GitHub Pages under repository Settings → Pages and deploy from your main branch/root.

## Security

Never place `OPENAI_API_KEY` in `script.js`, `index.html`, `wrangler.toml`, GitHub Actions variables exposed to the browser, or any committed file. The Supabase publishable key is intended for client-side use; your database protection comes from authentication and RLS.
