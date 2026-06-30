# Your Tests, Recorded Live: a Go and Keploy field guide

A single page, beginner friendly tutorial that walks a developer through running a
[Keploy](https://keploy.io) quickstart on a Go (Gin and MongoDB) app. You record real API
traffic, replay it as tests, and watch it catch a regression. Built with Next.js and MDX.

> Live site: https://keploy-go-field-guide.vercel.app

## What this is

This is not a copy of Keploy's docs. It is a written from scratch account of doing the
quickstart end to end, including the first run timeouts, the test-set-1 surprise, and the
"break it on purpose" moment where a recorded test catches a renamed field. The goal is to get a
developer who has never heard of Keploy from zero to a passing (and then failing on purpose) test
suite, and to explain the why at each step. Every screenshot is from a real run.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [MDX](https://mdxjs.com/) via `@next/mdx`, Markdown with embedded React components
- [rehype-pretty-code](https://rehype-pretty.pages.dev/) and [Shiki](https://shiki.style/) for build time syntax highlighting
- [next-themes](https://github.com/pacocoursey/next-themes) for dark and light mode
- Plain CSS with custom properties, no UI kit dependency

## Features

- Dark and light mode toggle that respects your system preference
- A clean documentation layout with dark, terminal styled command blocks
- Custom MDX components: Callout, LoopDiagram, ResultPanel, Screenshot, Cheatsheet
- One click copy buttons on every code block
- A sticky sidebar with in-page search and active section highlighting on desktop
- Reading progress bar and a back to top button
- Clickable heading anchors
- Keyboard focus states, reduced motion support, responsive down to mobile

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. To create a production build:

```bash
npm run build && npm start
```

## Project structure

```
.
├─ app/
│  ├─ layout.js        shell: fonts, theme provider, header, footer
│  ├─ page.mdx         the tutorial content
│  └─ globals.css      the full design system
├─ components/         Callout, Pre (copy button), LoopDiagram, ResultPanel, and more
├─ public/images/      the tutorial screenshots
├─ mdx-components.js   maps MDX elements and exposes custom components
└─ next.config.mjs     MDX, gfm, slugged headings, autolinked headings, Shiki
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js automatically, no config needed.
3. Click Deploy.

Built with Next.js and MDX. Not affiliated with Keploy. Sample app:
[keploy/samples-go](https://github.com/keploy/samples-go).
