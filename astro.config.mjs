// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://reprizeapp.com',
  // The store listings point to reprizeapp.com/privacy and reprizeapp.com/terms, so canonical URLs have no trailing slash.
  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Barlow Condensed',
      cssVariable: '--font-barlow',
      weights: [700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: [400, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // The default minifier (Lightning CSS) folds `animation-timeline: view()` into the `animation` shorthand, which
      // browsers reject, so every scroll-driven animation (reveals, the steps line, the sticky CTA) disappears in the
      // production build while still working in dev. esbuild keeps the longhand as written.
      cssMinify: 'esbuild',
    },
  },

  integrations: [
    sitemap({
      // The download page (/baixar, the QR code target) redirects phones to their store and is not indexed.
      filter: (page) => !page.endsWith('/baixar'),
      i18n: {
        defaultLocale: 'pt-BR',
        locales: { 'pt-BR': 'pt-BR', en: 'en' },
      },
    }),
  ],
});
