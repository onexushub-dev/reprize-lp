## Conventions

Code and routes are written in English. The site is bilingual, but only what the visitor reads is translated.

- **In English:** file and folder names, components, variables, functions, comments, commit messages and branch names, and URL paths (`/download`, `/privacy`, `/terms`).
- **Same path in every language:** a page keeps one English path and only the locale prefix changes (`/download` and `/en/download`). Never give a page a Portuguese slug.
- **Translated:** the visible copy, which lives in `src/i18n` and `src/content/legal/<locale>`, one version per language.
- **Renaming a published route:** keep the old path working with a redirect in `vercel.json`, because links and printed QR codes may still use it (`/baixar` redirects to `/download`).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
