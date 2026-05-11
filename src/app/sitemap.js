import { getAllArticles } from '../lib/press.js';

export default function sitemap() {
  const base = 'https://adaptglobal.io';

  const pressArticles = getAllArticles().map(a => ({
    url: `${base}/press/${a.slug}/`,
    lastModified: new Date(a.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [
    { url: `${base}/`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/platform/`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/studios-broadcasters/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/creators/`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about/`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/press/`,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    ...pressArticles,
  ];
}
