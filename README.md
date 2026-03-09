# Nova Raiz (Astro + Tailwind + Blog)

## Rodar local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy Netlify
- Build command: `npm run build`
- Publish directory: `dist`

## Monetização com Google AdSense
- O layout base já injeta o script global do AdSense e a meta `google-adsense-account`.
- Para trocar o publisher, defina a variável de ambiente `PUBLIC_ADSENSE_CLIENT_ID` com o formato `ca-pub-XXXXXXXXXXXXXXX`.
- Garanta que `public/ads.txt` esteja atualizado com o mesmo publisher ID.

### Checklist rápido de aprovação
- Política de privacidade publicada e acessível no rodapé.
- Termos de uso publicados.
- Página de contato publicada.
- Conteúdo original em volume suficiente e sem páginas “vazias”.
- Navegação clara (menu, categorias e páginas institucionais).
