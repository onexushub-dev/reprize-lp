export const locales = ['pt-BR', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt-BR';

/** Each language is named in its own language, with the flag shown next to it in the language menu. */
export const localeMeta: Record<Locale, { label: string; flag: 'br' | 'us' }> = {
  'pt-BR': { label: 'Português', flag: 'br' },
  en: { label: 'English', flag: 'us' },
};

export const ui = {
  'pt-BR': {
    'meta.siteName': 'Reprize',
    'meta.homeTitle': 'Reprize: seu lance. De novo. | App de replay para esportes',
    'meta.homeDescription':
      'App de replay para esportes: o celular grava o jogo todo e guarda só o lance que você salvar. Sem cadastro e sem enviar nada para a nuvem.',
    'meta.ogImageAlt': 'Reprize: seu lance. De novo.',
    'notFound.title': 'Página não encontrada',
    'notFound.body': 'O endereço que você abriu não existe ou mudou de lugar.',
    'a11y.skip': 'Pular para o conteúdo',
    'a11y.home': 'Reprize, página inicial',
    'nav.privacy': 'Privacidade',
    'nav.download': 'Baixar',
    'nav.openMenu': 'Abrir o menu',
    'nav.closeMenu': 'Fechar o menu',
    'theme.toLight': 'Mudar para o tema claro',
    'theme.toDark': 'Mudar para o tema escuro',
    'nav.terms': 'Termos',
    'lang.label': 'Idioma',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Em breve',
    'store.availableOn': 'Baixar na',
    'download.metaTitle': 'Baixar o Reprize | Replay instantâneo no seu celular',
    'download.metaDescription': 'Baixe o Reprize, o app de replay instantâneo para esportes. Disponível para iPhone, em breve para Android.',
    'download.eyebrow': 'Grátis e sem cadastro',
    'download.title': 'Baixe o Reprize.',
    'download.body': 'Replay instantâneo só com o app, sem equipamento na quadra. O celular grava o jogo e você salva só os melhores lances.',
    'download.iosEyebrow': 'iPhone',
    'download.androidEyebrow': 'Android',
    'download.openingAppStore': 'Abrindo a App Store',
    'download.openingPlay': 'Abrindo o Google Play',
    'download.openingHint': 'Se a loja não abrir sozinha, toque no botão abaixo.',
    'download.soonTitle': 'Em breve',
    'download.soonTitleRest': 'no Android.',
    'download.soonBody': 'O Reprize para Android está em fase final de publicação no Google Play. Por enquanto, o app está disponível para iPhone.',
    'download.soonFollow': 'Acompanhe no Instagram',
    'footer.company':
      'Reprize é um produto de Victor Hugo Marques Ltda (Nexus Hub), CNPJ 64.669.130/0001-02, Rua Pais Leme, 215, conj. 1713, Pinheiros, São Paulo/SP, CEP 05424-150.',
    'footer.contact': 'Contato e suporte',
    'footer.social': 'Redes sociais',
    'footer.instagram': 'Reprize no Instagram',
    'footer.tiktok': 'Reprize no TikTok',
    'footer.rights': 'Todos os direitos reservados.',
    'legal.updated': 'Última atualização',
    'legal.backHome': 'Voltar ao início',
  },
  en: {
    'meta.siteName': 'Reprize',
    'meta.homeTitle': 'Reprize: your play. Again. | Instant replay app for sports',
    'meta.homeDescription':
      'Instant replay app for sports: your phone records the whole game and keeps only the play you save. No sign-up, nothing sent to the cloud.',
    'meta.ogImageAlt': 'Reprize: your play. Again.',
    'notFound.title': 'Page not found',
    'notFound.body': 'The address you opened does not exist or has moved.',
    'a11y.skip': 'Skip to content',
    'a11y.home': 'Reprize, home page',
    'nav.privacy': 'Privacy',
    'nav.download': 'Download',
    'nav.openMenu': 'Open the menu',
    'nav.closeMenu': 'Close the menu',
    'theme.toLight': 'Switch to the light theme',
    'theme.toDark': 'Switch to the dark theme',
    'nav.terms': 'Terms',
    'lang.label': 'Language',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Coming soon',
    'store.availableOn': 'Download on',
    'download.metaTitle': 'Download Reprize | Instant replay on your phone',
    'download.metaDescription': 'Download Reprize, the instant replay app for sports. Available for iPhone, coming soon to Android.',
    'download.eyebrow': 'Free, no sign-up',
    'download.title': 'Download Reprize.',
    'download.body': 'Instant replay with just the app, no equipment on the court. Your phone records the game and you save only the best plays.',
    'download.iosEyebrow': 'iPhone',
    'download.androidEyebrow': 'Android',
    'download.openingAppStore': 'Opening the App Store',
    'download.openingPlay': 'Opening Google Play',
    'download.openingHint': 'If the store does not open by itself, tap the button below.',
    'download.soonTitle': 'Coming soon',
    'download.soonTitleRest': 'to Android.',
    'download.soonBody': 'Reprize for Android is in the final stage of publication on Google Play. For now, the app is available for iPhone.',
    'download.soonFollow': 'Follow on Instagram',
    'footer.company':
      'Reprize is a product of Victor Hugo Marques Ltda (trading as Nexus Hub), Brazilian company registration (CNPJ) 64.669.130/0001-02, Rua Pais Leme, 215, suite 1713, Pinheiros, São Paulo, SP, 05424-150, Brazil.',
    'footer.contact': 'Contact and support',
    'footer.social': 'Social media',
    'footer.instagram': 'Reprize on Instagram',
    'footer.tiktok': 'Reprize on TikTok',
    'footer.rights': 'All rights reserved.',
    'legal.updated': 'Last updated',
    'legal.backHome': 'Back to home',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['pt-BR'];

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[locale][key];
}

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export const SUPPORT_EMAIL = 'contato@reprizeapp.com';

/** Official profiles, handle @reprize.app on both networks. Used by the footer and the structured data. */
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/reprize.app',
  tiktok: 'https://www.tiktok.com/@reprize.app',
} as const;
