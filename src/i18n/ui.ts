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
    'nav.terms': 'Termos',
    'lang.label': 'Idioma',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Em breve',
    'store.availableOn': 'Baixar na',
    'footer.company':
      'Reprize é um produto da Nexus Hub, CNPJ 64.669.130/0001-02, São Paulo/SP.',
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
    'nav.terms': 'Terms',
    'lang.label': 'Language',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Coming soon',
    'store.availableOn': 'Download on',
    'footer.company':
      'Reprize is a product of Nexus Hub, Brazilian company registration (CNPJ) 64.669.130/0001-02, São Paulo, Brazil.',
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

export const SUPPORT_EMAIL = 'reprize.app@gmail.com';

/** Official profiles, handle @reprize.app on both networks. Used by the footer and the structured data. */
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/reprize.app',
  tiktok: 'https://www.tiktok.com/@reprize.app',
} as const;
