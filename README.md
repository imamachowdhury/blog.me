# Nilkhata Astro + Headless WordPress

A Bengali-first Astro frontend that reads posts, categories, authors, and media from the WordPress REST API.

## Configure

Copy `.env.example` to `.env`:

```env
WORDPRESS_API_URL=https://admin.example.com/wp-json/wp/v2
SITE_URL=https://example.com
```

Without `WORDPRESS_API_URL`, the project builds with bundled Bengali demonstration content.

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
