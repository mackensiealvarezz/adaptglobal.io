export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://adaptglobal.io/sitemap.xml',
  };
}
