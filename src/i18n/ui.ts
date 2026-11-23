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
    'partner.metaTitle': 'Desconto no Reprize PRO',
    'partner.metaDescription': 'Você recebeu um código de indicação com desconto no Reprize PRO.',
    'partner.eyebrow': 'Código de indicação',
    'partner.title': 'Você recebeu um desconto no Reprize PRO',
    'partner.body': 'Baixe o app e use o código abaixo para ativar o desconto.',
    'partner.codeLabel': 'Seu código',
    'partner.copy': 'Copiar código',
    'partner.copied': 'Código copiado',
    'partner.openApp': 'Já tenho o app',
    'partner.stepsIos': 'No iPhone: baixe o app, volte a esta página e toque em "Já tenho o app". Ative o desconto dentro do app para a indicação ser registrada.',
    'partner.stepsAndroid': 'No Android o código é aplicado sozinho quando você abre o app.',
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
    'partner.metaTitle': 'Discount on Reprize PRO',
    'partner.metaDescription': 'You received a referral code with a discount on Reprize PRO.',
    'partner.eyebrow': 'Referral code',
    'partner.title': 'You received a discount on Reprize PRO',
    'partner.body': 'Download the app and use the code below to get the discount.',
    'partner.codeLabel': 'Your code',
    'partner.copy': 'Copy code',
    'partner.copied': 'Code copied',
    'partner.openApp': 'I already have the app',
    'partner.stepsIos': 'On iPhone: download the app, return to this page and tap "I already have the app". Activate the discount inside the app so the referral is recorded.',
    'partner.stepsAndroid': 'On Android the code is applied by itself when you open the app.',
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

export const SUPPORT_EMAIL = 'reprize.app@gmail.com';

/** Official profiles, handle @reprize.app on both networks. Used by the footer and the structured data. */
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/reprize.app',
  tiktok: 'https://www.tiktok.com/@reprize.app',
} as const;
