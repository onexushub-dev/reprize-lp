# Créditos e preparo das mídias

Todas as mídias de esportes vêm do [Pexels](https://www.pexels.com/license/), de licença gratuita para uso comercial. A licença não permite sugerir que as pessoas retratadas endossam o produto. Se as imagens forem trocadas por filmagem própria, remova esta lista e o crédito "Fotos e vídeos: Pexels" da seção de esportes.

## Fotos (carrossel "Feito para a areia")

Cada foto foi baixada em alta resolução e cortada uma vez em 4:5 (1080x1350) em volta do atleta. Cortar depois de reduzir a foto inteira, como era antes, deixava as fotos largas borradas.

| Arquivo em `src/assets/sports` | Pexels | Cena |
|---|---|---|
| `beach-tennis.jpg` | foto 20655636 | Beach tennis, duas jogadoras na areia |
| `footvolley.jpg` | foto 38179542 | Chute de bicicleta junto à rede |
| `beach-volleyball.jpg` | foto 37962307 | Vôlei de praia em Lloret de Mar |
| `volleyball.jpg` | foto 34544419 | Vôlei de quadra fechada |
| `tennis.jpg` | foto 18016912 | Tênis, saque em quadra de saibro |
| `padel.jpg` | foto 35248400 | Padel, jogadora avançando |
| `table-tennis.jpg` | foto 38233887 | Tênis de mesa |
| `basketball.jpg` | foto 30053813 | Basquete, enterrada |
| `handball.jpg` | foto 25048041 | Handebol, jogadora no ar em partida |
| `futsal.jpg` | foto 37097046 | Futsal |
| `society-football.jpg` | foto 39095099 | Futebol society, disputa de bola |
| `snooker.jpg` | foto 5055799 | Sinuca, casal na mesa |

## Vídeos dos celulares

| Arquivos em `public/media` | Pexels | Onde aparece |
|---|---|---|
| `beach-tennis-hero.mp4` e `.webp` | vídeo fornecido pela equipe (`Gustavorusso_video_no_watermark.mp4`), não é do Pexels | Celular do hero (tela de gravação) |
| `beach-tennis-editor.mp4` e `.webp` | vídeo fornecido pela equipe (`mari_video_no_watermark.mp4`), não é do Pexels | Celular da seção de edição |

Como foram gerados (ffmpeg, partindo dos arquivos Full HD):

- **Hero** (proporção da tela do celular, cerca de 0,458): vídeo vertical de 576x1024 e 11,4 s, corte central de 468x1024, escala para 540x1180, 30 fps, sem áudio. O pôster é o quadro de 1,2 s.
- **Editor** (palco da tela de edição do app, cerca de 0,96 de largura por altura, que ocupa todo o espaço acima dos controles): vídeo vertical de 576x1024, trecho de 9,0 s a 14,4 s (5,4 s) de uma troca de bolas. O Modo Foco é simulado quadro a quadro: o enquadramento começa aberto, dá zoom (até 1,6x) e acompanha as jogadoras, suavizado, e sai em 540x562 a 30 fps, sem áudio.
- O hero e o editor entram e saem do preto em 0,3 s para o loop não "pular". Codificação H.264 (crf 27, `+faststart`), cerca de 1,5 MB e 360 KB, mais um pôster WebP de cada.

Se mudar o tamanho dos celulares ou o layout das telas (`src/styles/home.css`), refaça os cortes para manter a proporção do palco, senão o vídeo é recortado pelo `object-fit: cover`. As telas do celular reproduzem as do app (textos e componentes de `reprize/app`: RecordingPanel, SavedOverlay, ClipEdit); se o app mudar, atualize-as.

## Fotos das avaliações (provisórias)

Retratos genéricos do Pexels de pessoas praticando esporte, só para ocupar o lugar até chegarem as fotos reais de cada pessoa. Em `src/assets/people/`, recortados em quadrado ao redor do rosto. Devem ser trocados antes de divulgar a página: foto de desconhecido ao lado de um nome sugere que aquela pessoa aprova o app.

| Arquivo | Pexels | Cena |
|---|---|---|
| `marcus.jpg` | foto 4719828 | Basquete, homem quicando a bola |
| `sara.jpg` | foto 38136059 | Beach tênis, jogadora de óculos esportivos |
| `lorenzo.jpg` | foto 12169306 | Vôlei de praia, homem sorrindo |
| `lyandra.jpg` | foto 5836907 | Tênis, mulher de rabo de cavalo |
| `victor.jpg` | foto 8084773 | Basquete, homem sorrindo junto à tabela |
| `yasmin.jpg` | foto 20823437 | Padel, jogadora na rede |
