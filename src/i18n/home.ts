import type { Locale } from './ui';
import { PLAN_PRICES as P, PLAN_PRICES_USD as PU } from '../data/plans';

export type TestimonialKey = 'marcus' | 'sara' | 'lorenzo' | 'lyandra' | 'victor' | 'yasmin';
export type TriggerKey = 'tap' | 'gesture' | 'voice' | 'watch' | 'bluetooth' | 'phone';
export type SportKey =
  | 'beachTennis'
  | 'footvolley'
  | 'beachVolley'
  | 'tennis'
  | 'padel'
  | 'tableTennis'
  | 'volleyball'
  | 'basketball'
  | 'handball'
  | 'futsal'
  | 'societyFootball'
  | 'snooker'
  | 'any';

export interface HomeCopy {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    screen: {
      rec: string;
      plays: string;
      buffer: string;
      hint: string;
      savedTitle: string;
      savedVia: string;
    };
  };
  facts: string[];
  how: {
    title: string;
    subtitle: string;
    steps: { title: string; body: string }[];
  };
  triggers: {
    title: string;
    subtitle: string;
    items: Record<TriggerKey, { title: string; body: string }>;
  };
  editor: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; body: string }[];
    screen: { cut: string; speed: string; focus: string; zoom: string; save: string; share: string };
  };
  privacy: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    link: string;
    ring: { center: string; label: string; kept: string };
  };
  sports: {
    title: string;
    subtitle: string;
    credit: string;
    nav: { region: string; prev: string; next: string; slide: string };
    items: Record<SportKey, { title: string; body: string; alt: string }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Record<TestimonialKey, { tag: string; quote: string }>;
  };
  plans: {
    title: string;
    subtitle: string;
    free: { name: string; price: string; period: string; items: string[] };
    pass: { name: string; price: string; period: string; items: string[] };
    proMonthly: { name: string; price: string; period: string; alt: string; badge: string; items: string[] };
    proYearly: { name: string; price: string; period: string; alt: string; badge: string; items: string[] };
    note: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  cta: { title: string; subtitle: string; legal: string };
  stickyLabel: string;
}

