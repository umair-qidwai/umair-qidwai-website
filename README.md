# My Personal Website

## Project info

**URL**: https://umairqidwai.com

## Development

This is a React 19 single-page application built with Vite 8, TypeScript, and
Tailwind CSS 4. Routing uses React Router; the project does not use Next.js.

Use Node.js 24.18.0 (pinned in `.nvmrc` for local development and Cloudflare builds):

```sh
nvm use
npm ci
npm run dev
```

Run `npm run typecheck`, `npm run lint`, and `npm run build` before deploying.
TypeScript stays on the latest 6.0 patch because `typescript-eslint` does not yet
support TypeScript 7. Node type definitions follow the Node 24 LTS runtime.
The scoped `postcss-selector-parser` override keeps the typography plugin's parser
on a patched 6.x version until that plugin updates its pinned dependency.

## Deploy to Cloudflare Workers

In the Cloudflare Workers build settings, use:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Root directory:** the repository root (the directory containing `package.json`)

`wrangler.jsonc` deploys the prebuilt `dist` directory as static assets and enables
single-page application routing so direct visits to `/resume` reach React Router.
The explicit configuration deploys the Vite build directly, without requiring
Wrangler to automatically configure the framework.

To validate the deployment package locally without publishing:

```sh
npm ci
npm run build
npx wrangler deploy --dry-run
```

## Update the resume

To update the resume, replace `public/Umair-Qidwai-Resume.pdf` and rebuild.
The Resume button preloads and caches that single file using
`/Umair-Qidwai-Resume.pdf?v=<version>`. The version updates automatically when
the PDF changes. Old `/resume`, `/resume.pdf`, and generated asset links redirect
to the named PDF.
