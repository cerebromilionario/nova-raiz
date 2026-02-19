import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter(p => !p.data.draft)
    .sort((a,b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Nova Raiz — Artigos',
    description: 'Novos artigos sobre mudança para o interior, planejamento, cidades, trabalho remoto, vida real e autossuficiência.',
    site: context.site ?? 'https://novaraiz.netlify.app',
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.slug}/`,
    })),
    customData: `<language>pt-br</language>`,
  });
}
