# Nilkhata Astro + Headless WordPress

A Bengali-first Astro frontend that reads posts, categories, authors, and media from the WordPress REST API.

## Configure

Copy `.env.example` to `.env`:

```env
WORDPRESS_API_URL=https://blog.imamahmed.net/wp-json/wp/v2
SITE_URL=https://blog.imamahmed.net
```

Production builds use `https://blog.imamahmed.net/wp-json/wp/v2` by default.
Set `WORDPRESS_API_URL` when the WordPress backend moves to another domain.
Local development falls back to bundled demonstration content only when WordPress is unavailable.

## Development

```bash
pnpm install
pnpm dev
```

## Production

```bash
pnpm build
```

Upload the contents of `dist/` to cPanel `public_html`, or deploy the project through Cloudflare Pages, Netlify, or Vercel.

For automatic publishing, configure a WordPress webhook to trigger a new Astro build after a post is published or updated.
