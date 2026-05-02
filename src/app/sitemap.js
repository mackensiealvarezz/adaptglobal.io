export default function sitemap() {
  const base = 'https://adaptglobal.io';
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/platform/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/studios-broadcasters/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/creators/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/press/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