const ptBR: HomeCopy = {
  hero: {
    eyebrow: 'Replay para quem joga',
    title: 'Seu lance. De novo.',
    subtitle:
      'Apoie o celular, jogue à vontade e guarde só a jogada que valeu. Sem cadastro, sem nuvem.',
    note: 'Grátis para começar · Para iPhone',
    screen: {
      rec: 'Gravando',
      plays: 'Lances',
      buffer: 'Últimos 15s prontos',
      hint: 'Acene com os braços para salvar',
      savedTitle: 'Clipe #3 salvo',
      savedVia: 'via gesto · 15s',
    },
  },
  facts: ['Sem cadastro', 'Tudo fica no seu celular', 'Grátis, com gravações ilimitadas'],
  how: {
    title: 'Grave tudo. Guarde só o melhor.',
    subtitle: 'Três passos entre o ponto e o post.',
    steps: [
      {
        title: 'Posicione',
        body: 'Num ponto firme, de frente para o jogo. O Reprize mostra o guia da quadra e o nível do horizonte.',
      },
      {
        title: 'Jogue',
        body: 'A câmera grava o tempo todo, mas só guarda os instantes mais recentes. O que fica para trás some sozinho.',
      },
      {
        title: 'Salve',
        body: 'Mandou bem? Acene, fale, toque ou use o relógio. O lance vai para o seu celular, pronto para postar.',
      },
    ],
  },
  triggers: {
    title: 'Salve sem tirar o olho do jogo.',
    subtitle: 'Seis jeitos de acionar o lance. Use o que cabe no seu jogo.',
    items: {
      tap: { title: 'Toque na tela', body: 'O básico: um toque em qualquer lugar salva o lance.' },
      gesture: {
        title: 'Braços no alto',
        body: 'Levante os dois braços e o app salva. Funciona com quem estiver no quadro.',
      },
      voice: {
        title: 'Diga “salvar”',
        body: 'Comando de voz processado no próprio aparelho. Nenhum áudio vai para a nuvem.',
      },
      watch: {
        title: 'Apple Watch',
        body: 'Um botão grande no pulso. O relógio vibra quando o lance é salvo.',
      },
      bluetooth: {
        title: 'Controle Bluetooth',
        body: 'Use o botão de um controle Bluetooth de câmera ou selfie.',
      },
      phone: {
        title: 'Segundo celular',
        body: 'Transforme outro iPhone em controle: salve o lance, veja a câmera ao vivo e encerre a gravação de perto da quadra.',
      },
    },
  },
  editor: {
    eyebrow: 'Edição',
    title: 'Do lance ao post em dois toques.',
    subtitle: 'Corte no ponto certo, ajuste a velocidade e mande para onde quiser.',
    items: [
      { title: 'Corte preciso', body: 'Ajuste onde o lance começa e termina, dentro do trecho que o Reprize guardou.' },
      { title: 'Velocidade, zoom e giro', body: 'Acelere, desacelere e enquadre o lance do jeito que ele merece.' },
      {
        title: 'Modo Foco',
        body: 'No iPhone, o enquadramento acompanha a jogada como numa transmissão de TV. Desliga com um toque.',
      },
      {
        title: 'Galeria ou compartilhar',
        body: 'Salve na galeria ou envie para qualquer app, um clipe ou vários de uma vez.',
      },
      { title: 'Compilação de clipes', body: 'Junte os clipes de uma gravação num vídeo só. Recurso do PRO.' },
    ],
    screen: { cut: 'Corte', speed: 'Velocidade', focus: 'Foco', zoom: 'Zoom', save: 'Salvar', share: 'Enviar' },
  },
  privacy: {
    eyebrow: 'Privacidade',
    title: 'Grava tudo. Guarda só o lance.',
    body: 'Enquanto você joga, o Reprize mantém só os instantes mais recentes numa memória temporária do celular. O que fica para trás é apagado na hora. Só os lances que você salva permanecem.',
    bullets: [
      'Sem conta e sem login',
      'Nenhum vídeo vai para os nossos servidores',
      'Gesto e voz reconhecidos no próprio aparelho',
    ],
    link: 'Ler a Política de Privacidade',
    ring: { center: 'Agora', label: 'memória temporária', kept: 'lance salvo' },
  },
  sports: {
    title: 'Qualquer esporte. Qualquer quadra.',
    subtitle: 'Prenda o celular, comece a gravar e jogue. O Reprize não liga para a modalidade.',
    credit: 'Fotos e vídeos: Pexels.',
    nav: { region: 'Esportes', prev: 'Esporte anterior', next: 'Próximo esporte', slide: 'Esporte {n} de {total}' },
    items: {
      beachTennis: {
        title: 'Beach tennis',
        body: 'Rali curto, bola rápida, ponto que some em dois segundos.',
        alt: 'Duas jogadoras de beach tennis rindo na areia, com as raquetes nas mãos',
      },
      footvolley: {
        title: 'Futevôlei',
        body: 'Peito, pé e cabeça: a jogada que ninguém viu direito.',
        alt: 'Jogador de futevôlei executando uma bicicleta ao lado da rede',
      },
      beachVolley: {
        title: 'Vôlei de praia',
        body: 'Ataque, bloqueio e defesa na raça, sempre de novo.',
        alt: 'Jogo de vôlei de praia em Lloret de Mar, com um jogador saltando para atacar perto da rede',
      },
      tennis: {
        title: 'Tênis',
        body: 'Saque, devolução e passada: o ponto que decide o game.',
        alt: 'Tenista sacando em uma quadra de saibro',
      },
      padel: {
        title: 'Padel',
        body: 'Rali com parede, bandeja e smash. O ponto que parecia perdido.',
        alt: 'Jogadora de padel avançando com a raquete em uma quadra coberta',
      },
      tableTennis: {
        title: 'Tênis de mesa',
        body: 'Efeito, reflexo e uma bola que some em um segundo.',
        alt: 'Mesatenista concentrado em plena jogada, com a bola à frente do rosto',
      },
      volleyball: {
        title: 'Vôlei',
        body: 'Levantamento, cortada e bloqueio na quadra fechada.',
        alt: 'Jogadoras de vôlei em quadra fechada, em pleno salto de ataque',
      },
      basketball: {
        title: 'Basquete',
        body: 'Enterrada, bandeja e bola de três: o lance que vira replay.',
        alt: 'Jogador de basquete no ar durante uma enterrada em ginásio',
      },
      handball: {
        title: 'Handebol',
        body: 'Salto, arremesso e defesa em uma fração de segundo.',
        alt: 'Jogadora de handebol no ar durante um arremesso',
      },
      futsal: {
        title: 'Futsal',
        body: 'Drible curto, chute forte e gol em espaço apertado.',
        alt: 'Jogador de futsal correndo com a bola em quadra coberta',
      },
      societyFootball: {
        title: 'Futebol society',
        body: 'Golaço no sintético e jogada de craque entre amigos.',
        alt: 'Dois jogadores disputando a bola em um jogo de futebol society',
      },
      snooker: {
        title: 'Sinuca',
        body: 'A tacada perfeita também merece um replay.',
        alt: 'Um jogador mira a tacada em uma mesa de sinuca enquanto uma mulher observa',
      },
      any: {
        title: 'Qualquer esporte',
        body: 'Se tem esporte, tem lance. É só prender o celular e jogar.',
        alt: '',
      },
    },
  },
  testimonials: {
    title: 'Quem já testou conta.',
    subtitle: 'O que quem jogou com o Reprize mais gostou.',
    items: {
      marcus: {
        tag: 'Basquete',
        quote: 'Que app bom, mudou o meu jeito de jogar. E salvar o lance pelo Apple Watch é demais.',
      },
      lorenzo: {
        tag: 'Society',
        quote: 'Que ideia genial, uso em todo jogo. Editar e postar é fácil demais.',
      },
      victor: {
        tag: 'Basquete',
        quote: 'Esse app é show, grava tudo e eu não perco lance nenhum. E a memória do celular nunca enche.',
      },
      sara: {
        tag: 'Beach tennis',
        quote: 'Adorei o Reprize, é simples de usar. É só levantar os braços e o lance tá salvo.',
      },
      lyandra: {
        tag: 'Futevôlei',
        quote: 'Que app incrível, meus vídeos ficaram com cara de profissional. O Modo Foco acompanha a jogada sozinho.',
      },
      yasmin: {
        tag: 'Beach tennis',
        quote: 'Gostei demais do Reprize. Sem cadastro e sem mandar vídeo para a nuvem, fico tranquila.',
      },
    },
  },
  plans: {
    title: 'Comece grátis. Pague só se precisar de mais.',
    subtitle: 'Sem cadastro para testar. Você só passa pelo pagamento quando quiser liberar tudo.',
    free: {
      name: 'Grátis',
      price: P.free,
      period: 'para sempre',
      items: [
        'Gravações e clipes ilimitados',
        `Grava em Full HD, clipes de até ${P.freeClipSeconds}s`,
        'Todos os jeitos de salvar, menos o Apple Watch',
        'No app: som, Modo Foco, velocidade e edição',
        'Vídeo salvo em HD, sem som e sem Foco, com marca d’água',
      ],
    },
    pass: {
      name: 'Passe Avulso',
      price: P.singlePass,
      period: 'uma gravação',
      items: [
        'Libera uma gravação grátis que você já fez',
        'Full HD, som e Modo Foco, sem marca d’água',
        'Compilação dos clipes dessa gravação',
        'Pagamento único, sem assinatura',
      ],
    },
    proMonthly: {
      name: 'Pro Mensal',
      price: P.proMonthly,
      period: 'por mês',
      alt: 'Renova todo mês, cancele quando quiser',
      badge: `${P.trialDays} dias grátis`,
      items: [
        `${P.trialDays} dias grátis para testar`,
        'Gravação em 4K e clipes de até 60s',
        'Vídeo em Full HD ou 4K, com som e Modo Foco, sem marca d’água',
        'Compilação de clipes e Apple Watch',
      ],
    },
    proYearly: {
      name: 'Pro Anual',
      price: P.proYearly,
      period: 'por ano',
      alt: `Cerca de ${P.proYearlyPerMonth} por mês · economia de ${P.yearlySavingsPercent}%`,
      badge: 'Recomendado',
      items: [
        `${P.trialDays} dias grátis para testar`,
        'Gravação em 4K e clipes de até 60s',
        'Vídeo em Full HD ou 4K, com som e Modo Foco, sem marca d’água',
        'Compilação de clipes e Apple Watch',
      ],
    },
    note: 'Cancele quando quiser nas configurações da App Store. Antes de salvar ou enviar no Grátis, o app mostra o que o PRO acrescenta ao vídeo.',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        q: 'Meus vídeos vão para a nuvem?',
        a: 'Não. Tudo fica no seu celular: o Reprize não tem cadastro nem servidor de vídeos. Os detalhes estão na Política de Privacidade.',
      },
      {
        q: 'O app grava o jogo inteiro?',
        a: 'Ele grava o tempo todo, mas só guarda os instantes mais recentes numa memória temporária do celular. O que fica para trás é apagado. Só os lances que você salva permanecem.',
      },
      {
        q: 'O celular esquenta? E a bateria?',
        a: 'Gravar vídeo continuamente exige do aparelho. O Reprize apaga a tela depois de alguns segundos sem toque para poupar bateria e, se o celular esquentar, reduz a qualidade aos poucos (primeiro Full HD a 30 quadros, depois 720p) e avisa na tela. Se esquentar demais, a gravação para para proteger o aparelho. Em dia de sol forte, deixe o celular na sombra.',
      },
      {
        q: 'Funciona em quais celulares?',
        a: 'No iPhone. A versão para Android está em preparação.',
      },
      {
        q: 'Preciso de internet?',
        a: 'Para gravar e editar, não. A internet só entra nas compras e quando você compartilha o vídeo.',
      },
      {
        q: 'Tem limite de gravações no plano Grátis?',
        a: 'Não. Gravações e clipes são ilimitados. O plano muda só a duração do clipe, a gravação em 4K, o que sai do app ao salvar ou enviar, a compilação de clipes e o Apple Watch.',
      },
      {
        q: 'Qual a diferença entre Grátis, Passe e Pro?',
        a: 'No Grátis, as gravações são ilimitadas, em Full HD, com clipes de até 15 segundos. No app tudo funciona: som, Modo Foco, velocidade, zoom e corte. Ao salvar ou enviar, o vídeo sai em HD, sem som e sem Modo Foco, com marca d’água (a velocidade vai no vídeo), e o app avisa isso antes de exportar. O Passe Avulso libera, numa gravação grátis que você já fez, a exportação em Full HD com som e Modo Foco, sem marca d’água, e a compilação dos clipes dela. O Pro libera isso em todas as gravações, e ainda traz gravação em 4K, clipes de até 60 segundos, compilação de clipes e o Apple Watch.',
      },
      {
        q: 'Como cancelo o Pro?',
        a: 'Pelas configurações da sua conta Apple. Quem cancela até 24 horas antes do fim do teste de 7 dias não é cobrado.',
      },
      {
        q: 'Posso gravar outras pessoas?',
        a: 'Pode, com cuidado: avise e, antes de publicar, peça autorização de quem aparece no vídeo, principalmente se forem crianças. Não grave em vestiários ou outros locais íntimos.',
      },
    ],
  },
  cta: {
    title: 'Nenhum lance perdido.',
    subtitle: 'Baixe o Reprize e deixe o celular ligado na quadra. O resto é jogo.',
    legal: 'Disponível para iPhone. Android em breve.',
  },
  stickyLabel: 'Baixar o Reprize',
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'Replay for players',
    title: 'Your play. Again.',
    subtitle:
      'Set the phone down, play on, and keep only the play that mattered. No sign-up, no cloud.',
    note: 'Free to start · For iPhone',
    screen: {
      rec: 'Recording',
      plays: 'Plays',
      buffer: 'Last 15s ready',
      hint: 'Wave your arms to save',
      savedTitle: 'Clip #3 saved',
      savedVia: 'via gesture · 15s',
    },
  },
  facts: ['No sign-up', 'Everything stays on your phone', 'Free, with unlimited recordings'],
  how: {
    title: 'Record everything. Keep the best.',
    subtitle: 'Three steps from the point to the post.',
    steps: [
      {
        title: 'Position',
        body: 'Somewhere steady, facing the game. Reprize shows a court guide and the horizon level.',
      },
      {
        title: 'Play',
        body: 'The camera records nonstop but only holds on to the most recent moments. What falls behind disappears on its own.',
      },
      {
        title: 'Save',
        body: 'Nailed it? Wave, speak, tap or use your watch. The play lands on your phone, ready to post.',
      },
    ],
  },
  triggers: {
    title: 'Save it without taking your eyes off the game.',
    subtitle: 'Six ways to save a play. Use whatever fits your game.',
    items: {
      tap: { title: 'Tap the screen', body: 'The basic one: a tap anywhere saves the play.' },
      gesture: {
        title: 'Arms up',
        body: 'Raise both arms and the app saves it. Works for anyone in the frame.',
      },
      voice: {
        title: 'Say “save”',
        body: 'Voice command processed on the device itself. No audio goes to the cloud.',
      },
      watch: {
        title: 'Apple Watch',
        body: 'A big button on your wrist. The watch buzzes when the play is saved.',
      },
      bluetooth: {
        title: 'Bluetooth remote',
        body: 'Use the button on a Bluetooth camera or selfie remote.',
      },
      phone: {
        title: 'Second phone',
        body: 'Turn another iPhone into a remote: save the play, watch the camera live and end the recording from courtside.',
      },
    },
  },
  editor: {
    eyebrow: 'Editing',
    title: 'From play to post in two taps.',
    subtitle: 'Trim at the right spot, adjust the speed and send it anywhere.',
    items: [
      { title: 'Precise trim', body: 'Set where the play starts and ends, within the stretch Reprize kept.' },
      { title: 'Speed, zoom and rotate', body: 'Speed it up, slow it down and frame the play the way it deserves.' },
      {
        title: 'Focus Mode',
        body: 'On iPhone, the framing follows the play like a TV broadcast. Turn it off with one tap.',
      },
      {
        title: 'Gallery or share',
        body: 'Save to your gallery or send it to any app, one clip or several at once.',
      },
      { title: 'Clip compilations', body: 'Join a recording’s clips into a single video. A PRO feature.' },
    ],
    screen: { cut: 'Trim', speed: 'Speed', focus: 'Focus', zoom: 'Zoom', save: 'Save', share: 'Share' },
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Records everything. Keeps only the play.',
    body: 'While you play, Reprize keeps only the most recent moments in your phone’s temporary memory. What falls behind is deleted on the spot. Only the plays you save stay.',
    bullets: [
      'No account, no login',
      'No video ever reaches our servers',
      'Gesture and voice recognized on the device',
    ],
    link: 'Read the Privacy Policy',
    ring: { center: 'Now', label: 'temporary memory', kept: 'saved play' },
  },
  sports: {
    title: 'Any sport. Any court.',
    subtitle: 'Mount the phone, start recording and play. Reprize does not care which sport it is.',
    credit: 'Photos and videos: Pexels.',
    nav: { region: 'Sports', prev: 'Previous sport', next: 'Next sport', slide: 'Sport {n} of {total}' },
    items: {
      beachTennis: {
        title: 'Beach tennis',
        body: 'Short rally, fast ball, a point gone in two seconds.',
        alt: 'Two beach tennis players laughing on the sand, rackets in hand',
      },
      footvolley: {
        title: 'Footvolley',
        body: 'Chest, foot and head: the play nobody quite saw.',
        alt: 'Footvolley player performing a bicycle kick next to the net',
      },
      beachVolley: {
        title: 'Beach volleyball',
        body: 'Spike, block and dig with grit, again and again.',
        alt: 'Beach volleyball game in Lloret de Mar, with a player leaping to spike near the net',
      },
      tennis: {
        title: 'Tennis',
        body: 'Serve, return and passing shot: the point that decides the game.',
        alt: 'Tennis player serving on a clay court',
      },
      padel: {
        title: 'Padel',
        body: 'Wall rallies, bandejas and smashes. The point that looked lost.',
        alt: 'Padel player stepping forward with the racket on an indoor court',
      },
      tableTennis: {
        title: 'Table tennis',
        body: 'Spin, reflexes and a ball gone in one second.',
        alt: 'Table tennis player mid-play with the ball in front of the face',
      },
      volleyball: {
        title: 'Volleyball',
        body: 'Set, spike and block on the indoor court.',
        alt: 'Volleyball players on an indoor court, mid-air on an attack',
      },
      basketball: {
        title: 'Basketball',
        body: 'Dunks, layups and threes: the play that becomes a replay.',
        alt: 'Basketball player in the air during a dunk in a gym',
      },
      handball: {
        title: 'Handball',
        body: 'Jump, shot and save in a split second.',
        alt: 'Handball player in the air during a shot',
      },
      futsal: {
        title: 'Futsal',
        body: 'Quick dribble, hard shot and a goal in a tight space.',
        alt: 'Futsal player running with the ball on an indoor court',
      },
      societyFootball: {
        title: 'Five-a-side football',
        body: 'A screamer on turf and a star move among friends.',
        alt: 'Two players contesting the ball in a five-a-side football match',
      },
      snooker: {
        title: 'Snooker',
        body: 'The perfect shot deserves a replay too.',
        alt: 'A player lines up a shot on a pool table while a woman watches',
      },
      any: {
        title: 'Any sport',
        body: 'If there is a sport, there is a play. Just mount the phone and play.',
        alt: '',
      },
    },
  },
  testimonials: {
    title: 'Hear it from people who tested it.',
    subtitle: 'What players liked most about Reprize.',
    items: {
      marcus: {
        tag: 'Basketball',
        quote: 'Such a great app, it changed how I play. And saving the play from my Apple Watch is amazing.',
      },
      lorenzo: {
        tag: 'Five-a-side',
        quote: 'Genius idea, I use it every game. Editing and posting is ridiculously easy.',
      },
      victor: {
        tag: 'Basketball',
        quote: 'This app is awesome, it records everything and I never miss a play. And my phone storage never fills up.',
      },
      sara: {
        tag: 'Beach tennis',
        quote: 'Loved Reprize, it is so simple to use. Just raise your arms and the play is saved.',
      },
      lyandra: {
        tag: 'Footvolley',
        quote: 'Such an amazing app, my videos look professional now. Focus Mode follows the play on its own.',
      },
      yasmin: {
        tag: 'Beach tennis',
        quote: 'I really like Reprize. No sign-up and no videos sent to the cloud, so I feel at ease.',
      },
    },
  },
  plans: {
    title: 'Start free. Pay only if you need more.',
    subtitle: 'No sign-up to try it. You only meet a payment screen when you want to unlock everything.',
    free: {
      name: 'Free',
      price: PU.free,
      period: 'forever',
      items: [
        'Unlimited recordings and clips',
        `Records in Full HD, clips up to ${PU.freeClipSeconds}s`,
        'Every way to save a play, except the Apple Watch',
        'In the app: sound, Focus Mode, speed and editing',
        'Saved video in HD, no sound and no Focus, with a watermark',
      ],
    },
    pass: {
      name: 'Single Pass',
      price: PU.singlePass,
      period: 'one recording',
      items: [
        'Unlocks a free recording you already made',
        'Full HD, sound and Focus Mode, no watermark',
        'Compiling that recording’s clips',
        'One-time payment, no subscription',
      ],
    },
    proMonthly: {
      name: 'Pro Monthly',
      price: PU.proMonthly,
      period: 'per month',
      alt: 'Renews monthly, cancel anytime',
      badge: `${PU.trialDays}-day free trial`,
      items: [
        `${PU.trialDays}-day free trial`,
        '4K recording and clips up to 60s',
        'Full HD or 4K video, with sound and Focus Mode, no watermark',
        'Clip compilations and Apple Watch',
      ],
    },
    proYearly: {
      name: 'Pro Yearly',
      price: PU.proYearly,
      period: 'per year',
      alt: `About ${PU.proYearlyPerMonth} per month · save ${PU.yearlySavingsPercent}%`,
      badge: 'Recommended',
      items: [
        `${PU.trialDays}-day free trial`,
        '4K recording and clips up to 60s',
        'Full HD or 4K video, with sound and Focus Mode, no watermark',
        'Clip compilations and Apple Watch',
      ],
    },
    note: 'Cancel anytime in your App Store settings. Before you save or send on Free, the app shows what PRO adds to the video.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Do my videos go to the cloud?',
        a: 'No. Everything stays on your phone: Reprize has no sign-up and no video servers. Details are in the Privacy Policy.',
      },
      {
        q: 'Does the app record the whole game?',
        a: 'It records nonstop but only keeps the most recent moments in your phone’s temporary memory. What falls behind is deleted. Only the plays you save stay.',
      },
      {
        q: 'Does the phone overheat? What about battery?',
        a: 'Recording video continuously is demanding. Reprize turns the screen off after a few seconds without a touch to save battery and, if the phone warms up, lowers the quality step by step (Full HD at 30 fps first, then 720p) and tells you on screen. If it gets too hot, the recording stops to protect the device. On a sunny day, keep the phone in the shade.',
      },
      {
        q: 'Which phones does it work on?',
        a: 'iPhone. The Android version is in the works.',
      },
      {
        q: 'Do I need internet?',
        a: 'Not to record or edit. The internet is only used for purchases and when you share a video.',
      },
      {
        q: 'Is there a limit on recordings on the Free plan?',
        a: 'No. Recordings and clips are unlimited. The plan only changes the clip length, 4K recording, what leaves the app when you save or send, compiling clips and the Apple Watch.',
      },
      {
        q: 'What is the difference between Free, Pass and Pro?',
        a: 'On Free, recordings are unlimited, in Full HD, with clips up to 15 seconds. Everything works in the app: sound, Focus Mode, speed, zoom and trim. When you save or send, the video comes out in HD, with no sound and no Focus Mode, with a watermark (the speed you chose is kept), and the app tells you so before exporting. The Single Pass unlocks, on a free recording you already made, Full HD export with sound and Focus Mode, no watermark, and compiling its clips. Pro unlocks that on every recording, and adds 4K recording, clips up to 60 seconds, compiling clips and the Apple Watch.',
      },
      {
        q: 'How do I cancel Pro?',
        a: 'In your Apple account settings. If you cancel at least 24 hours before the 7-day trial ends, you are not charged.',
      },
      {
        q: 'Can I record other people?',
        a: 'Yes, with care: tell them and, before publishing, get permission from whoever appears in the video, especially children. Do not record in locker rooms or other private places.',
      },
    ],
  },
  cta: {
    title: 'No play missed.',
    subtitle: 'Download Reprize and leave the phone running on the court. The rest is just playing.',
    legal: 'Available for iPhone. Android coming soon.',
  },
  stickyLabel: 'Get Reprize',
};

export const homeCopy: Record<Locale, HomeCopy> = { 'pt-BR': ptBR, en };
