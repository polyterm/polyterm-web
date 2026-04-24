# polyterm-web

Source for [polyterm.one](https://polyterm.one) — the landing page for polyterm, the Bloomberg terminal for Polymarket.

## Stack

- Vite 6 + React 19 + TypeScript
- Tailwind CSS 4
- Caddy (static server + automatic HTTPS)
- Multi-stage Docker build — Node builds, Caddy serves

## Develop

```bash
npm install
npm run dev
```

## Deploy

```bash
docker compose up -d --build
```

Caddy auto-issues Let's Encrypt certs for `polyterm.one` and redirects `www.polyterm.one` to the apex.

## Links

- CLI: [polyterm/polyterm-cli](https://github.com/polyterm/polyterm-cli)
- X: [@PolyTermOne](https://x.com/PolyTermOne)
- Telegram: [@PolyTermOne](https://t.me/PolyTermOne)
