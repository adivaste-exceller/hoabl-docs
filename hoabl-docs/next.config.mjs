import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Set by the GitHub Pages deploy workflow only — leaves `next dev`/`next build`
// untouched for local work and any future server-hosted deployment (Vercel etc.).
const isStaticExport = process.env.STATIC_EXPORT === 'true';
const repoName = 'hoabl-docs';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  ...(isStaticExport && {
    output: 'export',
    basePath: `/${repoName}`,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default withMDX(config);
