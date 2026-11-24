# Reprize LP

Landing page do Reprize (https://reprizeapp.com), em Astro 7 + Tailwind v4 + TypeScript. Português (BR) na raiz, inglês em `/en`.

## Requisitos

- Node 22.23.4 ou superior
- pnpm 12 (`packageManager` em `package.json`)

## Comandos

```bash
pnpm install
pnpm dev       # servidor local em http://localhost:4321
pnpm build     # gera a pasta dist
pnpm preview   # serve a pasta dist
```

## Estrutura

| Pasta | O que tem |
|---|---|
| `src/pages` | Rotas. A raiz é pt-BR, `src/pages/en` é o inglês. |
| `src/components` | `HomePage`, `LegalPage` e peças de layout. |
| `src/content/legal` | Textos de Privacidade e Termos em markdown, por idioma (`pt-br`, `en`). |
| `src/i18n/ui.ts` | Textos da interface nos dois idiomas. |
| `src/styles/global.css` | Tokens da marca (Ink, Paper, Amber, Dark amber) e estilo dos textos legais. |
| `public` | Favicons, manifest, logos e imagem OG copiados do kit de marca. |

## Marca

Os arquivos vêm do kit de marca do Reprize (artefato "Reprize: marca e lojas"), com o símbolo igual ao do app. O Âmbar é `#FFB000` e nunca vai sobre fundo claro; nele entra o Âmbar escuro (`#946200`). Paleta em Ink `#0A0A0A`, Branco `#FFFFFF`, Âmbar e Âmbar escuro.

## Links das lojas

Os links ficam em `src/data/stores.ts`. Os dois apontam para o app publicado e abrem a página na loja do país de quem acessa: `https://apps.apple.com/app/id6833159162` e `https://play.google.com/store/apps/details?id=app.reprize.mobile`. Para trocar um link sem mexer no código, copie `.env.example` para `.env` e preencha `PUBLIC_APP_STORE_URL` ou `PUBLIC_PLAY_STORE_URL`.

O botão "Baixar" do topo leva à seção de download da página inicial; no iPhone e no iPad ele abre a App Store direto, e no Android abre o Google Play direto.

## Página de download (QR code)

`/download` (e `/en/download`) é o destino do QR code dos materiais impressos (`https://www.reprizeapp.com/download`). No iPhone e no iPad ela abre a App Store automaticamente, e no Android abre o Google Play do mesmo jeito. No computador aparecem os dois botões. Os links vêm de `src/data/stores.ts`. O endereço antigo, `/baixar`, continua funcionando: o `vercel.json` redireciona para `/download`, porque pode haver QR code impresso com ele.

## Rotas legais

As lojas apontam para `reprizeapp.com/privacy` e `reprizeapp.com/terms`. Por isso as URLs não têm barra final (`trailingSlash: 'never'`).

## Prints do app

Os mockups de tela da home são HTML/CSS e podem ser trocados por prints reais. O plano para gerar os prints automaticamente está em [`docs/screenshots-plan.md`](docs/screenshots-plan.md), e o registro das telas em `src/data/screens.ts`.

## Convenções

Nomes de arquivos e pastas em kebab-case (por exemplo `home-page.astro` e `how-it-works.astro`). As exceções são `README.md` e `AGENTS.md`. Dentro do código, os componentes continuam em PascalCase (`<HomePage />`), como o Astro exige.
